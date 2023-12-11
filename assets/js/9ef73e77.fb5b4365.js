"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2024],{23231:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(85893),d=s(11151);const a={sidebar_position:3},r="Datalayer",o={id:"docs/fundamentals/datalayer_overview",title:"Datalayer",description:"The Datalayer is the principle point of entry in superduperdb for:",source:"@site/content/docs/fundamentals/datalayer_overview.md",sourceDirName:"docs/fundamentals",slug:"/docs/fundamentals/datalayer_overview",permalink:"/docs/docs/fundamentals/datalayer_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/tree/main/docs/content/docs/fundamentals/datalayer_overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Design",permalink:"/docs/docs/fundamentals/design"},next:{title:"Components",permalink:"/docs/docs/fundamentals/component_abstraction"}},i={},c=[{value:"Data-backend",id:"data-backend",level:3},{value:"Artifact Store",id:"artifact-store",level:3},{value:"Metadata Store",id:"metadata-store",level:3},{value:"Compute backend",id:"compute-backend",level:3},{value:"Default settings",id:"default-settings",level:2},{value:"Key methods",id:"key-methods",level:2},{value:"<code>db.execute</code>",id:"dbexecute",level:3},{value:"<code>db.add</code>",id:"dbadd",level:3},{value:"<code>db.show</code>",id:"dbshow",level:3},{value:"<code>db.remove</code>",id:"dbremove",level:3},{value:"Additional methods",id:"additional-methods",level:2},{value:"<code>db.validate</code>",id:"dbvalidate",level:3},{value:"<code>db.predict</code>",id:"dbpredict",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"datalayer",children:"Datalayer"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Datalayer"})," is the principle point of entry in ",(0,t.jsx)(n.code,{children:"superduperdb"})," for:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Communicating with the database"}),"\n",(0,t.jsx)(n.li,{children:"Instructing models and other components to work together with the database"}),"\n",(0,t.jsxs)(n.li,{children:["Accessing and storing meta-data about your ",(0,t.jsx)(n.code,{children:"superduperdb"})," models and data"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Technically, the ",(0,t.jsx)(n.code,{children:"Datalayer"}),' "wires together" several important backends involved in the AI workflow:']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Querying the database via the ",(0,t.jsx)(n.strong,{children:"databackend"})]}),"\n",(0,t.jsxs)(n.li,{children:["Storing and retrieving serialized model-weights and other artifacts from the ",(0,t.jsx)(n.strong,{children:"artifact store"})]}),"\n",(0,t.jsxs)(n.li,{children:["Storing and retrieval important meta-data, from the ",(0,t.jsx)(n.strong,{children:"meta-data store"})," and information about models and other components which are to be installed with ",(0,t.jsx)(n.code,{children:"superduperdb"})]}),"\n",(0,t.jsxs)(n.li,{children:["Performing computations over the data in the ",(0,t.jsx)(n.strong,{children:"databackend"})," using the models saved in the ",(0,t.jsx)(n.strong,{children:"artifact store"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper()\n\ndb.databackend\n# <superduperdb.backends.mongodb.data_backend.MongoDataBackend at 0x1562815d0>\n\ndb.artifact_store\n# <superduperdb.backends.mongodb.artifacts.MongoArtifactStore at 0x156869f50>\n\ndb.metadata\n# <superduperdb.backends.mongodb.metadata.MongoMetaDataStore at 0x156866a10>\n\ndb.compute\n# <superduperdb.backends.local.LocalComputeBackend 0x152866a10>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Our aim is to make it easy to set-up each aspect of the ",(0,t.jsx)(n.code,{children:"Datalayer"})," with your preferred\nconnections/ engines."]}),"\n",(0,t.jsx)(n.h3,{id:"data-backend",children:"Data-backend"}),"\n",(0,t.jsxs)(n.p,{children:["The databackend typically connects to your database (although ",(0,t.jsx)(n.code,{children:"superduperdb"})," also supports other databackends such as a directory of ",(0,t.jsx)(n.code,{children:"pandas"})," dataframes),\nand dispatches queries written in an query API which is compatible with that databackend, but which also includes additional aspects\nspecific to ",(0,t.jsx)(n.code,{children:"superduperdb"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more ",(0,t.jsx)(n.a,{href:"/docs/docs/data_integrations/supported_query_APIs",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The databackend is configured by setting the URI ",(0,t.jsx)(n.code,{children:"CFG.databackend"})," in the ",(0,t.jsx)(n.a,{href:"/docs/docs/setup/configuration",children:"configuration system"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We support the same databackends as supported by the ",(0,t.jsxs)(n.a,{href:"https://ibis-project.org/",children:[(0,t.jsx)(n.code,{children:"ibis"})," project"]}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.mongodb.com/",children:(0,t.jsx)(n.strong,{children:"MongoDB"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:(0,t.jsx)(n.strong,{children:"PostgreSQL"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sqlite.org/index.html",children:(0,t.jsx)(n.strong,{children:"SQLite"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://duckdb.org/",children:(0,t.jsx)(n.strong,{children:"DuckDB"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.google.com/bigquery",children:(0,t.jsx)(n.strong,{children:"BigQuery"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://clickhouse.com/",children:(0,t.jsx)(n.strong,{children:"ClickHouse"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://arrow.apache.org/datafusion/",children:(0,t.jsx)(n.strong,{children:"DataFusion"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://druid.apache.org/",children:(0,t.jsx)(n.strong,{children:"Druid"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://impala.apache.org/",children:(0,t.jsx)(n.strong,{children:"Impala"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.microsoft.com/en-us/sql-server/",children:(0,t.jsx)(n.strong,{children:"MSSQL"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.mysql.com/",children:(0,t.jsx)(n.strong,{children:"MySQL"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.oracle.com/database/",children:(0,t.jsx)(n.strong,{children:"Oracle"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://pandas.pydata.org/",children:(0,t.jsx)(n.strong,{children:"pandas"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.pola.rs/",children:(0,t.jsx)(n.strong,{children:"Polars"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://spark.apache.org/docs/3.3.1/api/python/index.html",children:(0,t.jsx)(n.strong,{children:"PySpark"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.snowflake.com/en/",children:(0,t.jsx)(n.strong,{children:"Snowflake"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://trino.io/",children:(0,t.jsx)(n.strong,{children:"Trino"})})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"artifact-store",children:"Artifact Store"}),"\n",(0,t.jsxs)(n.p,{children:["The artifact-store is the place where large pieces of data associated with your AI models are saved.\nUsers have the possibility to configure either a local filesystem, or an artifact store on MongoDB ",(0,t.jsx)(n.code,{children:"gridfs"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG.artifact_store = 'mongodb://localhost:27017/documents'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG.artifact_store = 'filesystem://./data'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"metadata-store",children:"Metadata Store"}),"\n",(0,t.jsx)(n.p,{children:"The meta-data store is the place where important information associated with models and\nrelated components are kept:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Where are the data artifacts saved for a component?"}),"\n",(0,t.jsx)(n.li,{children:"Important parameters necessary for using a component"}),"\n",(0,t.jsx)(n.li,{children:"Important parameters which were used to create a component (e.g. in training or otherwise)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Similarly to the databackend and artifact store, the metadata store is configurable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"CFG.metadata = 'mongodb://localhost:27017/documents'\n"})}),"\n",(0,t.jsx)(n.p,{children:"We support metadata store via:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.mongodb.com/",children:"MongoDB"})}),"\n",(0,t.jsxs)(n.li,{children:["All databases supported by ",(0,t.jsx)(n.a,{href:"https://www.sqlalchemy.org/",children:"SQLAlchemy"}),".\nFor example, these databases supported by the databackend are also supported by the metadata store.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.mysql.com/",children:"MySQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sqlite.org/",children:"SQLite"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads",children:"MSSQL"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"compute-backend",children:"Compute backend"}),"\n",(0,t.jsx)(n.p,{children:"The compute-backend is designed to be a configurable engine for performing computations with models.\nWe support 2 backends:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Local (default: run compute in process on the local machine)"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dask"})," (run compute on a configured ",(0,t.jsx)(n.code,{children:"dask"})," cluster)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"default-settings",children:"Default settings"}),"\n",(0,t.jsx)(n.p,{children:"In such cases, the default configuration is to use the same configuration as used in the\ndatabackend."}),"\n",(0,t.jsx)(n.p,{children:"I.e., for MongoDB the following are equivalent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db = superduper('mongodb://localhost:27018/documents')\n"})}),"\n",(0,t.jsx)(n.p,{children:"...and"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db = superduper(\n    'mongodb://localhost:27018/documents',\n    metadata_store='mongodb://localhost:27018/documents',\n    artifact_store='mongodb://localhost:27018/documents',\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Whenever a database is supported by the artifact store and metadata store,\nthe same behaviour holds. However, since there is no general pattern\nfor storing large files in SQL databases, the fallback artifact store\nis on the local filesystem. So the following are equivalent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"db = superduper('sqlite://<my-database>.db')\n"})}),"\n",(0,t.jsx)(n.p,{children:"...and"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.local.compute import LocalComputeBackend\n\ndb = superduper(\n    'sqlite://<my-database>.db',\n    metadata_store='sqlite://<my-database>.db',\n    artifact_store='filesystem://.superduperdb/artifacts/',\n    compute=LocalComputeBackend(),\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"key-methods",children:"Key methods"}),"\n",(0,t.jsx)(n.p,{children:"Here are the key methods which you'll use again and again:"}),"\n",(0,t.jsx)(n.h3,{id:"dbexecute",children:(0,t.jsx)(n.code,{children:"db.execute"})}),"\n",(0,t.jsxs)(n.p,{children:["This method executes a query. For an overview of how this works see ",(0,t.jsx)(n.a,{href:"/docs/docs/data_integrations/supported_query_APIs",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"dbadd",children:(0,t.jsx)(n.code,{children:"db.add"})}),"\n",(0,t.jsxs)(n.p,{children:["This method adds ",(0,t.jsx)(n.code,{children:"Component"})," instances to the ",(0,t.jsx)(n.code,{children:"db.artifact_store"})," connection, and registers meta-data\nabout those instances in the ",(0,t.jsx)(n.code,{children:"db.metadata_store"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In addition, each sub-class of ",(0,t.jsx)(n.code,{children:"Component"}),' has certain "set-up" tasks, such as inference, additional configurations,\nor training, and these are scheduled by ',(0,t.jsx)(n.code,{children:"db.add"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"dbshow",children:(0,t.jsx)(n.code,{children:"db.show"})}),"\n",(0,t.jsxs)(n.p,{children:["This methods displays which ",(0,t.jsx)(n.code,{children:"Component"})," instances are registered with the system."]}),"\n",(0,t.jsx)(n.h3,{id:"dbremove",children:(0,t.jsx)(n.code,{children:"db.remove"})}),"\n",(0,t.jsxs)(n.p,{children:["This method removes a ",(0,t.jsx)(n.code,{children:"Component"})," instance from the system."]}),"\n",(0,t.jsx)(n.h2,{id:"additional-methods",children:"Additional methods"}),"\n",(0,t.jsx)(n.h3,{id:"dbvalidate",children:(0,t.jsx)(n.code,{children:"db.validate"})}),"\n",(0,t.jsx)(n.p,{children:"Validate your components (mostly models)"}),"\n",(0,t.jsx)(n.h3,{id:"dbpredict",children:(0,t.jsx)(n.code,{children:"db.predict"})}),"\n",(0,t.jsxs)(n.p,{children:["Infer predictions from models hosted by ",(0,t.jsx)(n.code,{children:"superduperdb"}),". Read more about this and about models ",(0,t.jsx)(n.a,{href:"/docs/docs/walkthrough/apply_models",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(67294);const d={},a=t.createContext(d);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);