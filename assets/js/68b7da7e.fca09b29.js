"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[30073],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},l),{},{components:r})):a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"},c="How to add a new metadata aspect?",p={unversionedId:"docs/how/add-new-aspect",id:"version-0.12.1/docs/how/add-new-aspect",title:"How to add a new metadata aspect?",description:"Adding a new metadata aspect is one of the most common ways to extend an existing entity.",source:"@site/versioned_docs/version-0.12.1/docs/how/add-new-aspect.md",sourceDirName:"docs/how",slug:"/how/add-new-aspect",permalink:"/docs/0.12.1/how/add-new-aspect",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md",tags:[],version:"0.12.1",frontMatter:{title:"How to add a new metadata aspect?",slug:"/how/add-new-aspect",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/add-new-aspect.md"}},l={},d=[],u={toc:d},m="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-new-metadata-aspect"},"How to add a new metadata aspect?"),(0,a.kt)("p",null,"Adding a new metadata ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/aspect"},"aspect")," is one of the most common ways to extend an existing ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/entity"},"entity"),".\nWe'll use the CorpUserEditableInfo as an example here."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the aspect model to the corresponding namespace (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-models/src/main/pegasus/com/linkedin/identity"},(0,a.kt)("inlineCode",{parentName:"a"},"com.linkedin.identity")),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Extend the entity's aspect union to include the new aspect.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rebuild the rest.li ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"IDL & snapshot")," by running the following command from the project root"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To surface the new aspect at the top-level ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#writing-resources"},"resource endpoint"),", extend the resource data model with an optional field. You'll also need to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"toValue")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"toSnapshot")," methods of the top-level resource (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/identity/CorpUsers.java"},(0,a.kt)("inlineCode",{parentName:"a"},"CorpUsers")),") to convert between the snapshot & value models.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) If there's need to update the aspect via API (instead of/in addition to MCE), add a ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/user_guide/restli_server#sub-resources"},"sub-resource")," endpoint for the new aspect (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"CorpUsersEditableInfoResource"),"). The sub-resource endpiont also allows you to retrieve previous versions of the aspect as well as additional metadata such as the audit stamp.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After rebuilding & restarting gms, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mce-consumer-job"},"mce-consumer-job")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/tree/master/metadata-jobs/mae-consumer-job"},"mae-consumer-job"),",z\nyou should be able to start emitting ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.12.1/what/mxe"},"MCE")," with the new aspect and have it automatically ingested & stored in DB."))))}h.isMDXComponent=!0}}]);