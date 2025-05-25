var fn=Object.defineProperty;var hn=(i,t,e)=>t in i?fn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var wt=(i,t,e)=>hn(i,typeof t!="symbol"?t+"":t,e);import{c as $e,r as D,j as u,n as mn,s as pn,w as gn,o as Tt,l as vn,v as Me,x as yn,G as bn,K as wn,L as xn,f as jn,M as En,X as ut,R as kn,N as Tn,O as Cn}from"./index-CpAo7Lf-.js";import{c as Ct,R as Sn,b as Pn,d as _n,e as Nn,f as Rn,C as $n,m as xt}from"./MacroContext-C3L8apHs.js";import{_ as Je,m as Dn,l as Ve}from"./monaco-editor-Dq6WuQlL.js";import{S as An,F as On,a as In}from"./settings-D0MUxPKr.js";import{P as Bn}from"./play-BJT-ML-3.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=$e("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=$e("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=$e("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=$e("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=$e("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=$e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=$e("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=$e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var[st,Gr]=mn("Tooltip",[Ct]),it=Ct(),_t="TooltipProvider",zn=700,dt="tooltip.open",[Gn,mt]=st(_t),Nt=i=>{const{__scopeTooltip:t,delayDuration:e=zn,skipDelayDuration:r=300,disableHoverableContent:c=!1,children:d}=i,f=D.useRef(!0),h=D.useRef(!1),w=D.useRef(0);return D.useEffect(()=>{const T=w.current;return()=>window.clearTimeout(T)},[]),u.jsx(Gn,{scope:t,isOpenDelayedRef:f,delayDuration:e,onOpen:D.useCallback(()=>{window.clearTimeout(w.current),f.current=!1},[]),onClose:D.useCallback(()=>{window.clearTimeout(w.current),w.current=window.setTimeout(()=>f.current=!0,r)},[r]),isPointerInTransitRef:h,onPointerInTransitChange:D.useCallback(T=>{h.current=T},[]),disableHoverableContent:c,children:d})};Nt.displayName=_t;var Ye="Tooltip",[Hn,lt]=st(Ye),Rt=i=>{const{__scopeTooltip:t,children:e,open:r,defaultOpen:c,onOpenChange:d,disableHoverableContent:f,delayDuration:h}=i,w=mt(Ye,i.__scopeTooltip),T=it(t),[A,C]=D.useState(null),$=pn(),G=D.useRef(0),U=f??w.disableHoverableContent,re=h??w.delayDuration,ce=D.useRef(!1),[ye,me]=gn({prop:r,defaultProp:c??!1,onChange:Z=>{Z?(w.onOpen(),document.dispatchEvent(new CustomEvent(dt))):w.onClose(),d==null||d(Z)},caller:Ye}),se=D.useMemo(()=>ye?ce.current?"delayed-open":"instant-open":"closed",[ye]),Te=D.useCallback(()=>{window.clearTimeout(G.current),G.current=0,ce.current=!1,me(!0)},[me]),Pe=D.useCallback(()=>{window.clearTimeout(G.current),G.current=0,me(!1)},[me]),De=D.useCallback(()=>{window.clearTimeout(G.current),G.current=window.setTimeout(()=>{ce.current=!0,me(!0),G.current=0},re)},[re,me]);return D.useEffect(()=>()=>{G.current&&(window.clearTimeout(G.current),G.current=0)},[]),u.jsx(Sn,{...T,children:u.jsx(Hn,{scope:t,contentId:$,open:ye,stateAttribute:se,trigger:A,onTriggerChange:C,onTriggerEnter:D.useCallback(()=>{w.isOpenDelayedRef.current?De():Te()},[w.isOpenDelayedRef,De,Te]),onTriggerLeave:D.useCallback(()=>{U?Pe():(window.clearTimeout(G.current),G.current=0)},[Pe,U]),onOpen:Te,onClose:Pe,disableHoverableContent:U,children:e})})};Rt.displayName=Ye;var ft="TooltipTrigger",$t=D.forwardRef((i,t)=>{const{__scopeTooltip:e,...r}=i,c=lt(ft,e),d=mt(ft,e),f=it(e),h=D.useRef(null),w=Tt(t,h,c.onTriggerChange),T=D.useRef(!1),A=D.useRef(!1),C=D.useCallback(()=>T.current=!1,[]);return D.useEffect(()=>()=>document.removeEventListener("pointerup",C),[C]),u.jsx(Pn,{asChild:!0,...f,children:u.jsx(vn.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...r,ref:w,onPointerMove:Me(i.onPointerMove,$=>{$.pointerType!=="touch"&&!A.current&&!d.isPointerInTransitRef.current&&(c.onTriggerEnter(),A.current=!0)}),onPointerLeave:Me(i.onPointerLeave,()=>{c.onTriggerLeave(),A.current=!1}),onPointerDown:Me(i.onPointerDown,()=>{c.open&&c.onClose(),T.current=!0,document.addEventListener("pointerup",C,{once:!0})}),onFocus:Me(i.onFocus,()=>{T.current||c.onOpen()}),onBlur:Me(i.onBlur,c.onClose),onClick:Me(i.onClick,c.onClose)})})});$t.displayName=ft;var qn="TooltipPortal",[Hr,Jn]=st(qn,{forceMount:void 0}),Ue="TooltipContent",Dt=D.forwardRef((i,t)=>{const e=Jn(Ue,i.__scopeTooltip),{forceMount:r=e.forceMount,side:c="top",...d}=i,f=lt(Ue,i.__scopeTooltip);return u.jsx(yn,{present:r||f.open,children:f.disableHoverableContent?u.jsx(At,{side:c,...d,ref:t}):u.jsx(Yn,{side:c,...d,ref:t})})}),Yn=D.forwardRef((i,t)=>{const e=lt(Ue,i.__scopeTooltip),r=mt(Ue,i.__scopeTooltip),c=D.useRef(null),d=Tt(t,c),[f,h]=D.useState(null),{trigger:w,onClose:T}=e,A=c.current,{onPointerInTransitChange:C}=r,$=D.useCallback(()=>{h(null),C(!1)},[C]),G=D.useCallback((U,re)=>{const ce=U.currentTarget,ye={x:U.clientX,y:U.clientY},me=er(ye,ce.getBoundingClientRect()),se=tr(ye,me),Te=nr(re.getBoundingClientRect()),Pe=sr([...se,...Te]);h(Pe),C(!0)},[C]);return D.useEffect(()=>()=>$(),[$]),D.useEffect(()=>{if(w&&A){const U=ce=>G(ce,A),re=ce=>G(ce,w);return w.addEventListener("pointerleave",U),A.addEventListener("pointerleave",re),()=>{w.removeEventListener("pointerleave",U),A.removeEventListener("pointerleave",re)}}},[w,A,G,$]),D.useEffect(()=>{if(f){const U=re=>{const ce=re.target,ye={x:re.clientX,y:re.clientY},me=(w==null?void 0:w.contains(ce))||(A==null?void 0:A.contains(ce)),se=!rr(ye,f);me?$():se&&($(),T())};return document.addEventListener("pointermove",U),()=>document.removeEventListener("pointermove",U)}},[w,A,f,T,$]),u.jsx(At,{...i,ref:d})}),[Kn,Xn]=st(Ye,{isInside:!1}),Qn=wn("TooltipContent"),At=D.forwardRef((i,t)=>{const{__scopeTooltip:e,children:r,"aria-label":c,onEscapeKeyDown:d,onPointerDownOutside:f,...h}=i,w=lt(Ue,e),T=it(e),{onClose:A}=w;return D.useEffect(()=>(document.addEventListener(dt,A),()=>document.removeEventListener(dt,A)),[A]),D.useEffect(()=>{if(w.trigger){const C=$=>{const G=$.target;G!=null&&G.contains(w.trigger)&&A()};return window.addEventListener("scroll",C,{capture:!0}),()=>window.removeEventListener("scroll",C,{capture:!0})}},[w.trigger,A]),u.jsx(bn,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:d,onPointerDownOutside:f,onFocusOutside:C=>C.preventDefault(),onDismiss:A,children:u.jsxs(_n,{"data-state":w.stateAttribute,...T,...h,ref:t,style:{...h.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[u.jsx(Qn,{children:r}),u.jsx(Kn,{scope:e,isInside:!0,children:u.jsx(xn,{id:w.contentId,role:"tooltip",children:c||r})})]})})});Dt.displayName=Ue;var Ot="TooltipArrow",Zn=D.forwardRef((i,t)=>{const{__scopeTooltip:e,...r}=i,c=it(e);return Xn(Ot,e).isInside?null:u.jsx(Nn,{...c,...r,ref:t})});Zn.displayName=Ot;function er(i,t){const e=Math.abs(t.top-i.y),r=Math.abs(t.bottom-i.y),c=Math.abs(t.right-i.x),d=Math.abs(t.left-i.x);switch(Math.min(e,r,c,d)){case d:return"left";case c:return"right";case e:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function tr(i,t,e=5){const r=[];switch(t){case"top":r.push({x:i.x-e,y:i.y+e},{x:i.x+e,y:i.y+e});break;case"bottom":r.push({x:i.x-e,y:i.y-e},{x:i.x+e,y:i.y-e});break;case"left":r.push({x:i.x+e,y:i.y-e},{x:i.x+e,y:i.y+e});break;case"right":r.push({x:i.x-e,y:i.y-e},{x:i.x-e,y:i.y+e});break}return r}function nr(i){const{top:t,right:e,bottom:r,left:c}=i;return[{x:c,y:t},{x:e,y:t},{x:e,y:r},{x:c,y:r}]}function rr(i,t){const{x:e,y:r}=i;let c=!1;for(let d=0,f=t.length-1;d<t.length;f=d++){const h=t[d],w=t[f],T=h.x,A=h.y,C=w.x,$=w.y;A>r!=$>r&&e<(C-T)*(r-A)/($-A)+T&&(c=!c)}return c}function sr(i){const t=i.slice();return t.sort((e,r)=>e.x<r.x?-1:e.x>r.x?1:e.y<r.y?-1:e.y>r.y?1:0),ir(t)}function ir(i){if(i.length<=1)return i.slice();const t=[];for(let r=0;r<i.length;r++){const c=i[r];for(;t.length>=2;){const d=t[t.length-1],f=t[t.length-2];if((d.x-f.x)*(c.y-f.y)>=(d.y-f.y)*(c.x-f.x))t.pop();else break}t.push(c)}t.pop();const e=[];for(let r=i.length-1;r>=0;r--){const c=i[r];for(;e.length>=2;){const d=e[e.length-1],f=e[e.length-2];if((d.x-f.x)*(c.y-f.y)>=(d.y-f.y)*(c.x-f.x))e.pop();else break}e.push(c)}return e.pop(),t.length===1&&e.length===1&&t[0].x===e[0].x&&t[0].y===e[0].y?t:t.concat(e)}var lr=Nt,or=Rt,ar=$t,It=Dt;const cr=lr,ur=or,dr=ar,Bt=D.forwardRef(({className:i,sideOffset:t=4,...e},r)=>u.jsx(It,{ref:r,sideOffset:t,className:jn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",i),...e}));Bt.displayName=It.displayName;const ht=[{id:"f1",name:"src",type:"folder",children:[{id:"f2",name:"app.jsx",type:"file",language:"javascript",content:`import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="app">
      <h1>Hello from ESBuild!</h1>
      <p>This is a sample React application.</p>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{ 
          padding: '8px 16px', 
          background: '#4f46e5', 
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Click me
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));`},{id:"f3",name:"styles.css",type:"file",language:"css",content:`body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f9fafb;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #111827;
}

p {
  color: #4b5563;
  line-height: 1.6;
}`},{id:"f4",name:"utils.js",type:"file",language:"javascript",content:`/**
 * Utility functions
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};`}]},{id:"f5",name:"public",type:"folder",children:[{id:"f6",name:"index.html",type:"file",language:"html",content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ESBuild Demo</title>
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"><\/script>
</body>
</html>`}]},{id:"f7",name:"package.json",type:"file",language:"json",content:`{
  "name": "esbuild-demo",
  "version": "1.0.0",
  "description": "Demo project for ESBuild",
  "main": "src/app.jsx",
  "scripts": {
    "build": "esbuild src/app.jsx --bundle --outfile=public/bundle.js"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}],at=[{id:"toggle-sidebar",title:"View: Toggle Side Bar",category:"View",shortcut:"Ctrl+B",handler:()=>he.getState().toggleSidebar()},{id:"toggle-terminal",title:"View: Toggle Terminal",category:"View",shortcut:"Ctrl+`",handler:()=>he.getState().togglePanel()},{id:"toggle-preview",title:"View: Toggle Preview",category:"View",shortcut:"Ctrl+Shift+V",handler:()=>he.getState().togglePreviewPanel()},{id:"toggle-theme",title:"Preferences: Toggle Theme",category:"Preferences",handler:()=>he.getState().toggleTheme()},{id:"build-active-file",title:"Build: Bundle Active File",category:"Build",handler:()=>{he.getState().togglePreviewPanel()}},{id:"build-bundle-app",title:"Build: Bundle App (app.jsx)",category:"Build",handler:()=>{he.getState().togglePreviewPanel()}}];class qr{constructor(t){wt(this,"root",[]);t&&(this.root=t)}readFile(t){const e=this.findItemByPath(t);return e&&e.type==="file"?e.content:void 0}writeFile(t,e){const r=this.findItemByPath(t);r&&r.type==="file"&&(r.content=e)}listDir(t){const e=this.findItemByPath(t);return e&&e.type==="folder"&&e.children?e.children:[]}deleteFile(t){}initFromData(t){this.root=t}serialize(){return JSON.parse(JSON.stringify(this.root))}findItemByPath(t){if(!t||t==="/")return{type:"folder",name:"/",id:"root",children:this.root};const e=t.split("/").filter(Boolean);let r={type:"folder",name:"/",id:"root",children:this.root};for(const c of e){if(!r||r.type!=="folder"||!r.children)return;r=r.children.find(d=>d.name===c)}return r}}function fr(i){const t={};for(const r of i){const c=r.id.split("/");let d=t,f,h="";for(let w=0;w<c.length;w++){const T=c[w];h=h?`${h}/${T}`:T,w===c.length-1?d[T]={...r,name:T,id:h}:(d[T]||(d[T]={id:h,name:T,type:"folder",children:{}}),f=d[T],f.children||(f.children={}),d=f.children)}}function e(r){return Object.values(r).map(c=>c.type==="folder"?{...c,children:e(c.children)}:c)}return e(t)}async function hr(){try{const t=await fetch("/prometheos/shadow-manifest.json");if(!t.ok)throw new Error("Failed to load shadow-manifest.json");const e=await t.json(),r=await Promise.all(e.map(async c=>{if(c.type==="file"){const f=`/prometheos/${c.contentPath.replace(/^\//,"")}`,w=await(await fetch(f)).text();let T;return c.name.endsWith(".js")||c.name.endsWith(".jsx")?T="javascript":c.name.endsWith(".ts")||c.name.endsWith(".tsx")?T="typescript":c.name.endsWith(".css")?T="css":c.name.endsWith(".html")?T="html":c.name.endsWith(".json")&&(T="json"),{id:c.id,name:c.name,type:"file",content:w,language:T}}return{id:c.id,name:c.name,type:"folder",children:[]}}));return fr(r)}catch(i){return console.error("Failed to load shadow folder:",i),[]}}const mr={activeView:"explorer",sidebarVisible:!0,panelVisible:!1,previewPanelVisible:!1,activeTab:null,tabs:[],fileSystem:ht,theme:"light",commandPaletteOpen:!1,buildOutput:"",buildError:null,isBuilding:!1,buildCode:"",panelVisibilityBeforePreview:!1},he=En((i,t)=>({...mr,setFileSystem:e=>i({fileSystem:e}),initFileSystem:async(e="shadow")=>{let r=[];e==="shadow"?(r=await hr(),(!r||r.length===0)&&(r=ht)):r=ht,i({fileSystem:r})},toggleSidebar:()=>i(e=>({sidebarVisible:!e.sidebarVisible})),togglePanel:()=>i(e=>({panelVisible:!e.panelVisible})),togglePreviewPanel:()=>i(e=>{const r=!e.previewPanelVisible;return Je(async()=>{const{ideSettings:c}=await import("./esbuild-settings-BkuTuRFm.js");return{ideSettings:c}},[]).then(({ideSettings:c})=>{c.hideTerminalDuringPreview&&i(r?d=>({panelVisibilityBeforePreview:d.panelVisible,panelVisible:!1}):d=>({panelVisible:d.panelVisibilityBeforePreview}))}),{previewPanelVisible:r}}),toggleCommandPalette:()=>i(e=>({commandPaletteOpen:!e.commandPaletteOpen})),setActiveView:e=>i({activeView:e}),setActiveTab:e=>i({activeTab:e}),openTab:e=>{const r=t().getFileById(e);!r||r.type!=="file"||i(c=>{const d=c.tabs.find(h=>h.fileId===e);if(d)return{activeTab:d.id};const f={id:`tab-${Date.now()}`,fileId:e,title:r.name,language:r.language||"javascript",isDirty:!1};return{tabs:[...c.tabs,f],activeTab:f.id}})},closeTab:e=>{i(r=>{const c=r.tabs.findIndex(h=>h.id===e);if(c===-1)return r;const d=r.tabs.filter(h=>h.id!==e);let f=r.activeTab;return r.activeTab===e&&(d.length===0?f=null:c<d.length?f=d[c].id:f=d[d.length-1].id),{tabs:d,activeTab:f}})},toggleTheme:()=>i(e=>({theme:e.theme==="dark"?"light":"dark"})),getFileById:e=>{const r=c=>{for(const d of c){if(d.id===e)return d;if(d.children){const f=r(d.children);if(f)return f}}};return r(t().fileSystem)},getTabById:e=>t().tabs.find(r=>r.id===e),setTabDirty:(e,r)=>{i(c=>({tabs:c.tabs.map(d=>d.id===e?{...d,isDirty:r}:d)}))},saveFile:(e,r)=>{i(c=>{const d=w=>w.map(T=>T.id===e&&T.type==="file"?{...T,content:r}:T.children?{...T,children:d(T.children)}:T),f=d(c.fileSystem),h=c.tabs.map(w=>w.fileId===e?{...w,isDirty:!1}:w);return{fileSystem:f,tabs:h}})},setBuildOutput:e=>i({buildOutput:e}),setBuildError:e=>i({buildError:e}),setBuildCode:e=>i({buildCode:e}),setIsBuilding:e=>i({isBuilding:e}),runBuild:async e=>{const r=t(),{ideSettings:c}=await Je(async()=>{const{ideSettings:$}=await import("./esbuild-settings-BkuTuRFm.js");return{ideSettings:$}},[]);c.showTerminalOnBuild&&!r.previewPanelVisible&&!r.panelVisible&&r.togglePanel();const{buildCode:d,parseEsbuildCommand:f,addToVirtualFs:h}=await Je(async()=>{const{buildCode:$,parseEsbuildCommand:G,addToVirtualFs:U}=await Promise.resolve().then(()=>Fr);return{buildCode:$,parseEsbuildCommand:G,addToVirtualFs:U}},void 0);r.setIsBuilding(!0),r.setBuildError(null),r.setBuildOutput(""),r.setBuildCode("");const T=(()=>{if(!r.activeTab)return null;const $=r.getTabById(r.activeTab);if(!$)return null;const G=r.getFileById($.fileId);return!G||G.type!=="file"?null:{filePath:G.id,content:G.content||""}})();if(!T){r.setBuildError("No active file to build"),r.setIsBuilding(!1);return}const A=($,G="")=>{$.forEach(U=>{const re=U.id;U.type==="file"&&U.content!==void 0&&h(re,U.content),U.type==="folder"&&U.children&&A(U.children,re)})};A(r.fileSystem);let C;if(e){if(C=f(e),!C){r.setBuildError("Invalid esbuild command"),r.setIsBuilding(!1);return}C.content=T.content}else C={entryPoint:T.filePath,content:T.content,options:{bundle:!0,minify:!0,format:"esm"}};try{const $=await d(C);$.error?r.setBuildError($.error):(r.setBuildCode($.code),r.setBuildOutput(`Build successful!
Output: ${$.code.slice(0,1e3)}${$.code.length>1e3?"...":""}`),c.autoFocusPreview&&r.previewPanelVisible&&r.activeTab!=="preview"&&r.setActiveTab("preview"))}catch($){const G=$ instanceof Error?$.message:String($);r.setBuildError(`Build failed: ${G}`)}finally{r.setIsBuilding(!1)}}})),pr=()=>{const{activeView:i,setActiveView:t}=he(),e=[{id:"explorer",icon:Mn,label:"Explorer"},{id:"search",icon:Pt,label:"Search"},{id:"git",icon:St,label:"Source Control"},{id:"extensions",icon:Vn,label:"Extensions"}];return u.jsxs("div",{className:"activity-bar flex flex-col items-center py-2",children:[u.jsx("div",{className:"flex flex-col items-center space-y-4",children:e.map(r=>u.jsx(jt,{icon:r.icon,label:r.label,isActive:i===r.id,onClick:()=>t(r.id)},r.id))}),u.jsx("div",{className:"flex-1"}),u.jsx(jt,{icon:An,label:"Settings",isActive:!1,onClick:()=>{}})]})},jt=({icon:i,label:t,isActive:e,onClick:r})=>u.jsx(cr,{children:u.jsxs(ur,{delayDuration:300,children:[u.jsx(dr,{asChild:!0,children:u.jsxs("button",{className:`p-2 rounded transition-colors relative ${e?"text-primary bg-sidebar-accent":"text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"}`,onClick:r,"aria-label":t,children:[e&&u.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-0.5 bg-primary"}),u.jsx(i,{size:24})]})}),u.jsx(Bt,{side:"right",className:"bg-popover text-popover-foreground",children:t})]})}),gr=()=>{const{commandPaletteOpen:i,toggleCommandPalette:t}=he(),[e,r]=D.useState(""),[c,d]=D.useState(at),[f,h]=D.useState(0),w=D.useRef(null);D.useEffect(()=>{if(!e){d(at);return}const C=e.toLowerCase(),$=at.filter(G=>G.title.toLowerCase().includes(C)||G.category&&G.category.toLowerCase().includes(C));d($),h(0)},[e]),D.useEffect(()=>{i&&w.current&&w.current.focus()},[i]);const T=C=>{switch(C.key){case"ArrowDown":C.preventDefault(),h($=>$<c.length-1?$+1:$);break;case"ArrowUp":C.preventDefault(),h($=>$>0?$-1:$);break;case"Enter":C.preventDefault(),A(c[f]);break;case"Escape":C.preventDefault(),t();break}},A=C=>{t(),C.handler()};return i?u.jsx("div",{className:"command-palette",onClick:()=>t(),children:u.jsxs("div",{className:"command-palette-content animate-fade-in",onClick:C=>C.stopPropagation(),children:[u.jsxs("div",{className:"flex items-center px-3 py-2 bg-input border-b border-border",children:[u.jsx(Pt,{size:16,className:"mr-2 text-muted-foreground"}),u.jsx("input",{ref:w,type:"text",className:"w-full bg-transparent outline-none placeholder:text-muted-foreground",placeholder:"Type a command or search...",value:e,onChange:C=>r(C.target.value),onKeyDown:T})]}),u.jsx("div",{className:"command-palette-results",children:c.length>0?c.map((C,$)=>u.jsxs("div",{className:`command-palette-item ${$===f?"selected":""}`,onClick:()=>A(C),onMouseEnter:()=>h($),children:[u.jsx("span",{className:"flex-1",children:C.title}),C.category&&u.jsx("span",{className:"text-xs text-muted-foreground mr-2",children:C.category}),C.shortcut&&u.jsx("kbd",{className:"bg-muted text-muted-foreground px-2 py-0.5 text-xs rounded",children:C.shortcut})]},C.id)):u.jsx("div",{className:"p-3 text-muted-foreground",children:"No commands found"})})]})}):null};function vr(i){return new Worker("/prometheos/assets/editor.worker-CozO_UIV.js",{type:"module",name:i==null?void 0:i.name})}function yr(i){return new Worker("/prometheos/assets/css.worker-BhDbEE1e.js",{type:"module",name:i==null?void 0:i.name})}function br(i){return new Worker("/prometheos/assets/html.worker-CUt5J86U.js",{type:"module",name:i==null?void 0:i.name})}function wr(i){return new Worker("/prometheos/assets/json.worker-CnsrqLYN.js",{type:"module",name:i==null?void 0:i.name})}function xr(i){return new Worker("/prometheos/assets/ts.worker-Ddk2u2yN.js",{type:"module",name:i==null?void 0:i.name})}window.MonacoEnvironment={getWorker(i,t){return t==="json"?new wr:t==="css"||t==="scss"||t==="less"?new yr:t==="html"||t==="handlebars"||t==="razor"?new br:t==="typescript"||t==="javascript"?new xr:new vr}};Ve.typescript.typescriptDefaults.setCompilerOptions({target:Ve.typescript.ScriptTarget.ES2020,allowNonTsExtensions:!0,moduleResolution:Ve.typescript.ModuleResolutionKind.NodeJs,module:Ve.typescript.ModuleKind.ESNext,noEmit:!0,esModuleInterop:!0,jsx:Ve.typescript.JsxEmit.React,reactNamespace:"React",allowJs:!0,typeRoots:["node_modules/@types"]});Ve.typescript.typescriptDefaults.addExtraLib('declare module "*.css" { const content: string; export default content; }',"global.d.ts");const jr=Object.freeze(Object.defineProperty({__proto__:null,default:Dn},Symbol.toStringTag,{value:"Module"})),Er=({previewTabId:i})=>{const{buildCode:t,buildError:e}=he(),r=D.useRef(null);return D.useEffect(()=>{if(!t||e)return;const c=t||"console.log('No build output available');";if(!r.current)return;const d=r.current.contentDocument;d&&(d.open(),d.write(`
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
            ${c}
          } catch (err) {
            document.body.innerHTML = '<div style="color: red; padding: 20px;"><h3>Runtime Error:</h3><pre>' + err.message + '</pre></div>';
          }        <\/script>
      </body>
      </html>
    `),d.close())},[t,e]),u.jsx("div",{className:"panel-area flex flex-col",style:{height:"100%",minHeight:0,maxHeight:"none"},children:u.jsx("div",{className:"flex flex-col flex-1 relative",children:u.jsxs("div",{className:"relative h-full",children:[u.jsx("iframe",{ref:r,title:"Preview",className:"w-full h-full border-none bg-white"}),e&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-red-600 p-4 text-center",children:[u.jsx("h3",{children:"Build Error"}),u.jsx("pre",{className:"text-sm mt-2 whitespace-pre-wrap",children:e})]})})," ",!t&&!e&&u.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-50",children:u.jsxs("div",{className:"text-gray-500 text-center",children:[u.jsx("h3",{className:"text-lg mb-2",children:"Preview Panel"}),u.jsx("p",{children:'Click "Run Preview" to see your code in action'})]})})]})})})},kr=()=>{const{tabs:i,activeTab:t,closeTab:e,setActiveTab:r,panelVisible:c,previewPanelVisible:d,theme:f,setTabDirty:h,saveFile:w,togglePreviewPanel:T,getTabById:A,initFileSystem:C,runBuild:$}=he(),[G,U]=D.useState({}),[re,ce]=D.useState(!1),ye=D.useRef({}),me=D.useRef({}),[se,Te]=D.useState(null);D.useEffect(()=>{C()},[C]),D.useEffect(()=>{let Z;const Q=[],_=[],Ce=me.current;return t&&(async pe=>{const{getFileById:ue,getTabById:we}=he.getState(),We=we(pe);if(!We)return;const ze=ue(We.fileId);if(!ze||!ze.content)return;Z||(Z=(await Je(()=>Promise.resolve().then(()=>jr),void 0)).default);const Ge=ye.current[pe];if(!Ge)return;const xe=Z.editor.create(Ge,{value:ze.content,language:We.language,theme:f==="dark"?"vs-dark":"vs",automaticLayout:!1,minimap:{enabled:!0},scrollBeyondLastLine:!1,fontSize:14,fontFamily:"JetBrains Mono, monospace"});me.current[pe]=xe,xe.layout(),document.fonts&&document.fonts.ready?document.fonts.ready.then(()=>xe.layout()):setTimeout(()=>xe.layout(),100);const Ke=()=>xe.layout();return window.addEventListener("resize",Ke),_.push(()=>window.removeEventListener("resize",Ke)),Q.push(xe.onDidFocusEditorText(()=>xe.layout())),Q.push(xe.onDidChangeModelContent(()=>{const Xe=xe.getValue();U(Qe=>({...Qe,[pe]:Xe})),h(pe,!0)})),xe})(t),Z&&Z.editor&&(Z.editor.setTheme(f==="dark"?"vs-dark":"vs"),Object.values(me.current).forEach(pe=>pe.layout())),()=>{_.forEach(pe=>pe()),Q.forEach(pe=>pe.dispose()),Z&&Z.editor&&(Object.keys(Ce).forEach(pe=>{const ue=Ce[pe];ue&&ue.dispose()}),Z.editor.getModels().forEach(pe=>pe.dispose()))}},[t,f,h]),D.useEffect(()=>{if(t&&me.current[t]){const Z=me.current[t];setTimeout(()=>{Z.layout(),Z.focus()},10)}},[t]),D.useEffect(()=>{d?(t&&t!=="preview"&&Te(t),r("preview")):(t==="preview"&&se&&r(se),Te(null))},[d,t,se,r]);const Pe=Z=>{const Q=me.current[Z];if(!Q)return;const _=he.getState().tabs.find(Ce=>Ce.id===Z);_&&w(_.fileId,Q.getValue())},De=async()=>{if(re){ce(!1),d&&T();return}await $(),ce(!0),d||T()};return D.useEffect(()=>{!d&&re&&ce(!1)},[d,re]),D.useEffect(()=>{(async()=>{const{ideSettings:Q}=await Je(async()=>{const{ideSettings:pe}=await import("./esbuild-settings-BkuTuRFm.js");return{ideSettings:pe}},[]);if(!Q.hideTerminalDuringPreview)return;const{panelVisible:_,panelVisibilityBeforePreview:Ce,togglePanel:Se}=he.getState();t==="preview"?_&&(he.setState({panelVisibilityBeforePreview:!0}),_&&Se()):t&&t!=="preview"&&Ce&&!_&&(Se(),he.setState({panelVisibilityBeforePreview:!1}))})()},[t]),u.jsxs("div",{className:"editor-area",children:[i.length>0||d?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"editor-tabs",children:u.jsxs("div",{className:"flex items-center justify-between w-full",children:[u.jsxs("div",{className:"flex",children:[i.map(Z=>u.jsxs("div",{className:`editor-tab ${t===Z.id?"active":""}`,onClick:()=>r(Z.id),children:[u.jsx("span",{className:"truncate flex-1",children:Z.title}),Z.isDirty&&u.jsx("span",{className:"ml-1 text-amber-400",children:"•"}),u.jsx("button",{className:"ml-2 text-blue-500 hover:text-blue-400",onClick:Q=>{Q.stopPropagation(),Pe(Z.id)},title:"Save",children:u.jsx(Ln,{size:14})}),u.jsx("button",{className:"ml-2 hover:text-foreground",onClick:Q=>{Q.stopPropagation(),e(Z.id)},children:u.jsx(ut,{size:16})})]},Z.id)),d&&se&&(()=>{const Z=A(se),Q=Z?`Preview - ${Z.title}`:"Preview";return u.jsxs("div",{className:`editor-tab ${t==="preview"?"active":""}`,onClick:()=>r("preview"),children:[u.jsx("span",{className:"truncate flex-1",children:Q}),u.jsx("button",{className:"ml-2 hover:text-foreground",onClick:_=>{_.stopPropagation(),T()},children:u.jsx(ut,{size:16})})]},"preview")})()]}),t&&t!=="preview"&&u.jsx("button",{className:`px-3 py-1 rounded text-sm flex items-center gap-1 mr-2 ${re?"bg-red-600 hover:bg-red-700 text-white":"bg-green-600 hover:bg-green-700 text-white"}`,onClick:De,title:re?"Stop Preview":"Run Preview",children:re?u.jsxs(u.Fragment,{children:[u.jsx(Un,{size:14}),"Stop Preview"]}):u.jsxs(u.Fragment,{children:[u.jsx(Bn,{size:14}),"Run Preview"]})})]})}),u.jsxs("div",{className:"editor-content",children:[i.map(Z=>u.jsx("div",{ref:Q=>ye.current[Z.id]=Q,className:"h-full w-full",style:{display:t===Z.id?"block":"none"},"data-tab-id":Z.id},Z.id)),d&&se&&u.jsx("div",{className:"h-full w-full",style:{display:t==="preview"?"block":"none"},children:u.jsx(Er,{previewTabId:se})},"preview")]})]}):u.jsx("div",{className:"flex items-center justify-center h-full text-muted-foreground",children:u.jsxs("div",{className:"text-center",children:[u.jsx("h3",{className:"text-xl mb-2",children:"Welcome to Code Builder"}),u.jsx("p",{children:"Open a file to start editing"})]})}),c&&u.jsx(Tr,{})]})},Tr=()=>{const{togglePanel:i,buildOutput:t,buildError:e,isBuilding:r,runBuild:c,togglePreviewPanel:d}=he(),[f,h]=D.useState("terminal"),[w,T]=D.useState("");D.useEffect(()=>{(t||e||r)&&h("output")},[t,e,r]);const A=async $=>{$.startsWith("esbuild ")&&(await c($),T(""))},C=()=>{const{activeTab:$,getTabById:G,getFileById:U}=he.getState();if(!$)return"esbuild app.js --bundle --minify --format=esm";const re=G($);if(!re)return"esbuild app.js --bundle --minify --format=esm";const ce=U(re.fileId);return!ce||ce.type!=="file"?"esbuild app.js --bundle --minify --format=esm":`esbuild ${ce.id} --bundle --minify --format=esm`};return u.jsxs("div",{className:"panel-area flex flex-col h-1/3 border-t border-sidebar-border",children:[u.jsxs("div",{className:"flex items-center border-b border-sidebar-border p-1",children:[u.jsxs("div",{className:"flex space-x-2",children:[u.jsx("button",{className:`px-2 ${f==="terminal"?"border-b-2 border-foreground":""}`,onClick:()=>h("terminal"),children:"Terminal"}),u.jsx("button",{className:`px-2 ${f==="output"?"border-b-2 border-foreground":""}`,onClick:()=>h("output"),children:"Output"})]}),u.jsx("button",{className:"ml-auto text-sidebar-foreground hover:text-foreground p-1",onClick:i,children:u.jsx(ut,{size:16})})]}),u.jsxs("div",{className:"flex-1 p-2 font-mono text-sm overflow-auto",children:[f==="terminal"&&u.jsx("div",{className:"text-muted-foreground",children:"~ $"})," ",f==="output"&&u.jsxs("div",{children:[u.jsx("div",{className:"mb-2",children:u.jsx("input",{type:"text",placeholder:C(),value:w,className:"w-full bg-input text-foreground px-2 py-1 rounded text-sm font-mono",onChange:$=>T($.target.value),onKeyDown:$=>{$.key==="Enter"&&A($.currentTarget.value)}})}),r&&u.jsx("div",{className:"text-blue-500 mb-2",children:"Building..."}),e&&u.jsx("div",{className:"bg-destructive/10 text-destructive p-2 rounded whitespace-pre-wrap overflow-auto mb-2",children:e}),!e&&t&&u.jsx("div",{className:"text-xs font-mono bg-sidebar-accent p-2 rounded overflow-auto",children:u.jsx("pre",{className:"whitespace-pre-wrap",children:t})}),!r&&!e&&!t&&u.jsx("div",{className:"text-muted-foreground",children:"Enter an esbuild command above or run preview to see build output here"})]})]})]})},Cr=()=>{const{sidebarVisible:i,toggleSidebar:t,activeView:e}=he(),r=D.useRef(null),[c,d]=D.useState(!1),[f,h]=D.useState(0),[w,T]=D.useState(0),[A,C]=D.useState(240);D.useEffect(()=>{const G=re=>{if(!c)return;const ce=re.clientX-f,ye=Math.max(200,Math.min(500,w+ce));C(ye),r.current&&(r.current.style.width=`${ye}px`)},U=()=>{d(!1),document.body.style.cursor="",document.body.style.userSelect=""};return c&&(document.addEventListener("mousemove",G),document.addEventListener("mouseup",U),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",U)}},[c,f,w]);const $=G=>{var U;d(!0),h(G.clientX),T(((U=r.current)==null?void 0:U.offsetWidth)||240),G.preventDefault()};return i?u.jsxs("div",{ref:r,className:"side-bar relative flex flex-col",style:{width:`${A}px`},children:[u.jsx("div",{className:"p-2 font-medium flex items-center justify-between border-b border-sidebar-border",children:u.jsxs("div",{className:"uppercase text-xs tracking-wider",children:[e==="explorer"&&"Explorer",e==="search"&&"Search",e==="git"&&"Source Control",e==="extensions"&&"Extensions"]})}),u.jsxs("div",{className:"px-2 py-1 flex-1 overflow-auto",children:[e==="explorer"&&u.jsx(Sr,{}),e==="search"&&u.jsx(Pr,{}),e==="git"&&u.jsx(_r,{}),e==="extensions"&&u.jsx(Nr,{})]}),u.jsx("div",{className:"resize-handle",onMouseDown:$})]}):null},Sr=()=>{const{fileSystem:i}=he();return u.jsx("div",{className:"explorer-tree",children:i.map(t=>u.jsx(Ft,{item:t,level:0},t.id))})},Ft=({item:i,level:t})=>{const[e,r]=kn.useState(!0),{openTab:c}=he(),d=h=>{h.stopPropagation(),i.type==="folder"&&r(!e)},f=()=>{i.type==="file"?c(i.id):r(!e)};return u.jsxs("div",{children:[u.jsx("div",{className:"tree-item",onClick:f,style:{paddingLeft:`${t*8+4}px`},children:u.jsxs("span",{className:"flex items-center",children:[i.type==="folder"&&u.jsx("span",{className:"mr-1 text-sidebar-foreground",onClick:d,children:e?u.jsx(Rn,{size:16}):u.jsx($n,{size:16})}),i.type==="folder"?u.jsx(On,{size:16,className:"mr-1 text-sidebar-foreground"}):u.jsx(In,{size:16,className:"mr-1 text-sidebar-foreground"}),u.jsx("span",{className:"truncate",children:i.name})]})}),e&&i.type==="folder"&&i.children&&u.jsx("div",{children:i.children.map(h=>u.jsx(Ft,{item:h,level:t+1},h.id))})]})},Pr=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search in files..."}),u.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No results found. Try searching for something."})]}),_r=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("div",{className:"text-sm font-medium mb-2",children:"Changes"}),u.jsx("div",{className:"text-sm text-muted-foreground",children:"No changes detected in your workspace."})]}),Nr=()=>u.jsxs("div",{className:"p-2",children:[u.jsx("input",{type:"text",className:"w-full p-1 bg-input rounded text-sm mb-2",placeholder:"Search Extensions..."}),u.jsx("div",{className:"text-sm text-muted-foreground mt-2",children:"No extensions installed. Search for extensions in the marketplace."})]}),Rr=()=>{const{theme:i,toggleTheme:t,toggleCommandPalette:e}=he();return u.jsxs("div",{className:"status-bar flex items-center px-2 text-xs",children:[u.jsx("div",{className:"flex items-center",children:u.jsxs("button",{className:"flex items-center px-2 py-1 hover:bg-sidebar-accent rounded",onClick:e,children:[u.jsx(Wn,{size:14,className:"mr-1"}),u.jsx("span",{children:"Command Palette"})]})}),u.jsx("div",{className:"flex-1"}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx(St,{size:14,className:"mr-1"}),u.jsx("span",{children:"main"})]}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"Ln 1, Col 1"})}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"Spaces: 2"})}),u.jsx("div",{className:"flex items-center",children:u.jsx("span",{children:"UTF-8"})}),u.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",onClick:t,children:i==="dark"?"☀️":"🌙"}),u.jsx("button",{className:"flex items-center hover:bg-sidebar-accent px-2 py-0.5 rounded",children:u.jsx(Fn,{size:14})})]})]})},$r=()=>{const{theme:i,toggleCommandPalette:t,toggleSidebar:e,togglePanel:r,togglePreviewPanel:c,sidebarVisible:d}=he();return D.useEffect(()=>{document.documentElement.classList.toggle("light",i==="light"),document.documentElement.classList.toggle("dark",i==="dark")},[i]),D.useEffect(()=>{const f=h=>{h.ctrlKey&&h.shiftKey&&h.key==="P"&&(h.preventDefault(),t()),h.ctrlKey&&h.key==="b"&&(h.preventDefault(),e()),h.ctrlKey&&h.key==="`"&&(h.preventDefault(),r()),h.ctrlKey&&h.shiftKey&&h.key==="V"&&(h.preventDefault(),c())};return window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}},[t,e,r,c]),u.jsxs("div",{className:"ide-container",children:[u.jsx(pr,{}),d&&u.jsx(Cr,{}),u.jsx(kr,{}),u.jsx(Rr,{}),u.jsx(gr,{})]})},Dr=()=>u.jsx("div",{className:"h-full w-full overflow-hidden",style:{height:"100%",width:"100%"},children:u.jsx($r,{})}),Jr={id:xt.id,manifest:xt,init:async()=>{console.log("Builder IDE plugin initialized")},render:()=>u.jsx(Dr,{}),onOpen:()=>{console.log("Builder IDE opened")},onClose:()=>{console.log("Builder IDE closed")}};var Mt={exports:{}};(function(i){(t=>{var e=Object.defineProperty,r=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,f=(n,l)=>{for(var o in l)e(n,o,{get:l[o],enumerable:!0})},h=(n,l,o,E)=>{if(l&&typeof l=="object"||typeof l=="function")for(let S of c(l))!d.call(n,S)&&S!==o&&e(n,S,{get:()=>l[S],enumerable:!(E=r(l,S))||E.enumerable});return n},w=n=>h(e({},"__esModule",{value:!0}),n),T=(n,l,o)=>new Promise((E,S)=>{var N=j=>{try{B(o.next(j))}catch(V){S(V)}},x=j=>{try{B(o.throw(j))}catch(V){S(V)}},B=j=>j.done?E(j.value):Promise.resolve(j.value).then(N,x);B((o=o.apply(n,l)).next())}),A={};f(A,{analyzeMetafile:()=>tn,analyzeMetafileSync:()=>ln,build:()=>Xt,buildSync:()=>nn,context:()=>Qt,default:()=>cn,formatMessages:()=>en,formatMessagesSync:()=>sn,initialize:()=>on,transform:()=>Zt,transformSync:()=>rn,version:()=>Kt}),t.exports=w(A);function C(n){let l=E=>{if(E===null)o.write8(0);else if(typeof E=="boolean")o.write8(1),o.write8(+E);else if(typeof E=="number")o.write8(2),o.write32(E|0);else if(typeof E=="string")o.write8(3),o.write(U(E));else if(E instanceof Uint8Array)o.write8(4),o.write(E);else if(E instanceof Array){o.write8(5),o.write32(E.length);for(let S of E)l(S)}else{let S=Object.keys(E);o.write8(6),o.write32(S.length);for(let N of S)o.write(U(N)),l(E[N])}},o=new G;return o.write32(0),o.write32(n.id<<1|+!n.isRequest),l(n.value),me(o.buf,o.len-4,0),o.buf.subarray(0,o.len)}function $(n){let l=()=>{switch(o.read8()){case 0:return null;case 1:return!!o.read8();case 2:return o.read32();case 3:return re(o.read());case 4:return o.read();case 5:{let x=o.read32(),B=[];for(let j=0;j<x;j++)B.push(l());return B}case 6:{let x=o.read32(),B={};for(let j=0;j<x;j++)B[re(o.read())]=l();return B}default:throw new Error("Invalid packet")}},o=new G(n),E=o.read32(),S=(E&1)===0;E>>>=1;let N=l();if(o.ptr!==n.length)throw new Error("Invalid packet");return{id:E,isRequest:S,value:N}}var G=class{constructor(n=new Uint8Array(1024)){this.buf=n,this.len=0,this.ptr=0}_write(n){if(this.len+n>this.buf.length){let l=new Uint8Array((this.len+n)*2);l.set(this.buf),this.buf=l}return this.len+=n,this.len-n}write8(n){let l=this._write(1);this.buf[l]=n}write32(n){let l=this._write(4);me(this.buf,n,l)}write(n){let l=this._write(4+n.length);me(this.buf,n.length,l),this.buf.set(n,l+4)}_read(n){if(this.ptr+n>this.buf.length)throw new Error("Invalid packet");return this.ptr+=n,this.ptr-n}read8(){return this.buf[this._read(1)]}read32(){return ye(this.buf,this._read(4))}read(){let n=this.read32(),l=new Uint8Array(n),o=this._read(l.length);return l.set(this.buf.subarray(o,o+n)),l}},U,re,ce;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let n=new TextEncoder,l=new TextDecoder;U=o=>n.encode(o),re=o=>l.decode(o),ce='new TextEncoder().encode("")'}else if(typeof Buffer<"u")U=n=>Buffer.from(n),re=n=>{let{buffer:l,byteOffset:o,byteLength:E}=n;return Buffer.from(l,o,E).toString()},ce='Buffer.from("")';else throw new Error("No UTF-8 codec found");if(!(U("")instanceof Uint8Array))throw new Error(`Invariant violation: "${ce} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function ye(n,l){return n[l++]|n[l++]<<8|n[l++]<<16|n[l++]<<24}function me(n,l,o){n[o++]=l,n[o++]=l>>8,n[o++]=l>>16,n[o++]=l>>24}var se=JSON.stringify,Te="warning",Pe="silent";function De(n){if(be(n,"target"),n.indexOf(",")>=0)throw new Error(`Invalid target: ${n}`);return n}var Z=()=>null,Q=n=>typeof n=="boolean"?null:"a boolean",_=n=>typeof n=="string"?null:"a string",Ce=n=>n instanceof RegExp?null:"a RegExp object",Se=n=>typeof n=="number"&&n===(n|0)?null:"an integer",pe=n=>typeof n=="function"?null:"a function",ue=n=>Array.isArray(n)?null:"an array",we=n=>typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"an object",We=n=>typeof n=="object"&&n!==null?null:"an array or an object",ze=n=>n instanceof WebAssembly.Module?null:"a WebAssembly.Module",Ge=n=>typeof n=="object"&&!Array.isArray(n)?null:"an object or null",xe=n=>typeof n=="string"||typeof n=="boolean"?null:"a string or a boolean",Ke=n=>typeof n=="string"||typeof n=="object"&&n!==null&&!Array.isArray(n)?null:"a string or an object",Xe=n=>typeof n=="string"||Array.isArray(n)?null:"a string or an array",Qe=n=>typeof n=="string"||n instanceof Uint8Array?null:"a string or a Uint8Array",Ut=n=>typeof n=="string"||n instanceof URL?null:"a string or a URL";function m(n,l,o,E){let S=n[o];if(l[o+""]=!0,S===void 0)return;let N=E(S);if(N!==null)throw new Error(`${se(o)} must be ${N}`);return S}function ge(n,l,o){for(let E in n)if(!(E in l))throw new Error(`Invalid option ${o}: ${se(E)}`)}function Wt(n){let l=Object.create(null),o=m(n,l,"wasmURL",Ut),E=m(n,l,"wasmModule",ze),S=m(n,l,"worker",Q);return ge(n,l,"in initialize() call"),{wasmURL:o,wasmModule:E,worker:S}}function pt(n){let l;if(n!==void 0){l=Object.create(null);for(let o in n){let E=n[o];if(typeof E=="string"||E===!1)l[o]=E;else throw new Error(`Expected ${se(o)} in mangle cache to map to either a string or false`)}}return l}function Ze(n,l,o,E,S){let N=m(l,o,"color",Q),x=m(l,o,"logLevel",_),B=m(l,o,"logLimit",Se);N!==void 0?n.push(`--color=${N}`):E&&n.push("--color=true"),n.push(`--log-level=${x||S}`),n.push(`--log-limit=${B||0}`)}function be(n,l,o){if(typeof n!="string")throw new Error(`Expected value for ${l}${o!==void 0?" "+se(o):""} to be a string, got ${typeof n} instead`);return n}function gt(n,l,o){let E=m(l,o,"legalComments",_),S=m(l,o,"sourceRoot",_),N=m(l,o,"sourcesContent",Q),x=m(l,o,"target",Xe),B=m(l,o,"format",_),j=m(l,o,"globalName",_),V=m(l,o,"mangleProps",Ce),L=m(l,o,"reserveProps",Ce),ee=m(l,o,"mangleQuoted",Q),ie=m(l,o,"minify",Q),z=m(l,o,"minifySyntax",Q),oe=m(l,o,"minifyWhitespace",Q),F=m(l,o,"minifyIdentifiers",Q),H=m(l,o,"lineLimit",Se),ne=m(l,o,"drop",ue),J=m(l,o,"charset",_),y=m(l,o,"treeShaking",Q),p=m(l,o,"ignoreAnnotations",Q),g=m(l,o,"jsx",_),v=m(l,o,"jsxFactory",_),P=m(l,o,"jsxFragment",_),R=m(l,o,"jsxImportSource",_),W=m(l,o,"jsxDev",Q),s=m(l,o,"jsxSideEffects",Q),a=m(l,o,"define",we),b=m(l,o,"logOverride",we),k=m(l,o,"supported",we),I=m(l,o,"pure",ue),te=m(l,o,"keepNames",Q),Y=m(l,o,"platform",_),q=m(l,o,"tsconfigRaw",Ke);if(E&&n.push(`--legal-comments=${E}`),S!==void 0&&n.push(`--source-root=${S}`),N!==void 0&&n.push(`--sources-content=${N}`),x&&(Array.isArray(x)?n.push(`--target=${Array.from(x).map(De).join(",")}`):n.push(`--target=${De(x)}`)),B&&n.push(`--format=${B}`),j&&n.push(`--global-name=${j}`),Y&&n.push(`--platform=${Y}`),q&&n.push(`--tsconfig-raw=${typeof q=="string"?q:JSON.stringify(q)}`),ie&&n.push("--minify"),z&&n.push("--minify-syntax"),oe&&n.push("--minify-whitespace"),F&&n.push("--minify-identifiers"),H&&n.push(`--line-limit=${H}`),J&&n.push(`--charset=${J}`),y!==void 0&&n.push(`--tree-shaking=${y}`),p&&n.push("--ignore-annotations"),ne)for(let M of ne)n.push(`--drop:${be(M,"drop")}`);if(V&&n.push(`--mangle-props=${V.source}`),L&&n.push(`--reserve-props=${L.source}`),ee!==void 0&&n.push(`--mangle-quoted=${ee}`),g&&n.push(`--jsx=${g}`),v&&n.push(`--jsx-factory=${v}`),P&&n.push(`--jsx-fragment=${P}`),R&&n.push(`--jsx-import-source=${R}`),W&&n.push("--jsx-dev"),s&&n.push("--jsx-side-effects"),a)for(let M in a){if(M.indexOf("=")>=0)throw new Error(`Invalid define: ${M}`);n.push(`--define:${M}=${be(a[M],"define",M)}`)}if(b)for(let M in b){if(M.indexOf("=")>=0)throw new Error(`Invalid log override: ${M}`);n.push(`--log-override:${M}=${be(b[M],"log override",M)}`)}if(k)for(let M in k){if(M.indexOf("=")>=0)throw new Error(`Invalid supported: ${M}`);const de=k[M];if(typeof de!="boolean")throw new Error(`Expected value for supported ${se(M)} to be a boolean, got ${typeof de} instead`);n.push(`--supported:${M}=${de}`)}if(I)for(let M of I)n.push(`--pure:${be(M,"pure")}`);te&&n.push("--keep-names")}function zt(n,l,o,E,S){var N;let x=[],B=[],j=Object.create(null),V=null,L=null;Ze(x,l,j,o,E),gt(x,l,j);let ee=m(l,j,"sourcemap",xe),ie=m(l,j,"bundle",Q),z=m(l,j,"splitting",Q),oe=m(l,j,"preserveSymlinks",Q),F=m(l,j,"metafile",Q),H=m(l,j,"outfile",_),ne=m(l,j,"outdir",_),J=m(l,j,"outbase",_),y=m(l,j,"tsconfig",_),p=m(l,j,"resolveExtensions",ue),g=m(l,j,"nodePaths",ue),v=m(l,j,"mainFields",ue),P=m(l,j,"conditions",ue),R=m(l,j,"external",ue),W=m(l,j,"packages",_),s=m(l,j,"alias",we),a=m(l,j,"loader",we),b=m(l,j,"outExtension",we),k=m(l,j,"publicPath",_),I=m(l,j,"entryNames",_),te=m(l,j,"chunkNames",_),Y=m(l,j,"assetNames",_),q=m(l,j,"inject",ue),M=m(l,j,"banner",we),de=m(l,j,"footer",we),K=m(l,j,"entryPoints",We),le=m(l,j,"absWorkingDir",_),X=m(l,j,"stdin",we),ae=(N=m(l,j,"write",Q))!=null?N:S,ve=m(l,j,"allowOverwrite",Q),ke=m(l,j,"mangleCache",we);if(j.plugins=!0,ge(l,j,`in ${n}() call`),ee&&x.push(`--sourcemap${ee===!0?"":`=${ee}`}`),ie&&x.push("--bundle"),ve&&x.push("--allow-overwrite"),z&&x.push("--splitting"),oe&&x.push("--preserve-symlinks"),F&&x.push("--metafile"),H&&x.push(`--outfile=${H}`),ne&&x.push(`--outdir=${ne}`),J&&x.push(`--outbase=${J}`),y&&x.push(`--tsconfig=${y}`),W&&x.push(`--packages=${W}`),p){let O=[];for(let fe of p){if(be(fe,"resolve extension"),fe.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${fe}`);O.push(fe)}x.push(`--resolve-extensions=${O.join(",")}`)}if(k&&x.push(`--public-path=${k}`),I&&x.push(`--entry-names=${I}`),te&&x.push(`--chunk-names=${te}`),Y&&x.push(`--asset-names=${Y}`),v){let O=[];for(let fe of v){if(be(fe,"main field"),fe.indexOf(",")>=0)throw new Error(`Invalid main field: ${fe}`);O.push(fe)}x.push(`--main-fields=${O.join(",")}`)}if(P){let O=[];for(let fe of P){if(be(fe,"condition"),fe.indexOf(",")>=0)throw new Error(`Invalid condition: ${fe}`);O.push(fe)}x.push(`--conditions=${O.join(",")}`)}if(R)for(let O of R)x.push(`--external:${be(O,"external")}`);if(s)for(let O in s){if(O.indexOf("=")>=0)throw new Error(`Invalid package name in alias: ${O}`);x.push(`--alias:${O}=${be(s[O],"alias",O)}`)}if(M)for(let O in M){if(O.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${O}`);x.push(`--banner:${O}=${be(M[O],"banner",O)}`)}if(de)for(let O in de){if(O.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${O}`);x.push(`--footer:${O}=${be(de[O],"footer",O)}`)}if(q)for(let O of q)x.push(`--inject:${be(O,"inject")}`);if(a)for(let O in a){if(O.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${O}`);x.push(`--loader:${O}=${be(a[O],"loader",O)}`)}if(b)for(let O in b){if(O.indexOf("=")>=0)throw new Error(`Invalid out extension: ${O}`);x.push(`--out-extension:${O}=${be(b[O],"out extension",O)}`)}if(K)if(Array.isArray(K))for(let O=0,fe=K.length;O<fe;O++){let je=K[O];if(typeof je=="object"&&je!==null){let Ee=Object.create(null),Re=m(je,Ee,"in",_),nt=m(je,Ee,"out",_);if(ge(je,Ee,"in entry point at index "+O),Re===void 0)throw new Error('Missing property "in" for entry point at index '+O);if(nt===void 0)throw new Error('Missing property "out" for entry point at index '+O);B.push([nt,Re])}else B.push(["",be(je,"entry point at index "+O)])}else for(let O in K)B.push([O,be(K[O],"entry point",O)]);if(X){let O=Object.create(null),fe=m(X,O,"contents",Qe),je=m(X,O,"resolveDir",_),Ee=m(X,O,"sourcefile",_),Re=m(X,O,"loader",_);ge(X,O,'in "stdin" object'),Ee&&x.push(`--sourcefile=${Ee}`),Re&&x.push(`--loader=${Re}`),je&&(L=je),typeof fe=="string"?V=U(fe):fe instanceof Uint8Array&&(V=fe)}let Fe=[];if(g)for(let O of g)O+="",Fe.push(O);return{entries:B,flags:x,write:ae,stdinContents:V,stdinResolveDir:L,absWorkingDir:le,nodePaths:Fe,mangleCache:pt(ke)}}function Gt(n,l,o,E){let S=[],N=Object.create(null);Ze(S,l,N,o,E),gt(S,l,N);let x=m(l,N,"sourcemap",xe),B=m(l,N,"sourcefile",_),j=m(l,N,"loader",_),V=m(l,N,"banner",_),L=m(l,N,"footer",_),ee=m(l,N,"mangleCache",we);return ge(l,N,`in ${n}() call`),x&&S.push(`--sourcemap=${x===!0?"external":x}`),B&&S.push(`--sourcefile=${B}`),j&&S.push(`--loader=${j}`),V&&S.push(`--banner=${V}`),L&&S.push(`--footer=${L}`),{flags:S,mangleCache:pt(ee)}}function Ht(n){const l={},o={didClose:!1,reason:""};let E={},S=0,N=0,x=new Uint8Array(16*1024),B=0,j=y=>{let p=B+y.length;if(p>x.length){let v=new Uint8Array(p*2);v.set(x),x=v}x.set(y,B),B+=y.length;let g=0;for(;g+4<=B;){let v=ye(x,g);if(g+4+v>B)break;g+=4,oe(x.subarray(g,g+v)),g+=v}g>0&&(x.copyWithin(0,g,B),B-=g)},V=y=>{o.didClose=!0,y&&(o.reason=": "+(y.message||y));const p="The service was stopped"+o.reason;for(let g in E)E[g](p,null);E={}},L=(y,p,g)=>{if(o.didClose)return g("The service is no longer running"+o.reason,null);let v=S++;E[v]=(P,R)=>{try{g(P,R)}finally{y&&y.unref()}},y&&y.ref(),n.writeToStdin(C({id:v,isRequest:!0,value:p}))},ee=(y,p)=>{if(o.didClose)throw new Error("The service is no longer running"+o.reason);n.writeToStdin(C({id:y,isRequest:!1,value:p}))},ie=(y,p)=>T(this,null,function*(){try{if(p.command==="ping"){ee(y,{});return}if(typeof p.key=="number"){const g=l[p.key];if(g){const v=g[p.command];if(v){yield v(y,p);return}}}throw new Error("Invalid command: "+p.command)}catch(g){ee(y,{errors:[Ae(g,n,null,void 0,"")]})}}),z=!0,oe=y=>{if(z){z=!1;let g=String.fromCharCode(...y);if(g!=="0.18.7")throw new Error(`Cannot start service: Host version "0.18.7" does not match binary version ${se(g)}`);return}let p=$(y);if(p.isRequest)ie(p.id,p.value);else{let g=E[p.id];delete E[p.id],p.value.error?g(p.value.error,{}):g(null,p.value)}};return{readFromStdout:j,afterClose:V,service:{buildOrContext:({callName:y,refs:p,options:g,isTTY:v,defaultWD:P,callback:R})=>{let W=0;const s=N++,a={},b={ref(){++W===1&&p&&p.ref()},unref(){--W===0&&(delete l[s],p&&p.unref())}};l[s]=a,b.ref(),qt(y,s,L,ee,b,n,a,g,v,P,(k,I)=>{try{R(k,I)}finally{b.unref()}})},transform:({callName:y,refs:p,input:g,options:v,isTTY:P,fs:R,callback:W})=>{const s=vt();let a=b=>{try{if(typeof g!="string"&&!(g instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:k,mangleCache:I}=Gt(y,v,P,Pe),te={command:"transform",flags:k,inputFS:b!==null,input:b!==null?U(b):typeof g=="string"?U(g):g};I&&(te.mangleCache=I),L(p,te,(Y,q)=>{if(Y)return W(new Error(Y),null);let M=Ie(q.errors,s),de=Ie(q.warnings,s),K=1,le=()=>{if(--K===0){let X={warnings:de,code:q.code,map:q.map,mangleCache:void 0,legalComments:void 0};"legalComments"in q&&(X.legalComments=q==null?void 0:q.legalComments),q.mangleCache&&(X.mangleCache=q==null?void 0:q.mangleCache),W(null,X)}};if(M.length>0)return W(He("Transform failed",M,de),null);q.codeFS&&(K++,R.readFile(q.code,(X,ae)=>{X!==null?W(X,null):(q.code=ae,le())})),q.mapFS&&(K++,R.readFile(q.map,(X,ae)=>{X!==null?W(X,null):(q.map=ae,le())})),le()})}catch(k){let I=[];try{Ze(I,v,{},P,Pe)}catch{}const te=Ae(k,n,s,void 0,"");L(p,{command:"error",flags:I,error:te},()=>{te.detail=s.load(te.detail),W(He("Transform failed",[te],[]),null)})}};if((typeof g=="string"||g instanceof Uint8Array)&&g.length>1024*1024){let b=a;a=()=>R.writeFile(g,b)}a(null)},formatMessages:({callName:y,refs:p,messages:g,options:v,callback:P})=>{let R=Ne(g,"messages",null,"");if(!v)throw new Error(`Missing second argument in ${y}() call`);let W={},s=m(v,W,"kind",_),a=m(v,W,"color",Q),b=m(v,W,"terminalWidth",Se);if(ge(v,W,`in ${y}() call`),s===void 0)throw new Error(`Missing "kind" in ${y}() call`);if(s!=="error"&&s!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${y}() call`);let k={command:"format-msgs",messages:R,isWarning:s==="warning"};a!==void 0&&(k.color=a),b!==void 0&&(k.terminalWidth=b),L(p,k,(I,te)=>{if(I)return P(new Error(I),null);P(null,te.messages)})},analyzeMetafile:({callName:y,refs:p,metafile:g,options:v,callback:P})=>{v===void 0&&(v={});let R={},W=m(v,R,"color",Q),s=m(v,R,"verbose",Q);ge(v,R,`in ${y}() call`);let a={command:"analyze-metafile",metafile:g};W!==void 0&&(a.color=W),s!==void 0&&(a.verbose=s),L(p,a,(b,k)=>{if(b)return P(new Error(b),null);P(null,k.result)})}}}}function qt(n,l,o,E,S,N,x,B,j,V,L){const ee=vt(),ie=n==="context",z=(H,ne)=>{const J=[];try{Ze(J,B,{},j,Te)}catch{}const y=Ae(H,N,ee,void 0,ne);o(S,{command:"error",flags:J,error:y},()=>{y.detail=ee.load(y.detail),L(He(ie?"Context failed":"Build failed",[y],[]),null)})};let oe;if(typeof B=="object"){const H=B.plugins;if(H!==void 0){if(!Array.isArray(H))return z(new Error('"plugins" must be an array'),"");oe=H}}if(oe&&oe.length>0){if(N.isSync)return z(new Error("Cannot use plugins in synchronous API calls"),"");Jt(l,o,E,S,N,x,B,oe,ee).then(H=>{if(!H.ok)return z(H.error,H.pluginName);try{F(H.requestPlugins,H.runOnEndCallbacks,H.scheduleOnDisposeCallbacks)}catch(ne){z(ne,"")}},H=>z(H,""));return}try{F(null,(H,ne)=>ne([],[]),()=>{})}catch(H){z(H,"")}function F(H,ne,J){const y=N.hasFS,{entries:p,flags:g,write:v,stdinContents:P,stdinResolveDir:R,absWorkingDir:W,nodePaths:s,mangleCache:a}=zt(n,B,j,Te,y);if(v&&!N.hasFS)throw new Error('The "write" option is unavailable in this environment');const b={command:"build",key:l,entries:p,flags:g,write:v,stdinContents:P,stdinResolveDir:R,absWorkingDir:W||V,nodePaths:s,context:ie};H&&(b.plugins=H),a&&(b.mangleCache=a);const k=(Y,q)=>{const M={errors:Ie(Y.errors,ee),warnings:Ie(Y.warnings,ee),outputFiles:void 0,metafile:void 0,mangleCache:void 0},de=M.errors.slice(),K=M.warnings.slice();Y.outputFiles&&(M.outputFiles=Y.outputFiles.map(Yt)),Y.metafile&&(M.metafile=JSON.parse(Y.metafile)),Y.mangleCache&&(M.mangleCache=Y.mangleCache),Y.writeToStdout!==void 0&&console.log(re(Y.writeToStdout).replace(/\n$/,"")),ne(M,(le,X)=>{if(de.length>0||le.length>0){const ae=He("Build failed",de.concat(le),K.concat(X));return q(ae,null,le,X)}q(null,M,le,X)})};let I,te;ie&&(x["on-end"]=(Y,q)=>new Promise(M=>{k(q,(de,K,le,X)=>{const ae={errors:le,warnings:X};te&&te(de,K),I=void 0,te=void 0,E(Y,ae),M()})})),o(S,b,(Y,q)=>{if(Y)return L(new Error(Y),null);if(!ie)return k(q,(K,le)=>(J(),L(K,le)));if(q.errors.length>0)return L(He("Context failed",q.errors,q.warnings),null);let M=!1;const de={rebuild:()=>(I||(I=new Promise((K,le)=>{let X;te=(ve,ke)=>{X||(X=()=>ve?le(ve):K(ke))};const ae=()=>{o(S,{command:"rebuild",key:l},(ke,Fe)=>{ke?le(new Error(ke)):X?X():ae()})};ae()})),I),watch:(K={})=>new Promise((le,X)=>{if(!N.hasFS)throw new Error('Cannot use the "watch" API in this environment');ge(K,{},"in watch() call"),o(S,{command:"watch",key:l},ke=>{ke?X(new Error(ke)):le(void 0)})}),serve:(K={})=>new Promise((le,X)=>{if(!N.hasFS)throw new Error('Cannot use the "serve" API in this environment');const ae={},ve=m(K,ae,"port",Se),ke=m(K,ae,"host",_),Fe=m(K,ae,"servedir",_),O=m(K,ae,"keyfile",_),fe=m(K,ae,"certfile",_),je=m(K,ae,"onRequest",pe);ge(K,ae,"in serve() call");const Ee={command:"serve",key:l,onRequest:!!je};ve!==void 0&&(Ee.port=ve),ke!==void 0&&(Ee.host=ke),Fe!==void 0&&(Ee.servedir=Fe),O!==void 0&&(Ee.keyfile=O),fe!==void 0&&(Ee.certfile=fe),o(S,Ee,(Re,nt)=>{if(Re)return X(new Error(Re));je&&(x["serve-request"]=(un,dn)=>{je(dn.args),E(un,{})}),le(nt)})}),cancel:()=>new Promise(K=>{if(M)return K();o(S,{command:"cancel",key:l},()=>{K()})}),dispose:()=>new Promise(K=>{if(M)return K();M=!0,o(S,{command:"dispose",key:l},()=>{K(),J(),S.unref()})})};S.ref(),L(null,de)})}}var Jt=(n,l,o,E,S,N,x,B,j)=>T(void 0,null,function*(){let V=[],L=[],ee={},ie={},z=[],oe=0,F=0,H=[],ne=!1;B=[...B];for(let p of B){let g={};if(typeof p!="object")throw new Error(`Plugin at index ${F} must be an object`);const v=m(p,g,"name",_);if(typeof v!="string"||v==="")throw new Error(`Plugin at index ${F} is missing a name`);try{let P=m(p,g,"setup",pe);if(typeof P!="function")throw new Error("Plugin is missing a setup function");ge(p,g,`on plugin ${se(v)}`);let R={name:v,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};F++;let s=P({initialOptions:x,resolve:(a,b={})=>{if(!ne)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof a!="string")throw new Error("The path to resolve must be a string");let k=Object.create(null),I=m(b,k,"pluginName",_),te=m(b,k,"importer",_),Y=m(b,k,"namespace",_),q=m(b,k,"resolveDir",_),M=m(b,k,"kind",_),de=m(b,k,"pluginData",Z);return ge(b,k,"in resolve() call"),new Promise((K,le)=>{const X={command:"resolve",path:a,key:n,pluginName:v};if(I!=null&&(X.pluginName=I),te!=null&&(X.importer=te),Y!=null&&(X.namespace=Y),q!=null&&(X.resolveDir=q),M!=null)X.kind=M;else throw new Error('Must specify "kind" when calling "resolve"');de!=null&&(X.pluginData=j.store(de)),l(E,X,(ae,ve)=>{ae!==null?le(new Error(ae)):K({errors:Ie(ve.errors,j),warnings:Ie(ve.warnings,j),path:ve.path,external:ve.external,sideEffects:ve.sideEffects,namespace:ve.namespace,suffix:ve.suffix,pluginData:j.load(ve.pluginData)})})})},onStart(a){let b='This error came from the "onStart" callback registered here:',k=et(new Error(b),S,"onStart");V.push({name:v,callback:a,note:k}),R.onStart=!0},onEnd(a){let b='This error came from the "onEnd" callback registered here:',k=et(new Error(b),S,"onEnd");L.push({name:v,callback:a,note:k}),R.onEnd=!0},onResolve(a,b){let k='This error came from the "onResolve" callback registered here:',I=et(new Error(k),S,"onResolve"),te={},Y=m(a,te,"filter",Ce),q=m(a,te,"namespace",_);if(ge(a,te,`in onResolve() call for plugin ${se(v)}`),Y==null)throw new Error("onResolve() call is missing a filter");let M=oe++;ee[M]={name:v,callback:b,note:I},R.onResolve.push({id:M,filter:Y.source,namespace:q||""})},onLoad(a,b){let k='This error came from the "onLoad" callback registered here:',I=et(new Error(k),S,"onLoad"),te={},Y=m(a,te,"filter",Ce),q=m(a,te,"namespace",_);if(ge(a,te,`in onLoad() call for plugin ${se(v)}`),Y==null)throw new Error("onLoad() call is missing a filter");let M=oe++;ie[M]={name:v,callback:b,note:I},R.onLoad.push({id:M,filter:Y.source,namespace:q||""})},onDispose(a){z.push(a)},esbuild:S.esbuild});s&&(yield s),H.push(R)}catch(P){return{ok:!1,error:P,pluginName:v}}}N["on-start"]=(p,g)=>T(void 0,null,function*(){let v={errors:[],warnings:[]};yield Promise.all(V.map(P=>T(void 0,[P],function*({name:R,callback:W,note:s}){try{let a=yield W();if(a!=null){if(typeof a!="object")throw new Error(`Expected onStart() callback in plugin ${se(R)} to return an object`);let b={},k=m(a,b,"errors",ue),I=m(a,b,"warnings",ue);ge(a,b,`from onStart() callback in plugin ${se(R)}`),k!=null&&v.errors.push(...Ne(k,"errors",j,R)),I!=null&&v.warnings.push(...Ne(I,"warnings",j,R))}}catch(a){v.errors.push(Ae(a,S,j,s&&s(),R))}}))),o(p,v)}),N["on-resolve"]=(p,g)=>T(void 0,null,function*(){let v={},P="",R,W;for(let s of g.ids)try{({name:P,callback:R,note:W}=ee[s]);let a=yield R({path:g.path,importer:g.importer,namespace:g.namespace,resolveDir:g.resolveDir,kind:g.kind,pluginData:j.load(g.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onResolve() callback in plugin ${se(P)} to return an object`);let b={},k=m(a,b,"pluginName",_),I=m(a,b,"path",_),te=m(a,b,"namespace",_),Y=m(a,b,"suffix",_),q=m(a,b,"external",Q),M=m(a,b,"sideEffects",Q),de=m(a,b,"pluginData",Z),K=m(a,b,"errors",ue),le=m(a,b,"warnings",ue),X=m(a,b,"watchFiles",ue),ae=m(a,b,"watchDirs",ue);ge(a,b,`from onResolve() callback in plugin ${se(P)}`),v.id=s,k!=null&&(v.pluginName=k),I!=null&&(v.path=I),te!=null&&(v.namespace=te),Y!=null&&(v.suffix=Y),q!=null&&(v.external=q),M!=null&&(v.sideEffects=M),de!=null&&(v.pluginData=j.store(de)),K!=null&&(v.errors=Ne(K,"errors",j,P)),le!=null&&(v.warnings=Ne(le,"warnings",j,P)),X!=null&&(v.watchFiles=tt(X,"watchFiles")),ae!=null&&(v.watchDirs=tt(ae,"watchDirs"));break}}catch(a){v={id:s,errors:[Ae(a,S,j,W&&W(),P)]};break}o(p,v)}),N["on-load"]=(p,g)=>T(void 0,null,function*(){let v={},P="",R,W;for(let s of g.ids)try{({name:P,callback:R,note:W}=ie[s]);let a=yield R({path:g.path,namespace:g.namespace,suffix:g.suffix,pluginData:j.load(g.pluginData)});if(a!=null){if(typeof a!="object")throw new Error(`Expected onLoad() callback in plugin ${se(P)} to return an object`);let b={},k=m(a,b,"pluginName",_),I=m(a,b,"contents",Qe),te=m(a,b,"resolveDir",_),Y=m(a,b,"pluginData",Z),q=m(a,b,"loader",_),M=m(a,b,"errors",ue),de=m(a,b,"warnings",ue),K=m(a,b,"watchFiles",ue),le=m(a,b,"watchDirs",ue);ge(a,b,`from onLoad() callback in plugin ${se(P)}`),v.id=s,k!=null&&(v.pluginName=k),I instanceof Uint8Array?v.contents=I:I!=null&&(v.contents=U(I)),te!=null&&(v.resolveDir=te),Y!=null&&(v.pluginData=j.store(Y)),q!=null&&(v.loader=q),M!=null&&(v.errors=Ne(M,"errors",j,P)),de!=null&&(v.warnings=Ne(de,"warnings",j,P)),K!=null&&(v.watchFiles=tt(K,"watchFiles")),le!=null&&(v.watchDirs=tt(le,"watchDirs"));break}}catch(a){v={id:s,errors:[Ae(a,S,j,W&&W(),P)]};break}o(p,v)});let J=(p,g)=>g([],[]);L.length>0&&(J=(p,g)=>{T(void 0,null,function*(){const v=[],P=[];for(const{name:R,callback:W,note:s}of L){let a,b;try{const k=yield W(p);if(k!=null){if(typeof k!="object")throw new Error(`Expected onEnd() callback in plugin ${se(R)} to return an object`);let I={},te=m(k,I,"errors",ue),Y=m(k,I,"warnings",ue);ge(k,I,`from onEnd() callback in plugin ${se(R)}`),te!=null&&(a=Ne(te,"errors",j,R)),Y!=null&&(b=Ne(Y,"warnings",j,R))}}catch(k){a=[Ae(k,S,j,s&&s(),R)]}if(a){v.push(...a);try{p.errors.push(...a)}catch{}}if(b){P.push(...b);try{p.warnings.push(...b)}catch{}}}g(v,P)})});let y=()=>{for(const p of z)setTimeout(()=>p(),0)};return ne=!0,{ok:!0,requestPlugins:H,runOnEndCallbacks:J,scheduleOnDisposeCallbacks:y}});function vt(){const n=new Map;let l=0;return{load(o){return n.get(o)},store(o){if(o===void 0)return-1;const E=l++;return n.set(E,o),E}}}function et(n,l,o){let E,S=!1;return()=>{if(S)return E;S=!0;try{let N=(n.stack+"").split(`
`);N.splice(1,1);let x=yt(l,N,o);if(x)return E={text:n.message,location:x},E}catch{}}}function Ae(n,l,o,E,S){let N="Internal error",x=null;try{N=(n&&n.message||n)+""}catch{}try{x=yt(l,(n.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:S,text:N,location:x,notes:E?[E]:[],detail:o?o.store(n):-1}}function yt(n,l,o){let E="    at ";if(n.readFileSync&&!l[0].startsWith(E)&&l[1].startsWith(E))for(let S=1;S<l.length;S++){let N=l[S];if(N.startsWith(E))for(N=N.slice(E.length);;){let x=/^(?:new |async )?\S+ \((.*)\)$/.exec(N);if(x){N=x[1];continue}if(x=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(N),x){N=x[1];continue}if(x=/^(\S+):(\d+):(\d+)$/.exec(N),x){let B;try{B=n.readFileSync(x[1],"utf8")}catch{break}let j=B.split(/\r\n|\r|\n|\u2028|\u2029/)[+x[2]-1]||"",V=+x[3]-1,L=j.slice(V,V+o.length)===o?o.length:0;return{file:x[1],namespace:"file",line:+x[2],column:U(j.slice(0,V)).length,length:U(j.slice(V,V+L)).length,lineText:j+`
`+l.slice(1).join(`
`),suggestion:""}}break}}return null}function He(n,l,o){let E=5,S=l.length<1?"":` with ${l.length} error${l.length<2?"":"s"}:`+l.slice(0,E+1).map((x,B)=>{if(B===E)return`
...`;if(!x.location)return`
error: ${x.text}`;let{file:j,line:V,column:L}=x.location,ee=x.pluginName?`[plugin: ${x.pluginName}] `:"";return`
${j}:${V}:${L}: ERROR: ${ee}${x.text}`}).join(""),N=new Error(`${n}${S}`);return N.errors=l,N.warnings=o,N}function Ie(n,l){for(const o of n)o.detail=l.load(o.detail);return n}function bt(n,l){if(n==null)return null;let o={},E=m(n,o,"file",_),S=m(n,o,"namespace",_),N=m(n,o,"line",Se),x=m(n,o,"column",Se),B=m(n,o,"length",Se),j=m(n,o,"lineText",_),V=m(n,o,"suggestion",_);return ge(n,o,l),{file:E||"",namespace:S||"",line:N||0,column:x||0,length:B||0,lineText:j||"",suggestion:V||""}}function Ne(n,l,o,E){let S=[],N=0;for(const x of n){let B={},j=m(x,B,"id",_),V=m(x,B,"pluginName",_),L=m(x,B,"text",_),ee=m(x,B,"location",Ge),ie=m(x,B,"notes",ue),z=m(x,B,"detail",Z),oe=`in element ${N} of "${l}"`;ge(x,B,oe);let F=[];if(ie)for(const H of ie){let ne={},J=m(H,ne,"text",_),y=m(H,ne,"location",Ge);ge(H,ne,oe),F.push({text:J||"",location:bt(y,oe)})}S.push({id:j||"",pluginName:V||E,text:L||"",location:bt(ee,oe),notes:F,detail:o?o.store(z):-1}),N++}return S}function tt(n,l){const o=[];for(const E of n){if(typeof E!="string")throw new Error(`${se(l)} must be an array of strings`);o.push(E)}return o}function Yt({path:n,contents:l}){let o=null;return{path:n,contents:l,get text(){const E=this.contents;return(o===null||E!==l)&&(l=E,o=re(E)),o}}}var Kt="0.18.7",Xt=n=>qe().build(n),Qt=n=>qe().context(n),Zt=(n,l)=>qe().transform(n,l),en=(n,l)=>qe().formatMessages(n,l),tn=(n,l)=>qe().analyzeMetafile(n,l),nn=()=>{throw new Error('The "buildSync" API only works in node')},rn=()=>{throw new Error('The "transformSync" API only works in node')},sn=()=>{throw new Error('The "formatMessagesSync" API only works in node')},ln=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Be,ot,qe=()=>{if(ot)return ot;throw Be?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},on=n=>{n=Wt(n||{});let l=n.wasmURL,o=n.wasmModule,E=n.worker!==!1;if(!l&&!o)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Be)throw new Error('Cannot call "initialize" more than once');return Be=an(l||"",o,E),Be.catch(()=>{Be=void 0}),Be},an=(n,l,o)=>T(void 0,null,function*(){let E;if(o){let V=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});E=new Worker(URL.createObjectURL(V))}else{let V=(L=>{var ee=(F,H,ne)=>new Promise((J,y)=>{var p=P=>{try{v(ne.next(P))}catch(R){y(R)}},g=P=>{try{v(ne.throw(P))}catch(R){y(R)}},v=P=>P.done?J(P.value):Promise.resolve(P.value).then(p,g);v((ne=ne.apply(F,H)).next())});let ie,z={};for(let F=self;F;F=Object.getPrototypeOf(F))for(let H of Object.getOwnPropertyNames(F))H in z||Object.defineProperty(z,H,{get:()=>self[H]});(()=>{const F=()=>{const J=new Error("not implemented");return J.code="ENOSYS",J};if(!z.fs){let J="";z.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(y,p){J+=ne.decode(p);const g=J.lastIndexOf(`
`);return g!=-1&&(console.log(J.substring(0,g)),J=J.substring(g+1)),p.length},write(y,p,g,v,P,R){if(g!==0||v!==p.length||P!==null){R(F());return}const W=this.writeSync(y,p);R(null,W)},chmod(y,p,g){g(F())},chown(y,p,g,v){v(F())},close(y,p){p(F())},fchmod(y,p,g){g(F())},fchown(y,p,g,v){v(F())},fstat(y,p){p(F())},fsync(y,p){p(null)},ftruncate(y,p,g){g(F())},lchown(y,p,g,v){v(F())},link(y,p,g){g(F())},lstat(y,p){p(F())},mkdir(y,p,g){g(F())},open(y,p,g,v){v(F())},read(y,p,g,v,P,R){R(F())},readdir(y,p){p(F())},readlink(y,p){p(F())},rename(y,p,g){g(F())},rmdir(y,p){p(F())},stat(y,p){p(F())},symlink(y,p,g){g(F())},truncate(y,p,g){g(F())},unlink(y,p){p(F())},utimes(y,p,g,v){v(F())}}}if(z.process||(z.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw F()},pid:-1,ppid:-1,umask(){throw F()},cwd(){throw F()},chdir(){throw F()}}),!z.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!z.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!z.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!z.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const H=new TextEncoder("utf-8"),ne=new TextDecoder("utf-8");z.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=s=>{s!==0&&console.warn("exit code:",s)},this._exitPromise=new Promise(s=>{this._resolveExitPromise=s}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const J=(s,a)=>{this.mem.setUint32(s+0,a,!0),this.mem.setUint32(s+4,Math.floor(a/4294967296),!0)},y=s=>{const a=this.mem.getUint32(s+0,!0),b=this.mem.getInt32(s+4,!0);return a+b*4294967296},p=s=>{const a=this.mem.getFloat64(s,!0);if(a===0)return;if(!isNaN(a))return a;const b=this.mem.getUint32(s,!0);return this._values[b]},g=(s,a)=>{if(typeof a=="number"&&a!==0){if(isNaN(a)){this.mem.setUint32(s+4,2146959360,!0),this.mem.setUint32(s,0,!0);return}this.mem.setFloat64(s,a,!0);return}if(a===void 0){this.mem.setFloat64(s,0,!0);return}let k=this._ids.get(a);k===void 0&&(k=this._idPool.pop(),k===void 0&&(k=this._values.length),this._values[k]=a,this._goRefCounts[k]=0,this._ids.set(a,k)),this._goRefCounts[k]++;let I=0;switch(typeof a){case"object":a!==null&&(I=1);break;case"string":I=2;break;case"symbol":I=3;break;case"function":I=4;break}this.mem.setUint32(s+4,2146959360|I,!0),this.mem.setUint32(s,k,!0)},v=s=>{const a=y(s+0),b=y(s+8);return new Uint8Array(this._inst.exports.mem.buffer,a,b)},P=s=>{const a=y(s+0),b=y(s+8),k=new Array(b);for(let I=0;I<b;I++)k[I]=p(a+I*8);return k},R=s=>{const a=y(s+0),b=y(s+8);return ne.decode(new DataView(this._inst.exports.mem.buffer,a,b))},W=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":s=>{s>>>=0;const a=this.mem.getInt32(s+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(a)},"runtime.wasmWrite":s=>{s>>>=0;const a=y(s+8),b=y(s+16),k=this.mem.getInt32(s+24,!0);z.fs.writeSync(a,new Uint8Array(this._inst.exports.mem.buffer,b,k))},"runtime.resetMemoryDataView":s=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":s=>{s>>>=0,J(s+8,(W+performance.now())*1e6)},"runtime.walltime":s=>{s>>>=0;const a=new Date().getTime();J(s+8,a/1e3),this.mem.setInt32(s+16,a%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":s=>{s>>>=0;const a=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(a,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(a);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},y(s+8)+1)),this.mem.setInt32(s+16,a,!0)},"runtime.clearTimeoutEvent":s=>{s>>>=0;const a=this.mem.getInt32(s+8,!0);clearTimeout(this._scheduledTimeouts.get(a)),this._scheduledTimeouts.delete(a)},"runtime.getRandomData":s=>{s>>>=0,crypto.getRandomValues(v(s+8))},"syscall/js.finalizeRef":s=>{s>>>=0;const a=this.mem.getUint32(s+8,!0);if(this._goRefCounts[a]--,this._goRefCounts[a]===0){const b=this._values[a];this._values[a]=null,this._ids.delete(b),this._idPool.push(a)}},"syscall/js.stringVal":s=>{s>>>=0,g(s+24,R(s+8))},"syscall/js.valueGet":s=>{s>>>=0;const a=Reflect.get(p(s+8),R(s+16));s=this._inst.exports.getsp()>>>0,g(s+32,a)},"syscall/js.valueSet":s=>{s>>>=0,Reflect.set(p(s+8),R(s+16),p(s+32))},"syscall/js.valueDelete":s=>{s>>>=0,Reflect.deleteProperty(p(s+8),R(s+16))},"syscall/js.valueIndex":s=>{s>>>=0,g(s+24,Reflect.get(p(s+8),y(s+16)))},"syscall/js.valueSetIndex":s=>{s>>>=0,Reflect.set(p(s+8),y(s+16),p(s+24))},"syscall/js.valueCall":s=>{s>>>=0;try{const a=p(s+8),b=Reflect.get(a,R(s+16)),k=P(s+32),I=Reflect.apply(b,a,k);s=this._inst.exports.getsp()>>>0,g(s+56,I),this.mem.setUint8(s+64,1)}catch(a){s=this._inst.exports.getsp()>>>0,g(s+56,a),this.mem.setUint8(s+64,0)}},"syscall/js.valueInvoke":s=>{s>>>=0;try{const a=p(s+8),b=P(s+16),k=Reflect.apply(a,void 0,b);s=this._inst.exports.getsp()>>>0,g(s+40,k),this.mem.setUint8(s+48,1)}catch(a){s=this._inst.exports.getsp()>>>0,g(s+40,a),this.mem.setUint8(s+48,0)}},"syscall/js.valueNew":s=>{s>>>=0;try{const a=p(s+8),b=P(s+16),k=Reflect.construct(a,b);s=this._inst.exports.getsp()>>>0,g(s+40,k),this.mem.setUint8(s+48,1)}catch(a){s=this._inst.exports.getsp()>>>0,g(s+40,a),this.mem.setUint8(s+48,0)}},"syscall/js.valueLength":s=>{s>>>=0,J(s+16,parseInt(p(s+8).length))},"syscall/js.valuePrepareString":s=>{s>>>=0;const a=H.encode(String(p(s+8)));g(s+16,a),J(s+24,a.length)},"syscall/js.valueLoadString":s=>{s>>>=0;const a=p(s+8);v(s+16).set(a)},"syscall/js.valueInstanceOf":s=>{s>>>=0,this.mem.setUint8(s+24,p(s+8)instanceof p(s+16)?1:0)},"syscall/js.copyBytesToGo":s=>{s>>>=0;const a=v(s+8),b=p(s+32);if(!(b instanceof Uint8Array||b instanceof Uint8ClampedArray)){this.mem.setUint8(s+48,0);return}const k=b.subarray(0,a.length);a.set(k),J(s+40,k.length),this.mem.setUint8(s+48,1)},"syscall/js.copyBytesToJS":s=>{s>>>=0;const a=p(s+8),b=v(s+16);if(!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)){this.mem.setUint8(s+48,0);return}const k=b.subarray(0,a.length);a.set(k),J(s+40,k.length),this.mem.setUint8(s+48,1)},debug:s=>{console.log(s)}}}}run(J){return ee(this,null,function*(){if(!(J instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=J,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,z,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[z,5],[this,6]]),this._idPool=[],this.exited=!1;let y=4096;const p=s=>{const a=y,b=H.encode(s+"\0");return new Uint8Array(this.mem.buffer,y,b.length).set(b),y+=b.length,y%8!==0&&(y+=8-y%8),a},g=this.argv.length,v=[];this.argv.forEach(s=>{v.push(p(s))}),v.push(0),Object.keys(this.env).sort().forEach(s=>{v.push(p(`${s}=${this.env[s]}`))}),v.push(0);const R=y;if(v.forEach(s=>{this.mem.setUint32(y,s,!0),this.mem.setUint32(y+4,0,!0),y+=8}),y>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(g,R),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(J){const y=this;return function(){const p={id:J,this:this,args:arguments};return y._pendingEvent=p,y._resume(),p.result}}}})(),ie=({data:F})=>{let H=new TextDecoder,ne=z.fs,J="";ne.writeSync=(P,R)=>{if(P===1)L(R);else if(P===2){J+=H.decode(R);let W=J.split(`
`);W.length>1&&console.log(W.slice(0,-1).join(`
`)),J=W[W.length-1]}else throw new Error("Bad write");return R.length};let y=[],p,g=0;ie=({data:P})=>{P.length>0&&(y.push(P),p&&p())},ne.read=(P,R,W,s,a,b)=>{if(P!==0||W!==0||s!==R.length||a!==null)throw new Error("Bad read");if(y.length===0){p=()=>ne.read(P,R,W,s,a,b);return}let k=y[0],I=Math.max(0,Math.min(s,k.length-g));R.set(k.subarray(g,g+I),W),g+=I,g===k.length&&(y.shift(),g=0),b(null,I)};let v=new z.Go;v.argv=["","--service=0.18.7"],oe(F,v).then(P=>{L(null),v.run(P)},P=>{L(P)})};function oe(F,H){return ee(this,null,function*(){if(F instanceof WebAssembly.Module)return WebAssembly.instantiate(F,H.importObject);const ne=yield fetch(F);if(!ne.ok)throw new Error(`Failed to download ${JSON.stringify(F)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(ne.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(ne,H.importObject)).instance;const J=yield ne.arrayBuffer();return(yield WebAssembly.instantiate(J,H.importObject)).instance})}return F=>ie(F)})(L=>E.onmessage({data:L}));E={onmessage:null,postMessage:L=>setTimeout(()=>V({data:L})),terminate(){}}}let S,N;const x=new Promise((V,L)=>{S=V,N=L});E.onmessage=({data:V})=>{E.onmessage=({data:L})=>B(L),V?N(V):S()},E.postMessage(l||new URL(n,location.href).toString());let{readFromStdout:B,service:j}=Ht({writeToStdin(V){E.postMessage(V)},isSync:!1,hasFS:!1,esbuild:A});yield x,ot={build:V=>new Promise((L,ee)=>j.buildOrContext({callName:"build",refs:null,options:V,isTTY:!1,defaultWD:"/",callback:(ie,z)=>ie?ee(ie):L(z)})),context:V=>new Promise((L,ee)=>j.buildOrContext({callName:"context",refs:null,options:V,isTTY:!1,defaultWD:"/",callback:(ie,z)=>ie?ee(ie):L(z)})),transform:(V,L)=>new Promise((ee,ie)=>j.transform({callName:"transform",refs:null,input:V,options:L||{},isTTY:!1,fs:{readFile(z,oe){oe(new Error("Internal error"),null)},writeFile(z,oe){oe(null)}},callback:(z,oe)=>z?ie(z):ee(oe)})),formatMessages:(V,L)=>new Promise((ee,ie)=>j.formatMessages({callName:"formatMessages",refs:null,messages:V,options:L,callback:(z,oe)=>z?ie(z):ee(oe)})),analyzeMetafile:(V,L)=>new Promise((ee,ie)=>j.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof V=="string"?V:JSON.stringify(V),options:L,callback:(z,oe)=>z?ie(z):ee(oe)}))}}),cn=A})(i)})(Mt);var Vt=Mt.exports;function _e(i){if(typeof i!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(i))}function Et(i,t){for(var e="",r=0,c=-1,d=0,f,h=0;h<=i.length;++h){if(h<i.length)f=i.charCodeAt(h);else{if(f===47)break;f=47}if(f===47){if(!(c===h-1||d===1))if(c!==h-1&&d===2){if(e.length<2||r!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){var w=e.lastIndexOf("/");if(w!==e.length-1){w===-1?(e="",r=0):(e=e.slice(0,w),r=e.length-1-e.lastIndexOf("/")),c=h,d=0;continue}}else if(e.length===2||e.length===1){e="",r=0,c=h,d=0;continue}}t&&(e.length>0?e+="/..":e="..",r=2)}else e.length>0?e+="/"+i.slice(c+1,h):e=i.slice(c+1,h),r=h-c-1;c=h,d=0}else f===46&&d!==-1?++d:d=-1}return e}function Ar(i,t){var e=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return e?e===t.root?e+r:e+i+r:r}var Le={resolve:function(){for(var t="",e=!1,r,c=arguments.length-1;c>=-1&&!e;c--){var d;c>=0?d=arguments[c]:(r===void 0&&(r=process.cwd()),d=r),_e(d),d.length!==0&&(t=d+"/"+t,e=d.charCodeAt(0)===47)}return t=Et(t,!e),e?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(_e(t),t.length===0)return".";var e=t.charCodeAt(0)===47,r=t.charCodeAt(t.length-1)===47;return t=Et(t,!e),t.length===0&&!e&&(t="."),t.length>0&&r&&(t+="/"),e?"/"+t:t},isAbsolute:function(t){return _e(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,e=0;e<arguments.length;++e){var r=arguments[e];_e(r),r.length>0&&(t===void 0?t=r:t+="/"+r)}return t===void 0?".":Le.normalize(t)},relative:function(t,e){if(_e(t),_e(e),t===e||(t=Le.resolve(t),e=Le.resolve(e),t===e))return"";for(var r=1;r<t.length&&t.charCodeAt(r)===47;++r);for(var c=t.length,d=c-r,f=1;f<e.length&&e.charCodeAt(f)===47;++f);for(var h=e.length,w=h-f,T=d<w?d:w,A=-1,C=0;C<=T;++C){if(C===T){if(w>T){if(e.charCodeAt(f+C)===47)return e.slice(f+C+1);if(C===0)return e.slice(f+C)}else d>T&&(t.charCodeAt(r+C)===47?A=C:C===0&&(A=0));break}var $=t.charCodeAt(r+C),G=e.charCodeAt(f+C);if($!==G)break;$===47&&(A=C)}var U="";for(C=r+A+1;C<=c;++C)(C===c||t.charCodeAt(C)===47)&&(U.length===0?U+="..":U+="/..");return U.length>0?U+e.slice(f+A):(f+=A,e.charCodeAt(f)===47&&++f,e.slice(f))},_makeLong:function(t){return t},dirname:function(t){if(_e(t),t.length===0)return".";for(var e=t.charCodeAt(0),r=e===47,c=-1,d=!0,f=t.length-1;f>=1;--f)if(e=t.charCodeAt(f),e===47){if(!d){c=f;break}}else d=!1;return c===-1?r?"/":".":r&&c===1?"//":t.slice(0,c)},basename:function(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');_e(t);var r=0,c=-1,d=!0,f;if(e!==void 0&&e.length>0&&e.length<=t.length){if(e.length===t.length&&e===t)return"";var h=e.length-1,w=-1;for(f=t.length-1;f>=0;--f){var T=t.charCodeAt(f);if(T===47){if(!d){r=f+1;break}}else w===-1&&(d=!1,w=f+1),h>=0&&(T===e.charCodeAt(h)?--h===-1&&(c=f):(h=-1,c=w))}return r===c?c=w:c===-1&&(c=t.length),t.slice(r,c)}else{for(f=t.length-1;f>=0;--f)if(t.charCodeAt(f)===47){if(!d){r=f+1;break}}else c===-1&&(d=!1,c=f+1);return c===-1?"":t.slice(r,c)}},extname:function(t){_e(t);for(var e=-1,r=0,c=-1,d=!0,f=0,h=t.length-1;h>=0;--h){var w=t.charCodeAt(h);if(w===47){if(!d){r=h+1;break}continue}c===-1&&(d=!1,c=h+1),w===46?e===-1?e=h:f!==1&&(f=1):e!==-1&&(f=-1)}return e===-1||c===-1||f===0||f===1&&e===c-1&&e===r+1?"":t.slice(e,c)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return Ar("/",t)},parse:function(t){_e(t);var e={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return e;var r=t.charCodeAt(0),c=r===47,d;c?(e.root="/",d=1):d=0;for(var f=-1,h=0,w=-1,T=!0,A=t.length-1,C=0;A>=d;--A){if(r=t.charCodeAt(A),r===47){if(!T){h=A+1;break}continue}w===-1&&(T=!1,w=A+1),r===46?f===-1?f=A:C!==1&&(C=1):f!==-1&&(C=-1)}return f===-1||w===-1||C===0||C===1&&f===w-1&&f===h+1?w!==-1&&(h===0&&c?e.base=e.name=t.slice(1,w):e.base=e.name=t.slice(h,w)):(h===0&&c?(e.name=t.slice(1,f),e.base=t.slice(1,w)):(e.name=t.slice(h,f),e.base=t.slice(h,w)),e.ext=t.slice(f,w)),h>0?e.dir=t.slice(0,h-1):c&&(e.dir="/"),e},sep:"/",delimiter:":",win32:null,posix:null};Le.posix=Le;var kt=Le;let rt=!1,ct=null;const Oe={},Lt=async()=>(ct||(ct=Vt.initialize({wasmURL:"https://unpkg.com/esbuild-wasm@0.18.7/esbuild.wasm"}).then(()=>(rt=!0,console.log("ESBuild initialized successfully"),rt)).catch(i=>{if(i instanceof Error&&i.message.includes("initialize")&&i.message.includes("once"))return console.warn("ESBuild initialize called multiple times; suppressing error"),rt=!0,rt;throw console.error("Failed to initialize ESBuild:",i),i})),ct),Or=async({entryPoint:i,content:t,options:e})=>{await Lt();try{Oe[i]={contents:t,loader:i.endsWith(".jsx")||i.endsWith(".tsx")?"jsx":i.endsWith(".css")?"css":"js"};const r={name:"css-inject",setup(f){f.onLoad({filter:/\.css$/,namespace:"virtual-fs"},async h=>{console.log("[css-inject] Handling",h.path,"in namespace",h.namespace);const w=Oe[h.path];if(!w)throw new Error(`CSS file not found in virtual filesystem: ${h.path}`);const T=w.contents,A=`injected-style-${h.path.replace(/[^a-zA-Z0-9]/g,"-")}`;return{contents:`
              // CSS module: ${h.path}
              (function() {
                if (typeof document !== 'undefined') {
                  const existingStyle = document.getElementById('${A}');
                  if (existingStyle) existingStyle.remove();
                  const style = document.createElement('style');
                  style.id = '${A}';
                  style.textContent = ${JSON.stringify(T)};
                  document.head.appendChild(style);
                }
              })();
              export default {};
            `,loader:"js"}})}},c={name:"virtual-file-system",setup(f){f.onResolve({filter:new RegExp(`^${i}$`)},h=>({path:h.path,namespace:"virtual-fs"})),f.onResolve({filter:/^\.+\//,namespace:"virtual-fs"},h=>{const w=kt.posix.join(kt.posix.dirname(h.importer),h.path);return console.log(`Resolved ${h.path} from ${h.importer} to ${w}`),w.endsWith(".css")||Oe[w]?{path:w,namespace:"virtual-fs"}:{path:`https://unpkg.com/${w}`,namespace:"http-url"}}),(!e.external||!e.external.includes("react"))&&f.onResolve({filter:/^react$/,namespace:"virtual-fs"},()=>({path:"https://esm.sh/react@18.3.1",namespace:"http-url"})),(!e.external||!e.external.includes("react-dom"))&&(f.onResolve({filter:/^react-dom$/,namespace:"virtual-fs"},()=>({path:"https://esm.sh/react-dom@18.3.1",namespace:"http-url"})),f.onResolve({filter:/^react-dom\/client$/,namespace:"virtual-fs"},()=>({path:"https://esm.sh/react-dom@18.3.1/client",namespace:"http-url"}))),f.onResolve({filter:/.*/,namespace:"virtual-fs"},h=>({path:`https://unpkg.com/${h.path}`,namespace:"http-url"})),f.onResolve({filter:/.*/,namespace:"http-url"},h=>{if(!h.path.startsWith(".")&&!h.path.startsWith("/"))return{path:`https://unpkg.com/${h.path}`,namespace:"http-url"};const w=h.importer.endsWith("/")?h.importer:`${h.importer}/`;return{path:new URL(h.path,w).href,namespace:"http-url"}}),f.onLoad({filter:/.*/,namespace:"virtual-fs"},async h=>{if(Oe[h.path])return{contents:Oe[h.path].contents,loader:Oe[h.path].loader};if(h.path===i)return{contents:t,loader:i.endsWith(".jsx")||i.endsWith(".tsx")?"jsx":i.endsWith(".css")?"css":"js"};throw h.path.endsWith(".css")?new Error(`CSS file not found: ${h.path}. Make sure to add it to the virtual filesystem.`):new Error(`File not found in virtual filesystem: ${h.path}`)}),f.onLoad({filter:/.*/,namespace:"http-url"},async h=>{const T=await(await fetch(h.path)).text();let A="js";return h.path.match(/\.(jsx|tsx)$/)?A="jsx":h.path.endsWith(".css")?A="css":h.path.endsWith(".json")?A="json":h.path.endsWith(".txt")&&(A="text"),{contents:T,loader:A,resolveDir:h.path.replace(/\/[^/]+$/,"/")}})}},d=await Vt.build({entryPoints:[i],bundle:e.bundle!==void 0?e.bundle:!0,minify:e.minify!==void 0?e.minify:!1,format:e.format||"iife",target:e.target||"es2015",jsxFactory:e.jsxFactory||"React.createElement",jsxFragment:e.jsxFragment||"React.Fragment",external:e.external||[],write:!1,plugins:[r,c],define:{"process.env.NODE_ENV":'"development"'}});return{code:d.outputFiles?d.outputFiles[0].text:"",error:null}}catch(r){return console.error("Build failed:",r),{code:"",error:r instanceof Error?r.message:String(r)}}},Ir=(i,t)=>{let e="js";i.match(/\.(jsx|tsx)$/)?e="jsx":i.endsWith(".css")?e="css":i.endsWith(".json")?e="json":i.endsWith(".txt")&&(e="text"),Oe[i]={contents:t,loader:e}},Br=i=>{try{const t=i.split(" ");if(t[0]!=="esbuild")return null;const e=t[1],r={bundle:!1,minify:!1,format:"iife",jsxFactory:"React.createElement",jsxFragment:"React.Fragment"};for(let c=2;c<t.length;c++){const d=t[c];if(d==="--bundle")r.bundle=!0;else if(d==="--minify")r.minify=!0;else if(d.startsWith("--format=")){const f=d.split("=")[1];r.format=f}else if(d.startsWith("--target="))r.target=d.split("=")[1];else if(d.startsWith("--jsx-factory="))r.jsxFactory=d.split("=")[1];else if(d.startsWith("--jsx-fragment="))r.jsxFragment=d.split("=")[1];else if(d.startsWith("--external:")){const f=d.split(":")[1].split(",");r.external||(r.external=[]),r.external.push(...f)}}return{entryPoint:e,content:"",options:r}}catch(t){return console.error("Failed to parse esbuild command:",t),null}},Fr=Object.freeze(Object.defineProperty({__proto__:null,addToVirtualFs:Ir,buildCode:Or,initializeEsbuild:Lt,parseEsbuildCommand:Br},Symbol.toStringTag,{value:"Module"}));function Yr(...i){return Tn(Cn(i))}export{pr as ActivityBar,gr as CommandPalette,kr as EditorArea,$r as IdeLayout,Er as PreviewPanel,Cr as SideBar,Rr as StatusBar,qr as VirtualFS,Ir as addToVirtualFs,Or as buildCode,Yr as cn,at as commands,Jr as default,Lt as initializeEsbuild,hr as loadShadowFolder,ht as mockFileSystem,Br as parseEsbuildCommand,he as useIdeStore};
