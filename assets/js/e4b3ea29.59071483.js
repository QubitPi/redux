"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9936],{7010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(8168),o=(a(6540),a(5680));const r={id:"history-of-redux",title:"The History of Redux",description:"Understanding > The History of Redux"},i="A (Brief) History of Redux",s={unversionedId:"understanding/history-and-design/history-of-redux",id:"understanding/history-and-design/history-of-redux",title:"The History of Redux",description:"Understanding > The History of Redux",source:"@site/../docs/understanding/history-and-design/history-of-redux.md",sourceDirName:"understanding/history-and-design",slug:"/understanding/history-and-design/history-of-redux",permalink:"/understanding/history-and-design/history-of-redux",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/understanding/history-and-design/history-of-redux.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"history-of-redux",title:"The History of Redux",description:"Understanding > The History of Redux"},sidebar:"docs",previous:{title:"Glossary",permalink:"/understanding/thinking-in-redux/glossary"},next:{title:"Prior Art",permalink:"/understanding/history-and-design/prior-art"}},d={},l=[{value:"2011: JS MVC Frameworks",id:"2011-js-mvc-frameworks",level:2},{value:"2014: Flux",id:"2014-flux",level:2},{value:"2015: The Birth of Redux",id:"2015-the-birth-of-redux",level:2},{value:"2017: Ecosystem Competition",id:"2017-ecosystem-competition",level:2},{value:"2019: Redux Toolkit",id:"2019-redux-toolkit",level:2},{value:"Further Information",id:"further-information",level:2}],u={toc:l},p="wrapper";function c(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"a-brief-history-of-redux"},"A (Brief) History of Redux"),(0,o.yg)("h2",{id:"2011-js-mvc-frameworks"},"2011: JS MVC Frameworks"),(0,o.yg)("p",null,'Early JavaScript MVC frameworks like AngularJS, Ember, and Backbone had issues. AngularJS tried to enforce separation of "controllers" from templates, but nothing prevented you from writing ',(0,o.yg)("inlineCode",{parentName:"p"},'<div onClick="$ctrl.some.deeply.nested.field = 123">')," in a template. Meanwhile, Backbone was based on event emitters - Models, Collections, and Views were all each capable of emitting events. Models might emit a ",(0,o.yg)("inlineCode",{parentName:"p"},'"change:firstName"')," event, and Views would subscribe to those. But, ",(0,o.yg)("em",{parentName:"p"},"any")," code could subscribe to those events and run more logic, which could trigger ",(0,o.yg)("em",{parentName:"p"},"more")," events"),(0,o.yg)("p",null,"That made these frameworks very hard to debug and maintain. It was possible that updating one field in one model could trigger dozens of events and logic running around the app, or that any template could make changes to state at any time, which made it impossible to understand what would happen when you did a state update."),(0,o.yg)("h2",{id:"2014-flux"},"2014: Flux"),(0,o.yg)("p",null,'Back around 2012-2013, when React was first publicly released, Facebook had been using it internally for a couple years. One of the problems they ran into was that they had multiple independent pieces of their UI that needed access to the same data, like "how many unread notifications are there", but they found it hard to keep that logic straight when using Backbone-style code.'),(0,o.yg)("p",null,'Facebook ultimately came up with a pattern called "Flux": create multiple singleton Stores, like a ',(0,o.yg)("inlineCode",{parentName:"p"},"PostsStore")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"CommentsStore"),". Each of those Store instances would register with a ",(0,o.yg)("inlineCode",{parentName:"p"},"Dispatcher"),", and the ",(0,o.yg)("em",{parentName:"p"},"only")," way to trigger an update in a store was to call ",(0,o.yg)("inlineCode",{parentName:"p"},'Dispatcher.dispatch({type: "somethingHappened"})'),'. That plain object was called an "action". The idea was that all the state update logic would be semi-centralized - you couldn\'t just have any random part of the app mutate state, and all the state updates would be predictable.'),(0,o.yg)("p",null,'Facebook announced this "Flux Architecture" concept around 2014, but didn\'t provide a full library that implemented that pattern. That led the React community to build ',(0,o.yg)("em",{parentName:"p"},"dozens")," of Flux-inspired libraries with variations on the pattern."),(0,o.yg)("h2",{id:"2015-the-birth-of-redux"},"2015: The Birth of Redux"),(0,o.yg)("p",null,'In mid-2015, Dan Abramov began building yet another Flux-inspired library, called Redux. The idea was to demonstrate "time-travel debugging" for a ',(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/xsSnOQynTHs?t=601"},"conference talk"),". The library was designed to use the Flux pattern, but with some functional programming principles applied. Rather than Store ",(0,o.yg)("em",{parentName:"p"},"instances"),", you could use predictable reducer functions that did immutable updates. This would allow jumping back and forth in time to see how the state looked at various points. It would also make the code more straightforward, testable, and understandable."),(0,o.yg)("p",null,"Redux came out in 2015, and quickly killed off all the other Flux-inspired libraries. It got early adoption from advanced developers in the React ecosystem, and by 2016, many people began to say that \"if you're using React, you ",(0,o.yg)("em",{parentName:"p"},"must")," be using Redux too\". (Frankly, this led to a lot of people using Redux in places they didn't ",(0,o.yg)("em",{parentName:"p"},"need")," to be using it!)"),(0,o.yg)("p",null,"It's also worth noting that at the time, React only had its ",(0,o.yg)("em",{parentName:"p"},"legacy")," Context API, which had was basically broken: it couldn't properly pass ",(0,o.yg)("em",{parentName:"p"},"updated")," values down. So, it was possible to put event emitters into Context and subscribe to them, but you couldn't really use it for plain data. That meant that a lot of people began adopting Redux because it ",(0,o.yg)("em",{parentName:"p"},"was")," a way to consistently pass updated values around the entire application."),(0,o.yg)("p",null,'Dan said early on that "Redux is not meant to be the ',(0,o.yg)("em",{parentName:"p"},"shortest")," way to write code - it's meant to make it predictable and understandable\". Part of that is about having a consistent pattern (state updates are done by reducers, so you always look at the reducer logic to see what the state values ",(0,o.yg)("em",{parentName:"p"},"can")," be, what the possible actions are, and what updates they cause). It's also about moving logic ",(0,o.yg)("em",{parentName:"p"},"out"),' of the component tree, so that the UI mostly just says "this thing happened", and your components are simpler. Along with that, code that is written as "pure functions", like reducers and selectors, are more straightforward to understand: arguments in, result out, nothing else to look at. Finally, Redux\'s design enabled the Redux DevTools, which show you a readable list of all the actions that were dispatched, what the actions/state contained, and changes occurred for each action.'),(0,o.yg)("p",null,"The early Redux patterns were especially boilerplate-heavy. It was common to have ",(0,o.yg)("inlineCode",{parentName:"p"},"actions/todos.js"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"reducers/todos.js"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"constants/todos.js"),", just to define a single action type ( ",(0,o.yg)("inlineCode",{parentName:"p"},'const ADD_TODO = "ADD_TODO"'),"), action creator function, and reducer case. You also had to hand-write immutable updates with spread operators, which were easy to mess up. People did fetch and cache server state in Redux, but it took a lot of manually-written code to write thunks to do the fetching, dispatch the actions with the fetched data, and manage the cache status in the reducers."),(0,o.yg)("p",null,"Redux became popular in ",(0,o.yg)("em",{parentName:"p"},"spite")," of that boilerplate, but it was always the biggest point of concern."),(0,o.yg)("h2",{id:"2017-ecosystem-competition"},"2017: Ecosystem Competition"),(0,o.yg)("p",null,'By 2017-18, things had changed. A lot of the community was now focusing more on "data fetching and caching" rather than "client-side state management", and that\'s when we saw the rise of libraries like Apollo, React Query, SWR, and Urql for data fetching. At the same time, we also had the ',(0,o.yg)("em",{parentName:"p"},"new")," React Context API came out, which does properly pass updated values down the component tree."),(0,o.yg)("p",null,'That meant that Redux wasn\'t nearly as "required" as it used to be - there were now other tools that solved many of the same problems, with varying amounts of overlap (and often with less code). The frequent complaints about "boilerplate" also caused a lot of concern from folks using Redux.'),(0,o.yg)("h2",{id:"2019-redux-toolkit"},"2019: Redux Toolkit"),(0,o.yg)("p",null,'So, in 2019, we built and shipped Redux Toolkit as a simpler way to write the same Redux logic with less code. RTK is still "Redux" (single store, dispatching actions to trigger state updates done in reducers via immutable update logic), but with a simpler API and better built-in default behaviors. That also includes RTK Query, our built-in data fetching and caching library that was inspired by React Query and Apollo.'),(0,o.yg)("p",null,"Today, ",(0,o.yg)("a",{parentName:"p",href:"/introduction/why-rtk-is-redux-today"},"RTK is the standard way to write Redux logic"),". Like all tools, it has tradeoffs. RTK is probably going to be a bit more code to use than Zustand, but it also provides useful patterns for separating app logic from the UI. Redux isn't the right tool for every app, but it is still the most widely used state management lib with React apps, has excellent documentation, and provides a lot of features to help you build apps with a consistent and predictable structure."),(0,o.yg)("h2",{id:"further-information"},"Further Information"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"},"The Tao of Redux, Part 1: Implementation and Intent")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2021/01/context-redux-differences/"},'Why React Context is Not a "State Management" Tool (and Why It Doesn\'t Replace Redux)')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2019/10/redux-toolkit-1.0/"},"Idiomatic Redux: Redux Toolkit 1.0")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://changelog.com/podcast/187"},"Changelog #187: Dan Abramov talks about Redux")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://gist.github.com/markerikson/2971210292a9c65138eeb33ae7d560b0"},"Redux Archeology and Design Notes")," (with links to early design discussions and descriptions of project design goals)")))}c.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(6540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=o,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);