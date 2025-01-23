"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9183],{471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(8168),i=(n(6540),n(5680));const r={id:"initializing-state",title:"Initializing State",description:"Structuring Reducers > Initializing State: How Redux state is initialized"},o="Initializing State",s={unversionedId:"usage/structuring-reducers/initializing-state",id:"usage/structuring-reducers/initializing-state",title:"Initializing State",description:"Structuring Reducers > Initializing State: How Redux state is initialized",source:"@site/../docs/usage/structuring-reducers/InitializingState.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/initializing-state",permalink:"/usage/structuring-reducers/initializing-state",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/structuring-reducers/InitializingState.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"initializing-state",title:"Initializing State",description:"Structuring Reducers > Initializing State: How Redux state is initialized"},sidebar:"docs",previous:{title:"Immutable Update Patterns",permalink:"/usage/structuring-reducers/immutable-update-patterns"},next:{title:"Reducing Boilerplate",permalink:"/usage/reducing-boilerplate"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"In Depth",id:"in-depth",level:2},{value:"Single Simple Reducer",id:"single-simple-reducer",level:3},{value:"Combined Reducers",id:"combined-reducers",level:3},{value:"Recap",id:"recap",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"initializing-state"},"Initializing State"),(0,i.yg)("p",null,"There are two main ways to initialize state for your application. The ",(0,i.yg)("inlineCode",{parentName:"p"},"createStore")," method can accept an optional ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState")," value as its second argument. Reducers can also specify an initial value by looking for an incoming state argument that is ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),", and returning the value they'd like to use as a default. This can either be done with an explicit check inside the reducer, or by using the default argument value syntax: ",(0,i.yg)("inlineCode",{parentName:"p"},"function myReducer(state = someDefaultValue, action)"),"."),(0,i.yg)("p",null,"It's not always immediately clear how these two approaches interact. Fortunately, the process does follow some predictable rules. Here's how the pieces fit together."),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"Without ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers()")," or similar manual code, ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState")," always wins over ",(0,i.yg)("inlineCode",{parentName:"p"},"state = ...")," in the reducer because the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," passed to the reducer ",(0,i.yg)("em",{parentName:"p"},"is")," ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState")," and ",(0,i.yg)("em",{parentName:"p"},"is not")," ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),", so the argument syntax doesn't apply."),(0,i.yg)("p",null,"With ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers()")," the behavior is more nuanced. Those reducers whose state is specified in ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState")," will receive that state. Other reducers will receive ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined")," ",(0,i.yg)("em",{parentName:"p"},"and because of that")," will fall back to the ",(0,i.yg)("inlineCode",{parentName:"p"},"state = ...")," default argument they specify."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"In general, ",(0,i.yg)("inlineCode",{parentName:"strong"},"preloadedState")," wins over the state specified by the reducer. This lets reducers specify initial data that makes sense ",(0,i.yg)("em",{parentName:"strong"},"to them")," as default arguments, but also allows loading existing data (fully or partially) when you're hydrating the store from some persistent storage or the server.")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Note: Reducers whose initial state is populated using ",(0,i.yg)("inlineCode",{parentName:"em"},"preloadedState")," will ",(0,i.yg)("strong",{parentName:"em"},"still need to provide a default value")," to handle when passed a ",(0,i.yg)("inlineCode",{parentName:"em"},"state")," of ",(0,i.yg)("inlineCode",{parentName:"em"},"undefined"),". All reducers are passed ",(0,i.yg)("inlineCode",{parentName:"em"},"undefined")," on initialization, so they should be written such that when given ",(0,i.yg)("inlineCode",{parentName:"em"},"undefined"),", some value should be returned. This can be any non-",(0,i.yg)("inlineCode",{parentName:"em"},"undefined")," value; there's no need to duplicate the section of ",(0,i.yg)("inlineCode",{parentName:"em"},"preloadedState")," here as the default.")),(0,i.yg)("h2",{id:"in-depth"},"In Depth"),(0,i.yg)("h3",{id:"single-simple-reducer"},"Single Simple Reducer"),(0,i.yg)("p",null,"First let's consider a case where you have a single reducer. Say you don't use ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers()"),"."),(0,i.yg)("p",null,"Then your reducer might look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"function counter(state = 0, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return state + 1\n    case 'DECREMENT':\n      return state - 1\n    default:\n      return state\n  }\n}\n")),(0,i.yg)("p",null,"Now let's say you create a store with it."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nconst store = createStore(counter)\nconsole.log(store.getState()) // 0\n")),(0,i.yg)("p",null,"The initial state is zero. Why? Because the second argument to ",(0,i.yg)("inlineCode",{parentName:"p"},"createStore")," was ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),". This is the ",(0,i.yg)("inlineCode",{parentName:"p"},"state"),' passed to your reducer the first time. When Redux initializes it dispatches a "dummy" action to fill the state. So your ',(0,i.yg)("inlineCode",{parentName:"p"},"counter")," reducer was called with ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," equal to ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined"),". ",(0,i.yg)("strong",{parentName:"p"},'This is exactly the case that "activates" the default argument.')," Therefore, ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," is now ",(0,i.yg)("inlineCode",{parentName:"p"},"0")," as per the default ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," value (",(0,i.yg)("inlineCode",{parentName:"p"},"state = 0"),"). This state (",(0,i.yg)("inlineCode",{parentName:"p"},"0"),") will be returned."),(0,i.yg)("p",null,"Let's consider a different scenario:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nconst store = createStore(counter, 42)\nconsole.log(store.getState()) // 42\n")),(0,i.yg)("p",null,"Why is it ",(0,i.yg)("inlineCode",{parentName:"p"},"42"),", and not ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),", this time? Because ",(0,i.yg)("inlineCode",{parentName:"p"},"createStore")," was called with ",(0,i.yg)("inlineCode",{parentName:"p"},"42")," as the second argument. This argument becomes the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," passed to your reducer along with the dummy action. ",(0,i.yg)("strong",{parentName:"p"},"This time, ",(0,i.yg)("inlineCode",{parentName:"strong"},"state")," is not undefined (it's ",(0,i.yg)("inlineCode",{parentName:"strong"},"42"),"!), so default argument syntax has no effect.")," The ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"42"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"42")," is returned from the reducer."),(0,i.yg)("h3",{id:"combined-reducers"},"Combined Reducers"),(0,i.yg)("p",null,"Now let's consider a case where you use ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers()"),".\nYou have two reducers:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"function a(state = 'lol', action) {\n  return state\n}\n\nfunction b(state = 'wat', action) {\n  return state\n}\n")),(0,i.yg)("p",null,"The reducer generated by ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers({ a, b })")," looks like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"// const combined = combineReducers({ a, b })\nfunction combined(state = {}, action) {\n  return {\n    a: a(state.a, action),\n    b: b(state.b, action)\n  }\n}\n")),(0,i.yg)("p",null,"If we call ",(0,i.yg)("inlineCode",{parentName:"p"},"createStore")," without the ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState"),", it's going to initialize the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"{}"),". Therefore, ",(0,i.yg)("inlineCode",{parentName:"p"},"state.a")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"state.b")," will be ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined")," by the time it calls ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," reducers. ",(0,i.yg)("strong",{parentName:"p"},"Both ",(0,i.yg)("inlineCode",{parentName:"strong"},"a")," and ",(0,i.yg)("inlineCode",{parentName:"strong"},"b")," reducers will receive ",(0,i.yg)("inlineCode",{parentName:"strong"},"undefined")," as ",(0,i.yg)("em",{parentName:"strong"},"their")," ",(0,i.yg)("inlineCode",{parentName:"strong"},"state")," arguments, and if they specify default ",(0,i.yg)("inlineCode",{parentName:"strong"},"state")," values, those will be returned.")," This is how the combined reducer returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"{ a: 'lol', b: 'wat' }")," state object on the first invocation."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nconst store = createStore(combined)\nconsole.log(store.getState()) // { a: 'lol', b: 'wat' }\n")),(0,i.yg)("p",null,"Let's consider a different scenario:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\nconst store = createStore(combined, { a: 'horse' })\nconsole.log(store.getState()) // { a: 'horse', b: 'wat' }\n")),(0,i.yg)("p",null,"Now I specified the ",(0,i.yg)("inlineCode",{parentName:"p"},"preloadedState")," as the argument to ",(0,i.yg)("inlineCode",{parentName:"p"},"createStore()"),". The state returned from the combined reducer ",(0,i.yg)("em",{parentName:"p"},"combines")," the initial state I specified for the ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," reducer with the ",(0,i.yg)("inlineCode",{parentName:"p"},"'wat'")," default argument specified that ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," reducer chose itself."),(0,i.yg)("p",null,"Let's recall what the combined reducer does:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"// const combined = combineReducers({ a, b })\nfunction combined(state = {}, action) {\n  return {\n    a: a(state.a, action),\n    b: b(state.b, action)\n  }\n}\n")),(0,i.yg)("p",null,"In this case, ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," was specified so it didn't fall back to ",(0,i.yg)("inlineCode",{parentName:"p"},"{}"),". It was an object with ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," field equal to ",(0,i.yg)("inlineCode",{parentName:"p"},"'horse'"),", but without the ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," field. This is why the ",(0,i.yg)("inlineCode",{parentName:"p"},"a")," reducer received ",(0,i.yg)("inlineCode",{parentName:"p"},"'horse'")," as its ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," and gladly returned it, but the ",(0,i.yg)("inlineCode",{parentName:"p"},"b")," reducer received ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined")," as its ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," and thus returned ",(0,i.yg)("em",{parentName:"p"},"its idea")," of the default ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," (in our example, ",(0,i.yg)("inlineCode",{parentName:"p"},"'wat'"),"). This is how we get ",(0,i.yg)("inlineCode",{parentName:"p"},"{ a: 'horse', b: 'wat' }")," in return."),(0,i.yg)("h2",{id:"recap"},"Recap"),(0,i.yg)("p",null,"To sum this up, if you stick to Redux conventions and return the initial state from reducers when they're called with ",(0,i.yg)("inlineCode",{parentName:"p"},"undefined")," as the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," argument (the easiest way to implement this is to specify the ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," default argument value), you're going to have a nice useful behavior for combined reducers. ",(0,i.yg)("strong",{parentName:"p"},"They will prefer the corresponding value in the ",(0,i.yg)("inlineCode",{parentName:"strong"},"preloadedState")," object you pass to the ",(0,i.yg)("inlineCode",{parentName:"strong"},"createStore()")," function, but if you didn't pass any, or if the corresponding field is not set, the default ",(0,i.yg)("inlineCode",{parentName:"strong"},"state")," argument specified by the reducer is chosen instead.")," This approach works well because it provides both initialization and hydration of existing data, but lets individual reducers reset their state if their data was not preserved. Of course you can apply this pattern recursively, as you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"combineReducers()")," on many levels, or even compose reducers manually by calling reducers and giving them the relevant part of the state tree."))}c.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);