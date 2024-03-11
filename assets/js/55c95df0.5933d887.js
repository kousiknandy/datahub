"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18478],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,s=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(r),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return r?n.createElement(m,o(o({ref:e},l),{},{components:r})):n.createElement(m,o({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=r.length,o=new Array(s);o[0]=b;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},85311:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},c="Get ElasticSearch Task Status Endpoint",p={unversionedId:"docs/api/restli/get-elastic-task-status",id:"version-0.13.0/docs/api/restli/get-elastic-task-status",title:"Get ElasticSearch Task Status Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=getEsTaskStatus endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the truncateTimeseriesAspect endpoint. The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately.",source:"@site/versioned_docs/version-0.13.0/docs/api/restli/get-elastic-task-status.md",sourceDirName:"docs/api/restli",slug:"/api/restli/get-elastic-task-status",permalink:"/docs/api/restli/get-elastic-task-status",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md",tags:[],version:"0.13.0",frontMatter:{title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},sidebar:"overviewSidebar",previous:{title:"Truncate Timeseries Index Endpoint",permalink:"/docs/api/restli/truncate-time-series-aspect"},next:{title:"Evaluate Tests Endpoint",permalink:"/docs/api/restli/evaluate-tests"}},l={},u=[],d={toc:u},b="wrapper";function m(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)(b,s(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){a(t,e,r[e])}))}return t}({},d,r),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get-elasticsearch-task-status-endpoint"},"Get ElasticSearch Task Status Endpoint"),(0,n.kt)("p",null,"You can do a HTTP POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=getEsTaskStatus")," endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/restli/truncate-time-series-aspect"},(0,n.kt)("inlineCode",{parentName:"a"},"truncateTimeseriesAspect")," endpoint"),". The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=getEsTaskStatus' \\\n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"task\": \"aB1cdEf2GHIJKLMnoPQr3S:123456\"\n}'\n\ncurl --location --request POST  http://localhost:8080/operations\\?action\\=getEsTaskStatus \\         \n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"nodeId\": \"aB1cdEf2GHIJKLMnoPQr3S\",\n    taskId: 12345\n}' \n")),(0,n.kt)("p",null,"The output will be a string representing a JSON object with the task status."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "value": "{\\"error\\":\\"Could not get task status for XIAMx5WySACgg9XxBgaKmw:12587\\"}"\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"{\n  "completed": true,\n  "taskId": "qhxGdzytQS-pQek8CwBCZg:54654",\n  "runTimeNanos": 1179458,\n  "status": "{\n    "total": 0,\n    "updated": 0,\n    "created": 0,\n    "deleted": 0,\n    "batches": 0,\n    "version_conflicts": 0,\n    "noops": 0,\n    "retries": {\n      "bulk": 0,\n      "search": 0\n    },\n    "throttled_millis": 0,\n    "requests_per_second": -1.0,\n    "throttled_until_millis": 0\n  }\n}\n')))}m.isMDXComponent=!0}}]);