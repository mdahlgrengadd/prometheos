import{c as De,K as dn,r as R,j as c,X as ut,R as fn,n as hn,s as mn,w as pn,o as kt,l as gn,v as Me,x as vn,G as yn,L as bn,M as wn,f as xn,i as jn,N as En,O as kn}from"./index-DfbnWkRj.js";import{u as Le,F as Tn,a as Cn,S as Sn}from"./fileSystem-CwtfROg1.js";import{V as Hr,v as Jr}from"./fileSystem-CwtfROg1.js";import{_ as Je,m as Pn,l as Ve}from"./monaco-editor-Dq6WuQlL.js";import{P as _n}from"./play-B1R3ip2N.js";import{b as Nn,C as $n,m as wt,c as Tt,R as Rn,d as Dn,e as An,f as On}from"./MacroContext-BydYzf1u.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=De("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=De("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=De("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=De("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=De("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=De("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=De("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Un={activeView:"explorer",sidebarVisible:!0,panelVisible:!1,previewPanelVisible:!1,activeTab:null,tabs:[],theme:"light",commandPaletteOpen:!1,buildOutput:"",buildError:null,isBuilding:!1,buildCode:"",panelVisibilityBeforePreview:!1},ve=dn((l,t)=>({...Un,toggleSidebar:()=>l(e=>({sidebarVisible:!e.sidebarVisible})),togglePanel:()=>l(e=>({panelVisible:!e.panelVisible})),togglePreviewPanel:()=>l(e=>{const s=!e.previewPanelVisible;return Je(async()=>{const{ideSettings:d}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:d}},[]).then(({ideSettings:d})=>{d.hideTerminalDuringPreview&&l(s?p=>({panelVisibilityBeforePreview:p.panelVisible,panelVisible:!1}):p=>({panelVisible:p.panelVisibilityBeforePreview}))}),{previewPanelVisible:s}}),toggleCommandPalette:()=>l(e=>({commandPaletteOpen:!e.commandPaletteOpen})),setActiveView:e=>l({activeView:e}),setActiveTab:e=>l({activeTab:e}),openTab:e=>{const s=t().getFileById(e);!s||s.type!=="file"||l(d=>{const p=d.tabs.find(f=>f.fileId===e);if(p)return{activeTab:p.id};const h={id:`tab-${Date.now()}`,fileId:e,title:s.name,language:s.language||"javascript",isDirty:!1};return{tabs:[...d.tabs,h],activeTab:h.id}})},closeTab:e=>{l(s=>{const d=s.tabs.findIndex(f=>f.id===e);if(d===-1)return s;const p=s.tabs.filter(f=>f.id!==e);let h=s.activeTab;return s.activeTab===e&&(p.length===0?h=null:d<p.length?h=p[d].id:h=p[p.length-1].id),{tabs:p,activeTab:h}})},toggleTheme:()=>l(e=>({theme:e.theme==="dark"?"light":"dark"})),getFileById:e=>{const s=p=>{if(p.id===e)return p;if(p.children)for(const h of p.children){const f=s(h);if(f)return f}},d=Le.getState().fs;return s(d)},getTabById:e=>t().tabs.find(s=>s.id===e),setTabDirty:(e,s)=>{l(d=>({tabs:d.tabs.map(p=>p.id===e?{...p,isDirty:s}:p)}))},saveFile:(e,s)=>{const d=(f,m=["root"])=>{if(f.id===e)return m;if(!f.children)return null;for(const P of f.children){const C=d(P,[...m,P.id]);if(C)return C}return null},p=Le.getState().fs,h=d(p);if(h){const f=h.slice(0,-1);Le.getState().updateFileContent(f,e,s),l(m=>({tabs:m.tabs.map(P=>P.fileId===e?{...P,isDirty:!1}:P)}))}},setBuildOutput:e=>l({buildOutput:e}),setBuildError:e=>l({buildError:e}),setBuildCode:e=>l({buildCode:e}),setIsBuilding:e=>l({isBuilding:e}),runBuild:async e=>{const s=t(),{ideSettings:d}=await Je(async()=>{const{ideSettings:A}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:A}},[]);d.showTerminalOnBuild&&!s.previewPanelVisible&&!s.panelVisible&&s.togglePanel();const{buildCode:p,parseEsbuildCommand:h,addToVirtualFs:f}=await Je(async()=>{const{buildCode:A,parseEsbuildCommand:V,addToVirtualFs:re}=await Promise.resolve().then(()=>Ar);return{buildCode:A,parseEsbuildCommand:V,addToVirtualFs:re}},void 0);s.setIsBuilding(!0),s.setBuildError(null),s.setBuildOutput(""),s.setBuildCode("");const P=(()=>{if(!s.activeTab)return null;const A=s.getTabById(s.activeTab);if(!A)return null;const V=s.getFileById(A.fileId);return!V||V.type!=="file"?null:{filePath:V.id,content:V.content||""}})();if(!P){s.setBuildError("No active file to build"),s.setIsBuilding(!1);return}const C=(A,V="")=>{const re=A.id;A.type==="file"&&A.content!==void 0&&f(re,A.content),A.type==="folder"&&A.children&&A.children.forEach(oe=>{C(oe,re)})},T=Le.getState().fs;C(T);let U;if(e){if(U=h(e),!U){s.setBuildError("Invalid esbuild command"),s.setIsBuilding(!1);return}U.content=P.content}else U={entryPoint:P.filePath,content:P.content,options:{bundle:!0,minify:!0,format:"esm"}};try{const A=await p(U);A.error?s.setBuildError(A.error):(s.setBuildCode(A.code),s.setBuildOutput(`Build successful!
Output: ${A.code.slice(0,1e3)}${A.code.length>1e3?"...":""}`),d.autoFocusPreview&&s.previewPanelVisible&&s.activeTab!=="preview"&&s.setActiveTab("preview"))}catch(A){const V=A instanceof Error?A.message:String(A);s.setBuildError(`Build failed: ${V}`)}finally{s.setIsBuilding(!1)}}})),at=[{id:"toggle-sidebar",title:"View: Toggle Side Bar",category:"View",shortcut:"Ctrl+B",handler:()=>ve.getState().toggleSidebar()},{id:"toggle-terminal",title:"View: Toggle Terminal",category:"View",shortcut:"Ctrl+`",handler:()=>ve.getState().togglePanel()},{id:"toggle-preview",title:"View: Toggle Preview",category:"View",shortcut:"Ctrl+Shift+V",handler:()=>ve.getState().togglePreviewPanel()},{id:"toggle-theme",title:"Preferences: Toggle Theme",category:"Preferences",handler:()=>ve.getState().toggleTheme()},{id:"build-active-file",title:"Build: Bundle Active File",category:"Build",handler:()=>{ve.getState().togglePreviewPanel()}},{id:"build-bundle-app",title:"Build: Bundle App (app.jsx)",category:"Build",handler:()=>{ve.getState().togglePreviewPanel()}}],Wn=()=>{const{commandPaletteOpen:l,toggleCommandPalette:t}=ve(),[e,s]=R.useState(""),[d,p]=R.useState(at),[h,f]=R.useState(0),m=R.useRef(null);R.useEffect(()=>{if(!e){p(at);return}const T=e.toLowerCase(),U=at.filter(A=>A.title.toLowerCase().includes(T)||A.category&&A.category.toLowerCase().includes(T));p(U),f(0)},[e]),R.useEffect(()=>{l&&m.current&&m.current.focus()},[l]);const P=T=>{switch(T.key){case"ArrowDown":T.preventDefault(),f(U=>U<d.length-1?U+1:U);break;case"ArrowUp":T.preventDefault(),f(U=>U>0?U-1:U);break;case"Enter":T.preventDefault(),C(d[h]);break;case"Escape":T.preventDefault(),t();break}},C=T=>{t(),T.handler()};return l?c.jsx("div",{className:"command-palette",onClick:()=>t(),children:c.jsxs("div",{className:"command-palette-content animate-fade-in",onClick:T=>T.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center px-3 py-2 bg-input border-b border-border",children:[c.jsx(St,{size:16,className:"mr-2 text-muted-foreground"}),c.jsx("input",{ref:m,type:"text",className:"w-full bg-transparent outline-none placeholder:text-muted-foreground",placeholder:"Type a command or search...",value:e,onChange:T=>s(T.target.value),onKeyDown:P})]}),c.jsx("div",{className:"command-palette-results",children:d.length>0?d.map((T,U)=>c.jsxs("div",{className:`command-palette-item ${U===h?"selected":""}`,onClick:()=>C(T),onMouseEnter:()=>f(U),children:[c.jsx("span",{className:"flex-1",children:T.title}),T.category&&c.jsx("span",{className:"text-xs text-muted-foreground mr-2",children:T.category}),T.shortcut&&c.jsx("kbd",{className:"bg-muted text-muted-foreground px-2 py-0.5 text-xs rounded",children:T.shortcut})]},T.id)):c.jsx("div",{className:"p-3 text-muted-foreground",children:"No commands found"})})]})}):null};function zn(l){return new Worker("/prometheos/assets/editor.worker-CozO_UIV.js",{type:"module",name:l==null?void 0:l.name})}function Gn(l){return new Worker("/prometheos/assets/css.worker-BhDbEE1e.js",{type:"module",name:l==null?void 0:l.name})}function qn(l){return new Worker("/prometheos/assets/html.worker-CUt5J86U.js",{type:"module",name:l==null?void 0:l.name})}function Hn(l){return new Worker("/prometheos/assets/json.worker-CnsrqLYN.js",{type:"module",name:l==null?void 0:l.name})}function Jn(l){return new Worker("/prometheos/assets/ts.worker-Ddk2u2yN.js",{type:"module",name:l==null?void 0:l.name})}window.MonacoEnvironment={getWorker(l,t){return t==="json"?new Hn:t==="css"||t==="scss"||t==="less"?new Gn:t==="html"||t==="handlebars"||t==="razor"?new qn:t==="typescript"||t==="javascript"?new Jn:new zn}};Ve.typescript.typescriptDefaults.setCompilerOptions({target:Ve.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,moduleResolution:Ve.typescript.ModuleResolutionKind.NodeJs,module:Ve.typescript.ModuleKind.ESNext,noEmit:!0,esModuleInterop:!0,jsx:Ve.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0,typeRoots:["node_modules/@types"]});Ve.typescript.typescriptDefaults.addExtraLib('declare module "*.css" { const content: string; export default content; }',"global.d.ts");const Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Pn},Symbol.toStringTag,{value:"Module"})),Yn=({previewTabId:l})=>{const{buildCode:t,buildError:e}=ve(),s=R.useRef(null);return R.useEffect(()=>{if(!t||e)return;const d=t||"console.log('No build output available');";if(!s.current)return;const p=s.current.contentDocument;p&&(p.open(),p.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body { font-family: sans-serif; margin: 0; padding: 16px; }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script type="text/javascript">
          try {
            ${d}
          } catch (err) {
            document.body.innerHTML = '<div style="color: red; padding: 20px;"><h3>Runtime Error:</h3><pre>' + err.message + '</pre></div>';
          }        <\/script>
      </body>
      </html>
    `),p.close())},[t,e]),c.jsx("div",{className:"panel-area flex flex-col",style:{height:"100%",minHeight:0,maxHeight:"none"},children:c.jsx("div",{className:"flex flex-col flex-1 relative",children:c.jsxs("div",{className:"relative h-full",children:[c.jsx("iframe",{ref:s,title:"Preview",className:"w-full h-full border-none bg-white"}),e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50",children:c.jsxs("div",{className:"text-red-600 p-4 text-center",children:[c.jsx("h3",{children:"Build Error"}),c.jsx("pre",{className:"text-sm mt-2 whitespace-pre-wrap",children:e})]})})," ",!t&&!e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:c.jsxs("div",{className:"text-gray-500 text-center",children:[c.jsx("h3",{className:"text-lg mb-2",children:"Preview Panel"}),c.jsx("p",{children:'Click "Run Preview" to see your code in action'})]})})]})})})},Xn=()=>{const{tabs:l,activeTab:t,closeTab:e,setActiveTab:s,panelVisible:d,previewPanelVisible:p,theme:h,setTabDirty:f,saveFile:m,togglePreviewPanel:P,getTabById:C,runBuild:T}=ve(),[U,A]=R.useState({}),[V,re]=R.useState(!1),oe=R.useRef({}),ge=R.useRef({}),[pe,ae]=R.useState(null);R.useEffect(()=>{let ee;const fe=[],ne=[],O=ge.current;return t&&(async de=>{const{getFileById:Ae,getTabById:me}=ve.getState(),xe=me(de);if(!xe)return;const ze=Ae(xe.fileId);if(!ze||!ze.content)return;ee||(ee=(await Je(()=>Promise.resolve().then(()=>Kn),void 0)).default);const Ye=oe.current[de];if(!Ye)return;const je=ee.editor.create(Ye,{value:ze.content,language:xe.language,theme:h==="dark"?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!0},scrollBeyondLastLine:!1,fontSize:14,fontFamily:"JetBrains Mono, monospace"});ge.current[de]=je,je.layout(),document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>je.layout()):setTimeout(()=>je.layout(),100);const Ge=()=>je.layout();return window.addEventListener("resize",Ge),ne.push(()=>window.removeEventListener("resize",Ge)),fe.push(je.onDidFocusEditorText(()=>je.layout())),fe.push(je.onDidChangeModelContent(()=>{const Xe=je.getValue();A(lt=>({...lt,[de]:Xe})),f(de,!0)})),je})(t),ee&&ee.editor&&(ee.editor.setTheme(h==="dark"?"vs-dark":"vs"),Object.values(ge.current).forEach(de=>de.layout())),()=>{ne.forEach(de=>de()),fe.forEach(de=>de.dispose()),ee&&ee.editor&&(Object.keys(O).forEach(de=>{const Ae=O[de];Ae&&Ae.dispose()}),ee.editor.getModels().forEach(de=>de.dispose()))}},[t,h,f]),R.useEffect(()=>{if(t&&ge.current[t]){const ee=ge.current[t];setTimeout(()=>{ee.layout(),ee.focus()},10)}},[t]),R.useEffect(()=>{p?(t&&t!=="preview"&&ae(t),s("preview")):(t==="preview"&&pe&&s(pe),ae(null))},[p,t,pe,s]);const Ce=ee=>{const fe=ge.current[ee];if(!fe)return;const ne=ve.getState().tabs.find(O=>O.id===ee);ne&&m(ne.fileId,fe.getValue())},Se=async()=>{if(V){re(!1),p&&P();return}await T(),re(!0),p||P()};return R.useEffect(()=>{!p&&V&&re(!1)},[p,V]),R.useEffect(()=>{(async()=>{const{ideSettings:fe}=await Je(async()=>{const{ideSettings:de}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:de}},[]);if(!fe.hideTerminalDuringPreview)return;const{panelVisible:ne,panelVisibilityBeforePreview:O,togglePanel:$e}=ve.getState();t==="preview"?ne&&(ve.setState({panelVisibilityBeforePreview:!0}),ne&&$e()):t&&t!=="preview"&&O&&!ne&&($e(),ve.setState({panelVisibilityBeforePreview:!1}))})()},[t]),c.jsxs("div",{className:"editor-area",children:[l.length>0||p?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"editor-tabs",children:c.jsxs("div",{className:"flex items-center justify-between w-full",children:[c.jsxs("div",{className:"flex",children:[l.map(ee=>c.jsxs("div",{className:`editor-tab ${t===ee.id?"active":""}`,onClick:()=>s(ee.id),children:[c.jsx("span",{className:"truncate flex-1",children:ee.title}),ee.isDirty&&c.jsx("span",{className:"ml-1 text-amber-400",children:"•"}),c.jsx("button",{className:"ml-2 text-blue-500 hover:text-blue-400",onClick:fe=>{fe.stopPropagation(),Ce(ee.id)},title:"Save",children:c.jsx(Mn,{size:14})}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:fe=>{fe.stopPropagation(),e(ee.id)},children:c.jsx(ut,{size:16})})]},ee.id)),p&&pe&&(()=>{const ee=C(pe),fe=ee?`Preview - ${ee.title}`:"Preview";return c.jsxs("div",{className:`editor-tab ${t==="preview"?"active":""}`,onClick:()=>s("preview"),children:[c.jsx("span",{className:"truncate flex-1",children:fe}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:ne=>{ne.stopPropagation(),P()},children:c.jsx(ut,{size:16})})]},"preview")})()]}),t&&t!=="preview"&&c.jsx("button",{className:`px-3 py-1 rounded text-sm flex items-center gap-1 mr-2 ${V?"bg-red-600 hover:bg-red-700 text-white":"bg-green-600 hover:bg-green-700 text-white"}`,onClick:Se,title:V?"Stop":"Run",children:V?c.jsxs(c.Fragment,{children:[c.jsx(Vn,{size:14}),"Stop Preview"]}):c.jsxs(c.Fragment,{children:[c.jsx(_n,{size:14}),"Run"]})})]})}),c.jsxs("div",{className:"editor-content",children:[l.map(ee=>c.jsx("div",{ref:fe=>oe.current[ee.id]=fe,className:"h-full w-full",style:{display:t===ee.id?"block":"none"},"data-tab-id":ee.id},ee.id)),p&&pe&&c.jsx("div",{className:"h-full w-full",style:{display:t==="preview"?"block":"none"},children:c.jsx(Yn,{previewTabId:pe})},"preview")]})]}):c.jsx("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl mb-2",children:"Welcome to Code Builder"}),c.jsx("p",{children:"Open a file to start editing"})]})}),d&&c.jsx(Qn,{})]})},Qn=()=>{const{togglePanel:l,buildOutput:t,buildError:e,isBuilding:s,runBuild:d,togglePreviewPanel:p}=ve(),[h,f]=R.useState("terminal"),[m,P]=R.useState("");R.useEffect(()=>{(t||e||s)&&f("output")},[t,e,s]);const C=async U=>{U.startsWith("esbuild ")&&(await d(U),P(""))},T=()=>{const{activeTab:U,getTabById:A,getFileById:V}=ve.getState();if(!U)return"esbuild app.js --bundle --minify --format=esm";const re=A(U);if(!re)return"esbuild app.js --bundle --minify --format=esm";const oe=V(re.fileId);return!oe||oe.type!=="file"?"esbuild app.js --bundle --minify --format=esm":`esbuild ${oe.id} --bundle --minify --format=esm`};return c.jsxs("div",{className:"panel-area flex flex-col h-1/3 border-t border-sidebar-border",children:[c.jsxs("div",{className:"flex items-center border-b border-sidebar-border p-1",children:[c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("button",{className:`px-2 ${h==="terminal"?"border-b-2 border-foreground":""}`,onClick:()=>f("terminal"),children:"Terminal"}),c.jsx("button",{className:`px-2 ${h==="output"?"border-b-2 border-foreground":""}`,onClick:()=>f("output"),children:"Output"})]}),c.jsx("button",{className:"ml-auto text-sidebar-foreground hover:text-foreground p-1",onClick:l,children:c.jsx(ut,{size:16})})]}),c.jsxs("div",{className:"flex-1 p-2 font-mono text-sm overflow-auto",children:[h==="terminal"&&c.jsx("div",{className:"text-muted-foreground",children:"~ $"})," ",h==="output"&&c.jsxs("div",{children:[c.jsx("div",{className:"mb-2",children:c.jsx("input",{type:"text",placeholder:T(),value:m,className:"w-full bg-input text-foreground px-2 py-1 rounded text-sm font-mono",onChange:U=>P(U.target.value),onKeyDown:U=>{U.key==="Enter"&&C(U.currentTarget.value)}})}),s&&c.jsx("div",{className:"text-blue-500 mb-2",children:"Building..."}),e&&c.jsx("div",{className:"bg-destructive/10 text-destructive p-2 rounded whitespace-pre-wrap overflow-auto mb-2",children:e}),!e&&t&&c.jsx("div",{className:"text-xs font-mono bg-sidebar-accent p-2 rounded overflow-auto",children:c.jsx("pre",{className:"whitespace-pre-wrap",children:t})}),!s&&!e&&!t&&c.jsx("div",{className:"text-muted-foreground",children:"Enter an esbuild command above or run preview to see build output here"})]})]})]})},Zn=()=>{const{sidebarVisible:l,previewPanelVisible:t,activeView:e}=ve(),s=R.useRef(null),[d,p]=R.useState(!1),[h,f]=R.useState(0),[m,P]=R.useState(0),[C,T]=R.useState(240);R.useEffect(()=>{const A=re=>{if(!d)return;const oe=re.clientX-h,ge=Math.max(200,Math.min(500,m+oe));T(ge),s.current&&(s.current.style.width=`${ge}px`)},V=()=>{p(!1),document.body.style.cursor="",document.body.style.userSelect=""};return d&&(document.addEventListener("mousemove",A),document.addEventListener("mouseup",V),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",V)}},[d,h,m]);const U=A=>{var V;p(!0),f(A.clientX),P(((V=s.current)==null?void 0:V.offsetWidth)||240),A.preventDefault()};return!l||t?null:c.jsxs("div",{ref:s,className:"side-bar relative flex flex-col",style:{width:`${C}px`},children:[c.jsx("div",{className:"p-2 font-medium flex items-center justify-between border-b border-sidebar-border",children:c.jsxs("div",{className:"uppercase text-xs tracking-wider",children:[e==="explorer"&&"Explorer",e==="search"&&"Search",e==="git"&&"Source Control",e==="extensions"&&"Extensions"]})}),c.jsxs("div",{className:"px-2 py-1 flex-1 overflow-auto",children:[e==="explorer"&&c.jsx(er,{}),e==="search"&&c.jsx(tr,{}),e==="git"&&c.jsx(nr,{}),e==="extensions"&&c.jsx(rr,{})]}),c.jsx("div",{className:"resize-handle",onMouseDown:U})]})},er=()=>{var h,f;const l=Le(m=>m.fs),t=(h=l.children)==null?void 0:h.find(m=>m.name===".vfsignore"&&m.type==="file"),e=R.useMemo(()=>!t||!t.content?[]:t.content.split(/\r?\n/).map(m=>m.trim()).filter(m=>m&&!m.startsWith("#")),[t]),s=R.useMemo(()=>e.map(m=>{const P=m.endsWith("/");let T=(P?m.slice(0,-1):m).replace(/\*\*/g,".*").replace(/\*/g,"[^/]*").replace(/\?/g,".");return P&&(T=`${T}(/.*)?`),new RegExp(`^${T}$`)}),[e]),p=[...((f=l.children)==null?void 0:f.filter(m=>m.name!==".vfsignore"&&!s.some(P=>P.test(m.id))))||[]].sort((m,P)=>m.type!==P.type?m.type==="folder"?-1:1:m.name.localeCompare(P.name));return c.jsx("div",{className:"explorer-tree",children:p.map(m=>c.jsx(Pt,{item:m,level:0,ignoreMatchers:s},m.id))})},Pt=({item:l,level:t,ignoreMatchers:e})=>{const[s,d]=fn.useState(!0),{openTab:p}=ve(),h=m=>{m.stopPropagation(),l.type==="folder"&&d(!s)},f=()=>{l.type==="file"?p(l.id):d(!s)};return c.jsxs("div",{children:[c.jsx("div",{className:"tree-item",onClick:f,style:{paddingLeft:`${t*20+4}px`},children:c.jsxs("span",{className:"flex items-center",children:[l.type==="folder"&&c.jsx("span",{className:"mr-1 text-sidebar-foreground",onClick:h,children:s?c.jsx(Nn,{size:16}):c.jsx($n,{size:16})}),l.type==="folder"?c.jsx(Tn,{size:16,className:"mr-1 text-sidebar-foreground"}):c.jsx(Cn,{size:16,className:"mr-1 text-sidebar-foreground"}),c.jsx("span",{className:"truncate",children:l.name})]})}),s&&l.type==="folder"&&l.children&&c.jsx("div",{children:[...l.children.filter(C=>C.name!==".vfsignore"&&!e.some(T=>T.test(C.id)))].sort((C,T)=>C.type!==T.type?C.type==="folder"?-1:1:C.name.localeCompare(T.name)).map(C=>c.jsx(Pt,{item:C,level:t+1,ignoreMatchers:e},C.id))})]})},tr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search in files..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No results found. Try searching for something."})]}),nr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("div",{className:"text-sm font-medium mb-2",children:"Changes"}),c.jsx("div",{className:"text-sm text-muted-foreground",children:"No changes detected in your workspace."})]}),rr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search Extensions..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No extensions installed. Search for extensions in the marketplace."})]}),sr=()=>{const{theme:l,toggleTheme:t,toggleCommandPalette:e}=ve();return c.jsxs("div",{className:"status-bar flex items-center px-2 text-xs",children:[c.jsx("div",{className:"flex items-center",children:c.jsxs("button",{className:"flex items-center px-2 py-1 hover:bg-sidebar-accent rounded",onClick:e,children:[c.jsx(Ln,{size:14,className:"mr-1"}),c.jsx("span",{children:"Command Palette"})]})}),c.jsx("div",{className:"flex-1"}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(Ct,{size:14,className:"mr-1"}),c.jsx("span",{children:"main"})]}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Ln 1, Col 1"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Spaces: 2"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"UTF-8"})}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",onClick:t,children:l==="dark"?"☀️":"🌙"}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",children:c.jsx(In,{size:14})})]})]})},ir=()=>{const{theme:l,toggleCommandPalette:t,toggleSidebar:e,togglePanel:s,togglePreviewPanel:d,sidebarVisible:p}=ve(),h=Le(f=>f.init);return R.useEffect(()=>{h()},[h]),R.useEffect(()=>{const f=document.querySelector(".ide-builder-app");f&&(f.classList.toggle("light",l==="light"),f.classList.toggle("dark",l==="dark"))},[l]),R.useEffect(()=>{const f=m=>{m.ctrlKey&&m.shiftKey&&m.key==="P"&&(m.preventDefault(),t()),m.ctrlKey&&m.key==="b"&&(m.preventDefault(),e()),m.ctrlKey&&m.key==="`"&&(m.preventDefault(),s()),m.ctrlKey&&m.shiftKey&&m.key==="V"&&(m.preventDefault(),d())};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[t,e,s,d]),c.jsxs("div",{className:"ide-container",children:[p&&c.jsx(Zn,{}),c.jsx(Xn,{}),c.jsx(sr,{}),c.jsx(Wn,{})]})},lr=()=>c.jsx("div",{className:"ide-builder-app h-full w-full overflow-hidden",style:{height:"100%",width:"100%"},children:c.jsx(ir,{})}),Vr={id:wt.id,manifest:wt,init:async()=>{console.log("Builder IDE plugin initialized")},render:()=>c.jsx(lr,{}),onOpen:()=>{console.log("Builder IDE opened")},onClose:()=>{console.log("Builder IDE closed")}};var[rt,Lr]=hn("Tooltip",[Tt]),st=Tt(),_t="TooltipProvider",or=700,dt="tooltip.open",[ar,ht]=rt(_t),Nt=l=>{const{__scopeTooltip:t,delayDuration:e=or,skipDelayDuration:s=300,disableHoverableContent:d=!1,children:p}=l,h=R.useRef(!0),f=R.useRef(!1),m=R.useRef(0);return R.useEffect(()=>{const P=m.current;return()=>window.clearTimeout(P)},[]),c.jsx(ar,{scope:t,isOpenDelayedRef:h,delayDuration:e,onOpen:R.useCallback(()=>{window.clearTimeout(m.current),h.current=!1},[]),onClose:R.useCallback(()=>{window.clearTimeout(m.current),m.current=window.setTimeout(()=>h.current=!0,s)},[s]),isPointerInTransitRef:f,onPointerInTransitChange:R.useCallback(P=>{f.current=P},[]),disableHoverableContent:d,children:p})};Nt.displayName=_t;var Ke="Tooltip",[cr,it]=rt(Ke),$t=l=>{const{__scopeTooltip:t,children:e,open:s,defaultOpen:d,onOpenChange:p,disableHoverableContent:h,delayDuration:f}=l,m=ht(Ke,l.__scopeTooltip),P=st(t),[C,T]=R.useState(null),U=mn(),A=R.useRef(0),V=h??m.disableHoverableContent,re=f??m.delayDuration,oe=R.useRef(!1),[ge,pe]=pn({prop:s,defaultProp:d??!1,onChange:fe=>{fe?(m.onOpen(),document.dispatchEvent(new CustomEvent(dt))):m.onClose(),p==null||p(fe)},caller:Ke}),ae=R.useMemo(()=>ge?oe.current?"delayed-open":"instant-open":"closed",[ge]),Ce=R.useCallback(()=>{window.clearTimeout(A.current),A.current=0,oe.current=!1,pe(!0)},[pe]),Se=R.useCallback(()=>{window.clearTimeout(A.current),A.current=0,pe(!1)},[pe]),ee=R.useCallback(()=>{window.clearTimeout(A.current),A.current=window.setTimeout(()=>{oe.current=!0,pe(!0),A.current=0},re)},[re,pe]);return R.useEffect(()=>()=>{A.current&&(window.clearTimeout(A.current),A.current=0)},[]),c.jsx(Rn,{...P,children:c.jsx(cr,{scope:t,contentId:U,open:ge,stateAttribute:ae,trigger:C,onTriggerChange:T,onTriggerEnter:R.useCallback(()=>{m.isOpenDelayedRef.current?ee():Ce()},[m.isOpenDelayedRef,ee,Ce]),onTriggerLeave:R.useCallback(()=>{V?Se():(window.clearTimeout(A.current),A.current=0)},[Se,V]),onOpen:Ce,onClose:Se,disableHoverableContent:V,children:e})})};$t.displayName=Ke;var ft="TooltipTrigger",Rt=R.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,d=it(ft,e),p=ht(ft,e),h=st(e),f=R.useRef(null),m=kt(t,f,d.onTriggerChange),P=R.useRef(!1),C=R.useRef(!1),T=R.useCallback(()=>P.current=!1,[]);return R.useEffect(()=>()=>document.removeEventListener("pointerup",T),[T]),c.jsx(Dn,{asChild:!0,...h,children:c.jsx(gn.button,{"aria-describedby":d.open?d.contentId:void 0,"data-state":d.stateAttribute,...s,ref:m,onPointerMove:Me(l.onPointerMove,U=>{U.pointerType!=="touch"&&!C.current&&!p.isPointerInTransitRef.current&&(d.onTriggerEnter(),C.current=!0)}),onPointerLeave:Me(l.onPointerLeave,()=>{d.onTriggerLeave(),C.current=!1}),onPointerDown:Me(l.onPointerDown,()=>{d.open&&d.onClose(),P.current=!0,document.addEventListener("pointerup",T,{once:!0})}),onFocus:Me(l.onFocus,()=>{P.current||d.onOpen()}),onBlur:Me(l.onBlur,d.onClose),onClick:Me(l.onClick,d.onClose)})})});Rt.displayName=ft;var ur="TooltipPortal",[Ur,dr]=rt(ur,{forceMount:void 0}),We="TooltipContent",Dt=R.forwardRef((l,t)=>{const e=dr(We,l.__scopeTooltip),{forceMount:s=e.forceMount,side:d="top",...p}=l,h=it(We,l.__scopeTooltip);return c.jsx(vn,{present:s||h.open,children:h.disableHoverableContent?c.jsx(At,{side:d,...p,ref:t}):c.jsx(fr,{side:d,...p,ref:t})})}),fr=R.forwardRef((l,t)=>{const e=it(We,l.__scopeTooltip),s=ht(We,l.__scopeTooltip),d=R.useRef(null),p=kt(t,d),[h,f]=R.useState(null),{trigger:m,onClose:P}=e,C=d.current,{onPointerInTransitChange:T}=s,U=R.useCallback(()=>{f(null),T(!1)},[T]),A=R.useCallback((V,re)=>{const oe=V.currentTarget,ge={x:V.clientX,y:V.clientY},pe=vr(ge,oe.getBoundingClientRect()),ae=yr(ge,pe),Ce=br(re.getBoundingClientRect()),Se=xr([...ae,...Ce]);f(Se),T(!0)},[T]);return R.useEffect(()=>()=>U(),[U]),R.useEffect(()=>{if(m&&C){const V=oe=>A(oe,C),re=oe=>A(oe,m);return m.addEventListener("pointerleave",V),C.addEventListener("pointerleave",re),()=>{m.removeEventListener("pointerleave",V),C.removeEventListener("pointerleave",re)}}},[m,C,A,U]),R.useEffect(()=>{if(h){const V=re=>{const oe=re.target,ge={x:re.clientX,y:re.clientY},pe=(m==null?void 0:m.contains(oe))||(C==null?void 0:C.contains(oe)),ae=!wr(ge,h);pe?U():ae&&(U(),P())};return document.addEventListener("pointermove",V),()=>document.removeEventListener("pointermove",V)}},[m,C,h,P,U]),c.jsx(At,{...l,ref:p})}),[hr,mr]=rt(Ke,{isInside:!1}),pr=bn("TooltipContent"),At=R.forwardRef((l,t)=>{const{__scopeTooltip:e,children:s,"aria-label":d,onEscapeKeyDown:p,onPointerDownOutside:h,...f}=l,m=it(We,e),P=st(e),{onClose:C}=m;return R.useEffect(()=>(document.addEventListener(dt,C),()=>document.removeEventListener(dt,C)),[C]),R.useEffect(()=>{if(m.trigger){const T=U=>{const A=U.target;A!=null&&A.contains(m.trigger)&&C()};return window.addEventListener("scroll",T,{capture:!0}),()=>window.removeEventListener("scroll",T,{capture:!0})}},[m.trigger,C]),c.jsx(yn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:T=>T.preventDefault(),onDismiss:C,children:c.jsxs(An,{"data-state":m.stateAttribute,...P,...f,ref:t,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(pr,{children:s}),c.jsx(hr,{scope:e,isInside:!0,children:c.jsx(wn,{id:m.contentId,role:"tooltip",children:d||s})})]})})});Dt.displayName=We;var Ot="TooltipArrow",gr=R.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,d=st(e);return mr(Ot,e).isInside?null:c.jsx(On,{...d,...s,ref:t})});gr.displayName=Ot;function vr(l,t){const e=Math.abs(t.top-l.y),s=Math.abs(t.bottom-l.y),d=Math.abs(t.right-l.x),p=Math.abs(t.left-l.x);switch(Math.min(e,s,d,p)){case p:return"left";case d:return"right";case e:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function yr(l,t,e=5){const s=[];switch(t){case"top":s.push({x:l.x-e,y:l.y+e},{x:l.x+e,y:l.y+e});break;case"bottom":s.push({x:l.x-e,y:l.y-e},{x:l.x+e,y:l.y-e});break;case"left":s.push({x:l.x+e,y:l.y-e},{x:l.x+e,y:l.y+e});break;case"right":s.push({x:l.x-e,y:l.y-e},{x:l.x-e,y:l.y+e});break}return s}function br(l){const{top:t,right:e,bottom:s,left:d}=l;return[{x:d,y:t},{x:e,y:t},{x:e,y:s},{x:d,y:s}]}function wr(l,t){const{x:e,y:s}=l;let d=!1;for(let p=0,h=t.length-1;p<t.length;h=p++){const f=t[p],m=t[h],P=f.x,C=f.y,T=m.x,U=m.y;C>s!=U>s&&e<(T-P)*(s-C)/(U-C)+P&&(d=!d)}return d}function xr(l){const t=l.slice();return t.sort((e,s)=>e.x<s.x?-1:e.x>s.x?1:e.y<s.y?-1:e.y>s.y?1:0),jr(t)}function jr(l){if(l.length<=1)return l.slice();const t=[];for(let s=0;s<l.length;s++){const d=l[s];for(;t.length>=2;){const p=t[t.length-1],h=t[t.length-2];if((p.x-h.x)*(d.y-h.y)>=(p.y-h.y)*(d.x-h.x))t.pop();else break}t.push(d)}t.pop();const e=[];for(let s=l.length-1;s>=0;s--){const d=l[s];for(;e.length>=2;){const p=e[e.length-1],h=e[e.length-2];if((p.x-h.x)*(d.y-h.y)>=(p.y-h.y)*(d.x-h.x))e.pop();else break}e.push(d)}return e.pop(),t.length===1&&e.length===1&&t[0].x===e[0].x&&t[0].y===e[0].y?t:t.concat(e)}var Er=Nt,kr=$t,Tr=Rt,It=Dt;const Cr=Er,Sr=kr,Pr=Tr,Bt=R.forwardRef(({className:l,sideOffset:t=4,...e},s)=>c.jsx(It,{ref:s,sideOffset:t,className:xn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l),...e}));Bt.displayName=It.displayName;const Wr=()=>{const{activeView:l,setActiveView:t}=ve(),e=[{id:"explorer",icon:Bn,label:"Explorer"},{id:"search",icon:St,label:"Search"},{id:"git",icon:Ct,label:"Source Control"},{id:"extensions",icon:Fn,label:"Extensions"}];return c.jsxs("div",{className:"activity-bar flex flex-col items-center py-2",children:[c.jsx("div",{className:"flex flex-col items-center space-y-4",children:e.map(s=>c.jsx(xt,{icon:s.icon,label:s.label,isActive:l===s.id,onClick:()=>t(s.id)},s.id))}),c.jsx("div",{className:"flex-1"}),c.jsx(xt,{icon:Sn,label:"Settings",isActive:!1,onClick:()=>{}})]})},xt=({icon:l,label:t,isActive:e,onClick:s})=>c.jsx(Cr,{children:c.jsxs(Sr,{delayDuration:300,children:[c.jsx(Pr,{asChild:!0,children:c.jsxs("button",{className:`p-2 rounded transition-colors relative ${e?"text-primary bg-sidebar-accent":"text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"}`,onClick:s,"aria-label":t,children:[e&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-0.5 bg-primary"}),c.jsx(l,{size:24})]})}),c.jsx(Bt,{side:"right",className:"bg-popover text-popover-foreground",children:t})]})});var Ft={exports:{}};(function(l){(t=>{var e=Object.defineProperty,s=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,h=(n,i)=>{for(var o in i)e(n,o,{get:i[o],enumerable:!0})},f=(n,i,o,E)=>{if(i&&typeof i=="object"||typeof i=="function")for(let S of d(i))!p.call(n,S)&&S!==o&&e(n,S,{get:()=>i[S],enumerable:!(E=s(i,S))||E.enumerable});return n},m=n=>f(e({},"__esModule",{value:!0}),n),P=(n,i,o)=>new Promise((E,S)=>{var N=j=>{try{B(o.next(j))}catch(L){S(L)}},x=j=>{try{B(o.throw(j))}catch(L){S(L)}},B=j=>j.done?E(j.value):Promise.resolve(j.value).then(N,x);B((o=o.apply(n,i)).next())}),C={};h(C,{analyzeMetafile:()=>en,analyzeMetafileSync:()=>sn,build:()=>Yt,buildSync:()=>tn,context:()=>Xt,default:()=>an,formatMessages:()=>Zt,formatMessagesSync:()=>rn,initialize:()=>ln,transform:()=>Qt,transformSync:()=>nn,version:()=>Kt}),t.exports=m(C);function T(n){let i=E=>{if(E===null)o.write8(0);else if(typeof E=="boolean")o.write8(1),o.write8(+E);else if(typeof E=="number")o.write8(2),o.write32(E|0);else if(typeof E=="string")o.write8(3),o.write(V(E));else if(E instanceof Uint8Array)o.write8(4),o.write(E);else if(E instanceof Array){o.write8(5),o.write32(E.length);for(let S of E)i(S)}else{let S=Object.keys(E);o.write8(6),o.write32(S.length);for(let N of S)o.write(V(N)),i(E[N])}},o=new A;return o.write32(0),o.write32(n.id<<1|+!n.isRequest),i(n.value),pe(o.buf,o.len-4,0),o.buf.subarray(0,o.len)}function U(n){let i=()=>{switch(o.read8()){case 0:return null;case 1:return!!o.read8();case 2:return o.read32();case 3:return re(o.read());case 4:return o.read();case 5:{let x=o.read32(),B=[];for(let j=0;j<x;j++)B.push(i());return B}case 6:{let x=o.read32(),B={};for(let j=0;j<x;j++)B[re(o.read())]=i();return B}default:throw new Error("Invalid packet")}},o=new A(n),E=o.read32(),S=(E&1)===0;E>>>=1;let N=i();if(o.ptr!==n.length)throw new Error("Invalid packet");return{id:E,isRequest:S,value:N}}var A=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let i=new Uint8Array((this.len+n)*2);i.set(this.buf),this.buf=i}return this.len+=n,this.len-n}write8(n){let i=this._write(1);this.buf[i]=n}write32(n){let i=this._write(4);pe(this.buf,n,i)}write(n){let i=this._write(4+n.length);pe(this.buf,n.length,i),this.buf.set(n,i+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ge(this.buf,this._read(4))}read(){let n=this.read32(),i=new Uint8Array(n),o=this._read(i.length);return i.set(this.buf.subarray(o,o+n)),i}},V,re,oe;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,i=new TextDecoder;V=o=>n.encode(o),re=o=>i.decode(o),oe='new TextEncoder().encode("")'}else if(typeof Buffer<"u")V=n=>Buffer.from(n),re=n=>{let{buffer:i,byteOffset:o,byteLength:E}=n;return Buffer.from(i,o,E).toString()},oe='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(V("")instanceof Uint8Array))throw new Error(`Invariant violation: "${oe} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ge(n,i){return n[i++]|n[i++]<<8|n[i++]<<16|n[i++]<<24}function pe(n,i,o){n[o++]=i,n[o++]=i>>8,n[o++]=i>>16,n[o++]=i>>24}var ae=JSON.stringify,Ce="warning",Se="silent";function ee(n){if(we(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var fe=()=>null,ne=n=>typeof n=="boolean"?null:"a boolean",O=n=>typeof n=="string"?null:"a string",$e=n=>n instanceof RegExp?null:"a RegExp object",de=n=>typeof n=="number"&&n===(n|0)?null:"an integer",Ae=n=>typeof n=="function"?null:"a function",me=n=>Array.isArray(n)?null:"an array",xe=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",ze=n=>typeof n=="object"&&n!==null?null:"an array or an object",Ye=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",je=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",Ge=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",Xe=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",lt=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",mt=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",Lt=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function u(n,i,o,E){let S=n[o];if(i[o+""]=!0,S===void 0)return;let N=E(S);if(N!==null)throw new Error(`${ae(o)} must be ${N}`);return S}function ye(n,i,o){for(let E in n)if(!(E in i))throw new Error(`Invalid option ${o}: ${ae(E)}`)}function Ut(n){let i=Object.create(null),o=u(n,i,"wasmURL",Lt),E=u(n,i,"wasmModule",Ye),S=u(n,i,"worker",ne);return ye(n,i,"in initialize() call"),{wasmURL:o,wasmModule:E,worker:S}}function pt(n){let i;if(n!==void 0){i=Object.create(null);for(let o in n){let E=n[o];if(typeof E=="string"||E===!1)i[o]=E;else throw new Error(`Expected ${ae(o)} in mangle cache to map to either a string or false`)}}return i}function Qe(n,i,o,E,S){let N=u(i,o,"color",ne),x=u(i,o,"logLevel",O),B=u(i,o,"logLimit",de);N!==void 0?n.push(`--color=${N}`):E&&n.push("--color=true"),n.push(`--log-level=${x||S}`),n.push(`--log-limit=${B||0}`)}function we(n,i,o){if(typeof n!="string")throw new Error(`Expected value for ${i}${o!==void 0?" "+ae(o):""} to be a string, got ${typeof n} instead`);return n}function gt(n,i,o){let E=u(i,o,"legalComments",O),S=u(i,o,"sourceRoot",O),N=u(i,o,"sourcesContent",ne),x=u(i,o,"target",lt),B=u(i,o,"format",O),j=u(i,o,"globalName",O),L=u(i,o,"mangleProps",$e),W=u(i,o,"reserveProps",$e),Q=u(i,o,"mangleQuoted",ne),se=u(i,o,"minify",ne),G=u(i,o,"minifySyntax",ne),le=u(i,o,"minifyWhitespace",ne),F=u(i,o,"minifyIdentifiers",ne),q=u(i,o,"lineLimit",de),te=u(i,o,"drop",me),J=u(i,o,"charset",O),b=u(i,o,"treeShaking",ne),g=u(i,o,"ignoreAnnotations",ne),v=u(i,o,"jsx",O),y=u(i,o,"jsxFactory",O),_=u(i,o,"jsxFragment",O),$=u(i,o,"jsxImportSource",O),z=u(i,o,"jsxDev",ne),r=u(i,o,"jsxSideEffects",ne),a=u(i,o,"define",xe),w=u(i,o,"logOverride",xe),k=u(i,o,"supported",xe),I=u(i,o,"pure",me),Z=u(i,o,"keepNames",ne),K=u(i,o,"platform",O),H=u(i,o,"tsconfigRaw",Xe);if(E&&n.push(`--legal-comments=${E}`),S!==void 0&&n.push(`--source-root=${S}`),N!==void 0&&n.push(`--sources-content=${N}`),x&&(Array.isArray(x)?n.push(`--target=${Array.from(x).map(ee).join(",")}`):n.push(`--target=${ee(x)}`)),B&&n.push(`--format=${B}`),j&&n.push(`--global-name=${j}`),K&&n.push(`--platform=${K}`),H&&n.push(`--tsconfig-raw=${typeof H=="string"?H:JSON.stringify(H)}`),se&&n.push("--minify"),G&&n.push("--minify-syntax"),le&&n.push("--minify-whitespace"),F&&n.push("--minify-identifiers"),q&&n.push(`--line-limit=${q}`),J&&n.push(`--charset=${J}`),b!==void 0&&n.push(`--tree-shaking=${b}`),g&&n.push("--ignore-annotations"),te)for(let M of te)n.push(`--drop:${we(M,"drop")}`);if(L&&n.push(`--mangle-props=${L.source}`),W&&n.push(`--reserve-props=${W.source}`),Q!==void 0&&n.push(`--mangle-quoted=${Q}`),v&&n.push(`--jsx=${v}`),y&&n.push(`--jsx-factory=${y}`),_&&n.push(`--jsx-fragment=${_}`),$&&n.push(`--jsx-import-source=${$}`),z&&n.push("--jsx-dev"),r&&n.push("--jsx-side-effects"),a)for(let M in a){if(M.indexOf("=")>=0)throw new Error(`Invalid define: ${M}`);n.push(`--define:${M}=${we(a[M],"define",M)}`)}if(w)for(let M in w){if(M.indexOf("=")>=0)throw new Error(`Invalid log override: ${M}`);n.push(`--log-override:${M}=${we(w[M],"log override",M)}`)}if(k)for(let M in k){if(M.indexOf("=")>=0)throw new Error(`Invalid supported: ${M}`);const ue=k[M];if(typeof ue!="boolean")throw new Error(`Expected value for supported ${ae(M)} to be a boolean, got ${typeof ue} instead`);n.push(`--supported:${M}=${ue}`)}if(I)for(let M of I)n.push(`--pure:${we(M,"pure")}`);Z&&n.push("--keep-names")}function Wt(n,i,o,E,S){var N;let x=[],B=[],j=Object.create(null),L=null,W=null;Qe(x,i,j,o,E),gt(x,i,j);let Q=u(i,j,"sourcemap",Ge),se=u(i,j,"bundle",ne),G=u(i,j,"splitting",ne),le=u(i,j,"preserveSymlinks",ne),F=u(i,j,"metafile",ne),q=u(i,j,"outfile",O),te=u(i,j,"outdir",O),J=u(i,j,"outbase",O),b=u(i,j,"tsconfig",O),g=u(i,j,"resolveExtensions",me),v=u(i,j,"nodePaths",me),y=u(i,j,"mainFields",me),_=u(i,j,"conditions",me),$=u(i,j,"external",me),z=u(i,j,"packages",O),r=u(i,j,"alias",xe),a=u(i,j,"loader",xe),w=u(i,j,"outExtension",xe),k=u(i,j,"publicPath",O),I=u(i,j,"entryNames",O),Z=u(i,j,"chunkNames",O),K=u(i,j,"assetNames",O),H=u(i,j,"inject",me),M=u(i,j,"banner",xe),ue=u(i,j,"footer",xe),Y=u(i,j,"entryPoints",ze),ie=u(i,j,"absWorkingDir",O),X=u(i,j,"stdin",xe),ce=(N=u(i,j,"write",ne))!=null?N:S,be=u(i,j,"allowOverwrite",ne),Te=u(i,j,"mangleCache",xe);if(j.plugins=!0,ye(i,j,`in ${n}() call`),Q&&x.push(`--sourcemap${Q===!0?"":`=${Q}`}`),se&&x.push("--bundle"),be&&x.push("--allow-overwrite"),G&&x.push("--splitting"),le&&x.push("--preserve-symlinks"),F&&x.push("--metafile"),q&&x.push(`--outfile=${q}`),te&&x.push(`--outdir=${te}`),J&&x.push(`--outbase=${J}`),b&&x.push(`--tsconfig=${b}`),z&&x.push(`--packages=${z}`),g){let D=[];for(let he of g){if(we(he,"resolve extension"),he.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${he}`);D.push(he)}x.push(`--resolve-extensions=${D.join(",")}`)}if(k&&x.push(`--public-path=${k}`),I&&x.push(`--entry-names=${I}`),Z&&x.push(`--chunk-names=${Z}`),K&&x.push(`--asset-names=${K}`),y){let D=[];for(let he of y){if(we(he,"main field"),he.indexOf(",")>=0)throw new Error(`Invalid main field: ${he}`);D.push(he)}x.push(`--main-fields=${D.join(",")}`)}if(_){let D=[];for(let he of _){if(we(he,"condition"),he.indexOf(",")>=0)throw new Error(`Invalid condition: ${he}`);D.push(he)}x.push(`--conditions=${D.join(",")}`)}if($)for(let D of $)x.push(`--external:${we(D,"external")}`);if(r)for(let D in r){if(D.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${D}`);x.push(`--alias:${D}=${we(r[D],"alias",D)}`)}if(M)for(let D in M){if(D.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${D}`);x.push(`--banner:${D}=${we(M[D],"banner",D)}`)}if(ue)for(let D in ue){if(D.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${D}`);x.push(`--footer:${D}=${we(ue[D],"footer",D)}`)}if(H)for(let D of H)x.push(`--inject:${we(D,"inject")}`);if(a)for(let D in a){if(D.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${D}`);x.push(`--loader:${D}=${we(a[D],"loader",D)}`)}if(w)for(let D in w){if(D.indexOf("=")>=0)throw new Error(`Invalid out extension: ${D}`);x.push(`--out-extension:${D}=${we(w[D],"out extension",D)}`)}if(Y)if(Array.isArray(Y))for(let D=0,he=Y.length;D<he;D++){let Ee=Y[D];if(typeof Ee=="object"&&Ee!==null){let ke=Object.create(null),Re=u(Ee,ke,"in",O),tt=u(Ee,ke,"out",O);if(ye(Ee,ke,"in entry point at index "+D),Re===void 0)throw new Error('Missing property "in" for entry point at index '+D);if(tt===void 0)throw new Error('Missing property "out" for entry point at index '+D);B.push([tt,Re])}else B.push(["",we(Ee,"entry point at index "+D)])}else for(let D in Y)B.push([D,we(Y[D],"entry point",D)]);if(X){let D=Object.create(null),he=u(X,D,"contents",mt),Ee=u(X,D,"resolveDir",O),ke=u(X,D,"sourcefile",O),Re=u(X,D,"loader",O);ye(X,D,'in "stdin" object'),ke&&x.push(`--sourcefile=${ke}`),Re&&x.push(`--loader=${Re}`),Ee&&(W=Ee),typeof he=="string"?L=V(he):he instanceof Uint8Array&&(L=he)}let Fe=[];if(v)for(let D of v)D+="",Fe.push(D);return{entries:B,flags:x,write:ce,stdinContents:L,stdinResolveDir:W,absWorkingDir:ie,nodePaths:Fe,mangleCache:pt(Te)}}function zt(n,i,o,E){let S=[],N=Object.create(null);Qe(S,i,N,o,E),gt(S,i,N);let x=u(i,N,"sourcemap",Ge),B=u(i,N,"sourcefile",O),j=u(i,N,"loader",O),L=u(i,N,"banner",O),W=u(i,N,"footer",O),Q=u(i,N,"mangleCache",xe);return ye(i,N,`in ${n}() call`),x&&S.push(`--sourcemap=${x===!0?"external":x}`),B&&S.push(`--sourcefile=${B}`),j&&S.push(`--loader=${j}`),L&&S.push(`--banner=${L}`),W&&S.push(`--footer=${W}`),{flags:S,mangleCache:pt(Q)}}function Gt(n){const i={},o={didClose:!1,reason:""};let E={},S=0,N=0,x=new Uint8Array(16*1024),B=0,j=b=>{let g=B+b.length;if(g>x.length){let y=new Uint8Array(g*2);y.set(x),x=y}x.set(b,B),B+=b.length;let v=0;for(;v+4<=B;){let y=ge(x,v);if(v+4+y>B)break;v+=4,le(x.subarray(v,v+y)),v+=y}v>0&&(x.copyWithin(0,v,B),B-=v)},L=b=>{o.didClose=!0,b&&(o.reason=": "+(b.message||b));const g="The service was stopped"+o.reason;for(let v in E)E[v](g,null);E={}},W=(b,g,v)=>{if(o.didClose)return v("The service is no longer running"+o.reason,null);let y=S++;E[y]=(_,$)=>{try{v(_,$)}finally{b&&b.unref()}},b&&b.ref(),n.writeToStdin(T({id:y,isRequest:!0,value:g}))},Q=(b,g)=>{if(o.didClose)throw new Error("The service is no longer running"+o.reason);n.writeToStdin(T({id:b,isRequest:!1,value:g}))},se=(b,g)=>P(this,null,function*(){try{if(g.command==="ping"){Q(b,{});return}if(typeof g.key=="number"){const v=i[g.key];if(v){const y=v[g.command];if(y){yield y(b,g);return}}}throw new Error("Invalid command: "+g.command)}catch(v){Q(b,{errors:[Oe(v,n,null,void 0,"")]})}}),G=!0,le=b=>{if(G){G=!1;let v=String.fromCharCode(...b);if(v!=="0.18.7")throw new Error(`Cannot start service: Host version "0.18.7" does not match binary version ${ae(v)}`);return}let g=U(b);if(g.isRequest)se(g.id,g.value);else{let v=E[g.id];delete E[g.id],g.value.error?v(g.value.error,{}):v(null,g.value)}};return{readFromStdout:j,afterClose:L,service:{buildOrContext:({callName:b,refs:g,options:v,isTTY:y,defaultWD:_,callback:$})=>{let z=0;const r=N++,a={},w={ref(){++z===1&&g&&g.ref()},unref(){--z===0&&(delete i[r],g&&g.unref())}};i[r]=a,w.ref(),qt(b,r,W,Q,w,n,a,v,y,_,(k,I)=>{try{$(k,I)}finally{w.unref()}})},transform:({callName:b,refs:g,input:v,options:y,isTTY:_,fs:$,callback:z})=>{const r=vt();let a=w=>{try{if(typeof v!="string"&&!(v instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:k,mangleCache:I}=zt(b,y,_,Se),Z={command:"transform",flags:k,inputFS:w!==null,input:w!==null?V(w):typeof v=="string"?V(v):v};I&&(Z.mangleCache=I),W(g,Z,(K,H)=>{if(K)return z(new Error(K),null);let M=Ie(H.errors,r),ue=Ie(H.warnings,r),Y=1,ie=()=>{if(--Y===0){let X={warnings:ue,code:H.code,map:H.map,mangleCache:void 0,legalComments:void 0};"legalComments"in H&&(X.legalComments=H==null?void 0:H.legalComments),H.mangleCache&&(X.mangleCache=H==null?void 0:H.mangleCache),z(null,X)}};if(M.length>0)return z(qe("Transform failed",M,ue),null);H.codeFS&&(Y++,$.readFile(H.code,(X,ce)=>{X!==null?z(X,null):(H.code=ce,ie())})),H.mapFS&&(Y++,$.readFile(H.map,(X,ce)=>{X!==null?z(X,null):(H.map=ce,ie())})),ie()})}catch(k){let I=[];try{Qe(I,y,{},_,Se)}catch{}const Z=Oe(k,n,r,void 0,"");W(g,{command:"error",flags:I,error:Z},()=>{Z.detail=r.load(Z.detail),z(qe("Transform failed",[Z],[]),null)})}};if((typeof v=="string"||v instanceof Uint8Array)&&v.length>1024*1024){let w=a;a=()=>$.writeFile(v,w)}a(null)},formatMessages:({callName:b,refs:g,messages:v,options:y,callback:_})=>{let $=_e(v,"messages",null,"");if(!y)throw new Error(`Missing second argument in ${b}() call`);let z={},r=u(y,z,"kind",O),a=u(y,z,"color",ne),w=u(y,z,"terminalWidth",de);if(ye(y,z,`in ${b}() call`),r===void 0)throw new Error(`Missing "kind" in ${b}() call`);if(r!=="error"&&r!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${b}() call`);let k={command:"format-msgs",messages:$,isWarning:r==="warning"};a!==void 0&&(k.color=a),w!==void 0&&(k.terminalWidth=w),W(g,k,(I,Z)=>{if(I)return _(new Error(I),null);_(null,Z.messages)})},analyzeMetafile:({callName:b,refs:g,metafile:v,options:y,callback:_})=>{y===void 0&&(y={});let $={},z=u(y,$,"color",ne),r=u(y,$,"verbose",ne);ye(y,$,`in ${b}() call`);let a={command:"analyze-metafile",metafile:v};z!==void 0&&(a.color=z),r!==void 0&&(a.verbose=r),W(g,a,(w,k)=>{if(w)return _(new Error(w),null);_(null,k.result)})}}}}function qt(n,i,o,E,S,N,x,B,j,L,W){const Q=vt(),se=n==="context",G=(q,te)=>{const J=[];try{Qe(J,B,{},j,Ce)}catch{}const b=Oe(q,N,Q,void 0,te);o(S,{command:"error",flags:J,error:b},()=>{b.detail=Q.load(b.detail),W(qe(se?"Context failed":"Build failed",[b],[]),null)})};let le;if(typeof B=="object"){const q=B.plugins;if(q!==void 0){if(!Array.isArray(q))return G(new Error('"plugins" must be an array'),"");le=q}}if(le&&le.length>0){if(N.isSync)return G(new Error("Cannot use plugins in synchronous API calls"),"");Ht(i,o,E,S,N,x,B,le,Q).then(q=>{if(!q.ok)return G(q.error,q.pluginName);try{F(q.requestPlugins,q.runOnEndCallbacks,q.scheduleOnDisposeCallbacks)}catch(te){G(te,"")}},q=>G(q,""));return}try{F(null,(q,te)=>te([],[]),()=>{})}catch(q){G(q,"")}function F(q,te,J){const b=N.hasFS,{entries:g,flags:v,write:y,stdinContents:_,stdinResolveDir:$,absWorkingDir:z,nodePaths:r,mangleCache:a}=Wt(n,B,j,Ce,b);if(y&&!N.hasFS)throw new Error('The "write" option is unavailable in this environment');const w={command:"build",key:i,entries:g,flags:v,write:y,stdinContents:_,stdinResolveDir:$,absWorkingDir:z||L,nodePaths:r,context:se};q&&(w.plugins=q),a&&(w.mangleCache=a);const k=(K,H)=>{const M={errors:Ie(K.errors,Q),warnings:Ie(K.warnings,Q),outputFiles:void 0,metafile:void 0,mangleCache:void 0},ue=M.errors.slice(),Y=M.warnings.slice();K.outputFiles&&(M.outputFiles=K.outputFiles.map(Jt)),K.metafile&&(M.metafile=JSON.parse(K.metafile)),K.mangleCache&&(M.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(re(K.writeToStdout).replace(/\n$/,"")),te(M,(ie,X)=>{if(ue.length>0||ie.length>0){const ce=qe("Build failed",ue.concat(ie),Y.concat(X));return H(ce,null,ie,X)}H(null,M,ie,X)})};let I,Z;se&&(x["on-end"]=(K,H)=>new Promise(M=>{k(H,(ue,Y,ie,X)=>{const ce={errors:ie,warnings:X};Z&&Z(ue,Y),I=void 0,Z=void 0,E(K,ce),M()})})),o(S,w,(K,H)=>{if(K)return W(new Error(K),null);if(!se)return k(H,(Y,ie)=>(J(),W(Y,ie)));if(H.errors.length>0)return W(qe("Context failed",H.errors,H.warnings),null);let M=!1;const ue={rebuild:()=>(I||(I=new Promise((Y,ie)=>{let X;Z=(be,Te)=>{X||(X=()=>be?ie(be):Y(Te))};const ce=()=>{o(S,{command:"rebuild",key:i},(Te,Fe)=>{Te?ie(new Error(Te)):X?X():ce()})};ce()})),I),watch:(Y={})=>new Promise((ie,X)=>{if(!N.hasFS)throw new Error('Cannot use the "watch" API in this environment');ye(Y,{},"in watch() call"),o(S,{command:"watch",key:i},Te=>{Te?X(new Error(Te)):ie(void 0)})}),serve:(Y={})=>new Promise((ie,X)=>{if(!N.hasFS)throw new Error('Cannot use the "serve" API in this environment');const ce={},be=u(Y,ce,"port",de),Te=u(Y,ce,"host",O),Fe=u(Y,ce,"servedir",O),D=u(Y,ce,"keyfile",O),he=u(Y,ce,"certfile",O),Ee=u(Y,ce,"onRequest",Ae);ye(Y,ce,"in serve() call");const ke={command:"serve",key:i,onRequest:!!Ee};be!==void 0&&(ke.port=be),Te!==void 0&&(ke.host=Te),Fe!==void 0&&(ke.servedir=Fe),D!==void 0&&(ke.keyfile=D),he!==void 0&&(ke.certfile=he),o(S,ke,(Re,tt)=>{if(Re)return X(new Error(Re));Ee&&(x["serve-request"]=(cn,un)=>{Ee(un.args),E(cn,{})}),ie(tt)})}),cancel:()=>new Promise(Y=>{if(M)return Y();o(S,{command:"cancel",key:i},()=>{Y()})}),dispose:()=>new Promise(Y=>{if(M)return Y();M=!0,o(S,{command:"dispose",key:i},()=>{Y(),J(),S.unref()})})};S.ref(),W(null,ue)})}}var Ht=(n,i,o,E,S,N,x,B,j)=>P(void 0,null,function*(){let L=[],W=[],Q={},se={},G=[],le=0,F=0,q=[],te=!1;B=[...B];for(let g of B){let v={};if(typeof g!="object")throw new Error(`Plugin at index ${F} must be an object`);const y=u(g,v,"name",O);if(typeof y!="string"||y==="")throw new Error(`Plugin at index ${F} is missing a name`);try{let _=u(g,v,"setup",Ae);if(typeof _!="function")throw new Error("Plugin is missing a setup function");ye(g,v,`on plugin ${ae(y)}`);let $={name:y,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};F++;let r=_({initialOptions:x,resolve:(a,w={})=>{if(!te)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof a!="string")throw new Error("The path to resolve must be a string");let k=Object.create(null),I=u(w,k,"pluginName",O),Z=u(w,k,"importer",O),K=u(w,k,"namespace",O),H=u(w,k,"resolveDir",O),M=u(w,k,"kind",O),ue=u(w,k,"pluginData",fe);return ye(w,k,"in resolve() call"),new Promise((Y,ie)=>{const X={command:"resolve",path:a,key:n,pluginName:y};if(I!=null&&(X.pluginName=I),Z!=null&&(X.importer=Z),K!=null&&(X.namespace=K),H!=null&&(X.resolveDir=H),M!=null)X.kind=M;else throw new Error('Must specify "kind" when calling "resolve"');ue!=null&&(X.pluginData=j.store(ue)),i(E,X,(ce,be)=>{ce!==null?ie(new Error(ce)):Y({errors:Ie(be.errors,j),warnings:Ie(be.warnings,j),path:be.path,external:be.external,sideEffects:be.sideEffects,namespace:be.namespace,suffix:be.suffix,pluginData:j.load(be.pluginData)})})})},onStart(a){let w='This error came from the "onStart" callback registered here:',k=Ze(new Error(w),S,"onStart");L.push({name:y,callback:a,note:k}),$.onStart=!0},onEnd(a){let w='This error came from the "onEnd" callback registered here:',k=Ze(new Error(w),S,"onEnd");W.push({name:y,callback:a,note:k}),$.onEnd=!0},onResolve(a,w){let k='This error came from the "onResolve" callback registered here:',I=Ze(new Error(k),S,"onResolve"),Z={},K=u(a,Z,"filter",$e),H=u(a,Z,"namespace",O);if(ye(a,Z,`in onResolve() call for plugin ${ae(y)}`),K==null)throw new Error("onResolve() call is missing a filter");let M=le++;Q[M]={name:y,callback:w,note:I},$.onResolve.push({id:M,filter:K.source,namespace:H||""})},onLoad(a,w){let k='This error came from the "onLoad" callback registered here:',I=Ze(new Error(k),S,"onLoad"),Z={},K=u(a,Z,"filter",$e),H=u(a,Z,"namespace",O);if(ye(a,Z,`in onLoad() call for plugin ${ae(y)}`),K==null)throw new Error("onLoad() call is missing a filter");let M=le++;se[M]={name:y,callback:w,note:I},$.onLoad.push({id:M,filter:K.source,namespace:H||""})},onDispose(a){G.push(a)},esbuild:S.esbuild});r&&(yield r),q.push($)}catch(_){return{ok:!1,error:_,pluginName:y}}}N["on-start"]=(g,v)=>P(void 0,null,function*(){let y={errors:[],warnings:[]};yield Promise.all(L.map(_=>P(void 0,[_],function*({name:$,callback:z,note:r}){try{let a=yield z();if(a!=null){if(typeof a!="object")throw new Error(`Expected onStart() callback in plugin ${ae($)} to return an object`);let w={},k=u(a,w,"errors",me),I=u(a,w,"warnings",me);ye(a,w,`from onStart() callback in plugin ${ae($)}`),k!=null&&y.errors.push(..._e(k,"errors",j,$)),I!=null&&y.warnings.push(..._e(I,"warnings",j,$))}}catch(a){y.errors.push(Oe(a,S,j,r&&r(),$))}}))),o(g,y)}),N["on-resolve"]=(g,v)=>P(void 0,null,function*(){let y={},_="",$,z;for(let r of v.ids)try{({name:_,callback:$,note:z}=Q[r]);let a=yield $({path:v.path,importer:v.importer,namespace:v.namespace,resolveDir:v.resolveDir,kind:v.kind,pluginData:j.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onResolve() callback in plugin ${ae(_)} to return an object`);let w={},k=u(a,w,"pluginName",O),I=u(a,w,"path",O),Z=u(a,w,"namespace",O),K=u(a,w,"suffix",O),H=u(a,w,"external",ne),M=u(a,w,"sideEffects",ne),ue=u(a,w,"pluginData",fe),Y=u(a,w,"errors",me),ie=u(a,w,"warnings",me),X=u(a,w,"watchFiles",me),ce=u(a,w,"watchDirs",me);ye(a,w,`from onResolve() callback in plugin ${ae(_)}`),y.id=r,k!=null&&(y.pluginName=k),I!=null&&(y.path=I),Z!=null&&(y.namespace=Z),K!=null&&(y.suffix=K),H!=null&&(y.external=H),M!=null&&(y.sideEffects=M),ue!=null&&(y.pluginData=j.store(ue)),Y!=null&&(y.errors=_e(Y,"errors",j,_)),ie!=null&&(y.warnings=_e(ie,"warnings",j,_)),X!=null&&(y.watchFiles=et(X,"watchFiles")),ce!=null&&(y.watchDirs=et(ce,"watchDirs"));break}}catch(a){y={id:r,errors:[Oe(a,S,j,z&&z(),_)]};break}o(g,y)}),N["on-load"]=(g,v)=>P(void 0,null,function*(){let y={},_="",$,z;for(let r of v.ids)try{({name:_,callback:$,note:z}=se[r]);let a=yield $({path:v.path,namespace:v.namespace,suffix:v.suffix,pluginData:j.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onLoad() callback in plugin ${ae(_)} to return an object`);let w={},k=u(a,w,"pluginName",O),I=u(a,w,"contents",mt),Z=u(a,w,"resolveDir",O),K=u(a,w,"pluginData",fe),H=u(a,w,"loader",O),M=u(a,w,"errors",me),ue=u(a,w,"warnings",me),Y=u(a,w,"watchFiles",me),ie=u(a,w,"watchDirs",me);ye(a,w,`from onLoad() callback in plugin ${ae(_)}`),y.id=r,k!=null&&(y.pluginName=k),I instanceof Uint8Array?y.contents=I:I!=null&&(y.contents=V(I)),Z!=null&&(y.resolveDir=Z),K!=null&&(y.pluginData=j.store(K)),H!=null&&(y.loader=H),M!=null&&(y.errors=_e(M,"errors",j,_)),ue!=null&&(y.warnings=_e(ue,"warnings",j,_)),Y!=null&&(y.watchFiles=et(Y,"watchFiles")),ie!=null&&(y.watchDirs=et(ie,"watchDirs"));break}}catch(a){y={id:r,errors:[Oe(a,S,j,z&&z(),_)]};break}o(g,y)});let J=(g,v)=>v([],[]);W.length>0&&(J=(g,v)=>{P(void 0,null,function*(){const y=[],_=[];for(const{name:$,callback:z,note:r}of W){let a,w;try{const k=yield z(g);if(k!=null){if(typeof k!="object")throw new Error(`Expected onEnd() callback in plugin ${ae($)} to return an object`);let I={},Z=u(k,I,"errors",me),K=u(k,I,"warnings",me);ye(k,I,`from onEnd() callback in plugin ${ae($)}`),Z!=null&&(a=_e(Z,"errors",j,$)),K!=null&&(w=_e(K,"warnings",j,$))}}catch(k){a=[Oe(k,S,j,r&&r(),$)]}if(a){y.push(...a);try{g.errors.push(...a)}catch{}}if(w){_.push(...w);try{g.warnings.push(...w)}catch{}}}v(y,_)})});let b=()=>{for(const g of G)setTimeout(()=>g(),0)};return te=!0,{ok:!0,requestPlugins:q,runOnEndCallbacks:J,scheduleOnDisposeCallbacks:b}});function vt(){const n=new Map;let i=0;return{load(o){return n.get(o)},store(o){if(o===void 0)return-1;const E=i++;return n.set(E,o),E}}}function Ze(n,i,o){let E,S=!1;return()=>{if(S)return E;S=!0;try{let N=(n.stack+"").split(`
`);N.splice(1,1);let x=yt(i,N,o);if(x)return E={text:n.message,location:x},E}catch{}}}function Oe(n,i,o,E,S){let N="Internal error",x=null;try{N=(n&&n.message||n)+""}catch{}try{x=yt(i,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:S,text:N,location:x,notes:E?[E]:[],detail:o?o.store(n):-1}}function yt(n,i,o){let E="    at ";if(n.readFileSync&&!i[0].startsWith(E)&&i[1].startsWith(E))for(let S=1;S<i.length;S++){let N=i[S];if(N.startsWith(E))for(N=N.slice(E.length);;){let x=/^(?:new |async )?\S+ \((.*)\)$/.exec(N);if(x){N=x[1];continue}if(x=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(N),x){N=x[1];continue}if(x=/^(\S+):(\d+):(\d+)$/.exec(N),x){let B;try{B=n.readFileSync(x[1],"utf8")}catch{break}let j=B.split(/\r\n|\r|\n|\u2028|\u2029/)[+x[2]-1]||"",L=+x[3]-1,W=j.slice(L,L+o.length)===o?o.length:0;return{file:x[1],namespace:"file",line:+x[2],column:V(j.slice(0,L)).length,length:V(j.slice(L,L+W)).length,lineText:j+`
`+i.slice(1).join(`
`),suggestion:""}}break}}return null}function qe(n,i,o){let E=5,S=i.length<1?"":` with ${i.length} error${i.length<2?"":"s"}:`+i.slice(0,E+1).map((x,B)=>{if(B===E)return`
...`;if(!x.location)return`
error: ${x.text}`;let{file:j,line:L,column:W}=x.location,Q=x.pluginName?`[plugin: ${x.pluginName}] `:"";return`
${j}:${L}:${W}: ERROR: ${Q}${x.text}`}).join(""),N=new Error(`${n}${S}`);return N.errors=i,N.warnings=o,N}function Ie(n,i){for(const o of n)o.detail=i.load(o.detail);return n}function bt(n,i){if(n==null)return null;let o={},E=u(n,o,"file",O),S=u(n,o,"namespace",O),N=u(n,o,"line",de),x=u(n,o,"column",de),B=u(n,o,"length",de),j=u(n,o,"lineText",O),L=u(n,o,"suggestion",O);return ye(n,o,i),{file:E||"",namespace:S||"",line:N||0,column:x||0,length:B||0,lineText:j||"",suggestion:L||""}}function _e(n,i,o,E){let S=[],N=0;for(const x of n){let B={},j=u(x,B,"id",O),L=u(x,B,"pluginName",O),W=u(x,B,"text",O),Q=u(x,B,"location",je),se=u(x,B,"notes",me),G=u(x,B,"detail",fe),le=`in element ${N} of "${i}"`;ye(x,B,le);let F=[];if(se)for(const q of se){let te={},J=u(q,te,"text",O),b=u(q,te,"location",je);ye(q,te,le),F.push({text:J||"",location:bt(b,le)})}S.push({id:j||"",pluginName:L||E,text:W||"",location:bt(Q,le),notes:F,detail:o?o.store(G):-1}),N++}return S}function et(n,i){const o=[];for(const E of n){if(typeof E!="string")throw new Error(`${ae(i)} must be an array of strings`);o.push(E)}return o}function Jt({path:n,contents:i}){let o=null;return{path:n,contents:i,get text(){const E=this.contents;return(o===null||E!==i)&&(i=E,o=re(E)),o}}}var Kt="0.18.7",Yt=n=>He().build(n),Xt=n=>He().context(n),Qt=(n,i)=>He().transform(n,i),Zt=(n,i)=>He().formatMessages(n,i),en=(n,i)=>He().analyzeMetafile(n,i),tn=()=>{throw new Error('The "buildSync" API only works in node')},nn=()=>{throw new Error('The "transformSync" API only works in node')},rn=()=>{throw new Error('The "formatMessagesSync" API only works in node')},sn=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Be,ot,He=()=>{if(ot)return ot;throw Be?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},ln=n=>{n=Ut(n||{});let i=n.wasmURL,o=n.wasmModule,E=n.worker!==!1;if(!i&&!o)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Be)throw new Error('Cannot call "initialize" more than once');return Be=on(i||"",o,E),Be.catch(()=>{Be=void 0}),Be},on=(n,i,o)=>P(void 0,null,function*(){let E;if(o){let L=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                    // setTimeout has been seen to fire up to 1 millisecond early
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.18.7"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok)
            throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});E=new Worker(URL.createObjectURL(L))}else{let L=(W=>{var Q=(F,q,te)=>new Promise((J,b)=>{var g=_=>{try{y(te.next(_))}catch($){b($)}},v=_=>{try{y(te.throw(_))}catch($){b($)}},y=_=>_.done?J(_.value):Promise.resolve(_.value).then(g,v);y((te=te.apply(F,q)).next())});let se,G={};for(let F=self;F;F=Object.getPrototypeOf(F))for(let q of Object.getOwnPropertyNames(F))q in G||Object.defineProperty(G,q,{get:()=>self[q]});(()=>{const F=()=>{const J=new Error("not implemented");return J.code="ENOSYS",J};if(!G.fs){let J="";G.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(b,g){J+=te.decode(g);const v=J.lastIndexOf(`
`);return v!=-1&&(console.log(J.substring(0,v)),J=J.substring(v+1)),g.length},write(b,g,v,y,_,$){if(v!==0||y!==g.length||_!==null){$(F());return}const z=this.writeSync(b,g);$(null,z)},chmod(b,g,v){v(F())},chown(b,g,v,y){y(F())},close(b,g){g(F())},fchmod(b,g,v){v(F())},fchown(b,g,v,y){y(F())},fstat(b,g){g(F())},fsync(b,g){g(null)},ftruncate(b,g,v){v(F())},lchown(b,g,v,y){y(F())},link(b,g,v){v(F())},lstat(b,g){g(F())},mkdir(b,g,v){v(F())},open(b,g,v,y){y(F())},read(b,g,v,y,_,$){$(F())},readdir(b,g){g(F())},readlink(b,g){g(F())},rename(b,g,v){v(F())},rmdir(b,g){g(F())},stat(b,g){g(F())},symlink(b,g,v){v(F())},truncate(b,g,v){v(F())},unlink(b,g){g(F())},utimes(b,g,v,y){y(F())}}}if(G.process||(G.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw F()},pid:-1,ppid:-1,umask(){throw F()},cwd(){throw F()},chdir(){throw F()}}),!G.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!G.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!G.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!G.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const q=new TextEncoder("utf-8"),te=new TextDecoder("utf-8");G.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=r=>{r!==0&&console.warn("exit code:",r)},this._exitPromise=new Promise(r=>{this._resolveExitPromise=r}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const J=(r,a)=>{this.mem.setUint32(r+0,a,!0),this.mem.setUint32(r+4,Math.floor(a/4294967296),!0)},b=r=>{const a=this.mem.getUint32(r+0,!0),w=this.mem.getInt32(r+4,!0);return a+w*4294967296},g=r=>{const a=this.mem.getFloat64(r,!0);if(a===0)return;if(!isNaN(a))return a;const w=this.mem.getUint32(r,!0);return this._values[w]},v=(r,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(r+4,2146959360,!0),this.mem.setUint32(r,0,!0);return}this.mem.setFloat64(r,a,!0);return}if(a===void 0){this.mem.setFloat64(r,0,!0);return}let k=this._ids.get(a);k===void 0&&(k=this._idPool.pop(),k===void 0&&(k=this._values.length),this._values[k]=a,this._goRefCounts[k]=0,this._ids.set(a,k)),this._goRefCounts[k]++;let I=0;switch(typeof a){case"object":a!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(r+4,2146959360|I,!0),this.mem.setUint32(r,k,!0)},y=r=>{const a=b(r+0),w=b(r+8);return new Uint8Array(this._inst.exports.mem.buffer,a,w)},_=r=>{const a=b(r+0),w=b(r+8),k=new Array(w);for(let I=0;I<w;I++)k[I]=g(a+I*8);return k},$=r=>{const a=b(r+0),w=b(r+8);return te.decode(new DataView(this._inst.exports.mem.buffer,a,w))},z=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":r=>{r>>>=0;const a=b(r+8),w=b(r+16),k=this.mem.getInt32(r+24,!0);G.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,w,k))},"runtime.resetMemoryDataView":r=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":r=>{r>>>=0,J(r+8,(z+performance.now())*1e6)},"runtime.walltime":r=>{r>>>=0;const a=new Date().getTime();J(r+8,a/1e3),this.mem.setInt32(r+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":r=>{r>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},b(r+8)+1)),this.mem.setInt32(r+16,a,!0)},"runtime.clearTimeoutEvent":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":r=>{r>>>=0,crypto.getRandomValues(y(r+8))},"syscall/js.finalizeRef":r=>{r>>>=0;const a=this.mem.getUint32(r+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const w=this._values[a];this._values[a]=null,this._ids.delete(w),this._idPool.push(a)}},"syscall/js.stringVal":r=>{r>>>=0,v(r+24,$(r+8))},"syscall/js.valueGet":r=>{r>>>=0;const a=Reflect.get(g(r+8),$(r+16));r=this._inst.exports.getsp()>>>0,v(r+32,a)},"syscall/js.valueSet":r=>{r>>>=0,Reflect.set(g(r+8),$(r+16),g(r+32))},"syscall/js.valueDelete":r=>{r>>>=0,Reflect.deleteProperty(g(r+8),$(r+16))},"syscall/js.valueIndex":r=>{r>>>=0,v(r+24,Reflect.get(g(r+8),b(r+16)))},"syscall/js.valueSetIndex":r=>{r>>>=0,Reflect.set(g(r+8),b(r+16),g(r+24))},"syscall/js.valueCall":r=>{r>>>=0;try{const a=g(r+8),w=Reflect.get(a,$(r+16)),k=_(r+32),I=Reflect.apply(w,a,k);r=this._inst.exports.getsp()>>>0,v(r+56,I),this.mem.setUint8(r+64,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+56,a),this.mem.setUint8(r+64,0)}},"syscall/js.valueInvoke":r=>{r>>>=0;try{const a=g(r+8),w=_(r+16),k=Reflect.apply(a,void 0,w);r=this._inst.exports.getsp()>>>0,v(r+40,k),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueNew":r=>{r>>>=0;try{const a=g(r+8),w=_(r+16),k=Reflect.construct(a,w);r=this._inst.exports.getsp()>>>0,v(r+40,k),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,v(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueLength":r=>{r>>>=0,J(r+16,parseInt(g(r+8).length))},"syscall/js.valuePrepareString":r=>{r>>>=0;const a=q.encode(String(g(r+8)));v(r+16,a),J(r+24,a.length)},"syscall/js.valueLoadString":r=>{r>>>=0;const a=g(r+8);y(r+16).set(a)},"syscall/js.valueInstanceOf":r=>{r>>>=0,this.mem.setUint8(r+24,g(r+8)instanceof g(r+16)?1:0)},"syscall/js.copyBytesToGo":r=>{r>>>=0;const a=y(r+8),w=g(r+32);if(!(w instanceof Uint8Array||w instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const k=w.subarray(0,a.length);a.set(k),J(r+40,k.length),this.mem.setUint8(r+48,1)},"syscall/js.copyBytesToJS":r=>{r>>>=0;const a=g(r+8),w=y(r+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const k=w.subarray(0,a.length);a.set(k),J(r+40,k.length),this.mem.setUint8(r+48,1)},debug:r=>{console.log(r)}}}}run(J){return Q(this,null,function*(){if(!(J instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=J,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,G,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[G,5],[this,6]]),this._idPool=[],this.exited=!1;let b=4096;const g=r=>{const a=b,w=q.encode(r+"\0");return new Uint8Array(this.mem.buffer,b,w.length).set(w),b+=w.length,b%8!==0&&(b+=8-b%8),a},v=this.argv.length,y=[];this.argv.forEach(r=>{y.push(g(r))}),y.push(0),Object.keys(this.env).sort().forEach(r=>{y.push(g(`${r}=${this.env[r]}`))}),y.push(0);const $=b;if(y.forEach(r=>{this.mem.setUint32(b,r,!0),this.mem.setUint32(b+4,0,!0),b+=8}),b>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,$),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(J){const b=this;return function(){const g={id:J,this:this,args:arguments};return b._pendingEvent=g,b._resume(),g.result}}}})(),se=({data:F})=>{let q=new TextDecoder,te=G.fs,J="";te.writeSync=(_,$)=>{if(_===1)W($);else if(_===2){J+=q.decode($);let z=J.split(`
`);z.length>1&&console.log(z.slice(0,-1).join(`
`)),J=z[z.length-1]}else throw new Error("Bad write");return $.length};let b=[],g,v=0;se=({data:_})=>{_.length>0&&(b.push(_),g&&g())},te.read=(_,$,z,r,a,w)=>{if(_!==0||z!==0||r!==$.length||a!==null)throw new Error("Bad read");if(b.length===0){g=()=>te.read(_,$,z,r,a,w);return}let k=b[0],I=Math.max(0,Math.min(r,k.length-v));$.set(k.subarray(v,v+I),z),v+=I,v===k.length&&(b.shift(),v=0),w(null,I)};let y=new G.Go;y.argv=["","--service=0.18.7"],le(F,y).then(_=>{W(null),y.run(_)},_=>{W(_)})};function le(F,q){return Q(this,null,function*(){if(F instanceof WebAssembly.Module)return WebAssembly.instantiate(F,q.importObject);const te=yield fetch(F);if(!te.ok)throw new Error(`Failed to download ${JSON.stringify(F)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(te.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(te,q.importObject)).instance;const J=yield te.arrayBuffer();return(yield WebAssembly.instantiate(J,q.importObject)).instance})}return F=>se(F)})(W=>E.onmessage({data:W}));E={onmessage:null,postMessage:W=>setTimeout(()=>L({data:W})),terminate(){}}}let S,N;const x=new Promise((L,W)=>{S=L,N=W});E.onmessage=({data:L})=>{E.onmessage=({data:W})=>B(W),L?N(L):S()},E.postMessage(i||new URL(n,location.href).toString());let{readFromStdout:B,service:j}=Gt({writeToStdin(L){E.postMessage(L)},isSync:!1,hasFS:!1,esbuild:C});yield x,ot={build:L=>new Promise((W,Q)=>j.buildOrContext({callName:"build",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),context:L=>new Promise((W,Q)=>j.buildOrContext({callName:"context",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),transform:(L,W)=>new Promise((Q,se)=>j.transform({callName:"transform",refs:null,input:L,options:W||{},isTTY:!1,fs:{readFile(G,le){le(new Error("Internal error"),null)},writeFile(G,le){le(null)}},callback:(G,le)=>G?se(G):Q(le)})),formatMessages:(L,W)=>new Promise((Q,se)=>j.formatMessages({callName:"formatMessages",refs:null,messages:L,options:W,callback:(G,le)=>G?se(G):Q(le)})),analyzeMetafile:(L,W)=>new Promise((Q,se)=>j.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof L=="string"?L:JSON.stringify(L),options:W,callback:(G,le)=>G?se(G):Q(le)}))}}),an=C})(l)})(Ft);var Mt=Ft.exports;function Pe(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function jt(l,t){for(var e="",s=0,d=-1,p=0,h,f=0;f<=l.length;++f){if(f<l.length)h=l.charCodeAt(f);else{if(h===47)break;h=47}if(h===47){if(!(d===f-1||p===1))if(d!==f-1&&p===2){if(e.length<2||s!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var m=e.lastIndexOf("/");if(m!==e.length-1){m===-1?(e="",s=0):(e=e.slice(0,m),s=e.length-1-e.lastIndexOf("/")),d=f,p=0;continue}}else if(e.length===2||e.length===1){e="",s=0,d=f,p=0;continue}}t&&(e.length>0?e+="/..":e="..",s=2)}else e.length>0?e+="/"+l.slice(d+1,f):e=l.slice(d+1,f),s=f-d-1;d=f,p=0}else h===46&&p!==-1?++p:p=-1}return e}function _r(l,t){var e=t.dir||t.root,s=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+s:e+l+s:s}var Ue={resolve:function(){for(var t="",e=!1,s,d=arguments.length-1;d>=-1&&!e;d--){var p;d>=0?p=arguments[d]:(s===void 0&&(s=process.cwd()),p=s),Pe(p),p.length!==0&&(t=p+"/"+t,e=p.charCodeAt(0)===47)}return t=jt(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(Pe(t),t.length===0)return".";var e=t.charCodeAt(0)===47,s=t.charCodeAt(t.length-1)===47;return t=jt(t,!e),t.length===0&&!e&&(t="."),t.length>0&&s&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return Pe(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var s=arguments[e];Pe(s),s.length>0&&(t===void 0?t=s:t+="/"+s)}return t===void 0?".":Ue.normalize(t)},relative:function(t,e){if(Pe(t),Pe(e),t===e||(t=Ue.resolve(t),e=Ue.resolve(e),t===e))return"";for(var s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var d=t.length,p=d-s,h=1;h<e.length&&e.charCodeAt(h)===47;++h);for(var f=e.length,m=f-h,P=p<m?p:m,C=-1,T=0;T<=P;++T){if(T===P){if(m>P){if(e.charCodeAt(h+T)===47)return e.slice(h+T+1);if(T===0)return e.slice(h+T)}else p>P&&(t.charCodeAt(s+T)===47?C=T:T===0&&(C=0));break}var U=t.charCodeAt(s+T),A=e.charCodeAt(h+T);if(U!==A)break;U===47&&(C=T)}var V="";for(T=s+C+1;T<=d;++T)(T===d||t.charCodeAt(T)===47)&&(V.length===0?V+="..":V+="/..");return V.length>0?V+e.slice(h+C):(h+=C,e.charCodeAt(h)===47&&++h,e.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(Pe(t),t.length===0)return".";for(var e=t.charCodeAt(0),s=e===47,d=-1,p=!0,h=t.length-1;h>=1;--h)if(e=t.charCodeAt(h),e===47){if(!p){d=h;break}}else p=!1;return d===-1?s?"/":".":s&&d===1?"//":t.slice(0,d)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Pe(t);var s=0,d=-1,p=!0,h;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var f=e.length-1,m=-1;for(h=t.length-1;h>=0;--h){var P=t.charCodeAt(h);if(P===47){if(!p){s=h+1;break}}else m===-1&&(p=!1,m=h+1),f>=0&&(P===e.charCodeAt(f)?--f===-1&&(d=h):(f=-1,d=m))}return s===d?d=m:d===-1&&(d=t.length),t.slice(s,d)}else{for(h=t.length-1;h>=0;--h)if(t.charCodeAt(h)===47){if(!p){s=h+1;break}}else d===-1&&(p=!1,d=h+1);return d===-1?"":t.slice(s,d)}},extname:function(t){Pe(t);for(var e=-1,s=0,d=-1,p=!0,h=0,f=t.length-1;f>=0;--f){var m=t.charCodeAt(f);if(m===47){if(!p){s=f+1;break}continue}d===-1&&(p=!1,d=f+1),m===46?e===-1?e=f:h!==1&&(h=1):e!==-1&&(h=-1)}return e===-1||d===-1||h===0||h===1&&e===d-1&&e===s+1?"":t.slice(e,d)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return _r("/",t)},parse:function(t){Pe(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var s=t.charCodeAt(0),d=s===47,p;d?(e.root="/",p=1):p=0;for(var h=-1,f=0,m=-1,P=!0,C=t.length-1,T=0;C>=p;--C){if(s=t.charCodeAt(C),s===47){if(!P){f=C+1;break}continue}m===-1&&(P=!1,m=C+1),s===46?h===-1?h=C:T!==1&&(T=1):h!==-1&&(T=-1)}return h===-1||m===-1||T===0||T===1&&h===m-1&&h===f+1?m!==-1&&(f===0&&d?e.base=e.name=t.slice(1,m):e.base=e.name=t.slice(f,m)):(f===0&&d?(e.name=t.slice(1,h),e.base=t.slice(1,m)):(e.name=t.slice(f,h),e.base=t.slice(f,m)),e.ext=t.slice(h,m)),f>0?e.dir=t.slice(0,f-1):d&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};Ue.posix=Ue;var Nr=Ue;const Et=jn(Nr);let nt=!1,ct=null;const Ne={},Vt=async()=>(ct||(ct=Mt.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.18.7/esbuild.wasm"}).then(()=>(nt=!0,console.log("ESBuild initialized successfully"),nt)).catch(l=>{if(l instanceof Error&&l.message.includes("initialize")&&l.message.includes("once"))return console.warn("ESBuild initialize called multiple times; suppressing error"),nt=!0,nt;throw console.error("Failed to initialize ESBuild:",l),l})),ct),$r=async({entryPoint:l,content:t,options:e})=>{await Vt();try{Ne[l]={contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};const s={name:"css-inject",setup(h){h.onLoad({filter:/\.css$/,namespace:"virtual-fs"},async f=>{console.log("[css-inject] Handling",f.path,"in namespace",f.namespace);const m=Ne[f.path];if(!m)throw new Error(`CSS file not found in virtual filesystem: ${f.path}`);const P=m.contents,C=`injected-style-${f.path.replace(/[^a-zA-Z0-9]/g,"-")}`;return{contents:`
              // CSS module: ${f.path}
              (function() {
                if (typeof document !== 'undefined') {
                  const existingStyle = document.getElementById('${C}');
                  if (existingStyle) existingStyle.remove();
                  const style = document.createElement('style');
                  style.id = '${C}';
                  style.textContent = ${JSON.stringify(P)};
                  document.head.appendChild(style);
                }
              })();
              export default {};
            `,loader:"js"}})}},d={name:"virtual-file-system",setup(h){h.onResolve({filter:new RegExp(`^${l}$`)},f=>({path:f.path,namespace:"virtual-fs"})),h.onResolve({filter:/^\.+\//,namespace:"virtual-fs"},f=>{const m=Et.posix.join(Et.posix.dirname(f.importer),f.path);return console.log(`Resolved ${f.path} from ${f.importer} to ${m}`),m.endsWith(".css")||Ne[m]?{path:m,namespace:"virtual-fs"}:{path:`https://unpkg.com/${m}`,namespace:"http-url"}}),h.onResolve({filter:/^[^./].*/,namespace:"virtual-fs"},f=>{const m=f.path,P=`node_modules/${m}.js`;if(Ne[P])return{path:P,namespace:"virtual-fs"};const C=`node_modules/${m}/index.js`;return Ne[C]?{path:C,namespace:"virtual-fs"}:{path:`https://unpkg.com/${m}`,namespace:"http-url"}}),h.onResolve({filter:/.*/,namespace:"http-url"},f=>{if(!f.path.startsWith(".")&&!f.path.startsWith("/"))return{path:`https://unpkg.com/${f.path}`,namespace:"http-url"};const m=f.importer.endsWith("/")?f.importer:`${f.importer}/`;return{path:new URL(f.path,m).href,namespace:"http-url"}}),h.onLoad({filter:/.*/,namespace:"virtual-fs"},async f=>{if(Ne[f.path])return{contents:Ne[f.path].contents,loader:Ne[f.path].loader};if(f.path===l)return{contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};throw f.path.endsWith(".css")?new Error(`CSS file not found: ${f.path}. Make sure to add it to the virtual filesystem.`):new Error(`File not found in virtual filesystem: ${f.path}`)}),h.onLoad({filter:/.*/,namespace:"http-url"},async f=>{const P=await(await fetch(f.path)).text();let C="js";return f.path.match(/\.(jsx|tsx)$/)?C="jsx":f.path.endsWith(".css")?C="css":f.path.endsWith(".json")?C="json":f.path.endsWith(".txt")&&(C="text"),{contents:P,loader:C,resolveDir:f.path.replace(/\/[^/]+$/,"/")}})}},p=await Mt.build({entryPoints:[l],bundle:e.bundle!==void 0?e.bundle:!0,minify:e.minify!==void 0?e.minify:!1,format:e.format||"iife",target:e.target||"es2015",jsxFactory:e.jsxFactory||"React.createElement",jsxFragment:e.jsxFragment||"React.Fragment",external:e.external||[],write:!1,plugins:[s,d],define:{"process.env.NODE_ENV":'"development"'}});return{code:p.outputFiles?p.outputFiles[0].text:"",error:null}}catch(s){return console.error("Build failed:",s),{code:"",error:s instanceof Error?s.message:String(s)}}},Rr=(l,t)=>{let e="js";l.match(/\.(jsx|tsx)$/)?e="jsx":l.endsWith(".css")?e="css":l.endsWith(".json")?e="json":l.endsWith(".txt")&&(e="text"),Ne[l]={contents:t,loader:e}},Dr=l=>{try{const t=l.split(" ");if(t[0]!=="esbuild")return null;const e=t[1],s={bundle:!1,minify:!1,format:"iife",jsxFactory:"React.createElement",jsxFragment:"React.Fragment"};for(let d=2;d<t.length;d++){const p=t[d];if(p==="--bundle")s.bundle=!0;else if(p==="--minify")s.minify=!0;else if(p.startsWith("--format=")){const h=p.split("=")[1];s.format=h}else if(p.startsWith("--target="))s.target=p.split("=")[1];else if(p.startsWith("--jsx-factory="))s.jsxFactory=p.split("=")[1];else if(p.startsWith("--jsx-fragment="))s.jsxFragment=p.split("=")[1];else if(p.startsWith("--external:")){const h=p.split(":")[1].split(",");s.external||(s.external=[]),s.external.push(...h)}}return{entryPoint:e,content:"",options:s}}catch(t){return console.error("Failed to parse esbuild command:",t),null}},Ar=Object.freeze(Object.defineProperty({__proto__:null,addToVirtualFs:Rr,buildCode:$r,initializeEsbuild:Vt,parseEsbuildCommand:Dr},Symbol.toStringTag,{value:"Module"}));function zr(...l){return En(kn(l))}export{Wr as ActivityBar,Wn as CommandPalette,Xn as EditorArea,ir as IdeLayout,Yn as PreviewPanel,Zn as SideBar,sr as StatusBar,Hr as VirtualFS,Rr as addToVirtualFs,$r as buildCode,zr as cn,Vr as default,Vt as initializeEsbuild,Dr as parseEsbuildCommand,ve as useIdeStore,Jr as virtualFs};
