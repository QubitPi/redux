"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4425],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7998:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"prior-art",title:"Prior Art",description:"Introduction > Prior Art: Influences on the design of Redux"},u="Prior Art",l={unversionedId:"understanding/history-and-design/prior-art",id:"understanding/history-and-design/prior-art",title:"Prior Art",description:"Introduction > Prior Art: Influences on the design of Redux",source:"@site/../docs/understanding/history-and-design/PriorArt.md",sourceDirName:"understanding/history-and-design",slug:"/understanding/history-and-design/prior-art",permalink:"/redux/understanding/history-and-design/prior-art",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/understanding/history-and-design/PriorArt.md",tags:[],version:"current",lastUpdatedAt:1681260022,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"prior-art",title:"Prior Art",description:"Introduction > Prior Art: Influences on the design of Redux"},sidebar:"docs",previous:{title:"Glossary",permalink:"/redux/understanding/thinking-in-redux/glossary"},next:{title:"Middleware",permalink:"/redux/understanding/history-and-design/middleware"}},p={},d=[{value:"Flux",id:"flux",level:3},{value:"Elm",id:"elm",level:3},{value:"Immutable",id:"immutable",level:3},{value:"Baobab",id:"baobab",level:3},{value:"RxJS",id:"rxjs",level:3}],c={toc:d},m="wrapper";function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prior-art"},"Prior Art"),(0,o.kt)("p",null,"Redux has a mixed heritage. It is similar to some patterns and technologies, but is also different from them in important ways. We'll explore some of the similarities and the differences below."),(0,o.kt)("h3",{id:"flux"},"Flux"),(0,o.kt)("p",null,"Redux was inspired by several important qualities of ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/flux/"},"Flux"),". Like Flux, Redux prescribes that you concentrate your model update logic in a certain layer of your application (\u201cstores\u201d in Flux, \u201creducers\u201d in Redux). Instead of letting the application code directly mutate the data, both tell you to describe every mutation as a plain object called an \u201caction\u201d."),(0,o.kt)("p",null,"Unlike Flux, ",(0,o.kt)("strong",{parentName:"p"},"Redux does not have the concept of a Dispatcher"),". This is because it relies on pure functions instead of event emitters, and pure functions are easy to compose and don't need an additional entity managing them. Depending on how you view Flux, you may see this as either a deviation or an implementation detail. Flux has often been ",(0,o.kt)("a",{parentName:"p",href:"https://speakerdeck.com/jmorrell/jsconf-uy-flux-those-who-forget-the-past-dot-dot-dot-1"},"described as ",(0,o.kt)("inlineCode",{parentName:"a"},"(state, action) => state")),". In this sense, Redux is true to the Flux architecture, but makes it simpler thanks to pure functions."),(0,o.kt)("p",null,"Another important difference from Flux is that ",(0,o.kt)("strong",{parentName:"p"},"Redux assumes you never mutate your data"),". You can use plain objects and arrays for your state just fine, but mutating them inside the reducers is strongly discouraged. You should always return a new object, which can be done using the object spread operator or ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"the Immer immutable update library"),"."),(0,o.kt)("p",null,"While it is technically ",(0,o.kt)("em",{parentName:"p"},"possible")," to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues/328#issuecomment-125035516"},"write impure reducers")," that mutate the data for performance corner cases, we actively discourage you from doing this. Development features like time travel, record/replay, or hot reloading will break. Moreover it doesn't seem like immutability poses performance problems in most real apps, because, as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omcljs/om"},"Om")," demonstrates, even if you lose out on object allocation, you still win by avoiding expensive re-renders and re-calculations, as you know exactly what changed thanks to reducer purity."),(0,o.kt)("p",null,"For what it's worth, Flux's creators ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jingc/status/616608251463909376"},"approve")," of ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/fisherwebdev/status/616286955693682688"},"Redux"),"."),(0,o.kt)("h3",{id:"elm"},"Elm"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://elm-lang.org/"},"Elm")," is a functional programming language inspired by Haskell and created by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/evancz"},"Evan Czaplicki"),". It enforces ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evancz/elm-architecture-tutorial/"},"a \u201cmodel view update\u201d architecture"),", where the update has the following signature: ",(0,o.kt)("inlineCode",{parentName:"p"},"(action, state) => state"),". Elm \u201cupdaters\u201d serve the same purpose as reducers in Redux."),(0,o.kt)("p",null,"Unlike Redux, Elm is a language, so it is able to benefit from many things like enforced purity, static typing, out of the box immutability, and pattern matching (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"case")," expression). Even if you don't plan to use Elm, you should read about the Elm architecture, and play with it. There is an interesting ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paldepind/noname-functional-frontend-framework"},"JavaScript library playground implementing similar ideas"),". We should look there for inspiration on Redux! One way that we can get closer to the static typing of Elm is by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues/290"},"using a gradual typing solution like Flow"),"."),(0,o.kt)("h3",{id:"immutable"},"Immutable"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/immutable-js"},"Immutable")," is a JavaScript library implementing persistent data structures. It is performant and has an idiomatic JavaScript API."),(0,o.kt)("p",null,"(Note that while Immutable.js helped inspire Redux, today we recommend ",(0,o.kt)("a",{parentName:"p",href:"/redux/style-guide/#use-immer-for-writing-immutable-updates"},"using Immer for immutable updates instead"),".)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Redux doesn't care ",(0,o.kt)("em",{parentName:"strong"},"how")," you store the state\u2014it can be a plain object, an Immutable object, or anything else.")," You'll probably want a (de)serialization mechanism for writing universal apps and hydrating their state from the server, but other than that, you can use any data storage library ",(0,o.kt)("em",{parentName:"p"},"as long as it supports immutability"),". For example, it doesn't make sense to use Backbone for Redux state, because Backbone models are mutable."),(0,o.kt)("p",null,"Note that, even if your immutable library supports cursors, you shouldn't use them in a Redux app. The whole state tree should be considered read-only, and you should use Redux for updating the state, and subscribing to the updates. Therefore writing via cursor doesn't make sense for Redux. ",(0,o.kt)("strong",{parentName:"p"},"If your only use case for cursors is decoupling the state tree from the UI tree and gradually refining the cursors, you should look at selectors instead.")," Selectors are composable getter functions. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/faassen/reselect"},"reselect")," for a really great and concise implementation of composable selectors."),(0,o.kt)("h3",{id:"baobab"},"Baobab"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Yomguithereal/baobab"},"Baobab")," is another popular library implementing immutable API for updating plain JavaScript objects. While you can use it with Redux, there is little benefit in using them together."),(0,o.kt)("p",null,"Most of the functionality Baobab provides is related to updating the data with cursors, but Redux enforces that the only way to update the data is to dispatch an action. Therefore they solve the same problem differently, and don't complement each other."),(0,o.kt)("p",null,"Unlike Immutable, Baobab doesn't yet implement any special efficient data structures under the hood, so you don't really win anything from using it together with Redux. It's easier to just use plain objects in this case."),(0,o.kt)("h3",{id:"rxjs"},"RxJS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/RxJS"},"RxJS")," is a superb way to manage the complexity of asynchronous apps. In fact ",(0,o.kt)("a",{parentName:"p",href:"https://cycle.js.org"},"there is an effort to create a library that models human-computer interaction as interdependent observables"),"."),(0,o.kt)("p",null,"Does it make sense to use Redux together with RxJS? Sure! They work great together. For example, it is easy to expose a Redux store as an observable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function toObservable(store) {\n  return {\n    subscribe({ next }) {\n      const unsubscribe = store.subscribe(() => next(store.getState()))\n      next(store.getState())\n      return { unsubscribe }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Similarly, you can compose different asynchronous streams to turn them into actions before feeding them to ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch()"),"."),(0,o.kt)("p",null,"The question is: do you really need Redux if you already use Rx? Maybe not. It's not hard to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jas-chen/rx-redux"},"re-implement Redux in Rx"),". Some say it's a two-liner using Rx ",(0,o.kt)("inlineCode",{parentName:"p"},".scan()")," method. It may very well be!"),(0,o.kt)("p",null,"If you're in doubt, check out the Redux source code (there isn't much going on there), as well as its ecosystem (for example, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"the developer tools"),"). If you don't care too much about it and want to go with the reactive data flow all the way, you might want to explore something like ",(0,o.kt)("a",{parentName:"p",href:"https://cycle.js.org"},"Cycle")," instead, or even combine it with Redux. Let us know how it goes!"))}h.isMDXComponent=!0}}]);