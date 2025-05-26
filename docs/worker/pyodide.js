// Built worker plugin: pyodide
// Generated on: 2025-05-26T19:48:12.948Z

// node_modules/comlink/dist/esm/comlink.mjs
var proxyMarker = Symbol("Comlink.proxy");
var createEndpoint = Symbol("Comlink.endpoint");
var releaseProxy = Symbol("Comlink.releaseProxy");
var finalizer = Symbol("Comlink.finalizer");
var throwMarker = Symbol("Comlink.thrown");
var isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
var proxyTransferHandler = {
  canHandle: (val) => isObject(val) && val[proxyMarker],
  serialize(obj) {
    const { port1, port2 } = new MessageChannel();
    expose(obj, port1);
    return [port2, [port2]];
  },
  deserialize(port) {
    port.start();
    return wrap(port);
  }
};
var throwTransferHandler = {
  canHandle: (value) => isObject(value) && throwMarker in value,
  serialize({ value }) {
    let serialized;
    if (value instanceof Error) {
      serialized = {
        isError: true,
        value: {
          message: value.message,
          name: value.name,
          stack: value.stack
        }
      };
    } else {
      serialized = { isError: false, value };
    }
    return [serialized, []];
  },
  deserialize(serialized) {
    if (serialized.isError) {
      throw Object.assign(new Error(serialized.value.message), serialized.value);
    }
    throw serialized.value;
  }
};
var transferHandlers = /* @__PURE__ */ new Map([
  ["proxy", proxyTransferHandler],
  ["throw", throwTransferHandler]
]);
function isAllowedOrigin(allowedOrigins, origin) {
  for (const allowedOrigin of allowedOrigins) {
    if (origin === allowedOrigin || allowedOrigin === "*") {
      return true;
    }
    if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
      return true;
    }
  }
  return false;
}
function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
  ep.addEventListener("message", function callback(ev) {
    if (!ev || !ev.data) {
      return;
    }
    if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
      console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
      return;
    }
    const { id, type, path } = Object.assign({ path: [] }, ev.data);
    const argumentList = (ev.data.argumentList || []).map(fromWireValue);
    let returnValue;
    try {
      const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
      const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
      switch (type) {
        case "GET":
          {
            returnValue = rawValue;
          }
          break;
        case "SET":
          {
            parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
            returnValue = true;
          }
          break;
        case "APPLY":
          {
            returnValue = rawValue.apply(parent, argumentList);
          }
          break;
        case "CONSTRUCT":
          {
            const value = new rawValue(...argumentList);
            returnValue = proxy(value);
          }
          break;
        case "ENDPOINT":
          {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port2);
            returnValue = transfer(port1, [port1]);
          }
          break;
        case "RELEASE":
          {
            returnValue = void 0;
          }
          break;
        default:
          return;
      }
    } catch (value) {
      returnValue = { value, [throwMarker]: 0 };
    }
    Promise.resolve(returnValue).catch((value) => {
      return { value, [throwMarker]: 0 };
    }).then((returnValue2) => {
      const [wireValue, transferables] = toWireValue(returnValue2);
      ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
      if (type === "RELEASE") {
        ep.removeEventListener("message", callback);
        closeEndPoint(ep);
        if (finalizer in obj && typeof obj[finalizer] === "function") {
          obj[finalizer]();
        }
      }
    }).catch((error) => {
      const [wireValue, transferables] = toWireValue({
        value: new TypeError("Unserializable return value"),
        [throwMarker]: 0
      });
      ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
    });
  });
  if (ep.start) {
    ep.start();
  }
}
function isMessagePort(endpoint) {
  return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
  if (isMessagePort(endpoint))
    endpoint.close();
}
function wrap(ep, target) {
  const pendingListeners = /* @__PURE__ */ new Map();
  ep.addEventListener("message", function handleMessage(ev) {
    const { data } = ev;
    if (!data || !data.id) {
      return;
    }
    const resolver = pendingListeners.get(data.id);
    if (!resolver) {
      return;
    }
    try {
      resolver(data);
    } finally {
      pendingListeners.delete(data.id);
    }
  });
  return createProxy(ep, pendingListeners, [], target);
}
function throwIfProxyReleased(isReleased) {
  if (isReleased) {
    throw new Error("Proxy has been released and is not useable");
  }
}
function releaseEndpoint(ep) {
  return requestResponseMessage(ep, /* @__PURE__ */ new Map(), {
    type: "RELEASE"
  }).then(() => {
    closeEndPoint(ep);
  });
}
var proxyCounter = /* @__PURE__ */ new WeakMap();
var proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep) => {
  const newCount = (proxyCounter.get(ep) || 0) - 1;
  proxyCounter.set(ep, newCount);
  if (newCount === 0) {
    releaseEndpoint(ep);
  }
});
function registerProxy(proxy2, ep) {
  const newCount = (proxyCounter.get(ep) || 0) + 1;
  proxyCounter.set(ep, newCount);
  if (proxyFinalizers) {
    proxyFinalizers.register(proxy2, ep, proxy2);
  }
}
function unregisterProxy(proxy2) {
  if (proxyFinalizers) {
    proxyFinalizers.unregister(proxy2);
  }
}
function createProxy(ep, pendingListeners, path = [], target = function() {
}) {
  let isProxyReleased = false;
  const proxy2 = new Proxy(target, {
    get(_target, prop) {
      throwIfProxyReleased(isProxyReleased);
      if (prop === releaseProxy) {
        return () => {
          unregisterProxy(proxy2);
          releaseEndpoint(ep);
          pendingListeners.clear();
          isProxyReleased = true;
        };
      }
      if (prop === "then") {
        if (path.length === 0) {
          return { then: () => proxy2 };
        }
        const r = requestResponseMessage(ep, pendingListeners, {
          type: "GET",
          path: path.map((p) => p.toString())
        }).then(fromWireValue);
        return r.then.bind(r);
      }
      return createProxy(ep, pendingListeners, [...path, prop]);
    },
    set(_target, prop, rawValue) {
      throwIfProxyReleased(isProxyReleased);
      const [value, transferables] = toWireValue(rawValue);
      return requestResponseMessage(ep, pendingListeners, {
        type: "SET",
        path: [...path, prop].map((p) => p.toString()),
        value
      }, transferables).then(fromWireValue);
    },
    apply(_target, _thisArg, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const last = path[path.length - 1];
      if (last === createEndpoint) {
        return requestResponseMessage(ep, pendingListeners, {
          type: "ENDPOINT"
        }).then(fromWireValue);
      }
      if (last === "bind") {
        return createProxy(ep, pendingListeners, path.slice(0, -1));
      }
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, pendingListeners, {
        type: "APPLY",
        path: path.map((p) => p.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    },
    construct(_target, rawArgumentList) {
      throwIfProxyReleased(isProxyReleased);
      const [argumentList, transferables] = processArguments(rawArgumentList);
      return requestResponseMessage(ep, pendingListeners, {
        type: "CONSTRUCT",
        path: path.map((p) => p.toString()),
        argumentList
      }, transferables).then(fromWireValue);
    }
  });
  registerProxy(proxy2, ep);
  return proxy2;
}
function myFlat(arr) {
  return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
  const processed = argumentList.map(toWireValue);
  return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
}
var transferCache = /* @__PURE__ */ new WeakMap();
function transfer(obj, transfers) {
  transferCache.set(obj, transfers);
  return obj;
}
function proxy(obj) {
  return Object.assign(obj, { [proxyMarker]: true });
}
function toWireValue(value) {
  for (const [name, handler] of transferHandlers) {
    if (handler.canHandle(value)) {
      const [serializedValue, transferables] = handler.serialize(value);
      return [
        {
          type: "HANDLER",
          name,
          value: serializedValue
        },
        transferables
      ];
    }
  }
  return [
    {
      type: "RAW",
      value
    },
    transferCache.get(value) || []
  ];
}
function fromWireValue(value) {
  switch (value.type) {
    case "HANDLER":
      return transferHandlers.get(value.name).deserialize(value.value);
    case "RAW":
      return value.value;
  }
}
function requestResponseMessage(ep, pendingListeners, msg, transfers) {
  return new Promise((resolve) => {
    const id = generateUUID();
    pendingListeners.set(id, resolve);
    if (ep.start) {
      ep.start();
    }
    ep.postMessage(Object.assign({ id }, msg), transfers);
  });
}
function generateUUID() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}

// src/worker/plugins/pyodide.ts
var PyodideWorker = {
  id: "pyodide",
  // Private state
  _pyodide: null,
  _isLoading: false,
  _progress: null,
  /**
   * Initialize Pyodide with progress tracking
   */
  async initPyodide() {
    if (this._pyodide) {
      return { status: "success", message: "Pyodide already initialized" };
    }
    if (this._isLoading) {
      return {
        status: "loading",
        message: "Pyodide initialization in progress"
      };
    }
    try {
      this._isLoading = true;
      this._progress = {
        phase: "initializing",
        message: "Starting Pyodide initialization..."
      };
      console.log("Loading Pyodide from CDN...");
      this._progress = {
        phase: "downloading",
        message: "Downloading Pyodide runtime..."
      };
      console.log("Loading Pyodide via fetch...");
      const response = await fetch(
        "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch Pyodide: ${response.statusText}`);
      }
      const pyodideCode = await response.text();
      const func = new Function(pyodideCode);
      func.call(globalThis);
      const globalScope = globalThis;
      const loadPyodide = globalScope.loadPyodide;
      if (!loadPyodide) {
        throw new Error(
          "Failed to load Pyodide - loadPyodide function not available"
        );
      }
      this._pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        // stdout: (text: string) => console.log("Python stdout:", text),
        // stderr: (text: string) => console.error("Python stderr:", text),
      });
      this._progress = {
        phase: "extracting",
        message: "Installing base packages..."
      };
      await this._pyodide.loadPackage(["micropip"]);
      await this._setupDesktopApiBridge();
      this._progress = {
        phase: "ready",
        message: "Pyodide ready for Python execution"
      };
      this._isLoading = false;
      console.log("Pyodide initialized successfully");
      try {
        await this._enhanceComlinkIntegration();
      } catch (error) {
        console.warn(
          "Failed to enhance Comlink integration, but continuing:",
          error
        );
      }
      return { status: "success", message: "Pyodide initialized" };
    } catch (error) {
      this._isLoading = false;
      this._progress = null;
      console.error("Failed to initialize Pyodide:", error);
      return {
        status: "error",
        message: `Failed to initialize Pyodide: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  },
  /**
   * Setup the Desktop API bridge in Python context
   * Now supports both Comlink (ergonomic) and postMessage (MCP) interfaces
   */
  async _setupDesktopApiBridge() {
    if (!this._pyodide)
      throw new Error("Pyodide not initialized");
    console.log("Setting up Hybrid Desktop API bridge...");
    try {
      this._pyodide.globals.set("_pyodide_plugin_instance", this);
      globalThis._pyodide_plugin_instance = this;
      const desktopApiCode = `
import js
from pyodide.ffi import create_proxy, to_js, JsProxy
import json
import uuid

print("Starting Hybrid Desktop API bridge setup...")

#----------------------------------------------------
# 1. Desktop API Layer (Comlink - Ergonomic Interface)
#----------------------------------------------------

class DesktopAPI:
    """Python interface to Desktop Dreamscape APIs using Comlink"""
    
    @staticmethod
    async def list_components():
        """List all available API components"""
        try:
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Direct call to the Comlink proxy
            result = await api_comlink.listComponents()
            return result.to_py()
            
        except Exception as e:
            print(f"Error listing components via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.list_components()
    
    @staticmethod 
    async def execute(component_id, action, params=None):
        """Execute an action on a component"""
        try:
            if params is None:
                params = {}
                
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Convert Python dict to JS object with proper conversion
            js_params = to_js(params)
            
            # Direct call that returns the actual result
            result = await api_comlink.execute(component_id, action, js_params)
            return result.to_py()
            
        except Exception as e:
            print(f"Error executing {component_id}.{action} via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.execute(component_id, action, params)

    @staticmethod
    async def subscribe_event(event_name, callback):
        """Subscribe to EventBus events"""
        try:
            proxy_callback = create_proxy(callback)
            
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
            
            # Direct call to subscribe
            unsubscribe = await api_comlink.subscribeEvent(event_name, proxy_callback)
            
            # Convert the JS function to a Python callable
            def python_unsubscribe():
                try:
                    unsubscribe()
                    proxy_callback.destroy()
                except Exception as e:
                    print(f"Error unsubscribing: {e}")
            
            return python_unsubscribe
            
        except Exception as e:
            print(f"Error subscribing to event {event_name} via Comlink: {e}")
            # Fallback to postMessage
            return desktop_api_legacy.subscribe_event(event_name, callback)

#----------------------------------------------------
# 2. Legacy Desktop API (postMessage - Compatibility)
#----------------------------------------------------

class DesktopAPILegacy:
    """Python interface to Desktop Dreamscape APIs using postMessage"""
    
    @staticmethod
    def list_components():
        """List all available API components"""
        try:
            from js import postMessage
            request_id = str(uuid.uuid4())
            
            # Convert Python dict to JS object using to_js
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'list_components'
            })
              # Send request to main thread via postMessage
            postMessage(message)
            
            print(f"API request sent: list_components")
            return {'success': True, 'message': 'Request sent to main thread'}
            
        except Exception as e:
            print(f"Error listing components: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod 
    def execute(component_id, action, params=None):
        """Execute an action on a component"""
        try:
            if params is None:
                params = {}
                
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            # Convert Python dict to JS object using to_js, with proper nested conversion
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'execute_action',
                'params': to_js({
                    'componentId': component_id,
                    'action': action,
                    'params': to_js(params)
                })
            })
            
            # Send request to main thread via postMessage
            postMessage(message)
            
            print(f"Sent API request: {component_id}.{action}")
            return {'success': True, 'message': 'Request sent to main thread'}
            
        except Exception as e:
            print(f"Error executing {component_id}.{action}: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod
    def subscribe_event(event_name, callback):
        """Subscribe to EventBus events"""
        try:
            proxy_callback = create_proxy(callback)
            
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            # Store callback for later use
            if not hasattr(DesktopAPILegacy, '_event_callbacks'):
                DesktopAPILegacy._event_callbacks = {}
            DesktopAPILegacy._event_callbacks[event_name] = proxy_callback            
            
            # Send subscription request via postMessage
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'subscribe_event',
                'params': to_js({
                    'eventName': event_name
                })
            })
            postMessage(message)
            
            def unsubscribe():
                if hasattr(DesktopAPILegacy, '_event_callbacks') and event_name in DesktopAPILegacy._event_callbacks:
                    del DesktopAPILegacy._event_callbacks[event_name]
                    proxy_callback.destroy()
                    # Could send unsubscribe message here if needed
            
            return unsubscribe
            
        except Exception as e:
            print(f"Error subscribing to event {event_name}: {e}")
            return lambda: None

#----------------------------------------------------
# 3. Events System
#----------------------------------------------------

class Events:
    """EventBus integration"""
    
    @staticmethod
    async def emit(event_name, data=None):
        """Emit an event to the desktop EventBus"""
        try:
            # Safely get Comlink bridge from globalThis
            api_comlink = getattr(js.globalThis, 'desktop_api_comlink', None)
            if api_comlink is None:
                raise Exception("Comlink API bridge not available")
                
            # Convert data for JS
            js_data = to_js(data) if data is not None else None
            
            # Direct call to emit
            await api_comlink.emitEvent(event_name, js_data)
            return {'success': True, 'message': f'Event {event_name} emitted'}
            
        except Exception as e:
            print(f"Error emitting event {event_name} via Comlink: {e}")
            # Fallback to postMessage
            return events_legacy.emit(event_name, data)
    
    @staticmethod
    async def subscribe(event_name, callback):
        """Subscribe to desktop events"""
        return await DesktopAPI.subscribe_event(event_name, callback)

class EventsLegacy:
    """EventBus integration via postMessage"""
    
    @staticmethod
    def emit(event_name, data=None):
        """Emit an event to the desktop EventBus"""
        try:
            from js import postMessage
            import uuid
            request_id = str(uuid.uuid4())
            
            message = to_js({
                'type': 'desktop-api-request',
                'requestId': request_id,
                'method': 'emit_event',
                'params': to_js({
                    'eventName': event_name,
                    'data': to_js(data) if data is not None else None
                })
            })
            postMessage(message)
            
            return {'success': True, 'message': f'Event {event_name} emitted'}
            
        except Exception as e:
            print(f"Error emitting event {event_name}: {e}")
            return {'success': False, 'error': str(e)}
    
    @staticmethod
    def subscribe(event_name, callback):
        """Subscribe to desktop events"""
        return DesktopAPILegacy.subscribe_event(event_name, callback)

#----------------------------------------------------
# 2. MCP Protocol Layer (JSON-RPC 2.0 Interface)
#----------------------------------------------------

class MCPProtocol:
    """Python interface to MCP protocol (JSON-RPC 2.0)"""
    
    @staticmethod
    async def send(message):
        """Send a raw MCP protocol message (JSON-RPC 2.0 format)"""
        try:
            # Ensure message is properly formatted as JSON-RPC 2.0
            if not isinstance(message, dict):
                raise ValueError("Message must be a dictionary")
                
            if not message.get('jsonrpc') == '2.0':
                message['jsonrpc'] = '2.0'
                
            if 'id' not in message:
                message['id'] = str(uuid.uuid4())
                
            # Convert to JS object - use JSON serialization to avoid JsProxy issues
            import json
            js_message_json = json.dumps(message)
            
            # Debug: Log the message being sent
            print(f"Sending MCP message: {message}")
            print(f"JSON message: {js_message_json}")
            
            # Forward to MCP handler in worker via the exposed plugin instance
            # Access the plugin instance from pyodide globals (use js.globalThis, not Python globals())
            plugin_instance = js.globalThis._pyodide_plugin_instance
            if plugin_instance is None:
                raise Exception("Pyodide plugin instance not available")
                
            # Pass the JSON string instead of JsProxy
            result = await plugin_instance.handleMCPProtocolMessage(js_message_json)
            
            # Extract the actual response from the PythonResult wrapper
            if hasattr(result, 'success') and result.success and hasattr(result, 'result'):
                return result.result.to_py() if hasattr(result.result, 'to_py') else result.result
            elif hasattr(result, 'error'):
                return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': result.error}, 'id': message.get('id')}
            else:
                return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': 'Internal error'}, 'id': message.get('id')}
                
        except Exception as e:
            print(f"Error sending MCP message: {e}")
            return {'jsonrpc': '2.0', 'error': {'code': -32603, 'message': str(e)}, 'id': message.get('id')}
    
    @staticmethod
    async def tools_list():
        """Get list of available tools via MCP protocol"""
        message = {
            'jsonrpc': '2.0',
            'method': 'tools/list',
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)
    
    @staticmethod
    async def tools_call(tool_name, arguments=None):
        """Call a tool via MCP protocol"""
        if arguments is None:
            arguments = {}
            
        message = {
            'jsonrpc': '2.0',
            'method': 'tools/call',
            'params': {
                'name': tool_name,
                'arguments': arguments
            },
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)
    
    @staticmethod
    async def resources_list():
        """List available resources via MCP protocol"""
        message = {
            'jsonrpc': '2.0',
            'method': 'resources/list',
            'id': str(uuid.uuid4())
        }
        return await MCPProtocol.send(message)

# Create legacy instances
desktop_api_legacy = DesktopAPILegacy()
events_legacy = EventsLegacy()

# Create the desktop module structure
class Desktop:
    api = DesktopAPI()
    events = Events()
    mcp = MCPProtocol()
    
    # Legacy access for backward compatibility
    api_legacy = desktop_api_legacy
    events_legacy = events_legacy

# Make it available globally
desktop = Desktop()

def handle_desktop_api_response(message):
    """Handle responses from the main thread API"""
    try:
        if message.get('type') == 'desktop-api-response':
            print(f"Received API response: {message}")
            # Could store results in a promise-like structure here
            
        elif message.get('type') == 'desktop-api-event':
            # Handle event notifications
            event_name = message.get('eventName')
            data = message.get('data')
            
            if hasattr(DesktopAPILegacy, '_event_callbacks') and event_name in DesktopAPILegacy._event_callbacks:
                callback = DesktopAPILegacy._event_callbacks[event_name]
                callback(data)
                
        elif message.get('type') == 'mcp-protocol-response':
            # Handle MCP protocol responses
            print(f"Received MCP protocol response: {message.get('message')}")
            # Could integrate with a promise system here
                
    except Exception as e:
        print(f"Error handling API response: {e}")

print("Hybrid Desktop API Bridge initialized in Python context")
`;
      await this._pyodide.runPython(desktopApiCode);
      console.log("Hybrid Desktop API bridge setup completed successfully");
    } catch (error) {
      console.error("Failed to setup Hybrid Desktop API bridge:", error);
      throw error;
    }
  },
  /**
   * Execute Python code and return result
   */
  async executePython(code, returnStdout = false) {
    if (!this._pyodide) {
      return {
        success: false,
        error: "Pyodide not initialized. Call initPyodide() first."
      };
    }
    try {
      let stdout = "";
      if (returnStdout) {
        await this._pyodide.runPython(`
import sys
from io import StringIO
_stdout_capture = StringIO()
sys.stdout = _stdout_capture
`);
      }
      let result;
      const py = this._pyodide;
      if (typeof py.runPythonAsync === "function") {
        result = await py.runPythonAsync(code);
      } else {
        result = await py.runPython(code);
      }
      if (returnStdout) {
        stdout = await this._pyodide.runPython(`
_stdout_capture.getvalue()
`);
        await this._pyodide.runPython(`
sys.stdout = sys.__stdout__
`);
      }
      return {
        success: true,
        result,
        stdout: returnStdout ? stdout : void 0
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  /**
   * Install Python packages using micropip
   */
  async installPackage(packageName) {
    if (!this._pyodide) {
      return {
        success: false,
        error: "Pyodide not initialized"
      };
    }
    try {
      await this._pyodide.runPython(`
import micropip
await micropip.install('${packageName}')
`);
      return {
        success: true,
        result: `Package ${packageName} installed successfully`
      };
    } catch (error) {
      return {
        success: false,
        error: `Failed to install ${packageName}: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  },
  /**
   * Get current initialization progress
   */
  getProgress() {
    return this._progress;
  },
  /**
   * Check if Pyodide is ready
   */
  isReady() {
    return this._pyodide !== null && !this._isLoading;
  },
  /**
   * Clean up resources
   */
  cleanup() {
    if (this._pyodide) {
      this._pyodide = null;
      this._progress = null;
      console.log("Pyodide worker cleaned up");
    }
  },
  /**
   * Handle MCP Protocol JSON-RPC 2.0 messages
   */
  async handleMCPProtocolMessage(messageOrJson) {
    try {
      if (!this._pyodide) {
        throw new Error("Pyodide not initialized");
      }
      let message;
      if (typeof messageOrJson === "string") {
        console.log("Parsing JSON message:", messageOrJson);
        message = JSON.parse(messageOrJson);
      } else {
        message = messageOrJson;
      }
      console.log("Handling MCP protocol message:", JSON.stringify(message));
      console.log("Message type:", typeof message);
      console.log("Message keys:", Object.keys(message || {}));
      const response = await this._forwardToMCPServer(message);
      return {
        success: true,
        result: response
      };
    } catch (error) {
      console.error("Error handling MCP message:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  /**
   * Forward a message to the MCP server plugin
   */
  async _forwardToMCPServer(message) {
    const workerPluginManagerGlobal = self;
    const manager = workerPluginManagerGlobal.workerPluginManager;
    if (!manager) {
      throw new Error("Worker plugin manager not available");
    }
    try {
      const isRegistered = await manager.callPlugin(
        "mcp-server",
        "isInitialized"
      );
      if (!isRegistered) {
        console.log("MCP server not initialized, initializing...");
        await manager.callPlugin("mcp-server", "initialize");
      }
    } catch (error) {
      console.warn(
        "Error checking MCP server, will try to call anyway:",
        error
      );
    }
    return manager.callPlugin("mcp-server", "processMCPMessage", {
      message
    });
  },
  /**
   * Handle Comlink port message from main thread
   */
  handleComlinkPort(port) {
    try {
      console.log("Received Comlink port from main thread");
      console.log(
        "Wrapping Comlink port for desktop_api_comlink and desktop_mcp_comlink"
      );
      const remote = wrap(port);
      globalThis.desktop_api_comlink = remote.api;
      globalThis.desktop_mcp_comlink = remote.mcp;
      console.log(
        "desktop_api_comlink and desktop_mcp_comlink proxies set on globalThis"
      );
      port.start();
      console.log("Comlink bridge proxies exposed to Python context");
    } catch (error) {
      console.error("Error handling Comlink port:", error);
    }
  },
  /**
   * Generic handler function that processes method calls with parameters
   */
  handle(method, params) {
    switch (method) {
      case "initPyodide":
        return this.initPyodide();
      case "executePython":
        if (typeof params?.code !== "string") {
          return {
            success: false,
            error: "executePython requires 'code' parameter"
          };
        }
        return this.executePython(params.code, Boolean(params.returnStdout));
      case "installPackage":
        if (typeof params?.packageName !== "string") {
          return {
            success: false,
            error: "installPackage requires 'packageName' parameter"
          };
        }
        return this.installPackage(params.packageName);
      case "getProgress":
        return this.getProgress();
      case "isReady":
        return this.isReady();
      case "cleanup":
        return this.cleanup();
      case "handleDesktopApiRequest":
        if (typeof params?.method !== "string" || typeof params?.requestId !== "string") {
          return {
            success: false,
            error: "handleDesktopApiRequest requires 'method' and 'requestId' parameters"
          };
        }
        return this.handleDesktopApiRequest(
          params.method,
          params.requestId,
          params.params
        );
      case "handleMCPProtocolMessage":
        if (params?.message === void 0) {
          return {
            success: false,
            error: "handleMCPProtocolMessage requires 'message' parameter"
          };
        }
        return this.handleMCPProtocolMessage(params.message);
      case "handleComlinkPort":
        if (!params?.port || !(params.port instanceof MessagePort)) {
          return {
            success: false,
            error: "handleComlinkPort requires a valid MessagePort parameter"
          };
        }
        return this.handleComlinkPort(params.port);
      default:
        return { success: false, error: `Unknown method: ${method}` };
    }
  },
  /**
   * Handle desktop API requests from Python
   */
  async handleDesktopApiRequest(method, requestId, params) {
    try {
      switch (method) {
        case "list_components": {
          console.log("Python requested component list");
          return {
            success: true,
            result: {
              type: "desktop-api-response",
              requestId,
              method,
              result: []
            }
          };
        }
        case "execute_action": {
          const { componentId, action, params: actionParams } = params || {};
          console.log(
            `Python requested action: ${componentId}.${action}`,
            actionParams
          );
          return {
            success: true,
            result: {
              type: "desktop-api-response",
              requestId,
              method,
              result: {
                success: true,
                message: `Action ${action} on ${componentId} executed`
              }
            }
          };
        }
        case "subscribe_event": {
          const { eventName } = params || {};
          console.log(`Python ${method}: ${eventName}`);
          return {
            success: true,
            result: {
              type: "desktop-api-response",
              requestId,
              method,
              result: { success: true, message: `Subscribed to ${eventName}` }
            }
          };
        }
        case "emit_event": {
          const { eventName, data } = params || {};
          console.log(`Python emitting event: ${eventName}`, data);
          return {
            success: true,
            result: {
              type: "desktop-api-response",
              requestId,
              method,
              result: { success: true, message: `Event ${eventName} emitted` }
            }
          };
        }
        default:
          return {
            success: false,
            error: `Unknown desktop API method: ${method}`
          };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  },
  /**
   * Add Comlink helper methods to Python
   * This sets up better communication between Python and Comlink
   */
  async _enhanceComlinkIntegration() {
    if (!this._pyodide)
      throw new Error("Pyodide not initialized");
    console.log("Enhancing Python-Comlink integration...");
    try {
      await this._pyodide.runPython(`
import js
from pyodide.ffi import create_proxy, to_js

class ComlinkHelper:
    """Improved Comlink communication helper for Python"""
    
    @staticmethod
    def expose(obj, name="pythonExports"):
        """Expose a Python object to JavaScript via Comlink"""
        try:
            js_proxy = create_proxy(obj)
            # Make it available globally
            js.globalThis[name] = js_proxy
            print(f"Exposed Python object as {name} via Comlink")
            return True
        except Exception as e:
            print(f"Error exposing object: {e}")
            return False
    
    @staticmethod
    def get_proxy(name):
        """Get a JavaScript object/function via Comlink"""
        try:
            if hasattr(js.globalThis, name):
                return getattr(js.globalThis, name)
            print(f"Object {name} not found in global scope")
            return None
        except Exception as e:
            print(f"Error getting proxy: {e}")
            return None

# Add helper to desktop object
if hasattr(desktop, "comlink"):
    print("Comlink helper already exists")
else:
    desktop.comlink = ComlinkHelper()
    print("Added Comlink helper to desktop object")

print("Python-Comlink integration enhanced")
`);
      console.log("Python-Comlink integration enhanced successfully");
    } catch (error) {
      console.error("Failed to enhance Python-Comlink integration:", error);
      throw error;
    }
  }
};
var pyodide_default = PyodideWorker;
export {
  pyodide_default as default
};
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
