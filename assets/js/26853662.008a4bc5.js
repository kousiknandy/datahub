"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=i,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},12443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={title:"Get Index Sizes Endpoint",slug:"/api/restli/get-index-sizes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-index-sizes.md"},c="Get Index Sizes Endpoint",p={unversionedId:"docs/api/restli/get-index-sizes",id:"version-0.13.0/docs/api/restli/get-index-sizes",title:"Get Index Sizes Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=getIndexSizes endpoint with no parameters to see the size of indices in ElasticSearch. For now, only timeseries indices are supported, as they can grow indefinitely, and the truncateTimeseriesAspect endpoint is provided to clean up old entries. This endpoint can be used in conjunction with the cleanup endpoint to see which indices are the largest before truncation.",source:"@site/versioned_docs/version-0.13.0/docs/api/restli/get-index-sizes.md",sourceDirName:"docs/api/restli",slug:"/api/restli/get-index-sizes",permalink:"/docs/api/restli/get-index-sizes",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-index-sizes.md",tags:[],version:"0.13.0",frontMatter:{title:"Get Index Sizes Endpoint",slug:"/api/restli/get-index-sizes",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-index-sizes.md"},sidebar:"overviewSidebar",previous:{title:"Restore Indices Endpoint",permalink:"/docs/api/restli/restore-indices"},next:{title:"Truncate Timeseries Index Endpoint",permalink:"/docs/api/restli/truncate-time-series-aspect"}},l={},d=[],u={toc:d},b="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-index-sizes-endpoint"},"Get Index Sizes Endpoint"),(0,r.kt)("p",null,"You can do a HTTP POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=getIndexSizes")," endpoint with no parameters to see the size of indices in ElasticSearch. For now, only timeseries indices are supported, as they can grow indefinitely, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"truncateTimeseriesAspect")," endpoint is provided to clean up old entries. This endpoint can be used in conjunction with the cleanup endpoint to see which indices are the largest before truncation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=getIndexSizes' \\\n--header 'Authorization: Bearer TOKEN'\n")),(0,r.kt)("p",null,"The endpoint takes no parameters, and the output will be a string representing a JSON object containing the following information about each index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      {\n        "aspectName": "datasetusagestatistics",\n        "sizeMb": 0.208,\n        "indexName": "dataset_datasetusagestatisticsaspect_v1",\n        "entityName": "dataset"\n      }\n')))}f.isMDXComponent=!0}}]);