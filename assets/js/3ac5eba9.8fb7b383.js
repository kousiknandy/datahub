"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[93285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},l="Contributing",u={unversionedId:"docs/CONTRIBUTING",id:"version-0.12.1/docs/CONTRIBUTING",title:"Contributing",description:"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute.",source:"@site/versioned_docs/version-0.12.1/docs/CONTRIBUTING.md",sourceDirName:"docs",slug:"/contributing",permalink:"/docs/0.12.1/contributing",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md",tags:[],version:"0.12.1",frontMatter:{title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},sidebar:"overviewSidebar",previous:{title:"Code of Conduct",permalink:"/docs/0.12.1/code_of_conduct"},next:{title:"Articles & Talks",permalink:"/docs/0.12.1/links"}},p={},c=[{value:"Provide Feedback",id:"provide-feedback",level:2},{value:"Reporting Issues",id:"reporting-issues",level:2},{value:"Submitting a Request For Comment (RFC)",id:"submitting-a-request-for-comment-rfc",level:2},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",level:2},{value:"Commit Message Format",id:"commit-message-format",level:2},{value:"Type",id:"type",level:3},{value:"Description",id:"description",level:3},{value:"Body",id:"body",level:3},{value:"Footer",id:"footer",level:3},{value:"Revert",id:"revert",level:3}],m={toc:c},d="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute."),(0,n.kt)("h2",{id:"provide-feedback"},"Provide Feedback"),(0,n.kt)("p",null,"Have ideas about how to make DataHub better? Head over to ",(0,n.kt)("a",{parentName:"p",href:"https://feature-requests.datahubproject.io/"},"DataHub Feature Requests")," and tell us all about it!"),(0,n.kt)("p",null,"Show your support for other requests by upvoting; stay up to date on progess by subscribing for updates via email."),(0,n.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,n.kt)("p",null,"We use GitHub issues to track bug reports and submitting pull requests."),(0,n.kt)("p",null,"If you find a bug:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the GitHub issue search to check whether the bug has already been reported.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the issue has been fixed, try to reproduce the issue using the latest master branch of the repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the issue still reproduces or has not yet been reported, try to isolate the problem before opening an issue."))),(0,n.kt)("h2",{id:"submitting-a-request-for-comment-rfc"},"Submitting a Request For Comment (RFC)"),(0,n.kt)("p",null,"If you have a substantial feature or a design discussion that you'd like to have with the community follow the RFC process outlined ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.12.1/rfc"},"here")),(0,n.kt)("h2",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),(0,n.kt)("p",null,"Before you submit your Pull Request (PR), consider the following guidelines:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort."),(0,n.kt)("li",{parentName:"ul"},"Follow the ",(0,n.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"},"standard GitHub approach")," to create the PR. Please also follow our ",(0,n.kt)("a",{parentName:"li",href:"#commit-message-format"},"commit message format"),"."),(0,n.kt)("li",{parentName:"ul"},"If there are any breaking changes, potential downtime, deprecations, or big feature please add an update in ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.12.1/how/updating-datahub"},"Updating DataHub under Next"),"."),(0,n.kt)("li",{parentName:"ul"},"That's it! Thank you for your contribution!")),(0,n.kt)("h2",{id:"commit-message-format"},"Commit Message Format"),(0,n.kt)("p",null,"Please follow the ",(0,n.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits")," specification for the commit message format. In summary, each commit message consists of a ",(0,n.kt)("em",{parentName:"p"},"header"),", a ",(0,n.kt)("em",{parentName:"p"},"body")," and a ",(0,n.kt)("em",{parentName:"p"},"footer"),", separated by a single blank line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,n.kt)("p",null,"Any line of the commit message cannot be longer than 88 characters! This allows the message to be easier to read on GitHub as well as in various Git tools."),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("p",null,"Must be one of the following (based on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular convention"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"feat"),": A new feature"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"fix"),": A bug fix"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"docs"),": Documentation only changes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"perf"),": A code change that improves performance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts")),(0,n.kt)("p",null,"A scope may be provided to a commit\u2019s type, to provide additional contextual information and is contained within parenthesis, e.g., "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"feat(parser): add ability to parse arrays\n")),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"Each commit must contain a succinct description of the change:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,n.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,n.kt)("li",{parentName:"ul"},"no dot(.) at the end")),(0,n.kt)("h3",{id:"body"},"Body"),(0,n.kt)("p",null,'Just as in the description, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.'),(0,n.kt)("h3",{id:"footer"},"Footer"),(0,n.kt)("p",null,"The footer should contain any information about ",(0,n.kt)("em",{parentName:"p"},"Breaking Changes"),", and is also the place to reference GitHub issues that this commit ",(0,n.kt)("em",{parentName:"p"},"Closes"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Breaking Changes")," should start with the words ",(0,n.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two new lines. The rest of the commit message is then used for this."),(0,n.kt)("h3",{id:"revert"},"Revert"),(0,n.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"revert:"),", followed by the description. In the body it should say: ",(0,n.kt)("inlineCode",{parentName:"p"},"Refs: <hash1> <hash2> ..."),", where the hashs are the SHA of the commits being reverted, e.g. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"revert: let us never again speak of the noodle incident\n\nRefs: 676104e, a215868\n")))}h.isMDXComponent=!0}}]);