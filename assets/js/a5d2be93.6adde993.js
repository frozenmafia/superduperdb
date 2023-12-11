"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[4958],{16870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=r(85893),t=r(11151);const d={sidebar_position:5},i="Predictors and models",o={id:"docs/fundamentals/predictors_and_models",title:"Predictors and models",description:"Predictors",source:"@site/content/docs/fundamentals/predictors_and_models.md",sourceDirName:"docs/fundamentals",slug:"/docs/fundamentals/predictors_and_models",permalink:"/docs/docs/fundamentals/predictors_and_models",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/fundamentals/predictors_and_models.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Encoding data",permalink:"/docs/docs/fundamentals/document_encoder_abstraction"},next:{title:"Procedural/ Declarative",permalink:"/docs/docs/fundamentals/procedural_vs_declarative_api"}},c={},a=[{value:"Predictors",id:"predictors",level:2},{value:"Models",id:"models",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"predictors-and-models",children:"Predictors and models"}),"\n",(0,s.jsx)(n.h2,{id:"predictors",children:"Predictors"}),"\n",(0,s.jsxs)(n.p,{children:["The base class which enables predictions in ",(0,s.jsx)(n.code,{children:"superduperdb"})," is the ",(0,s.jsx)(n.code,{children:"Predictor"})," mixin class."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Predictor"})," is a class which implements the ",(0,s.jsx)(n.code,{children:".predict"})," method; this mimics ",(0,s.jsx)(n.code,{children:".predict"})," from\n",(0,s.jsx)(n.a,{href:"https://scikit-learn.org/stable/",children:"Scikit-Learn"})," and related frameworks, but has support\nfor prediction directly via the ",(0,s.jsx)(n.code,{children:"Datalayer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A typical call to ",(0,s.jsx)(n.code,{children:".predict"})," looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"predictor.predict(\n    X='<key-column>'     # key of documents or column of table to take as input\n    db=db                # `Datalayer` instance, built via `db = superduper()`\n    select=my_select     # database query over which to compute outputs\n    **predict_kwargs     # additional parameters for `.predict`\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.code,{children:"Predictor"})," classes are the AI-API classes in"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduperdb.ext.openai.OpenAI*"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduperdb.ext.anthropic.Anthropic*"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduperdb.ext.cohere.Cohere*"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,s.jsxs)(n.p,{children:["A model is a particular type of ",(0,s.jsx)(n.code,{children:"Predictor"})," which carries large chunks of data around\nin order to implement predictions. These blobs can be, for example, the weights\nof a deep learning architecture or similar important data."]}),"\n",(0,s.jsxs)(n.p,{children:["Examples of ",(0,s.jsx)(n.code,{children:"Model"})," are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduperdb.ext.torch.TorchModel"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superduperdb.ext.sklearn.Estimator"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"superdueprdb.ext.transformers.Pipeline"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each of these inheriting classes also implements the ",(0,s.jsx)(n.code,{children:".fit"})," method, which re-parametrizes the class in question,\ntypicall via a machine learning task and objective function."]}),"\n",(0,s.jsxs)(n.p,{children:["A typical call to ",(0,s.jsx)(n.code,{children:".fit"})," looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"model.fit(\n    X='<input-key-column>',    # key of documents or column of table to take as input\n    y='<target-key>',          # key of documents or column of table to take as target of fitting\n    db=db,                     # `Datalayer` instance, built via `db = superduper()`\n    select=my_select,          # database query for training and validation data\n    **fit_kwargs,              # additional parameters for .fit\n)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var s=r(67294);const t={},d=s.createContext(t);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);