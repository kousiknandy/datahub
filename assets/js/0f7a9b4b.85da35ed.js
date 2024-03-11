"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[69367],{11420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});a(67294);var n=a(3905),s=a(51715),i=a(7626);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const p={sidebar_position:53,title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},d="Superset",u={unversionedId:"docs/generated/ingestion/sources/superset",id:"version-0.12.1/docs/generated/ingestion/sources/superset",title:"Superset",description:"Certified",source:"@site/versioned_docs/version-0.12.1/docs/generated/ingestion/sources/superset.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/superset",permalink:"/docs/0.12.1/generated/ingestion/sources/superset",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md",tags:[],version:"0.12.1",sidebarPosition:53,frontMatter:{sidebar_position:53,title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},sidebar:"overviewSidebar",previous:{title:"SQLAlchemy",permalink:"/docs/0.12.1/generated/ingestion/sources/sqlalchemy"},next:{title:"Tableau",permalink:"/docs/0.12.1/generated/ingestion/sources/tableau"}},c={},m=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],g={toc:m},f="wrapper";function k(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"superset"},"Superset"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/0.12.1/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Optionally enabled via stateful_ingestion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Supported by default")))),(0,n.kt)("p",null,"This plugin extracts the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Charts, dashboards, and associated metadata")),(0,n.kt)("p",null,"See documentation for superset's /security/login at ",(0,n.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/rest-api"},"https://superset.apache.org/docs/rest-api")," for more details on superset's login api."),(0,n.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[superset]'\n")),(0,n.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.12.1/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n\nsink:\n  # sink configs\n")),(0,n.kt)("h3",{id:"config-details"},"Config Details"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Note that a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.kt)("div",{className:"config-table"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Superset host URL. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"http://localhost:8088")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"database_alias"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"map(str,string)"))),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"display_uri"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"optional URL to use in links (if ",(0,n.kt)("inlineCode",{parentName:"td"},"connect_uri")," is only for ingestion)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"options"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"object"))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"default-line "},"Default: ",(0,n.kt)("span",{className:"default-value"},"{","}")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"password"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Superset password.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"provider"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Superset provider. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"db")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"username"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Superset username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"env"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"string"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Environment to use in namespace when constructing URNs ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"PROD")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Superset Stateful Ingestion Config.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"enabled"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The type of the ingestion state provider registered with datahub. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"False")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("div",{className:"path-line"},(0,n.kt)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.kt)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.kt)("div",{className:"type-name-line"},(0,n.kt)("span",{className:"type-name"},"boolean"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.kt)("span",{className:"default-value"},"True")))))))),(0,n.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SupersetConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "title": "Stateful Ingestion",\n      "description": "Superset Stateful Ingestion Config.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n        }\n      ]\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Superset host URL.",\n      "default": "http://localhost:8088",\n      "type": "string"\n    },\n    "display_uri": {\n      "title": "Display Uri",\n      "description": "optional URL to use in links (if `connect_uri` is only for ingestion)",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Superset username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Superset password.",\n      "type": "string"\n    },\n    "provider": {\n      "title": "Provider",\n      "description": "Superset provider.",\n      "default": "db",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "default": {},\n      "type": "object"\n    },\n    "env": {\n      "title": "Env",\n      "description": "Environment to use in namespace when constructing URNs",\n      "default": "PROD",\n      "type": "string"\n    },\n    "database_alias": {\n      "title": "Database Alias",\n      "description": "Can be used to change mapping for database names in superset to what you have in datahub",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "The type of the ingestion state provider registered with datahub.",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.kt)("p",null,"If you were using ",(0,n.kt)("inlineCode",{parentName:"p"},"database_alias")," in one of your other ingestions to rename your databases to something else based on business needs you can rename them in superset also"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n    database_alias:\n      example_name_1: business_name_1\n      example_name_2: business_name_2\n\nsink:\n  # sink configs\n")),(0,n.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Class Name: ",(0,n.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.superset.SupersetSource")),(0,n.kt)("li",{parentName:"ul"},"Browse on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/superset.py"},"GitHub"))),(0,n.kt)("h2",null,"Questions"),(0,n.kt)("p",null,"If you've got any questions on configuring ingestion for Superset, feel free to ping us on ",(0,n.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}k.isMDXComponent=!0}}]);