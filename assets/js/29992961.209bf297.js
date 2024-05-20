"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9150],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=d(t),f=a,h=l["".concat(s,".").concat(f)]||l[f]||p[f]||i;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[l]="string"==typeof e?e:a,c[1]=o;for(var d=2;d<i;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8430:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),c=["components"],o={id:"code-splitting",title:"Code Splitting"},s="Code Splitting",d={unversionedId:"usage/code-splitting",id:"usage/code-splitting",title:"Code Splitting",description:"In large web applications, it is often desirable to split up the app code into multiple JS bundles that can be loaded on-demand. This strategy, called 'code splitting', helps to increase performance of your application by reducing the size of the initial JS payload that must be fetched.",source:"@site/../docs/usage/CodeSplitting.md",sourceDirName:"usage",slug:"/usage/code-splitting",permalink:"/usage/code-splitting",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/CodeSplitting.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"code-splitting",title:"Code Splitting"},sidebar:"docs",previous:{title:"Setup with Next.js",permalink:"/usage/nextjs"},next:{title:"Server Rendering",permalink:"/usage/server-rendering"}},u={},l=[{value:"Basic Principle",id:"basic-principle",level:2},{value:"Using <code>replaceReducer</code>",id:"using-replacereducer",level:3},{value:"Reducer Injection Approaches",id:"reducer-injection-approaches",level:2},{value:"Defining an <code>injectReducer</code> function",id:"defining-an-injectreducer-function",level:3},{value:"Using a &#39;Reducer Manager&#39;",id:"using-a-reducer-manager",level:3},{value:"Libraries and Frameworks",id:"libraries-and-frameworks",level:2}],p={toc:l},f="wrapper";function h(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)(f,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"code-splitting"},"Code Splitting"),(0,i.kt)("p",null,"In large web applications, it is often desirable to split up the app code into multiple JS bundles that can be loaded on-demand. This strategy, called 'code splitting', helps to increase performance of your application by reducing the size of the initial JS payload that must be fetched."),(0,i.kt)("p",null,"To code split with Redux, we want to be able to dynamically add reducers to the store. However, Redux really only has a single root reducer function. This root reducer is normally generated by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"combineReducers()")," or a similar function when the application is initialized. In order to dynamically add more reducers, we need to call that function again to re-generate the root reducer. Below, we discuss some approaches to solving this problem and reference two libraries that provide this functionality."),(0,i.kt)("h2",{id:"basic-principle"},"Basic Principle"),(0,i.kt)("h3",{id:"using-replacereducer"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"replaceReducer")),(0,i.kt)("p",null,"The Redux store exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceReducer")," function, which replaces the current active root reducer function with a new root reducer function. Calling it will swap the internal reducer function reference, and dispatch an action to help any newly-added slice reducers initialize themselves:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const newRootReducer = combineReducers({\n  existingSlice: existingSliceReducer,\n  newSlice: newSliceReducer\n})\n\nstore.replaceReducer(newRootReducer)\n")),(0,i.kt)("h2",{id:"reducer-injection-approaches"},"Reducer Injection Approaches"),(0,i.kt)("h3",{id:"defining-an-injectreducer-function"},"Defining an ",(0,i.kt)("inlineCode",{parentName:"h3"},"injectReducer")," function"),(0,i.kt)("p",null,"We will likely want to call ",(0,i.kt)("inlineCode",{parentName:"p"},"store.replaceReducer()")," from anywhere in the application. Because of that, it's helpful\nto define a reusable ",(0,i.kt)("inlineCode",{parentName:"p"},"injectReducer()")," function that keeps references to all of the existing slice reducers, and attach\nthat to the store instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\n\n// Define the Reducers that will always be present in the application\nconst staticReducers = {\n  users: usersReducer,\n  posts: postsReducer\n}\n\n// Configure the store\nexport default function configureStore(initialState) {\n  const store = createStore(createReducer(), initialState)\n\n  // Add a dictionary to keep track of the registered async reducers\n  store.asyncReducers = {}\n\n  // Create an inject reducer function\n  // This function adds the async reducer, and creates a new combined reducer\n  store.injectReducer = (key, asyncReducer) => {\n    store.asyncReducers[key] = asyncReducer\n    store.replaceReducer(createReducer(store.asyncReducers))\n  }\n\n  // Return the modified store\n  return store\n}\n\nfunction createReducer(asyncReducers) {\n  return combineReducers({\n    ...staticReducers,\n    ...asyncReducers\n  })\n}\n")),(0,i.kt)("p",null,"Now, one just needs to call ",(0,i.kt)("inlineCode",{parentName:"p"},"store.injectReducer")," to add a new reducer to the store."),(0,i.kt)("h3",{id:"using-a-reducer-manager"},"Using a 'Reducer Manager'"),(0,i.kt)("p",null,"Another approach is to create a 'Reducer Manager' object, which keeps track of all the registered reducers and exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce()")," function. Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export function createReducerManager(initialReducers) {\n  // Create an object which maps keys to reducers\n  const reducers = { ...initialReducers }\n\n  // Create the initial combinedReducer\n  let combinedReducer = combineReducers(reducers)\n\n  // An array which is used to delete state keys when reducers are removed\n  let keysToRemove = []\n\n  return {\n    getReducerMap: () => reducers,\n\n    // The root reducer function exposed by this object\n    // This will be passed to the store\n    reduce: (state, action) => {\n      // If any reducers have been removed, clean up their state first\n      if (keysToRemove.length > 0) {\n        state = { ...state }\n        for (let key of keysToRemove) {\n          delete state[key]\n        }\n        keysToRemove = []\n      }\n\n      // Delegate to the combined reducer\n      return combinedReducer(state, action)\n    },\n\n    // Adds a new reducer with the specified key\n    add: (key, reducer) => {\n      if (!key || reducers[key]) {\n        return\n      }\n\n      // Add the reducer to the reducer mapping\n      reducers[key] = reducer\n\n      // Generate a new combined reducer\n      combinedReducer = combineReducers(reducers)\n    },\n\n    // Removes a reducer with the specified key\n    remove: key => {\n      if (!key || !reducers[key]) {\n        return\n      }\n\n      // Remove it from the reducer mapping\n      delete reducers[key]\n\n      // Add the key to the list of keys to clean up\n      keysToRemove.push(key)\n\n      // Generate a new combined reducer\n      combinedReducer = combineReducers(reducers)\n    }\n  }\n}\n\nconst staticReducers = {\n  users: usersReducer,\n  posts: postsReducer\n}\n\nexport function configureStore(initialState) {\n  const reducerManager = createReducerManager(staticReducers)\n\n  // Create a store with the root reducer function being the one exposed by the manager.\n  const store = createStore(reducerManager.reduce, initialState)\n\n  // Optional: Put the reducer manager on the store so it is easily accessible\n  store.reducerManager = reducerManager\n}\n")),(0,i.kt)("p",null,"To add a new reducer, one can now call ",(0,i.kt)("inlineCode",{parentName:"p"},'store.reducerManager.add("asyncState", asyncReducer)'),"."),(0,i.kt)("p",null,"To remove a reducer, one can now call ",(0,i.kt)("inlineCode",{parentName:"p"},'store.reducerManager.remove("asyncState")')),(0,i.kt)("h2",{id:"libraries-and-frameworks"},"Libraries and Frameworks"),(0,i.kt)("p",null,"There are a few good libraries out there that can help you add the above functionality automatically:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/reducers.md#dynamic-reducer-injection"},"Redux Ecosystem Links: Reducers - Dynamic Reducer Injection"))))}h.isMDXComponent=!0}}]);