var _e=Object.defineProperty;var Oe=(t,o,s)=>o in t?_e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s;var $=(t,o,s)=>Oe(t,typeof o!="symbol"?o+"":o,s);import{n as oe,r as p,w as B,j as e,s as ae,l as E,v as ne,x as Te,o as ie,m as Me,R as j,q as Le,f as q,g as De}from"./index-CJgcV1CL.js";import{i as Fe,c as Ve,j as G,I as _,k as $e,l as Ue,n as He,o as Be,T as le,p as ce,q as T,r as M,B as de,s as Q}from"./MacroContext-Bl5Rj96v.js";import{B as O,M as qe}from"./badge-I-ewyvOv.js";import{S as Z}from"./scroll-area-D6LikggP.js";import{L as Ge}from"./label-Cp0f2X1Y.js";import{T as Je}from"./textarea-B__YgLqC.js";import{S as ze}from"./index-DSFeNM5b.js";import{R as We}from"./refresh-cw-DuWRXUjL.js";import"./monaco-editor-Dq6WuQlL.js";import"./index-DBuaNUt-.js";var D="Collapsible",[Ke,pe]=oe(D),[Xe,J]=Ke(D),ue=p.forwardRef((t,o)=>{const{__scopeCollapsible:s,open:a,defaultOpen:i,disabled:l,onOpenChange:r,...c}=t,[d,u]=B({prop:a,defaultProp:i??!1,onChange:r,caller:D});return e.jsx(Xe,{scope:s,disabled:l,contentId:ae(),open:d,onOpenToggle:p.useCallback(()=>u(x=>!x),[u]),children:e.jsx(E.div,{"data-state":W(d),"data-disabled":l?"":void 0,...c,ref:o})})});ue.displayName=D;var me="CollapsibleTrigger",ge=p.forwardRef((t,o)=>{const{__scopeCollapsible:s,...a}=t,i=J(me,s);return e.jsx(E.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":W(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...a,ref:o,onClick:ne(t.onClick,i.onOpenToggle)})});ge.displayName=me;var z="CollapsibleContent",he=p.forwardRef((t,o)=>{const{forceMount:s,...a}=t,i=J(z,t.__scopeCollapsible);return e.jsx(Te,{present:s||i.open,children:({present:l})=>e.jsx(Ye,{...a,ref:o,present:l})})});he.displayName=z;var Ye=p.forwardRef((t,o)=>{const{__scopeCollapsible:s,present:a,children:i,...l}=t,r=J(z,s),[c,d]=p.useState(a),u=p.useRef(null),x=ie(o,u),v=p.useRef(0),A=v.current,y=p.useRef(0),I=y.current,C=r.open||c,S=p.useRef(C),k=p.useRef(void 0);return p.useEffect(()=>{const h=requestAnimationFrame(()=>S.current=!1);return()=>cancelAnimationFrame(h)},[]),Me(()=>{const h=u.current;if(h){k.current=k.current||{transitionDuration:h.style.transitionDuration,animationName:h.style.animationName},h.style.transitionDuration="0s",h.style.animationName="none";const n=h.getBoundingClientRect();v.current=n.height,y.current=n.width,S.current||(h.style.transitionDuration=k.current.transitionDuration,h.style.animationName=k.current.animationName),d(a)}},[r.open,a]),e.jsx(E.div,{"data-state":W(r.open),"data-disabled":r.disabled?"":void 0,id:r.contentId,hidden:!C,...l,ref:x,style:{"--radix-collapsible-content-height":A?`${A}px`:void 0,"--radix-collapsible-content-width":I?`${I}px`:void 0,...t.style},children:C&&i})});function W(t){return t?"open":"closed"}var Qe=ue,Ze=ge,et=he,N="Accordion",tt=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[K,rt,st]=Le(N),[F,Tt]=oe(N,[st,pe]),X=pe(),fe=j.forwardRef((t,o)=>{const{type:s,...a}=t,i=a,l=a;return e.jsx(K.Provider,{scope:t.__scopeAccordion,children:s==="multiple"?e.jsx(it,{...l,ref:o}):e.jsx(nt,{...i,ref:o})})});fe.displayName=N;var[xe,ot]=F(N),[we,at]=F(N,{collapsible:!1}),nt=j.forwardRef((t,o)=>{const{value:s,defaultValue:a,onValueChange:i=()=>{},collapsible:l=!1,...r}=t,[c,d]=B({prop:s,defaultProp:a??"",onChange:i,caller:N});return e.jsx(xe,{scope:t.__scopeAccordion,value:j.useMemo(()=>c?[c]:[],[c]),onItemOpen:d,onItemClose:j.useCallback(()=>l&&d(""),[l,d]),children:e.jsx(we,{scope:t.__scopeAccordion,collapsible:l,children:e.jsx(be,{...r,ref:o})})})}),it=j.forwardRef((t,o)=>{const{value:s,defaultValue:a,onValueChange:i=()=>{},...l}=t,[r,c]=B({prop:s,defaultProp:a??[],onChange:i,caller:N}),d=j.useCallback(x=>c((v=[])=>[...v,x]),[c]),u=j.useCallback(x=>c((v=[])=>v.filter(A=>A!==x)),[c]);return e.jsx(xe,{scope:t.__scopeAccordion,value:r,onItemOpen:d,onItemClose:u,children:e.jsx(we,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(be,{...l,ref:o})})})}),[lt,V]=F(N),be=j.forwardRef((t,o)=>{const{__scopeAccordion:s,disabled:a,dir:i,orientation:l="vertical",...r}=t,c=j.useRef(null),d=ie(c,o),u=rt(s),v=Fe(i)==="ltr",A=ne(t.onKeyDown,y=>{var b;if(!tt.includes(y.key))return;const I=y.target,C=u().filter(R=>{var P;return!((P=R.ref.current)!=null&&P.disabled)}),S=C.findIndex(R=>R.ref.current===I),k=C.length;if(S===-1)return;y.preventDefault();let h=S;const n=0,g=k-1,w=()=>{h=S+1,h>g&&(h=n)},f=()=>{h=S-1,h<n&&(h=g)};switch(y.key){case"Home":h=n;break;case"End":h=g;break;case"ArrowRight":l==="horizontal"&&(v?w():f());break;case"ArrowDown":l==="vertical"&&w();break;case"ArrowLeft":l==="horizontal"&&(v?f():w());break;case"ArrowUp":l==="vertical"&&f();break}const m=h%k;(b=C[m].ref.current)==null||b.focus()});return e.jsx(lt,{scope:s,disabled:a,direction:i,orientation:l,children:e.jsx(K.Slot,{scope:s,children:e.jsx(E.div,{...r,"data-orientation":l,ref:d,onKeyDown:a?void 0:A})})})}),L="AccordionItem",[ct,Y]=F(L),ve=j.forwardRef((t,o)=>{const{__scopeAccordion:s,value:a,...i}=t,l=V(L,s),r=ot(L,s),c=X(s),d=ae(),u=a&&r.value.includes(a)||!1,x=l.disabled||t.disabled;return e.jsx(ct,{scope:s,open:u,disabled:x,triggerId:d,children:e.jsx(Qe,{"data-orientation":l.orientation,"data-state":Se(u),...c,...i,ref:o,disabled:x,open:u,onOpenChange:v=>{v?r.onItemOpen(a):r.onItemClose(a)}})})});ve.displayName=L;var je="AccordionHeader",ye=j.forwardRef((t,o)=>{const{__scopeAccordion:s,...a}=t,i=V(N,s),l=Y(je,s);return e.jsx(E.h3,{"data-orientation":i.orientation,"data-state":Se(l.open),"data-disabled":l.disabled?"":void 0,...a,ref:o})});ye.displayName=je;var U="AccordionTrigger",Ne=j.forwardRef((t,o)=>{const{__scopeAccordion:s,...a}=t,i=V(N,s),l=Y(U,s),r=at(U,s),c=X(s);return e.jsx(K.ItemSlot,{scope:s,children:e.jsx(Ze,{"aria-disabled":l.open&&!r.collapsible||void 0,"data-orientation":i.orientation,id:l.triggerId,...c,...a,ref:o})})});Ne.displayName=U;var Ce="AccordionContent",Ae=j.forwardRef((t,o)=>{const{__scopeAccordion:s,...a}=t,i=V(N,s),l=Y(Ce,s),r=X(s);return e.jsx(et,{role:"region","aria-labelledby":l.triggerId,"data-orientation":i.orientation,...r,...a,ref:o,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});Ae.displayName=Ce;function Se(t){return t?"open":"closed"}var dt=fe,pt=ve,ut=ye,ke=Ne,Ie=Ae;const mt=dt,Re=p.forwardRef(({className:t,...o},s)=>e.jsx(pt,{ref:s,className:q("border-b",t),...o}));Re.displayName="AccordionItem";const Ee=p.forwardRef(({className:t,children:o,...s},a)=>e.jsx(ut,{className:"flex",children:e.jsxs(ke,{ref:a,className:q("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...s,children:[o,e.jsx(Ve,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));Ee.displayName=ke.displayName;const Pe=p.forwardRef(({className:t,children:o,...s},a)=>e.jsx(Ie,{ref:a,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...s,children:e.jsx("div",{className:q("pb-4 pt-0",t),children:o})}));Pe.displayName=Ie.displayName;const gt=()=>e.jsxs("div",{className:"flex-1 overflow-auto p-4",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Getting Started with API Explorer"}),e.jsx("p",{className:"mb-4 text-gray-700",children:"The API Explorer allows you to browse and interact with available API components and their actions."}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Launching Apps"}),e.jsxs("p",{className:"mb-4 text-gray-700",children:["To view API components, ensure an application that exposes an API is running. You can start an app manually from the desktop, or programmatically using the Launch App API. For example: ",e.jsx("code",{className:"bg-gray-100 px-1 rounded",children:'launchApp("notepad")'})," will start Notepad and its APIs will appear here."]}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"How to use"}),e.jsxs("ol",{className:"list-decimal list-inside mb-4 space-y-2 text-gray-700",children:[e.jsx("li",{children:"Use the search bar on the left to find a component by name, type, or path."}),e.jsx("li",{children:"Click on a component to view its available actions."}),e.jsx("li",{children:"Fill in required parameters for the action in the form fields."}),e.jsxs("li",{children:["Click ",e.jsx("strong",{children:"Execute"})," to perform the action and see the response below."]}),e.jsx("li",{children:"View code examples in JavaScript or React to integrate API calls into your application."})]}),e.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Swagger UI"}),e.jsxs("p",{className:"text-gray-700 mb-4",children:["Switch to the ",e.jsx("strong",{children:"Swagger UI"}),' tab to see FastAPI-style documentation with interactive "Try it out" functionality.']}),e.jsxs("p",{className:"text-gray-700",children:["Use the ",e.jsx("strong",{children:"Refresh"})," button to reload the OpenAPI specification if the API changes."]})]}),H=({content:t,className:o=""})=>t?e.jsx("div",{className:`prose prose-sm max-w-none break-words overflow-hidden ${o}`,children:e.jsx(qe,{components:{h1:({children:s})=>e.jsx("h1",{className:"text-lg font-bold mb-2 break-words",children:s}),h2:({children:s})=>e.jsx("h2",{className:"text-base font-semibold mb-2 break-words",children:s}),h3:({children:s})=>e.jsx("h3",{className:"text-sm font-medium mb-1 break-words",children:s}),p:({children:s})=>e.jsx("p",{className:"text-sm mb-2 leading-relaxed break-words overflow-wrap-anywhere",children:s}),code:({children:s,inline:a})=>a?e.jsx("code",{className:"bg-gray-100 px-1 py-0.5 rounded text-xs font-mono break-all",children:s}):e.jsx("pre",{className:"bg-gray-100 p-2 rounded text-xs font-mono overflow-auto whitespace-pre-wrap break-words max-w-full",children:s}),ul:({children:s})=>e.jsx("ul",{className:"list-disc list-inside text-sm mb-2 space-y-1 break-words",children:s}),ol:({children:s})=>e.jsx("ol",{className:"list-decimal list-inside text-sm mb-2 space-y-1 break-words",children:s}),li:({children:s})=>e.jsx("li",{className:"text-sm break-words",children:s}),blockquote:({children:s})=>e.jsx("blockquote",{className:"border-l-4 border-gray-300 pl-4 italic text-sm break-words",children:s}),strong:({children:s})=>e.jsx("strong",{className:"font-semibold break-words",children:s}),em:({children:s})=>e.jsx("em",{className:"italic break-words",children:s})},children:t})}):null,ht=t=>{switch(t.type){case"number":return 1234;case"string":return"<replace this string>";case"text":return"<replace this text>";case"boolean":return!1;default:return"<replace this value>"}},ft=({parameter:t,value:o,onChange:s})=>{const a=r=>s(t.name,l(r.target.value)),i=r=>s(t.name,l(r.target.value)),l=r=>{if(t.enum)return r;switch(t.type){case"number":return r===""?"":Number(r);case"boolean":return r==="true";default:return r}};return e.jsxs("div",{className:"mb-4",children:["      ",e.jsxs(Ge,{htmlFor:t.name,className:"flex items-center gap-2",children:[t.name,t.required&&e.jsx(O,{variant:"outline",className:"text-xs",children:"Required"})]}),t.description&&e.jsx(H,{content:t.description,className:"mb-1 text-gray-500"}),t.enum?e.jsxs("select",{id:t.name,value:o!=null?o.toString():"",onChange:i,className:"mt-1 border rounded px-2 py-1",children:[e.jsx("option",{value:"",children:"Select"}),t.enum.map(r=>e.jsx("option",{value:r,children:r},r))]}):t.type==="number"?e.jsx(_,{id:t.name,type:"number",value:o!=null?o.toString():"",onChange:a,placeholder:"1234",className:"mt-1"}):t.type==="boolean"?e.jsxs("select",{id:t.name,value:o!=null?o.toString():"",onChange:i,className:"mt-1 border rounded px-2 py-1",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"true",children:"True"}),e.jsx("option",{value:"false",children:"False"})]}):t.type==="text"?e.jsx(Je,{id:t.name,value:o!=null?o.toString():"",onChange:r=>s(t.name,r.target.value),placeholder:"<replace this text>",className:"mt-1"}):t.type==="string"?e.jsx(_,{id:t.name,type:"text",value:o!=null?o.toString():"",onChange:a,placeholder:"<replace this string>",className:"mt-1"}):e.jsx(_,{id:t.name,type:"text",value:o!=null?o.toString():"",onChange:a,placeholder:`Enter ${t.name}`,className:"mt-1"})]})},xt=()=>{const{getComponents:t,executeAction:o}=G(),[s,a]=p.useState([]),[i,l]=p.useState(""),[r,c]=p.useState(null),[d,u]=p.useState({}),[x,v]=p.useState({}),[A,y]=p.useState({}),[I,C]=p.useState({});p.useEffect(()=>{const n=()=>{const w=t().filter(f=>{var m;return f.actions&&f.actions.length>0&&((m=f.state)==null?void 0:m.visible)!==!1});if(w.forEach(f=>{if(f.id==="onEvent"){const m=f.actions.find(b=>b.id==="waitForEvent");if(m!=null&&m.parameters){const b=m.parameters.find(R=>R.name==="eventId");b&&(b.enum=De.getEventNames())}}}),a(w),r){const f=w.find(m=>m.id===r.id);f&&c(f)}};n();const g=setInterval(n,2e3);return()=>clearInterval(g)},[t,r]);const S=(n,g)=>{u(w=>({...w,[n]:g}))},k=async n=>{y(g=>({...g,[n.id]:!0})),v(g=>({...g,[n.id]:null}));try{const g=Object.entries(d).filter(([f,m])=>m!==void 0&&m!=="").reduce((f,[m,b])=>({...f,[m]:b}),{}),w=await o(r.id,n.id,g);v(f=>({...f,[n.id]:w}))}catch(g){v(w=>({...w,[n.id]:{success:!1,error:g instanceof Error?g.message:String(g)}}))}finally{y(g=>({...g,[n.id]:!1}))}},h=s.filter(n=>{const g=i.toLowerCase();return[n.id,n.name,n.type,n.path].filter(Boolean).some(w=>w.toLowerCase().includes(g))});return e.jsxs("div",{className:"h-full flex bg-background text-foreground overflow-hidden",children:[e.jsxs("div",{className:"w-1/3 border-r p-4 flex flex-col min-w-0",children:[e.jsx(_,{placeholder:"Search components...",value:i,onChange:n=>l(n.target.value),className:"mb-4"}),e.jsxs(Z,{className:"flex-1",children:[h.map(n=>e.jsx($e,{className:`mb-2 cursor-pointer hover:bg-gray-50 ${r&&r.id===n.id?"border-primary":""}`,onClick:()=>{c(n),u({}),v({}),y({}),C({})},children:e.jsxs(Ue,{className:"py-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(He,{className:"text-sm",children:n.name||n.id}),e.jsxs(O,{variant:"outline",className:"text-xs",children:[n.actions.length," actions"]})]}),e.jsx(Be,{className:"text-xs text-gray-500",children:n.type})]})},n.id)),h.length===0&&e.jsx("div",{className:"text-center text-gray-500",children:"No components found"})]})]}),"      ",e.jsxs("div",{className:"flex-1 p-4 flex flex-col min-w-0 overflow-hidden",children:[!r&&e.jsx(gt,{}),r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 min-w-0",children:[e.jsx("h2",{className:"text-xl font-bold break-words",children:r.name||r.id}),e.jsxs("div",{className:"flex gap-2 mt-2 flex-wrap",children:[e.jsx(O,{children:r.type}),e.jsx(O,{variant:"outline",className:"break-all",children:r.path})]}),"              ",r.description&&e.jsx(H,{content:r.description,className:"mt-2 text-gray-500"}),"            "]}),e.jsx(Z,{className:"flex-1 min-w-0",children:e.jsx(mt,{type:"multiple",className:"space-y-2",children:r.actions.map(n=>{var f;const g=((f=n.parameters)==null?void 0:f.reduce((m,b)=>{const P=d[b.name]!==void 0&&d[b.name]!==""?d[b.name]:ht(b);return{...m,[b.name]:P}},{}))||{},w=I[n.id]||"js";return e.jsxs(Re,{value:n.id,className:"border rounded-md",children:[e.jsx(Ee,{className:"flex justify-between items-center p-4",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:n.name}),e.jsx("span",{className:"ml-2 text-xs text-gray-500",children:n.id})]})}),e.jsxs(Pe,{className:"p-4 border-t flex flex-col",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs(le,{value:w,onValueChange:m=>C(b=>({...b,[n.id]:m})),children:[e.jsxs(ce,{className:"flex justify-end space-x-2",children:[e.jsx(T,{value:"js",children:"JavaScript"}),e.jsx(T,{value:"react",children:"React"})]}),e.jsx(M,{value:"js",children:e.jsx("pre",{className:"language-js bg-gray-100 p-2 rounded overflow-auto text-left whitespace-pre",children:e.jsx("code",{children:`// JavaScript example
const result = await executeAction('${r.id}', '${n.id}', ${JSON.stringify(g,null,2)});
console.log(result);`})})}),e.jsx(M,{value:"react",children:e.jsx("pre",{className:"language-tsx bg-gray-100 p-2 rounded overflow-auto text-left whitespace-pre",children:e.jsx("code",{children:`// React example
import React from 'react';
import { useApi } from '@/api/hooks/useApi';

function MyComponent() {
  const { executeAction } = useApi();

  React.useEffect(() => {
    (async () => {
      const result = await executeAction('${r.id}', '${n.id}', ${JSON.stringify(g,null,2)});
      console.log(result);
    })();
  }, [executeAction]);

  return null;
}`})})})]}),"                        "]}),n.description&&e.jsx(H,{content:n.description,className:"mb-4 text-gray-500"}),n.parameters&&n.parameters.length>0&&e.jsx("div",{className:"mb-4",children:n.parameters.map(m=>e.jsx(ft,{parameter:m,value:d[m.name],onChange:S},m.name))}),e.jsx(de,{onClick:()=>k(n),disabled:A[n.id]||n.parameters&&n.parameters.some(m=>m.required&&(d[m.name]===void 0||d[m.name]==="")),children:A[n.id]?"Executing...":"Execute"}),x[n.id]!=null&&e.jsxs("div",{className:`mt-4 p-4 rounded-md ${x[n.id].success?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"} text-left`,children:[e.jsx("div",{className:"font-medium",children:x[n.id].success?"Success":"Error"}),x[n.id].error&&e.jsx("div",{className:"text-red-600 mt-1",children:x[n.id].error}),e.jsx("pre",{className:"mt-3 text-xs bg-gray-100 p-2 rounded overflow-auto text-left whitespace-pre",children:JSON.stringify(x[n.id],null,2)})]})]})]},n.id)})})})]})]})]})},wt=()=>{const t=G(),[o,s]=p.useState(null),a=()=>{if(t){const i=t.getOpenApiSpec();s(i)}};return p.useEffect(()=>{a()},[t]),{spec:o,refreshSpec:a}},ee=()=>{document.querySelectorAll(".swagger-ui .parameters-col_description").forEach(o=>{const s=o.querySelector("input, select, textarea");if(!s)return;const a=o.closest(".opblock");if(!a)return;const i=a.getAttribute("data-tag")||"",l=s.getAttribute("name")||"";if(i&&l){const r=`param-${i}-${l}`;s.setAttribute("id",r),o.querySelectorAll("label").forEach(d=>{d.setAttribute("for",r)})}})},te=()=>{document.querySelectorAll('.swagger-ui a[href^="#"]').forEach(o=>{o.addEventListener("click",s=>{const a=o.getAttribute("href");if(a&&a.startsWith("#")){s.preventDefault();const i=a.substring(1),l=document.getElementById(i);l&&l.scrollIntoView({behavior:"smooth"})}})})},bt=`
  /* Make ALL Swagger UI response preview text terminal green for JSON */
  .swagger-ui .microlight,
  .swagger-ui .microlight *,
  .swagger-ui pre.microlight,
  .swagger-ui pre.microlight *,
  .swagger-ui .response .microlight,
  .swagger-ui .response .microlight *,
  .swagger-ui .response .microlight code,
  .swagger-ui .response .microlight code *,
  .swagger-ui .highlight-code pre,
  .swagger-ui .highlight-code pre *,
  .swagger-ui .highlight-code code,
  .swagger-ui .highlight-code code * {
    color: #00ff00 !important; /* Terminal green */
    background: #222 !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 14px;
  }
  
  /* Prevent input field resets by fixing the id attributes */
  .swagger-ui input[id^="parameter"] {
    font-family: ui-monospace, monospace;
  }

  /* Better consistency in button styling */
  .swagger-ui .btn {
    font-family: inherit;
  }

  /* Improve readability */
  .swagger-ui .opblock .opblock-summary-description {
    text-align: right;
    padding-right: 10px;
  }

  /* Fix code block styling */
  .swagger-ui .highlight-code pre {
    font-size: 13px;
  }

  /* Fix response styling */
  .swagger-ui .responses-table .response-col_status {
    font-family: ui-monospace, monospace;
  }
  
  /* Preserve input values by preventing hidden inputs */
  .swagger-ui .parameters-container .parameters {
    display: block !important;
  }

  /* WORD WRAPPING AND OVERFLOW PREVENTION */
  
  /* Prevent horizontal overflow on the main container */
  .swagger-ui {
    overflow-x: hidden !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    max-width: 100% !important;
  }

  /* Ensure all text content wraps properly */
  .swagger-ui .opblock-description,
  .swagger-ui .opblock-summary-description,
  .swagger-ui .parameter__name,
  .swagger-ui .parameter__type,
  .swagger-ui .parameter__deprecated,
  .swagger-ui .parameter__in,
  .swagger-ui .renderedMarkdown,
  .swagger-ui .markdown p,
  .swagger-ui .markdown div,
  .swagger-ui .markdown span,
  .swagger-ui .info .description,
  .swagger-ui .info .title {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
    max-width: 100% !important;
  }

  /* Handle long URLs and code snippets */
  .swagger-ui .markdown code,
  .swagger-ui .parameter__name code,
  .swagger-ui .response-col_description code,
  .swagger-ui pre,
  .swagger-ui code {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    white-space: pre-wrap !important;
    word-break: break-all !important;
    max-width: 100% !important;
    overflow-x: auto !important;
  }

  /* Fix markdown content in descriptions */
  .swagger-ui .renderedMarkdown h1,
  .swagger-ui .renderedMarkdown h2,
  .swagger-ui .renderedMarkdown h3,
  .swagger-ui .renderedMarkdown h4,
  .swagger-ui .renderedMarkdown h5,
  .swagger-ui .renderedMarkdown h6 {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    max-width: 100% !important;
  }

  .swagger-ui .renderedMarkdown p,
  .swagger-ui .renderedMarkdown li,
  .swagger-ui .renderedMarkdown div {
    word-wrap: break-word !important;
    overflow-wrap: anywhere !important;
    hyphens: auto !important;
    max-width: 100% !important;
  }

  /* Handle JSON examples and responses */
  .swagger-ui .response-col_description pre,
  .swagger-ui .highlight-code,
  .swagger-ui .model-example pre,
  .swagger-ui .example pre {
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    word-break: break-all !important;
    max-width: 100% !important;
    overflow-x: auto !important;
  }

  /* Fix parameter tables */
  .swagger-ui .parameters-col_description,
  .swagger-ui .parameters-col_name {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    max-width: 300px !important;
    min-width: 0 !important;
  }

  /* Container overflow control */
  .swagger-ui .opblock-section,
  .swagger-ui .opblock-section-header,
  .swagger-ui .opblock-description-wrapper,
  .swagger-ui .parameters-container,
  .swagger-ui .responses-wrapper {
    overflow: hidden !important;
    min-width: 0 !important;
  }

  /* Ensure operation blocks don't overflow */
  .swagger-ui .opblock {
    overflow: hidden !important;
    word-wrap: break-word !important;
    max-width: 100% !important;
  }

  /* Fix schema descriptions */
  .swagger-ui .model-box .model-description,
  .swagger-ui .prop-type,
  .swagger-ui .prop-format {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    max-width: 100% !important;
  }

  /* Responsive table handling */
  .swagger-ui table {
    table-layout: fixed !important;
    width: 100% !important;
  }

  .swagger-ui table td,
  .swagger-ui table th {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
    max-width: 0 !important;
    overflow: hidden !important;
  }
`;let re=!1;function vt(t){if(re)return;re=!0;const o=window.fetch,s=window.XMLHttpRequest;window.fetch=async function(i,l){const r=i instanceof Request?i.url:String(i);return r.includes("/api/")?se(r,l,t()):o.apply(window,[i,l])};class a extends s{constructor(){super(...arguments);$(this,"_url","");$(this,"_method","")}open(r,c,d,u,x){return this._url=c.toString(),this._method=r,super.open(r,c,d,u,x)}send(r){if(this._url.includes("/api/")){se(this._url,{method:this._method,body:r},t()).then(c=>c.text()).then(c=>{Object.defineProperty(this,"status",{value:200,writable:!1}),Object.defineProperty(this,"statusText",{value:"OK",writable:!1}),Object.defineProperty(this,"responseText",{value:c,writable:!1}),Object.defineProperty(this,"response",{value:c,writable:!1}),Object.defineProperty(this,"readyState",{value:4,writable:!1});const d=new ProgressEvent("load",{lengthComputable:!0,loaded:c.length,total:c.length});this.onload&&this.onload.call(this,d),this.onreadystatechange&&this.onreadystatechange.call(this,d)}).catch(c=>{const d=JSON.stringify({error:c.message});Object.defineProperty(this,"status",{value:400,writable:!1}),Object.defineProperty(this,"statusText",{value:"Bad Request",writable:!1}),Object.defineProperty(this,"responseText",{value:d,writable:!1}),Object.defineProperty(this,"response",{value:d,writable:!1}),Object.defineProperty(this,"readyState",{value:4,writable:!1});const u=new ProgressEvent("error",{lengthComputable:!0,loaded:0,total:0});this.onerror&&this.onerror.call(this,u),this.onreadystatechange&&this.onreadystatechange.call(this,u)});return}return super.send(r)}}window.XMLHttpRequest=a}async function se(t,o,s){let a;const i=t.indexOf("/api/");if(i!==-1)a=t.substring(i+4);else return fetch(t,o);const l=a.split("/").filter(Boolean);if(l.length>=2){const r=l[0],c=l[1];let d={};if(o&&o.body)try{d=JSON.parse(o.body.toString())}catch{}try{const u=await s(r,c,d);return new Response(JSON.stringify(u),{status:200,headers:{"Content-Type":"application/json"}})}catch(u){return new Response(JSON.stringify({success:!1,error:u instanceof Error?u.message:String(u)}),{status:400,headers:{"Content-Type":"application/json"}})}}return fetch(t,o)}const jt=()=>{const{spec:t,refreshSpec:o}=wt(),{executeAction:s}=G(),a=p.useMemo(()=>t,[t]);p.useEffect(()=>{const r=document.createElement("style");return r.textContent=bt,document.head.appendChild(r),()=>{document.head.removeChild(r)}},[]);const i=j.useRef(null);p.useEffect(()=>{if(!i.current)return;const r=new MutationObserver(c=>{c.some(u=>u.addedNodes.length>0)&&(ee(),te())});return r.observe(i.current,{childList:!0,subtree:!0}),()=>r.disconnect()},[]),p.useEffect(()=>{vt(()=>s)},[s]),p.useEffect(()=>{const r=c=>{if(c.newURL.includes("/#/")){if(c.preventDefault(),c.stopPropagation(),window.history.replaceState){const d=window.location.href.split("#")[0];window.history.replaceState(null,"",d)}return!1}};return window.addEventListener("hashchange",r),()=>{window.removeEventListener("hashchange",r)}},[]);const l={docExpansion:"list",defaultModelsExpandDepth:1,deepLinking:!1,showExtensions:!0,showCommonExtensions:!0,displayRequestDuration:!0,tryItOutEnabled:!0,persistAuthorization:!0};return p.useEffect(()=>{if(t){const r=setTimeout(()=>{ee(),te()},500);return()=>clearTimeout(r)}},[t]),t?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"API Documentation"}),e.jsxs(de,{variant:"outline",size:"sm",onClick:o,title:"Refresh API documentation",children:[e.jsx(We,{className:"h-4 w-4 mr-2"}),"Refresh"]})]}),e.jsxs("div",{className:"flex-1 overflow-auto",id:"swagger-ui-container",ref:i,children:[" ",e.jsx(ze,{spec:a,...l,supportedSubmitMethods:["get","post","put","delete"],requestInterceptor:r=>(console.log("🔍 SWAGGER UI REQUEST INTERCEPTOR:",r),console.log("  - URL:",r.url),console.log("  - Method:",r.method),console.log("  - Body:",r.body),console.log("  - Headers:",r.headers),r),responseInterceptor:r=>(console.log("📨 SWAGGER UI RESPONSE INTERCEPTOR:",r),console.log("  - Status:",r.status),console.log("  - URL:",r.url),console.log("  - Body:",r.body),r)})]})]}):e.jsx("div",{className:"flex items-center justify-center h-full",children:e.jsx("p",{children:"Loading API documentation..."})})},yt=()=>{const[t,o]=p.useState("frontend");return e.jsx("div",{className:"h-full flex flex-col api-explorer-isolated",children:e.jsxs(le,{value:t,onValueChange:s=>o(s),className:"flex-1 flex flex-col",children:[e.jsxs(ce,{className:"w-full justify-start mb-4",children:[e.jsx(T,{value:"frontend",children:"Frontend Explorer"}),e.jsx(T,{value:"swagger",children:"Swagger UI (FastAPI Style)"})]}),e.jsx(M,{value:"swagger",className:"flex-1",children:e.jsx(jt,{})}),e.jsx(M,{value:"frontend",className:"flex-1",children:e.jsx(xt,{})})]})})},Mt={id:Q.id,manifest:Q,init:async()=>{console.log("API Explorer plugin initialized")},render:()=>e.jsx(yt,{})};export{Mt as default};
