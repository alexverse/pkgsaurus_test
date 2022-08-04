"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[7010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},l="lint_r",o={unversionedId:"functions/lint_r",id:"functions/lint_r",title:"lint_r",description:"Lint R",source:"@site/reference/functions/lint_r.md",sourceDirName:"functions",slug:"/functions/lint_r",permalink:"/pkgsaurus_test/reference/functions/lint_r",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"init",permalink:"/pkgsaurus_test/reference/functions/init"},next:{title:"lint_sass",permalink:"/pkgsaurus_test/reference/functions/lint_sass"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Details",id:"details",level:2},{value:"Value",id:"value",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lint_r"},(0,i.kt)("inlineCode",{parentName:"h1"},"lint_r")),(0,i.kt)("p",null,"Lint R"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"{lintr}")," package to check all R sources in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/testthat")," directories\nfor style errors."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},"lint_r()\n")),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"The linter rules can be adjusted in the ",(0,i.kt)("inlineCode",{parentName:"p"},".lintr")," file."),(0,i.kt)("p",null," You can set the maximum number of accepted style errors\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy_max_lint_r_errors")," option in ",(0,i.kt)("inlineCode",{parentName:"p"},"rhino.yml")," .\nThis can be useful when inheriting legacy code with multiple styling issues."),(0,i.kt)("h2",{id:"value"},"Value"),(0,i.kt)("p",null,"None. This function is called for side effects."))}p.isMDXComponent=!0}}]);