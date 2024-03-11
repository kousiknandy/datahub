"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[93328],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},c="Restore Indices Endpoint",p={unversionedId:"docs/api/restli/restore-indices",id:"version-0.12.1/docs/api/restli/restore-indices",title:"Restore Indices Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=restoreIndices endpoint with the urn as part of JSON Payload to restore indices for the particular URN, or with the urnLike regex to restore for batchSize URNs matching the pattern starting from start.",source:"@site/versioned_docs/version-0.12.1/docs/api/restli/restore-indices.md",sourceDirName:"docs/api/restli",slug:"/api/restli/restore-indices",permalink:"/docs/0.12.1/api/restli/restore-indices",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md",tags:[],version:"0.12.1",frontMatter:{title:"Restore Indices Endpoint",slug:"/api/restli/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Rest.li API",permalink:"/docs/0.12.1/api/restli/restli-overview"},next:{title:"Get Index Sizes Endpoint",permalink:"/docs/0.12.1/api/restli/get-index-sizes"}},l={},u=[],d={toc:u},m="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"restore-indices-endpoint"},"Restore Indices Endpoint"),(0,n.kt)("p",null,"You can do a HTTP POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=restoreIndices")," endpoint with the ",(0,n.kt)("inlineCode",{parentName:"p"},"urn")," as part of JSON Payload to restore indices for the particular URN, or with the ",(0,n.kt)("inlineCode",{parentName:"p"},"urnLike")," regex to restore for ",(0,n.kt)("inlineCode",{parentName:"p"},"batchSize")," URNs matching the pattern starting from ",(0,n.kt)("inlineCode",{parentName:"p"},"start"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=restoreIndices' \\\n--header 'Authorization: Bearer TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"urn\": \"YOUR_URN\"\n}'\n\ncurl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=restoreIndices' \\\n--header 'Authorization: Bearer TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"urnLike\": \"urn:dataPlatform:%\"\n}'\n")),(0,n.kt)("p",null,"The supported parameters are"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"urn")," - Optional URN string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aspect")," - Optional Aspect string"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"urnLike")," - Optional string regex to match URNs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start")," - Optional integer to decide which rows number of sql store to restore. Default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"batchSize")," - Optional integer to decide how many rows to restore. Default: 10")))}f.isMDXComponent=!0}}]);