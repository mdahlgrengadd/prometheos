import{c as O,r as a,w as Ce,j as e,n as je,s as K,l as _e,v as L,H as Ee,f as S}from"./index-B3VsASHN.js";import{J as R,ad as J,ae as Pe,af as Se,ag as Ie,ah as De,ai as Te,aj as Me,ak as Ae,al as Re,am as ze,an as Le,ao as Oe,ap as $e,aq as Fe,ar as Ue,as as He,C as q,at as Be,au as Ge,k as Ke,B as P,a9 as X,av as W,b as We,aw as V}from"./MacroContext-BqOkWMuI.js";import{B as H}from"./badge-xJCEbwvg.js";import{P as B}from"./play-DsUlnH6-.js";import{T as Ve,P as Je,D as qe}from"./trash-2-DAbXSUTp.js";import{a as Xe,S as Ye}from"./square-C5AhkejL.js";import{F as Qe}from"./file-text-C5wutG3W.js";import"./monaco-editor-Dq6WuQlL.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=O("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=O("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=O("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=O("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),ot=t=>{const n=()=>Date.now().toString()+Math.random().toString(36).substr(2,9),o=()=>t&&t.length>0?t.map(i=>({id:i.id||n(),type:i.type,content:i.content,output:"",executionCount:0})):[{id:n(),type:"code",content:`# Welcome to your Python notebook!
print("Hello, World!")`,output:"",executionCount:0}],[s,r]=a.useState(o()),[m,f]=a.useState(()=>{const i=o();return i.length>0?i[0].id:""}),[u,p]=a.useState("idle"),[y,b]=a.useState(1),[v,N]=a.useState(!1);a.useEffect(()=>{(async()=>{try{const d=await R.isPyodideReady();N(d),p(d?"idle":"disconnected")}catch(d){console.error("Error checking Pyodide status:",d),p("disconnected")}})()},[]),a.useEffect(()=>{if(t&&t.length>0){const i=t.map(d=>({id:d.id||n(),type:d.type,content:d.content,output:"",executionCount:0}));r(i),i.length>0&&f(i[i.length-1].id)}},[t]);const x=a.useCallback((i,d)=>{const l={id:n(),type:i,content:"",output:"",executionCount:0};r(c=>{if(d){const w=c.findIndex(A=>A.id===d),C=[...c];return C.splice(w+1,0,l),C}return[...c,l]}),f(l.id)},[]),I=a.useCallback((i,d)=>{r(l=>l.map(c=>c.id===i?{...c,content:d}:c))},[]),T=a.useCallback(i=>{r(d=>{const l=d.filter(c=>c.id!==i);return l.length===0?[{id:n(),type:"code",content:"",output:"",executionCount:0}]:l}),m===i&&r(d=>{const l=d.filter(c=>c.id!==i);return l.length>0&&f(l[0].id),l})},[m]),M=a.useCallback((i,d)=>{r(l=>l.map(c=>c.id===i?{...c,type:d,output:""}:c))},[]),_=a.useCallback(async i=>{const d=s.find(l=>l.id===i);if(d){if(d.type==="markdown"){r(l=>l.map(c=>c.id===i?{...c,output:d.content,executionCount:y}:c)),b(l=>l+1);return}if(d.content.trim()){r(l=>l.map(c=>c.id===i?{...c,isExecuting:!0,output:""}:c)),p("busy");try{if(!v){const w=await R.initPyodide();if(w.status==="success")N(!0),p("idle");else throw new Error(`Pyodide initialization failed: ${w.message}`)}const l=await R.executePython(d.content,!0);let c="";l.success?(l.stdout&&(c+=l.stdout),l.result!==void 0&&l.result!==null&&(c&&(c+=`
`),c+=String(l.result)),c||(c="(execution completed successfully)")):c=`Error: ${l.error||"Unknown error occurred"}`,r(w=>w.map(C=>C.id===i?{...C,isExecuting:!1,output:c,executionCount:y,hasError:!l.success}:C)),b(w=>w+1)}catch(l){const c=l instanceof Error?l.message:"Unknown error occurred";r(w=>w.map(C=>C.id===i?{...C,isExecuting:!1,output:`Error: ${c}`,hasError:!0}:C))}finally{p("idle")}}}},[s,y,v]),D=a.useCallback(async()=>{const i=s.filter(d=>d.content.trim());for(const d of i)await _(d.id)},[s,_]),F=a.useCallback(()=>{r(i=>i.map(d=>({...d,isExecuting:!1}))),p("idle")},[]),U=a.useCallback(async()=>{try{p("restarting");const i=await R.initPyodide();if(i.status==="success")N(!0),p("idle");else throw p("disconnected"),new Error(`Kernel restart failed: ${i.message}`);r(d=>d.map(l=>({...l,isExecuting:!1,output:"",executionCount:0,hasError:!1}))),b(1)}catch(i){console.error("Error restarting kernel:",i),p("disconnected")}},[]),h=a.useCallback(()=>{const i={cells:s.map(({isExecuting:C,hasError:A,...j})=>({...j,cell_type:j.type==="code"?"code":"markdown",source:j.content.split(`
`),outputs:j.type==="code"&&j.output?[{output_type:A?"error":"execute_result",data:A?void 0:{"text/plain":j.output},traceback:A?[j.output]:void 0,execution_count:j.executionCount}]:[],execution_count:j.type==="code"?j.executionCount:null})),metadata:{kernelspec:{display_name:"Python 3 (Pyodide)",language:"python",name:"python3"},language_info:{name:"python",version:"3.11.0"}},nbformat:4,nbformat_minor:4},d=JSON.stringify(i,null,2),l=new Blob([d],{type:"application/json"}),c=URL.createObjectURL(l),w=document.createElement("a");w.href=c,w.download="python-notebook.ipynb",w.click(),URL.revokeObjectURL(c)},[s]),E=a.useCallback(()=>{h()},[h]),k=s.some(i=>i.isExecuting);return{cells:s,selectedCellId:m,kernelStatus:u,isExecuting:k,isInitialized:v,addCell:x,updateCell:I,deleteCell:T,changeCellType:M,executeCell:_,runAllCells:D,stopAllExecution:F,restartKernel:U,saveNotebook:h,exportNotebook:E,selectCell:f}};var $="DropdownMenu",[st,Bt]=je($,[J]),g=J(),[rt,Y]=st($),Q=t=>{const{__scopeDropdownMenu:n,children:o,dir:s,open:r,defaultOpen:m,onOpenChange:f,modal:u=!0}=t,p=g(n),y=a.useRef(null),[b,v]=Ce({prop:r,defaultProp:m??!1,onChange:f,caller:$});return e.jsx(rt,{scope:n,triggerId:K(),triggerRef:y,contentId:K(),open:b,onOpenChange:v,onOpenToggle:a.useCallback(()=>v(N=>!N),[v]),modal:u,children:e.jsx(Pe,{...p,open:b,onOpenChange:v,dir:s,modal:u,children:o})})};Q.displayName=$;var Z="DropdownMenuTrigger",ee=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,disabled:s=!1,...r}=t,m=Y(Z,o),f=g(o);return e.jsx(Se,{asChild:!0,...f,children:e.jsx(_e.button,{type:"button",id:m.triggerId,"aria-haspopup":"menu","aria-expanded":m.open,"aria-controls":m.open?m.contentId:void 0,"data-state":m.open?"open":"closed","data-disabled":s?"":void 0,disabled:s,...r,ref:Ee(n,m.triggerRef),onPointerDown:L(t.onPointerDown,u=>{!s&&u.button===0&&u.ctrlKey===!1&&(m.onOpenToggle(),m.open||u.preventDefault())}),onKeyDown:L(t.onKeyDown,u=>{s||(["Enter"," "].includes(u.key)&&m.onOpenToggle(),u.key==="ArrowDown"&&m.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(u.key)&&u.preventDefault())})})})});ee.displayName=Z;var at="DropdownMenuPortal",te=t=>{const{__scopeDropdownMenu:n,...o}=t,s=g(n);return e.jsx(Ie,{...s,...o})};te.displayName=at;var ne="DropdownMenuContent",oe=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=Y(ne,o),m=g(o),f=a.useRef(!1);return e.jsx(De,{id:r.contentId,"aria-labelledby":r.triggerId,...m,...s,ref:n,onCloseAutoFocus:L(t.onCloseAutoFocus,u=>{var p;f.current||(p=r.triggerRef.current)==null||p.focus(),f.current=!1,u.preventDefault()}),onInteractOutside:L(t.onInteractOutside,u=>{const p=u.detail.originalEvent,y=p.button===0&&p.ctrlKey===!0,b=p.button===2||y;(!r.modal||b)&&(f.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});oe.displayName=ne;var it="DropdownMenuGroup",lt=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Me,{...r,...s,ref:n})});lt.displayName=it;var dt="DropdownMenuLabel",se=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Ae,{...r,...s,ref:n})});se.displayName=dt;var ct="DropdownMenuItem",re=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Te,{...r,...s,ref:n})});re.displayName=ct;var pt="DropdownMenuCheckboxItem",ae=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Re,{...r,...s,ref:n})});ae.displayName=pt;var ut="DropdownMenuRadioGroup",mt=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(ze,{...r,...s,ref:n})});mt.displayName=ut;var ft="DropdownMenuRadioItem",ie=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Le,{...r,...s,ref:n})});ie.displayName=ft;var xt="DropdownMenuItemIndicator",le=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Oe,{...r,...s,ref:n})});le.displayName=xt;var ht="DropdownMenuSeparator",de=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx($e,{...r,...s,ref:n})});de.displayName=ht;var yt="DropdownMenuArrow",gt=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Fe,{...r,...s,ref:n})});gt.displayName=yt;var bt="DropdownMenuSubTrigger",ce=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(Ue,{...r,...s,ref:n})});ce.displayName=bt;var vt="DropdownMenuSubContent",pe=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:o,...s}=t,r=g(o);return e.jsx(He,{...r,...s,ref:n,style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});pe.displayName=vt;var wt=Q,kt=ee,Nt=te,ue=oe,me=se,fe=re,xe=ae,he=ie,ye=le,ge=de,be=ce,ve=pe;const we=wt,ke=kt,Ct=a.forwardRef(({className:t,inset:n,children:o,...s},r)=>e.jsxs(be,{ref:r,className:S("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",t),...s,children:[o,e.jsx(q,{className:"ml-auto h-4 w-4"})]}));Ct.displayName=be.displayName;const jt=a.forwardRef(({className:t,...n},o)=>e.jsx(ve,{ref:o,className:S("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));jt.displayName=ve.displayName;const G=a.forwardRef(({className:t,sideOffset:n=4,...o},s)=>e.jsx(Nt,{children:e.jsx(ue,{ref:s,sideOffset:n,className:S("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...o})}));G.displayName=ue.displayName;const z=a.forwardRef(({className:t,inset:n,...o},s)=>e.jsx(fe,{ref:s,className:S("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",t),...o}));z.displayName=fe.displayName;const _t=a.forwardRef(({className:t,children:n,checked:o,...s},r)=>e.jsxs(xe,{ref:r,className:S("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:o,...s,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ye,{children:e.jsx(Be,{className:"h-4 w-4"})})}),n]}));_t.displayName=xe.displayName;const Et=a.forwardRef(({className:t,children:n,...o},s)=>e.jsxs(he,{ref:s,className:S("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ye,{children:e.jsx(Ge,{className:"h-2 w-2 fill-current"})})}),n]}));Et.displayName=he.displayName;const Pt=a.forwardRef(({className:t,inset:n,...o},s)=>e.jsx(me,{ref:s,className:S("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",t),...o}));Pt.displayName=me.displayName;const St=a.forwardRef(({className:t,...n},o)=>e.jsx(ge,{ref:o,className:S("-mx-1 my-1 h-px bg-muted",t),...n}));St.displayName=ge.displayName;const It=({cell:t,onUpdate:n,onExecute:o,onDelete:s,onTypeChange:r,isSelected:m,onSelect:f})=>{const[u,p]=a.useState(!1),y=a.useRef(null);a.useEffect(()=>{u&&y.current&&(y.current.focus(),y.current.setSelectionRange(y.current.value.length,y.current.value.length))},[u]);const b=x=>{x.key==="Enter"&&(x.metaKey||x.ctrlKey)&&(x.preventDefault(),o(t.id),p(!1)),x.key==="Escape"&&p(!1)},v=x=>{const I=x.value.split(`
`).length,_=Math.max(3,Math.min(20,I));x.style.height="auto",x.style.height=Math.max(80,_*20)+"px"},N=()=>u?e.jsx("textarea",{ref:y,value:t.content,onChange:x=>{n(t.id,x.target.value),v(x.target)},onKeyDown:b,onBlur:()=>p(!1),className:"w-full resize-none border-none outline-none bg-transparent font-mono text-sm leading-relaxed",style:{minHeight:"80px",height:"auto"},placeholder:t.type==="code"?"Enter Python code...":"Enter markdown...",rows:Math.max(3,t.content.split(`
`).length)}):t.type==="code"?e.jsx("div",{className:"w-full min-h-[80px]",children:e.jsx("pre",{className:"font-mono text-sm whitespace-pre-wrap overflow-x-auto p-2 bg-gray-50 dark:bg-gray-900 rounded border",children:e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:t.content||"Click to edit..."})})}):e.jsx("div",{className:"prose prose-sm max-w-none",children:t.content?e.jsx("div",{dangerouslySetInnerHTML:{__html:t.content.replace(/\n/g,"<br/>")}}):e.jsx("span",{className:"text-muted-foreground italic",children:"Click to edit..."})});return e.jsx(Ke,{className:`notebook-cell group relative mb-2 transition-all duration-200 ${m?"ring-2 ring-blue-500":"hover:shadow-md"}`,onClick:()=>f(t.id),children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"notebook-cell-indicator flex flex-col items-center justify-start pt-4 pl-4 pr-2 min-w-[60px]",children:t.type==="code"?e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsxs(H,{variant:"outline",className:"text-xs",children:["[",t.executionCount||" ","]"]}),e.jsx(P,{size:"sm",variant:"ghost",onClick:x=>{x.stopPropagation(),o(t.id)},disabled:t.isExecuting,className:"w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(B,{className:"w-4 h-4"})})]}):e.jsx(H,{variant:"secondary",className:"text-xs",children:"MD"})}),e.jsxs("div",{className:"notebook-cell-content flex-1 p-4 pl-2",children:[e.jsx("div",{className:"min-h-[80px] cursor-text",onClick:x=>{x.stopPropagation(),p(!0)},children:N()}),t.output&&t.type==="code"&&e.jsx("div",{className:`notebook-cell-output mt-4 p-3 rounded-md border-l-4 ${t.hasError?"bg-red-50 dark:bg-red-900/20 border-red-500":"bg-gray-50 dark:bg-gray-900 border-green-500"}`,children:e.jsx("pre",{className:`text-sm whitespace-pre-wrap overflow-x-auto ${t.hasError?"text-red-700 dark:text-red-300":""}`,children:t.output})}),t.isExecuting&&e.jsxs("div",{className:"notebook-cell-loading mt-2 flex items-center space-x-2 text-sm text-muted-foreground",children:[e.jsx("div",{className:"w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Executing..."})]})]}),e.jsx("div",{className:"notebook-cell-actions flex items-start justify-end pt-4 pr-4",children:e.jsxs(we,{children:[e.jsx(ke,{asChild:!0,children:e.jsx(P,{size:"sm",variant:"ghost",className:"w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(et,{className:"w-4 h-4"})})}),e.jsxs(G,{align:"end",className:"bg-white dark:bg-gray-800 border shadow-lg",children:[e.jsx(z,{onClick:()=>r(t.id,t.type==="code"?"markdown":"code"),children:t.type==="code"?e.jsxs(e.Fragment,{children:[e.jsx(nt,{className:"w-4 h-4 mr-2"}),"To Markdown"]}):e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"w-4 h-4 mr-2"}),"To Code"]})}),e.jsxs(z,{onClick:()=>s(t.id),className:"text-red-600 focus:text-red-600",children:[e.jsx(Ve,{className:"w-4 h-4 mr-2"}),"Delete Cell"]})]})]})})]})})},Dt=({onAddCell:t,onSave:n,onRunAll:o,onStopAll:s,onRestart:r,onExport:m,kernelStatus:f,isExecuting:u})=>{const p=()=>{switch(f){case"idle":return"bg-green-500";case"busy":return"bg-yellow-500";case"disconnected":return"bg-red-500";default:return"bg-gray-500"}};return e.jsx("div",{className:"notebook-toolbar border-b bg-white dark:bg-gray-900 px-4 py-3 sticky top-0 z-10",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"notebook-toolbar-title flex items-center space-x-2",children:[e.jsx("h1",{className:"text-xl font-semibold",children:"Notebook"}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${p()}`}),e.jsx(H,{variant:"outline",className:"text-xs",children:"Python 3"})]})]}),e.jsxs("div",{className:"notebook-toolbar-actions flex items-center space-x-2",children:[e.jsxs(we,{children:[e.jsx(ke,{asChild:!0,children:e.jsxs(P,{size:"sm",variant:"outline",children:[e.jsx(Je,{className:"w-4 h-4 mr-1"}),"Cell"]})}),e.jsxs(G,{className:"bg-white dark:bg-gray-800 border shadow-lg",children:[e.jsx(z,{onClick:()=>t("code"),children:"Code Cell"}),e.jsx(z,{onClick:()=>t("markdown"),children:"Markdown Cell"})]})]}),e.jsx(W,{orientation:"vertical",className:"h-6"}),e.jsxs(P,{size:"sm",variant:"outline",onClick:o,disabled:u,children:[e.jsx(B,{className:"w-4 h-4 mr-1"}),"Run All"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:s,disabled:!u,children:[e.jsx(Xe,{className:"w-4 h-4 mr-1"}),"Stop"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:r,children:[e.jsx(tt,{className:"w-4 h-4 mr-1"}),"Restart"]}),e.jsx(W,{orientation:"vertical",className:"h-6"}),e.jsxs(P,{size:"sm",variant:"outline",onClick:n,children:[e.jsx(Ye,{className:"w-4 h-4 mr-1"}),"Save"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:m,children:[e.jsx(qe,{className:"w-4 h-4 mr-1"}),"Export"]})]})]})})},Tt=({className:t="",initialCells:n})=>{const{cells:o,selectedCellId:s,kernelStatus:r,isExecuting:m,isInitialized:f,addCell:u,updateCell:p,deleteCell:y,changeCellType:b,executeCell:v,runAllCells:N,stopAllExecution:x,restartKernel:I,saveNotebook:T,exportNotebook:M,selectCell:_}=ot(n);return e.jsxs("div",{className:`notebook-container h-full flex flex-col bg-gray-50 dark:bg-gray-950 ${t}`,children:[e.jsx(Dt,{onAddCell:u,onSave:T,onRunAll:N,onStopAll:x,onRestart:I,onExport:M,kernelStatus:r,isExecuting:m}),e.jsxs("div",{className:"notebook-content flex-1 overflow-y-auto max-w-6xl mx-auto p-4 md:p-6 lg:p-8 w-full",children:[!f&&e.jsx("div",{className:"mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500 mr-3 animate-pulse"}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-yellow-800 dark:text-yellow-200",children:"Pyodide Initialization Required"}),e.jsx("p",{className:"text-sm text-yellow-700 dark:text-yellow-300 mt-1",children:"Run a code cell to initialize the Python kernel. This may take a moment on first load."})]})]})}),e.jsx("div",{className:"notebook-cells space-y-1",children:o.map(D=>e.jsx(It,{cell:D,onUpdate:p,onExecute:v,onDelete:y,onTypeChange:b,isSelected:s===D.id,onSelect:_},D.id))}),e.jsx("div",{className:"notebook-add-cell mt-6 flex justify-center",children:e.jsx("button",{onClick:()=>u("code"),className:"flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors",children:e.jsx("span",{children:"+ Add cell"})})})]})]})},Mt=[{id:"basic",name:"Basic Tests",icon:B,expanded:!0,cases:[{id:"hello-world",name:"Hello World",description:"Simple arithmetic and output",type:"code",code:`print("Hello from Python!")
2 + 2`},{id:"json-processing",name:"JSON Processing",description:"Test JSON manipulation",type:"code",code:`import json
data = {"message": "Hello from Python", "numbers": [1, 2, 3]}
json.dumps(data, indent=2)`},{id:"loops-variables",name:"Loops & Variables",description:"Test control flow",type:"code",code:`for i in range(5):
    print(f"Count: {i}")

result = sum(range(10))
print(f"Sum of 0-9: {result}")
result`}]},{id:"api-tests",name:"Desktop API Tests",icon:X,expanded:!0,cases:[{id:"api-verification",name:"API Verification",description:"Check if desktop API is available",type:"code",code:`# Simple Desktop API Verification Test
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
"Desktop API verification completed"`},{id:"api-component-listing",name:"Component Listing Test",description:"Test listing available desktop components",type:"code",code:`# Test 1: List Available Components
print("=== Component Listing Test ===")
print()

try:
    components = await desktop.api.list_components()
    comp_count = len(components) if hasattr(components, '__len__') else "unknown"
    print(f"✓ Found {comp_count} components")
    print(f"Components: {components}")
    print("✓ Component listing test passed")
except Exception as e:
    print(f"✗ Component listing failed: {e}")

print("=== Test Complete ===")
"Component listing test completed"`},{id:"api-event-emission",name:"Event Emission Test",description:"Test desktop event emission functionality",type:"code",code:`# Test 2: Event Emission
print("=== Event Emission Test ===")
print()

try:
    events_result = await desktop.events.emit("python_test_event", {
        "message": "Hello from Python!",
        "timestamp": "2025-05-27", 
        "test": True,
        "source": "event_emission_test"
    })
    print(f"✓ Event emission successful")
    print(f"Result: {events_result}")
    print("✓ Event emission test passed")
except Exception as e:
    print(f"✗ Event emission failed: {e}")

print("=== Test Complete ===")
"Event emission test completed"`},{id:"api-calculator-test",name:"Calculator API Test",description:"Test calculator component execution",type:"code",code:`# Test 3: Calculator API Execution
print("=== Calculator API Test ===")
print()

def check_calculator_response(result, operation, a, b):
    """Helper function to validate calculator API responses"""
    if isinstance(result, dict):
        # Check for success: false (lowercase)
        if result.get("success") is False:
            error_msg = result.get("error", "Unknown error")
            raise Exception(f"Calculator API returned failure: {error_msg}")
        # Check for Success: False (uppercase - legacy)
        elif result.get("Success") is False:
            error_msg = result.get("Error", "Unknown error")
            raise Exception(f"Calculator API returned failure: {error_msg}")
        # Extract the actual result value
        elif "data" in result:
            return result["data"]
        elif "Result" in result:
            return result["Result"]
        elif "result" in result:
            return result["result"]
        else:
            # If it's a dict but no clear result field, return the whole dict
            return result
    else:
        # If it's not a dict, assume it's the direct result
        return result

try:
    # Test addition
    print("Testing addition: 15 + 27...")
    add_result = await desktop.api.execute("calculator", "add", {"a": 15, "b": 27})
    print(f"Raw response: {add_result}")
    
    validated_add = check_calculator_response(add_result, "add", 15, 27)
    print(f"✓ Addition: 15 + 27 = {validated_add}")
    
    # Verify the result is correct
    if validated_add == 42:
        print("✓ Addition result is mathematically correct")
    else:
        print(f"⚠️  Addition result unexpected: got {validated_add}, expected 42")
    
    print()
    print("✓ Calculator API test passed - app is running and responsive")
    print("ℹ️  Note: Only addition is currently implemented in the calculator")
    
except Exception as e:
    print(f"✗ Calculator API test failed: {e}")
    print()
    print("Possible causes:")
    print("1. Calculator app is not currently running")
    print("2. Calculator plugin is not available")
    print("3. API communication error")
    print("4. Invalid operation or parameters")
    print()
    print("To fix: Try opening the Calculator app first, then run this test again")

print("=== Test Complete ===")
"Calculator API test completed"`},{id:"api-notification-test",name:"Notification System Test",description:"Test system notification functionality",type:"code",code:`# Test 4: System Notification
print("=== Notification System Test ===")
print()

try:
    system_result = await desktop.api.execute("launcher", "notify", {
        "message": "Python API test notification from notification test",
        "type": "sonner"
    })
    print(f"✓ Notification sent successfully")
    print(f"Result: {system_result}")
    print("✓ Check your screen for the notification!")
    print("✓ Notification system test passed")
except Exception as e:
    print(f"✗ Notification system test failed: {e}")

print("=== Test Complete ===")
"Notification system test completed"`},{id:"api-error-handling",name:"Error Handling Test",description:"Test API error handling and recovery",type:"code",code:`# Test 5: Error Handling
print("=== Error Handling Test ===")
print()

# Test with non-existent component
try:
    error_result = await desktop.api.execute("nonexistent_component", "fakeAction", {})
    print(f"Unexpected success: {error_result}")
    print("✗ Error handling test failed - should have thrown an error")
except Exception as e:
    print(f"✓ Correctly caught expected error: {e}")
    print("✓ Error handling working as expected")

# Test with invalid action
try:
    error_result = await desktop.api.execute("calculator", "invalid_operation", {"a": 1, "b": 2})
    print(f"Unexpected success: {error_result}")
    print("✗ Error handling test failed - should have thrown an error")
except Exception as e:
    print(f"✓ Correctly caught invalid action error: {e}")
    print("✓ Error handling working as expected")

print("=== Test Complete ===")
"Error handling test completed"`},{id:"api-comprehensive-suite",name:"Run All API Tests",description:"Execute all API tests in sequence",type:"code",code:`# Comprehensive API Bridge Test Suite
print("=== Running All Desktop API Tests ===")
print()

test_results = []

# Test 1: Component Listing
print("1. Testing component listing...")
try:
    components = await desktop.api.list_components()
    comp_count = len(components) if hasattr(components, '__len__') else "unknown"
    print(f"   ✓ Found {comp_count} components")
    test_results.append("Component Listing: PASS")
except Exception as e:
    print(f"   ✗ Failed: {e}")
    test_results.append("Component Listing: FAIL")
print()

# Test 2: Event Emission
print("2. Testing event emission...")
try:
    events_result = await desktop.events.emit("python_comprehensive_test", {
        "message": "Comprehensive test event",
        "timestamp": "2025-05-27",
        "test_suite": "comprehensive"
    })
    print(f"   ✓ Event emission successful")
    test_results.append("Event Emission: PASS")
except Exception as e:
    print(f"   ✗ Failed: {e}")
    test_results.append("Event Emission: FAIL")
print()

# Test 3: Calculator API
print("3. Testing calculator API...")
try:
    calc_result = await desktop.api.execute("calculator", "add", {"a": 25, "b": 17})
    print(f"   Raw response: {calc_result}")
    
    # Check for Success: False response
    if isinstance(calc_result, dict) and calc_result.get("Success") is False:
        error_msg = calc_result.get("Error", "Unknown error")
        raise Exception(f"Calculator not available: {error_msg}")
    
    # Extract the actual result
    if isinstance(calc_result, dict):
        actual_result = calc_result.get("Result") or calc_result.get("result") or calc_result
    else:
        actual_result = calc_result
    
    print(f"   ✓ Calculator: 25 + 17 = {actual_result}")
    if actual_result == 42:
        print(f"   ✓ Result is mathematically correct")
    test_results.append("Calculator API: PASS")
except Exception as e:
    print(f"   ✗ Failed: {e}")
    print(f"   (Calculator app may not be running)")
    test_results.append("Calculator API: FAIL")
print()

# Test 4: Notification System
print("4. Testing notification system...")
try:
    notif_result = await desktop.api.execute("launcher", "notify", {
        "message": "Comprehensive API test completed!",
        "type": "sonner"
    })
    print(f"   ✓ Notification sent successfully")
    test_results.append("Notification System: PASS")
except Exception as e:
    print(f"   ✗ Failed: {e}")
    test_results.append("Notification System: FAIL")
print()

# Test 5: Error Handling
print("5. Testing error handling...")
try:
    await desktop.api.execute("nonexistent", "fakeAction", {})
    print(f"   ✗ Error handling failed - should have thrown error")
    test_results.append("Error Handling: FAIL")
except Exception as e:
    print(f"   ✓ Correctly caught error: {type(e).__name__}")
    test_results.append("Error Handling: PASS")
print()

# Summary
print("=== Test Suite Summary ===")
for result in test_results:
    print(f"  {result}")

passed = len([r for r in test_results if "PASS" in r])
total = len(test_results)
print(f"\\nOverall: {passed}/{total} tests passed")

if passed == total:
    print("🎉 All tests passed! Desktop API is working correctly.")
else:
    print(f"⚠️  {total - passed} test(s) failed. Check individual results above.")

"Comprehensive API test suite completed"`},{id:"event-subscription",name:"Event Subscription",description:"Test Python event handling",type:"code",code:`# Test Event Subscription
print("Testing event subscription...")

# Define event handler
def handle_test_event(data):
    print(f"Received event: {data}")

# Subscribe to events
unsubscribe = desktop.events.subscribe("python_test_event", handle_test_event)
print("Subscribed to python_test_event")

# Emit a test event
desktop.events.emit("python_test_event", {"timestamp": "2025-05-27", "source": "Python"})

print("Event subscription test completed")`}]},{id:"documentation",name:"Documentation",icon:Ze,expanded:!1,cases:[{id:"getting-started",name:"Getting Started",description:"Introduction to the Python Notebook",type:"markdown",code:`# Python Notebook with Pyodide

Welcome to the Python Notebook! This is a Jupyter-style interface for running Python code directly in your browser using Pyodide.

## Features

- **Interactive Python Execution**: Run Python code directly in your browser
- **Desktop API Integration**: Access desktop functionality from Python
- **Event System**: Subscribe to and emit events between Python and the desktop
- **Multiple Cell Types**: Support for both code and markdown cells

## Getting Started

1. First, initialize Pyodide by running the initialization code
2. Try the basic examples in the sidebar
3. Explore the Desktop API integration features
4. Create your own experiments!

## Desktop API

The desktop API is available through the \`desktop\` object in Python:

- \`desktop.api\` - Access to desktop functionality
- \`desktop.events\` - Event subscription and emission

Try the API tests in the sidebar to see what's available!`}]}],Ne=({category:t,testCase:n,level:o,selectedTestId:s,onCategoryToggle:r,onTestSelect:m})=>{const f=()=>{t&&r?r(t.id):n&&m&&m(n)};if(t){const u=t.icon;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center py-1 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded",onClick:f,style:{paddingLeft:`${o*12+8}px`},children:[e.jsx("span",{className:"mr-1",children:t.expanded?e.jsx(We,{size:16}):e.jsx(q,{size:16})}),e.jsx(u,{size:16,className:"mr-2 text-blue-500"}),e.jsx("span",{className:"text-sm font-medium",children:t.name})]}),t.expanded&&e.jsx("div",{children:t.cases.map(p=>e.jsx(Ne,{testCase:p,level:o+1,selectedTestId:s,onTestSelect:m},p.id))})]})}if(n){const u=s===n.id;return e.jsxs("div",{className:`flex items-center py-1 px-2 cursor-pointer rounded transition-colors ${u?"bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,onClick:f,style:{paddingLeft:`${o*12+8}px`},children:[e.jsx(Qe,{size:14,className:`mr-2 ${u?"text-blue-600 dark:text-blue-400":"text-gray-500"}`}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm truncate",children:n.name}),e.jsx("div",{className:"text-xs text-gray-500 truncate",children:n.description})]})]})}return null},At=()=>{const[t,n]=a.useState(Mt),[o,s]=a.useState(280),[r,m]=a.useState(!1),[f,u]=a.useState(0),[p,y]=a.useState(0),[b,v]=a.useState(!1),[N,x]=a.useState("Not started"),[I,T]=a.useState(null),[M,_]=a.useState([{id:"welcome",type:"markdown",content:`# Welcome to Python Notebook

This is a Jupyter-style Python notebook powered by Pyodide. You can run Python code directly in your browser!

**First steps:**
1. Initialize Pyodide (if not already done)
2. Try running some Python code
3. Explore the test cases in the sidebar

Use the sidebar to load pre-built test cases and examples.`},{id:"init-cell",type:"code",content:`# Initialize Pyodide
print("Initializing Pyodide...")
# This will be handled by the notebook's execution system`}]);a.useEffect(()=>{const h=async()=>{try{const k=await R.isPyodideReady();v(k),x(k?"Pyodide ready!":"Pyodide not started")}catch(k){console.error("Error checking Pyodide status:",k),x("Status check failed")}};h();const E=setInterval(h,2e3);return()=>clearInterval(E)},[]);const D=h=>{n(E=>E.map(k=>k.id===h?{...k,expanded:!k.expanded}:k))},F=h=>{T(h.id),_([{id:`test-${h.id}-${Date.now()}`,type:h.type,content:h.code}])};a.useEffect(()=>{const h=k=>{if(!r)return;const i=k.clientX-f,d=Math.max(200,Math.min(500,p+i));s(d)},E=()=>{m(!1),document.body.style.cursor="",document.body.style.userSelect=""};return r&&(document.addEventListener("mousemove",h),document.addEventListener("mouseup",E),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",E)}},[r,f,p]);const U=h=>{m(!0),u(h.clientX),y(o),h.preventDefault()};return e.jsxs("div",{className:"flex h-full bg-white dark:bg-gray-900 overflow-hidden",children:[e.jsxs("div",{className:"flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col",style:{width:`${o}px`},children:[e.jsxs("div",{className:"p-3 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Test Cases"}),e.jsxs("div",{className:"mt-2 flex items-center text-xs",children:[e.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${b?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:N})]})]}),e.jsx("div",{className:"p-2 overflow-auto flex-1",children:t.map(h=>e.jsx(Ne,{category:h,level:0,selectedTestId:I,onCategoryToggle:D,onTestSelect:F},h.id))})]}),e.jsx("div",{className:"w-1 cursor-col-resize bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors",onMouseDown:U}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Tt,{className:"h-full",initialCells:M})})]})},Gt={id:V.id,manifest:V,init:async()=>{console.log("Python Notebook plugin initialized")},render:()=>e.jsx(At,{}),onOpen:()=>{console.log("Python Notebook plugin opened")},onClose:()=>{console.log("Python Notebook plugin closed")}};export{Gt as default};
