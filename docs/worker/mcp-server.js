// Built worker plugin: mcp-server
// Generated on: 2025-05-26T19:48:11.723Z

// src/worker/plugins/mcp-server.ts
var MCPServerWorker = {
  id: "mcp-server",
  // Private state
  _tools: /* @__PURE__ */ new Map(),
  _isInitialized: false,
  // Track registered components to prevent duplicates
  _registeredComponents: /* @__PURE__ */ new Set(),
  /**
   * Initialize the MCP server
   */
  async initialize() {
    try {
      this._isInitialized = true;
      console.log("MCP Server initialized");
      return { status: "success", message: "MCP Server initialized" };
    } catch (error) {
      return {
        status: "error",
        message: `Failed to initialize MCP Server: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  },
  /**
   * Process a direct MCP protocol JSON-RPC message
   */
  async processMCPMessage(message) {
    try {
      if (!message.jsonrpc || message.jsonrpc !== "2.0" || !message.method) {
        return {
          jsonrpc: "2.0",
          error: {
            code: -32600,
            message: "Invalid Request"
          },
          id: message.id || null
        };
      }
      switch (message.method) {
        case "tools/list":
          return this._handleToolsList(message);
        case "tools/call":
          return this._handleToolsCall(message);
        default:
          return {
            jsonrpc: "2.0",
            error: {
              code: -32601,
              message: `Method ${message.method} not found`
            },
            id: message.id || null
          };
      }
    } catch (error) {
      return {
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: `Internal error: ${error instanceof Error ? error.message : String(error)}`
        },
        id: message.id || null
      };
    }
  },
  /**
   * Handle tools/list MCP method
   */
  async _handleToolsList(message) {
    const tools = await this.getAvailableTools();
    return {
      jsonrpc: "2.0",
      result: tools,
      id: message.id || null
    };
  },
  /**
   * Handle tools/call MCP method
   */
  async _handleToolsCall(message) {
    const params = message.params;
    if (!params || typeof params !== "object") {
      return {
        jsonrpc: "2.0",
        error: {
          code: -32602,
          message: "Invalid params"
        },
        id: message.id || null
      };
    }
    const { name, arguments: args } = params;
    if (!name || typeof name !== "string") {
      return {
        jsonrpc: "2.0",
        error: {
          code: -32602,
          message: "Missing tool name"
        },
        id: message.id || null
      };
    }
    try {
      const result = await this.executeTool({
        name,
        arguments: args || {}
      });
      return {
        jsonrpc: "2.0",
        result,
        id: message.id || null
      };
    } catch (error) {
      return {
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: `Error executing tool: ${error instanceof Error ? error.message : String(error)}`
        },
        id: message.id || null
      };
    }
  },
  /**
   * Register a tool from an API component
   */
  async registerTool(componentId, action, description, parameters) {
    try {
      const toolName = `${componentId}.${action}`;
      if (this._tools.has(toolName)) {
        return {
          status: "error",
          message: `Tool ${toolName} is already registered`
        };
      }
      const inputSchema = {
        type: "object",
        properties: parameters || {},
        required: parameters ? Object.keys(parameters).filter((key) => parameters[key].required) : []
      };
      const tool = {
        name: toolName,
        description,
        inputSchema
      };
      const toolDef = {
        componentId,
        action,
        tool
      };
      this._tools.set(toolName, toolDef);
      this._registeredComponents.add(componentId);
      console.log(`Registered MCP tool: ${toolName}`);
      return { status: "success", message: `Tool ${toolName} registered` };
    } catch (error) {
      return {
        status: "error",
        message: `Failed to register tool: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  },
  /**
   * Unregister a tool
   */
  async unregisterTool(toolName) {
    if (!this._tools.has(toolName)) {
      return { status: "error", message: `Tool ${toolName} not found` };
    }
    this._tools.delete(toolName);
    const componentId = toolName.split(".")[0];
    let isComponentRegistered = false;
    for (const registeredTool of this._tools.keys()) {
      if (registeredTool.startsWith(componentId + ".")) {
        isComponentRegistered = true;
        break;
      }
    }
    if (!isComponentRegistered) {
      this._registeredComponents.delete(componentId);
    }
    console.log(`Unregistered MCP tool: ${toolName}`);
    return { status: "success", message: `Tool ${toolName} unregistered` };
  },
  /**
   * Get all available tools
   */
  async getAvailableTools() {
    return Array.from(this._tools.values()).map((toolDef) => toolDef.tool);
  },
  /**
   * Execute a tool call
   */
  async executeTool(toolCall) {
    const toolDef = this._tools.get(toolCall.name);
    if (!toolDef) {
      return {
        content: [{ type: "text", text: `Tool ${toolCall.name} not found` }],
        isError: true
      };
    }
    try {
      const result = await this._executeToolInMainThread(
        toolDef.componentId,
        toolDef.action,
        toolCall.arguments
      );
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(result, null, 2)
          }
        ],
        isError: false
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error executing ${toolCall.name}: ${error instanceof Error ? error.message : String(error)}`
          }
        ],
        isError: true
      };
    }
  },
  /**
   * Execute tool in main thread via postMessage
   */
  async _executeToolInMainThread(componentId, action, params) {
    return new Promise((resolve, reject) => {
      const requestId = `mcp-tool-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      let timeoutId = null;
      const messageHandler = (event) => {
        if (event.data.type === "mcp-tool-response" && event.data.requestId === requestId) {
          console.log(`MCP tool response received for ${requestId}: ${componentId}.${action}`);
          self.removeEventListener("message", messageHandler);
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
          if (event.data.error) {
            reject(new Error(event.data.error));
          } else {
            resolve(event.data.result);
          }
        }
      };
      self.addEventListener("message", messageHandler);
      console.log(`MCP tool request sent: ${requestId} for ${componentId}.${action}`);
      self.postMessage({
        type: "mcp-tool-request",
        requestId,
        componentId,
        action,
        params
      });
      timeoutId = setTimeout(() => {
        console.log(`MCP tool timeout: ${requestId} for ${componentId}.${action}`);
        self.removeEventListener("message", messageHandler);
        reject(new Error("Tool execution timeout"));
      }, 3e4);
    });
  },
  /**
   * Auto-register tools from API components list with duplicate prevention
   */
  async autoRegisterFromApiComponents(components) {
    let registered = 0;
    const errors = [];
    for (const component of components) {
      if (this._registeredComponents.has(component.id)) {
        console.log(`MCP: Skipping already registered component: ${component.id}`);
        continue;
      }
      this._registeredComponents.add(component.id);
      for (const action of component.actions) {
        try {
          const result = await this.registerTool(
            component.id,
            action.name,
            action.description,
            action.parameters
          );
          if (result.status === "success") {
            registered++;
          } else {
            errors.push(`${component.id}.${action.name}: ${result.message}`);
          }
        } catch (error) {
          errors.push(
            `${component.id}.${action.name}: ${error instanceof Error ? error.message : String(error)}`
          );
        }
      }
    }
    return {
      status: "success",
      registered,
      errors
    };
  },
  /**
   * Unregister all tools for a specific component
   */
  async unregisterComponent(componentId) {
    let unregistered = 0;
    const errors = [];
    const toolsToRemove = [];
    for (const [toolName, toolDef] of this._tools.entries()) {
      if (toolDef.componentId === componentId) {
        toolsToRemove.push(toolName);
      }
    }
    for (const toolName of toolsToRemove) {
      try {
        const result = await this.unregisterTool(toolName);
        if (result.status === "success") {
          unregistered++;
        } else {
          errors.push(`${toolName}: ${result.message}`);
        }
      } catch (error) {
        errors.push(
          `${toolName}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
    this._registeredComponents.delete(componentId);
    console.log(`MCP: Unregistered component ${componentId} with ${unregistered} tools`);
    return {
      status: "success",
      unregistered,
      errors
    };
  },
  /**
   * Get tool by name
   */
  async getTool(toolName) {
    const toolDef = this._tools.get(toolName);
    return toolDef ? toolDef.tool : null;
  },
  /**
   * Check if server is initialized
   */
  isInitialized() {
    return this._isInitialized;
  },
  /**
   * Get server stats
   */
  getStats() {
    return {
      toolCount: this._tools.size,
      isInitialized: this._isInitialized
    };
  },
  /**
   * Clean up resources
   */
  cleanup() {
    this._tools.clear();
    this._registeredComponents.clear();
    this._isInitialized = false;
    console.log("MCP Server cleaned up");
  },
  /**
   * Generic handler function that processes method calls with parameters
   */
  handle(method, params) {
    switch (method) {
      case "initialize":
        return this.initialize();
      case "registerTool":
        if (!params?.componentId || !params?.action || !params?.description) {
          return {
            status: "error",
            message: "registerTool requires componentId, action, and description"
          };
        }
        return this.registerTool(
          params.componentId,
          params.action,
          params.description,
          params.parameters
        );
      case "unregisterTool":
        if (!params?.toolName) {
          return {
            status: "error",
            message: "unregisterTool requires toolName"
          };
        }
        return this.unregisterTool(params.toolName);
      case "getAvailableTools":
        return this.getAvailableTools();
      case "executeTool":
        if (!params?.toolCall) {
          return {
            content: [
              { type: "text", text: "executeTool requires toolCall parameter" }
            ],
            isError: true
          };
        }
        return this.executeTool(params.toolCall);
      case "autoRegisterFromApiComponents":
        if (!params?.components) {
          return {
            status: "error",
            message: "autoRegisterFromApiComponents requires components array"
          };
        }
        return this.autoRegisterFromApiComponents(params.components);
      case "unregisterComponent":
        if (!params?.componentId) {
          return {
            status: "error",
            message: "unregisterComponent requires componentId"
          };
        }
        return this.unregisterComponent(params.componentId);
      case "getTool":
        if (!params?.toolName) {
          return null;
        }
        return this.getTool(params.toolName);
      case "isInitialized":
        return this.isInitialized();
      case "getStats":
        return this.getStats();
      case "cleanup":
        return this.cleanup();
      case "processMCPMessage":
        if (!params?.message) {
          return {
            jsonrpc: "2.0",
            error: {
              code: -32602,
              message: "Missing message parameter"
            },
            id: null
          };
        }
        return this.processMCPMessage(params.message);
      default:
        return { status: "error", message: `Unknown method: ${method}` };
    }
  }
};
var mcp_server_default = MCPServerWorker;
export {
  mcp_server_default as default
};
