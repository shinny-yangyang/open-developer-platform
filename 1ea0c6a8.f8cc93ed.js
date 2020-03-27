(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(10),o=(r(0),r(175)),c=r(177),i={id:"sonarcloud",title:"Sonar Cloud"},l={id:"development-infrastructure/code-validation/sonarcloud",title:"Sonar Cloud",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/code-validation/sonarcloud.mdx",permalink:"/open-developer-platform/docs/development-infrastructure/code-validation/sonarcloud",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/sonarcloud.mdx",sidebar:"mainSidebar",previous:{title:"Node Security",permalink:"/open-developer-platform/docs/development-infrastructure/code-validation/nodesecurity"},next:{title:"Whitesource",permalink:"/open-developer-platform/docs/development-infrastructure/code-validation/whitesource"}},u=[{value:"Request access",id:"request-access",children:[]},{value:"Request access",id:"request-access-1",children:[]},{value:"Build configuration",id:"build-configuration",children:[]}],b={rightToc:u};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{height:"150px",alt:"sonarcloud-logo",src:Object(c.a)("img/vendors/sonarcloud-logo.png")}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:"left"})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Name")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"sonarcloud")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Status")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Delivered")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Link")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"sonarcloud.io"}),"sonarcloud.io"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Topics")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Security, Quality")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Languages")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Java, Javascript, C#")))),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sonarcloud.io/"}),"SonarCloud")," is a service operated by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.sonarsource.com/"}),"SonarSource"),", the company that develops and promotes open-source code quality products ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.sonarqube.org/"}),"SonarQube")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.sonarlint.org/"}),"SonarLint"),"; SonarSource provides SonarCloud for open source projects, free of charge."),Object(o.b)("p",null,"Below are some of the most important features used by Foundation projects:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Integration with CI environments"),Object(o.b)("li",{parentName:"ol"},"Measures test coverage"),Object(o.b)("li",{parentName:"ol"},"Scans code for security vulnerabilities"),Object(o.b)("li",{parentName:"ol"},"Scans code for bad practices (duplicated logic, debts and code smells)"),Object(o.b)("li",{parentName:"ol"},"Scans code for bugs")),Object(o.b)("img",{alt:"sonarcloud-dashboard",src:Object(c.a)("img/vendors/sonarcloud-dashboard.png")}),Object(o.b)("h2",{id:"request-access"},"Request access"),Object(o.b)("p",null,"Sign into ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://sonarcloud.com/"}),"sonarcloud.com")," using your GitHub credentials and configure your project from the dashboard."),Object(o.b)("h2",{id:"request-access-1"},"Request access"),Object(o.b)("p",null,"Sign into ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"sonarcloud.io"}),"sonarcloud.io")," and register your Github project."),Object(o.b)("h2",{id:"build-configuration"},"Build configuration"),Object(o.b)("p",null,"There are different ways to enable Sonar in your project, follow the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://about.sonarcloud.io/get-started/"}),"Getting Started guide")," to know more."),Object(o.b)("p",null,"You can configure a SonarCloud badge by adding the following syntax at the top of your README.md:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=<group-id>%3A<artifact-id>&metric=alert_status)](https://sonarcloud.io/dashboard?id=&lt;group-id&gt;%3A&lt;artifact-id>)\n")),Object(o.b)("p",null,"From the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://sonarcloud.io/account/security/"}),Object(o.b)("inlineCode",{parentName:"a"},"Account > Security"))," menu of SonarCloud dashboard, you'll be able to generate the token that needs to be passed as ",Object(o.b)("inlineCode",{parentName:"p"},"SONAR_TOKEN")," environment variable."))}s.isMDXComponent=!0},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),p=a,m=s["".concat(c,".").concat(p)]||s[p]||d[p]||o;return r?n.a.createElement(m,i({ref:t},u,{components:r})):n.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},176:function(e,t,r){"use strict";var a=r(0),n=r(56);t.a=function(){return Object(a.useContext)(n.a)}},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(178);var a=r(176);function n(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},178:function(e,t,r){"use strict";var a=r(8),n=r(20),o=r(179),c="".startsWith;a(a.P+a.F*r(180)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return c?c.call(t,a,r):t.slice(r,r+a.length)===a}})},179:function(e,t,r){var a=r(76),n=r(28);e.exports=function(e,t,r){if(a(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},180:function(e,t,r){var a=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,!"/./"[e](t)}catch(n){}}return!0}}}]);