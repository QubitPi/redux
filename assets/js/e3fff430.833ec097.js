"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7760],{7163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(8168),i=(r(6540),r(5680));const a={id:"splitting-reducer-logic",title:"Splitting Reducer Logic",sidebar_label:"Splitting Reducer Logic",description:"Structuring Reducers > Splitting Reducer Logic: Terms for different reducer use cases"},o="Splitting Up Reducer Logic",c={unversionedId:"usage/structuring-reducers/splitting-reducer-logic",id:"usage/structuring-reducers/splitting-reducer-logic",title:"Splitting Reducer Logic",description:"Structuring Reducers > Splitting Reducer Logic: Terms for different reducer use cases",source:"@site/../docs/usage/structuring-reducers/SplittingReducerLogic.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/splitting-reducer-logic",permalink:"/usage/structuring-reducers/splitting-reducer-logic",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/structuring-reducers/SplittingReducerLogic.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"splitting-reducer-logic",title:"Splitting Reducer Logic",sidebar_label:"Splitting Reducer Logic",description:"Structuring Reducers > Splitting Reducer Logic: Terms for different reducer use cases"},sidebar:"docs",previous:{title:"Basic Reducer Structure",permalink:"/usage/structuring-reducers/basic-reducer-structure"},next:{title:"Refactoring Reducers Example",permalink:"/usage/structuring-reducers/refactoring-reducer-example"}},s={},u=[],l={toc:u},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"splitting-up-reducer-logic"},"Splitting Up Reducer Logic"),(0,i.yg)("p",null,"For any meaningful application, putting ",(0,i.yg)("em",{parentName:"p"},"all")," your update logic into a single reducer function is quickly going to become unmaintainable. While there's no single rule for how long a function should be, it's generally agreed that functions should be relatively short and ideally only do one specific thing. Because of this, it's good programming practice to take pieces of code that are very long or do many different things, and break them into smaller pieces that are easier to understand."),(0,i.yg)("p",null,"Since a Redux reducer is ",(0,i.yg)("em",{parentName:"p"},"just")," a function, the same concept applies. You can split some of your reducer logic out into another function, and call that new function from the parent function."),(0,i.yg)("p",null,"These new functions would typically fall into one of three categories:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Small utility functions containing some reusable chunk of logic that is needed in multiple places (which may or may not be actually related to the specific business logic)"),(0,i.yg)("li",{parentName:"ol"},"Functions for handling a specific update case, which often need parameters other than the typical ",(0,i.yg)("inlineCode",{parentName:"li"},"(state, action)")," pair"),(0,i.yg)("li",{parentName:"ol"},"Functions which handle ",(0,i.yg)("em",{parentName:"li"},"all")," updates for a given slice of state. These functions do generally have the typical ",(0,i.yg)("inlineCode",{parentName:"li"},"(state, action)")," parameter signature")),(0,i.yg)("p",null,"For clarity, these terms will be used to distinguish between different types of functions and different use cases:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"reducer")),": any function with the signature ",(0,i.yg)("inlineCode",{parentName:"li"},"(state, action) -> newState")," (ie, any function that ",(0,i.yg)("em",{parentName:"li"},"could")," be used as an argument to ",(0,i.yg)("inlineCode",{parentName:"li"},"Array.prototype.reduce"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"root reducer")),": the reducer function that is actually passed as the first argument to ",(0,i.yg)("inlineCode",{parentName:"li"},"createStore"),". This is the only part of the reducer logic that ",(0,i.yg)("em",{parentName:"li"},"must")," have the ",(0,i.yg)("inlineCode",{parentName:"li"},"(state, action) -> newState")," signature."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"slice reducer")),": a reducer that is being used to handle updates to one specific slice of the state tree, usually done by passing it to ",(0,i.yg)("inlineCode",{parentName:"li"},"combineReducers")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"case function")),": a function that is being used to handle the update logic for a specific action. This may actually be a reducer function, or it may require other parameters to do its work properly."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"higher-order reducer")),": a function that takes a reducer function as an argument, and/or returns a new reducer function as a result (such as ",(0,i.yg)("inlineCode",{parentName:"li"},"combineReducers"),", or ",(0,i.yg)("inlineCode",{parentName:"li"},"redux-undo"),")")),(0,i.yg)("p",null,'The term "',(0,i.yg)("em",{parentName:"p"},"sub-reducer"),'" has also been used in various discussions to mean any function that is not the root reducer, although the term is not very precise. Some people may also refer to some functions as "',(0,i.yg)("em",{parentName:"p"},"business logic"),'" (functions that relate to application-specific behavior) or "',(0,i.yg)("em",{parentName:"p"},"utility functions"),'" (generic functions that are not application-specific).'),(0,i.yg)("p",null,"Breaking down a complex process into smaller, more understandable parts is usually described with the term ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},(0,i.yg)("a",{parentName:"em",href:"https://stackoverflow.com/questions/947874/what-is-functional-decomposition"},"functional decomposition"))),". This term and concept can be applied generically to any code. However, in Redux it is ",(0,i.yg)("em",{parentName:"p"},"very")," common to structure reducer logic using approach #3, where update logic is delegated to other functions based on slice of state. Redux refers to this concept as ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"reducer composition")),", and it is by far the most widely-used approach to structuring reducer logic. In fact, it's so common that Redux includes a utility function called ",(0,i.yg)("a",{parentName:"p",href:"/api/combinereducers"},(0,i.yg)("inlineCode",{parentName:"a"},"combineReducers()")),", which specifically abstracts the process of delegating work to other reducer functions based on slices of state. However, it's important to note that it is not the ",(0,i.yg)("em",{parentName:"p"},"only")," pattern that can be used. In fact, it's entirely possible to use all three approaches for splitting up logic into functions, and usually a good idea as well. The ",(0,i.yg)("a",{parentName:"p",href:"/usage/structuring-reducers/refactoring-reducer-example"},"Refactoring Reducers")," section shows some examples of this in action."))}g.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);