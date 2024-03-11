"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20222],{80326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),i=n(51715),r=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"OIDC Authentication",slug:"/authentication/guides/sso/configure-oidc-react",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md"},u="OIDC Authentication",d={unversionedId:"docs/authentication/guides/sso/configure-oidc-react",id:"version-0.12.1/docs/authentication/guides/sso/configure-oidc-react",title:"OIDC Authentication",description:"The DataHub React application supports OIDC authentication built on top of the Pac4j Play library.",source:"@site/versioned_docs/version-0.12.1/docs/authentication/guides/sso/configure-oidc-react.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-react",permalink:"/docs/0.12.1/authentication/guides/sso/configure-oidc-react",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md",tags:[],version:"0.12.1",frontMatter:{title:"OIDC Authentication",slug:"/authentication/guides/sso/configure-oidc-react",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-react.md"},sidebar:"overviewSidebar",previous:{title:"JaaS Authentication",permalink:"/docs/0.12.1/authentication/guides/jaas"},next:{title:"OIDC Proxy Configuration",permalink:"/docs/0.12.1/authentication/guides/sso/configure-oidc-behind-proxy"}},c={},m=[{value:"1. Register an app with your Identity Provider",id:"1-register-an-app-with-your-identity-provider",level:2},{value:"Create a project in the Google API Console",id:"create-a-project-in-the-google-api-console",level:4},{value:"Create OAuth2.0 consent screen",id:"create-oauth20-consent-screen",level:4},{value:"Configure the scopes",id:"configure-the-scopes",level:4},{value:"Create an application in Okta Developer Console",id:"create-an-application-in-okta-developer-console",level:4},{value:"Create an application registration in Microsoft Azure portal",id:"create-an-application-registration-in-microsoft-azure-portal",level:4},{value:"Configure Certificates &amp; secrets",id:"configure-certificates--secrets",level:4},{value:"Configure API permissions",id:"configure-api-permissions",level:4},{value:"2. Obtain Client Credentials &amp; Discovery URL",id:"2-obtain-client-credentials--discovery-url",level:2},{value:"3. Configure DataHub Frontend Server",id:"3-configure-datahub-frontend-server",level:2},{value:"Docker",id:"docker",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Advanced OIDC Configurations",id:"advanced-oidc-configurations",level:3},{value:"User &amp; Group Provisioning (JIT Provisioning)",id:"user--group-provisioning-jit-provisioning",level:3},{value:"4. Restart datahub-frontend-react",id:"4-restart-datahub-frontend-react",level:2},{value:"Summary",id:"summary",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Reference",id:"reference",level:2}],h={toc:m},k="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oidc-authentication"},"OIDC Authentication"),(0,a.kt)("p",null,"The DataHub React application supports OIDC authentication built on top of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pac4j/play-pac4j"},"Pac4j Play")," library.\nThis enables operators of DataHub to integrate with 3rd party identity providers like Okta, Google, Keycloak, & more to authenticate their users."),(0,a.kt)("h2",{id:"1-register-an-app-with-your-identity-provider"},"1. Register an app with your Identity Provider"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"google",label:"Google Identity",mdxType:"TabItem"},(0,a.kt)("h4",{id:"create-a-project-in-the-google-api-console"},"Create a project in the Google API Console"),(0,a.kt)("p",null,"Using an account linked to your organization, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/"},"Google API Console")," and select ",(0,a.kt)("strong",{parentName:"p"},"New project"),".\nWithin this project, we will configure the OAuth2.0 screen and credentials."),(0,a.kt)("h4",{id:"create-oauth20-consent-screen"},"Create OAuth2.0 consent screen"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"OAuth consent screen"),". This is where you'll configure the screen your users see when attempting to\nlog in to DataHub. Select ",(0,a.kt)("strong",{parentName:"p"},"Internal")," (if you only want your company users to have access) and then click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".\nNote that in order to complete this step you should be logged into a Google account associated with your organization."),(0,a.kt)("p",null,"Fill out the details in the App Information & Domain sections. Make sure the 'Application Home Page' provided matches where DataHub is deployed\nat your organization. Once you've completed this, ",(0,a.kt)("strong",{parentName:"p"},"Save & Continue"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/google-setup-1.png"})),(0,a.kt)("h4",{id:"configure-the-scopes"},"Configure the scopes"),(0,a.kt)("p",null,"Next, click ",(0,a.kt)("strong",{parentName:"p"},"Add or Remove Scopes"),". Select the following scope and click ",(0,a.kt)("strong",{parentName:"p"},"Save & Continue"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".../auth/userinfo.email"),(0,a.kt)("li",{parentName:"ul"},".../auth/userinfo.profile"),(0,a.kt)("li",{parentName:"ul"},"openid"))),(0,a.kt)(r.Z,{value:"okta",label:"Okta",mdxType:"TabItem"},(0,a.kt)("h4",{id:"create-an-application-in-okta-developer-console"},"Create an application in Okta Developer Console"),(0,a.kt)("p",null,"Log in to your Okta admin account & navigate to the developer console. Select ",(0,a.kt)("strong",{parentName:"p"},"Applications"),", then ",(0,a.kt)("strong",{parentName:"p"},"Add Application"),", the ",(0,a.kt)("strong",{parentName:"p"},"Create New App")," to create a new app.\nSelect ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," as the ",(0,a.kt)("strong",{parentName:"p"},"Platform"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenID Connect")," as the ",(0,a.kt)("strong",{parentName:"p"},"Sign on method"),"."),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Create")," and name your application under ",(0,a.kt)("strong",{parentName:"p"},"General Settings")," and save."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Login Redirect URI")," : ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your-datahub-domain.com/callback/oidc"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logout Redirect URI"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your-datahub-domain.com"))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/okta-setup-2.png"})),(0,a.kt)("admonition",{title:"Optional",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're enabling DataHub login as an Okta tile, you'll need to provide the ",(0,a.kt)("strong",{parentName:"p"},"Initiate Login URI"),". You\ncan set if to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your-datahub-domain.com/authenticate"),". If you're just testing locally, this can be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9002"),"."))),(0,a.kt)(r.Z,{value:"azure",label:"Azure",mdxType:"TabItem"},(0,a.kt)("h4",{id:"create-an-application-registration-in-microsoft-azure-portal"},"Create an application registration in Microsoft Azure portal"),(0,a.kt)("p",null,"Using an account linked to your organization, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Microsoft Azure Portal"),". Select ",(0,a.kt)("strong",{parentName:"p"},"App registrations"),", then ",(0,a.kt)("strong",{parentName:"p"},"New registration")," to register a new app."),(0,a.kt)("p",null,"Name your app registration and choose who can access your application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Redirect URI")," : Select ",(0,a.kt)("strong",{parentName:"li"},"Web")," as type and enter ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your-datahub-domain.com/callback/oidc"))),(0,a.kt)("p",null,"Azure supports more than one redirect URI, so both can be configured at the same time from the ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," tab once the registration is complete.\nAt this point, your app registration should look like the following. Finally, click ",(0,a.kt)("strong",{parentName:"p"},"Register"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-app-registration.png"})),(0,a.kt)("admonition",{title:"Optional",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once registration is done, you will land on the app registration ",(0,a.kt)("strong",{parentName:"p"},"Overview")," tab.",(0,a.kt)("br",{parentName:"p"}),"\n","On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage")," and add extra redirect URIs if need be (if you want to support both local testing and Azure deployments). Finally, click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-authentication.png"}))),(0,a.kt)("h4",{id:"configure-certificates--secrets"},"Configure Certificates & secrets"),(0,a.kt)("p",null,"On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"Certificates & secrets")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Select ",(0,a.kt)("strong",{parentName:"p"},"Client secrets"),", then ",(0,a.kt)("strong",{parentName:"p"},"New client secret"),". Type in a meaningful description for your secret and select an expiry. Click the ",(0,a.kt)("strong",{parentName:"p"},"Add")," button when you are done.\nCopy the value of your newly create secret since Azure will never display its value afterwards."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-certificates-secrets.png"})),(0,a.kt)("h4",{id:"configure-api-permissions"},"Configure API permissions"),(0,a.kt)("p",null,"On the left-side navigation bar, click on ",(0,a.kt)("strong",{parentName:"p"},"API permissions")," under ",(0,a.kt)("strong",{parentName:"p"},"Manage"),". DataHub requires the following four Microsoft Graph APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User.Read ",(0,a.kt)("em",{parentName:"li"},"(should be already configured)")),(0,a.kt)("li",{parentName:"ul"},"profile"),(0,a.kt)("li",{parentName:"ul"},"email"),(0,a.kt)("li",{parentName:"ul"},"openid")),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add a permission"),", then from the ",(0,a.kt)("strong",{parentName:"p"},"Microsoft APIs")," tab select ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Graph"),", then ",(0,a.kt)("strong",{parentName:"p"},"Delegated permissions"),". From the ",(0,a.kt)("strong",{parentName:"p"},"OpenId permissions")," category, select ",(0,a.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"openid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," and click ",(0,a.kt)("strong",{parentName:"p"},"Add permissions"),"."),(0,a.kt)("p",null,"At this point, you should be looking at a screen like the following:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/azure-setup-api-permissions.png"})))),(0,a.kt)("h2",{id:"2-obtain-client-credentials--discovery-url"},"2. Obtain Client Credentials & Discovery URL"),(0,a.kt)("p",null,"The goal of this step should be to obtain the following values, which will need to be configured before deploying DataHub:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client ID")," - A unique identifier for your application with the identity provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client Secret")," - A shared secret to use for exchange between you and your identity provider"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discovery URL")," - A URL where the OIDC API of your identity provider can be discovered. This should suffixed by\n",(0,a.kt)("inlineCode",{parentName:"li"},".well-known/openid-configuration"),". Sometimes, identity providers will not explicitly include this URL in their setup guides, though\nthis endpoint ",(0,a.kt)("em",{parentName:"li"},"will")," exist as per the OIDC specification. For more info see ",(0,a.kt)("a",{parentName:"li",href:"http://openid.net/specs/openid-connect-discovery-1_0.html"},"http://openid.net/specs/openid-connect-discovery-1_0.html"),".")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"google",label:"Google Identity",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain Client Credentials")),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Credentials")," tab. Click ",(0,a.kt)("strong",{parentName:"p"},"Create Credentials")," & select ",(0,a.kt)("strong",{parentName:"p"},"OAuth client ID")," as the credential type."),(0,a.kt)("p",null,"On the following screen, select ",(0,a.kt)("strong",{parentName:"p"},"Web application")," as your Application Type.\nAdd the domain where DataHub is hosted to your 'Authorized Javascript Origins'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com\n")),(0,a.kt)("p",null,"Add the domain where DataHub is hosted with the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback/oidc")," appended to 'Authorized Redirect URLs'. Finally, click ",(0,a.kt)("strong",{parentName:"p"},"Create")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-datahub-domain.com/callback/oidc\n")),(0,a.kt)("p",null,"You will now receive a pair of values, a client id and a client secret. Bookmark these for the next step.")),(0,a.kt)(r.Z,{value:"okta",label:"Okta",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain Client Credentials")),(0,a.kt)("p",null,"After registering the app, you should see the client credentials. Bookmark the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client secret")," for the next step."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain Discovery URI")),(0,a.kt)("p",null,"On the same page, you should see an ",(0,a.kt)("inlineCode",{parentName:"p"},"Okta Domain"),". Your OIDC discovery URI will be formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://your-okta-domain.com/.well-known/openid-configuration\n")),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://dev-33231928.okta.com/.well-known/openid-configuration"),"."),(0,a.kt)("p",null,"At this point, you should be looking at a screen like the following:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sso/okta-setup-1.png"}))),(0,a.kt)(r.Z,{value:"azure",label:"Azure",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain Application (Client) ID")),(0,a.kt)("p",null,"On the left-side navigation bar, go back to the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," tab. You should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (client) ID"),". Save its value for the next step."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Obtain Discovery URI")),(0,a.kt)("p",null,"On the same page, you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Directory (tenant) ID"),". Your OIDC discovery URI will be formatted as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://login.microsoftonline.com/{tenant ID}/v2.0/.well-known/openid-configuration\n")))),(0,a.kt)("h2",{id:"3-configure-datahub-frontend-server"},"3. Configure DataHub Frontend Server"),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"The next step to enabling OIDC involves configuring ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," to enable OIDC authentication with your Identity Provider."),(0,a.kt)("p",null,"To do so, you must update the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-frontend/env/docker.env"},"docker.env")," file with the\nvalues received from your identity provider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Required Configuration Values:\nAUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=your-provider-discovery-url\nAUTH_OIDC_BASE_URL=your-datahub-url\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable delegating authentication to OIDC identity provider"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_CLIENT_ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique client id received from identity provider"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_CLIENT_SECRET"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique client secret received from identity provider"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_DISCOVERY_URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Location of the identity provider OIDC discovery API. Suffixed with ",(0,a.kt)("inlineCode",{parentName:"td"},".well-known/openid-configuration")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_BASE_URL"),(0,a.kt)("td",{parentName:"tr",align:null},"The base URL of your DataHub deployment, e.g. ",(0,a.kt)("a",{parentName:"td",href:"https://yourorgdatahub.com"},"https://yourorgdatahub.com")," (prod) or http://localhost:9002 (testing)"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_SESSION_TTL_HOURS"),(0,a.kt)("td",{parentName:"tr",align:null},"The length of time in hours before a user will be prompted to login again. Controls the actor cookie expiration time in the browser. Numeric value converted to hours."),(0,a.kt)("td",{parentName:"tr",align:null},"24")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MAX_SESSION_TOKEN_AGE"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines the expiration time of a session token. Session tokens are stateless so this determines at what time a session token may no longer be used and a valid session token can be used until this time has passed. Accepts a valid relative Java date style String."),(0,a.kt)("td",{parentName:"tr",align:null},"24h")))),(0,a.kt)("p",null,'Providing these configs will cause DataHub to delegate authentication to your identity\nprovider, requesting the "oidc email profile" scopes and parsing the "preferred_username" claim from\nthe authenticated profile as the DataHub CorpUser identity.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By default, the login callback endpoint exposed by DataHub will be located at ",(0,a.kt)("inlineCode",{parentName:"p"},"${AUTH_OIDC_BASE_URL}/callback/oidc"),". This must ",(0,a.kt)("strong",{parentName:"p"},"exactly")," match the login redirect URL you've registered with your identity provider in step 1.")),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"In Kubernetes, you can add the above env variables in the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'datahub-frontend:\n  ...\n  extraEnvs:\n    - name: AUTH_OIDC_ENABLED\n      value: "true"\n    - name: AUTH_OIDC_CLIENT_ID\n      value: your-client-id\n    - name: AUTH_OIDC_CLIENT_SECRET\n      value: your-client-secret\n    - name: AUTH_OIDC_DISCOVERY_URI\n      value: your-provider-discovery-url\n    - name: AUTH_OIDC_BASE_URL\n      value: your-datahub-url\n')),(0,a.kt)("p",null,"You can also package OIDC client secrets into a k8s secret by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create secret generic datahub-oidc-secret --from-literal=secret=<<OIDC SECRET>>\n")),(0,a.kt)("p",null,"Then set the secret env as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: AUTH_OIDC_CLIENT_SECRET\n  valueFrom:\n    secretKeyRef:\n      name: datahub-oidc-secret\n      key: secret\n")),(0,a.kt)("h3",{id:"advanced-oidc-configurations"},"Advanced OIDC Configurations"),(0,a.kt)("p",null,"You can optionally customize the flow further using advanced configurations. These allow\nyou to specify the OIDC scopes requested, how the DataHub username is parsed from the claims returned by the identity provider, and how users and groups are extracted and provisioned from the OIDC claim set."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Optional Configuration Values:\nAUTH_OIDC_USER_NAME_CLAIM=your-custom-claim\nAUTH_OIDC_USER_NAME_CLAIM_REGEX=your-custom-regex\nAUTH_OIDC_SCOPE=your-custom-scope\nAUTH_OIDC_CLIENT_AUTHENTICATION_METHOD=authentication-method\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_USER_NAME_CLAIM"),(0,a.kt)("td",{parentName:"tr",align:null},'The attribute that will contain the username used on the DataHub platform. By default, this is "email" providedas part of the standard ',(0,a.kt)("inlineCode",{parentName:"td"},"email")," scope."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_USER_NAME_CLAIM_REGEX"),(0,a.kt)("td",{parentName:"tr",align:null},"A regex string used for extracting the username from the userNameClaim attribute. For example, if the userNameClaim field will contain an email address, and we want to omit the domain name suffix of the email, we can specify a customregex to do so. (e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"([^@]+)"),")"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_SCOPE"),(0,a.kt)("td",{parentName:"tr",align:null},"A string representing the scopes to be requested from the identity provider, granted by the end user. For more info, see ",(0,a.kt)("a",{parentName:"td",href:"https://auth0.com/docs/scopes/openid-connect-scopes"},"OpenID Connect Scopes"),"."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_CLIENT_AUTHENTICATION_METHOD"),(0,a.kt)("td",{parentName:"tr",align:null},"a string representing the token authentication method to use with the identity provider. Default value is ",(0,a.kt)("inlineCode",{parentName:"td"},"client_secret_basic"),", which uses HTTP Basic authentication. Another option is ",(0,a.kt)("inlineCode",{parentName:"td"},"client_secret_post"),", which includes the client_id and secret_id as form parameters in the HTTP POST request. For more info, see ",(0,a.kt)("a",{parentName:"td",href:"https://darutk.medium.com/oauth-2-0-client-authentication-4b5f929305d4"},"OAuth 2.0 Client Authentication")),(0,a.kt)("td",{parentName:"tr",align:null},"client_secret_basic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_PREFERRED_JWS_ALGORITHM"),(0,a.kt)("td",{parentName:"tr",align:null},"Can be used to select a preferred signing algorithm for id tokens. Examples include: ",(0,a.kt)("inlineCode",{parentName:"td"},"RS256")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"HS256"),". If your IdP includes ",(0,a.kt)("inlineCode",{parentName:"td"},"none")," before ",(0,a.kt)("inlineCode",{parentName:"td"},"RS256"),"/",(0,a.kt)("inlineCode",{parentName:"td"},"HS256")," in the list of signing algorithms, then this value ",(0,a.kt)("strong",{parentName:"td"},"MUST")," be set."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"user--group-provisioning-jit-provisioning"},"User & Group Provisioning (JIT Provisioning)"),(0,a.kt)("p",null,"By default, DataHub will optimistically attempt to provision users and groups that do not already exist at the time of login.\nFor users, we extract information like first name, last name, display name, & email to construct a basic user profile. If a groups claim is present,\nwe simply extract their names."),(0,a.kt)("p",null,"The default provisioning behavior can be customized using the following configs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# User and groups provisioning\nAUTH_OIDC_JIT_PROVISIONING_ENABLED=true\nAUTH_OIDC_PRE_PROVISIONING_REQUIRED=false\nAUTH_OIDC_EXTRACT_GROUPS_ENABLED=false\nAUTH_OIDC_GROUPS_CLAIM=<your-groups-claim-name>\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_JIT_PROVISIONING_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether DataHub users & groups should be provisioned on login if they do not exist."),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_PRE_PROVISIONING_REQUIRED"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the user should already exist in DataHub when they login, failing login if they are not. This is appropriate for situations in which users and groups are batch ingested and tightly controlled inside your environment."),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"Only applies if ",(0,a.kt)("inlineCode",{parentName:"td"},"AUTH_OIDC_JIT_PROVISIONING_ENABLED")," is set to true. This determines whether we should attempt to extract a list of group names from a particular claim in the OIDC attributes. Note that if this is enabled, each login will re-sync group membership with the groups in your Identity Provider, clearing the group membership that has been assigned through the DataHub UI. Enable with care!"),(0,a.kt)("td",{parentName:"tr",align:null},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTH_OIDC_GROUPS_CLAIM"),(0,a.kt)("td",{parentName:"tr",align:null},"Only applies if ",(0,a.kt)("inlineCode",{parentName:"td"},"AUTH_OIDC_EXTRACT_GROUPS_ENABLED")," is set to true. This determines which OIDC claims will contain a list of string group names. Accepts multiple claim names with comma-separated values. I.e: ",(0,a.kt)("inlineCode",{parentName:"td"},"groups, teams, departments"),"."),(0,a.kt)("td",{parentName:"tr",align:null},"groups")))),(0,a.kt)("h2",{id:"4-restart-datahub-frontend-react"},"4. Restart datahub-frontend-react"),(0,a.kt)("p",null,"Once configured, restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container will enable an indirect authentication flow in which DataHub delegates authentication to the specified identity provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml  up datahub-frontend-react\n")),(0,a.kt)("p",null,"Navigate to your DataHub domain to see SSO in action."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"By default, enabling OIDC will ",(0,a.kt)("em",{parentName:"p"},"not")," disable the dummy JAAS authentication path, which can be reached at the ",(0,a.kt)("inlineCode",{parentName:"p"},"/login"),"\nroute of the React app. To disable this authentication path, additionally specify the following config:\n",(0,a.kt)("inlineCode",{parentName:"p"},"AUTH_JAAS_ENABLED=false"))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Once a user is authenticated by the identity provider, DataHub will extract a username from the provided claims\nand grant DataHub access to the user by setting a pair of session cookies."),(0,a.kt)("p",null,"A brief summary of the steps that occur when the user navigates to the React app are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate")," endpoint in ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," server is initiated"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"/authenticate")," attempts to authenticate the request via session cookies"),(0,a.kt)("li",{parentName:"ol"},"If auth fails, the server issues a redirect to the Identity Provider's login experience"),(0,a.kt)("li",{parentName:"ol"},"The user logs in with the Identity Provider"),(0,a.kt)("li",{parentName:"ol"},"The Identity Provider authenticates the user and redirects back to DataHub's registered login redirect URL, providing an authorization code which\ncan be used to retrieve information on behalf of the authenticated user"),(0,a.kt)("li",{parentName:"ol"},"DataHub fetches the authenticated user's profile and extracts a username to identify the user on DataHub (eg. urn:li:corpuser:username)"),(0,a.kt)("li",{parentName:"ol"},"DataHub sets session cookies for the newly authenticated user"),(0,a.kt)("li",{parentName:"ol"},'DataHub redirects the user to the homepage ("/")')),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"No users can log in. Instead, I get redirected to the login page with an error. What do I do?"),(0,a.kt)("p",null,"This can occur for a variety of reasons, but most often it is due to misconfiguration of Single-Sign On, either on the DataHub\nside or on the Identity Provider side."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify that all values are consistent across them (e.g. the host URL where DataHub is deployed), and that no values are misspelled (client id, client secret)."),(0,a.kt)("li",{parentName:"ul"},"Verify that the scopes requested are supported by your Identity Provider and that the claim (i.e. attribute) DataHub uses for uniquely identifying the user is supported by your Identity Provider (refer to Identity Provider OpenID Connect documentation). By default, this claim is ",(0,a.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure the Discovery URI you've configured (",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_DISCOVERY_URI"),") is accessible where the datahub-frontend container is running. You can do this by issuing a basic CURL to the address (",(0,a.kt)("strong",{parentName:"li"},"Pro-Tip"),": you may also visit the address in your browser to check more specific details about your Identity Provider)."),(0,a.kt)("li",{parentName:"ul"},"Check the container logs for the ",(0,a.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," container. This should hopefully provide some additional context around why exactly the login handoff is not working.")),(0,a.kt)("p",null,"If all else fails, feel free to reach out to the DataHub Community on Slack for real-time support.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I'm seeing an error in the `datahub-frontend` logs when a user tries to login: Caused by: java.lang.RuntimeException: Failed to resolve user name claim from profile provided by Identity Provider. Missing attribute. Attribute: 'email', Regex: '(.*)', Profile: { ...."),(0,a.kt)("p",null,"This indicates that your Identity Provider does not provide the claim with name 'email', which DataHub\nuses by default to uniquely identify users within your organization."),(0,a.kt)("p",null,"To fix this, you may need to"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change the claim that is used as the unique user identifier to something else by changing the ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_USER_NAME_CLAIM"),' (e.g. to "name" or "preferred',(0,a.kt)("em",{parentName:"li"},'username") ',"_","OR")),(0,a.kt)("li",{parentName:"ol"},"Change the environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_SCOPE"),' to include the scope required to retrieve the claim with name "email"')),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," container / pod.")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"Check the documentation for your Identity Provider to learn more about the scope claims supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/guides/add-an-external-idp/openidconnect/main/"},"Registering an App in Okta")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"OpenID Connect in Google Identity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/auth-oidc"},"OpenID Connect authentication with Azure Active Directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/securing_apps/"},"Keycloak - Securing Applications and Services Guide"))))}g.isMDXComponent=!0}}]);