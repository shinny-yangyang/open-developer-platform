(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(10),a=(n(0),n(175)),i={id:"project-documentation",title:"Project Documentation"},c={id:"development-infrastructure/project-documentation",title:"Project Documentation",description:"FINOS collaboration services include several ways to write, collaborate and publish project documentation.",source:"@site/../docs/development-infrastructure/project-documentation.md",permalink:"/open-developer-platform/docs/development-infrastructure/project-documentation",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/project-documentation.md",sidebar:"mainSidebar",previous:{title:"Whitesource",permalink:"/open-developer-platform/docs/development-infrastructure/code-validation/whitesource"},next:{title:"Continuous Delivery",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-delivery"}},s=[{value:"Docusaurus",id:"docusaurus",children:[{value:"Docusaurus Build Action",id:"docusaurus-build-action",children:[]},{value:"Docusaurus 2 (alpha)",id:"docusaurus-2-alpha",children:[]},{value:"Get Started in 5 Minutes",id:"get-started-in-5-minutes",children:[]},{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Editing Content",id:"editing-content",children:[]},{value:"Managing the navigation bar",id:"managing-the-navigation-bar",children:[]}]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"FINOS collaboration services include several ways to write, collaborate and publish project documentation."),Object(a.b)("p",null,"After experimenting with few tools, services and technologies, we have chosen ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#using-docusaurus"}),"Docusaurus")," (and GitHub Pages) to be the best choice; ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#other-solutions"}),"other solutions")," are reported down below."),Object(a.b)("h2",{id:"docusaurus"},"Docusaurus"),Object(a.b)("p",null,"Docusaurus is a static website generator written in React and available open source under the Apache 2.0 license. A similar technology is Jekyll, which provides a tighter integration with GitHub Pages, but lacks of development support (as in Ruby) and tools for local development."),Object(a.b)("p",null,"Given the significant amount of FINOS projects that adopted this framework, it became our go-to solution to build project documentation websites; if you're getting started, you may want to use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/finos/project-blueprint"}),"FINOS project blueprint")," repository template, which already provides a built-in Docusaurus website; there is also a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#docusaurus-build-action"}),"Docusaurus Build action for GitHub.com")," available and documented below."),Object(a.b)("p",null,"This page walks through the use of docusaurus on a local environment; full documentation can be found on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docusaurus.io/"}),"docusaurus website"),"."),Object(a.b)("h3",{id:"docusaurus-build-action"},"Docusaurus Build Action"),Object(a.b)("p",null,"FINOS have developed a GitHub Action to automatically build the Docusaurus websites and publish them into GitHub Pages; the action works on upstream repositories (ie ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform"}),"https://github.com/finos/open-developer-platform"),") as well as forked ones (ie ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/maoo/open-developer-platform"}),"https://github.com/maoo/open-developer-platform"),"), providing a simple way to stage the web version of a change to a Docusaurus website."),Object(a.b)("h4",{id:"known-issue"},"Known issue"),Object(a.b)("p",null,"When the action runs for the first time, GitHub automatically configures GitHub Pages to read contents from the gh-pages branch, but for some reason, it doesn\u2019t build the HTTP(s) endpoint. To enable it:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Visit ",Object(a.b)("inlineCode",{parentName:"li"},"https://github.com/<org/user name>/<repository name>/settings")),Object(a.b)("li",{parentName:"ol"},"Find the ",Object(a.b)("inlineCode",{parentName:"li"},"GitHub Pages")," section"),Object(a.b)("li",{parentName:"ol"},"Select the ",Object(a.b)("inlineCode",{parentName:"li"},"master")," branch from the ",Object(a.b)("inlineCode",{parentName:"li"},"Source")," dropdown"),Object(a.b)("li",{parentName:"ol"},"Scroll down again to the ",Object(a.b)("inlineCode",{parentName:"li"},"GitHub Pages")," section"),Object(a.b)("li",{parentName:"ol"},"At the top it should say\xa0Your site is published at ",Object(a.b)("inlineCode",{parentName:"li"},"https://<org/user name>.github.io/<repository name>")),Object(a.b)("li",{parentName:"ol"},"Select the gh-pages branch from the ",Object(a.b)("inlineCode",{parentName:"li"},"Source")," dropdown")),Object(a.b)("p",null,"It may take 20 to 40 minutes to enable the URL, until then you may get a 404 error."),Object(a.b)("p",null,"The action can be ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/finos/open-developer-platform/blob/master/.github/workflows/docusaurus.yml"}),"copied from the ODP GitHub repository")),Object(a.b)("p",null,"In order to use the action, simply copy the raw file content into a file called ",Object(a.b)("inlineCode",{parentName:"p"},".github/workflows/docusaurus.yml")," , then push the changes; the action should automatically run and deploy the HTML files into the ",Object(a.b)("inlineCode",{parentName:"p"},"gh-pages")," branch."),Object(a.b)("h3",{id:"docusaurus-2-alpha"},"Docusaurus 2 (alpha)"),Object(a.b)("p",null,"This document refers to Docusaurus 1.x version."),Object(a.b)("p",null,"The new version of docusaurus is currently (March 2020) in alpha, and brings lots of improvements; for those starting to use Docusaurus now, it is strongly suggested to start using this version. This version is built with Docusaurus 2."),Object(a.b)("h3",{id:"get-started-in-5-minutes"},"Get Started in 5 Minutes"),Object(a.b)("p",null,"Regardless of the language, eco-system or platform you're using, run the following commands."),Object(a.b)("p",null,"Check if NodeJS and NPM command-line tools are installed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm -v\nnode -v\n")),Object(a.b)("p",null,"Create a Docusaurus project and start the website locally:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"npm i -g docusaurus-init docusaurus\nmkdir docusaurus-test\ncd docusaurus-test\ndocusaurus-init\nmv docs-examples-from-docusaurus docs\nmv website/blog-examples-from-docusaurus website/blog\ncd website\ndocusaurus-start\n")),Object(a.b)("h3",{id:"directory-structure"},"Directory Structure"),Object(a.b)("p",null,"Your project file structure should look something like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"/project_root\n  docs/\n    doc-1.md\n    doc-2.md\n    doc-3.md\n  website/\n    blog/\n      2016-3-11-oldest-post.md\n      2017-10-24-newest-post.md\n    core/\n    node_modules/\n    pages/\n    static/\n      css/\n      img/\n    package.json\n    sidebar.json\n    siteConfig.js\n")),Object(a.b)("p",null,"In Docusaurus 2, the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/installation#project-structure"}),"project structure have slightly changed"),". "),Object(a.b)("h3",{id:"editing-content"},"Editing Content"),Object(a.b)("p",null,"Website pages are represented by MarkDown files in the the ",Object(a.b)("inlineCode",{parentName:"p"},"docs/")," folder (in Docusaurus 2, also MarkDown React files are supported); the page ",Object(a.b)("inlineCode",{parentName:"p"},"id")," maps to the URL slug of the page; the title renders out as ",Object(a.b)("inlineCode",{parentName:"p"},"<h1>"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"---\nid: page-needs-edit\ntitle: This Doc Needs To Be Edited\n---\n\nThis is the page content!\n")),Object(a.b)("h3",{id:"managing-the-navigation-bar"},"Managing the navigation bar"),Object(a.b)("p",null,"Add links to docs, custom pages or external links by editing the ",Object(a.b)("inlineCode",{parentName:"p"},"headerLinks")," field of ",Object(a.b)("inlineCode",{parentName:"p"},"website/siteConfig.js"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"{\n  headerLinks: [\n    ...\n    /* you can add docs */\n    { doc: 'my-examples', label: 'Examples' },\n    /* you can add custom pages */\n    { page: 'help', label: 'Help' },\n    /* you can add external links */\n    { href: 'https://github.com/facebook/Docusaurus', label: 'GitHub' },\n    ...\n  ],\n  ...\n}\n")),Object(a.b)("p",null,"For more information, checkout the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docusaurus.io/docs/en/navigation"}),"docusaurus navigation docs"),"."),Object(a.b)("p",null,"In Docusaurus 2, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/sidebar"}),"navigation have been greatly improved"),"."))}l.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(m,c({ref:t},u,{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);