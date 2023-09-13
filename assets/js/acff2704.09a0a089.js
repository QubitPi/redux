"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8206],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9219:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"store",title:"Store",description:"API > Store: the core Redux store methods"},l="Store",c={unversionedId:"api/store",id:"api/store",title:"Store",description:"API > Store: the core Redux store methods",source:"@site/../docs/api/Store.md",sourceDirName:"api",slug:"/api/store",permalink:"/redux/api/store",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/api/Store.md",tags:[],version:"current",lastUpdatedAt:1694574625,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"store",title:"Store",description:"API > Store: the core Redux store methods"},sidebar:"docs",previous:{title:"createStore",permalink:"/redux/api/createstore"},next:{title:"combineReducers",permalink:"/redux/api/combinereducers"}},u={},d=[{value:"Store Methods",id:"store-methods",level:3},{value:"Store Methods",id:"store-methods-1",level:2},{value:"getState()",id:"getstate",level:3},{value:"Returns",id:"returns",level:4},{value:"dispatch(action)",id:"dispatchaction",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Notes",id:"notes",level:4},{value:"Example",id:"example",level:4},{value:"subscribe(listener)",id:"subscribelistener",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Example",id:"example-1",level:5},{value:"replaceReducer(nextReducer)",id:"replacereducernextreducer",level:3},{value:"Arguments",id:"arguments-2",level:4}],p={toc:d},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"store"},"Store"),(0,i.kt)("p",null,"A store holds the whole ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#state"},"state tree")," of your application.\nThe only way to change the state inside it is to dispatch an ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#action"},"action")," on it."),(0,i.kt)("p",null,"A store is not a class. It's just an object with a few methods on it.\nTo create it, pass your root ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#reducer"},"reducing function")," to ",(0,i.kt)("a",{parentName:"p",href:"/redux/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"a-note-for-flux-users"},"A Note for Flux Users"),(0,i.kt)("p",{parentName:"blockquote"},"If you're coming from Flux, there is a single important difference you need to understand. Redux doesn't have a Dispatcher or support many stores. ",(0,i.kt)("strong",{parentName:"p"},"Instead, there is just a single store with a single root ",(0,i.kt)("a",{parentName:"strong",href:"/redux/understanding/thinking-in-redux/glossary#reducer"},"reducing function"),".")," As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. You can use a helper like ",(0,i.kt)("a",{parentName:"p",href:"/redux/api/combinereducers"},(0,i.kt)("inlineCode",{parentName:"a"},"combineReducers"))," to combine them. This is similar to how there is just one root component in a React app, but it is composed out of many small components.")),(0,i.kt)("h3",{id:"store-methods"},"Store Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#getstate"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch(action)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subscribelistener"},(0,i.kt)("inlineCode",{parentName:"a"},"subscribe(listener)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#replacereducernextreducer"},(0,i.kt)("inlineCode",{parentName:"a"},"replaceReducer(nextReducer)")))),(0,i.kt)("h2",{id:"store-methods-1"},"Store Methods"),(0,i.kt)("h3",{id:"getstate"},"getState()"),(0,i.kt)("p",null,"Returns the current state tree of your application.\nIt is equal to the last value returned by the store's reducer."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(any)"),": The current state tree of your application."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dispatchaction"},"dispatch(action)"),(0,i.kt)("p",null,"Dispatches an action. This is the only way to trigger a state change."),(0,i.kt)("p",null,"The store's reducing function will be called with the current ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))," result and the given ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," synchronously. Its return value will be considered the next state. It will be returned from ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))," from now on, and the change listeners will immediately be notified."),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"a-note-for-flux-users-1"},"A Note for Flux Users"),(0,i.kt)("p",{parentName:"blockquote"},"If you attempt to call ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," from inside the ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#reducer"},"reducer"),", it will throw with an error saying \u201cReducers may not dispatch actions.\u201d This is similar to \u201cCannot dispatch in a middle of dispatch\u201d error in Flux, but doesn't cause the problems associated with it. In Flux, a dispatch is forbidden while Stores are handling the action and emitting updates. This is unfortunate because it makes it impossible to dispatch actions from component lifecycle hooks or other benign places."),(0,i.kt)("p",{parentName:"blockquote"},"In Redux, subscriptions are called after the root reducer has returned the new state, so you ",(0,i.kt)("em",{parentName:"p"},"may")," dispatch in the subscription listeners. You are only disallowed to dispatch inside the reducers because they must have no side effects. If you want to cause a side effect in response to an action, the right place to do this is in the potentially async ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#action-creator"},"action creator"),".")),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"action")," (",(0,i.kt)("em",{parentName:"li"},"Object"),(0,i.kt)("sup",null,"\u2020"),"): A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," than ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},"Symbols")," because strings are serializable. Other than ",(0,i.kt)("inlineCode",{parentName:"li"},"type"),", the structure of an action object is really up to you. If you're interested, check out ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/acdlite/flux-standard-action"},"Flux Standard Action")," for recommendations on how actions could be constructed.")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"(Object",(0,i.kt)("sup",null,"\u2020"),"): The dispatched action (see notes)."),(0,i.kt)("h4",{id:"notes"},"Notes"),(0,i.kt)("sup",null,"\u2020")," The \u201cvanilla\u201d store implementation you get by calling [`createStore`](/redux/api/createstore) only supports plain object actions and hands them immediately to the reducer.",(0,i.kt)("p",null,"However, if you wrap ",(0,i.kt)("a",{parentName:"p",href:"/redux/api/createstore"},(0,i.kt)("inlineCode",{parentName:"a"},"createStore"))," with ",(0,i.kt)("a",{parentName:"p",href:"/redux/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware")),", the middleware can interpret actions differently, and provide support for dispatching ",(0,i.kt)("a",{parentName:"p",href:"/redux/understanding/thinking-in-redux/glossary#async-action"},"async actions"),". Async actions are usually asynchronous primitives like Promises, Observables, or thunks."),(0,i.kt)("p",null,"Middleware is created by the community and does not ship with Redux by default. You need to explicitly install packages like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},"redux-thunk")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/acdlite/redux-promise"},"redux-promise")," to use it. You may also create your own middleware."),(0,i.kt)("p",null,"To learn how to describe asynchronous API calls, read the current state inside action creators, perform side effects, or chain them to execute in a sequence, see the examples for ",(0,i.kt)("a",{parentName:"p",href:"/redux/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware")),"."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nconst store = createStore(todos, ['Use Redux'])\n\nfunction addTodo(text) {\n  return {\n    type: 'ADD_TODO',\n    text\n  }\n}\n\nstore.dispatch(addTodo('Read the docs'))\nstore.dispatch(addTodo('Read about the middleware'))\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscribelistener"},"subscribe(listener)"),(0,i.kt)("p",null,"Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed. You may then call ",(0,i.kt)("a",{parentName:"p",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))," to read the current state tree inside the callback."),(0,i.kt)("p",null,"You may call ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," from a change listener, with the following caveats:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The listener should only call ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," either in response to user actions or under specific conditions (e.\xa0g. dispatching an action when the store has a specific field). Calling ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," without any conditions is technically possible, however it leads to an infinite loop as every ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," call usually triggers the listener again.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The subscriptions are snapshotted just before every ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," call. If you subscribe or unsubscribe while the listeners are being invoked, this will not have any effect on the ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," that is currently in progress. However, the next ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," call, whether nested or not, will use a more recent snapshot of the subscription list.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The listener should not expect to see all state changes, as the state might have been updated multiple times during a nested ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," before the listener is called. It is, however, guaranteed that all subscribers registered before the ",(0,i.kt)("a",{parentName:"p",href:"#dispatchaction"},(0,i.kt)("inlineCode",{parentName:"a"},"dispatch()"))," started will be called with the latest state by the time it exits."))),(0,i.kt)("p",null,"It is a low-level API. Most likely, instead of using it directly, you'll use React (or other) bindings. If you commonly use the callback as a hook to react to state changes, you might want to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues/303#issuecomment-125184409"},"write a custom ",(0,i.kt)("inlineCode",{parentName:"a"},"observeStore")," utility"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," is also an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zenparsing/es-observable"},(0,i.kt)("inlineCode",{parentName:"a"},"Observable")),", so you can ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," to changes with libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJS"},"RxJS"),"."),(0,i.kt)("p",null,"To unsubscribe the change listener, invoke the function returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe"),"."),(0,i.kt)("h4",{id:"arguments-1"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"listener")," (",(0,i.kt)("em",{parentName:"li"},"Function"),"): The callback to be invoked any time an action has been dispatched, and the state tree might have changed. You may call ",(0,i.kt)("a",{parentName:"li",href:"#getState"},(0,i.kt)("inlineCode",{parentName:"a"},"getState()"))," inside this callback to read the current state tree. It is reasonable to expect that the store's reducer is a pure function, so you may compare references to some deep path in the state tree to learn whether its value has changed.")),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Function"),"): A function that unsubscribes the change listener."),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function select(state) {\n  return state.some.deep.property\n}\n\nlet currentValue\nfunction handleChange() {\n  let previousValue = currentValue\n  currentValue = select(store.getState())\n\n  if (previousValue !== currentValue) {\n    console.log(\n      'Some deep nested property changed from',\n      previousValue,\n      'to',\n      currentValue\n    )\n  }\n}\n\nconst unsubscribe = store.subscribe(handleChange)\nunsubscribe()\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"replacereducernextreducer"},"replaceReducer(nextReducer)"),(0,i.kt)("p",null,"Replaces the reducer currently used by the store to calculate the state."),(0,i.kt)("p",null,"It is an advanced API. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux."),(0,i.kt)("h4",{id:"arguments-2"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"nextReducer")," (",(0,i.kt)("em",{parentName:"li"},"Function"),") The next reducer for the store to use.")))}m.isMDXComponent=!0}}]);