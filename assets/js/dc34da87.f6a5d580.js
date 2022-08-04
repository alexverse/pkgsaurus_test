"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[5427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,title:"Box Modules"},r="Rationale",l={unversionedId:"explanation/box-modules",id:"explanation/box-modules",title:"Box Modules",description:"With large applications it is critical for maintainability to properly",source:"@site/docs/explanation/box-modules.md",sourceDirName:"explanation",slug:"/explanation/box-modules",permalink:"/pkgsaurus_test/docs/explanation/box-modules",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Box Modules"},sidebar:"tutorialSidebar",previous:{title:"App Structure",permalink:"/pkgsaurus_test/docs/explanation/application-structure"},next:{title:"Configuration File",permalink:"/pkgsaurus_test/docs/explanation/rhino-yml"}},p={},s=[{value:"Init files",id:"init-files",level:2},{value:"Example",id:"example",level:3},{value:"Reexports",id:"reexports",level:2},{value:"Example",id:"example-1",level:3},{value:"Lazy-loaded data",id:"lazy-loaded-data",level:3},{value:"Trailing commas",id:"trailing-commas",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rationale"},"Rationale"),(0,i.kt)("p",null,"With large applications it is critical for maintainability to properly\nstructure your code using files and directories. R comes with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"library()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"source()")," functions, but its functionality is limited\nwhen it comes to dividing your code into modules and expressing their\ndependencies."),(0,i.kt)("p",null,"To address this, Rhino uses the ",(0,i.kt)("a",{parentName:"p",href:"https://klmr.me/box/"},"box")," R package,\nwhich allows you to modularize your code in a similar way to languages\nlike Python and Java:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"box::use(\n  dplyr, # Import dplyr. Its functions can be used via `$`, e.g. `dplyr$filter`.\n  shiny[reactive], # Import the `reactive()` function from shiny package.\n)\nbox::use(\n  logic/data_validation, # Import the `logic/data_validation.R` module.\n)\n")),(0,i.kt)("p",null,"Box modules force you to be explicit about the dependencies between your\nfiles and packages. The graph of dependencies is visible at a glance in\nan app developed with box, while the traditional approach (",(0,i.kt)("inlineCode",{parentName:"p"},"global.R"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"library()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"source()"),") makes it easy to build an app which only the\nauthor understands. Introduction of box to existing apps written without\nit has helped to improve the code structure and find bugs."),(0,i.kt)("h1",{id:"features"},"Features"),(0,i.kt)("p",null,"The best place to learn about box is its official\n",(0,i.kt)("a",{parentName:"p",href:"https://klmr.me/box/"},"documentation"),". Some useful box features are also\nexplained in the sections below."),(0,i.kt)("h2",{id:"init-files"},"Init files"),(0,i.kt)("p",null,"Objects exported by an ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__.R")," file can be imported from its parent\ndirectory."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Assume we have an ",(0,i.kt)("inlineCode",{parentName:"p"},"app/foo/__init__.R")," file with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#\' @export\nbar <- "Hello!"\n')),(0,i.kt)("p",null,"We can now import ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," as if it was defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/foo.R"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"box::use(\n  app/foo[bar]\n)\n")),(0,i.kt)("p",null,"This mechanism can be used in combination with reexports to make it\neasier to import multiple modules from a single directory."),(0,i.kt)("h2",{id:"reexports"},"Reexports"),(0,i.kt)("p",null,"A module can reexport objects imported from a different module by\napplying ",(0,i.kt)("inlineCode",{parentName:"p"},"#' @export")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"box::use()")," statement."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Assume we have modules ",(0,i.kt)("inlineCode",{parentName:"p"},"analysis_tab.R")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"download_tab.R")," in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"app/view")," directory. We can reexport them from ",(0,i.kt)("inlineCode",{parentName:"p"},"app/view/__init__.R"),"\nlike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#' @export\nbox::use(\n  app/view/analysis_tab,\n  app/view/download_tab\n)\n")),(0,i.kt)("p",null,"The following ",(0,i.kt)("inlineCode",{parentName:"p"},"box::use()")," statements are now equivalent:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"box::use(\n  app/view/analysis_tab,\n  app/view/download_tab,\n)\nbox::use(\n  app/view[analysis_tab, download_tab],\n)\n")),(0,i.kt)("h1",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"lazy-loaded-data"},"Lazy-loaded data"),(0,i.kt)("p",null,"Box 1.1.0 doesn\u2019t support lazy-loaded\n",(0,i.kt)("a",{parentName:"p",href:"https://r-pkgs.org/data.html#data-data"},"data"),", so\ne.g.\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"box::use(datasets[mtcars])")," won\u2019t work. This feature should be\navailable in the next release (see this\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klmr/box/issues/219"},"issue"),"). For now please use\n",(0,i.kt)("inlineCode",{parentName:"p"},"datasets::mtcars")," in your code."),(0,i.kt)("h3",{id:"trailing-commas"},"Trailing commas"),(0,i.kt)("p",null,"Box 1.1.0 allows trailing commas in ",(0,i.kt)("inlineCode",{parentName:"p"},"box::use()")," statements and code,\nbut they can cause problems in some circumstances:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reexports (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/klmr/box/issues/263"},"issue"),")."),(0,i.kt)("li",{parentName:"ol"},"Functions accessed via ",(0,i.kt)("inlineCode",{parentName:"li"},"$"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/klmr/box/issues/266"},"issue"),").")),(0,i.kt)("p",null,"Both issues should be fixed in the nearest release."))}d.isMDXComponent=!0}}]);