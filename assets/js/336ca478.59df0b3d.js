"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9197],{32634:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(85893),r=s(11151);const i={sidebar_position:2},d="Design",o={id:"docs/fundamentals/design",title:"Design",description:"Schematic",source:"@site/content/docs/fundamentals/design.md",sourceDirName:"docs/fundamentals",slug:"/docs/fundamentals/design",permalink:"/docs/docs/fundamentals/design",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/fundamentals/design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Glossary",permalink:"/docs/docs/fundamentals/glossary"},next:{title:"Datalayer",permalink:"/docs/docs/fundamentals/datalayer_overview"}},c={},a=[{value:"Schematic",id:"schematic",level:2},{value:"Explanation",id:"explanation",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"design",children:"Design"}),"\n",(0,t.jsx)(n.h2,{id:"schematic",children:"Schematic"}),"\n",(0,t.jsxs)(n.p,{children:["Here is a schematic of the ",(0,t.jsx)(n.code,{children:"superduperdb"})," design."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(88797).Z+"",width:"3297",height:"2400"})}),"\n",(0,t.jsx)(n.h2,{id:"explanation",children:"Explanation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"superduperdb"})," expects data and components to be added/ updated from a range of client-side mechanisms: ",(0,t.jsx)(n.strong,{children:"scripts"}),", ",(0,t.jsx)(n.strong,{children:"apps"}),", ",(0,t.jsx)(n.strong,{children:"notebooks"})," or ",(0,t.jsx)(n.strong,{children:"third-party database clients"})," (possibly non-python)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Users and programs can add ",(0,t.jsx)(n.strong,{children:"components"})," (",(0,t.jsx)(n.strong,{children:"models"}),", data ",(0,t.jsx)(n.strong,{children:"encoders"}),", ",(0,t.jsx)(n.strong,{children:"vector-indexes"})," and more) from the client-side. These large items are stored in the ",(0,t.jsx)(n.strong,{children:"artifact-store"})," and are tracked via the ",(0,t.jsx)(n.strong,{children:"meta-data"})," store."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If data is inserted to the ",(0,t.jsx)(n.strong,{children:"databackend"})," the ",(0,t.jsx)(n.strong,{children:"change-data-capture (CDC)"})," component captures these changes as they stream in."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"(CDC)"})," triggers ",(0,t.jsx)(n.strong,{children:"work"})," to be performed in response to these changes, depending on which ",(0,t.jsx)(n.strong,{children:"components"})," are present in the system."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"work"})," is submitted to the ",(0,t.jsx)(n.strong,{children:"workers"})," via the ",(0,t.jsx)(n.strong,{children:"scheduler"}),". Together the ",(0,t.jsx)(n.strong,{children:"scheduler"})," and ",(0,t.jsx)(n.strong,{children:"workers"})," make up the ",(0,t.jsx)(n.strong,{children:"compute"})," layer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"workers"})," write their outputs back to the ",(0,t.jsx)(n.strong,{children:"databackend"})," and trained models to the ",(0,t.jsx)(n.strong,{children:"artifact-store"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"compute"}),", ",(0,t.jsx)(n.strong,{children:"databackend"}),", ",(0,t.jsx)(n.strong,{children:"metadata-store"}),", ",(0,t.jsx)(n.strong,{children:"artifact-store"})," collectively make up the ",(0,t.jsx)(n.strong,{children:"datalayer"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"datalayer"})," may be queried from client-side, including hybrid-queries or ",(0,t.jsx)(n.strong,{children:"compound-select"})," queries, which synthesizes classical ",(0,t.jsx)(n.strong,{children:"selects"})," with ",(0,t.jsx)(n.strong,{children:"vector-searches"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},88797:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/light-a62712fa65d77075618b2805c49a084a.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var t=s(67294);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);