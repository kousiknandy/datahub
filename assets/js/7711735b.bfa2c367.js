"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Concepts & Key Components",slug:"/authentication/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md"},c="Concepts & Key Components",l={unversionedId:"docs/authentication/concepts",id:"version-0.13.0/docs/authentication/concepts",title:"Concepts & Key Components",description:"We introduced a few important concepts to the Metadata Service to make authentication work:",source:"@site/versioned_docs/version-0.13.0/docs/authentication/concepts.md",sourceDirName:"docs/authentication",slug:"/authentication/concepts",permalink:"/docs/authentication/concepts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md",tags:[],version:"0.13.0",frontMatter:{title:"Concepts & Key Components",slug:"/authentication/concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/concepts.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/authentication"},next:{title:"Changing the default user credentials",permalink:"/docs/authentication/changing-default-credentials"}},u={},p=[{value:"What is an Actor?",id:"what-is-an-actor",level:2},{value:"What is an Authenticator?",id:"what-is-an-authenticator",level:2},{value:"What is an AuthenticatorChain?",id:"what-is-an-authenticatorchain",level:2},{value:"What is the AuthenticationFilter?",id:"what-is-the-authenticationfilter",level:2},{value:"What is a DataHub Token Service? What are Access Tokens?",id:"what-is-a-datahub-token-service-what-are-access-tokens",level:2}],h={toc:p},d="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concepts--key-components"},"Concepts & Key Components"),(0,a.kt)("p",null,"We introduced a few important concepts to the Metadata Service to make authentication work:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Actor"),(0,a.kt)("li",{parentName:"ol"},"Authenticator"),(0,a.kt)("li",{parentName:"ol"},"AuthenticatorChain"),(0,a.kt)("li",{parentName:"ol"},"AuthenticationFilter"),(0,a.kt)("li",{parentName:"ol"},"DataHub Access Token"),(0,a.kt)("li",{parentName:"ol"},"DataHub Token Service")),(0,a.kt)("p",null,"In following sections, we'll take a closer look at each individually."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/metadata-service-auth.png"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"High level overview of Metadata Service Authentication")),(0,a.kt)("h2",{id:"what-is-an-actor"},"What is an Actor?"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"Actor")," is a concept within the new Authentication subsystem to represent a unique identity / principal that is initiating actions (e.g. read & write requests)\non the platform."),(0,a.kt)("p",null,"An actor can be characterized by 2 attributes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Type"),': The "type" of the actor making a request. The purpose is to for example distinguish between a "user" & "service" actor. Currently, the "user" actor type is the only one\nformally supported.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Id"),': A unique identifier for the actor within DataHub. This is commonly known as a "principal" in other systems. In the case of users, this\nrepresents a unique "username". This username is in turn used when converting from the "Actor" concept into a Metadata Entity Urn (e.g. CorpUserUrn).')),(0,a.kt)("p",null,'For example, the root "datahub" super user would have the following attributes:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "type": "USER",\n   "id": "datahub"\n}\n')),(0,a.kt)("p",null,"Which is mapped to the CorpUser urn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"urn:li:corpuser:datahub\n")),(0,a.kt)("p",null,"for Metadata retrieval."),(0,a.kt)("h2",{id:"what-is-an-authenticator"},"What is an Authenticator?"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"Authenticator")," is a pluggable component inside the Metadata Service that is responsible for authenticating an inbound request provided context about the request (currently, the request headers).\nAuthentication boils down to successfully resolving an ",(0,a.kt)("strong",{parentName:"p"},"Actor")," to associate with the inbound request."),(0,a.kt)("p",null,"There can be many types of Authenticator. For example, there can be Authenticators that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify the authenticity of access tokens (ie. issued by either DataHub itself or a 3rd-party IdP)"),(0,a.kt)("li",{parentName:"ul"},"Authenticate username / password credentials against a remote database (ie. LDAP)")),(0,a.kt)("p",null,"and more! A key goal of the abstraction is ",(0,a.kt)("em",{parentName:"p"},"extensibility"),": a custom Authenticator can be developed to authenticate requests\nbased on an organization's unique needs."),(0,a.kt)("p",null,"DataHub ships with 2 Authenticators by default:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"DataHubSystemAuthenticator"),": Verifies that inbound requests have originated from inside DataHub itself using a shared system identifier\nand secret. This authenticator is always present.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"DataHubTokenAuthenticator"),": Verifies that inbound requests contain a DataHub-issued Access Token (discussed further in the \"DataHub Access Token\" section below) in their\n'Authorization' header. This authenticator is required if Metadata Service Authentication is enabled."))),(0,a.kt)("h2",{id:"what-is-an-authenticatorchain"},"What is an AuthenticatorChain?"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"AuthenticatorChain")," is a series of ",(0,a.kt)("strong",{parentName:"p"},"Authenticators")," that are configured to run one-after-another. This allows\nfor configuring multiple ways to authenticate a given request, for example via LDAP OR via local key file."),(0,a.kt)("p",null,"Only if each Authenticator within the chain fails to authenticate a request will it be rejected."),(0,a.kt)("p",null,"The Authenticator Chain can be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," file under ",(0,a.kt)("inlineCode",{parentName:"p"},"authentication.authenticators"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"authentication:\n  .... \n  authenticators:\n    # Configure the Authenticators in the chain \n    - type: com.datahub.authentication.Authenticator1\n      ...\n    - type: com.datahub.authentication.Authenticator2 \n    .... \n")),(0,a.kt)("h2",{id:"what-is-the-authenticationfilter"},"What is the AuthenticationFilter?"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"AuthenticationFilter")," is a ",(0,a.kt)("a",{parentName:"p",href:"http://tutorials.jenkov.com/java-servlets/servlet-filters.html"},"servlet filter")," that authenticates each and requests to the Metadata Service.\nIt does so by constructing and invoking an ",(0,a.kt)("strong",{parentName:"p"},"AuthenticatorChain"),", described above."),(0,a.kt)("p",null,"If an Actor is unable to be resolved by the AuthenticatorChain, then a 401 unauthorized exception will be returned by the filter."),(0,a.kt)("h2",{id:"what-is-a-datahub-token-service-what-are-access-tokens"},"What is a DataHub Token Service? What are Access Tokens?"),(0,a.kt)("p",null,"Along with Metadata Service Authentication comes an important new component called the ",(0,a.kt)("strong",{parentName:"p"},"DataHub Token Service"),". The purpose of this\ncomponent is twofold:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate Access Tokens that grant access to the Metadata Service"),(0,a.kt)("li",{parentName:"ol"},"Verify the validity of Access Tokens presented to the Metadata Service")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access Tokens")," granted by the Token Service take the form of ",(0,a.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"Json Web Tokens"),", a type of stateless token which\nhas a finite lifespan & is verified using a unique signature. JWTs can also contain a set of claims embedded within them. Tokens issued by the Token\nService contain the following claims:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"exp: the expiration time of the token"),(0,a.kt)("li",{parentName:"ul"},"version: version of the DataHub Access Token for purposes of evolvability (currently 1)"),(0,a.kt)("li",{parentName:"ul"},"type: The type of token, currently SESSION (used for UI-based sessions) or PERSONAL (used for personal access tokens)"),(0,a.kt)("li",{parentName:"ul"},"actorType: The type of the ",(0,a.kt)("strong",{parentName:"li"},"Actor")," associated with the token. Currently, USER is the only type supported."),(0,a.kt)("li",{parentName:"ul"},"actorId: The id of the ",(0,a.kt)("strong",{parentName:"li"},"Actor")," associated with the token.")),(0,a.kt)("p",null,"Today, Access Tokens are granted by the Token Service under two scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"UI Login"),": When a user logs into the DataHub UI, for example via ",(0,a.kt)("a",{parentName:"li",href:"/docs/authentication/guides/jaas"},"JaaS")," or\n",(0,a.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react"},"OIDC"),", the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," service issues an\nrequest to the Metadata Service to generate a SESSION token ",(0,a.kt)("em",{parentName:"li"},"on behalf of")," of the user logging in. (*Only the frontend service is authorized to perform this action)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Generating Personal Access Tokens"),": When a user requests to generate a Personal Access Token (described below) from the UI.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"At present, the Token Service supports the symmetric signing method ",(0,a.kt)("inlineCode",{parentName:"p"},"HS256")," to generate and verify tokens.")),(0,a.kt)("p",null,"Now that we're familiar with the concepts, we will talk concretely about what new capabilities have been built on top\nof Metadata Service Authentication."))}m.isMDXComponent=!0}}]);