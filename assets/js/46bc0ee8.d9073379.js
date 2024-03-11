"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,b=l["".concat(c,".").concat(f)]||l[f]||h[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>l});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Overview",slug:"/authorization",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md"},c="Overview",u={unversionedId:"docs/authorization/README",id:"docs/authorization/README",title:"Overview",description:"Authorization specifies what accesses an authenticated user has within a system.",source:"@site/genDocs/docs/authorization/README.md",sourceDirName:"docs/authorization",slug:"/authorization",permalink:"/docs/next/authorization",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/authorization",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md"},sidebar:"overviewSidebar",previous:{title:"Personal Access Tokens",permalink:"/docs/next/authentication/personal-access-tokens"},next:{title:"Roles",permalink:"/docs/next/authorization/roles"}},p={},l=[],h={toc:l},f="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(f,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Authorization specifies ",(0,n.kt)("em",{parentName:"p"},"what")," accesses an ",(0,n.kt)("em",{parentName:"p"},"authenticated")," user has within a system.\nThis section is all about how DataHub authorizes a given user/service that wants to interact with the system."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Authorization only makes sense in the context of an ",(0,n.kt)("strong",{parentName:"p"},"Authenticated")," DataHub deployment. To use DataHub's authorization features\nplease first make sure that the system has been configured from an authentication perspective as you intend.")),(0,n.kt)("p",null,"Once the identity of a user or service has been established, DataHub determines what accesses the authenticated request has."),(0,n.kt)("p",null,"This is done by checking what operation a given user/service wants to perform within DataHub & whether it is allowed to do so.\nThe set of operations that are allowed in DataHub are what we call ",(0,n.kt)("strong",{parentName:"p"},"Policies"),"."),(0,n.kt)("p",null,"Policies specify fine-grain access control for ",(0,n.kt)("em",{parentName:"p"},"who")," can do ",(0,n.kt)("em",{parentName:"p"},"what")," to ",(0,n.kt)("em",{parentName:"p"},"which")," resources, for more details on the set of Policies that DataHub provides please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/authorization/policies"},"Policies Guide"),"."))}b.isMDXComponent=!0}}]);