"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[3283],{23961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(85893),i=t(11151);const s={sidebar_position:24},r="Configuring models to ingest features from other models",d={id:"docs/walkthrough/linking_interdependent_models",title:"Configuring models to ingest features from other models",description:'Sometimes the outputs of one model should be "chained together" to become inputs of another model.',source:"@site/content/docs/walkthrough/linking_interdependent_models.md",sourceDirName:"docs/walkthrough",slug:"/docs/walkthrough/linking_interdependent_models",permalink:"/docs/docs/walkthrough/linking_interdependent_models",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/walkthrough/linking_interdependent_models.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Training models directly on your datastore",permalink:"/docs/docs/walkthrough/training_models"},next:{title:"Setting up and accessing vector-search",permalink:"/docs/docs/walkthrough/vector_search"}},c={},l=[{value:"Procedural API",id:"procedural-api",level:2},{value:"Declarative API",id:"declarative-api",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuring-models-to-ingest-features-from-other-models",children:"Configuring models to ingest features from other models"}),"\n",(0,o.jsx)(n.p,{children:'Sometimes the outputs of one model should be "chained together" to become inputs of another model.\nTypical examples of this are:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Chunking and vectorizing text data, to become input to a retrieval augmented LLM."}),"\n",(0,o.jsx)(n.li,{children:"Transfer learning in computer vision, where prepared features become input to a shallow classifier"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"procedural-api",children:"Procedural API"}),"\n",(0,o.jsxs)(n.p,{children:["In procedural mode, pass the output of one ",(0,o.jsx)(n.code,{children:".predict"})," as a dependency of\nthe second, as well as specifying that the model should ingest the outputs\nof the first, using the ",(0,o.jsx)(n.code,{children:".outputs"})," query."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"j1 = m1.predict(X='my_key_1', select=collection.find())\nm2.predict(\n    X='my_key_1',\n    select=collection.find().outputs('my_key_1', m1.identifier),\n    dependencies=(j1,),\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.code,{children:"CFG.production = True"})," mode, the ",(0,o.jsx)(n.code,{children:"j1"})," object is a ",(0,o.jsx)(n.code,{children:"Job"})," object, which\ndoesn't block the main thread of the program. The second ",(0,o.jsx)(n.code,{children:".predict"})," waits\nfor this ",(0,o.jsx)(n.code,{children:"Job"})," to finish before starting."]}),"\n",(0,o.jsx)(n.h2,{id:"declarative-api",children:"Declarative API"}),"\n",(0,o.jsxs)(n.p,{children:["With the declarative API this\nbehaviour may be achieved by linking the ",(0,o.jsx)(n.code,{children:".outputs"})," of one ",(0,o.jsx)(n.code,{children:"Listener"})," as the ",(0,o.jsx)(n.code,{children:"select=..."})," of another:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"l1 = Listener(\n    model_1,\n    key='my_key_1',\n    select=collection.find(),\n)\n\nl2 = Listener(\n    model_2,\n    key='my_key_1',\n    select=l1.outputs,\n)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This implies that whenever data is inserted to ",(0,o.jsx)(n.code,{children:"collection"}),", ",(0,o.jsx)(n.code,{children:"model_1"})," will compute outputs on that data first,\nwhich will subsequently be consumed by ",(0,o.jsx)(n.code,{children:"model_2"})," as inputs; its outputs will then also be saved to ",(0,o.jsx)(n.code,{children:"db"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);