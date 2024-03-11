"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7996],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(i),m=r,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return i?n.createElement(d,a(a({ref:t},p),{},{components:i})):n.createElement(d,a({ref:t},p))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},77555:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});i(67294);var n=i(3905);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const s={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/powerbi/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/configuration.md"},c="Configuring Your PowerBI Connector to DataHub",l={unversionedId:"docs/quick-ingestion-guides/powerbi/configuration",id:"version-0.13.0/docs/quick-ingestion-guides/powerbi/configuration",title:"Configuration",description:"Now that you have created a DataHub specific Azure AD app with the relevant access in the prior step, it's now time to set up a connection via the DataHub UI.",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/powerbi/configuration.md",sourceDirName:"docs/quick-ingestion-guides/powerbi",slug:"/quick-ingestion-guides/powerbi/configuration",permalink:"/docs/quick-ingestion-guides/powerbi/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/configuration.md",tags:[],version:"0.13.0",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/powerbi/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/quick-ingestion-guides/powerbi/setup"},next:{title:"Overview",permalink:"/docs/quick-ingestion-guides/looker/overview"}},p={},u=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],g={toc:u},m="wrapper";function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){r(e,t,i[t])}))}return e}({},g,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-your-powerbi-connector-to-datahub"},"Configuring Your PowerBI Connector to DataHub"),(0,n.kt)("p",null,"Now that you have created a DataHub specific Azure AD app with the relevant access in ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/powerbi/setup"},"the prior step"),", it's now time to set up a connection via the DataHub UI."),(0,n.kt)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_ingestion_button.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,n.kt)("strong",{parentName:"li"},"Create new secret"),".")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_secrets_tab.png"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a client id secret"),(0,n.kt)("p",{parentName:"li"},"This will securely store your PowerBI ",(0,n.kt)("inlineCode",{parentName:"p"},"Application (client) ID")," within DataHub"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enter a name like ",(0,n.kt)("inlineCode",{parentName:"li"},"POWER_BI_CLIENT_ID")," - we will use this later to refer to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Application (client) ID")),(0,n.kt)("li",{parentName:"ul"},"Enter the ",(0,n.kt)("inlineCode",{parentName:"li"},"Application (client) ID")),(0,n.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"))))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"Application (client) ID",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-client-id-secret.png"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a secret to store the Azure AD Client Secret"),(0,n.kt)("p",{parentName:"li"},'This will securely store your client secret"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enter a name like ",(0,n.kt)("inlineCode",{parentName:"li"},"POWER_BI_CLIENT_SECRET")," - we will use this later to refer to the client secret"),(0,n.kt)("li",{parentName:"ul"},"Enter the client secret"),(0,n.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"))))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"Azure AD app Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-client-secret.png"})),(0,n.kt)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Sources")," tab and click ",(0,n.kt)("strong",{parentName:"p"},"Create new source")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose PowerBI"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"Select PowerBI from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-source-window.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter details into the PowerBI Recipe"),(0,n.kt)("p",{parentName:"li"},"You need to set minimum 3 field in the recipe:"),(0,n.kt)("p",{parentName:"li"},"a. ",(0,n.kt)("strong",{parentName:"p"},"tenant_id:")," This is the unique identifier (GUID) of the Azure Active Directory instance. Tenant Id can be found at: PowerBI Portal -> Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"?")," at top-right corner -> Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"About PowerBI")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"Select PowerBI from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-portal-about-setting-window.png"})),(0,n.kt)("p",{parentName:"li"},"On ",(0,n.kt)("inlineCode",{parentName:"p"},"About PowerBI")," window copy ",(0,n.kt)("inlineCode",{parentName:"p"},"ctid"),":"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"copy ctid",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-portal-about-window.png"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'b. **client_id:** Use the secret POWER_BI_CLIENT_ID with the format "${POWER_BI_CLIENT_ID}".\n\nc. **client_secret:** Use the secret POWER_BI_CLIENT_SECRET with the format "${POWER_BI_CLIENT_SECRET}".\n')),(0,n.kt)("p",null,"Optionally, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"workspace_id_pattern")," field to filter for specific workspaces."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'config:\n     ...\n     workspace_id_pattern:\n        allow:\n          - "258829b1-82b1-4bdb-b9fb-6722c718bbd3"\n')),(0,n.kt)("p",null,"Your recipe should look something like this:"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",alt:"tenant id",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-recipe-window.png"})),(0,n.kt)("p",null,"After completing the recipe, click ",(0,n.kt)("strong",{parentName:"p"},"Next"),".    "),(0,n.kt)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,n.kt)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your PowerBI instance."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure you've configured your correct timezone"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next")," when you are done"))),(0,n.kt)("h2",{id:"finish-up"},"Finish Up"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,n.kt)("strong",{parentName:"li"},"Save and Run"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-source-window.png"})))),(0,n.kt)("p",null,"You will now find your new ingestion source running"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-running.png"})),(0,n.kt)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-succeeded.png"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,n.kt)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-history.png"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,n.kt)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-detail.png"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-ingestion-assets.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up PowerBI as an ingestion source for DataHub!"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}d.isMDXComponent=!0}}]);