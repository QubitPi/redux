"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8718],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3554:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"glossary",title:"Glossary"},c="Glossary",l={unversionedId:"understanding/thinking-in-redux/glossary",id:"understanding/thinking-in-redux/glossary",title:"Glossary",description:"This is a glossary of the core terms in Redux, along with their type signatures. The types are documented using Flow notation.",source:"@site/../docs/understanding/thinking-in-redux/Glossary.md",sourceDirName:"understanding/thinking-in-redux",slug:"/understanding/thinking-in-redux/glossary",permalink:"/understanding/thinking-in-redux/glossary",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/understanding/thinking-in-redux/Glossary.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docs",previous:{title:"Three Principles",permalink:"/understanding/thinking-in-redux/three-principles"},next:{title:"The History of Redux",permalink:"/understanding/history-and-design/history-of-redux"}},p={},u=[{value:"State",id:"state",level:2},{value:"Action",id:"action",level:2},{value:"Reducer",id:"reducer",level:2},{value:"Dispatching Function",id:"dispatching-function",level:2},{value:"Action Creator",id:"action-creator",level:2},{value:"Async Action",id:"async-action",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Store",id:"store",level:2},{value:"Store creator",id:"store-creator",level:2},{value:"Store enhancer",id:"store-enhancer",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("p",null,"This is a glossary of the core terms in Redux, along with their type signatures. The types are documented using ",(0,o.kt)("a",{parentName:"p",href:"https://flow.org/en/docs/types"},"Flow notation"),"."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type State = any\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"State")," (also called the ",(0,o.kt)("em",{parentName:"p"},"state tree"),") is a broad term, but in the Redux API it usually refers to the single state value that is managed by the store and returned by ",(0,o.kt)("a",{parentName:"p",href:"/api/store#getState"},(0,o.kt)("inlineCode",{parentName:"a"},"getState()")),". It represents the entire state of a Redux application, which is often a deeply nested object."),(0,o.kt)("p",null,"By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON."),(0,o.kt)("h2",{id:"action"},"Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Action = Object\n")),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"action")," is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions."),(0,o.kt)("p",null,"Actions must have a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," than ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol"},"Symbols")," because strings are serializable."),(0,o.kt)("p",null,"Other than ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", the structure of an action object is really up to you. If you're interested, check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/acdlite/flux-standard-action"},"Flux Standard Action")," for recommendations on how actions should be constructed."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"#async-action"},"async action")," below."),(0,o.kt)("h2",{id:"reducer"},"Reducer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Reducer<S, A> = (state: S, action: A) => S\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"reducer")," is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value."),(0,o.kt)("p",null,"Reducers are not unique to Redux\u2014they are a fundamental concept in functional programming. Even most non-functional languages, like JavaScript, have a built-in API for reducing. In JavaScript, it's ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.prototype.reduce()")),"."),(0,o.kt)("p",null,"In Redux, the accumulated value is the state object, and the values being accumulated are actions. Reducers calculate a new state given the previous state and an action. They must be ",(0,o.kt)("em",{parentName:"p"},"pure functions"),"\u2014functions that return the exact same output for given inputs. They should also be free of side-effects. This is what enables exciting features like hot reloading and time travel."),(0,o.kt)("p",null,"Reducers are the most important concept in Redux."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Do not put API calls into reducers.")),(0,o.kt)("h2",{id:"dispatching-function"},"Dispatching Function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type BaseDispatch = (a: Action) => Action\ntype Dispatch = (a: Action | AsyncAction) => any\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"dispatching function")," (or simply ",(0,o.kt)("em",{parentName:"p"},"dispatch function"),") is a function that accepts an action or an ",(0,o.kt)("a",{parentName:"p",href:"#async-action"},"async action"),"; it then may or may not dispatch one or more actions to the store."),(0,o.kt)("p",null,"We must distinguish between dispatching functions in general and the base ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch"))," function provided by the store instance without any middleware."),(0,o.kt)("p",null,"The base dispatch function ",(0,o.kt)("em",{parentName:"p"},"always")," synchronously sends an action to the store's reducer, along with the previous state returned by the store, to calculate a new state. It expects actions to be plain objects ready to be consumed by the reducer."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#middleware"},"Middleware")," wraps the base dispatch function. It allows the dispatch function to handle ",(0,o.kt)("a",{parentName:"p",href:"#async-action"},"async actions")," in addition to actions. Middleware may transform, delay, ignore, or otherwise interpret actions or async actions before passing them to the next middleware. See below for more information."),(0,o.kt)("h2",{id:"action-creator"},"Action Creator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type ActionCreator<A, P extends any[] = any[]> = (...args: P) => Action | AsyncAction\n")),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"action creator")," is, quite simply, a function that creates an action. Do not confuse the two terms\u2014again, an action is a payload of information, and an action creator is a factory that creates an action."),(0,o.kt)("p",null,"Calling an action creator only produces an action, but does not dispatch it. You need to call the store's ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch"))," function to actually cause the mutation. Sometimes we say ",(0,o.kt)("em",{parentName:"p"},"bound action creators")," to mean functions that call an action creator and immediately dispatch its result to a specific store instance."),(0,o.kt)("p",null,"If an action creator needs to read the current state, perform an API call, or cause a side effect, like a routing transition, it should return an ",(0,o.kt)("a",{parentName:"p",href:"#async-action"},"async action")," instead of an action."),(0,o.kt)("h2",{id:"async-action"},"Async Action"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type AsyncAction = any\n")),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"async action")," is a value that is sent to a dispatching function, but is not yet ready for consumption by the reducer. It will be transformed by ",(0,o.kt)("a",{parentName:"p",href:"#middleware"},"middleware")," into an action (or a series of actions) before being sent to the base ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch()"))," function. Async actions may have different types, depending on the middleware you use. They are often asynchronous primitives, like a Promise or a thunk, which are not passed to the reducer immediately, but trigger action dispatches once an operation has completed."),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }\ntype Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch\n")),(0,o.kt)("p",null,"A middleware is a higher-order function that composes a ",(0,o.kt)("a",{parentName:"p",href:"#dispatching-function"},"dispatch function")," to return a new dispatch function. It often turns ",(0,o.kt)("a",{parentName:"p",href:"#async-action"},"async actions")," into actions."),(0,o.kt)("p",null,"Middleware is composable using function composition. It is useful for logging actions, performing side effects like routing, or turning an asynchronous API call into a series of synchronous actions."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/api/applymiddleware"},(0,o.kt)("inlineCode",{parentName:"a"},"applyMiddleware(...middlewares)"))," for a detailed look at middleware."),(0,o.kt)("h2",{id:"store"},"Store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type Store = {\n  dispatch: Dispatch\n  getState: () => State\n  subscribe: (listener: () => void) => () => void\n  replaceReducer: (reducer: Reducer) => void\n}\n")),(0,o.kt)("p",null,"A store is an object that holds the application's state tree.\nThere should only be a single store in a Redux app, as the composition happens on the reducer level."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/store#dispatchaction"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch(action)"))," is the base dispatch function described above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/store#getState"},(0,o.kt)("inlineCode",{parentName:"a"},"getState()"))," returns the current state of the store."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/store#subscribelistener"},(0,o.kt)("inlineCode",{parentName:"a"},"subscribe(listener)"))," registers a function to be called on state changes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/store#replacereducernextreducer"},(0,o.kt)("inlineCode",{parentName:"a"},"replaceReducer(nextReducer)"))," can be used to implement hot reloading and code splitting. Most likely you won't use it.")),(0,o.kt)("p",null,"See the complete ",(0,o.kt)("a",{parentName:"p",href:"/api/store#dispatchaction"},"store API reference")," for more details."),(0,o.kt)("h2",{id:"store-creator"},"Store creator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type StoreCreator = (reducer: Reducer, preloadedState: ?State) => Store\n")),(0,o.kt)("p",null,"A store creator is a function that creates a Redux store. Like with dispatching function, we must distinguish the base store creator, ",(0,o.kt)("a",{parentName:"p",href:"/api/createstore"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore(reducer, preloadedState)"))," exported from the Redux package, from store creators that are returned from the store enhancers."),(0,o.kt)("h2",{id:"store-enhancer"},"Store enhancer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type StoreEnhancer = (next: StoreCreator) => StoreCreator\n")),(0,o.kt)("p",null,"A store enhancer is a higher-order function that composes a store creator to return a new enhanced store creator. This is similar to middleware in that it allows you to alter the store interface in a composable way."),(0,o.kt)("p",null,"Store enhancers are much the same concept as higher-order components in React, which are also occasionally called \u201ccomponent enhancers\u201d."),(0,o.kt)("p",null,"Because a store is not an instance, but rather a plain-object collection of functions, copies can be easily created and modified without mutating the original store. There is an example in ",(0,o.kt)("a",{parentName:"p",href:"/api/compose"},(0,o.kt)("inlineCode",{parentName:"a"},"compose"))," documentation demonstrating that."),(0,o.kt)("p",null,"Most likely you'll never write a store enhancer, but you may use the one provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"developer tools"),". It is what makes time travel possible without the app being aware it is happening. Amusingly, the ",(0,o.kt)("a",{parentName:"p",href:"/api/applymiddleware"},"Redux middleware implementation")," is itself a store enhancer."))}m.isMDXComponent=!0}}]);