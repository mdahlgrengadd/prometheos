import{r as i,j as e}from"./index-DfbnWkRj.js";import{F as d,ac as x}from"./MacroContext-BydYzf1u.js";import"./monaco-editor-Dq6WuQlL.js";const f=()=>{const[r,c]=i.useState(!1),[l,a]=i.useState(!1),[h,o]=i.useState("Not started"),[p,n]=i.useState(`print("Hello from Python!")
2 + 2`),[s,m]=i.useState(null),g=async()=>{a(!0),o("Initializing Pyodide...");try{const t=await d.initPyodide();t.status==="success"?(c(!0),o("Pyodide ready!")):o(`Error: ${t.message}`)}catch(t){o(`Failed to initialize: ${t instanceof Error?t.message:String(t)}`)}finally{a(!1)}},b=async()=>{if(!r){alert("Please initialize Pyodide first");return}a(!0);try{const t=await d.executePython(p,!0);m(t)}catch(t){m({success:!1,error:t instanceof Error?t.message:String(t)})}finally{a(!1)}};return i.useEffect(()=>{(async()=>{const u=await d.isPyodideReady();c(u),u&&o("Pyodide already ready!")})()},[]),e.jsxs("div",{className:"p-6 max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Pyodide Integration Test"}),e.jsxs("div",{className:"mb-6 p-4 border rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Status"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:`w-3 h-3 rounded-full ${r?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"text-sm",children:h}),!r&&e.jsx("button",{onClick:g,disabled:l,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50",children:l?"Initializing...":"Initialize Pyodide"})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Python Code"}),e.jsx("textarea",{value:p,onChange:t=>n(t.target.value),className:"w-full h-32 p-3 border rounded-lg font-mono text-sm",placeholder:"Enter Python code here...",disabled:!r}),e.jsx("button",{onClick:b,disabled:!r||l,className:"mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50",children:l?"Executing...":"Execute Python"})]}),s&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Results"}),e.jsxs("div",{className:`p-4 border rounded-lg ${s.success?"border-green-500 bg-green-50":"border-red-500 bg-red-50"}`,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"Success:"})," ",s.success?"Yes":"No"]}),s.stdout&&e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"Output:"}),e.jsx("pre",{className:"mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto",children:s.stdout})]}),s.result!==void 0&&e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"Return Value:"}),e.jsx("pre",{className:"mt-1 p-2 bg-gray-100 rounded text-sm overflow-x-auto",children:JSON.stringify(s.result,null,2)})]}),s.error&&e.jsxs("div",{className:"mb-2",children:[e.jsx("strong",{children:"Error:"}),e.jsx("pre",{className:"mt-1 p-2 bg-red-100 rounded text-sm overflow-x-auto",children:s.error})]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Test Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("button",{onClick:()=>n(`print("Hello from Python!")
2 + 2`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"Basic Math"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Simple arithmetic and output"})]}),e.jsxs("button",{onClick:()=>n(`import json
data = {"message": "Hello from Python", "numbers": [1, 2, 3]}
json.dumps(data, indent=2)`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"JSON Processing"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Test JSON manipulation"})," "]}),e.jsxs("button",{onClick:()=>n(`# Simple Desktop API Verification Test
print("=== Desktop API Verification ===")

# Check if desktop object exists
try:
    print(f"Desktop object type: {type(desktop)}")
    print(f"Desktop API type: {type(desktop.api)}")
    print(f"Desktop Events type: {type(desktop.events)}")
    print("✓ Desktop object is available")
except NameError as e:
    print(f"✗ Desktop object not found: {e}")
    print("This indicates the Desktop API bridge setup failed")

# Check available methods
try:
    print(f"Desktop API methods: {dir(desktop.api)}")
    print(f"Desktop Events methods: {dir(desktop.events)}")
except:
    print("Could not inspect desktop object methods")

print("=== Verification Complete ===")
"Desktop API verification completed"`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"Desktop API Verification"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Check if desktop API is available"})]}),e.jsxs("button",{onClick:()=>n(`# Comprehensive Desktop API Bridge Test
print("=== Desktop API Bridge Test Suite ===")
print()

# Test 1: List available components
print("1. Testing component listing...")
components = desktop.api.list_components()
comp_count = len(components) if hasattr(components, '__len__') else "unknown"
print(f"   Found {comp_count} components")
print(f"   Result: {components}")
print()

# Test 2: Test event emission
print("2. Testing event emission...")
events_result = desktop.events.emit("python_test_event", {
    "message": "Hello from Python!",
    "timestamp": "2025-05-26", 
    "test": True
})
print(f"   Event emission result: {events_result}")
print()

# Test 3: Test API execution (calculator example)
print("3. Testing API execution...")
exec_result = desktop.api.execute("calculator", "add", {"a": 15, "b": 27})
print(f"   Calculator execution result: {exec_result}")
print()

# Test 4: Test system API call
print("4. Testing system API call...")
system_result = desktop.api.execute("launcher", "notify", {
    "message": "Python API test notification",
    "type": "sonner"
})
print(f"   System notification result: {system_result}")
print()

# Test 5: Test error handling
print("5. Testing error handling...")
try:
    error_result = desktop.api.execute("nonexistent", "fakeAction", {})
    print(f"   Error test result: {error_result}")
except Exception as e:
    print(f"   Caught exception: {e}")
print()

print("=== Desktop API Bridge Test Complete ===")
"Success: All API bridge tests executed!"`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"API Bridge Test Suite"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Comprehensive API bridge testing"})]}),e.jsxs("button",{onClick:()=>n(`for i in range(5):
    print(f"Count: {i}")

result = sum(range(10))
print(f"Sum of 0-9: {result}")
result`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"Loops & Variables"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Test control flow"})]}),e.jsxs("button",{onClick:()=>n(`# Test Event Subscription
print("Testing event subscription...")

# Define event handler
def handle_test_event(data):
    print(f"Received event: {data}")

# Subscribe to events
unsubscribe = desktop.events.subscribe("python_test_event", handle_test_event)
print("Subscribed to python_test_event")

# Emit a test event
desktop.events.emit("python_test_event", {"timestamp": "2025-05-26", "source": "Python"})

print("Event subscription test completed")`),className:"p-3 border rounded-lg text-left hover:bg-gray-50",children:[e.jsx("div",{className:"font-semibold",children:"Event Subscription"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Test Python event handling"})]})]})]})]})},P={id:x.id,manifest:x,init:async()=>{console.log("Pyodide Test plugin initialized")},render:()=>e.jsx(f,{}),onOpen:()=>{console.log("Pyodide Test plugin opened")},onClose:()=>{console.log("Pyodide Test plugin closed")}};export{P as default};
