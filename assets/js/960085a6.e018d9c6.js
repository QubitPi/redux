"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6898],{709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const i={id:"using-combinereducers",title:"Using combineReducers",description:"Structuring Reducers > Using combineReducers: Explanations of how combineReducers works in practice",hide_title:!0},o=void 0,s={unversionedId:"usage/structuring-reducers/using-combinereducers",id:"usage/structuring-reducers/using-combinereducers",title:"Using combineReducers",description:"Structuring Reducers > Using combineReducers: Explanations of how combineReducers works in practice",source:"@site/../docs/usage/structuring-reducers/UsingCombineReducers.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/using-combinereducers",permalink:"/usage/structuring-reducers/using-combinereducers",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/structuring-reducers/UsingCombineReducers.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"using-combinereducers",title:"Using combineReducers",description:"Structuring Reducers > Using combineReducers: Explanations of how combineReducers works in practice",hide_title:!0},sidebar:"docs",previous:{title:"Refactoring Reducers Example",permalink:"/usage/structuring-reducers/refactoring-reducer-example"},next:{title:"Beyond combineReducers",permalink:"/usage/structuring-reducers/beyond-combinereducers"}},c={},u=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Defining State Shape",id:"defining-state-shape",level:2}],d={toc:u},l="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(l,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"using-combinereducers"},"Using ",(0,a.yg)("inlineCode",{parentName:"h1"},"combineReducers")),(0,a.yg)("h2",{id:"core-concepts"},"Core Concepts"),(0,a.yg)("p",null,'The most common state shape for a Redux app is a plain Javascript object containing "slices" of domain-specific data at each top-level key. Similarly, the most common approach to writing reducer logic for that state shape is to have "slice reducer" functions, each with the same ',(0,a.yg)("inlineCode",{parentName:"p"},"(state, action)")," signature, and each responsible for managing all updates to that specific slice of state. Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object."),(0,a.yg)("p",null,"Because this pattern is so common, Redux provides the ",(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers")," utility to implement that behavior. It is an example of a ",(0,a.yg)("em",{parentName:"p"},"higher-order reducer"),", which takes an object full of slice reducer functions, and returns a new reducer function."),(0,a.yg)("p",null,"There are several important ideas to be aware of when using ",(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"First and foremost, ",(0,a.yg)("inlineCode",{parentName:"li"},"combineReducers")," is simply ",(0,a.yg)("strong",{parentName:"li"},"a utility function to simplify the most common use case when writing Redux reducers"),". You are ",(0,a.yg)("em",{parentName:"li"},"not")," required to use it in your own application, and it does ",(0,a.yg)("em",{parentName:"li"},"not")," handle every possible scenario. It is entirely possible to write reducer logic without using it, and it is quite common to need to write custom reducer logic for cases that ",(0,a.yg)("inlineCode",{parentName:"li"},"combineReducer")," does not handle. (See ",(0,a.yg)("a",{parentName:"li",href:"/usage/structuring-reducers/beyond-combinereducers"},"Beyond ",(0,a.yg)("inlineCode",{parentName:"a"},"combineReducers"))," for examples and suggestions.)"),(0,a.yg)("li",{parentName:"ul"},"While Redux itself is not opinionated about how your state is organized, ",(0,a.yg)("inlineCode",{parentName:"li"},"combineReducers")," enforces several rules to help users avoid common errors. (See ",(0,a.yg)("a",{parentName:"li",href:"/api/combinereducers"},(0,a.yg)("inlineCode",{parentName:"a"},"combineReducers"))," for details.)"),(0,a.yg)("li",{parentName:"ul"},'One frequently asked question is whether Redux "calls all reducers" when dispatching an action. Since there really is only one root reducer function, the default answer is "no, it does not". However, ',(0,a.yg)("inlineCode",{parentName:"li"},"combineReducers")," has specific behavior that ",(0,a.yg)("em",{parentName:"li"},"does")," work that way. In order to assemble the new state tree, ",(0,a.yg)("inlineCode",{parentName:"li"},"combineReducers")," will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using ",(0,a.yg)("inlineCode",{parentName:"li"},"combineReducers")," ",(0,a.yg)("em",{parentName:"li"},"does"),' "call all reducers", or at least all of the slice reducers it is wrapping.'),(0,a.yg)("li",{parentName:"ul"},"You can use it at all levels of your reducer structure, not just to create the root reducer. It's very common to have multiple combined reducers in various places, which are composed together to create the root reducer.")),(0,a.yg)("h2",{id:"defining-state-shape"},"Defining State Shape"),(0,a.yg)("p",null,"There are two ways to define the initial shape and contents of your store's state. First, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createStore")," function can take ",(0,a.yg)("inlineCode",{parentName:"p"},"preloadedState")," as its second argument. This is primarily intended for initializing the store with state that was previously persisted elsewhere, such as the browser's localStorage. The other way is for the root reducer to return the initial state value when the state argument is ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),". These two approaches are described in more detail in ",(0,a.yg)("a",{parentName:"p",href:"/usage/structuring-reducers/initializing-state"},"Initializing State"),", but there are some additional concerns to be aware of when using ",(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers"),"."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers")," takes an object full of slice reducer functions, and creates a function that outputs a corresponding state object with the same keys. This means that if no preloaded state is provided to ",(0,a.yg)("inlineCode",{parentName:"p"},"createStore"),", the naming of the keys in the input slice reducer object will define the naming of the keys in the output state object. The correlation between these names is not always apparent, especially when using features such as default module exports and object literal shorthands."),(0,a.yg)("p",null,"Here's an example of how use of object literal shorthand with ",(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers")," can define the state shape:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// reducers.js\nexport default theDefaultReducer = (state = 0, action) => state\n\nexport const firstNamedReducer = (state = 1, action) => state\n\nexport const secondNamedReducer = (state = 2, action) => state\n\n// rootReducer.js\nimport { combineReducers, createStore } from 'redux'\n\nimport theDefaultReducer, {\n  firstNamedReducer,\n  secondNamedReducer\n} from './reducers'\n\n// Use object literal shorthand syntax to define the object shape\nconst rootReducer = combineReducers({\n  theDefaultReducer,\n  firstNamedReducer,\n  secondNamedReducer\n})\n\nconst store = createStore(rootReducer)\nconsole.log(store.getState())\n// {theDefaultReducer : 0, firstNamedReducer : 1, secondNamedReducer : 2}\n")),(0,a.yg)("p",null,"Notice that because we used the shorthand for defining an object literal, the key names in the resulting state are the same as the variable names from the imports. This may not always be the desired behavior, and is often a cause of confusion for those who aren't as familiar with modern JS syntax."),(0,a.yg)("p",null,'Also, the resulting names are a bit odd. It\'s generally not a good practice to actually include words like "reducer" in your state key names - the keys should simply reflect the domain or type of data they hold. This means we should either explicitly specify the names of the keys in the slice reducer object to define the keys in the output state object, or carefully rename the variables for the imported slice reducers to set up the keys when using the shorthand object literal syntax.'),(0,a.yg)("p",null,"A better usage might look like:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"import { combineReducers, createStore } from 'redux'\n\n// Rename the default import to whatever name we want. We can also rename a named import.\nimport defaultState, {\n  firstNamedReducer,\n  secondNamedReducer as secondState\n} from './reducers'\n\nconst rootReducer = combineReducers({\n  defaultState, // key name same as the carefully renamed default export\n  firstState: firstNamedReducer, // specific key name instead of the variable name\n  secondState // key name same as the carefully renamed named export\n})\n\nconst reducerInitializedStore = createStore(rootReducer)\nconsole.log(reducerInitializedStore.getState())\n// {defaultState : 0, firstState : 1, secondState : 2}\n")),(0,a.yg)("p",null,"This state shape better reflects the data involved, because we took care to set up the keys we passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"combineReducers"),"."))}p.isMDXComponent=!0},5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>h});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=a,h=l["".concat(c,".").concat(m)]||l[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);