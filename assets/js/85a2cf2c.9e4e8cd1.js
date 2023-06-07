"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"store-setup",title:"Store Setup",sidebar_label:"Store Setup"},l="Redux FAQ: Store Setup",u={unversionedId:"faq/store-setup",id:"faq/store-setup",title:"Store Setup",description:"Table of Contents",source:"@site/../docs/faq/StoreSetup.md",sourceDirName:"faq",slug:"/faq/store-setup",permalink:"/redux/faq/store-setup",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/faq/StoreSetup.md",tags:[],version:"current",lastUpdatedAt:1686123852,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{id:"store-setup",title:"Store Setup",sidebar_label:"Store Setup"},sidebar:"docs",previous:{title:"Organizing State",permalink:"/redux/faq/organizing-state"},next:{title:"Actions",permalink:"/redux/faq/actions"}},p={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Store Setup",id:"store-setup",level:2},{value:"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?",id:"can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself",level:3},{value:"Further information",id:"further-information",level:4},{value:"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between <code>next</code> and <code>dispatch</code> in a middleware function?",id:"is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function",level:3},{value:"Further information",id:"further-information-1",level:4},{value:"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?",id:"how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription",level:3},{value:"Further information",id:"further-information-2",level:4}],c={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redux-faq-store-setup"},"Redux FAQ: Store Setup"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#redux-faq-store-setup"},"Redux FAQ: Store Setup"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#store-setup"},"Store Setup"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information"},"Further information")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function"},"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between ",(0,i.kt)("inlineCode",{parentName:"a"},"next")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"dispatch")," in a middleware function?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription"},"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#further-information-2"},"Further information"))))))))),(0,i.kt)("h2",{id:"store-setup"},"Store Setup"),(0,i.kt)("h3",{id:"can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"Can or should I create multiple stores? Can I import my store directly, and use it in components myself?"),(0,i.kt)("p",null,"The original Flux pattern describes having multiple \u201cstores\u201d in an app, each one holding a different area of domain data. This can introduce issues such as needing to have one store \u201c",(0,i.kt)("inlineCode",{parentName:"p"},"waitFor"),"\u201d another store to update. This is not necessary in Redux because the separation between data domains is already achieved by splitting a single reducer into smaller reducers."),(0,i.kt)("p",null,"As with several other questions, it is ",(0,i.kt)("em",{parentName:"p"},"possible")," to create multiple distinct Redux stores in a page, but the intended pattern is to have only a single store. Having a single store enables using the Redux DevTools, makes persisting and rehydrating data simpler, and simplifies the subscription logic."),(0,i.kt)("p",null,"Some valid reasons for using multiple stores in Redux might include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solving a performance issue caused by too frequent updates of some part of the state, when confirmed by profiling the app."),(0,i.kt)("li",{parentName:"ul"},"Isolating a Redux app as a component in a bigger application, in which case you might want to create a store per root component instance.")),(0,i.kt)("p",null,"However, creating new stores shouldn't be your first instinct, especially if you come from a Flux background. Try reducer composition first, and only use multiple stores if it doesn't solve your problem."),(0,i.kt)("p",null,"Similarly, while you ",(0,i.kt)("em",{parentName:"p"},"can")," reference your store instance by importing it directly, this is not a recommended pattern in Redux. If you create a store instance and export it from a module, it will become a singleton. This means it will be harder to isolate a Redux app as a component of a larger app, if this is ever necessary, or to enable server rendering, because on the server you want to create separate store instances for every request."),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux"),", the wrapper classes generated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect()")," function do actually look for ",(0,i.kt)("inlineCode",{parentName:"p"},"props.store")," if it exists, but it's best if you wrap your root component in ",(0,i.kt)("inlineCode",{parentName:"p"},"<Provider store={store}>")," and let React Redux worry about passing the store down. This way components don't need to worry about importing a store module, and isolating a Redux app or enabling server rendering is much easier to do later."),(0,i.kt)("h4",{id:"further-information"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/redux/api/store"},"API: Store"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1436"},"#1346: Is it bad practice to just have a 'stores' directory?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33619775/redux-multiple-stores-why-not"},"Stack Overflow: Redux multiple stores, why not?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator"},"Stack Overflow: Accessing Redux state in an action creator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/gaearon/eeee2f619620ab7b55673a4ee2bf8400"},"Gist: Breaking out of Redux paradigm to isolate apps"))),(0,i.kt)("h3",{id:"is-it-ok-to-have-more-than-one-middleware-chain-in-my-store-enhancer-what-is-the-difference-between-next-and-dispatch-in-a-middleware-function"},"Is it OK to have more than one middleware chain in my store enhancer? What is the difference between ",(0,i.kt)("inlineCode",{parentName:"h3"},"next")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispatch")," in a middleware function?"),(0,i.kt)("p",null,"Redux middleware act like a linked list. Each middleware function can either call ",(0,i.kt)("inlineCode",{parentName:"p"},"next(action)")," to pass an action along to the next middleware in line, call ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch(action)")," to restart the processing at the beginning of the list, or do nothing at all to stop the action from being processed further."),(0,i.kt)("p",null,"This chain of middleware is defined by the arguments passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"applyMiddleware")," function used when creating a store. Defining multiple chains will not work correctly, as they would have distinctly different ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," references and the different chains would effectively be disconnected."),(0,i.kt)("h4",{id:"further-information-1"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/redux/tutorials/fundamentals/part-4-store#middleware"},"Redux Fundamentals: Store - Middleware")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/redux/api/applymiddleware"},"API: applyMiddleware"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1051"},"#1051: Shortcomings of the current applyMiddleware and composing createStore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@meagle/understanding-87566abcfb7a"},"Understanding Redux Middleware")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.krawaller.se/posts/exploring-redux-middleware/"},"Exploring Redux Middleware"))),(0,i.kt)("h3",{id:"how-do-i-subscribe-to-only-a-portion-of-the-state-can-i-get-the-dispatched-action-as-part-of-the-subscription"},"How do I subscribe to only a portion of the state? Can I get the dispatched action as part of the subscription?"),(0,i.kt)("p",null,"Redux provides a single ",(0,i.kt)("inlineCode",{parentName:"p"},"store.subscribe")," method for notifying listeners that the store has updated. Listener callbacks do not receive the current state as an argument\u2014it is simply an indication that ",(0,i.kt)("em",{parentName:"p"},"something")," has changed. The subscriber logic can then call ",(0,i.kt)("inlineCode",{parentName:"p"},"getState()")," to get the current state value."),(0,i.kt)("p",null,"This API is intended as a low-level primitive with no dependencies or complications, and can be used to build higher-level subscription logic. UI bindings such as React Redux can create a subscription for each connected component. It is also possible to write functions that can intelligently compare the old state vs the new state, and execute additional logic if certain pieces have changed. Examples include ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jprichardson/redux-watch"},"redux-watch"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ashaffer/redux-subscribe"},"redux-subscribe")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ivantsov/redux-subscriber"},"redux-subscriber")," which offer different approaches to specifying subscriptions and handling changes."),(0,i.kt)("p",null,"The new state is not passed to the listeners in order to simplify implementing store enhancers such as the Redux DevTools. In addition, subscribers are intended to react to the state value itself, not the action. Middleware can be used if the action is important and needs to be handled specifically."),(0,i.kt)("h4",{id:"further-information-2"},"Further information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Documentation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/redux/tutorials/fundamentals/part-4-store"},"Fundamentals: Store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/redux/api/store"},"API: Store"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Discussions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/303"},"#303: subscribe API with state as an argument")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/580"},"#580: Is it possible to get action and state in store.subscribe?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/922"},"#922: Proposal: add subscribe to middleware API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1057"},"#1057: subscribe listener can get action param?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1300"},"#1300: Redux is great but major feature is missing"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Libraries")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions"},"Redux Addons Catalog: Store Change Subscriptions"))))}h.isMDXComponent=!0}}]);