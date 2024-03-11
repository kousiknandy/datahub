"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[77611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/snowflake/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md"},s="Snowflake Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/snowflake/overview",id:"version-0.13.0/docs/quick-ingestion-guides/snowflake/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/snowflake/overview.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/overview",permalink:"/docs/quick-ingestion-guides/snowflake/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md",tags:[],version:"0.13.0",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/snowflake/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/redshift/configuration"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/snowflake/setup"}},c={},d=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],p={toc:d},f="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snowflake-ingestion-guide-overview"},"Snowflake Ingestion Guide: Overview"),(0,r.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,r.kt)("p",null,"This guide will help you set up the Snowflake connector to begin ingesting metadata into DataHub."),(0,r.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from Snowflake and load it into DataHub. This will include to following Snowflake asset types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Databases"),(0,r.kt)("li",{parentName:"ul"},"Schemas"),(0,r.kt)("li",{parentName:"ul"},"Tables"),(0,r.kt)("li",{parentName:"ul"},"External Tables"),(0,r.kt)("li",{parentName:"ul"},"Views"),(0,r.kt)("li",{parentName:"ul"},"Materialized Views")),(0,r.kt)("p",null,"The pipeline will also extract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Usage statistics")," to help you understand recent query activity (available if using Snowflake Enterprise edition or above)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table- and Column-level lineage")," to automatically define interdependencies between datasets and columns (available if using Snowflake Enterprise edition or above)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Table-level profile statistics")," to help you understand the shape of the data")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You will NOT have extracted Stages, Snowpipes, Streams, Tasks, Procedures from Snowflake, as the connector does not support ingesting these assets yet.")),(0,r.kt)("h3",{id:"caveats"},"Caveats"),(0,r.kt)("p",null,"By default, DataHub only profiles datasets that have changed in the past 1 day. This can be changed in the YAML editor by setting the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"profile_if_updated_since_days")," to something greater than 1."),(0,r.kt)("p",null,"Additionally, DataHub only extracts usage and lineage information based on operations performed in the last 1 day. This can be changed by setting a custom value for ",(0,r.kt)("inlineCode",{parentName:"p"},"start_time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end_time")," in the YAML editor."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"To learn more about setting these advanced values, check out the ",(0,r.kt)("a",{parentName:"em",href:"/docs/generated/ingestion/sources/snowflake/#module-snowflake"},"Snowflake Ingestion Source"),".")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"If that all sounds like what you're looking for, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/setup"},"next page"),", where we'll talk about prerequisites."),(0,r.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,r.kt)("p",null,"If you want to ingest metadata from Snowflake using the DataHub CLI, check out the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/snowflake/#module-snowflake"},"Snowflake Ingestion Source"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,r.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);