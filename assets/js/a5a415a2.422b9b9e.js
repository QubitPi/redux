"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4833],{7055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(8168),o=(n(6540),n(5680));const a={id:"combinereducers",title:"combineReducers",hide_title:!0,description:"API > combineReducers: merging slice reducers to create combined state"},i=void 0,s={unversionedId:"api/combinereducers",id:"api/combinereducers",title:"combineReducers",description:"API > combineReducers: merging slice reducers to create combined state",source:"@site/../docs/api/combineReducers.md",sourceDirName:"api",slug:"/api/combinereducers",permalink:"/api/combinereducers",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/api/combineReducers.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"combinereducers",title:"combineReducers",hide_title:!0,description:"API > combineReducers: merging slice reducers to create combined state"},sidebar:"docs",previous:{title:"Store",permalink:"/api/store"},next:{title:"applyMiddleware",permalink:"/api/applymiddleware"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"State Slices",id:"state-slices",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:3},{value:"Notes",id:"notes",level:2},{value:"Example",id:"example",level:2},{value:"<code>reducers/todos.js</code>",id:"reducerstodosjs",level:4},{value:"<code>reducers/counter.js</code>",id:"reducerscounterjs",level:4},{value:"<code>reducers/index.js</code>",id:"reducersindexjs",level:4},{value:"<code>App.js</code>",id:"appjs",level:4},{value:"Tips",id:"tips",level:2}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"combinereducersreducers"},(0,o.yg)("inlineCode",{parentName:"h1"},"combineReducers(reducers)")),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers"),' helper function turns an object whose values are different "slice reducer" functions into a single combined reducer function you can pass to Redux Toolkit\'s ',(0,o.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},(0,o.yg)("inlineCode",{parentName:"a"},"configureStore"))," (or the legacy ",(0,o.yg)("a",{parentName:"p",href:"/api/createstore"},(0,o.yg)("inlineCode",{parentName:"a"},"createStore"))," method)"),(0,o.yg)("p",null,"The resulting combined reducer calls every slice reducer any time an action is dispatched, and gathers their results into a single state object. This enables splitting up reducer logic into separate functions, each managing their own slice of the state independently."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This should be rarely needed - Redux Toolkit's ",(0,o.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},(0,o.yg)("inlineCode",{parentName:"a"},"configureStore")," method")," will automatically call ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," for you if you pass in an object of slice reducers:"),(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"const store = configureStore({\n  reducer: {\n    posts: postsReducer,\n    comments: commentsReducer\n  }\n})\n")),(0,o.yg)("p",{parentName:"admonition"},"You can still call ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers()")," yourself if you need to construct the root reducer manually first.")),(0,o.yg)("h3",{id:"state-slices"},"State Slices"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The state produced by ",(0,o.yg)("inlineCode",{parentName:"strong"},"combineReducers()")," namespaces the states of each reducer under their keys as passed to ",(0,o.yg)("inlineCode",{parentName:"strong"},"combineReducers()"))),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})\n// This would produce the following state object\n{\n  potato: {\n    // ... potatoes, and other state managed by the potatoReducer ...\n  },\n  tomato: {\n    // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...\n  }\n}\n")),(0,o.yg)("p",null,"You can control state key names by using different keys for the reducers in the passed object. For example, you may call ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers({ todos: myTodosReducer, counter: myCounterReducer })")," for the state shape to be ",(0,o.yg)("inlineCode",{parentName:"p"},"{ todos, counter }"),"."),(0,o.yg)("h2",{id:"arguments"},"Arguments"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"reducers")," (",(0,o.yg)("em",{parentName:"li"},"Object"),"): An object whose values correspond to different reducer functions that need to be combined into one.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"combineReducers({\n  posts: postsReducer,\n  comments: commentsReducer\n})\n")),(0,o.yg)("p",null,"See the notes below for some rules every passed reducer must follow."),(0,o.yg)("h3",{id:"returns"},"Returns"),(0,o.yg)("p",null,"(",(0,o.yg)("em",{parentName:"p"},"Function"),"): A reducer that invokes every reducer inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"reducers")," object, and constructs a state object with the same shape."),(0,o.yg)("h2",{id:"notes"},"Notes"),(0,o.yg)("p",null,"This function is mildly opinionated and is skewed towards helping beginners avoid common pitfalls. This is why it attempts to enforce some rules that you don't have to follow if you write the root reducer manually."),(0,o.yg)("p",null,"Any reducer passed to ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," must satisfy these rules:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"For any action that is not recognized, it must return the ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," given to it as the first argument.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"It must never return ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined"),". It is too easy to do this by mistake via an early ",(0,o.yg)("inlineCode",{parentName:"p"},"return")," statement, so ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," throws if you do that instead of letting the error manifest itself somewhere else.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If the ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," given to it is ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined"),", it must return the initial state for this specific reducer. According to the previous rule, the initial state must not be ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," either. It is handy to specify it with optional arguments syntax, but you can also explicitly check the first argument for being ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined"),"."))),(0,o.yg)("p",null,"While ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," attempts to check that your reducers conform to some of these rules, you should remember them, and do your best to follow them. ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," will check your reducers by passing ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," to them; this is done even if you specify initial state to ",(0,o.yg)("inlineCode",{parentName:"p"},"Redux.createStore(combineReducers(...), initialState)"),". Therefore, you ",(0,o.yg)("strong",{parentName:"p"},"must")," ensure your reducers work properly when receiving ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," as state, even if you never intend for them to actually receive ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," in your own code."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("h4",{id:"reducerstodosjs"},(0,o.yg)("inlineCode",{parentName:"h4"},"reducers/todos.js")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"export default function todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return state.concat([action.text])\n    default:\n      return state\n  }\n}\n")),(0,o.yg)("h4",{id:"reducerscounterjs"},(0,o.yg)("inlineCode",{parentName:"h4"},"reducers/counter.js")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"export default function counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n")),(0,o.yg)("h4",{id:"reducersindexjs"},(0,o.yg)("inlineCode",{parentName:"h4"},"reducers/index.js")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from '@reduxjs/toolkit'\nimport todos from './todos'\nimport counter from './counter'\n\nexport default combineReducers({\n  todos,\n  counter\n})\n")),(0,o.yg)("h4",{id:"appjs"},(0,o.yg)("inlineCode",{parentName:"h4"},"App.js")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\nimport reducer from './reducers/index'\n\nconst store = configureStore({\n  reducer\n})\nconsole.log(store.getState())\n// {\n//   counter: 0,\n//   todos: []\n// }\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Use Redux'\n})\nconsole.log(store.getState())\n// {\n//   counter: 0,\n//   todos: [ 'Use Redux' ]\n// }\n")),(0,o.yg)("h2",{id:"tips"},"Tips"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"This helper is just a convenience! You can write your own ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," that ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/redux-utilities/reduce-reducers"},"works differently"),", or even assemble the state object from the child reducers manually and write a root reducer function explicitly, like you would write any other function.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"You may call ",(0,o.yg)("inlineCode",{parentName:"p"},"combineReducers")," at any level of the reducer hierarchy. It doesn't have to happen at the top. In fact you may use it again to split the child reducers that get too complicated into independent grandchildren, and so on."))))}p.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);