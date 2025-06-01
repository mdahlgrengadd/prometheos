import{_ as Le,m as mn,l as Ve}from"./monaco-editor-Dq6WuQlL.js";import{c as Ke,K as pn,r as N,j as c,X as dt,R as gn,n as vn,s as yn,w as bn,o as Tt,l as wn,v as Be,x as xn,G as jn,L as En,M as kn,f as Tn,i as Cn,N as _n,O as Sn}from"./index-CJgcV1CL.js";import{u as Me}from"./fileSystem-D7AopyKw.js";import{V as ts,v as ns}from"./fileSystem-D7AopyKw.js";import{S as Pn}from"./save-Hsy9aNkZ.js";import{S as $n}from"./square-CVCqpoBa.js";import{P as Rn}from"./play-DQ88UytJ.js";import{c as Nn,C as On,m as xt,d as Ct,R as Dn,e as An,f as In,h as Fn}from"./MacroContext-Bl5Rj96v.js";import{F as Bn,S as Vn}from"./settings-CcDkSBSC.js";import{F as Mn}from"./file-text-7ucqGkY9.js";import{Z as Ln}from"./zap-RnuSuNzF.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=Ke("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=Ke("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=Ke("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=Ke("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=Ke("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Gn={activeView:"explorer",sidebarVisible:!0,panelVisible:!1,previewPanelVisible:!1,activeTab:null,tabs:[],theme:"light",commandPaletteOpen:!1,buildOutput:"",buildError:null,isBuilding:!1,buildCode:"",panelVisibilityBeforePreview:!1},ge=pn((r,t)=>({...Gn,toggleSidebar:()=>r(e=>({sidebarVisible:!e.sidebarVisible})),togglePanel:()=>r(e=>({panelVisible:!e.panelVisible})),togglePreviewPanel:()=>r(e=>{const i=!e.previewPanelVisible;return Le(async()=>{const{ideSettings:d}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:d}},[]).then(({ideSettings:d})=>{d.hideTerminalDuringPreview&&r(i?m=>({panelVisibilityBeforePreview:m.panelVisible,panelVisible:!1}):m=>({panelVisible:m.panelVisibilityBeforePreview}))}),{previewPanelVisible:i}}),toggleCommandPalette:()=>r(e=>({commandPaletteOpen:!e.commandPaletteOpen})),setActiveView:e=>r({activeView:e}),setActiveTab:e=>r({activeTab:e}),openTab:e=>{const i=t().getFileById(e);!i||i.type!=="file"||r(d=>{const m=d.tabs.find(f=>f.fileId===e);if(m)return{activeTab:m.id};const p={id:`tab-${Date.now()}`,fileId:e,title:i.name,language:i.language||"javascript",isDirty:!1};return{tabs:[...d.tabs,p],activeTab:p.id}})},closeTab:e=>{r(i=>{const d=i.tabs.findIndex(f=>f.id===e);if(d===-1)return i;const m=i.tabs.filter(f=>f.id!==e);let p=i.activeTab;return i.activeTab===e&&(m.length===0?p=null:d<m.length?p=m[d].id:p=m[m.length-1].id),{tabs:m,activeTab:p}})},toggleTheme:()=>r(e=>({theme:e.theme==="dark"?"light":"dark"})),getFileById:e=>{const i=m=>{if(m.id===e)return m;if(m.children)for(const p of m.children){const f=i(p);if(f)return f}},d=Me.getState().fs;return i(d)},getTabById:e=>t().tabs.find(i=>i.id===e),setTabDirty:(e,i)=>{r(d=>({tabs:d.tabs.map(m=>m.id===e?{...m,isDirty:i}:m)}))},saveFile:(e,i)=>{const d=(f,u=["root"])=>{if(f.id===e)return u;if(!f.children)return null;for(const x of f.children){const C=d(x,[...u,x.id]);if(C)return C}return null},m=Me.getState().fs,p=d(m);if(p){const f=p.slice(0,-1);Me.getState().updateFileContent(f,e,i),r(u=>({tabs:u.tabs.map(x=>x.fileId===e?{...x,isDirty:!1}:x)}))}},setBuildOutput:e=>r({buildOutput:e}),setBuildError:e=>r({buildError:e}),setBuildCode:e=>r({buildCode:e}),setIsBuilding:e=>r({isBuilding:e}),runBuild:async e=>{const i=t(),{ideSettings:d}=await Le(async()=>{const{ideSettings:D}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:D}},[]);d.showTerminalOnBuild&&!i.previewPanelVisible&&!i.panelVisible&&i.togglePanel();const{buildCode:m,parseEsbuildCommand:p,addToVirtualFs:f}=await Le(async()=>{const{buildCode:D,parseEsbuildCommand:M,addToVirtualFs:re}=await Promise.resolve().then(()=>Fr);return{buildCode:D,parseEsbuildCommand:M,addToVirtualFs:re}},void 0);i.setIsBuilding(!0),i.setBuildError(null),i.setBuildOutput(""),i.setBuildCode("");const x=(()=>{if(!i.activeTab)return null;const D=i.getTabById(i.activeTab);if(!D)return null;const M=i.getFileById(D.fileId);return!M||M.type!=="file"?null:{filePath:M.id,content:M.content||""}})();if(!x){i.setBuildError("No active file to build"),i.setIsBuilding(!1);return}const C=(D,M="")=>{const re=D.id;D.type==="file"&&D.content!==void 0&&f(re,D.content),D.type==="folder"&&D.children&&D.children.forEach(oe=>{C(oe,re)})},j=Me.getState().fs;C(j);let U;if(e){if(U=p(e),!U){i.setBuildError("Invalid esbuild command"),i.setIsBuilding(!1);return}U.content=x.content}else U={entryPoint:x.filePath,content:x.content,options:{bundle:!0,minify:!0,format:"esm"}};try{const D=await m(U);D.error?i.setBuildError(D.error):(i.setBuildCode(D.code),i.setBuildOutput(`Build successful!
Output: ${D.code.slice(0,1e3)}${D.code.length>1e3?"...":""}`),d.autoFocusPreview&&i.previewPanelVisible&&i.activeTab!=="preview"&&i.setActiveTab("preview"))}catch(D){const M=D instanceof Error?D.message:String(D);i.setBuildError(`Build failed: ${M}`)}finally{i.setIsBuilding(!1)}}})),Hn=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),at=[{id:"toggle-sidebar",title:"View: Toggle Side Bar",category:"View",shortcut:"Ctrl+B",handler:()=>ge.getState().toggleSidebar()},{id:"toggle-terminal",title:"View: Toggle Terminal",category:"View",shortcut:"Ctrl+`",handler:()=>ge.getState().togglePanel()},{id:"toggle-preview",title:"View: Toggle Preview",category:"View",shortcut:"Ctrl+Shift+V",handler:()=>ge.getState().togglePreviewPanel()},{id:"toggle-theme",title:"Preferences: Toggle Theme",category:"Preferences",handler:()=>ge.getState().toggleTheme()},{id:"build-active-file",title:"Build: Bundle Active File",category:"Build",handler:()=>{ge.getState().togglePreviewPanel()}},{id:"build-bundle-app",title:"Build: Bundle App (app.jsx)",category:"Build",handler:()=>{ge.getState().togglePreviewPanel()}}],qn=()=>{const{commandPaletteOpen:r,toggleCommandPalette:t}=ge(),[e,i]=N.useState(""),[d,m]=N.useState(at),[p,f]=N.useState(0),u=N.useRef(null);N.useEffect(()=>{if(!e){m(at);return}const j=e.toLowerCase(),U=at.filter(D=>D.title.toLowerCase().includes(j)||D.category&&D.category.toLowerCase().includes(j));m(U),f(0)},[e]),N.useEffect(()=>{r&&u.current&&u.current.focus()},[r]);const x=j=>{switch(j.key){case"ArrowDown":j.preventDefault(),f(U=>U<d.length-1?U+1:U);break;case"ArrowUp":j.preventDefault(),f(U=>U>0?U-1:U);break;case"Enter":j.preventDefault(),C(d[p]);break;case"Escape":j.preventDefault(),t();break}},C=j=>{t(),j.handler()};return r?c.jsx("div",{className:"command-palette",onClick:()=>t(),children:c.jsxs("div",{className:"command-palette-content animate-fade-in",onClick:j=>j.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center px-3 py-2 bg-input border-b border-border",children:[c.jsx(St,{size:16,className:"mr-2 text-muted-foreground"}),c.jsx("input",{ref:u,type:"text",className:"w-full bg-transparent outline-none placeholder:text-muted-foreground",placeholder:"Type a command or search...",value:e,onChange:j=>i(j.target.value),onKeyDown:x})]}),c.jsx("div",{className:"command-palette-results",children:d.length>0?d.map((j,U)=>c.jsxs("div",{className:`command-palette-item ${U===p?"selected":""}`,onClick:()=>C(j),onMouseEnter:()=>f(U),children:[c.jsx("span",{className:"flex-1",children:j.title}),j.category&&c.jsx("span",{className:"text-xs text-muted-foreground mr-2",children:j.category}),j.shortcut&&c.jsx("kbd",{className:"bg-muted text-muted-foreground px-2 py-0.5 text-xs rounded",children:j.shortcut})]},j.id)):c.jsx("div",{className:"p-3 text-muted-foreground",children:"No commands found"})})]})}):null};function Jn(r){return new Worker("/prometheos/assets/editor.worker-CozO_UIV.js",{type:"module",name:r==null?void 0:r.name})}function Kn(r){return new Worker("/prometheos/assets/css.worker-BhDbEE1e.js",{type:"module",name:r==null?void 0:r.name})}function Yn(r){return new Worker("/prometheos/assets/html.worker-CUt5J86U.js",{type:"module",name:r==null?void 0:r.name})}function Xn(r){return new Worker("/prometheos/assets/json.worker-CnsrqLYN.js",{type:"module",name:r==null?void 0:r.name})}function Qn(r){return new Worker("/prometheos/assets/ts.worker-Ddk2u2yN.js",{type:"module",name:r==null?void 0:r.name})}window.MonacoEnvironment={getWorker(r,t){return t==="json"?new Xn:t==="css"||t==="scss"||t==="less"?new Kn:t==="html"||t==="handlebars"||t==="razor"?new Yn:t==="typescript"||t==="javascript"?new Qn:new Jn}};Ve.typescript.typescriptDefaults.setCompilerOptions({target:Ve.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,moduleResolution:Ve.typescript.ModuleResolutionKind.NodeJs,module:Ve.typescript.ModuleKind.ESNext,noEmit:!0,esModuleInterop:!0,jsx:Ve.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0,typeRoots:["node_modules/@types"]});Ve.typescript.typescriptDefaults.addExtraLib('declare module "*.css" { const content: string; export default content; }',"global.d.ts");const Zn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),er=({previewTabId:r})=>{const{buildCode:t,buildError:e}=ge(),i=N.useRef(null);return N.useEffect(()=>{if(!t||e)return;const d=t||"console.log('No build output available');";if(!i.current)return;const m=i.current.contentDocument;m&&(m.open(),m.write(`
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
    `),m.close())},[t,e]),c.jsx("div",{className:"panel-area flex flex-col",style:{height:"100%",minHeight:0,maxHeight:"none"},children:c.jsx("div",{className:"flex flex-col flex-1 relative",children:c.jsxs("div",{className:"relative h-full",children:[c.jsx("iframe",{ref:i,title:"Preview",className:"w-full h-full border-none bg-white"}),e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50",children:c.jsxs("div",{className:"text-red-600 p-4 text-center",children:[c.jsx("h3",{children:"Build Error"}),c.jsx("pre",{className:"text-sm mt-2 whitespace-pre-wrap",children:e})]})})," ",!t&&!e&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:c.jsxs("div",{className:"text-gray-500 text-center",children:[c.jsx("h3",{className:"text-lg mb-2",children:"Preview Panel"}),c.jsx("p",{children:'Click "Run Preview" to see your code in action'})]})})]})})})},tr=()=>{const{tabs:r,activeTab:t,closeTab:e,setActiveTab:i,panelVisible:d,previewPanelVisible:m,theme:p,setTabDirty:f,saveFile:u,togglePreviewPanel:x,getTabById:C,runBuild:j}=ge(),[U,D]=N.useState({}),[M,re]=N.useState(!1),oe=N.useRef({}),ve=N.useRef({}),[pe,ae]=N.useState(null);N.useEffect(()=>{let ee;const fe=[],ne=[],A=ve.current;return t&&(async de=>{const{getFileById:Oe,getTabById:me}=ge.getState(),xe=me(de);if(!xe)return;const ze=Oe(xe.fileId);if(!ze||!ze.content)return;ee||(ee=(await Le(()=>Promise.resolve().then(()=>Zn),void 0)).default);const Ye=oe.current[de];if(!Ye)return;const Ee=ee.editor.create(Ye,{value:ze.content,language:xe.language,theme:p==="dark"?"vs-dark":"vs",automaticLayout:!0,minimap:{enabled:!0},scrollBeyondLastLine:!1,fontSize:14,fontFamily:"JetBrains Mono, monospace"});ve.current[de]=Ee,Ee.layout(),document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>Ee.layout()):setTimeout(()=>Ee.layout(),100);const Ge=()=>Ee.layout();return window.addEventListener("resize",Ge),ne.push(()=>window.removeEventListener("resize",Ge)),fe.push(Ee.onDidFocusEditorText(()=>Ee.layout())),fe.push(Ee.onDidChangeModelContent(()=>{const Xe=Ee.getValue();D(lt=>({...lt,[de]:Xe})),f(de,!0)})),Ee})(t),ee&&ee.editor&&(ee.editor.setTheme(p==="dark"?"vs-dark":"vs"),Object.values(ve.current).forEach(de=>de.layout())),()=>{ne.forEach(de=>de()),fe.forEach(de=>de.dispose()),ee&&ee.editor&&(Object.keys(A).forEach(de=>{const Oe=A[de];Oe&&Oe.dispose()}),ee.editor.getModels().forEach(de=>de.dispose()))}},[t,p,f]),N.useEffect(()=>{if(t&&ve.current[t]){const ee=ve.current[t];setTimeout(()=>{ee.layout(),ee.focus()},10)}},[t]),N.useEffect(()=>{m?(t&&t!=="preview"&&ae(t),i("preview")):(t==="preview"&&pe&&i(pe),ae(null))},[m,t,pe,i]);const _e=ee=>{const fe=ve.current[ee];if(!fe)return;const ne=ge.getState().tabs.find(A=>A.id===ee);ne&&u(ne.fileId,fe.getValue())},Se=async()=>{if(M){re(!1),m&&x();return}await j(),re(!0),m||x()};return N.useEffect(()=>{!m&&M&&re(!1)},[m,M]),N.useEffect(()=>{(async()=>{const{ideSettings:fe}=await Le(async()=>{const{ideSettings:de}=await import("./esbuild-settings-Bzyyd_qg.js");return{ideSettings:de}},[]);if(!fe.hideTerminalDuringPreview)return;const{panelVisible:ne,panelVisibilityBeforePreview:A,togglePanel:Re}=ge.getState();t==="preview"?ne&&(ge.setState({panelVisibilityBeforePreview:!0}),ne&&Re()):t&&t!=="preview"&&A&&!ne&&(Re(),ge.setState({panelVisibilityBeforePreview:!1}))})()},[t]),c.jsxs("div",{className:"editor-area",children:[r.length>0||m?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"editor-tabs",children:c.jsxs("div",{className:"flex items-center justify-between w-full",children:[c.jsxs("div",{className:"flex",children:[r.map(ee=>c.jsxs("div",{className:`editor-tab ${t===ee.id?"active":""}`,onClick:()=>i(ee.id),children:[c.jsx("span",{className:"truncate flex-1",children:ee.title}),ee.isDirty&&c.jsx("span",{className:"ml-1 text-amber-400",children:"•"}),c.jsx("button",{className:"ml-2 text-blue-500 hover:text-blue-400",onClick:fe=>{fe.stopPropagation(),_e(ee.id)},title:"Save",children:c.jsx(Pn,{size:14})}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:fe=>{fe.stopPropagation(),e(ee.id)},children:c.jsx(dt,{size:16})})]},ee.id)),m&&pe&&(()=>{const ee=C(pe),fe=ee?`Preview - ${ee.title}`:"Preview";return c.jsxs("div",{className:`editor-tab ${t==="preview"?"active":""}`,onClick:()=>i("preview"),children:[c.jsx("span",{className:"truncate flex-1",children:fe}),c.jsx("button",{className:"ml-2 hover:text-foreground",onClick:ne=>{ne.stopPropagation(),x()},children:c.jsx(dt,{size:16})})]},"preview")})()]}),t&&t!=="preview"&&c.jsx("button",{className:`px-3 py-1 rounded text-sm flex items-center gap-1 mr-2 ${M?"bg-red-600 hover:bg-red-700 text-white":"bg-green-600 hover:bg-green-700 text-white"}`,onClick:Se,title:M?"Stop":"Run",children:M?c.jsxs(c.Fragment,{children:[c.jsx($n,{size:14}),"Stop Preview"]}):c.jsxs(c.Fragment,{children:[c.jsx(Rn,{size:14}),"Run"]})})]})}),c.jsxs("div",{className:"editor-content",children:[r.map(ee=>c.jsx("div",{ref:fe=>oe.current[ee.id]=fe,className:"h-full w-full",style:{display:t===ee.id?"block":"none"},"data-tab-id":ee.id},ee.id)),m&&pe&&c.jsx("div",{className:"h-full w-full",style:{display:t==="preview"?"block":"none"},children:c.jsx(er,{previewTabId:pe})},"preview")]})]}):c.jsx("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:c.jsxs("div",{className:"text-center",children:[c.jsx("h3",{className:"text-xl mb-2",children:"Welcome to HybrIDE Editor"}),c.jsx("p",{children:"Open a file to start editing"})]})}),d&&c.jsx(nr,{})]})},nr=()=>{const{togglePanel:r,buildOutput:t,buildError:e,isBuilding:i,runBuild:d,togglePreviewPanel:m}=ge(),[p,f]=N.useState("terminal"),[u,x]=N.useState("");N.useEffect(()=>{(t||e||i)&&f("output")},[t,e,i]);const C=async U=>{U.startsWith("esbuild ")&&(await d(U),x(""))},j=()=>{const{activeTab:U,getTabById:D,getFileById:M}=ge.getState();if(!U)return"esbuild app.js --bundle --minify --format=esm";const re=D(U);if(!re)return"esbuild app.js --bundle --minify --format=esm";const oe=M(re.fileId);return!oe||oe.type!=="file"?"esbuild app.js --bundle --minify --format=esm":`esbuild ${oe.id} --bundle --minify --format=esm`};return c.jsxs("div",{className:"panel-area flex flex-col h-1/3 border-t border-sidebar-border",children:[c.jsxs("div",{className:"flex items-center border-b border-sidebar-border p-1",children:[c.jsxs("div",{className:"flex space-x-2",children:[c.jsx("button",{className:`px-2 ${p==="terminal"?"border-b-2 border-foreground":""}`,onClick:()=>f("terminal"),children:"Terminal"}),c.jsx("button",{className:`px-2 ${p==="output"?"border-b-2 border-foreground":""}`,onClick:()=>f("output"),children:"Output"})]}),c.jsx("button",{className:"ml-auto text-sidebar-foreground hover:text-foreground p-1",onClick:r,children:c.jsx(dt,{size:16})})]}),c.jsxs("div",{className:"flex-1 p-2 font-mono text-sm overflow-auto",children:[p==="terminal"&&c.jsx("div",{className:"text-muted-foreground",children:"~ $"})," ",p==="output"&&c.jsxs("div",{children:[c.jsx("div",{className:"mb-2",children:c.jsx("input",{type:"text",placeholder:j(),value:u,className:"w-full bg-input text-foreground px-2 py-1 rounded text-sm font-mono",onChange:U=>x(U.target.value),onKeyDown:U=>{U.key==="Enter"&&C(U.currentTarget.value)}})}),i&&c.jsx("div",{className:"text-blue-500 mb-2",children:"Building..."}),e&&c.jsx("div",{className:"bg-destructive/10 text-destructive p-2 rounded whitespace-pre-wrap overflow-auto mb-2",children:e}),!e&&t&&c.jsx("div",{className:"text-xs font-mono bg-sidebar-accent p-2 rounded overflow-auto",children:c.jsx("pre",{className:"whitespace-pre-wrap",children:t})}),!i&&!e&&!t&&c.jsx("div",{className:"text-muted-foreground",children:"Enter an esbuild command above or run preview to see build output here"})]})]})]})},rr=()=>{const{sidebarVisible:r,previewPanelVisible:t,activeView:e}=ge(),i=N.useRef(null),[d,m]=N.useState(!1),[p,f]=N.useState(0),[u,x]=N.useState(0),[C,j]=N.useState(240);N.useEffect(()=>{const D=re=>{if(!d)return;const oe=re.clientX-p,ve=Math.max(200,Math.min(500,u+oe));j(ve),i.current&&(i.current.style.width=`${ve}px`)},M=()=>{m(!1),document.body.style.cursor="",document.body.style.userSelect=""};return d&&(document.addEventListener("mousemove",D),document.addEventListener("mouseup",M),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",M)}},[d,p,u]);const U=D=>{var M;m(!0),f(D.clientX),x(((M=i.current)==null?void 0:M.offsetWidth)||240),D.preventDefault()};return!r||t?null:c.jsxs("div",{ref:i,className:"side-bar relative flex flex-col",style:{width:`${C}px`},children:[c.jsx("div",{className:"p-2 font-medium flex items-center justify-between border-b border-sidebar-border",children:c.jsxs("div",{className:"uppercase text-xs tracking-wider",children:[e==="explorer"&&"Explorer",e==="search"&&"Search",e==="git"&&"Source Control",e==="extensions"&&"Extensions"]})}),c.jsxs("div",{className:"px-2 py-1 flex-1 overflow-auto",children:[e==="explorer"&&c.jsx(sr,{}),e==="search"&&c.jsx(ir,{}),e==="git"&&c.jsx(lr,{}),e==="extensions"&&c.jsx(or,{})]}),c.jsx("div",{className:"resize-handle",onMouseDown:U})]})},sr=()=>{var p,f;const r=Me(u=>u.fs),t=(p=r.children)==null?void 0:p.find(u=>u.name===".vfsignore"&&u.type==="file"),e=N.useMemo(()=>!t||!t.content?[]:t.content.split(/\r?\n/).map(u=>u.trim()).filter(u=>u&&!u.startsWith("#")),[t]),i=N.useMemo(()=>e.map(u=>{const x=u.endsWith("/");let j=(x?u.slice(0,-1):u).replace(/\*\*/g,".*").replace(/\*/g,"[^/]*").replace(/\?/g,".");return x&&(j=`${j}(/.*)?`),new RegExp(`^${j}$`)}),[e]),m=[...((f=r.children)==null?void 0:f.filter(u=>u.name!==".vfsignore"&&!i.some(x=>x.test(u.id))))||[]].sort((u,x)=>u.type!==x.type?u.type==="folder"?-1:1:u.name.localeCompare(x.name));return c.jsx("div",{className:"explorer-tree",children:m.map(u=>c.jsx(Pt,{item:u,level:0,ignoreMatchers:i},u.id))})},Pt=({item:r,level:t,ignoreMatchers:e})=>{const[i,d]=gn.useState(!0),{openTab:m}=ge(),p=u=>{u.stopPropagation(),r.type==="folder"&&d(!i)},f=()=>{r.type==="file"?m(r.id):d(!i)};return c.jsxs("div",{children:[c.jsx("div",{className:"tree-item",onClick:f,style:{paddingLeft:`${t*20+4}px`},children:c.jsxs("span",{className:"flex items-center",children:[r.type==="folder"&&c.jsx("span",{className:"mr-1 text-sidebar-foreground",onClick:p,children:i?c.jsx(Nn,{size:16}):c.jsx(On,{size:16})}),r.type==="folder"?c.jsx(Bn,{size:16,className:"mr-1 text-sidebar-foreground"}):c.jsx(Mn,{size:16,className:"mr-1 text-sidebar-foreground"}),c.jsx("span",{className:"truncate",children:r.name})]})}),i&&r.type==="folder"&&r.children&&c.jsx("div",{children:[...r.children.filter(C=>C.name!==".vfsignore"&&!e.some(j=>j.test(C.id)))].sort((C,j)=>C.type!==j.type?C.type==="folder"?-1:1:C.name.localeCompare(j.name)).map(C=>c.jsx(Pt,{item:C,level:t+1,ignoreMatchers:e},C.id))})]})},ir=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search in files..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No results found. Try searching for something."})]}),lr=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("div",{className:"text-sm font-medium mb-2",children:"Changes"}),c.jsx("div",{className:"text-sm text-muted-foreground",children:"No changes detected in your workspace."})]}),or=()=>c.jsxs("div",{className:"p-2",children:[c.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search Extensions..."}),c.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No extensions installed. Search for extensions in the marketplace."})]}),ar=()=>{const{theme:r,toggleTheme:t,toggleCommandPalette:e}=ge();return c.jsxs("div",{className:"status-bar flex items-center px-2 text-xs",children:[c.jsx("div",{className:"flex items-center",children:c.jsxs("button",{className:"flex items-center px-2 py-1 hover:bg-sidebar-accent rounded",onClick:e,children:[c.jsx(Ln,{size:14,className:"mr-1"}),c.jsx("span",{children:"Command Palette"})]})}),c.jsx("div",{className:"flex-1"}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsxs("div",{className:"flex items-center",children:[c.jsx(_t,{size:14,className:"mr-1"}),c.jsx("span",{children:"main"})]}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Ln 1, Col 1"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"Spaces: 2"})}),c.jsx("div",{className:"flex items-center",children:c.jsx("span",{children:"UTF-8"})}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",onClick:t,children:r==="dark"?"☀️":"🌙"}),c.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",children:c.jsx(Un,{size:14})})]})]})},cr=({initData:r})=>{const{theme:t,toggleCommandPalette:e,toggleSidebar:i,togglePanel:d,togglePreviewPanel:m,sidebarVisible:p}=ge(),f=Me(u=>u.init);return N.useEffect(()=>{f()},[f]),N.useEffect(()=>{const u=document.querySelector(".ide-builder-app");u&&(u.classList.toggle("light",t==="light"),u.classList.toggle("dark",t==="dark"))},[t]),N.useEffect(()=>{const u=x=>{x.ctrlKey&&x.shiftKey&&x.key==="P"&&(x.preventDefault(),e()),x.ctrlKey&&x.key==="b"&&(x.preventDefault(),i()),x.ctrlKey&&x.key==="`"&&(x.preventDefault(),d()),x.ctrlKey&&x.shiftKey&&x.key==="V"&&(x.preventDefault(),m())};return window.addEventListener("keydown",u),()=>{window.removeEventListener("keydown",u)}},[e,i,d,m]),N.useEffect(()=>{var u;if(r&&r.content&&!r.error&&r.scheme==="vfs"){console.log("[Builder] Opening file from VFS:",{url:r.initFromUrl,contentLength:r.content.length});const x=(u=r.initFromUrl)==null?void 0:u.substring(6);x&&Le(async()=>{const{default:C}=await Promise.resolve().then(()=>Hn);return{default:C}},void 0).then(({default:C})=>{const{openTab:j}=C.getState();j(x)}).catch(C=>{console.error("[Builder] Failed to open file tab:",C)})}else r!=null&&r.error&&console.error("[Builder] Error loading content:",r.error)},[r]),c.jsxs("div",{className:"ide-container",children:[p&&c.jsx(rr,{}),c.jsx(tr,{}),c.jsx(ar,{}),c.jsx(qn,{})]})};let ct;const ur=({initData:r})=>c.jsx("div",{className:"ide-builder-app h-full w-full overflow-hidden",style:{height:"100%",width:"100%"},children:c.jsx(cr,{initData:r})}),Jr={id:xt.id,manifest:xt,init:async r=>{console.log("Builder IDE plugin initialized",r?"with init data":"without init data"),ct=r},render:()=>c.jsx(ur,{initData:ct}),onOpen:r=>{console.log("Builder IDE opened",r?"with init data":"without init data"),r&&(ct=r)},onClose:()=>{console.log("Builder IDE closed")}};var[rt,Kr]=vn("Tooltip",[Ct]),st=Ct(),$t="TooltipProvider",dr=700,ft="tooltip.open",[fr,mt]=rt($t),Rt=r=>{const{__scopeTooltip:t,delayDuration:e=dr,skipDelayDuration:i=300,disableHoverableContent:d=!1,children:m}=r,p=N.useRef(!0),f=N.useRef(!1),u=N.useRef(0);return N.useEffect(()=>{const x=u.current;return()=>window.clearTimeout(x)},[]),c.jsx(fr,{scope:t,isOpenDelayedRef:p,delayDuration:e,onOpen:N.useCallback(()=>{window.clearTimeout(u.current),p.current=!1},[]),onClose:N.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>p.current=!0,i)},[i]),isPointerInTransitRef:f,onPointerInTransitChange:N.useCallback(x=>{f.current=x},[]),disableHoverableContent:d,children:m})};Rt.displayName=$t;var Je="Tooltip",[hr,it]=rt(Je),Nt=r=>{const{__scopeTooltip:t,children:e,open:i,defaultOpen:d,onOpenChange:m,disableHoverableContent:p,delayDuration:f}=r,u=mt(Je,r.__scopeTooltip),x=st(t),[C,j]=N.useState(null),U=yn(),D=N.useRef(0),M=p??u.disableHoverableContent,re=f??u.delayDuration,oe=N.useRef(!1),[ve,pe]=bn({prop:i,defaultProp:d??!1,onChange:fe=>{fe?(u.onOpen(),document.dispatchEvent(new CustomEvent(ft))):u.onClose(),m==null||m(fe)},caller:Je}),ae=N.useMemo(()=>ve?oe.current?"delayed-open":"instant-open":"closed",[ve]),_e=N.useCallback(()=>{window.clearTimeout(D.current),D.current=0,oe.current=!1,pe(!0)},[pe]),Se=N.useCallback(()=>{window.clearTimeout(D.current),D.current=0,pe(!1)},[pe]),ee=N.useCallback(()=>{window.clearTimeout(D.current),D.current=window.setTimeout(()=>{oe.current=!0,pe(!0),D.current=0},re)},[re,pe]);return N.useEffect(()=>()=>{D.current&&(window.clearTimeout(D.current),D.current=0)},[]),c.jsx(Dn,{...x,children:c.jsx(hr,{scope:t,contentId:U,open:ve,stateAttribute:ae,trigger:C,onTriggerChange:j,onTriggerEnter:N.useCallback(()=>{u.isOpenDelayedRef.current?ee():_e()},[u.isOpenDelayedRef,ee,_e]),onTriggerLeave:N.useCallback(()=>{M?Se():(window.clearTimeout(D.current),D.current=0)},[Se,M]),onOpen:_e,onClose:Se,disableHoverableContent:M,children:e})})};Nt.displayName=Je;var ht="TooltipTrigger",Ot=N.forwardRef((r,t)=>{const{__scopeTooltip:e,...i}=r,d=it(ht,e),m=mt(ht,e),p=st(e),f=N.useRef(null),u=Tt(t,f,d.onTriggerChange),x=N.useRef(!1),C=N.useRef(!1),j=N.useCallback(()=>x.current=!1,[]);return N.useEffect(()=>()=>document.removeEventListener("pointerup",j),[j]),c.jsx(An,{asChild:!0,...p,children:c.jsx(wn.button,{"aria-describedby":d.open?d.contentId:void 0,"data-state":d.stateAttribute,...i,ref:u,onPointerMove:Be(r.onPointerMove,U=>{U.pointerType!=="touch"&&!C.current&&!m.isPointerInTransitRef.current&&(d.onTriggerEnter(),C.current=!0)}),onPointerLeave:Be(r.onPointerLeave,()=>{d.onTriggerLeave(),C.current=!1}),onPointerDown:Be(r.onPointerDown,()=>{d.open&&d.onClose(),x.current=!0,document.addEventListener("pointerup",j,{once:!0})}),onFocus:Be(r.onFocus,()=>{x.current||d.onOpen()}),onBlur:Be(r.onBlur,d.onClose),onClick:Be(r.onClick,d.onClose)})})});Ot.displayName=ht;var mr="TooltipPortal",[Yr,pr]=rt(mr,{forceMount:void 0}),We="TooltipContent",Dt=N.forwardRef((r,t)=>{const e=pr(We,r.__scopeTooltip),{forceMount:i=e.forceMount,side:d="top",...m}=r,p=it(We,r.__scopeTooltip);return c.jsx(xn,{present:i||p.open,children:p.disableHoverableContent?c.jsx(At,{side:d,...m,ref:t}):c.jsx(gr,{side:d,...m,ref:t})})}),gr=N.forwardRef((r,t)=>{const e=it(We,r.__scopeTooltip),i=mt(We,r.__scopeTooltip),d=N.useRef(null),m=Tt(t,d),[p,f]=N.useState(null),{trigger:u,onClose:x}=e,C=d.current,{onPointerInTransitChange:j}=i,U=N.useCallback(()=>{f(null),j(!1)},[j]),D=N.useCallback((M,re)=>{const oe=M.currentTarget,ve={x:M.clientX,y:M.clientY},pe=xr(ve,oe.getBoundingClientRect()),ae=jr(ve,pe),_e=Er(re.getBoundingClientRect()),Se=Tr([...ae,..._e]);f(Se),j(!0)},[j]);return N.useEffect(()=>()=>U(),[U]),N.useEffect(()=>{if(u&&C){const M=oe=>D(oe,C),re=oe=>D(oe,u);return u.addEventListener("pointerleave",M),C.addEventListener("pointerleave",re),()=>{u.removeEventListener("pointerleave",M),C.removeEventListener("pointerleave",re)}}},[u,C,D,U]),N.useEffect(()=>{if(p){const M=re=>{const oe=re.target,ve={x:re.clientX,y:re.clientY},pe=(u==null?void 0:u.contains(oe))||(C==null?void 0:C.contains(oe)),ae=!kr(ve,p);pe?U():ae&&(U(),x())};return document.addEventListener("pointermove",M),()=>document.removeEventListener("pointermove",M)}},[u,C,p,x,U]),c.jsx(At,{...r,ref:m})}),[vr,yr]=rt(Je,{isInside:!1}),br=En("TooltipContent"),At=N.forwardRef((r,t)=>{const{__scopeTooltip:e,children:i,"aria-label":d,onEscapeKeyDown:m,onPointerDownOutside:p,...f}=r,u=it(We,e),x=st(e),{onClose:C}=u;return N.useEffect(()=>(document.addEventListener(ft,C),()=>document.removeEventListener(ft,C)),[C]),N.useEffect(()=>{if(u.trigger){const j=U=>{const D=U.target;D!=null&&D.contains(u.trigger)&&C()};return window.addEventListener("scroll",j,{capture:!0}),()=>window.removeEventListener("scroll",j,{capture:!0})}},[u.trigger,C]),c.jsx(jn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:m,onPointerDownOutside:p,onFocusOutside:j=>j.preventDefault(),onDismiss:C,children:c.jsxs(In,{"data-state":u.stateAttribute,...x,...f,ref:t,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[c.jsx(br,{children:i}),c.jsx(vr,{scope:e,isInside:!0,children:c.jsx(kn,{id:u.contentId,role:"tooltip",children:d||i})})]})})});Dt.displayName=We;var It="TooltipArrow",wr=N.forwardRef((r,t)=>{const{__scopeTooltip:e,...i}=r,d=st(e);return yr(It,e).isInside?null:c.jsx(Fn,{...d,...i,ref:t})});wr.displayName=It;function xr(r,t){const e=Math.abs(t.top-r.y),i=Math.abs(t.bottom-r.y),d=Math.abs(t.right-r.x),m=Math.abs(t.left-r.x);switch(Math.min(e,i,d,m)){case m:return"left";case d:return"right";case e:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function jr(r,t,e=5){const i=[];switch(t){case"top":i.push({x:r.x-e,y:r.y+e},{x:r.x+e,y:r.y+e});break;case"bottom":i.push({x:r.x-e,y:r.y-e},{x:r.x+e,y:r.y-e});break;case"left":i.push({x:r.x+e,y:r.y-e},{x:r.x+e,y:r.y+e});break;case"right":i.push({x:r.x-e,y:r.y-e},{x:r.x-e,y:r.y+e});break}return i}function Er(r){const{top:t,right:e,bottom:i,left:d}=r;return[{x:d,y:t},{x:e,y:t},{x:e,y:i},{x:d,y:i}]}function kr(r,t){const{x:e,y:i}=r;let d=!1;for(let m=0,p=t.length-1;m<t.length;p=m++){const f=t[m],u=t[p],x=f.x,C=f.y,j=u.x,U=u.y;C>i!=U>i&&e<(j-x)*(i-C)/(U-C)+x&&(d=!d)}return d}function Tr(r){const t=r.slice();return t.sort((e,i)=>e.x<i.x?-1:e.x>i.x?1:e.y<i.y?-1:e.y>i.y?1:0),Cr(t)}function Cr(r){if(r.length<=1)return r.slice();const t=[];for(let i=0;i<r.length;i++){const d=r[i];for(;t.length>=2;){const m=t[t.length-1],p=t[t.length-2];if((m.x-p.x)*(d.y-p.y)>=(m.y-p.y)*(d.x-p.x))t.pop();else break}t.push(d)}t.pop();const e=[];for(let i=r.length-1;i>=0;i--){const d=r[i];for(;e.length>=2;){const m=e[e.length-1],p=e[e.length-2];if((m.x-p.x)*(d.y-p.y)>=(m.y-p.y)*(d.x-p.x))e.pop();else break}e.push(d)}return e.pop(),t.length===1&&e.length===1&&t[0].x===e[0].x&&t[0].y===e[0].y?t:t.concat(e)}var _r=Rt,Sr=Nt,Pr=Ot,Ft=Dt;const $r=_r,Rr=Sr,Nr=Pr,Bt=N.forwardRef(({className:r,sideOffset:t=4,...e},i)=>c.jsx(Ft,{ref:i,sideOffset:t,className:Tn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...e}));Bt.displayName=Ft.displayName;const Xr=()=>{const{activeView:r,setActiveView:t}=ge(),e=[{id:"explorer",icon:Wn,label:"Explorer"},{id:"search",icon:St,label:"Search"},{id:"git",icon:_t,label:"Source Control"},{id:"extensions",icon:zn,label:"Extensions"}];return c.jsxs("div",{className:"activity-bar flex flex-col items-center py-2",children:[c.jsx("div",{className:"flex flex-col items-center space-y-4",children:e.map(i=>c.jsx(jt,{icon:i.icon,label:i.label,isActive:r===i.id,onClick:()=>t(i.id)},i.id))}),c.jsx("div",{className:"flex-1"}),c.jsx(jt,{icon:Vn,label:"Settings",isActive:!1,onClick:()=>{}})]})},jt=({icon:r,label:t,isActive:e,onClick:i})=>c.jsx($r,{children:c.jsxs(Rr,{delayDuration:300,children:[c.jsx(Nr,{asChild:!0,children:c.jsxs("button",{className:`p-2 rounded transition-colors relative ${e?"text-primary bg-sidebar-accent":"text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"}`,onClick:i,"aria-label":t,children:[e&&c.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-0.5 bg-primary"}),c.jsx(r,{size:24})]})}),c.jsx(Bt,{side:"right",className:"bg-popover text-popover-foreground",children:t})]})});var Vt={exports:{}};(function(r){(t=>{var e=Object.defineProperty,i=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,p=(n,l)=>{for(var o in l)e(n,o,{get:l[o],enumerable:!0})},f=(n,l,o,T)=>{if(l&&typeof l=="object"||typeof l=="function")for(let S of d(l))!m.call(n,S)&&S!==o&&e(n,S,{get:()=>l[S],enumerable:!(T=i(l,S))||T.enumerable});return n},u=n=>f(e({},"__esModule",{value:!0}),n),x=(n,l,o)=>new Promise((T,S)=>{var $=k=>{try{F(o.next(k))}catch(L){S(L)}},E=k=>{try{F(o.throw(k))}catch(L){S(L)}},F=k=>k.done?T(k.value):Promise.resolve(k.value).then($,E);F((o=o.apply(n,l)).next())}),C={};p(C,{analyzeMetafile:()=>rn,analyzeMetafileSync:()=>an,build:()=>Zt,buildSync:()=>sn,context:()=>en,default:()=>dn,formatMessages:()=>nn,formatMessagesSync:()=>on,initialize:()=>cn,transform:()=>tn,transformSync:()=>ln,version:()=>Qt}),t.exports=u(C);function j(n){let l=T=>{if(T===null)o.write8(0);else if(typeof T=="boolean")o.write8(1),o.write8(+T);else if(typeof T=="number")o.write8(2),o.write32(T|0);else if(typeof T=="string")o.write8(3),o.write(M(T));else if(T instanceof Uint8Array)o.write8(4),o.write(T);else if(T instanceof Array){o.write8(5),o.write32(T.length);for(let S of T)l(S)}else{let S=Object.keys(T);o.write8(6),o.write32(S.length);for(let $ of S)o.write(M($)),l(T[$])}},o=new D;return o.write32(0),o.write32(n.id<<1|+!n.isRequest),l(n.value),pe(o.buf,o.len-4,0),o.buf.subarray(0,o.len)}function U(n){let l=()=>{switch(o.read8()){case 0:return null;case 1:return!!o.read8();case 2:return o.read32();case 3:return re(o.read());case 4:return o.read();case 5:{let E=o.read32(),F=[];for(let k=0;k<E;k++)F.push(l());return F}case 6:{let E=o.read32(),F={};for(let k=0;k<E;k++)F[re(o.read())]=l();return F}default:throw new Error("Invalid packet")}},o=new D(n),T=o.read32(),S=(T&1)===0;T>>>=1;let $=l();if(o.ptr!==n.length)throw new Error("Invalid packet");return{id:T,isRequest:S,value:$}}var D=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let l=new Uint8Array((this.len+n)*2);l.set(this.buf),this.buf=l}return this.len+=n,this.len-n}write8(n){let l=this._write(1);this.buf[l]=n}write32(n){let l=this._write(4);pe(this.buf,n,l)}write(n){let l=this._write(4+n.length);pe(this.buf,n.length,l),this.buf.set(n,l+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ve(this.buf,this._read(4))}read(){let n=this.read32(),l=new Uint8Array(n),o=this._read(l.length);return l.set(this.buf.subarray(o,o+n)),l}},M,re,oe;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,l=new TextDecoder;M=o=>n.encode(o),re=o=>l.decode(o),oe='new TextEncoder().encode("")'}else if(typeof Buffer<"u")M=n=>Buffer.from(n),re=n=>{let{buffer:l,byteOffset:o,byteLength:T}=n;return Buffer.from(l,o,T).toString()},oe='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(M("")instanceof Uint8Array))throw new Error(`Invariant violation: "${oe} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ve(n,l){return n[l++]|n[l++]<<8|n[l++]<<16|n[l++]<<24}function pe(n,l,o){n[o++]=l,n[o++]=l>>8,n[o++]=l>>16,n[o++]=l>>24}var ae=JSON.stringify,_e="warning",Se="silent";function ee(n){if(we(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var fe=()=>null,ne=n=>typeof n=="boolean"?null:"a boolean",A=n=>typeof n=="string"?null:"a string",Re=n=>n instanceof RegExp?null:"a RegExp object",de=n=>typeof n=="number"&&n===(n|0)?null:"an integer",Oe=n=>typeof n=="function"?null:"a function",me=n=>Array.isArray(n)?null:"an array",xe=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",ze=n=>typeof n=="object"&&n!==null?null:"an array or an object",Ye=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ee=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",Ge=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",Xe=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",lt=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",pt=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",zt=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function h(n,l,o,T){let S=n[o];if(l[o+""]=!0,S===void 0)return;let $=T(S);if($!==null)throw new Error(`${ae(o)} must be ${$}`);return S}function ye(n,l,o){for(let T in n)if(!(T in l))throw new Error(`Invalid option ${o}: ${ae(T)}`)}function Gt(n){let l=Object.create(null),o=h(n,l,"wasmURL",zt),T=h(n,l,"wasmModule",Ye),S=h(n,l,"worker",ne);return ye(n,l,"in initialize() call"),{wasmURL:o,wasmModule:T,worker:S}}function gt(n){let l;if(n!==void 0){l=Object.create(null);for(let o in n){let T=n[o];if(typeof T=="string"||T===!1)l[o]=T;else throw new Error(`Expected ${ae(o)} in mangle cache to map to either a string or false`)}}return l}function Qe(n,l,o,T,S){let $=h(l,o,"color",ne),E=h(l,o,"logLevel",A),F=h(l,o,"logLimit",de);$!==void 0?n.push(`--color=${$}`):T&&n.push("--color=true"),n.push(`--log-level=${E||S}`),n.push(`--log-limit=${F||0}`)}function we(n,l,o){if(typeof n!="string")throw new Error(`Expected value for ${l}${o!==void 0?" "+ae(o):""} to be a string, got ${typeof n} instead`);return n}function vt(n,l,o){let T=h(l,o,"legalComments",A),S=h(l,o,"sourceRoot",A),$=h(l,o,"sourcesContent",ne),E=h(l,o,"target",lt),F=h(l,o,"format",A),k=h(l,o,"globalName",A),L=h(l,o,"mangleProps",Re),W=h(l,o,"reserveProps",Re),Q=h(l,o,"mangleQuoted",ne),se=h(l,o,"minify",ne),G=h(l,o,"minifySyntax",ne),le=h(l,o,"minifyWhitespace",ne),B=h(l,o,"minifyIdentifiers",ne),H=h(l,o,"lineLimit",de),te=h(l,o,"drop",me),J=h(l,o,"charset",A),b=h(l,o,"treeShaking",ne),g=h(l,o,"ignoreAnnotations",ne),v=h(l,o,"jsx",A),y=h(l,o,"jsxFactory",A),P=h(l,o,"jsxFragment",A),R=h(l,o,"jsxImportSource",A),z=h(l,o,"jsxDev",ne),s=h(l,o,"jsxSideEffects",ne),a=h(l,o,"define",xe),w=h(l,o,"logOverride",xe),_=h(l,o,"supported",xe),I=h(l,o,"pure",me),Z=h(l,o,"keepNames",ne),K=h(l,o,"platform",A),q=h(l,o,"tsconfigRaw",Xe);if(T&&n.push(`--legal-comments=${T}`),S!==void 0&&n.push(`--source-root=${S}`),$!==void 0&&n.push(`--sources-content=${$}`),E&&(Array.isArray(E)?n.push(`--target=${Array.from(E).map(ee).join(",")}`):n.push(`--target=${ee(E)}`)),F&&n.push(`--format=${F}`),k&&n.push(`--global-name=${k}`),K&&n.push(`--platform=${K}`),q&&n.push(`--tsconfig-raw=${typeof q=="string"?q:JSON.stringify(q)}`),se&&n.push("--minify"),G&&n.push("--minify-syntax"),le&&n.push("--minify-whitespace"),B&&n.push("--minify-identifiers"),H&&n.push(`--line-limit=${H}`),J&&n.push(`--charset=${J}`),b!==void 0&&n.push(`--tree-shaking=${b}`),g&&n.push("--ignore-annotations"),te)for(let V of te)n.push(`--drop:${we(V,"drop")}`);if(L&&n.push(`--mangle-props=${L.source}`),W&&n.push(`--reserve-props=${W.source}`),Q!==void 0&&n.push(`--mangle-quoted=${Q}`),v&&n.push(`--jsx=${v}`),y&&n.push(`--jsx-factory=${y}`),P&&n.push(`--jsx-fragment=${P}`),R&&n.push(`--jsx-import-source=${R}`),z&&n.push("--jsx-dev"),s&&n.push("--jsx-side-effects"),a)for(let V in a){if(V.indexOf("=")>=0)throw new Error(`Invalid define: ${V}`);n.push(`--define:${V}=${we(a[V],"define",V)}`)}if(w)for(let V in w){if(V.indexOf("=")>=0)throw new Error(`Invalid log override: ${V}`);n.push(`--log-override:${V}=${we(w[V],"log override",V)}`)}if(_)for(let V in _){if(V.indexOf("=")>=0)throw new Error(`Invalid supported: ${V}`);const ue=_[V];if(typeof ue!="boolean")throw new Error(`Expected value for supported ${ae(V)} to be a boolean, got ${typeof ue} instead`);n.push(`--supported:${V}=${ue}`)}if(I)for(let V of I)n.push(`--pure:${we(V,"pure")}`);Z&&n.push("--keep-names")}function Ht(n,l,o,T,S){var $;let E=[],F=[],k=Object.create(null),L=null,W=null;Qe(E,l,k,o,T),vt(E,l,k);let Q=h(l,k,"sourcemap",Ge),se=h(l,k,"bundle",ne),G=h(l,k,"splitting",ne),le=h(l,k,"preserveSymlinks",ne),B=h(l,k,"metafile",ne),H=h(l,k,"outfile",A),te=h(l,k,"outdir",A),J=h(l,k,"outbase",A),b=h(l,k,"tsconfig",A),g=h(l,k,"resolveExtensions",me),v=h(l,k,"nodePaths",me),y=h(l,k,"mainFields",me),P=h(l,k,"conditions",me),R=h(l,k,"external",me),z=h(l,k,"packages",A),s=h(l,k,"alias",xe),a=h(l,k,"loader",xe),w=h(l,k,"outExtension",xe),_=h(l,k,"publicPath",A),I=h(l,k,"entryNames",A),Z=h(l,k,"chunkNames",A),K=h(l,k,"assetNames",A),q=h(l,k,"inject",me),V=h(l,k,"banner",xe),ue=h(l,k,"footer",xe),Y=h(l,k,"entryPoints",ze),ie=h(l,k,"absWorkingDir",A),X=h(l,k,"stdin",xe),ce=($=h(l,k,"write",ne))!=null?$:S,be=h(l,k,"allowOverwrite",ne),Ce=h(l,k,"mangleCache",xe);if(k.plugins=!0,ye(l,k,`in ${n}() call`),Q&&E.push(`--sourcemap${Q===!0?"":`=${Q}`}`),se&&E.push("--bundle"),be&&E.push("--allow-overwrite"),G&&E.push("--splitting"),le&&E.push("--preserve-symlinks"),B&&E.push("--metafile"),H&&E.push(`--outfile=${H}`),te&&E.push(`--outdir=${te}`),J&&E.push(`--outbase=${J}`),b&&E.push(`--tsconfig=${b}`),z&&E.push(`--packages=${z}`),g){let O=[];for(let he of g){if(we(he,"resolve extension"),he.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${he}`);O.push(he)}E.push(`--resolve-extensions=${O.join(",")}`)}if(_&&E.push(`--public-path=${_}`),I&&E.push(`--entry-names=${I}`),Z&&E.push(`--chunk-names=${Z}`),K&&E.push(`--asset-names=${K}`),y){let O=[];for(let he of y){if(we(he,"main field"),he.indexOf(",")>=0)throw new Error(`Invalid main field: ${he}`);O.push(he)}E.push(`--main-fields=${O.join(",")}`)}if(P){let O=[];for(let he of P){if(we(he,"condition"),he.indexOf(",")>=0)throw new Error(`Invalid condition: ${he}`);O.push(he)}E.push(`--conditions=${O.join(",")}`)}if(R)for(let O of R)E.push(`--external:${we(O,"external")}`);if(s)for(let O in s){if(O.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${O}`);E.push(`--alias:${O}=${we(s[O],"alias",O)}`)}if(V)for(let O in V){if(O.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${O}`);E.push(`--banner:${O}=${we(V[O],"banner",O)}`)}if(ue)for(let O in ue){if(O.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${O}`);E.push(`--footer:${O}=${we(ue[O],"footer",O)}`)}if(q)for(let O of q)E.push(`--inject:${we(O,"inject")}`);if(a)for(let O in a){if(O.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${O}`);E.push(`--loader:${O}=${we(a[O],"loader",O)}`)}if(w)for(let O in w){if(O.indexOf("=")>=0)throw new Error(`Invalid out extension: ${O}`);E.push(`--out-extension:${O}=${we(w[O],"out extension",O)}`)}if(Y)if(Array.isArray(Y))for(let O=0,he=Y.length;O<he;O++){let ke=Y[O];if(typeof ke=="object"&&ke!==null){let Te=Object.create(null),Ne=h(ke,Te,"in",A),tt=h(ke,Te,"out",A);if(ye(ke,Te,"in entry point at index "+O),Ne===void 0)throw new Error('Missing property "in" for entry point at index '+O);if(tt===void 0)throw new Error('Missing property "out" for entry point at index '+O);F.push([tt,Ne])}else F.push(["",we(ke,"entry point at index "+O)])}else for(let O in Y)F.push([O,we(Y[O],"entry point",O)]);if(X){let O=Object.create(null),he=h(X,O,"contents",pt),ke=h(X,O,"resolveDir",A),Te=h(X,O,"sourcefile",A),Ne=h(X,O,"loader",A);ye(X,O,'in "stdin" object'),Te&&E.push(`--sourcefile=${Te}`),Ne&&E.push(`--loader=${Ne}`),ke&&(W=ke),typeof he=="string"?L=M(he):he instanceof Uint8Array&&(L=he)}let Fe=[];if(v)for(let O of v)O+="",Fe.push(O);return{entries:F,flags:E,write:ce,stdinContents:L,stdinResolveDir:W,absWorkingDir:ie,nodePaths:Fe,mangleCache:gt(Ce)}}function qt(n,l,o,T){let S=[],$=Object.create(null);Qe(S,l,$,o,T),vt(S,l,$);let E=h(l,$,"sourcemap",Ge),F=h(l,$,"sourcefile",A),k=h(l,$,"loader",A),L=h(l,$,"banner",A),W=h(l,$,"footer",A),Q=h(l,$,"mangleCache",xe);return ye(l,$,`in ${n}() call`),E&&S.push(`--sourcemap=${E===!0?"external":E}`),F&&S.push(`--sourcefile=${F}`),k&&S.push(`--loader=${k}`),L&&S.push(`--banner=${L}`),W&&S.push(`--footer=${W}`),{flags:S,mangleCache:gt(Q)}}function Jt(n){const l={},o={didClose:!1,reason:""};let T={},S=0,$=0,E=new Uint8Array(16*1024),F=0,k=b=>{let g=F+b.length;if(g>E.length){let y=new Uint8Array(g*2);y.set(E),E=y}E.set(b,F),F+=b.length;let v=0;for(;v+4<=F;){let y=ve(E,v);if(v+4+y>F)break;v+=4,le(E.subarray(v,v+y)),v+=y}v>0&&(E.copyWithin(0,v,F),F-=v)},L=b=>{o.didClose=!0,b&&(o.reason=": "+(b.message||b));const g="The service was stopped"+o.reason;for(let v in T)T[v](g,null);T={}},W=(b,g,v)=>{if(o.didClose)return v("The service is no longer running"+o.reason,null);let y=S++;T[y]=(P,R)=>{try{v(P,R)}finally{b&&b.unref()}},b&&b.ref(),n.writeToStdin(j({id:y,isRequest:!0,value:g}))},Q=(b,g)=>{if(o.didClose)throw new Error("The service is no longer running"+o.reason);n.writeToStdin(j({id:b,isRequest:!1,value:g}))},se=(b,g)=>x(this,null,function*(){try{if(g.command==="ping"){Q(b,{});return}if(typeof g.key=="number"){const v=l[g.key];if(v){const y=v[g.command];if(y){yield y(b,g);return}}}throw new Error("Invalid command: "+g.command)}catch(v){Q(b,{errors:[De(v,n,null,void 0,"")]})}}),G=!0,le=b=>{if(G){G=!1;let v=String.fromCharCode(...b);if(v!=="0.18.7")throw new Error(`Cannot start service: Host version "0.18.7" does not match binary version ${ae(v)}`);return}let g=U(b);if(g.isRequest)se(g.id,g.value);else{let v=T[g.id];delete T[g.id],g.value.error?v(g.value.error,{}):v(null,g.value)}};return{readFromStdout:k,afterClose:L,service:{buildOrContext:({callName:b,refs:g,options:v,isTTY:y,defaultWD:P,callback:R})=>{let z=0;const s=$++,a={},w={ref(){++z===1&&g&&g.ref()},unref(){--z===0&&(delete l[s],g&&g.unref())}};l[s]=a,w.ref(),Kt(b,s,W,Q,w,n,a,v,y,P,(_,I)=>{try{R(_,I)}finally{w.unref()}})},transform:({callName:b,refs:g,input:v,options:y,isTTY:P,fs:R,callback:z})=>{const s=yt();let a=w=>{try{if(typeof v!="string"&&!(v instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:_,mangleCache:I}=qt(b,y,P,Se),Z={command:"transform",flags:_,inputFS:w!==null,input:w!==null?M(w):typeof v=="string"?M(v):v};I&&(Z.mangleCache=I),W(g,Z,(K,q)=>{if(K)return z(new Error(K),null);let V=Ae(q.errors,s),ue=Ae(q.warnings,s),Y=1,ie=()=>{if(--Y===0){let X={warnings:ue,code:q.code,map:q.map,mangleCache:void 0,legalComments:void 0};"legalComments"in q&&(X.legalComments=q==null?void 0:q.legalComments),q.mangleCache&&(X.mangleCache=q==null?void 0:q.mangleCache),z(null,X)}};if(V.length>0)return z(He("Transform failed",V,ue),null);q.codeFS&&(Y++,R.readFile(q.code,(X,ce)=>{X!==null?z(X,null):(q.code=ce,ie())})),q.mapFS&&(Y++,R.readFile(q.map,(X,ce)=>{X!==null?z(X,null):(q.map=ce,ie())})),ie()})}catch(_){let I=[];try{Qe(I,y,{},P,Se)}catch{}const Z=De(_,n,s,void 0,"");W(g,{command:"error",flags:I,error:Z},()=>{Z.detail=s.load(Z.detail),z(He("Transform failed",[Z],[]),null)})}};if((typeof v=="string"||v instanceof Uint8Array)&&v.length>1024*1024){let w=a;a=()=>R.writeFile(v,w)}a(null)},formatMessages:({callName:b,refs:g,messages:v,options:y,callback:P})=>{let R=$e(v,"messages",null,"");if(!y)throw new Error(`Missing second argument in ${b}() call`);let z={},s=h(y,z,"kind",A),a=h(y,z,"color",ne),w=h(y,z,"terminalWidth",de);if(ye(y,z,`in ${b}() call`),s===void 0)throw new Error(`Missing "kind" in ${b}() call`);if(s!=="error"&&s!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${b}() call`);let _={command:"format-msgs",messages:R,isWarning:s==="warning"};a!==void 0&&(_.color=a),w!==void 0&&(_.terminalWidth=w),W(g,_,(I,Z)=>{if(I)return P(new Error(I),null);P(null,Z.messages)})},analyzeMetafile:({callName:b,refs:g,metafile:v,options:y,callback:P})=>{y===void 0&&(y={});let R={},z=h(y,R,"color",ne),s=h(y,R,"verbose",ne);ye(y,R,`in ${b}() call`);let a={command:"analyze-metafile",metafile:v};z!==void 0&&(a.color=z),s!==void 0&&(a.verbose=s),W(g,a,(w,_)=>{if(w)return P(new Error(w),null);P(null,_.result)})}}}}function Kt(n,l,o,T,S,$,E,F,k,L,W){const Q=yt(),se=n==="context",G=(H,te)=>{const J=[];try{Qe(J,F,{},k,_e)}catch{}const b=De(H,$,Q,void 0,te);o(S,{command:"error",flags:J,error:b},()=>{b.detail=Q.load(b.detail),W(He(se?"Context failed":"Build failed",[b],[]),null)})};let le;if(typeof F=="object"){const H=F.plugins;if(H!==void 0){if(!Array.isArray(H))return G(new Error('"plugins" must be an array'),"");le=H}}if(le&&le.length>0){if($.isSync)return G(new Error("Cannot use plugins in synchronous API calls"),"");Yt(l,o,T,S,$,E,F,le,Q).then(H=>{if(!H.ok)return G(H.error,H.pluginName);try{B(H.requestPlugins,H.runOnEndCallbacks,H.scheduleOnDisposeCallbacks)}catch(te){G(te,"")}},H=>G(H,""));return}try{B(null,(H,te)=>te([],[]),()=>{})}catch(H){G(H,"")}function B(H,te,J){const b=$.hasFS,{entries:g,flags:v,write:y,stdinContents:P,stdinResolveDir:R,absWorkingDir:z,nodePaths:s,mangleCache:a}=Ht(n,F,k,_e,b);if(y&&!$.hasFS)throw new Error('The "write" option is unavailable in this environment');const w={command:"build",key:l,entries:g,flags:v,write:y,stdinContents:P,stdinResolveDir:R,absWorkingDir:z||L,nodePaths:s,context:se};H&&(w.plugins=H),a&&(w.mangleCache=a);const _=(K,q)=>{const V={errors:Ae(K.errors,Q),warnings:Ae(K.warnings,Q),outputFiles:void 0,metafile:void 0,mangleCache:void 0},ue=V.errors.slice(),Y=V.warnings.slice();K.outputFiles&&(V.outputFiles=K.outputFiles.map(Xt)),K.metafile&&(V.metafile=JSON.parse(K.metafile)),K.mangleCache&&(V.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(re(K.writeToStdout).replace(/\n$/,"")),te(V,(ie,X)=>{if(ue.length>0||ie.length>0){const ce=He("Build failed",ue.concat(ie),Y.concat(X));return q(ce,null,ie,X)}q(null,V,ie,X)})};let I,Z;se&&(E["on-end"]=(K,q)=>new Promise(V=>{_(q,(ue,Y,ie,X)=>{const ce={errors:ie,warnings:X};Z&&Z(ue,Y),I=void 0,Z=void 0,T(K,ce),V()})})),o(S,w,(K,q)=>{if(K)return W(new Error(K),null);if(!se)return _(q,(Y,ie)=>(J(),W(Y,ie)));if(q.errors.length>0)return W(He("Context failed",q.errors,q.warnings),null);let V=!1;const ue={rebuild:()=>(I||(I=new Promise((Y,ie)=>{let X;Z=(be,Ce)=>{X||(X=()=>be?ie(be):Y(Ce))};const ce=()=>{o(S,{command:"rebuild",key:l},(Ce,Fe)=>{Ce?ie(new Error(Ce)):X?X():ce()})};ce()})),I),watch:(Y={})=>new Promise((ie,X)=>{if(!$.hasFS)throw new Error('Cannot use the "watch" API in this environment');ye(Y,{},"in watch() call"),o(S,{command:"watch",key:l},Ce=>{Ce?X(new Error(Ce)):ie(void 0)})}),serve:(Y={})=>new Promise((ie,X)=>{if(!$.hasFS)throw new Error('Cannot use the "serve" API in this environment');const ce={},be=h(Y,ce,"port",de),Ce=h(Y,ce,"host",A),Fe=h(Y,ce,"servedir",A),O=h(Y,ce,"keyfile",A),he=h(Y,ce,"certfile",A),ke=h(Y,ce,"onRequest",Oe);ye(Y,ce,"in serve() call");const Te={command:"serve",key:l,onRequest:!!ke};be!==void 0&&(Te.port=be),Ce!==void 0&&(Te.host=Ce),Fe!==void 0&&(Te.servedir=Fe),O!==void 0&&(Te.keyfile=O),he!==void 0&&(Te.certfile=he),o(S,Te,(Ne,tt)=>{if(Ne)return X(new Error(Ne));ke&&(E["serve-request"]=(fn,hn)=>{ke(hn.args),T(fn,{})}),ie(tt)})}),cancel:()=>new Promise(Y=>{if(V)return Y();o(S,{command:"cancel",key:l},()=>{Y()})}),dispose:()=>new Promise(Y=>{if(V)return Y();V=!0,o(S,{command:"dispose",key:l},()=>{Y(),J(),S.unref()})})};S.ref(),W(null,ue)})}}var Yt=(n,l,o,T,S,$,E,F,k)=>x(void 0,null,function*(){let L=[],W=[],Q={},se={},G=[],le=0,B=0,H=[],te=!1;F=[...F];for(let g of F){let v={};if(typeof g!="object")throw new Error(`Plugin at index ${B} must be an object`);const y=h(g,v,"name",A);if(typeof y!="string"||y==="")throw new Error(`Plugin at index ${B} is missing a name`);try{let P=h(g,v,"setup",Oe);if(typeof P!="function")throw new Error("Plugin is missing a setup function");ye(g,v,`on plugin ${ae(y)}`);let R={name:y,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};B++;let s=P({initialOptions:E,resolve:(a,w={})=>{if(!te)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof a!="string")throw new Error("The path to resolve must be a string");let _=Object.create(null),I=h(w,_,"pluginName",A),Z=h(w,_,"importer",A),K=h(w,_,"namespace",A),q=h(w,_,"resolveDir",A),V=h(w,_,"kind",A),ue=h(w,_,"pluginData",fe);return ye(w,_,"in resolve() call"),new Promise((Y,ie)=>{const X={command:"resolve",path:a,key:n,pluginName:y};if(I!=null&&(X.pluginName=I),Z!=null&&(X.importer=Z),K!=null&&(X.namespace=K),q!=null&&(X.resolveDir=q),V!=null)X.kind=V;else throw new Error('Must specify "kind" when calling "resolve"');ue!=null&&(X.pluginData=k.store(ue)),l(T,X,(ce,be)=>{ce!==null?ie(new Error(ce)):Y({errors:Ae(be.errors,k),warnings:Ae(be.warnings,k),path:be.path,external:be.external,sideEffects:be.sideEffects,namespace:be.namespace,suffix:be.suffix,pluginData:k.load(be.pluginData)})})})},onStart(a){let w='This error came from the "onStart" callback registered here:',_=Ze(new Error(w),S,"onStart");L.push({name:y,callback:a,note:_}),R.onStart=!0},onEnd(a){let w='This error came from the "onEnd" callback registered here:',_=Ze(new Error(w),S,"onEnd");W.push({name:y,callback:a,note:_}),R.onEnd=!0},onResolve(a,w){let _='This error came from the "onResolve" callback registered here:',I=Ze(new Error(_),S,"onResolve"),Z={},K=h(a,Z,"filter",Re),q=h(a,Z,"namespace",A);if(ye(a,Z,`in onResolve() call for plugin ${ae(y)}`),K==null)throw new Error("onResolve() call is missing a filter");let V=le++;Q[V]={name:y,callback:w,note:I},R.onResolve.push({id:V,filter:K.source,namespace:q||""})},onLoad(a,w){let _='This error came from the "onLoad" callback registered here:',I=Ze(new Error(_),S,"onLoad"),Z={},K=h(a,Z,"filter",Re),q=h(a,Z,"namespace",A);if(ye(a,Z,`in onLoad() call for plugin ${ae(y)}`),K==null)throw new Error("onLoad() call is missing a filter");let V=le++;se[V]={name:y,callback:w,note:I},R.onLoad.push({id:V,filter:K.source,namespace:q||""})},onDispose(a){G.push(a)},esbuild:S.esbuild});s&&(yield s),H.push(R)}catch(P){return{ok:!1,error:P,pluginName:y}}}$["on-start"]=(g,v)=>x(void 0,null,function*(){let y={errors:[],warnings:[]};yield Promise.all(L.map(P=>x(void 0,[P],function*({name:R,callback:z,note:s}){try{let a=yield z();if(a!=null){if(typeof a!="object")throw new Error(`Expected onStart() callback in plugin ${ae(R)} to return an object`);let w={},_=h(a,w,"errors",me),I=h(a,w,"warnings",me);ye(a,w,`from onStart() callback in plugin ${ae(R)}`),_!=null&&y.errors.push(...$e(_,"errors",k,R)),I!=null&&y.warnings.push(...$e(I,"warnings",k,R))}}catch(a){y.errors.push(De(a,S,k,s&&s(),R))}}))),o(g,y)}),$["on-resolve"]=(g,v)=>x(void 0,null,function*(){let y={},P="",R,z;for(let s of v.ids)try{({name:P,callback:R,note:z}=Q[s]);let a=yield R({path:v.path,importer:v.importer,namespace:v.namespace,resolveDir:v.resolveDir,kind:v.kind,pluginData:k.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onResolve() callback in plugin ${ae(P)} to return an object`);let w={},_=h(a,w,"pluginName",A),I=h(a,w,"path",A),Z=h(a,w,"namespace",A),K=h(a,w,"suffix",A),q=h(a,w,"external",ne),V=h(a,w,"sideEffects",ne),ue=h(a,w,"pluginData",fe),Y=h(a,w,"errors",me),ie=h(a,w,"warnings",me),X=h(a,w,"watchFiles",me),ce=h(a,w,"watchDirs",me);ye(a,w,`from onResolve() callback in plugin ${ae(P)}`),y.id=s,_!=null&&(y.pluginName=_),I!=null&&(y.path=I),Z!=null&&(y.namespace=Z),K!=null&&(y.suffix=K),q!=null&&(y.external=q),V!=null&&(y.sideEffects=V),ue!=null&&(y.pluginData=k.store(ue)),Y!=null&&(y.errors=$e(Y,"errors",k,P)),ie!=null&&(y.warnings=$e(ie,"warnings",k,P)),X!=null&&(y.watchFiles=et(X,"watchFiles")),ce!=null&&(y.watchDirs=et(ce,"watchDirs"));break}}catch(a){y={id:s,errors:[De(a,S,k,z&&z(),P)]};break}o(g,y)}),$["on-load"]=(g,v)=>x(void 0,null,function*(){let y={},P="",R,z;for(let s of v.ids)try{({name:P,callback:R,note:z}=se[s]);let a=yield R({path:v.path,namespace:v.namespace,suffix:v.suffix,pluginData:k.load(v.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onLoad() callback in plugin ${ae(P)} to return an object`);let w={},_=h(a,w,"pluginName",A),I=h(a,w,"contents",pt),Z=h(a,w,"resolveDir",A),K=h(a,w,"pluginData",fe),q=h(a,w,"loader",A),V=h(a,w,"errors",me),ue=h(a,w,"warnings",me),Y=h(a,w,"watchFiles",me),ie=h(a,w,"watchDirs",me);ye(a,w,`from onLoad() callback in plugin ${ae(P)}`),y.id=s,_!=null&&(y.pluginName=_),I instanceof Uint8Array?y.contents=I:I!=null&&(y.contents=M(I)),Z!=null&&(y.resolveDir=Z),K!=null&&(y.pluginData=k.store(K)),q!=null&&(y.loader=q),V!=null&&(y.errors=$e(V,"errors",k,P)),ue!=null&&(y.warnings=$e(ue,"warnings",k,P)),Y!=null&&(y.watchFiles=et(Y,"watchFiles")),ie!=null&&(y.watchDirs=et(ie,"watchDirs"));break}}catch(a){y={id:s,errors:[De(a,S,k,z&&z(),P)]};break}o(g,y)});let J=(g,v)=>v([],[]);W.length>0&&(J=(g,v)=>{x(void 0,null,function*(){const y=[],P=[];for(const{name:R,callback:z,note:s}of W){let a,w;try{const _=yield z(g);if(_!=null){if(typeof _!="object")throw new Error(`Expected onEnd() callback in plugin ${ae(R)} to return an object`);let I={},Z=h(_,I,"errors",me),K=h(_,I,"warnings",me);ye(_,I,`from onEnd() callback in plugin ${ae(R)}`),Z!=null&&(a=$e(Z,"errors",k,R)),K!=null&&(w=$e(K,"warnings",k,R))}}catch(_){a=[De(_,S,k,s&&s(),R)]}if(a){y.push(...a);try{g.errors.push(...a)}catch{}}if(w){P.push(...w);try{g.warnings.push(...w)}catch{}}}v(y,P)})});let b=()=>{for(const g of G)setTimeout(()=>g(),0)};return te=!0,{ok:!0,requestPlugins:H,runOnEndCallbacks:J,scheduleOnDisposeCallbacks:b}});function yt(){const n=new Map;let l=0;return{load(o){return n.get(o)},store(o){if(o===void 0)return-1;const T=l++;return n.set(T,o),T}}}function Ze(n,l,o){let T,S=!1;return()=>{if(S)return T;S=!0;try{let $=(n.stack+"").split(`
`);$.splice(1,1);let E=bt(l,$,o);if(E)return T={text:n.message,location:E},T}catch{}}}function De(n,l,o,T,S){let $="Internal error",E=null;try{$=(n&&n.message||n)+""}catch{}try{E=bt(l,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:S,text:$,location:E,notes:T?[T]:[],detail:o?o.store(n):-1}}function bt(n,l,o){let T="    at ";if(n.readFileSync&&!l[0].startsWith(T)&&l[1].startsWith(T))for(let S=1;S<l.length;S++){let $=l[S];if($.startsWith(T))for($=$.slice(T.length);;){let E=/^(?:new |async )?\S+ \((.*)\)$/.exec($);if(E){$=E[1];continue}if(E=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec($),E){$=E[1];continue}if(E=/^(\S+):(\d+):(\d+)$/.exec($),E){let F;try{F=n.readFileSync(E[1],"utf8")}catch{break}let k=F.split(/\r\n|\r|\n|\u2028|\u2029/)[+E[2]-1]||"",L=+E[3]-1,W=k.slice(L,L+o.length)===o?o.length:0;return{file:E[1],namespace:"file",line:+E[2],column:M(k.slice(0,L)).length,length:M(k.slice(L,L+W)).length,lineText:k+`
`+l.slice(1).join(`
`),suggestion:""}}break}}return null}function He(n,l,o){let T=5,S=l.length<1?"":` with ${l.length} error${l.length<2?"":"s"}:`+l.slice(0,T+1).map((E,F)=>{if(F===T)return`
...`;if(!E.location)return`
error: ${E.text}`;let{file:k,line:L,column:W}=E.location,Q=E.pluginName?`[plugin: ${E.pluginName}] `:"";return`
${k}:${L}:${W}: ERROR: ${Q}${E.text}`}).join(""),$=new Error(`${n}${S}`);return $.errors=l,$.warnings=o,$}function Ae(n,l){for(const o of n)o.detail=l.load(o.detail);return n}function wt(n,l){if(n==null)return null;let o={},T=h(n,o,"file",A),S=h(n,o,"namespace",A),$=h(n,o,"line",de),E=h(n,o,"column",de),F=h(n,o,"length",de),k=h(n,o,"lineText",A),L=h(n,o,"suggestion",A);return ye(n,o,l),{file:T||"",namespace:S||"",line:$||0,column:E||0,length:F||0,lineText:k||"",suggestion:L||""}}function $e(n,l,o,T){let S=[],$=0;for(const E of n){let F={},k=h(E,F,"id",A),L=h(E,F,"pluginName",A),W=h(E,F,"text",A),Q=h(E,F,"location",Ee),se=h(E,F,"notes",me),G=h(E,F,"detail",fe),le=`in element ${$} of "${l}"`;ye(E,F,le);let B=[];if(se)for(const H of se){let te={},J=h(H,te,"text",A),b=h(H,te,"location",Ee);ye(H,te,le),B.push({text:J||"",location:wt(b,le)})}S.push({id:k||"",pluginName:L||T,text:W||"",location:wt(Q,le),notes:B,detail:o?o.store(G):-1}),$++}return S}function et(n,l){const o=[];for(const T of n){if(typeof T!="string")throw new Error(`${ae(l)} must be an array of strings`);o.push(T)}return o}function Xt({path:n,contents:l}){let o=null;return{path:n,contents:l,get text(){const T=this.contents;return(o===null||T!==l)&&(l=T,o=re(T)),o}}}var Qt="0.18.7",Zt=n=>qe().build(n),en=n=>qe().context(n),tn=(n,l)=>qe().transform(n,l),nn=(n,l)=>qe().formatMessages(n,l),rn=(n,l)=>qe().analyzeMetafile(n,l),sn=()=>{throw new Error('The "buildSync" API only works in node')},ln=()=>{throw new Error('The "transformSync" API only works in node')},on=()=>{throw new Error('The "formatMessagesSync" API only works in node')},an=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Ie,ot,qe=()=>{if(ot)return ot;throw Ie?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},cn=n=>{n=Gt(n||{});let l=n.wasmURL,o=n.wasmModule,T=n.worker!==!1;if(!l&&!o)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Ie)throw new Error('Cannot call "initialize" more than once');return Ie=un(l||"",o,T),Ie.catch(()=>{Ie=void 0}),Ie},un=(n,l,o)=>x(void 0,null,function*(){let T;if(o){let L=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});T=new Worker(URL.createObjectURL(L))}else{let L=(W=>{var Q=(B,H,te)=>new Promise((J,b)=>{var g=P=>{try{y(te.next(P))}catch(R){b(R)}},v=P=>{try{y(te.throw(P))}catch(R){b(R)}},y=P=>P.done?J(P.value):Promise.resolve(P.value).then(g,v);y((te=te.apply(B,H)).next())});let se,G={};for(let B=self;B;B=Object.getPrototypeOf(B))for(let H of Object.getOwnPropertyNames(B))H in G||Object.defineProperty(G,H,{get:()=>self[H]});(()=>{const B=()=>{const J=new Error("not implemented");return J.code="ENOSYS",J};if(!G.fs){let J="";G.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(b,g){J+=te.decode(g);const v=J.lastIndexOf(`
`);return v!=-1&&(console.log(J.substring(0,v)),J=J.substring(v+1)),g.length},write(b,g,v,y,P,R){if(v!==0||y!==g.length||P!==null){R(B());return}const z=this.writeSync(b,g);R(null,z)},chmod(b,g,v){v(B())},chown(b,g,v,y){y(B())},close(b,g){g(B())},fchmod(b,g,v){v(B())},fchown(b,g,v,y){y(B())},fstat(b,g){g(B())},fsync(b,g){g(null)},ftruncate(b,g,v){v(B())},lchown(b,g,v,y){y(B())},link(b,g,v){v(B())},lstat(b,g){g(B())},mkdir(b,g,v){v(B())},open(b,g,v,y){y(B())},read(b,g,v,y,P,R){R(B())},readdir(b,g){g(B())},readlink(b,g){g(B())},rename(b,g,v){v(B())},rmdir(b,g){g(B())},stat(b,g){g(B())},symlink(b,g,v){v(B())},truncate(b,g,v){v(B())},unlink(b,g){g(B())},utimes(b,g,v,y){y(B())}}}if(G.process||(G.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw B()},pid:-1,ppid:-1,umask(){throw B()},cwd(){throw B()},chdir(){throw B()}}),!G.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!G.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!G.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!G.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const H=new TextEncoder("utf-8"),te=new TextDecoder("utf-8");G.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=s=>{s!==0&&console.warn("exit code:",s)},this._exitPromise=new Promise(s=>{this._resolveExitPromise=s}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const J=(s,a)=>{this.mem.setUint32(s+0,a,!0),this.mem.setUint32(s+4,Math.floor(a/4294967296),!0)},b=s=>{const a=this.mem.getUint32(s+0,!0),w=this.mem.getInt32(s+4,!0);return a+w*4294967296},g=s=>{const a=this.mem.getFloat64(s,!0);if(a===0)return;if(!isNaN(a))return a;const w=this.mem.getUint32(s,!0);return this._values[w]},v=(s,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(s+4,2146959360,!0),this.mem.setUint32(s,0,!0);return}this.mem.setFloat64(s,a,!0);return}if(a===void 0){this.mem.setFloat64(s,0,!0);return}let _=this._ids.get(a);_===void 0&&(_=this._idPool.pop(),_===void 0&&(_=this._values.length),this._values[_]=a,this._goRefCounts[_]=0,this._ids.set(a,_)),this._goRefCounts[_]++;let I=0;switch(typeof a){case"object":a!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(s+4,2146959360|I,!0),this.mem.setUint32(s,_,!0)},y=s=>{const a=b(s+0),w=b(s+8);return new Uint8Array(this._inst.exports.mem.buffer,a,w)},P=s=>{const a=b(s+0),w=b(s+8),_=new Array(w);for(let I=0;I<w;I++)_[I]=g(a+I*8);return _},R=s=>{const a=b(s+0),w=b(s+8);return te.decode(new DataView(this._inst.exports.mem.buffer,a,w))},z=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":s=>{s>>>=0;const a=this.mem.getInt32(s+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":s=>{s>>>=0;const a=b(s+8),w=b(s+16),_=this.mem.getInt32(s+24,!0);G.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,w,_))},"runtime.resetMemoryDataView":s=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":s=>{s>>>=0,J(s+8,(z+performance.now())*1e6)},"runtime.walltime":s=>{s>>>=0;const a=new Date().getTime();J(s+8,a/1e3),this.mem.setInt32(s+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":s=>{s>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},b(s+8)+1)),this.mem.setInt32(s+16,a,!0)},"runtime.clearTimeoutEvent":s=>{s>>>=0;const a=this.mem.getInt32(s+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":s=>{s>>>=0,crypto.getRandomValues(y(s+8))},"syscall/js.finalizeRef":s=>{s>>>=0;const a=this.mem.getUint32(s+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const w=this._values[a];this._values[a]=null,this._ids.delete(w),this._idPool.push(a)}},"syscall/js.stringVal":s=>{s>>>=0,v(s+24,R(s+8))},"syscall/js.valueGet":s=>{s>>>=0;const a=Reflect.get(g(s+8),R(s+16));s=this._inst.exports.getsp()>>>0,v(s+32,a)},"syscall/js.valueSet":s=>{s>>>=0,Reflect.set(g(s+8),R(s+16),g(s+32))},"syscall/js.valueDelete":s=>{s>>>=0,Reflect.deleteProperty(g(s+8),R(s+16))},"syscall/js.valueIndex":s=>{s>>>=0,v(s+24,Reflect.get(g(s+8),b(s+16)))},"syscall/js.valueSetIndex":s=>{s>>>=0,Reflect.set(g(s+8),b(s+16),g(s+24))},"syscall/js.valueCall":s=>{s>>>=0;try{const a=g(s+8),w=Reflect.get(a,R(s+16)),_=P(s+32),I=Reflect.apply(w,a,_);s=this._inst.exports.getsp()>>>0,v(s+56,I),this.mem.setUint8(s+64,1)}catch(a){s=this._inst.exports.getsp()>>>0,v(s+56,a),this.mem.setUint8(s+64,0)}},"syscall/js.valueInvoke":s=>{s>>>=0;try{const a=g(s+8),w=P(s+16),_=Reflect.apply(a,void 0,w);s=this._inst.exports.getsp()>>>0,v(s+40,_),this.mem.setUint8(s+48,1)}catch(a){s=this._inst.exports.getsp()>>>0,v(s+40,a),this.mem.setUint8(s+48,0)}},"syscall/js.valueNew":s=>{s>>>=0;try{const a=g(s+8),w=P(s+16),_=Reflect.construct(a,w);s=this._inst.exports.getsp()>>>0,v(s+40,_),this.mem.setUint8(s+48,1)}catch(a){s=this._inst.exports.getsp()>>>0,v(s+40,a),this.mem.setUint8(s+48,0)}},"syscall/js.valueLength":s=>{s>>>=0,J(s+16,parseInt(g(s+8).length))},"syscall/js.valuePrepareString":s=>{s>>>=0;const a=H.encode(String(g(s+8)));v(s+16,a),J(s+24,a.length)},"syscall/js.valueLoadString":s=>{s>>>=0;const a=g(s+8);y(s+16).set(a)},"syscall/js.valueInstanceOf":s=>{s>>>=0,this.mem.setUint8(s+24,g(s+8)instanceof g(s+16)?1:0)},"syscall/js.copyBytesToGo":s=>{s>>>=0;const a=y(s+8),w=g(s+32);if(!(w instanceof Uint8Array||w instanceof Uint8ClampedArray)){this.mem.setUint8(s+48,0);return}const _=w.subarray(0,a.length);a.set(_),J(s+40,_.length),this.mem.setUint8(s+48,1)},"syscall/js.copyBytesToJS":s=>{s>>>=0;const a=g(s+8),w=y(s+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(s+48,0);return}const _=w.subarray(0,a.length);a.set(_),J(s+40,_.length),this.mem.setUint8(s+48,1)},debug:s=>{console.log(s)}}}}run(J){return Q(this,null,function*(){if(!(J instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=J,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,G,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[G,5],[this,6]]),this._idPool=[],this.exited=!1;let b=4096;const g=s=>{const a=b,w=H.encode(s+"\0");return new Uint8Array(this.mem.buffer,b,w.length).set(w),b+=w.length,b%8!==0&&(b+=8-b%8),a},v=this.argv.length,y=[];this.argv.forEach(s=>{y.push(g(s))}),y.push(0),Object.keys(this.env).sort().forEach(s=>{y.push(g(`${s}=${this.env[s]}`))}),y.push(0);const R=b;if(y.forEach(s=>{this.mem.setUint32(b,s,!0),this.mem.setUint32(b+4,0,!0),b+=8}),b>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,R),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(J){const b=this;return function(){const g={id:J,this:this,args:arguments};return b._pendingEvent=g,b._resume(),g.result}}}})(),se=({data:B})=>{let H=new TextDecoder,te=G.fs,J="";te.writeSync=(P,R)=>{if(P===1)W(R);else if(P===2){J+=H.decode(R);let z=J.split(`
`);z.length>1&&console.log(z.slice(0,-1).join(`
`)),J=z[z.length-1]}else throw new Error("Bad write");return R.length};let b=[],g,v=0;se=({data:P})=>{P.length>0&&(b.push(P),g&&g())},te.read=(P,R,z,s,a,w)=>{if(P!==0||z!==0||s!==R.length||a!==null)throw new Error("Bad read");if(b.length===0){g=()=>te.read(P,R,z,s,a,w);return}let _=b[0],I=Math.max(0,Math.min(s,_.length-v));R.set(_.subarray(v,v+I),z),v+=I,v===_.length&&(b.shift(),v=0),w(null,I)};let y=new G.Go;y.argv=["","--service=0.18.7"],le(B,y).then(P=>{W(null),y.run(P)},P=>{W(P)})};function le(B,H){return Q(this,null,function*(){if(B instanceof WebAssembly.Module)return WebAssembly.instantiate(B,H.importObject);const te=yield fetch(B);if(!te.ok)throw new Error(`Failed to download ${JSON.stringify(B)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(te.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(te,H.importObject)).instance;const J=yield te.arrayBuffer();return(yield WebAssembly.instantiate(J,H.importObject)).instance})}return B=>se(B)})(W=>T.onmessage({data:W}));T={onmessage:null,postMessage:W=>setTimeout(()=>L({data:W})),terminate(){}}}let S,$;const E=new Promise((L,W)=>{S=L,$=W});T.onmessage=({data:L})=>{T.onmessage=({data:W})=>F(W),L?$(L):S()},T.postMessage(l||new URL(n,location.href).toString());let{readFromStdout:F,service:k}=Jt({writeToStdin(L){T.postMessage(L)},isSync:!1,hasFS:!1,esbuild:C});yield E,ot={build:L=>new Promise((W,Q)=>k.buildOrContext({callName:"build",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),context:L=>new Promise((W,Q)=>k.buildOrContext({callName:"context",refs:null,options:L,isTTY:!1,defaultWD:"/",callback:(se,G)=>se?Q(se):W(G)})),transform:(L,W)=>new Promise((Q,se)=>k.transform({callName:"transform",refs:null,input:L,options:W||{},isTTY:!1,fs:{readFile(G,le){le(new Error("Internal error"),null)},writeFile(G,le){le(null)}},callback:(G,le)=>G?se(G):Q(le)})),formatMessages:(L,W)=>new Promise((Q,se)=>k.formatMessages({callName:"formatMessages",refs:null,messages:L,options:W,callback:(G,le)=>G?se(G):Q(le)})),analyzeMetafile:(L,W)=>new Promise((Q,se)=>k.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof L=="string"?L:JSON.stringify(L),options:W,callback:(G,le)=>G?se(G):Q(le)}))}}),dn=C})(r)})(Vt);var Mt=Vt.exports;function Pe(r){if(typeof r!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(r))}function Et(r,t){for(var e="",i=0,d=-1,m=0,p,f=0;f<=r.length;++f){if(f<r.length)p=r.charCodeAt(f);else{if(p===47)break;p=47}if(p===47){if(!(d===f-1||m===1))if(d!==f-1&&m===2){if(e.length<2||i!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var u=e.lastIndexOf("/");if(u!==e.length-1){u===-1?(e="",i=0):(e=e.slice(0,u),i=e.length-1-e.lastIndexOf("/")),d=f,m=0;continue}}else if(e.length===2||e.length===1){e="",i=0,d=f,m=0;continue}}t&&(e.length>0?e+="/..":e="..",i=2)}else e.length>0?e+="/"+r.slice(d+1,f):e=r.slice(d+1,f),i=f-d-1;d=f,m=0}else p===46&&m!==-1?++m:m=-1}return e}function Or(r,t){var e=t.dir||t.root,i=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+i:e+r+i:i}var Ue={resolve:function(){for(var t="",e=!1,i,d=arguments.length-1;d>=-1&&!e;d--){var m;d>=0?m=arguments[d]:(i===void 0&&(i=process.cwd()),m=i),Pe(m),m.length!==0&&(t=m+"/"+t,e=m.charCodeAt(0)===47)}return t=Et(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(Pe(t),t.length===0)return".";var e=t.charCodeAt(0)===47,i=t.charCodeAt(t.length-1)===47;return t=Et(t,!e),t.length===0&&!e&&(t="."),t.length>0&&i&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return Pe(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var i=arguments[e];Pe(i),i.length>0&&(t===void 0?t=i:t+="/"+i)}return t===void 0?".":Ue.normalize(t)},relative:function(t,e){if(Pe(t),Pe(e),t===e||(t=Ue.resolve(t),e=Ue.resolve(e),t===e))return"";for(var i=1;i<t.length&&t.charCodeAt(i)===47;++i);for(var d=t.length,m=d-i,p=1;p<e.length&&e.charCodeAt(p)===47;++p);for(var f=e.length,u=f-p,x=m<u?m:u,C=-1,j=0;j<=x;++j){if(j===x){if(u>x){if(e.charCodeAt(p+j)===47)return e.slice(p+j+1);if(j===0)return e.slice(p+j)}else m>x&&(t.charCodeAt(i+j)===47?C=j:j===0&&(C=0));break}var U=t.charCodeAt(i+j),D=e.charCodeAt(p+j);if(U!==D)break;U===47&&(C=j)}var M="";for(j=i+C+1;j<=d;++j)(j===d||t.charCodeAt(j)===47)&&(M.length===0?M+="..":M+="/..");return M.length>0?M+e.slice(p+C):(p+=C,e.charCodeAt(p)===47&&++p,e.slice(p))},_makeLong:function(t){return t},dirname:function(t){if(Pe(t),t.length===0)return".";for(var e=t.charCodeAt(0),i=e===47,d=-1,m=!0,p=t.length-1;p>=1;--p)if(e=t.charCodeAt(p),e===47){if(!m){d=p;break}}else m=!1;return d===-1?i?"/":".":i&&d===1?"//":t.slice(0,d)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');Pe(t);var i=0,d=-1,m=!0,p;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var f=e.length-1,u=-1;for(p=t.length-1;p>=0;--p){var x=t.charCodeAt(p);if(x===47){if(!m){i=p+1;break}}else u===-1&&(m=!1,u=p+1),f>=0&&(x===e.charCodeAt(f)?--f===-1&&(d=p):(f=-1,d=u))}return i===d?d=u:d===-1&&(d=t.length),t.slice(i,d)}else{for(p=t.length-1;p>=0;--p)if(t.charCodeAt(p)===47){if(!m){i=p+1;break}}else d===-1&&(m=!1,d=p+1);return d===-1?"":t.slice(i,d)}},extname:function(t){Pe(t);for(var e=-1,i=0,d=-1,m=!0,p=0,f=t.length-1;f>=0;--f){var u=t.charCodeAt(f);if(u===47){if(!m){i=f+1;break}continue}d===-1&&(m=!1,d=f+1),u===46?e===-1?e=f:p!==1&&(p=1):e!==-1&&(p=-1)}return e===-1||d===-1||p===0||p===1&&e===d-1&&e===i+1?"":t.slice(e,d)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return Or("/",t)},parse:function(t){Pe(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var i=t.charCodeAt(0),d=i===47,m;d?(e.root="/",m=1):m=0;for(var p=-1,f=0,u=-1,x=!0,C=t.length-1,j=0;C>=m;--C){if(i=t.charCodeAt(C),i===47){if(!x){f=C+1;break}continue}u===-1&&(x=!1,u=C+1),i===46?p===-1?p=C:j!==1&&(j=1):p!==-1&&(j=-1)}return p===-1||u===-1||j===0||j===1&&p===u-1&&p===f+1?u!==-1&&(f===0&&d?e.base=e.name=t.slice(1,u):e.base=e.name=t.slice(f,u)):(f===0&&d?(e.name=t.slice(1,p),e.base=t.slice(1,u)):(e.name=t.slice(f,p),e.base=t.slice(f,u)),e.ext=t.slice(p,u)),f>0?e.dir=t.slice(0,f-1):d&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};Ue.posix=Ue;var Dr=Ue;const kt=Cn(Dr);let nt=!1,ut=null;const je={},Lt=async()=>(ut||(ut=Mt.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.18.7/esbuild.wasm"}).then(()=>(nt=!0,console.log("ESBuild initialized successfully"),nt)).catch(r=>{if(r instanceof Error&&r.message.includes("initialize")&&r.message.includes("once"))return console.warn("ESBuild initialize called multiple times; suppressing error"),nt=!0,nt;throw console.error("Failed to initialize ESBuild:",r),r})),ut),Ar=async({entryPoint:r,content:t,options:e})=>{await Lt(),je["node_modules/react/index.js"]||(console.log("Loading React modules from shadow directory..."),await Wt());try{je[r]={contents:t,loader:r.endsWith(".jsx")||r.endsWith(".tsx")?"jsx":r.endsWith(".css")?"css":"js"};const i={name:"css-inject",setup(p){p.onLoad({filter:/\.css$/,namespace:"virtual-fs"},async f=>{console.log("[css-inject] Handling",f.path,"in namespace",f.namespace);const u=je[f.path];if(!u)throw new Error(`CSS file not found in virtual filesystem: ${f.path}`);const x=u.contents,C=`injected-style-${f.path.replace(/[^a-zA-Z0-9]/g,"-")}`;return{contents:`
              // CSS module: ${f.path}
              (function() {
                if (typeof document !== 'undefined') {
                  const existingStyle = document.getElementById('${C}');
                  if (existingStyle) existingStyle.remove();
                  const style = document.createElement('style');
                  style.id = '${C}';
                  style.textContent = ${JSON.stringify(x)};
                  document.head.appendChild(style);
                }
              })();
              export default {};
            `,loader:"js"}})}},d={name:"virtual-file-system",setup(p){p.onResolve({filter:new RegExp(`^${r}$`)},f=>({path:f.path,namespace:"virtual-fs"})),p.onResolve({filter:/^\.+\//,namespace:"virtual-fs"},f=>{const u=kt.posix.join(kt.posix.dirname(f.importer),f.path);return console.log(`Resolved ${f.path} from ${f.importer} to ${u}`),u.endsWith(".css")||je[u]?{path:u,namespace:"virtual-fs"}:{path:`https://unpkg.com/${u}`,namespace:"http-url"}}),p.onResolve({filter:/^[^./].*/,namespace:"virtual-fs"},f=>{const u=f.path;if(console.log(`Resolving bare import: ${u}`),u==="react"){const j="node_modules/react/index.js";if(je[j])return console.log(`Resolved ${u} to ${j}`),{path:j,namespace:"virtual-fs"}}if(u==="react-dom/client"){const j="node_modules/react-dom/client.js";if(je[j])return console.log(`Resolved ${u} to ${j}`),{path:j,namespace:"virtual-fs"}}if(u==="react-dom"){const j="node_modules/react-dom/index.js";if(je[j])return console.log(`Resolved ${u} to ${j}`),{path:j,namespace:"virtual-fs"}}const x=`node_modules/${u}.js`;if(je[x])return console.log(`Resolved ${u} to ${x}`),{path:x,namespace:"virtual-fs"};const C=`node_modules/${u}/index.js`;return je[C]?(console.log(`Resolved ${u} to ${C}`),{path:C,namespace:"virtual-fs"}):(console.log(`Falling back to CDN for ${u}`),{path:`https://unpkg.com/${u}`,namespace:"http-url"})}),p.onResolve({filter:/.*/,namespace:"virtual-fs"},f=>{if(f.path.startsWith(".")||f.namespace!=="virtual-fs")return;const u=f.path;if(console.log(`Resolving internal module: ${u} from ${f.importer}`),u==="react"||u==="react-dom"||u==="scheduler"){const x=`node_modules/${u}/index.js`;if(je[x])return console.log(`Resolved internal ${u} to ${x}`),{path:x,namespace:"virtual-fs"}}if(f.path.startsWith("./")&&f.importer.includes("node_modules")){const C=`${f.importer.replace(/\/[^/]+$/,"")}/${f.path.substring(2)}`;if(je[C])return console.log(`Resolved relative ${f.path} to ${C}`),{path:C,namespace:"virtual-fs"}}}),p.onResolve({filter:/.*/,namespace:"http-url"},f=>{if(!f.path.startsWith(".")&&!f.path.startsWith("/"))return{path:`https://unpkg.com/${f.path}`,namespace:"http-url"};const u=f.importer.endsWith("/")?f.importer:`${f.importer}/`;return{path:new URL(f.path,u).href,namespace:"http-url"}}),p.onLoad({filter:/.*/,namespace:"virtual-fs"},async f=>{if(je[f.path])return{contents:je[f.path].contents,loader:je[f.path].loader};if(f.path===r)return{contents:t,loader:r.endsWith(".jsx")||r.endsWith(".tsx")?"jsx":r.endsWith(".css")?"css":"js"};throw f.path.endsWith(".css")?new Error(`CSS file not found: ${f.path}. Make sure to add it to the virtual filesystem.`):new Error(`File not found in virtual filesystem: ${f.path}`)}),p.onLoad({filter:/.*/,namespace:"http-url"},async f=>{const x=await(await fetch(f.path)).text();let C="js";return f.path.match(/\.(jsx|tsx)$/)?C="jsx":f.path.endsWith(".css")?C="css":f.path.endsWith(".json")?C="json":f.path.endsWith(".txt")&&(C="text"),{contents:x,loader:C,resolveDir:f.path.replace(/\/[^/]+$/,"/")}})}},m=await Mt.build({entryPoints:[r],bundle:e.bundle!==void 0?e.bundle:!0,minify:e.minify!==void 0?e.minify:!1,format:e.format||"iife",target:e.target||"es2015",jsxFactory:e.jsxFactory||"React.createElement",jsxFragment:e.jsxFragment||"React.Fragment",external:e.external||[],write:!1,plugins:[i,d],define:{"process.env.NODE_ENV":'"development"'}});return{code:m.outputFiles?m.outputFiles[0].text:"",error:null}}catch(i){return console.error("Build failed:",i),{code:"",error:i instanceof Error?i.message:String(i)}}},Ut=(r,t)=>{let e="js";r.match(/\.(jsx|tsx)$/)?e="jsx":r.endsWith(".css")?e="css":r.endsWith(".json")?e="json":r.endsWith(".txt")&&(e="text"),je[r]={contents:t,loader:e}},Wt=async()=>{try{const r="/prometheos/shadow/node_modules/",t=["react/index.js","react/cjs/react.development.js","react/cjs/react.production.min.js","react-dom/index.js","react-dom/client.js","react-dom/cjs/react-dom.development.js","react-dom/cjs/react-dom.production.min.js","react-dom/cjs/react-dom-client.development.js","react-dom/cjs/react-dom-client.production.min.js","scheduler/index.js","scheduler/cjs/scheduler.development.js","scheduler/cjs/scheduler.production.min.js"];for(const e of t)try{const i=await fetch(`${r}${e}`);if(i.ok){const d=await i.text();Ut(`node_modules/${e}`,d),console.log(`Loaded ${e} into virtual filesystem`)}}catch(i){console.warn(`Failed to load ${e}:`,i)}}catch(r){console.error("Failed to load React modules:",r)}},Ir=r=>{try{const t=r.split(" ");if(t[0]!=="esbuild")return null;const e=t[1],i={bundle:!1,minify:!1,format:"iife",jsxFactory:"React.createElement",jsxFragment:"React.Fragment"};for(let d=2;d<t.length;d++){const m=t[d];if(m==="--bundle")i.bundle=!0;else if(m==="--minify")i.minify=!0;else if(m.startsWith("--format=")){const p=m.split("=")[1];i.format=p}else if(m.startsWith("--target="))i.target=m.split("=")[1];else if(m.startsWith("--jsx-factory="))i.jsxFactory=m.split("=")[1];else if(m.startsWith("--jsx-fragment="))i.jsxFragment=m.split("=")[1];else if(m.startsWith("--external:")){const p=m.split(":")[1].split(",");i.external||(i.external=[]),i.external.push(...p)}}return{entryPoint:e,content:"",options:i}}catch(t){return console.error("Failed to parse esbuild command:",t),null}},Fr=Object.freeze(Object.defineProperty({__proto__:null,addToVirtualFs:Ut,buildCode:Ar,initializeEsbuild:Lt,loadReactModules:Wt,parseEsbuildCommand:Ir},Symbol.toStringTag,{value:"Module"}));function Qr(...r){return _n(Sn(r))}export{Xr as ActivityBar,qn as CommandPalette,tr as EditorArea,cr as IdeLayout,er as PreviewPanel,rr as SideBar,ar as StatusBar,ts as VirtualFS,Ut as addToVirtualFs,Ar as buildCode,Qr as cn,Jr as default,Lt as initializeEsbuild,Wt as loadReactModules,Ir as parseEsbuildCommand,ge as useIdeStore,ns as virtualFs};
