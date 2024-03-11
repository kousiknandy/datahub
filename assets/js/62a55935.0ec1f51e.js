"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[45495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||b[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"},u="UI Tabs Guide",c={unversionedId:"docs/how/ui-tabs-guide",id:"version-0.13.0/docs/how/ui-tabs-guide",title:"UI Tabs Guide",description:"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs.",source:"@site/versioned_docs/version-0.13.0/docs/how/ui-tabs-guide.md",sourceDirName:"docs/how",slug:"/how/ui-tabs-guide",permalink:"/docs/how/ui-tabs-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md",tags:[],version:"0.13.0",frontMatter:{title:"UI Tabs Guide",slug:"/how/ui-tabs-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/ui-tabs-guide.md"}},l={},p=[{value:"Datasets",id:"datasets",level:2},{value:"Stats and Queries Tab",id:"stats-and-queries-tab",level:3},{value:"Validation Tab",id:"validation-tab",level:3},{value:"Common to multiple entities",id:"common-to-multiple-entities",level:2},{value:"Properties Tab",id:"properties-tab",level:3}],b={toc:p},d="wrapper";function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ui-tabs-guide"},"UI Tabs Guide"),(0,n.kt)("p",null,"Some of the tabs in the UI might not be enabled by default. This guide is supposed to tell Admins of DataHub how to enable those UI tabs."),(0,n.kt)("h2",{id:"datasets"},"Datasets"),(0,n.kt)("h3",{id:"stats-and-queries-tab"},"Stats and Queries Tab"),(0,n.kt)("p",null,"To enable these tabs you need to use one of the usage sources which gets the relevant metadata from your sources and ingests them into DataHub. These usage sources are listed under other sources which support them e.g. ",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/snowflake"},"Snowflake source"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/bigquery"},"BigQuery source")),(0,n.kt)("h3",{id:"validation-tab"},"Validation Tab"),(0,n.kt)("p",null,"This tab is enabled if you use ",(0,n.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/integration_docs/great-expectations"},"Data Quality Integration with Great Expectations"),"."),(0,n.kt)("h2",{id:"common-to-multiple-entities"},"Common to multiple entities"),(0,n.kt)("h3",{id:"properties-tab"},"Properties Tab"),(0,n.kt)("p",null,"Properties are a catch-all bag for metadata not captured in other aspects stored for a Dataset. These are populated via the various source connectors when ",(0,n.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata is ingested"),"."))}f.isMDXComponent=!0}}]);