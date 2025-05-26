// Built worker plugin: mcp-server
// Generated on: 2025-05-26T05:35:26.086Z

// src/worker/plugins/mcp-server.ts
var MCPServerWorker = {
  id: "mcp-server",
  // Private state
  _tools: /* @__PURE__ */ new Map(),
  _isInitialized: false,
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
   * Register a tool from an API component
   */
  async registerTool(componentId, action, description, parameters) {
    try {
      const toolName = `${componentId}.${action}`;
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
      const requestId = Math.random().toString(36).substr(2, 9);
      const messageHandler = (event) => {
        if (event.data.type === "mcp-tool-response" && event.data.requestId === requestId) {
          self.removeEventListener("message", messageHandler);
          if (event.data.error) {
            reject(new Error(event.data.error));
          } else {
            resolve(event.data.result);
          }
        }
      };
      self.addEventListener("message", messageHandler);
      self.postMessage({
        type: "mcp-tool-request",
        requestId,
        componentId,
        action,
        params
      });
      setTimeout(() => {
        self.removeEventListener("message", messageHandler);
        reject(new Error("Tool execution timeout"));
      }, 3e4);
    });
  },
  /**
   * Auto-register tools from API components list
   */
  async autoRegisterFromApiComponents(components) {
    let registered = 0;
    const errors = [];
    for (const component of components) {
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
      default:
        return { status: "error", message: `Unknown method: ${method}` };
    }
  }
};
var mcp_server_default = MCPServerWorker;
export {
  mcp_server_default as default
};
