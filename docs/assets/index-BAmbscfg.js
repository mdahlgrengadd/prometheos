import{c as De,K as un,r as D,j as u,X as ut,R as dn,n as fn,s as hn,w as mn,o as Et,l as pn,v as Me,x as gn,G as vn,L as yn,M as bn,f as wn,N as xn,O as jn}from"./index-BUj4FzKP.js";import{_ as Je,m as En,l as Ve}from"./monaco-editor-Dq6WuQlL.js";import{l as kn,F as Tn,a as Cn,S as Sn}from"./virtual-fs-DnlBjnmA.js";import{V as Gr,v as qr}from"./virtual-fs-DnlBjnmA.js";import{P as Pn}from"./play-D0X7Sw-x.js";import{b as _n,C as Nn,m as bt,c as kt,R as $n,d as Rn,e as Dn,f as An}from"./MacroContext-5wkeUggB.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=De("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=De("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=De("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=De("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=De("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=De("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=De("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ln={activeView:"explorer",sidebarVisible:!0,panelVisible:!1,previewPanelVisible:!1,activeTab:null,tabs:[],fileSystem:[],theme:"light",commandPaletteOpen:!1,buildOutput:"",buildError:null,isBuilding:!1,buildCode:"",panelVisibilityBeforePreview:!1},he=un((l,t)=>({...Ln,setFileSystem:e=>l({fileSystem:e}),initFileSystem:async()=>{const e=await kn();l({fileSystem:e})},toggleSidebar:()=>l(e=>({sidebarVisible:!e.sidebarVisible})),togglePanel:()=>l(e=>({panelVisible:!e.panelVisible})),togglePreviewPanel:()=>l(e=>{const s=!e.previewPanelVisible;return Je(async()=>{const{ideSettings:h}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:h}},[]).then(({ideSettings:h})=>{h.hideTerminalDuringPreview&&l(s?m=>({panelVisibilityBeforePreview:m.panelVisible,panelVisible:!1}):m=>({panelVisible:m.panelVisibilityBeforePreview}))}),{previewPanelVisible:s}}),toggleCommandPalette:()=>l(e=>({commandPaletteOpen:!e.commandPaletteOpen})),setActiveView:e=>l({activeView:e}),setActiveTab:e=>l({activeTab:e}),openTab:e=>{const s=t().getFileById(e);!s||s.type!=="file"||l(h=>{const m=h.tabs.find(d=>d.fileId===e);if(m)return{activeTab:m.id};const c={id:`tab-${Date.now()}`,fileId:e,title:s.name,language:s.language||"javascript",isDirty:!1};return{tabs:[...h.tabs,c],activeTab:c.id}})},closeTab:e=>{l(s=>{const h=s.tabs.findIndex(d=>d.id===e);if(h===-1)return s;const m=s.tabs.filter(d=>d.id!==e);let c=s.activeTab;return s.activeTab===e&&(m.length===0?c=null:h<m.length?c=m[h].id:c=m[m.length-1].id),{tabs:m,activeTab:c}})},toggleTheme:()=>l(e=>({theme:e.theme==="dark"?"light":"dark"})),getFileById:e=>{const s=h=>{for(const m of h){if(m.id===e)return m;if(m.children){const c=s(m.children);if(c)return c}}};return s(t().fileSystem)},getTabById:e=>t().tabs.find(s=>s.id===e),setTabDirty:(e,s)=>{l(h=>({tabs:h.tabs.map(m=>m.id===e?{...m,isDirty:s}:m)}))},saveFile:(e,s)=>{l(h=>{const m=w=>w.map(P=>P.id===e&&P.type==="file"?{...P,content:s}:P.children?{...P,children:m(P.children)}:P),c=m(h.fileSystem),d=h.tabs.map(w=>w.fileId===e?{...w,isDirty:!1}:w);return{fileSystem:c,tabs:d}})},setBuildOutput:e=>l({buildOutput:e}),setBuildError:e=>l({buildError:e}),setBuildCode:e=>l({buildCode:e}),setIsBuilding:e=>l({isBuilding:e}),runBuild:async e=>{const s=t(),{ideSettings:h}=await Je(async()=>{const{ideSettings:A}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:A}},[]);h.showTerminalOnBuild&&!s.previewPanelVisible&&!s.panelVisible&&s.togglePanel();const{buildCode:m,parseEsbuildCommand:c,addToVirtualFs:d}=await Je(async()=>{const{buildCode:A,parseEsbuildCommand:G,addToVirtualFs:U}=await Promise.resolve().then(()=>Rr);return{buildCode:A,parseEsbuildCommand:G,addToVirtualFs:U}},void 0);s.setIsBuilding(!0),s.setBuildError(null),s.setBuildOutput(""),s.setBuildCode("");const P=(()=>{if(!s.activeTab)return null;const A=s.getTabById(s.activeTab);if(!A)return null;const G=s.getFileById(A.fileId);return!G||G.type!=="file"?null:{filePath:G.id,content:G.content||""}})();if(!P){s.setBuildError("No active file to build"),s.setIsBuilding(!1);return}const C=(A,G="")=>{A.forEach(U=>{const re=U.id;U.type==="file"&&U.content!==void 0&&d(re,U.content),U.type==="folder"&&U.children&&C(U.children,re)})};C(s.fileSystem);let T;if(e){if(T=c(e),!T){s.setBuildError("Invalid esbuild command"),s.setIsBuilding(!1);return}T.content=P.content}else T={entryPoint:P.filePath,content:P.content,options:{bundle:!0,minify:!0,format:"esm"}};try{const A=await m(T);A.error?s.setBuildError(A.error):(s.setBuildCode(A.code),s.setBuildOutput(`Build successful!
Output: ${A.code.slice(0,1e3)}${A.code.length>1e3?"...":""}`),h.autoFocusPreview&&s.previewPanelVisible&&s.activeTab!=="preview"&&s.setActiveTab("preview"))}catch(A){const G=A instanceof Error?A.message:String(A);s.setBuildError(`Build failed: ${G}`)}finally{s.setIsBuilding(!1)}}})),at=[{id:"toggle-sidebar",title:"View: Toggle Side Bar",category:"View",shortcut:"Ctrl+B",handler:()=>he.getState().toggleSidebar()},{id:"toggle-terminal",title:"View: Toggle Terminal",category:"View",shortcut:"Ctrl+`",handler:()=>he.getState().togglePanel()},{id:"toggle-preview",title:"View: Toggle Preview",category:"View",shortcut:"Ctrl+Shift+V",handler:()=>he.getState().togglePreviewPanel()},{id:"toggle-theme",title:"Preferences: Toggle Theme",category:"Preferences",handler:()=>he.getState().toggleTheme()},{id:"build-active-file",title:"Build: Bundle Active File",category:"Build",handler:()=>{he.getState().togglePreviewPanel()}},{id:"build-bundle-app",title:"Build: Bundle App (app.jsx)",category:"Build",handler:()=>{he.getState().togglePreviewPanel()}}],Un=()=>{const{commandPaletteOpen:l,toggleCommandPalette:t}=he(),[e,s]=D.useState(""),[h,m]=D.useState(at),[c,d]=D.useState(0),w=D.useRef(null);D.useEffect(()=>{if(!e){m(at);return}const T=e.toLowerCase(),A=at.filter(G=>G.title.toLowerCase().includes(T)||G.category&&G.category.toLowerCase().includes(T));m(A),d(0)},[e]),D.useEffect(()=>{l&&w.current&&w.current.focus()},[l]);const P=T=>{switch(T.key){case"ArrowDown":T.preventDefault(),d(A=>A<h.length-1?A+1:A);break;case"ArrowUp":T.preventDefault(),d(A=>A>0?A-1:A);break;case"Enter":T.preventDefault(),C(h[c]);break;case"Escape":T.preventDefault(),t();break}},C=T=>{t(),T.handler()};return l?u.jsx("div",{className:"command-palette",onClick:()=>t(),children:u.jsxs("div",{className:"command-palette-content animate-fade-in",onClick:T=>T.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center px-3 py-2 bg-input border-b border-border",children:[u.jsx(Ct,{size:16,className:"mr-2 text-muted-foreground"}),u.jsx("input",{ref:w,type:"text",className:"w-full bg-transparent outline-none placeholder:text-muted-foreground",placeholder:"Type a command or search...",value:e,onChange:T=>s(T.target.value),onKeyDown:P})]}),u.jsx("div",{className:"command-palette-results",children:h.length>0?h.map((T,A)=>u.jsxs("div",{className:`command-palette-item ${A===c?"selected":""}`,onClick:()=>C(T),onMouseEnter:()=>d(A),children:[u.jsx("span",{className:"flex-1",children:T.title}),T.category&&u.jsx("span",{className:"text-xs text-muted-foreground mr-2",children:T.category}),T.shortcut&&u.jsx("kbd",{className:"bg-muted text-muted-foreground px-2 py-0.5 text-xs rounded",children:T.shortcut})]},T.id)):u.jsx("div",{className:"p-3 text-muted-foreground",children:"No commands found"})})]})}):null};function Wn(l){return new Worker("/prometheos/assets/editor.worker-CozO_UIV.js",{type:"module",name:l==null?void 0:l.name})}function zn(l){return new Worker("/prometheos/assets/css.worker-BhDbEE1e.js",{type:"module",name:l==null?void 0:l.name})}function Gn(l){return new Worker("/prometheos/assets/html.worker-CUt5J86U.js",{type:"module",name:l==null?void 0:l.name})}function qn(l){return new Worker("/prometheos/assets/json.worker-CnsrqLYN.js",{type:"module",name:l==null?void 0:l.name})}function Hn(l){return new Worker("/prometheos/assets/ts.worker-Ddk2u2yN.js",{type:"module",name:l==null?void 0:l.name})}window.MonacoEnvironment={getWorker(l,t){return t==="json"?new qn:t==="css"||t==="scss"||t==="less"?new zn:t==="html"||t==="handlebars"||t==="razor"?new Gn:t==="typescript"||t==="javascript"?new Hn:new Wn}};Ve.typescript.typescriptDefaults.setCompilerOptions({target:Ve.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,moduleResolution:Ve.typescript.ModuleResolutionKind.NodeJs,module:Ve.typescript.ModuleKind.ESNext,noEmit:!0,esModuleInterop:!0,jsx:Ve.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0,typeRoots:["node_modules/@types"]});Ve.typescript.typescriptDefaults.addExtraLib('declare module "*.css" { const content: string; export default content; }',"global.d.ts");const Jn=Object.freeze(Object.defineProperty({__proto__:null,default:En},Symbol.toStringTag,{value:"Module"})),Kn=({previewTabId:l})=>{const{buildCode:t,buildError:e}=he(),s=D.useRef(null);return D.useEffect(()=>{if(!t||e)return;const h=t||"console.log('No build output available');";if(!s.current)return;const m=s.current.contentDocument;m&&(m.open(),m.write(`
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
            ${h}
          } catch (err) {
            document.body.innerHTML = '<div style="color: red; padding: 20px;"><h3>Runtime Error:</h3><pre>' + err.message + '</pre></div>';
          }        <\/script>
      </body>
      </html>
    `),m.close())},[t,e]),u.jsx("div",{className:"panel-area flex flex-col",style:{height:"100%",minHeight:0,maxHeight:"none"},children:u.jsx("div",{className:"flex flex-col flex-1 relative",children:u.jsxs("div",{className:"relative h-full",children:[u.jsx("iframe",{ref:s,title:"Preview",className:"w-full h-full border-none bg-white"}),e&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-red-600 p-4 text-center",children:[u.jsx("h3",{children:"Build Error"}),u.jsx("pre",{className:"text-sm mt-2 whitespace-pre-wrap",children:e})]})})," ",!t&&!e&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:u.jsxs("div",{className:"text-gray-500 text-center",children:[u.jsx("h3",{className:"text-lg mb-2",children:"Preview Panel"}),u.jsx("p",{children:'Click "Run Preview" to see your code in action'})]})})]})})})},Yn=()=>{const{tabs:l,activeTab:t,closeTab:e,setActiveTab:s,panelVisible:h,previewPanelVisible:m,theme:c,setTabDirty:d,saveFile:w,togglePreviewPanel:P,getTabById:C,initFileSystem:T,runBuild:A}=he(),[G,U]=D.useState({}),[re,ce]=D.useState(!1),ye=D.useRef({}),me=D.useRef({}),[se,Te]=D.useState(null);D.useEffect(()=>{T()},[T]),D.useEffect(()=>{let Z;const Q=[],N=[],Ce=me.current;return t&&(async pe=>{const{getFileById:ue,getTabById:we}=he.getState(),We=we(pe);if(!We)return;const ze=ue(We.fileId);if(!ze||!ze.content)return;Z||(Z=(await Je(()=>Promise.resolve().then(()=>Jn),void 0)).default);const Ge=ye.current[pe];if(!Ge)return;const xe=Z.editor.create(Ge,{value:ze.content,language:We.language,theme:c==="dark"?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!0},scrollBeyondLastLine:!1,fontSize:14,fontFamily:"JetBrains Mono, monospace"});me.current[pe]=xe,xe.layout(),document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>xe.layout()):setTimeout(()=>xe.layout(),100);const Ye=()=>xe.layout();return window.addEventListener("resize",Ye),N.push(()=>window.removeEventListener("resize",Ye)),Q.push(xe.onDidFocusEditorText(()=>xe.layout())),Q.push(xe.onDidChangeModelContent(()=>{const Xe=xe.getValue();U(Qe=>({...Qe,[pe]:Xe})),d(pe,!0)})),xe})(t),Z&&Z.editor&&(Z.editor.setTheme(c==="dark"?"vs-dark":"vs"),Object.values(me.current).forEach(pe=>pe.layout())),()=>{N.forEach(pe=>pe()),Q.forEach(pe=>pe.dispose()),Z&&Z.editor&&(Object.keys(Ce).forEach(pe=>{const ue=Ce[pe];ue&&ue.dispose()}),Z.editor.getModels().forEach(pe=>pe.dispose()))}},[t,c,d]),D.useEffect(()=>{if(t&&me.current[t]){const Z=me.current[t];setTimeout(()=>{Z.layout(),Z.focus()},10)}},[t]),D.useEffect(()=>{m?(t&&t!=="preview"&&Te(t),s("preview")):(t==="preview"&&se&&s(se),Te(null))},[m,t,se,s]);const Pe=Z=>{const Q=me.current[Z];if(!Q)return;const N=he.getState().tabs.find(Ce=>Ce.id===Z);N&&w(N.fileId,Q.getValue())},Ae=async()=>{if(re){ce(!1),m&&P();return}await A(),ce(!0),m||P()};return D.useEffect(()=>{!m&&re&&ce(!1)},[m,re]),D.useEffect(()=>{(async()=>{const{ideSettings:Q}=await Je(async()=>{const{ideSettings:pe}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:pe}},[]);if(!Q.hideTerminalDuringPreview)return;const{panelVisible:N,panelVisibilityBeforePreview:Ce,togglePanel:Se}=he.getState();t==="preview"?N&&(he.setState({panelVisibilityBeforePreview:!0}),N&&Se()):t&&t!=="preview"&&Ce&&!N&&(Se(),he.setState({panelVisibilityBeforePreview:!1}))})()},[t]),u.jsxs("div",{className:"editor-area",children:[l.length>0||m?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"editor-tabs",children:u.jsxs("div",{className:"flex items-center justify-between w-full",children:[u.jsxs("div",{className:"flex",children:[l.map(Z=>u.jsxs("div",{className:`editor-tab ${t===Z.id?"active":""}`,onClick:()=>s(Z.id),children:[u.jsx("span",{className:"truncate flex-1",children:Z.title}),Z.isDirty&&u.jsx("span",{className:"ml-1 text-amber-400",children:"•"}),u.jsx("button",{className:"ml-2 text-blue-500 hover:text-blue-400",onClick:Q=>{Q.stopPropagation(),Pe(Z.id)},title:"Save",children:u.jsx(Fn,{size:14})}),u.jsx("button",{className:"ml-2 hover:text-foreground",onClick:Q=>{Q.stopPropagation(),e(Z.id)},children:u.jsx(ut,{size:16})})]},Z.id)),m&&se&&(()=>{const Z=C(se),Q=Z?`Preview - ${Z.title}`:"Preview";return u.jsxs("div",{className:`editor-tab ${t==="preview"?"active":""}`,onClick:()=>s("preview"),children:[u.jsx("span",{className:"truncate flex-1",children:Q}),u.jsx("button",{className:"ml-2 hover:text-foreground",onClick:N=>{N.stopPropagation(),P()},children:u.jsx(ut,{size:16})})]},"preview")})()]}),t&&t!=="preview"&&u.jsx("button",{className:`px-3 py-1 rounded text-sm flex items-center gap-1 mr-2 ${re?"bg-red-600 hover:bg-red-700 text-white":"bg-green-600 hover:bg-green-700 text-white"}`,onClick:Ae,title:re?"Stop":"Run",children:re?u.jsxs(u.Fragment,{children:[u.jsx(Mn,{size:14}),"Stop Preview"]}):u.jsxs(u.Fragment,{children:[u.jsx(Pn,{size:14}),"Run"]})})]})}),u.jsxs("div",{className:"editor-content",children:[l.map(Z=>u.jsx("div",{ref:Q=>ye.current[Z.id]=Q,className:"h-full w-full",style:{display:t===Z.id?"block":"none"},"data-tab-id":Z.id},Z.id)),m&&se&&u.jsx("div",{className:"h-full w-full",style:{display:t==="preview"?"block":"none"},children:u.jsx(Kn,{previewTabId:se})},"preview")]})]}):u.jsx("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-xl mb-2",children:"Welcome to Code Builder"}),u.jsx("p",{children:"Open a file to start editing"})]})}),h&&u.jsx(Xn,{})]})},Xn=()=>{const{togglePanel:l,buildOutput:t,buildError:e,isBuilding:s,runBuild:h,togglePreviewPanel:m}=he(),[c,d]=D.useState("terminal"),[w,P]=D.useState("");D.useEffect(()=>{(t||e||s)&&d("output")},[t,e,s]);const C=async A=>{A.startsWith("esbuild ")&&(await h(A),P(""))},T=()=>{const{activeTab:A,getTabById:G,getFileById:U}=he.getState();if(!A)return"esbuild app.js --bundle --minify --format=esm";const re=G(A);if(!re)return"esbuild app.js --bundle --minify --format=esm";const ce=U(re.fileId);return!ce||ce.type!=="file"?"esbuild app.js --bundle --minify --format=esm":`esbuild ${ce.id} --bundle --minify --format=esm`};return u.jsxs("div",{className:"panel-area flex flex-col h-1/3 border-t border-sidebar-border",children:[u.jsxs("div",{className:"flex items-center border-b border-sidebar-border p-1",children:[u.jsxs("div",{className:"flex space-x-2",children:[u.jsx("button",{className:`px-2 ${c==="terminal"?"border-b-2 border-foreground":""}`,onClick:()=>d("terminal"),children:"Terminal"}),u.jsx("button",{className:`px-2 ${c==="output"?"border-b-2 border-foreground":""}`,onClick:()=>d("output"),children:"Output"})]}),u.jsx("button",{className:"ml-auto text-sidebar-foreground hover:text-foreground p-1",onClick:l,children:u.jsx(ut,{size:16})})]}),u.jsxs("div",{className:"flex-1 p-2 font-mono text-sm overflow-auto",children:[c==="terminal"&&u.jsx("div",{className:"text-muted-foreground",children:"~ $"})," ",c==="output"&&u.jsxs("div",{children:[u.jsx("div",{className:"mb-2",children:u.jsx("input",{type:"text",placeholder:T(),value:w,className:"w-full bg-input text-foreground px-2 py-1 rounded text-sm font-mono",onChange:A=>P(A.target.value),onKeyDown:A=>{A.key==="Enter"&&C(A.currentTarget.value)}})}),s&&u.jsx("div",{className:"text-blue-500 mb-2",children:"Building..."}),e&&u.jsx("div",{className:"bg-destructive/10 text-destructive p-2 rounded whitespace-pre-wrap overflow-auto mb-2",children:e}),!e&&t&&u.jsx("div",{className:"text-xs font-mono bg-sidebar-accent p-2 rounded overflow-auto",children:u.jsx("pre",{className:"whitespace-pre-wrap",children:t})}),!s&&!e&&!t&&u.jsx("div",{className:"text-muted-foreground",children:"Enter an esbuild command above or run preview to see build output here"})]})]})]})},Qn=()=>{const{sidebarVisible:l,previewPanelVisible:t,activeView:e}=he(),s=D.useRef(null),[h,m]=D.useState(!1),[c,d]=D.useState(0),[w,P]=D.useState(0),[C,T]=D.useState(240);D.useEffect(()=>{const G=re=>{if(!h)return;const ce=re.clientX-c,ye=Math.max(200,Math.min(500,w+ce));T(ye),s.current&&(s.current.style.width=`${ye}px`)},U=()=>{m(!1),document.body.style.cursor="",document.body.style.userSelect=""};return h&&(document.addEventListener("mousemove",G),document.addEventListener("mouseup",U),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",U)}},[h,c,w]);const A=G=>{var U;m(!0),d(G.clientX),P(((U=s.current)==null?void 0:U.offsetWidth)||240),G.preventDefault()};return!l||t?null:u.jsxs("div",{ref:s,className:"side-bar relative flex flex-col",style:{width:`${C}px`},children:[u.jsx("div",{className:"p-2 font-medium flex items-center justify-between border-b border-sidebar-border",children:u.jsxs("div",{className:"uppercase text-xs tracking-wider",children:[e==="explorer"&&"Explorer",e==="search"&&"Search",e==="git"&&"Source Control",e==="extensions"&&"Extensions"]})}),u.jsxs("div",{className:"px-2 py-1 flex-1 overflow-auto",children:[e==="explorer"&&u.jsx(Zn,{}),e==="search"&&u.jsx(er,{}),e==="git"&&u.jsx(tr,{}),e==="extensions"&&u.jsx(nr,{})]}),u.jsx("div",{className:"resize-handle",onMouseDown:A})]})},Zn=()=>{const{fileSystem:l}=he(),t=l.find(c=>c.name===".vfsignore"&&c.type==="file"),e=D.useMemo(()=>!t||!t.content?[]:t.content.split(/\r?\n/).map(c=>c.trim()).filter(c=>c&&!c.startsWith("#")),[t]),s=D.useMemo(()=>e.map(c=>{const d=c.endsWith("/");let P=(d?c.slice(0,-1):c).replace(/\*\*/g,".*").replace(/\*/g,"[^/]*").replace(/\?/g,".");return d&&(P=`${P}(/.*)?`),new RegExp(`^${P}$`)}),[e]),m=[...l.filter(c=>c.name!==".vfsignore"&&!s.some(d=>d.test(c.id)))].sort((c,d)=>c.type!==d.type?c.type==="folder"?-1:1:c.name.localeCompare(d.name));return u.jsx("div",{className:"explorer-tree",children:m.map(c=>u.jsx(St,{item:c,level:0,ignoreMatchers:s},c.id))})},St=({item:l,level:t,ignoreMatchers:e})=>{const[s,h]=dn.useState(!0),{openTab:m}=he(),c=w=>{w.stopPropagation(),l.type==="folder"&&h(!s)},d=()=>{l.type==="file"?m(l.id):h(!s)};return u.jsxs("div",{children:[u.jsx("div",{className:"tree-item",onClick:d,style:{paddingLeft:`${t*20+4}px`},children:u.jsxs("span",{className:"flex items-center",children:[l.type==="folder"&&u.jsx("span",{className:"mr-1 text-sidebar-foreground",onClick:c,children:s?u.jsx(_n,{size:16}):u.jsx(Nn,{size:16})}),l.type==="folder"?u.jsx(Tn,{size:16,className:"mr-1 text-sidebar-foreground"}):u.jsx(Cn,{size:16,className:"mr-1 text-sidebar-foreground"}),u.jsx("span",{className:"truncate",children:l.name})]})}),s&&l.type==="folder"&&l.children&&u.jsx("div",{children:[...l.children.filter(C=>C.name!==".vfsignore"&&!e.some(T=>T.test(C.id)))].sort((C,T)=>C.type!==T.type?C.type==="folder"?-1:1:C.name.localeCompare(T.name)).map(C=>u.jsx(St,{item:C,level:t+1,ignoreMatchers:e},C.id))})]})},er=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search in files..."}),u.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No results found. Try searching for something."})]}),tr=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("div",{className:"text-sm font-medium mb-2",children:"Changes"}),u.jsx("div",{className:"text-sm text-muted-foreground",children:"No changes detected in your workspace."})]}),nr=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search Extensions..."}),u.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No extensions installed. Search for extensions in the marketplace."})]}),rr=()=>{const{theme:l,toggleTheme:t,toggleCommandPalette:e}=he();return u.jsxs("div",{className:"status-bar flex items-center px-2 text-xs",children:[u.jsx("div",{className:"flex items-center",children:u.jsxs("button",{className:"flex items-center px-2 py-1 hover:bg-sidebar-accent rounded",onClick:e,children:[u.jsx(Vn,{size:14,className:"mr-1"}),u.jsx("span",{children:"Command Palette"})]})}),u.jsx("div",{className:"flex-1"}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(Tt,{size:14,className:"mr-1"}),u.jsx("span",{children:"main"})]}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"Ln 1, Col 1"})}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"Spaces: 2"})}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"UTF-8"})}),u.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",onClick:t,children:l==="dark"?"☀️":"🌙"}),u.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",children:u.jsx(On,{size:14})})]})]})},sr=()=>{const{theme:l,toggleCommandPalette:t,toggleSidebar:e,togglePanel:s,togglePreviewPanel:h,sidebarVisible:m}=he();return D.useEffect(()=>{const c=document.querySelector(".ide-builder-app");c&&(c.classList.toggle("light",l==="light"),c.classList.toggle("dark",l==="dark"))},[l]),D.useEffect(()=>{const c=d=>{d.ctrlKey&&d.shiftKey&&d.key==="P"&&(d.preventDefault(),t()),d.ctrlKey&&d.key==="b"&&(d.preventDefault(),e()),d.ctrlKey&&d.key==="`"&&(d.preventDefault(),s()),d.ctrlKey&&d.shiftKey&&d.key==="V"&&(d.preventDefault(),h())};return window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}},[t,e,s,h]),u.jsxs("div",{className:"ide-container",children:[m&&u.jsx(Qn,{}),u.jsx(Yn,{}),u.jsx(rr,{}),u.jsx(Un,{})]})},ir=()=>u.jsx("div",{className:"ide-builder-app h-full w-full overflow-hidden",style:{height:"100%",width:"100%"},children:u.jsx(sr,{})}),Fr={id:bt.id,manifest:bt,init:async()=>{console.log("Builder IDE plugin initialized")},render:()=>u.jsx(ir,{}),onOpen:()=>{console.log("Builder IDE opened")},onClose:()=>{console.log("Builder IDE closed")}};var[st,Mr]=fn("Tooltip",[kt]),it=kt(),Pt="TooltipProvider",lr=700,dt="tooltip.open",[or,ht]=st(Pt),_t=l=>{const{__scopeTooltip:t,delayDuration:e=lr,skipDelayDuration:s=300,disableHoverableContent:h=!1,children:m}=l,c=D.useRef(!0),d=D.useRef(!1),w=D.useRef(0);return D.useEffect(()=>{const P=w.current;return()=>window.clearTimeout(P)},[]),u.jsx(or,{scope:t,isOpenDelayedRef:c,delayDuration:e,onOpen:D.useCallback(()=>{window.clearTimeout(w.current),c.current=!1},[]),onClose:D.useCallback(()=>{window.clearTimeout(w.current),w.current=window.setTimeout(()=>c.current=!0,s)},[s]),isPointerInTransitRef:d,onPointerInTransitChange:D.useCallback(P=>{d.current=P},[]),disableHoverableContent:h,children:m})};_t.displayName=Pt;var Ke="Tooltip",[ar,lt]=st(Ke),Nt=l=>{const{__scopeTooltip:t,children:e,open:s,defaultOpen:h,onOpenChange:m,disableHoverableContent:c,delayDuration:d}=l,w=ht(Ke,l.__scopeTooltip),P=it(t),[C,T]=D.useState(null),A=hn(),G=D.useRef(0),U=c??w.disableHoverableContent,re=d??w.delayDuration,ce=D.useRef(!1),[ye,me]=mn({prop:s,defaultProp:h??!1,onChange:Z=>{Z?(w.onOpen(),document.dispatchEvent(new CustomEvent(dt))):w.onClose(),m==null||m(Z)},caller:Ke}),se=D.useMemo(()=>ye?ce.current?"delayed-open":"instant-open":"closed",[ye]),Te=D.useCallback(()=>{window.clearTimeout(G.current),G.current=0,ce.current=!1,me(!0)},[me]),Pe=D.useCallback(()=>{window.clearTimeout(G.current),G.current=0,me(!1)},[me]),Ae=D.useCallback(()=>{window.clearTimeout(G.current),G.current=window.setTimeout(()=>{ce.current=!0,me(!0),G.current=0},re)},[re,me]);return D.useEffect(()=>()=>{G.current&&(window.clearTimeout(G.current),G.current=0)},[]),u.jsx($n,{...P,children:u.jsx(ar,{scope:t,contentId:A,open:ye,stateAttribute:se,trigger:C,onTriggerChange:T,onTriggerEnter:D.useCallback(()=>{w.isOpenDelayedRef.current?Ae():Te()},[w.isOpenDelayedRef,Ae,Te]),onTriggerLeave:D.useCallback(()=>{U?Pe():(window.clearTimeout(G.current),G.current=0)},[Pe,U]),onOpen:Te,onClose:Pe,disableHoverableContent:U,children:e})})};Nt.displayName=Ke;var ft="TooltipTrigger",$t=D.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,h=lt(ft,e),m=ht(ft,e),c=it(e),d=D.useRef(null),w=Et(t,d,h.onTriggerChange),P=D.useRef(!1),C=D.useRef(!1),T=D.useCallback(()=>P.current=!1,[]);return D.useEffect(()=>()=>document.removeEventListener("pointerup",T),[T]),u.jsx(Rn,{asChild:!0,...c,children:u.jsx(pn.button,{"aria-describedby":h.open?h.contentId:void 0,"data-state":h.stateAttribute,...s,ref:w,onPointerMove:Me(l.onPointerMove,A=>{A.pointerType!=="touch"&&!C.current&&!m.isPointerInTransitRef.current&&(h.onTriggerEnter(),C.current=!0)}),onPointerLeave:Me(l.onPointerLeave,()=>{h.onTriggerLeave(),C.current=!1}),onPointerDown:Me(l.onPointerDown,()=>{h.open&&h.onClose(),P.current=!0,document.addEventListener("pointerup",T,{once:!0})}),onFocus:Me(l.onFocus,()=>{P.current||h.onOpen()}),onBlur:Me(l.onBlur,h.onClose),onClick:Me(l.onClick,h.onClose)})})});$t.displayName=ft;var cr="TooltipPortal",[Vr,ur]=st(cr,{forceMount:void 0}),Ue="TooltipContent",Rt=D.forwardRef((l,t)=>{const e=ur(Ue,l.__scopeTooltip),{forceMount:s=e.forceMount,side:h="top",...m}=l,c=lt(Ue,l.__scopeTooltip);return u.jsx(gn,{present:s||c.open,children:c.disableHoverableContent?u.jsx(Dt,{side:h,...m,ref:t}):u.jsx(dr,{side:h,...m,ref:t})})}),dr=D.forwardRef((l,t)=>{const e=lt(Ue,l.__scopeTooltip),s=ht(Ue,l.__scopeTooltip),h=D.useRef(null),m=Et(t,h),[c,d]=D.useState(null),{trigger:w,onClose:P}=e,C=h.current,{onPointerInTransitChange:T}=s,A=D.useCallback(()=>{d(null),T(!1)},[T]),G=D.useCallback((U,re)=>{const ce=U.currentTarget,ye={x:U.clientX,y:U.clientY},me=gr(ye,ce.getBoundingClientRect()),se=vr(ye,me),Te=yr(re.getBoundingClientRect()),Pe=wr([...se,...Te]);d(Pe),T(!0)},[T]);return D.useEffect(()=>()=>A(),[A]),D.useEffect(()=>{if(w&&C){const U=ce=>G(ce,C),re=ce=>G(ce,w);return w.addEventListener("pointerleave",U),C.addEventListener("pointerleave",re),()=>{w.removeEventListener("pointerleave",U),C.removeEventListener("pointerleave",re)}}},[w,C,G,A]),D.useEffect(()=>{if(c){const U=re=>{const ce=re.target,ye={x:re.clientX,y:re.clientY},me=(w==null?void 0:w.contains(ce))||(C==null?void 0:C.contains(ce)),se=!br(ye,c);me?A():se&&(A(),P())};return document.addEventListener("pointermove",U),()=>document.removeEventListener("pointermove",U)}},[w,C,c,P,A]),u.jsx(Dt,{...l,ref:m})}),[fr,hr]=st(Ke,{isInside:!1}),mr=yn("TooltipContent"),Dt=D.forwardRef((l,t)=>{const{__scopeTooltip:e,children:s,"aria-label":h,onEscapeKeyDown:m,onPointerDownOutside:c,...d}=l,w=lt(Ue,e),P=it(e),{onClose:C}=w;return D.useEffect(()=>(document.addEventListener(dt,C),()=>document.removeEventListener(dt,C)),[C]),D.useEffect(()=>{if(w.trigger){const T=A=>{const G=A.target;G!=null&&G.contains(w.trigger)&&C()};return window.addEventListener("scroll",T,{capture:!0}),()=>window.removeEventListener("scroll",T,{capture:!0})}},[w.trigger,C]),u.jsx(vn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:m,onPointerDownOutside:c,onFocusOutside:T=>T.preventDefault(),onDismiss:C,children:u.jsxs(Dn,{"data-state":w.stateAttribute,...P,...d,ref:t,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(mr,{children:s}),u.jsx(fr,{scope:e,isInside:!0,children:u.jsx(bn,{id:w.contentId,role:"tooltip",children:h||s})})]})})});Rt.displayName=Ue;var At="TooltipArrow",pr=D.forwardRef((l,t)=>{const{__scopeTooltip:e,...s}=l,h=it(e);return hr(At,e).isInside?null:u.jsx(An,{...h,...s,ref:t})});pr.displayName=At;function gr(l,t){const e=Math.abs(t.top-l.y),s=Math.abs(t.bottom-l.y),h=Math.abs(t.right-l.x),m=Math.abs(t.left-l.x);switch(Math.min(e,s,h,m)){case m:return"left";case h:return"right";case e:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function vr(l,t,e=5){const s=[];switch(t){case"top":s.push({x:l.x-e,y:l.y+e},{x:l.x+e,y:l.y+e});break;case"bottom":s.push({x:l.x-e,y:l.y-e},{x:l.x+e,y:l.y-e});break;case"left":s.push({x:l.x+e,y:l.y-e},{x:l.x+e,y:l.y+e});break;case"right":s.push({x:l.x-e,y:l.y-e},{x:l.x-e,y:l.y+e});break}return s}function yr(l){const{top:t,right:e,bottom:s,left:h}=l;return[{x:h,y:t},{x:e,y:t},{x:e,y:s},{x:h,y:s}]}function br(l,t){const{x:e,y:s}=l;let h=!1;for(let m=0,c=t.length-1;m<t.length;c=m++){const d=t[m],w=t[c],P=d.x,C=d.y,T=w.x,A=w.y;C>s!=A>s&&e<(T-P)*(s-C)/(A-C)+P&&(h=!h)}return h}function wr(l){const t=l.slice();return t.sort((e,s)=>e.x<s.x?-1:e.x>s.x?1:e.y<s.y?-1:e.y>s.y?1:0),xr(t)}function xr(l){if(l.length<=1)return l.slice();const t=[];for(let s=0;s<l.length;s++){const h=l[s];for(;t.length>=2;){const m=t[t.length-1],c=t[t.length-2];if((m.x-c.x)*(h.y-c.y)>=(m.y-c.y)*(h.x-c.x))t.pop();else break}t.push(h)}t.pop();const e=[];for(let s=l.length-1;s>=0;s--){const h=l[s];for(;e.length>=2;){const m=e[e.length-1],c=e[e.length-2];if((m.x-c.x)*(h.y-c.y)>=(m.y-c.y)*(h.x-c.x))e.pop();else break}e.push(h)}return e.pop(),t.length===1&&e.length===1&&t[0].x===e[0].x&&t[0].y===e[0].y?t:t.concat(e)}var jr=_t,Er=Nt,kr=$t,Ot=Rt;const Tr=jr,Cr=Er,Sr=kr,It=D.forwardRef(({className:l,sideOffset:t=4,...e},s)=>u.jsx(Ot,{ref:s,sideOffset:t,className:wn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l),...e}));It.displayName=Ot.displayName;const Lr=()=>{const{activeView:l,setActiveView:t}=he(),e=[{id:"explorer",icon:In,label:"Explorer"},{id:"search",icon:Ct,label:"Search"},{id:"git",icon:Tt,label:"Source Control"},{id:"extensions",icon:Bn,label:"Extensions"}];return u.jsxs("div",{className:"activity-bar flex flex-col items-center py-2",children:[u.jsx("div",{className:"flex flex-col items-center space-y-4",children:e.map(s=>u.jsx(wt,{icon:s.icon,label:s.label,isActive:l===s.id,onClick:()=>t(s.id)},s.id))}),u.jsx("div",{className:"flex-1"}),u.jsx(wt,{icon:Sn,label:"Settings",isActive:!1,onClick:()=>{}})]})},wt=({icon:l,label:t,isActive:e,onClick:s})=>u.jsx(Tr,{children:u.jsxs(Cr,{delayDuration:300,children:[u.jsx(Sr,{asChild:!0,children:u.jsxs("button",{className:`p-2 rounded transition-colors relative ${e?"text-primary bg-sidebar-accent":"text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"}`,onClick:s,"aria-label":t,children:[e&&u.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-0.5 bg-primary"}),u.jsx(l,{size:24})]})}),u.jsx(It,{side:"right",className:"bg-popover text-popover-foreground",children:t})]})});var Bt={exports:{}};(function(l){(t=>{var e=Object.defineProperty,s=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,c=(n,i)=>{for(var o in i)e(n,o,{get:i[o],enumerable:!0})},d=(n,i,o,E)=>{if(i&&typeof i=="object"||typeof i=="function")for(let S of h(i))!m.call(n,S)&&S!==o&&e(n,S,{get:()=>i[S],enumerable:!(E=s(i,S))||E.enumerable});return n},w=n=>d(e({},"__esModule",{value:!0}),n),P=(n,i,o)=>new Promise((E,S)=>{var $=j=>{try{B(o.next(j))}catch(V){S(V)}},x=j=>{try{B(o.throw(j))}catch(V){S(V)}},B=j=>j.done?E(j.value):Promise.resolve(j.value).then($,x);B((o=o.apply(n,i)).next())}),C={};c(C,{analyzeMetafile:()=>Zt,analyzeMetafileSync:()=>rn,build:()=>Kt,buildSync:()=>en,context:()=>Yt,default:()=>on,formatMessages:()=>Qt,formatMessagesSync:()=>nn,initialize:()=>sn,transform:()=>Xt,transformSync:()=>tn,version:()=>Jt}),t.exports=w(C);function T(n){let i=E=>{if(E===null)o.write8(0);else if(typeof E=="boolean")o.write8(1),o.write8(+E);else if(typeof E=="number")o.write8(2),o.write32(E|0);else if(typeof E=="string")o.write8(3),o.write(U(E));else if(E instanceof Uint8Array)o.write8(4),o.write(E);else if(E instanceof Array){o.write8(5),o.write32(E.length);for(let S of E)i(S)}else{let S=Object.keys(E);o.write8(6),o.write32(S.length);for(let $ of S)o.write(U($)),i(E[$])}},o=new G;return o.write32(0),o.write32(n.id<<1|+!n.isRequest),i(n.value),me(o.buf,o.len-4,0),o.buf.subarray(0,o.len)}function A(n){let i=()=>{switch(o.read8()){case 0:return null;case 1:return!!o.read8();case 2:return o.read32();case 3:return re(o.read());case 4:return o.read();case 5:{let x=o.read32(),B=[];for(let j=0;j<x;j++)B.push(i());return B}case 6:{let x=o.read32(),B={};for(let j=0;j<x;j++)B[re(o.read())]=i();return B}default:throw new Error("Invalid packet")}},o=new G(n),E=o.read32(),S=(E&1)===0;E>>>=1;let $=i();if(o.ptr!==n.length)throw new Error("Invalid packet");return{id:E,isRequest:S,value:$}}var G=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let i=new Uint8Array((this.len+n)*2);i.set(this.buf),this.buf=i}return this.len+=n,this.len-n}write8(n){let i=this._write(1);this.buf[i]=n}write32(n){let i=this._write(4);me(this.buf,n,i)}write(n){let i=this._write(4+n.length);me(this.buf,n.length,i),this.buf.set(n,i+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ye(this.buf,this._read(4))}read(){let n=this.read32(),i=new Uint8Array(n),o=this._read(i.length);return i.set(this.buf.subarray(o,o+n)),i}},U,re,ce;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,i=new TextDecoder;U=o=>n.encode(o),re=o=>i.decode(o),ce='new TextEncoder().encode("")'}else if(typeof Buffer<"u")U=n=>Buffer.from(n),re=n=>{let{buffer:i,byteOffset:o,byteLength:E}=n;return Buffer.from(i,o,E).toString()},ce='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(U("")instanceof Uint8Array))throw new Error(`Invariant violation: "${ce} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ye(n,i){return n[i++]|n[i++]<<8|n[i++]<<16|n[i++]<<24}function me(n,i,o){n[o++]=i,n[o++]=i>>8,n[o++]=i>>16,n[o++]=i>>24}var se=JSON.stringify,Te="warning",Pe="silent";function Ae(n){if(be(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var Z=()=>null,Q=n=>typeof n=="boolean"?null:"a boolean",N=n=>typeof n=="string"?null:"a string",Ce=n=>n instanceof RegExp?null:"a RegExp object",Se=n=>typeof n=="number"&&n===(n|0)?null:"an integer",pe=n=>typeof n=="function"?null:"a function",ue=n=>Array.isArray(n)?null:"an array",we=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",We=n=>typeof n=="object"&&n!==null?null:"an array or an object",ze=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ge=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",xe=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",Ye=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",Xe=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",Qe=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",Vt=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function f(n,i,o,E){let S=n[o];if(i[o+""]=!0,S===void 0)return;let $=E(S);if($!==null)throw new Error(`${se(o)} must be ${$}`);return S}function ge(n,i,o){for(let E in n)if(!(E in i))throw new Error(`Invalid option ${o}: ${se(E)}`)}function Lt(n){let i=Object.create(null),o=f(n,i,"wasmURL",Vt),E=f(n,i,"wasmModule",ze),S=f(n,i,"worker",Q);return ge(n,i,"in initialize() call"),{wasmURL:o,wasmModule:E,worker:S}}function mt(n){let i;if(n!==void 0){i=Object.create(null);for(let o in n){let E=n[o];if(typeof E=="string"||E===!1)i[o]=E;else throw new Error(`Expected ${se(o)} in mangle cache to map to either a string or false`)}}return i}function Ze(n,i,o,E,S){let $=f(i,o,"color",Q),x=f(i,o,"logLevel",N),B=f(i,o,"logLimit",Se);$!==void 0?n.push(`--color=${$}`):E&&n.push("--color=true"),n.push(`--log-level=${x||S}`),n.push(`--log-limit=${B||0}`)}function be(n,i,o){if(typeof n!="string")throw new Error(`Expected value for ${i}${o!==void 0?" "+se(o):""} to be a string, got ${typeof n} instead`);return n}function pt(n,i,o){let E=f(i,o,"legalComments",N),S=f(i,o,"sourceRoot",N),$=f(i,o,"sourcesContent",Q),x=f(i,o,"target",Xe),B=f(i,o,"format",N),j=f(i,o,"globalName",N),V=f(i,o,"mangleProps",Ce),L=f(i,o,"reserveProps",Ce),ee=f(i,o,"mangleQuoted",Q),ie=f(i,o,"minify",Q),z=f(i,o,"minifySyntax",Q),oe=f(i,o,"minifyWhitespace",Q),F=f(i,o,"minifyIdentifiers",Q),q=f(i,o,"lineLimit",Se),ne=f(i,o,"drop",ue),J=f(i,o,"charset",N),y=f(i,o,"treeShaking",Q),p=f(i,o,"ignoreAnnotations",Q),g=f(i,o,"jsx",N),v=f(i,o,"jsxFactory",N),_=f(i,o,"jsxFragment",N),R=f(i,o,"jsxImportSource",N),W=f(i,o,"jsxDev",Q),r=f(i,o,"jsxSideEffects",Q),a=f(i,o,"define",we),b=f(i,o,"logOverride",we),k=f(i,o,"supported",we),I=f(i,o,"pure",ue),te=f(i,o,"keepNames",Q),K=f(i,o,"platform",N),H=f(i,o,"tsconfigRaw",Ye);if(E&&n.push(`--legal-comments=${E}`),S!==void 0&&n.push(`--source-root=${S}`),$!==void 0&&n.push(`--sources-content=${$}`),x&&(Array.isArray(x)?n.push(`--target=${Array.from(x).map(Ae).join(",")}`):n.push(`--target=${Ae(x)}`)),B&&n.push(`--format=${B}`),j&&n.push(`--global-name=${j}`),K&&n.push(`--platform=${K}`),H&&n.push(`--tsconfig-raw=${typeof H=="string"?H:JSON.stringify(H)}`),ie&&n.push("--minify"),z&&n.push("--minify-syntax"),oe&&n.push("--minify-whitespace"),F&&n.push("--minify-identifiers"),q&&n.push(`--line-limit=${q}`),J&&n.push(`--charset=${J}`),y!==void 0&&n.push(`--tree-shaking=${y}`),p&&n.push("--ignore-annotations"),ne)for(let M of ne)n.push(`--drop:${be(M,"drop")}`);if(V&&n.push(`--mangle-props=${V.source}`),L&&n.push(`--reserve-props=${L.source}`),ee!==void 0&&n.push(`--mangle-quoted=${ee}`),g&&n.push(`--jsx=${g}`),v&&n.push(`--jsx-factory=${v}`),_&&n.push(`--jsx-fragment=${_}`),R&&n.push(`--jsx-import-source=${R}`),W&&n.push("--jsx-dev"),r&&n.push("--jsx-side-effects"),a)for(let M in a){if(M.indexOf("=")>=0)throw new Error(`Invalid define: ${M}`);n.push(`--define:${M}=${be(a[M],"define",M)}`)}if(b)for(let M in b){if(M.indexOf("=")>=0)throw new Error(`Invalid log override: ${M}`);n.push(`--log-override:${M}=${be(b[M],"log override",M)}`)}if(k)for(let M in k){if(M.indexOf("=")>=0)throw new Error(`Invalid supported: ${M}`);const de=k[M];if(typeof de!="boolean")throw new Error(`Expected value for supported ${se(M)} to be a boolean, got ${typeof de} instead`);n.push(`--supported:${M}=${de}`)}if(I)for(let M of I)n.push(`--pure:${be(M,"pure")}`);te&&n.push("--keep-names")}function Ut(n,i,o,E,S){var $;let x=[],B=[],j=Object.create(null),V=null,L=null;Ze(x,i,j,o,E),pt(x,i,j);let ee=f(i,j,"sourcemap",xe),ie=f(i,j,"bundle",Q),z=f(i,j,"splitting",Q),oe=f(i,j,"preserveSymlinks",Q),F=f(i,j,"metafile",Q),q=f(i,j,"outfile",N),ne=f(i,j,"outdir",N),J=f(i,j,"outbase",N),y=f(i,j,"tsconfig",N),p=f(i,j,"resolveExtensions",ue),g=f(i,j,"nodePaths",ue),v=f(i,j,"mainFields",ue),_=f(i,j,"conditions",ue),R=f(i,j,"external",ue),W=f(i,j,"packages",N),r=f(i,j,"alias",we),a=f(i,j,"loader",we),b=f(i,j,"outExtension",we),k=f(i,j,"publicPath",N),I=f(i,j,"entryNames",N),te=f(i,j,"chunkNames",N),K=f(i,j,"assetNames",N),H=f(i,j,"inject",ue),M=f(i,j,"banner",we),de=f(i,j,"footer",we),Y=f(i,j,"entryPoints",We),le=f(i,j,"absWorkingDir",N),X=f(i,j,"stdin",we),ae=($=f(i,j,"write",Q))!=null?$:S,ve=f(i,j,"allowOverwrite",Q),ke=f(i,j,"mangleCache",we);if(j.plugins=!0,ge(i,j,`in ${n}() call`),ee&&x.push(`--sourcemap${ee===!0?"":`=${ee}`}`),ie&&x.push("--bundle"),ve&&x.push("--allow-overwrite"),z&&x.push("--splitting"),oe&&x.push("--preserve-symlinks"),F&&x.push("--metafile"),q&&x.push(`--outfile=${q}`),ne&&x.push(`--outdir=${ne}`),J&&x.push(`--outbase=${J}`),y&&x.push(`--tsconfig=${y}`),W&&x.push(`--packages=${W}`),p){let O=[];for(let fe of p){if(be(fe,"resolve extension"),fe.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${fe}`);O.push(fe)}x.push(`--resolve-extensions=${O.join(",")}`)}if(k&&x.push(`--public-path=${k}`),I&&x.push(`--entry-names=${I}`),te&&x.push(`--chunk-names=${te}`),K&&x.push(`--asset-names=${K}`),v){let O=[];for(let fe of v){if(be(fe,"main field"),fe.indexOf(",")>=0)throw new Error(`Invalid main field: ${fe}`);O.push(fe)}x.push(`--main-fields=${O.join(",")}`)}if(_){let O=[];for(let fe of _){if(be(fe,"condition"),fe.indexOf(",")>=0)throw new Error(`Invalid condition: ${fe}`);O.push(fe)}x.push(`--conditions=${O.join(",")}`)}if(R)for(let O of R)x.push(`--external:${be(O,"external")}`);if(r)for(let O in r){if(O.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${O}`);x.push(`--alias:${O}=${be(r[O],"alias",O)}`)}if(M)for(let O in M){if(O.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${O}`);x.push(`--banner:${O}=${be(M[O],"banner",O)}`)}if(de)for(let O in de){if(O.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${O}`);x.push(`--footer:${O}=${be(de[O],"footer",O)}`)}if(H)for(let O of H)x.push(`--inject:${be(O,"inject")}`);if(a)for(let O in a){if(O.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${O}`);x.push(`--loader:${O}=${be(a[O],"loader",O)}`)}if(b)for(let O in b){if(O.indexOf("=")>=0)throw new Error(`Invalid out extension: ${O}`);x.push(`--out-extension:${O}=${be(b[O],"out extension",O)}`)}if(Y)if(Array.isArray(Y))for(let O=0,fe=Y.length;O<fe;O++){let je=Y[O];if(typeof je=="object"&&je!==null){let Ee=Object.create(null),Re=f(je,Ee,"in",N),nt=f(je,Ee,"out",N);if(ge(je,Ee,"in entry point at index "+O),Re===void 0)throw new Error('Missing property "in" for entry point at index '+O);if(nt===void 0)throw new Error('Missing property "out" for entry point at index '+O);B.push([nt,Re])}else B.push(["",be(je,"entry point at index "+O)])}else for(let O in Y)B.push([O,be(Y[O],"entry point",O)]);if(X){let O=Object.create(null),fe=f(X,O,"contents",Qe),je=f(X,O,"resolveDir",N),Ee=f(X,O,"sourcefile",N),Re=f(X,O,"loader",N);ge(X,O,'in "stdin" object'),Ee&&x.push(`--sourcefile=${Ee}`),Re&&x.push(`--loader=${Re}`),je&&(L=je),typeof fe=="string"?V=U(fe):fe instanceof Uint8Array&&(V=fe)}let Fe=[];if(g)for(let O of g)O+="",Fe.push(O);return{entries:B,flags:x,write:ae,stdinContents:V,stdinResolveDir:L,absWorkingDir:le,nodePaths:Fe,mangleCache:mt(ke)}}function Wt(n,i,o,E){let S=[],$=Object.create(null);Ze(S,i,$,o,E),pt(S,i,$);let x=f(i,$,"sourcemap",xe),B=f(i,$,"sourcefile",N),j=f(i,$,"loader",N),V=f(i,$,"banner",N),L=f(i,$,"footer",N),ee=f(i,$,"mangleCache",we);return ge(i,$,`in ${n}() call`),x&&S.push(`--sourcemap=${x===!0?"external":x}`),B&&S.push(`--sourcefile=${B}`),j&&S.push(`--loader=${j}`),V&&S.push(`--banner=${V}`),L&&S.push(`--footer=${L}`),{flags:S,mangleCache:mt(ee)}}function zt(n){const i={},o={didClose:!1,reason:""};let E={},S=0,$=0,x=new Uint8Array(16*1024),B=0,j=y=>{let p=B+y.length;if(p>x.length){let v=new Uint8Array(p*2);v.set(x),x=v}x.set(y,B),B+=y.length;let g=0;for(;g+4<=B;){let v=ye(x,g);if(g+4+v>B)break;g+=4,oe(x.subarray(g,g+v)),g+=v}g>0&&(x.copyWithin(0,g,B),B-=g)},V=y=>{o.didClose=!0,y&&(o.reason=": "+(y.message||y));const p="The service was stopped"+o.reason;for(let g in E)E[g](p,null);E={}},L=(y,p,g)=>{if(o.didClose)return g("The service is no longer running"+o.reason,null);let v=S++;E[v]=(_,R)=>{try{g(_,R)}finally{y&&y.unref()}},y&&y.ref(),n.writeToStdin(T({id:v,isRequest:!0,value:p}))},ee=(y,p)=>{if(o.didClose)throw new Error("The service is no longer running"+o.reason);n.writeToStdin(T({id:y,isRequest:!1,value:p}))},ie=(y,p)=>P(this,null,function*(){try{if(p.command==="ping"){ee(y,{});return}if(typeof p.key=="number"){const g=i[p.key];if(g){const v=g[p.command];if(v){yield v(y,p);return}}}throw new Error("Invalid command: "+p.command)}catch(g){ee(y,{errors:[Oe(g,n,null,void 0,"")]})}}),z=!0,oe=y=>{if(z){z=!1;let g=String.fromCharCode(...y);if(g!=="0.18.7")throw new Error(`Cannot start service: Host version "0.18.7" does not match binary version ${se(g)}`);return}let p=A(y);if(p.isRequest)ie(p.id,p.value);else{let g=E[p.id];delete E[p.id],p.value.error?g(p.value.error,{}):g(null,p.value)}};return{readFromStdout:j,afterClose:V,service:{buildOrContext:({callName:y,refs:p,options:g,isTTY:v,defaultWD:_,callback:R})=>{let W=0;const r=$++,a={},b={ref(){++W===1&&p&&p.ref()},unref(){--W===0&&(delete i[r],p&&p.unref())}};i[r]=a,b.ref(),Gt(y,r,L,ee,b,n,a,g,v,_,(k,I)=>{try{R(k,I)}finally{b.unref()}})},transform:({callName:y,refs:p,input:g,options:v,isTTY:_,fs:R,callback:W})=>{const r=gt();let a=b=>{try{if(typeof g!="string"&&!(g instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:k,mangleCache:I}=Wt(y,v,_,Pe),te={command:"transform",flags:k,inputFS:b!==null,input:b!==null?U(b):typeof g=="string"?U(g):g};I&&(te.mangleCache=I),L(p,te,(K,H)=>{if(K)return W(new Error(K),null);let M=Ie(H.errors,r),de=Ie(H.warnings,r),Y=1,le=()=>{if(--Y===0){let X={warnings:de,code:H.code,map:H.map,mangleCache:void 0,legalComments:void 0};"legalComments"in H&&(X.legalComments=H==null?void 0:H.legalComments),H.mangleCache&&(X.mangleCache=H==null?void 0:H.mangleCache),W(null,X)}};if(M.length>0)return W(qe("Transform failed",M,de),null);H.codeFS&&(Y++,R.readFile(H.code,(X,ae)=>{X!==null?W(X,null):(H.code=ae,le())})),H.mapFS&&(Y++,R.readFile(H.map,(X,ae)=>{X!==null?W(X,null):(H.map=ae,le())})),le()})}catch(k){let I=[];try{Ze(I,v,{},_,Pe)}catch{}const te=Oe(k,n,r,void 0,"");L(p,{command:"error",flags:I,error:te},()=>{te.detail=r.load(te.detail),W(qe("Transform failed",[te],[]),null)})}};if((typeof g=="string"||g instanceof Uint8Array)&&g.length>1024*1024){let b=a;a=()=>R.writeFile(g,b)}a(null)},formatMessages:({callName:y,refs:p,messages:g,options:v,callback:_})=>{let R=Ne(g,"messages",null,"");if(!v)throw new Error(`Missing second argument in ${y}() call`);let W={},r=f(v,W,"kind",N),a=f(v,W,"color",Q),b=f(v,W,"terminalWidth",Se);if(ge(v,W,`in ${y}() call`),r===void 0)throw new Error(`Missing "kind" in ${y}() call`);if(r!=="error"&&r!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${y}() call`);let k={command:"format-msgs",messages:R,isWarning:r==="warning"};a!==void 0&&(k.color=a),b!==void 0&&(k.terminalWidth=b),L(p,k,(I,te)=>{if(I)return _(new Error(I),null);_(null,te.messages)})},analyzeMetafile:({callName:y,refs:p,metafile:g,options:v,callback:_})=>{v===void 0&&(v={});let R={},W=f(v,R,"color",Q),r=f(v,R,"verbose",Q);ge(v,R,`in ${y}() call`);let a={command:"analyze-metafile",metafile:g};W!==void 0&&(a.color=W),r!==void 0&&(a.verbose=r),L(p,a,(b,k)=>{if(b)return _(new Error(b),null);_(null,k.result)})}}}}function Gt(n,i,o,E,S,$,x,B,j,V,L){const ee=gt(),ie=n==="context",z=(q,ne)=>{const J=[];try{Ze(J,B,{},j,Te)}catch{}const y=Oe(q,$,ee,void 0,ne);o(S,{command:"error",flags:J,error:y},()=>{y.detail=ee.load(y.detail),L(qe(ie?"Context failed":"Build failed",[y],[]),null)})};let oe;if(typeof B=="object"){const q=B.plugins;if(q!==void 0){if(!Array.isArray(q))return z(new Error('"plugins" must be an array'),"");oe=q}}if(oe&&oe.length>0){if($.isSync)return z(new Error("Cannot use plugins in synchronous API calls"),"");qt(i,o,E,S,$,x,B,oe,ee).then(q=>{if(!q.ok)return z(q.error,q.pluginName);try{F(q.requestPlugins,q.runOnEndCallbacks,q.scheduleOnDisposeCallbacks)}catch(ne){z(ne,"")}},q=>z(q,""));return}try{F(null,(q,ne)=>ne([],[]),()=>{})}catch(q){z(q,"")}function F(q,ne,J){const y=$.hasFS,{entries:p,flags:g,write:v,stdinContents:_,stdinResolveDir:R,absWorkingDir:W,nodePaths:r,mangleCache:a}=Ut(n,B,j,Te,y);if(v&&!$.hasFS)throw new Error('The "write" option is unavailable in this environment');const b={command:"build",key:i,entries:p,flags:g,write:v,stdinContents:_,stdinResolveDir:R,absWorkingDir:W||V,nodePaths:r,context:ie};q&&(b.plugins=q),a&&(b.mangleCache=a);const k=(K,H)=>{const M={errors:Ie(K.errors,ee),warnings:Ie(K.warnings,ee),outputFiles:void 0,metafile:void 0,mangleCache:void 0},de=M.errors.slice(),Y=M.warnings.slice();K.outputFiles&&(M.outputFiles=K.outputFiles.map(Ht)),K.metafile&&(M.metafile=JSON.parse(K.metafile)),K.mangleCache&&(M.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(re(K.writeToStdout).replace(/\n$/,"")),ne(M,(le,X)=>{if(de.length>0||le.length>0){const ae=qe("Build failed",de.concat(le),Y.concat(X));return H(ae,null,le,X)}H(null,M,le,X)})};let I,te;ie&&(x["on-end"]=(K,H)=>new Promise(M=>{k(H,(de,Y,le,X)=>{const ae={errors:le,warnings:X};te&&te(de,Y),I=void 0,te=void 0,E(K,ae),M()})})),o(S,b,(K,H)=>{if(K)return L(new Error(K),null);if(!ie)return k(H,(Y,le)=>(J(),L(Y,le)));if(H.errors.length>0)return L(qe("Context failed",H.errors,H.warnings),null);let M=!1;const de={rebuild:()=>(I||(I=new Promise((Y,le)=>{let X;te=(ve,ke)=>{X||(X=()=>ve?le(ve):Y(ke))};const ae=()=>{o(S,{command:"rebuild",key:i},(ke,Fe)=>{ke?le(new Error(ke)):X?X():ae()})};ae()})),I),watch:(Y={})=>new Promise((le,X)=>{if(!$.hasFS)throw new Error('Cannot use the "watch" API in this environment');ge(Y,{},"in watch() call"),o(S,{command:"watch",key:i},ke=>{ke?X(new Error(ke)):le(void 0)})}),serve:(Y={})=>new Promise((le,X)=>{if(!$.hasFS)throw new Error('Cannot use the "serve" API in this environment');const ae={},ve=f(Y,ae,"port",Se),ke=f(Y,ae,"host",N),Fe=f(Y,ae,"servedir",N),O=f(Y,ae,"keyfile",N),fe=f(Y,ae,"certfile",N),je=f(Y,ae,"onRequest",pe);ge(Y,ae,"in serve() call");const Ee={command:"serve",key:i,onRequest:!!je};ve!==void 0&&(Ee.port=ve),ke!==void 0&&(Ee.host=ke),Fe!==void 0&&(Ee.servedir=Fe),O!==void 0&&(Ee.keyfile=O),fe!==void 0&&(Ee.certfile=fe),o(S,Ee,(Re,nt)=>{if(Re)return X(new Error(Re));je&&(x["serve-request"]=(an,cn)=>{je(cn.args),E(an,{})}),le(nt)})}),cancel:()=>new Promise(Y=>{if(M)return Y();o(S,{command:"cancel",key:i},()=>{Y()})}),dispose:()=>new Promise(Y=>{if(M)return Y();M=!0,o(S,{command:"dispose",key:i},()=>{Y(),J(),S.unref()})})};S.ref(),L(null,de)})}}var qt=(n,i,o,E,S,$,x,B,j)=>P(void 0,null,function*(){let V=[],L=[],ee={},ie={},z=[],oe=0,F=0,q=[],ne=!1;B=[...B];for(let p of B){let g={};if(typeof p!="object")throw new Error(`Plugin at index ${F} must be an object`);const v=f(p,g,"name",N);if(typeof v!="string"||v==="")throw new Error(`Plugin at index ${F} is missing a name`);try{let _=f(p,g,"setup",pe);if(typeof _!="function")throw new Error("Plugin is missing a setup function");ge(p,g,`on plugin ${se(v)}`);let R={name:v,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};F++;let r=_({initialOptions:x,resolve:(a,b={})=>{if(!ne)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof a!="string")throw new Error("The path to resolve must be a string");let k=Object.create(null),I=f(b,k,"pluginName",N),te=f(b,k,"importer",N),K=f(b,k,"namespace",N),H=f(b,k,"resolveDir",N),M=f(b,k,"kind",N),de=f(b,k,"pluginData",Z);return ge(b,k,"in resolve() call"),new Promise((Y,le)=>{const X={command:"resolve",path:a,key:n,pluginName:v};if(I!=null&&(X.pluginName=I),te!=null&&(X.importer=te),K!=null&&(X.namespace=K),H!=null&&(X.resolveDir=H),M!=null)X.kind=M;else throw new Error('Must specify "kind" when calling "resolve"');de!=null&&(X.pluginData=j.store(de)),i(E,X,(ae,ve)=>{ae!==null?le(new Error(ae)):Y({errors:Ie(ve.errors,j),warnings:Ie(ve.warnings,j),path:ve.path,external:ve.external,sideEffects:ve.sideEffects,namespace:ve.namespace,suffix:ve.suffix,pluginData:j.load(ve.pluginData)})})})},onStart(a){let b='This error came from the "onStart" callback registered here:',k=et(new Error(b),S,"onStart");V.push({name:v,callback:a,note:k}),R.onStart=!0},onEnd(a){let b='This error came from the "onEnd" callback registered here:',k=et(new Error(b),S,"onEnd");L.push({name:v,callback:a,note:k}),R.onEnd=!0},onResolve(a,b){let k='This error came from the "onResolve" callback registered here:',I=et(new Error(k),S,"onResolve"),te={},K=f(a,te,"filter",Ce),H=f(a,te,"namespace",N);if(ge(a,te,`in onResolve() call for plugin ${se(v)}`),K==null)throw new Error("onResolve() call is missing a filter");let M=oe++;ee[M]={name:v,callback:b,note:I},R.onResolve.push({id:M,filter:K.source,namespace:H||""})},onLoad(a,b){let k='This error came from the "onLoad" callback registered here:',I=et(new Error(k),S,"onLoad"),te={},K=f(a,te,"filter",Ce),H=f(a,te,"namespace",N);if(ge(a,te,`in onLoad() call for plugin ${se(v)}`),K==null)throw new Error("onLoad() call is missing a filter");let M=oe++;ie[M]={name:v,callback:b,note:I},R.onLoad.push({id:M,filter:K.source,namespace:H||""})},onDispose(a){z.push(a)},esbuild:S.esbuild});r&&(yield r),q.push(R)}catch(_){return{ok:!1,error:_,pluginName:v}}}$["on-start"]=(p,g)=>P(void 0,null,function*(){let v={errors:[],warnings:[]};yield Promise.all(V.map(_=>P(void 0,[_],function*({name:R,callback:W,note:r}){try{let a=yield W();if(a!=null){if(typeof a!="object")throw new Error(`Expected onStart() callback in plugin ${se(R)} to return an object`);let b={},k=f(a,b,"errors",ue),I=f(a,b,"warnings",ue);ge(a,b,`from onStart() callback in plugin ${se(R)}`),k!=null&&v.errors.push(...Ne(k,"errors",j,R)),I!=null&&v.warnings.push(...Ne(I,"warnings",j,R))}}catch(a){v.errors.push(Oe(a,S,j,r&&r(),R))}}))),o(p,v)}),$["on-resolve"]=(p,g)=>P(void 0,null,function*(){let v={},_="",R,W;for(let r of g.ids)try{({name:_,callback:R,note:W}=ee[r]);let a=yield R({path:g.path,importer:g.importer,namespace:g.namespace,resolveDir:g.resolveDir,kind:g.kind,pluginData:j.load(g.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onResolve() callback in plugin ${se(_)} to return an object`);let b={},k=f(a,b,"pluginName",N),I=f(a,b,"path",N),te=f(a,b,"namespace",N),K=f(a,b,"suffix",N),H=f(a,b,"external",Q),M=f(a,b,"sideEffects",Q),de=f(a,b,"pluginData",Z),Y=f(a,b,"errors",ue),le=f(a,b,"warnings",ue),X=f(a,b,"watchFiles",ue),ae=f(a,b,"watchDirs",ue);ge(a,b,`from onResolve() callback in plugin ${se(_)}`),v.id=r,k!=null&&(v.pluginName=k),I!=null&&(v.path=I),te!=null&&(v.namespace=te),K!=null&&(v.suffix=K),H!=null&&(v.external=H),M!=null&&(v.sideEffects=M),de!=null&&(v.pluginData=j.store(de)),Y!=null&&(v.errors=Ne(Y,"errors",j,_)),le!=null&&(v.warnings=Ne(le,"warnings",j,_)),X!=null&&(v.watchFiles=tt(X,"watchFiles")),ae!=null&&(v.watchDirs=tt(ae,"watchDirs"));break}}catch(a){v={id:r,errors:[Oe(a,S,j,W&&W(),_)]};break}o(p,v)}),$["on-load"]=(p,g)=>P(void 0,null,function*(){let v={},_="",R,W;for(let r of g.ids)try{({name:_,callback:R,note:W}=ie[r]);let a=yield R({path:g.path,namespace:g.namespace,suffix:g.suffix,pluginData:j.load(g.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onLoad() callback in plugin ${se(_)} to return an object`);let b={},k=f(a,b,"pluginName",N),I=f(a,b,"contents",Qe),te=f(a,b,"resolveDir",N),K=f(a,b,"pluginData",Z),H=f(a,b,"loader",N),M=f(a,b,"errors",ue),de=f(a,b,"warnings",ue),Y=f(a,b,"watchFiles",ue),le=f(a,b,"watchDirs",ue);ge(a,b,`from onLoad() callback in plugin ${se(_)}`),v.id=r,k!=null&&(v.pluginName=k),I instanceof Uint8Array?v.contents=I:I!=null&&(v.contents=U(I)),te!=null&&(v.resolveDir=te),K!=null&&(v.pluginData=j.store(K)),H!=null&&(v.loader=H),M!=null&&(v.errors=Ne(M,"errors",j,_)),de!=null&&(v.warnings=Ne(de,"warnings",j,_)),Y!=null&&(v.watchFiles=tt(Y,"watchFiles")),le!=null&&(v.watchDirs=tt(le,"watchDirs"));break}}catch(a){v={id:r,errors:[Oe(a,S,j,W&&W(),_)]};break}o(p,v)});let J=(p,g)=>g([],[]);L.length>0&&(J=(p,g)=>{P(void 0,null,function*(){const v=[],_=[];for(const{name:R,callback:W,note:r}of L){let a,b;try{const k=yield W(p);if(k!=null){if(typeof k!="object")throw new Error(`Expected onEnd() callback in plugin ${se(R)} to return an object`);let I={},te=f(k,I,"errors",ue),K=f(k,I,"warnings",ue);ge(k,I,`from onEnd() callback in plugin ${se(R)}`),te!=null&&(a=Ne(te,"errors",j,R)),K!=null&&(b=Ne(K,"warnings",j,R))}}catch(k){a=[Oe(k,S,j,r&&r(),R)]}if(a){v.push(...a);try{p.errors.push(...a)}catch{}}if(b){_.push(...b);try{p.warnings.push(...b)}catch{}}}g(v,_)})});let y=()=>{for(const p of z)setTimeout(()=>p(),0)};return ne=!0,{ok:!0,requestPlugins:q,runOnEndCallbacks:J,scheduleOnDisposeCallbacks:y}});function gt(){const n=new Map;let i=0;return{load(o){return n.get(o)},store(o){if(o===void 0)return-1;const E=i++;return n.set(E,o),E}}}function et(n,i,o){let E,S=!1;return()=>{if(S)return E;S=!0;try{let $=(n.stack+"").split(`
`);$.splice(1,1);let x=vt(i,$,o);if(x)return E={text:n.message,location:x},E}catch{}}}function Oe(n,i,o,E,S){let $="Internal error",x=null;try{$=(n&&n.message||n)+""}catch{}try{x=vt(i,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:S,text:$,location:x,notes:E?[E]:[],detail:o?o.store(n):-1}}function vt(n,i,o){let E="    at ";if(n.readFileSync&&!i[0].startsWith(E)&&i[1].startsWith(E))for(let S=1;S<i.length;S++){let $=i[S];if($.startsWith(E))for($=$.slice(E.length);;){let x=/^(?:new |async )?\S+ \((.*)\)$/.exec($);if(x){$=x[1];continue}if(x=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec($),x){$=x[1];continue}if(x=/^(\S+):(\d+):(\d+)$/.exec($),x){let B;try{B=n.readFileSync(x[1],"utf8")}catch{break}let j=B.split(/\r\n|\r|\n|\u2028|\u2029/)[+x[2]-1]||"",V=+x[3]-1,L=j.slice(V,V+o.length)===o?o.length:0;return{file:x[1],namespace:"file",line:+x[2],column:U(j.slice(0,V)).length,length:U(j.slice(V,V+L)).length,lineText:j+`
`+i.slice(1).join(`
`),suggestion:""}}break}}return null}function qe(n,i,o){let E=5,S=i.length<1?"":` with ${i.length} error${i.length<2?"":"s"}:`+i.slice(0,E+1).map((x,B)=>{if(B===E)return`
...`;if(!x.location)return`
error: ${x.text}`;let{file:j,line:V,column:L}=x.location,ee=x.pluginName?`[plugin: ${x.pluginName}] `:"";return`
${j}:${V}:${L}: ERROR: ${ee}${x.text}`}).join(""),$=new Error(`${n}${S}`);return $.errors=i,$.warnings=o,$}function Ie(n,i){for(const o of n)o.detail=i.load(o.detail);return n}function yt(n,i){if(n==null)return null;let o={},E=f(n,o,"file",N),S=f(n,o,"namespace",N),$=f(n,o,"line",Se),x=f(n,o,"column",Se),B=f(n,o,"length",Se),j=f(n,o,"lineText",N),V=f(n,o,"suggestion",N);return ge(n,o,i),{file:E||"",namespace:S||"",line:$||0,column:x||0,length:B||0,lineText:j||"",suggestion:V||""}}function Ne(n,i,o,E){let S=[],$=0;for(const x of n){let B={},j=f(x,B,"id",N),V=f(x,B,"pluginName",N),L=f(x,B,"text",N),ee=f(x,B,"location",Ge),ie=f(x,B,"notes",ue),z=f(x,B,"detail",Z),oe=`in element ${$} of "${i}"`;ge(x,B,oe);let F=[];if(ie)for(const q of ie){let ne={},J=f(q,ne,"text",N),y=f(q,ne,"location",Ge);ge(q,ne,oe),F.push({text:J||"",location:yt(y,oe)})}S.push({id:j||"",pluginName:V||E,text:L||"",location:yt(ee,oe),notes:F,detail:o?o.store(z):-1}),$++}return S}function tt(n,i){const o=[];for(const E of n){if(typeof E!="string")throw new Error(`${se(i)} must be an array of strings`);o.push(E)}return o}function Ht({path:n,contents:i}){let o=null;return{path:n,contents:i,get text(){const E=this.contents;return(o===null||E!==i)&&(i=E,o=re(E)),o}}}var Jt="0.18.7",Kt=n=>He().build(n),Yt=n=>He().context(n),Xt=(n,i)=>He().transform(n,i),Qt=(n,i)=>He().formatMessages(n,i),Zt=(n,i)=>He().analyzeMetafile(n,i),en=()=>{throw new Error('The "buildSync" API only works in node')},tn=()=>{throw new Error('The "transformSync" API only works in node')},nn=()=>{throw new Error('The "formatMessagesSync" API only works in node')},rn=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Be,ot,He=()=>{if(ot)return ot;throw Be?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},sn=n=>{n=Lt(n||{});let i=n.wasmURL,o=n.wasmModule,E=n.worker!==!1;if(!i&&!o)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Be)throw new Error('Cannot call "initialize" more than once');return Be=ln(i||"",o,E),Be.catch(()=>{Be=void 0}),Be},ln=(n,i,o)=>P(void 0,null,function*(){let E;if(o){let V=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});E=new Worker(URL.createObjectURL(V))}else{let V=(L=>{var ee=(F,q,ne)=>new Promise((J,y)=>{var p=_=>{try{v(ne.next(_))}catch(R){y(R)}},g=_=>{try{v(ne.throw(_))}catch(R){y(R)}},v=_=>_.done?J(_.value):Promise.resolve(_.value).then(p,g);v((ne=ne.apply(F,q)).next())});let ie,z={};for(let F=self;F;F=Object.getPrototypeOf(F))for(let q of Object.getOwnPropertyNames(F))q in z||Object.defineProperty(z,q,{get:()=>self[q]});(()=>{const F=()=>{const J=new Error("not implemented");return J.code="ENOSYS",J};if(!z.fs){let J="";z.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(y,p){J+=ne.decode(p);const g=J.lastIndexOf(`
`);return g!=-1&&(console.log(J.substring(0,g)),J=J.substring(g+1)),p.length},write(y,p,g,v,_,R){if(g!==0||v!==p.length||_!==null){R(F());return}const W=this.writeSync(y,p);R(null,W)},chmod(y,p,g){g(F())},chown(y,p,g,v){v(F())},close(y,p){p(F())},fchmod(y,p,g){g(F())},fchown(y,p,g,v){v(F())},fstat(y,p){p(F())},fsync(y,p){p(null)},ftruncate(y,p,g){g(F())},lchown(y,p,g,v){v(F())},link(y,p,g){g(F())},lstat(y,p){p(F())},mkdir(y,p,g){g(F())},open(y,p,g,v){v(F())},read(y,p,g,v,_,R){R(F())},readdir(y,p){p(F())},readlink(y,p){p(F())},rename(y,p,g){g(F())},rmdir(y,p){p(F())},stat(y,p){p(F())},symlink(y,p,g){g(F())},truncate(y,p,g){g(F())},unlink(y,p){p(F())},utimes(y,p,g,v){v(F())}}}if(z.process||(z.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw F()},pid:-1,ppid:-1,umask(){throw F()},cwd(){throw F()},chdir(){throw F()}}),!z.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!z.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!z.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!z.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const q=new TextEncoder("utf-8"),ne=new TextDecoder("utf-8");z.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=r=>{r!==0&&console.warn("exit code:",r)},this._exitPromise=new Promise(r=>{this._resolveExitPromise=r}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const J=(r,a)=>{this.mem.setUint32(r+0,a,!0),this.mem.setUint32(r+4,Math.floor(a/4294967296),!0)},y=r=>{const a=this.mem.getUint32(r+0,!0),b=this.mem.getInt32(r+4,!0);return a+b*4294967296},p=r=>{const a=this.mem.getFloat64(r,!0);if(a===0)return;if(!isNaN(a))return a;const b=this.mem.getUint32(r,!0);return this._values[b]},g=(r,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(r+4,2146959360,!0),this.mem.setUint32(r,0,!0);return}this.mem.setFloat64(r,a,!0);return}if(a===void 0){this.mem.setFloat64(r,0,!0);return}let k=this._ids.get(a);k===void 0&&(k=this._idPool.pop(),k===void 0&&(k=this._values.length),this._values[k]=a,this._goRefCounts[k]=0,this._ids.set(a,k)),this._goRefCounts[k]++;let I=0;switch(typeof a){case"object":a!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(r+4,2146959360|I,!0),this.mem.setUint32(r,k,!0)},v=r=>{const a=y(r+0),b=y(r+8);return new Uint8Array(this._inst.exports.mem.buffer,a,b)},_=r=>{const a=y(r+0),b=y(r+8),k=new Array(b);for(let I=0;I<b;I++)k[I]=p(a+I*8);return k},R=r=>{const a=y(r+0),b=y(r+8);return ne.decode(new DataView(this._inst.exports.mem.buffer,a,b))},W=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":r=>{r>>>=0;const a=y(r+8),b=y(r+16),k=this.mem.getInt32(r+24,!0);z.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,b,k))},"runtime.resetMemoryDataView":r=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":r=>{r>>>=0,J(r+8,(W+performance.now())*1e6)},"runtime.walltime":r=>{r>>>=0;const a=new Date().getTime();J(r+8,a/1e3),this.mem.setInt32(r+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":r=>{r>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},y(r+8)+1)),this.mem.setInt32(r+16,a,!0)},"runtime.clearTimeoutEvent":r=>{r>>>=0;const a=this.mem.getInt32(r+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":r=>{r>>>=0,crypto.getRandomValues(v(r+8))},"syscall/js.finalizeRef":r=>{r>>>=0;const a=this.mem.getUint32(r+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const b=this._values[a];this._values[a]=null,this._ids.delete(b),this._idPool.push(a)}},"syscall/js.stringVal":r=>{r>>>=0,g(r+24,R(r+8))},"syscall/js.valueGet":r=>{r>>>=0;const a=Reflect.get(p(r+8),R(r+16));r=this._inst.exports.getsp()>>>0,g(r+32,a)},"syscall/js.valueSet":r=>{r>>>=0,Reflect.set(p(r+8),R(r+16),p(r+32))},"syscall/js.valueDelete":r=>{r>>>=0,Reflect.deleteProperty(p(r+8),R(r+16))},"syscall/js.valueIndex":r=>{r>>>=0,g(r+24,Reflect.get(p(r+8),y(r+16)))},"syscall/js.valueSetIndex":r=>{r>>>=0,Reflect.set(p(r+8),y(r+16),p(r+24))},"syscall/js.valueCall":r=>{r>>>=0;try{const a=p(r+8),b=Reflect.get(a,R(r+16)),k=_(r+32),I=Reflect.apply(b,a,k);r=this._inst.exports.getsp()>>>0,g(r+56,I),this.mem.setUint8(r+64,1)}catch(a){r=this._inst.exports.getsp()>>>0,g(r+56,a),this.mem.setUint8(r+64,0)}},"syscall/js.valueInvoke":r=>{r>>>=0;try{const a=p(r+8),b=_(r+16),k=Reflect.apply(a,void 0,b);r=this._inst.exports.getsp()>>>0,g(r+40,k),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,g(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueNew":r=>{r>>>=0;try{const a=p(r+8),b=_(r+16),k=Reflect.construct(a,b);r=this._inst.exports.getsp()>>>0,g(r+40,k),this.mem.setUint8(r+48,1)}catch(a){r=this._inst.exports.getsp()>>>0,g(r+40,a),this.mem.setUint8(r+48,0)}},"syscall/js.valueLength":r=>{r>>>=0,J(r+16,parseInt(p(r+8).length))},"syscall/js.valuePrepareString":r=>{r>>>=0;const a=q.encode(String(p(r+8)));g(r+16,a),J(r+24,a.length)},"syscall/js.valueLoadString":r=>{r>>>=0;const a=p(r+8);v(r+16).set(a)},"syscall/js.valueInstanceOf":r=>{r>>>=0,this.mem.setUint8(r+24,p(r+8)instanceof p(r+16)?1:0)},"syscall/js.copyBytesToGo":r=>{r>>>=0;const a=v(r+8),b=p(r+32);if(!(b instanceof Uint8Array||b instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const k=b.subarray(0,a.length);a.set(k),J(r+40,k.length),this.mem.setUint8(r+48,1)},"syscall/js.copyBytesToJS":r=>{r>>>=0;const a=p(r+8),b=v(r+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(r+48,0);return}const k=b.subarray(0,a.length);a.set(k),J(r+40,k.length),this.mem.setUint8(r+48,1)},debug:r=>{console.log(r)}}}}run(J){return ee(this,null,function*(){if(!(J instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=J,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,z,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[z,5],[this,6]]),this._idPool=[],this.exited=!1;let y=4096;const p=r=>{const a=y,b=q.encode(r+"\0");return new Uint8Array(this.mem.buffer,y,b.length).set(b),y+=b.length,y%8!==0&&(y+=8-y%8),a},g=this.argv.length,v=[];this.argv.forEach(r=>{v.push(p(r))}),v.push(0),Object.keys(this.env).sort().forEach(r=>{v.push(p(`${r}=${this.env[r]}`))}),v.push(0);const R=y;if(v.forEach(r=>{this.mem.setUint32(y,r,!0),this.mem.setUint32(y+4,0,!0),y+=8}),y>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(g,R),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(J){const y=this;return function(){const p={id:J,this:this,args:arguments};return y._pendingEvent=p,y._resume(),p.result}}}})(),ie=({data:F})=>{let q=new TextDecoder,ne=z.fs,J="";ne.writeSync=(_,R)=>{if(_===1)L(R);else if(_===2){J+=q.decode(R);let W=J.split(`
`);W.length>1&&console.log(W.slice(0,-1).join(`
`)),J=W[W.length-1]}else throw new Error("Bad write");return R.length};let y=[],p,g=0;ie=({data:_})=>{_.length>0&&(y.push(_),p&&p())},ne.read=(_,R,W,r,a,b)=>{if(_!==0||W!==0||r!==R.length||a!==null)throw new Error("Bad read");if(y.length===0){p=()=>ne.read(_,R,W,r,a,b);return}let k=y[0],I=Math.max(0,Math.min(r,k.length-g));R.set(k.subarray(g,g+I),W),g+=I,g===k.length&&(y.shift(),g=0),b(null,I)};let v=new z.Go;v.argv=["","--service=0.18.7"],oe(F,v).then(_=>{L(null),v.run(_)},_=>{L(_)})};function oe(F,q){return ee(this,null,function*(){if(F instanceof WebAssembly.Module)return WebAssembly.instantiate(F,q.importObject);const ne=yield fetch(F);if(!ne.ok)throw new Error(`Failed to download ${JSON.stringify(F)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(ne.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(ne,q.importObject)).instance;const J=yield ne.arrayBuffer();return(yield WebAssembly.instantiate(J,q.importObject)).instance})}return F=>ie(F)})(L=>E.onmessage({data:L}));E={onmessage:null,postMessage:L=>setTimeout(()=>V({data:L})),terminate(){}}}let S,$;const x=new Promise((V,L)=>{S=V,$=L});E.onmessage=({data:V})=>{E.onmessage=({data:L})=>B(L),V?$(V):S()},E.postMessage(i||new URL(n,location.href).toString());let{readFromStdout:B,service:j}=zt({writeToStdin(V){E.postMessage(V)},isSync:!1,hasFS:!1,esbuild:C});yield x,ot={build:V=>new Promise((L,ee)=>j.buildOrContext({callName:"build",refs:null,options:V,isTTY:!1,defaultWD:"/",callback:(ie,z)=>ie?ee(ie):L(z)})),context:V=>new Promise((L,ee)=>j.buildOrContext({callName:"context",refs:null,options:V,isTTY:!1,defaultWD:"/",callback:(ie,z)=>ie?ee(ie):L(z)})),transform:(V,L)=>new Promise((ee,ie)=>j.transform({callName:"transform",refs:null,input:V,options:L||{},isTTY:!1,fs:{readFile(z,oe){oe(new Error("Internal error"),null)},writeFile(z,oe){oe(null)}},callback:(z,oe)=>z?ie(z):ee(oe)})),formatMessages:(V,L)=>new Promise((ee,ie)=>j.formatMessages({callName:"formatMessages",refs:null,messages:V,options:L,callback:(z,oe)=>z?ie(z):ee(oe)})),analyzeMetafile:(V,L)=>new Promise((ee,ie)=>j.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof V=="string"?V:JSON.stringify(V),options:L,callback:(z,oe)=>z?ie(z):ee(oe)}))}}),on=C})(l)})(Bt);var Ft=Bt.exports;function _e(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function xt(l,t){for(var e="",s=0,h=-1,m=0,c,d=0;d<=l.length;++d){if(d<l.length)c=l.charCodeAt(d);else{if(c===47)break;c=47}if(c===47){if(!(h===d-1||m===1))if(h!==d-1&&m===2){if(e.length<2||s!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var w=e.lastIndexOf("/");if(w!==e.length-1){w===-1?(e="",s=0):(e=e.slice(0,w),s=e.length-1-e.lastIndexOf("/")),h=d,m=0;continue}}else if(e.length===2||e.length===1){e="",s=0,h=d,m=0;continue}}t&&(e.length>0?e+="/..":e="..",s=2)}else e.length>0?e+="/"+l.slice(h+1,d):e=l.slice(h+1,d),s=d-h-1;h=d,m=0}else c===46&&m!==-1?++m:m=-1}return e}function Pr(l,t){var e=t.dir||t.root,s=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+s:e+l+s:s}var Le={resolve:function(){for(var t="",e=!1,s,h=arguments.length-1;h>=-1&&!e;h--){var m;h>=0?m=arguments[h]:(s===void 0&&(s=process.cwd()),m=s),_e(m),m.length!==0&&(t=m+"/"+t,e=m.charCodeAt(0)===47)}return t=xt(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(_e(t),t.length===0)return".";var e=t.charCodeAt(0)===47,s=t.charCodeAt(t.length-1)===47;return t=xt(t,!e),t.length===0&&!e&&(t="."),t.length>0&&s&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return _e(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var s=arguments[e];_e(s),s.length>0&&(t===void 0?t=s:t+="/"+s)}return t===void 0?".":Le.normalize(t)},relative:function(t,e){if(_e(t),_e(e),t===e||(t=Le.resolve(t),e=Le.resolve(e),t===e))return"";for(var s=1;s<t.length&&t.charCodeAt(s)===47;++s);for(var h=t.length,m=h-s,c=1;c<e.length&&e.charCodeAt(c)===47;++c);for(var d=e.length,w=d-c,P=m<w?m:w,C=-1,T=0;T<=P;++T){if(T===P){if(w>P){if(e.charCodeAt(c+T)===47)return e.slice(c+T+1);if(T===0)return e.slice(c+T)}else m>P&&(t.charCodeAt(s+T)===47?C=T:T===0&&(C=0));break}var A=t.charCodeAt(s+T),G=e.charCodeAt(c+T);if(A!==G)break;A===47&&(C=T)}var U="";for(T=s+C+1;T<=h;++T)(T===h||t.charCodeAt(T)===47)&&(U.length===0?U+="..":U+="/..");return U.length>0?U+e.slice(c+C):(c+=C,e.charCodeAt(c)===47&&++c,e.slice(c))},_makeLong:function(t){return t},dirname:function(t){if(_e(t),t.length===0)return".";for(var e=t.charCodeAt(0),s=e===47,h=-1,m=!0,c=t.length-1;c>=1;--c)if(e=t.charCodeAt(c),e===47){if(!m){h=c;break}}else m=!1;return h===-1?s?"/":".":s&&h===1?"//":t.slice(0,h)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');_e(t);var s=0,h=-1,m=!0,c;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var d=e.length-1,w=-1;for(c=t.length-1;c>=0;--c){var P=t.charCodeAt(c);if(P===47){if(!m){s=c+1;break}}else w===-1&&(m=!1,w=c+1),d>=0&&(P===e.charCodeAt(d)?--d===-1&&(h=c):(d=-1,h=w))}return s===h?h=w:h===-1&&(h=t.length),t.slice(s,h)}else{for(c=t.length-1;c>=0;--c)if(t.charCodeAt(c)===47){if(!m){s=c+1;break}}else h===-1&&(m=!1,h=c+1);return h===-1?"":t.slice(s,h)}},extname:function(t){_e(t);for(var e=-1,s=0,h=-1,m=!0,c=0,d=t.length-1;d>=0;--d){var w=t.charCodeAt(d);if(w===47){if(!m){s=d+1;break}continue}h===-1&&(m=!1,h=d+1),w===46?e===-1?e=d:c!==1&&(c=1):e!==-1&&(c=-1)}return e===-1||h===-1||c===0||c===1&&e===h-1&&e===s+1?"":t.slice(e,h)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return Pr("/",t)},parse:function(t){_e(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var s=t.charCodeAt(0),h=s===47,m;h?(e.root="/",m=1):m=0;for(var c=-1,d=0,w=-1,P=!0,C=t.length-1,T=0;C>=m;--C){if(s=t.charCodeAt(C),s===47){if(!P){d=C+1;break}continue}w===-1&&(P=!1,w=C+1),s===46?c===-1?c=C:T!==1&&(T=1):c!==-1&&(T=-1)}return c===-1||w===-1||T===0||T===1&&c===w-1&&c===d+1?w!==-1&&(d===0&&h?e.base=e.name=t.slice(1,w):e.base=e.name=t.slice(d,w)):(d===0&&h?(e.name=t.slice(1,c),e.base=t.slice(1,w)):(e.name=t.slice(d,c),e.base=t.slice(d,w)),e.ext=t.slice(c,w)),d>0?e.dir=t.slice(0,d-1):h&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};Le.posix=Le;var jt=Le;let rt=!1,ct=null;const $e={},Mt=async()=>(ct||(ct=Ft.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.18.7/esbuild.wasm"}).then(()=>(rt=!0,console.log("ESBuild initialized successfully"),rt)).catch(l=>{if(l instanceof Error&&l.message.includes("initialize")&&l.message.includes("once"))return console.warn("ESBuild initialize called multiple times; suppressing error"),rt=!0,rt;throw console.error("Failed to initialize ESBuild:",l),l})),ct),_r=async({entryPoint:l,content:t,options:e})=>{await Mt();try{$e[l]={contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};const s={name:"css-inject",setup(c){c.onLoad({filter:/\.css$/,namespace:"virtual-fs"},async d=>{console.log("[css-inject] Handling",d.path,"in namespace",d.namespace);const w=$e[d.path];if(!w)throw new Error(`CSS file not found in virtual filesystem: ${d.path}`);const P=w.contents,C=`injected-style-${d.path.replace(/[^a-zA-Z0-9]/g,"-")}`;return{contents:`
              // CSS module: ${d.path}
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
            `,loader:"js"}})}},h={name:"virtual-file-system",setup(c){c.onResolve({filter:new RegExp(`^${l}$`)},d=>({path:d.path,namespace:"virtual-fs"})),c.onResolve({filter:/^\.+\//,namespace:"virtual-fs"},d=>{const w=jt.posix.join(jt.posix.dirname(d.importer),d.path);return console.log(`Resolved ${d.path} from ${d.importer} to ${w}`),w.endsWith(".css")||$e[w]?{path:w,namespace:"virtual-fs"}:{path:`https://unpkg.com/${w}`,namespace:"http-url"}}),c.onResolve({filter:/^[^./].*/,namespace:"virtual-fs"},d=>{const w=d.path,P=`node_modules/${w}.js`;if($e[P])return{path:P,namespace:"virtual-fs"};const C=`node_modules/${w}/index.js`;return $e[C]?{path:C,namespace:"virtual-fs"}:{path:`https://unpkg.com/${w}`,namespace:"http-url"}}),c.onResolve({filter:/.*/,namespace:"http-url"},d=>{if(!d.path.startsWith(".")&&!d.path.startsWith("/"))return{path:`https://unpkg.com/${d.path}`,namespace:"http-url"};const w=d.importer.endsWith("/")?d.importer:`${d.importer}/`;return{path:new URL(d.path,w).href,namespace:"http-url"}}),c.onLoad({filter:/.*/,namespace:"virtual-fs"},async d=>{if($e[d.path])return{contents:$e[d.path].contents,loader:$e[d.path].loader};if(d.path===l)return{contents:t,loader:l.endsWith(".jsx")||l.endsWith(".tsx")?"jsx":l.endsWith(".css")?"css":"js"};throw d.path.endsWith(".css")?new Error(`CSS file not found: ${d.path}. Make sure to add it to the virtual filesystem.`):new Error(`File not found in virtual filesystem: ${d.path}`)}),c.onLoad({filter:/.*/,namespace:"http-url"},async d=>{const P=await(await fetch(d.path)).text();let C="js";return d.path.match(/\.(jsx|tsx)$/)?C="jsx":d.path.endsWith(".css")?C="css":d.path.endsWith(".json")?C="json":d.path.endsWith(".txt")&&(C="text"),{contents:P,loader:C,resolveDir:d.path.replace(/\/[^/]+$/,"/")}})}},m=await Ft.build({entryPoints:[l],bundle:e.bundle!==void 0?e.bundle:!0,minify:e.minify!==void 0?e.minify:!1,format:e.format||"iife",target:e.target||"es2015",jsxFactory:e.jsxFactory||"React.createElement",jsxFragment:e.jsxFragment||"React.Fragment",external:e.external||[],write:!1,plugins:[s,h],define:{"process.env.NODE_ENV":'"development"'}});return{code:m.outputFiles?m.outputFiles[0].text:"",error:null}}catch(s){return console.error("Build failed:",s),{code:"",error:s instanceof Error?s.message:String(s)}}},Nr=(l,t)=>{let e="js";l.match(/\.(jsx|tsx)$/)?e="jsx":l.endsWith(".css")?e="css":l.endsWith(".json")?e="json":l.endsWith(".txt")&&(e="text"),$e[l]={contents:t,loader:e}},$r=l=>{try{const t=l.split(" ");if(t[0]!=="esbuild")return null;const e=t[1],s={bundle:!1,minify:!1,format:"iife",jsxFactory:"React.createElement",jsxFragment:"React.Fragment"};for(let h=2;h<t.length;h++){const m=t[h];if(m==="--bundle")s.bundle=!0;else if(m==="--minify")s.minify=!0;else if(m.startsWith("--format=")){const c=m.split("=")[1];s.format=c}else if(m.startsWith("--target="))s.target=m.split("=")[1];else if(m.startsWith("--jsx-factory="))s.jsxFactory=m.split("=")[1];else if(m.startsWith("--jsx-fragment="))s.jsxFragment=m.split("=")[1];else if(m.startsWith("--external:")){const c=m.split(":")[1].split(",");s.external||(s.external=[]),s.external.push(...c)}}return{entryPoint:e,content:"",options:s}}catch(t){return console.error("Failed to parse esbuild command:",t),null}},Rr=Object.freeze(Object.defineProperty({__proto__:null,addToVirtualFs:Nr,buildCode:_r,initializeEsbuild:Mt,parseEsbuildCommand:$r},Symbol.toStringTag,{value:"Module"}));function Ur(...l){return xn(jn(l))}export{Lr as ActivityBar,Un as CommandPalette,Yn as EditorArea,sr as IdeLayout,Kn as PreviewPanel,Qn as SideBar,rr as StatusBar,Gr as VirtualFS,Nr as addToVirtualFs,_r as buildCode,Ur as cn,Fr as default,Mt as initializeEsbuild,$r as parseEsbuildCommand,he as useIdeStore,qr as virtualFs};
