import{c as V,r as a,w as Ce,j as e,n as je,s as H,l as _e,v as z,H as Ee,f as S}from"./index-B10m1NXo.js";import{L as M,aj as J,ak as Pe,al as Se,am as Ie,an as De,ao as Te,ap as Ae,aq as Me,ar as Re,as as ze,at as Le,au as Oe,av as $e,aw as Fe,ax as Ue,ay as Be,C as X,az as Ge,aA as He,k as Ke,B as P,af as q,aB as K,c as We,aC as W}from"./MacroContext-Cqy6Ckua.js";import{B as U,M as Ve}from"./badge-BdAIElHy.js";import{P as B}from"./play-BSW4ssqe.js";import{T as Je,P as Xe,D as qe}from"./trash-2-Bi2wBi6B.js";import{r as Ye}from"./index-BINemBrm.js";import{S as Qe}from"./square-BT9V-Ump.js";import{R as Ze,B as et}from"./rotate-ccw-BuG1Ki0W.js";import{S as tt}from"./save-Ds0ubDt-.js";import{F as nt}from"./file-text-C9qtO3oZ.js";import"./monaco-editor-Dq6WuQlL.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=V("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=V("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),rt=t=>{const n=()=>Date.now().toString()+Math.random().toString(36).substr(2,9),s=()=>t&&t.length>0?t.map(i=>({id:i.id||n(),type:i.type,content:i.content,output:"",executionCount:0})):[{id:n(),type:"code",content:`# Welcome to your Python notebook!
print("Hello, World!")`,output:"",executionCount:0}],[o,r]=a.useState(s()),[m,f]=a.useState(()=>{const i=s();return i.length>0?i[0].id:""}),[p,u]=a.useState("idle"),[y,b]=a.useState(1),[v,k]=a.useState(!1);a.useEffect(()=>{(async()=>{try{const l=await M.isPyodideReady();k(l),u(l?"idle":"disconnected")}catch(l){console.error("Error checking Pyodide status:",l),u("disconnected")}})()},[]),a.useEffect(()=>{if(t&&t.length>0){const i=t.map(l=>({id:l.id||n(),type:l.type,content:l.content,output:"",executionCount:0}));r(i),i.length>0&&f(i[i.length-1].id)}},[t]);const x=a.useCallback((i,l)=>{const d={id:n(),type:i,content:"",output:"",executionCount:0};r(c=>{if(l){const w=c.findIndex(A=>A.id===l),C=[...c];return C.splice(w+1,0,d),C}return[...c,d]}),f(d.id)},[]),E=a.useCallback((i,l)=>{r(d=>d.map(c=>c.id===i?{...c,content:l}:c))},[]),I=a.useCallback(i=>{r(l=>{const d=l.filter(c=>c.id!==i);return d.length===0?[{id:n(),type:"code",content:"",output:"",executionCount:0}]:d}),m===i&&r(l=>{const d=l.filter(c=>c.id!==i);return d.length>0&&f(d[0].id),d})},[m]),D=a.useCallback((i,l)=>{r(d=>d.map(c=>c.id===i?{...c,type:l,output:""}:c))},[]),N=a.useCallback(async i=>{const l=o.find(d=>d.id===i);if(l){if(l.type==="markdown"){r(d=>d.map(c=>c.id===i?{...c,output:l.content,executionCount:y}:c)),b(d=>d+1);return}if(l.content.trim()){r(d=>d.map(c=>c.id===i?{...c,isExecuting:!0,output:""}:c)),u("busy");try{if(!v){const w=await M.initPyodide();if(w.status==="success")k(!0),u("idle");else throw new Error(`Pyodide initialization failed: ${w.message}`)}const d=await M.executePython(l.content,!0);let c="";d.success?(d.stdout&&(c+=d.stdout),d.result!==void 0&&d.result!==null&&(c&&(c+=`
`),c+=String(d.result)),c||(c="(execution completed successfully)")):c=`Error: ${d.error||"Unknown error occurred"}`,r(w=>w.map(C=>C.id===i?{...C,isExecuting:!1,output:c,executionCount:y,hasError:!d.success}:C)),b(w=>w+1)}catch(d){const c=d instanceof Error?d.message:"Unknown error occurred";r(w=>w.map(C=>C.id===i?{...C,isExecuting:!1,output:`Error: ${c}`,hasError:!0}:C))}finally{u("idle")}}}},[o,y,v]),O=a.useCallback(async()=>{const i=o.filter(l=>l.content.trim());for(const l of i)await N(l.id)},[o,N]),$=a.useCallback(()=>{r(i=>i.map(l=>({...l,isExecuting:!1}))),u("idle")},[]),F=a.useCallback(async()=>{try{u("restarting");const i=await M.initPyodide();if(i.status==="success")k(!0),u("idle");else throw u("disconnected"),new Error(`Kernel restart failed: ${i.message}`);r(l=>l.map(d=>({...d,isExecuting:!1,output:"",executionCount:0,hasError:!1}))),b(1)}catch(i){console.error("Error restarting kernel:",i),u("disconnected")}},[]),T=a.useCallback(()=>{const i={cells:o.map(({isExecuting:C,hasError:A,..._})=>({..._,cell_type:_.type==="code"?"code":"markdown",source:_.content.split(`
`),outputs:_.type==="code"&&_.output?[{output_type:A?"error":"execute_result",data:A?void 0:{"text/plain":_.output},traceback:A?[_.output]:void 0,execution_count:_.executionCount}]:[],execution_count:_.type==="code"?_.executionCount:null})),metadata:{kernelspec:{display_name:"Python 3 (Pyodide)",language:"python",name:"python3"},language_info:{name:"python",version:"3.11.0"}},nbformat:4,nbformat_minor:4},l=JSON.stringify(i,null,2),d=new Blob([l],{type:"application/json"}),c=URL.createObjectURL(d),w=document.createElement("a");w.href=c,w.download="python-notebook.ipynb",w.click(),URL.revokeObjectURL(c)},[o]),h=a.useCallback(()=>{T()},[T]),j=o.some(i=>i.isExecuting);return{cells:o,selectedCellId:m,kernelStatus:p,isExecuting:j,isInitialized:v,addCell:x,updateCell:E,deleteCell:I,changeCellType:D,executeCell:N,runAllCells:O,stopAllExecution:$,restartKernel:F,saveNotebook:T,exportNotebook:h,selectCell:f}};var L="DropdownMenu",[at,Jt]=je(L,[J]),g=J(),[it,Y]=at(L),Q=t=>{const{__scopeDropdownMenu:n,children:s,dir:o,open:r,defaultOpen:m,onOpenChange:f,modal:p=!0}=t,u=g(n),y=a.useRef(null),[b,v]=Ce({prop:r,defaultProp:m??!1,onChange:f,caller:L});return e.jsx(it,{scope:n,triggerId:H(),triggerRef:y,contentId:H(),open:b,onOpenChange:v,onOpenToggle:a.useCallback(()=>v(k=>!k),[v]),modal:p,children:e.jsx(Pe,{...u,open:b,onOpenChange:v,dir:o,modal:p,children:s})})};Q.displayName=L;var Z="DropdownMenuTrigger",ee=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,disabled:o=!1,...r}=t,m=Y(Z,s),f=g(s);return e.jsx(Se,{asChild:!0,...f,children:e.jsx(_e.button,{type:"button",id:m.triggerId,"aria-haspopup":"menu","aria-expanded":m.open,"aria-controls":m.open?m.contentId:void 0,"data-state":m.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...r,ref:Ee(n,m.triggerRef),onPointerDown:z(t.onPointerDown,p=>{!o&&p.button===0&&p.ctrlKey===!1&&(m.onOpenToggle(),m.open||p.preventDefault())}),onKeyDown:z(t.onKeyDown,p=>{o||(["Enter"," "].includes(p.key)&&m.onOpenToggle(),p.key==="ArrowDown"&&m.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(p.key)&&p.preventDefault())})})})});ee.displayName=Z;var dt="DropdownMenuPortal",te=t=>{const{__scopeDropdownMenu:n,...s}=t,o=g(n);return e.jsx(Ie,{...o,...s})};te.displayName=dt;var ne="DropdownMenuContent",oe=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=Y(ne,s),m=g(s),f=a.useRef(!1);return e.jsx(De,{id:r.contentId,"aria-labelledby":r.triggerId,...m,...o,ref:n,onCloseAutoFocus:z(t.onCloseAutoFocus,p=>{var u;f.current||(u=r.triggerRef.current)==null||u.focus(),f.current=!1,p.preventDefault()}),onInteractOutside:z(t.onInteractOutside,p=>{const u=p.detail.originalEvent,y=u.button===0&&u.ctrlKey===!0,b=u.button===2||y;(!r.modal||b)&&(f.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});oe.displayName=ne;var lt="DropdownMenuGroup",ct=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Ae,{...r,...o,ref:n})});ct.displayName=lt;var pt="DropdownMenuLabel",se=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Me,{...r,...o,ref:n})});se.displayName=pt;var ut="DropdownMenuItem",re=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Te,{...r,...o,ref:n})});re.displayName=ut;var mt="DropdownMenuCheckboxItem",ae=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Re,{...r,...o,ref:n})});ae.displayName=mt;var ft="DropdownMenuRadioGroup",xt=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(ze,{...r,...o,ref:n})});xt.displayName=ft;var ht="DropdownMenuRadioItem",ie=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Le,{...r,...o,ref:n})});ie.displayName=ht;var yt="DropdownMenuItemIndicator",de=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Oe,{...r,...o,ref:n})});de.displayName=yt;var gt="DropdownMenuSeparator",le=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx($e,{...r,...o,ref:n})});le.displayName=gt;var bt="DropdownMenuArrow",vt=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Fe,{...r,...o,ref:n})});vt.displayName=bt;var wt="DropdownMenuSubTrigger",ce=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Ue,{...r,...o,ref:n})});ce.displayName=wt;var kt="DropdownMenuSubContent",pe=a.forwardRef((t,n)=>{const{__scopeDropdownMenu:s,...o}=t,r=g(s);return e.jsx(Be,{...r,...o,ref:n,style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});pe.displayName=kt;var Nt=Q,Ct=ee,jt=te,ue=oe,me=se,fe=re,xe=ae,he=ie,ye=de,ge=le,be=ce,ve=pe;const we=Nt,ke=Ct,_t=a.forwardRef(({className:t,inset:n,children:s,...o},r)=>e.jsxs(be,{ref:r,className:S("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",t),...o,children:[s,e.jsx(X,{className:"ml-auto h-4 w-4"})]}));_t.displayName=be.displayName;const Et=a.forwardRef(({className:t,...n},s)=>e.jsx(ve,{ref:s,className:S("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));Et.displayName=ve.displayName;const G=a.forwardRef(({className:t,sideOffset:n=4,...s},o)=>e.jsx(jt,{children:e.jsx(ue,{ref:o,sideOffset:n,className:S("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...s})}));G.displayName=ue.displayName;const R=a.forwardRef(({className:t,inset:n,...s},o)=>e.jsx(fe,{ref:o,className:S("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",t),...s}));R.displayName=fe.displayName;const Pt=a.forwardRef(({className:t,children:n,checked:s,...o},r)=>e.jsxs(xe,{ref:r,className:S("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:s,...o,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ye,{children:e.jsx(Ge,{className:"h-4 w-4"})})}),n]}));Pt.displayName=xe.displayName;const St=a.forwardRef(({className:t,children:n,...s},o)=>e.jsxs(he,{ref:o,className:S("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...s,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(ye,{children:e.jsx(He,{className:"h-2 w-2 fill-current"})})}),n]}));St.displayName=he.displayName;const It=a.forwardRef(({className:t,inset:n,...s},o)=>e.jsx(me,{ref:o,className:S("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",t),...s}));It.displayName=me.displayName;const Dt=a.forwardRef(({className:t,...n},s)=>e.jsx(ge,{ref:s,className:S("-mx-1 my-1 h-px bg-muted",t),...n}));Dt.displayName=ge.displayName;const Tt=({cell:t,onUpdate:n,onExecute:s,onDelete:o,onTypeChange:r,isSelected:m,onSelect:f})=>{const[p,u]=a.useState(!1),y=a.useRef(null);a.useEffect(()=>{p&&y.current&&(y.current.focus(),y.current.setSelectionRange(y.current.value.length,y.current.value.length))},[p]);const b=x=>{x.key==="Enter"&&(x.metaKey||x.ctrlKey)&&(x.preventDefault(),s(t.id),u(!1)),x.key==="Escape"&&u(!1)},v=x=>{const E=x.value.split(`
`).length,N=Math.max(3,Math.min(20,E));x.style.height="auto",x.style.height=Math.max(80,N*20)+"px"},k=()=>p?e.jsx("textarea",{ref:y,value:t.content,onChange:x=>{n(t.id,x.target.value),v(x.target)},onKeyDown:b,onBlur:()=>u(!1),className:"w-full resize-none border-none outline-none bg-transparent font-mono text-sm leading-relaxed",style:{minHeight:"80px",height:"auto"},placeholder:t.type==="code"?"Enter Python code...":"Enter markdown...",rows:Math.max(3,t.content.split(`
`).length)}):t.type==="code"?e.jsx("div",{className:"w-full min-h-[80px]",children:e.jsx("pre",{className:"font-mono text-sm whitespace-pre-wrap overflow-x-auto p-2 bg-gray-50 dark:bg-gray-900 rounded border",children:e.jsx("code",{className:"text-blue-600 dark:text-blue-400",children:t.content||"Click to edit..."})})}):e.jsx("div",{className:"prose prose-sm max-w-none",children:t.content?e.jsx(Ve,{remarkPlugins:[Ye],children:t.content}):e.jsx("span",{className:"text-muted-foreground italic",children:"Click to edit..."})});return e.jsx(Ke,{className:`notebook-cell group relative mb-2 transition-all duration-200 ${m?"ring-2 ring-blue-500":"hover:shadow-md"}`,onClick:()=>f(t.id),children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"notebook-cell-indicator flex flex-col items-center justify-start pt-4 pl-4 pr-2 min-w-[60px]",children:t.type==="code"?e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsxs(U,{variant:"outline",className:"text-xs",children:["[",t.executionCount||" ","]"]}),e.jsx(P,{size:"sm",variant:"ghost",onClick:x=>{x.stopPropagation(),s(t.id)},disabled:t.isExecuting,className:"w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(B,{className:"w-4 h-4"})})]}):e.jsx(U,{variant:"secondary",className:"text-xs",children:"MD"})}),e.jsxs("div",{className:"notebook-cell-content flex-1 p-4 pl-2",children:[e.jsx("div",{className:"min-h-[80px] cursor-text",onClick:x=>{x.stopPropagation(),u(!0)},children:k()}),t.output&&t.type==="code"&&e.jsx("div",{className:`notebook-cell-output mt-4 p-3 rounded-md border-l-4 ${t.hasError?"bg-red-50 dark:bg-red-900/20 border-red-500":"bg-gray-50 dark:bg-gray-900 border-green-500"}`,children:e.jsx("pre",{className:`text-sm whitespace-pre-wrap overflow-x-auto ${t.hasError?"text-red-700 dark:text-red-300":""}`,children:t.output})}),t.isExecuting&&e.jsxs("div",{className:"notebook-cell-loading mt-2 flex items-center space-x-2 text-sm text-muted-foreground",children:[e.jsx("div",{className:"w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Executing..."})]})]}),e.jsx("div",{className:"notebook-cell-actions flex items-start justify-end pt-4 pr-4",children:e.jsxs(we,{children:[e.jsx(ke,{asChild:!0,children:e.jsx(P,{size:"sm",variant:"ghost",className:"w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(ot,{className:"w-4 h-4"})})}),e.jsxs(G,{align:"end",className:"bg-white dark:bg-gray-800 border shadow-lg",children:[e.jsx(R,{onClick:()=>r(t.id,t.type==="code"?"markdown":"code"),children:t.type==="code"?e.jsxs(e.Fragment,{children:[e.jsx(st,{className:"w-4 h-4 mr-2"}),"To Markdown"]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{className:"w-4 h-4 mr-2"}),"To Code"]})}),e.jsxs(R,{onClick:()=>o(t.id),className:"text-red-600 focus:text-red-600",children:[e.jsx(Je,{className:"w-4 h-4 mr-2"}),"Delete Cell"]})]})]})})]})})},At=({onAddCell:t,onSave:n,onRunAll:s,onStopAll:o,onRestart:r,onExport:m,kernelStatus:f,isExecuting:p})=>{const u=()=>{switch(f){case"idle":return"bg-green-500";case"busy":return"bg-yellow-500";case"disconnected":return"bg-red-500";default:return"bg-gray-500"}};return e.jsx("div",{className:"notebook-toolbar border-b bg-white dark:bg-gray-900 px-4 py-3 sticky top-0 z-10",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"notebook-toolbar-title flex items-center space-x-2",children:[e.jsx("h1",{className:"text-xl font-semibold",children:"Notebook"}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("div",{className:`w-2 h-2 rounded-full ${u()}`}),e.jsx(U,{variant:"outline",className:"text-xs",children:"Python 3"})]})]}),e.jsxs("div",{className:"notebook-toolbar-actions flex items-center space-x-2",children:[e.jsxs(we,{children:[e.jsx(ke,{asChild:!0,children:e.jsxs(P,{size:"sm",variant:"outline",children:[e.jsx(Xe,{className:"w-4 h-4 mr-1"}),"Cell"]})}),e.jsxs(G,{className:"bg-white dark:bg-gray-800 border shadow-lg",children:[e.jsx(R,{onClick:()=>t("code"),children:"Code Cell"}),e.jsx(R,{onClick:()=>t("markdown"),children:"Markdown Cell"})]})]}),e.jsx(K,{orientation:"vertical",className:"h-6"}),e.jsxs(P,{size:"sm",variant:"outline",onClick:s,disabled:p,children:[e.jsx(B,{className:"w-4 h-4 mr-1"}),"Run All"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:o,disabled:!p,children:[e.jsx(Qe,{className:"w-4 h-4 mr-1"}),"Stop"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:r,children:[e.jsx(Ze,{className:"w-4 h-4 mr-1"}),"Restart"]}),e.jsx(K,{orientation:"vertical",className:"h-6"}),e.jsxs(P,{size:"sm",variant:"outline",onClick:n,children:[e.jsx(tt,{className:"w-4 h-4 mr-1"}),"Save"]}),e.jsxs(P,{size:"sm",variant:"outline",onClick:m,children:[e.jsx(qe,{className:"w-4 h-4 mr-1"}),"Export"]})]})]})})},Mt=({className:t="",initialCells:n})=>{const{cells:s,selectedCellId:o,kernelStatus:r,isExecuting:m,addCell:f,updateCell:p,deleteCell:u,changeCellType:y,executeCell:b,runAllCells:v,stopAllExecution:k,restartKernel:x,saveNotebook:E,exportNotebook:I,selectCell:D}=rt(n);return e.jsxs("div",{className:`notebook-container h-full flex flex-col bg-gray-50 dark:bg-gray-950 ${t}`,children:[e.jsx(At,{onAddCell:f,onSave:E,onRunAll:v,onStopAll:k,onRestart:x,onExport:I,kernelStatus:r,isExecuting:m}),e.jsxs("div",{className:"notebook-content flex-1 overflow-y-auto max-w-6xl mx-auto p-4 md:p-6 lg:p-8 w-full",children:[e.jsx("div",{className:"notebook-cells space-y-1",children:s.map(N=>e.jsx(Tt,{cell:N,onUpdate:p,onExecute:b,onDelete:u,onTypeChange:y,isSelected:o===N.id,onSelect:D},N.id))}),e.jsx("div",{className:"notebook-add-cell mt-6 flex justify-center",children:e.jsx("button",{onClick:()=>f("code"),className:"flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors",children:e.jsx("span",{children:"+ Add cell"})})})]})]})},Rt=[{id:"basic",name:"Basic Tests",icon:B,expanded:!0,cases:[{id:"hello-world",name:"Hello World",description:"Simple arithmetic and output",type:"code",code:`print("Hello from Python!")
2 + 2`},{id:"json-processing",name:"JSON Processing",description:"Test JSON manipulation",type:"code",code:`import json
data = {"message": "Hello from Python", "numbers": [1, 2, 3]}
json.dumps(data, indent=2)`},{id:"loops-variables",name:"Loops & Variables",description:"Test control flow",type:"code",code:`for i in range(5):
    print(f"Count: {i}")

result = sum(range(10))
print(f"Sum of 0-9: {result}")
result`}]},{id:"api-tests",name:"Desktop API Tests",icon:q,expanded:!0,cases:[{id:"api-verification",name:"API Verification",description:"Check if desktop API is available",type:"code",code:`# Simple Desktop API Verification Test
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

print("Event subscription test completed")`}]},{id:"documentation",name:"Documentation",icon:et,expanded:!1,cases:[{id:"getting-started",name:"Getting Started",description:"Introduction to the Python Notebook",type:"markdown",code:`# Python Notebook with Pyodide

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

Try the API tests in the sidebar to see what's available!`}]}],Ne=({category:t,testCase:n,level:s,selectedTestId:o,onCategoryToggle:r,onTestSelect:m})=>{const f=()=>{t&&r?r(t.id):n&&m&&m(n)};if(t){const p=t.icon;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center py-1 px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded",onClick:f,style:{paddingLeft:`${s*12+8}px`},children:[e.jsx("span",{className:"mr-1",children:t.expanded?e.jsx(We,{size:16}):e.jsx(X,{size:16})}),e.jsx(p,{size:16,className:"mr-2 text-blue-500"}),e.jsx("span",{className:"text-sm font-medium",children:t.name})]}),t.expanded&&e.jsx("div",{children:t.cases.map(u=>e.jsx(Ne,{testCase:u,level:s+1,selectedTestId:o,onTestSelect:m},u.id))})]})}if(n){const p=o===n.id;return e.jsxs("div",{className:`flex items-center py-1 px-2 cursor-pointer rounded transition-colors ${p?"bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100":"hover:bg-gray-100 dark:hover:bg-gray-800"}`,onClick:f,style:{paddingLeft:`${s*12+8}px`},children:[e.jsx(nt,{size:14,className:`mr-2 ${p?"text-blue-600 dark:text-blue-400":"text-gray-500"}`}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-sm truncate",children:n.name}),e.jsx("div",{className:"text-xs text-gray-500 truncate",children:n.description})]})]})}return null},zt=()=>{const t=[...Rt].sort((h,j)=>h.id==="documentation"?-1:j.id==="documentation"?1:0),[n,s]=a.useState(t),[o,r]=a.useState(280),[m,f]=a.useState(!1),[p,u]=a.useState(0),[y,b]=a.useState(0),[v,k]=a.useState(!1),[x,E]=a.useState("Not started"),[I,D]=a.useState(null),[N,O]=a.useState([{id:"welcome",type:"markdown",content:`# Welcome to Python Notebook

This is a Jupyter-style Python notebook powered by Pyodide. You can run Python code directly in your browser!

**First steps:**
1. Initialize Pyodide (if not already done)
2. Try running some Python code
3. Explore the test cases in the sidebar

Use the sidebar to load pre-built test cases and examples.`},{id:"init-cell",type:"code",content:`# Initialize Pyodide
print("Initializing Pyodide...")
# This will be handled by the notebook's execution system`}]);a.useEffect(()=>{const h=async()=>{try{const i=await M.isPyodideReady();k(i),E(i?"Pyodide ready!":"Pyodide not started")}catch(i){console.error("Error checking Pyodide status:",i),E("Status check failed")}};h();const j=setInterval(h,2e3);return()=>clearInterval(j)},[]);const $=h=>{s(j=>j.map(i=>i.id===h?{...i,expanded:!i.expanded}:i))},F=h=>{D(h.id),O([{id:`test-${h.id}-${Date.now()}`,type:h.type,content:h.code}])};a.useEffect(()=>{const h=i=>{if(!m)return;const l=i.clientX-p,d=Math.max(200,Math.min(500,y+l));r(d)},j=()=>{f(!1),document.body.style.cursor="",document.body.style.userSelect=""};return m&&(document.addEventListener("mousemove",h),document.addEventListener("mouseup",j),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",j)}},[m,p,y]);const T=h=>{f(!0),u(h.clientX),b(o),h.preventDefault()};return e.jsxs("div",{className:"flex h-full bg-white dark:bg-gray-900 overflow-hidden",children:[e.jsxs("div",{className:"flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col",style:{width:`${o}px`},children:[e.jsxs("div",{className:"p-3 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-gray-100",children:"Test Cases"}),e.jsxs("div",{className:"mt-2 flex items-center text-xs",children:[e.jsx("div",{className:`w-2 h-2 rounded-full mr-2 ${v?"bg-green-500":"bg-red-500"}`}),e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:x})]})]}),e.jsx("div",{className:"p-2 overflow-auto flex-1",children:n.map(h=>e.jsx(Ne,{category:h,level:0,selectedTestId:I,onCategoryToggle:$,onTestSelect:F},h.id))})]}),e.jsx("div",{className:"w-1 cursor-col-resize bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 transition-colors",onMouseDown:T}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(Mt,{className:"h-full",initialCells:N})})]})},Xt={id:W.id,manifest:W,init:async()=>{console.log("Python Notebook plugin initialized")},render:()=>e.jsx(zt,{}),onOpen:()=>{console.log("Python Notebook plugin opened")},onClose:()=>{console.log("Python Notebook plugin closed")}};export{Xt as default};
