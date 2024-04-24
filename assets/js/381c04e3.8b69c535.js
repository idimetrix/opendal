"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1725],{7917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=t(1527),r=t(2175);function a(e){const n={code:"code",del:"del",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(n.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," copy"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"list"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," scan"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ",(0,s.jsx)(n.del,{children:"presign"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"root"}),": Set the working directory of ",(0,s.jsx)(n.code,{children:"OpenDAL"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"connection_string"}),": Set the connection string of mongodb server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"database"}),": Set the database of mongodb"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bucket"}),": Set the bucket of mongodb gridfs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chunk_size"}),": Set the chunk size of mongodb gridfs"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Gridfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut builder = Gridfs::default();\n    builder.root("/");\n    builder.connection_string("mongodb://myUser:myPassword@localhost:27017/myAuthDB");\n    builder.database("your_database");\n    builder.bucket("your_bucket");\n    // The chunk size in bytes used to break the user file into chunks.\n    builder.chunk_size(255);\n\n    let op = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var l=t(5431),o=t(2860);const c={title:"Gridfs"},u=void 0,d={id:"services/gridfs",title:"Gridfs",description:"Gridfs services support.",source:"@site/docs/services/gridfs.mdx",sourceDirName:"services",slug:"/services/gridfs",permalink:"/docs/services/gridfs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/gridfs.mdx",tags:[],version:"current",lastUpdatedBy:"Pop",lastUpdatedAt:1713923209,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{title:"Gridfs"},sidebar:"docs",previous:{title:"GHAC",permalink:"/docs/services/ghac"},next:{title:"HDFS",permalink:"/docs/services/hdfs"}},h={},p=[{value:"Via Config",id:"via-config",level:3}];function b(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/gridfs/",children:"Gridfs"})," services support."]}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(n.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(o.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("connection_string".to_string(), "connection_string".to_string());\n    map.insert("database".to_string(), "database".to_string());\n    map.insert("bucket".to_string(), "bucket".to_string());\n    let op: Operator = Operator::via_map(Scheme::Gridfs, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(o.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n    const config = {\n        connection_string: "connection_string",\n        database: "database",\n        bucket: "bucket",\n    };\n    const op = new Operator("gridfs", config);\n}\n'})})}),(0,s.jsx)(o.Z,{value:"python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import opendal\n\nconfig = {\n    "connection_string": "connection_string",\n    "database": "database",\n    "bucket": "bucket",\n}\n\nop = opendal.Operator("gridfs", **config)\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},2860:(e,n,t)=>{t.d(n,{Z:()=>i});t(959);var s=t(6259);const r={tabItem:"tabItem_CbVR"};var a=t(1527);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},5431:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(959),r=t(6259),a=t(2990),i=t(8903),l=t(3133),o=t(563),c=t(351),u=t(3026);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var g=t(1527);function j(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==s&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},2175:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(959);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);