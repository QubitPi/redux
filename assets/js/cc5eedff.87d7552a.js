"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3403],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6425:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"motivation",title:"Motivation",description:"Introduction > Motivation: What problems does Redux try to solve?"},p="Motivation",u={unversionedId:"understanding/thinking-in-redux/motivation",id:"understanding/thinking-in-redux/motivation",title:"Motivation",description:"Introduction > Motivation: What problems does Redux try to solve?",source:"@site/../docs/understanding/thinking-in-redux/Motivation.md",sourceDirName:"understanding/thinking-in-redux",slug:"/understanding/thinking-in-redux/motivation",permalink:"/understanding/thinking-in-redux/motivation",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/understanding/thinking-in-redux/Motivation.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"motivation",title:"Motivation",description:"Introduction > Motivation: What problems does Redux try to solve?"},sidebar:"docs",previous:{title:"Implementing Undo History",permalink:"/usage/implementing-undo-history"},next:{title:"Three Principles",permalink:"/understanding/thinking-in-redux/three-principles"}},c={},d=[],l={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"As the requirements for JavaScript single-page applications have become increasingly complicated, ",(0,o.kt)("strong",{parentName:"p"},"our code must manage more state than ever before"),". This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on."),(0,o.kt)("p",null,"Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have ",(0,o.kt)("strong",{parentName:"p"},"lost control over the when, why, and how of its state.")," When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features."),(0,o.kt)("p",null,"As if this weren't bad enough, consider the ",(0,o.kt)("strong",{parentName:"p"},"new requirements becoming common in front-end product development"),". As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: ",(0,o.kt)("a",{parentName:"p",href:"https://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html"},"is it time to give up?")," The answer is ",(0,o.kt)("em",{parentName:"p"},"no"),"."),(0,o.kt)("p",null,"This complexity is difficult to handle as ",(0,o.kt)("strong",{parentName:"p"},"we're mixing two concepts")," that are very hard for the human mind to reason about: ",(0,o.kt)("strong",{parentName:"p"},"mutation and asynchronicity.")," I call them ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption"},"Mentos and Coke"),". Both can be great in separation, but together they create a mess. Libraries like ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react"},"React")," attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters."),(0,o.kt)("p",null,"Following in the steps of ",(0,o.kt)("a",{parentName:"p",href:"https://facebookarchive.github.io/flux"},"Flux"),", ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CQRS.html"},"CQRS"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaDev/EventSourcing.html"},"Event Sourcing"),", ",(0,o.kt)("strong",{parentName:"p"},"Redux attempts to make state mutations predictable")," by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the ",(0,o.kt)("a",{parentName:"p",href:"/understanding/thinking-in-redux/three-principles"},"three principles")," of Redux."))}h.isMDXComponent=!0}}]);