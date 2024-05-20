"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2066],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9809:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"actions",title:"Actions",sidebar_label:"Actions"},l="Redux FAQ: Actions",u={unversionedId:"faq/actions",id:"faq/actions",title:"Actions",description:"Table of Contents",source:"@site/../docs/faq/Actions.md",sourceDirName:"faq",slug:"/faq/actions",permalink:"/faq/actions",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/faq/Actions.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"actions",title:"Actions",sidebar_label:"Actions"},sidebar:"docs",previous:{title:"Store Setup",permalink:"/faq/store-setup"},next:{title:"Immutable Data",permalink:"/faq/immutable-data"}},c={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Actions",id:"actions",level:2},{value:"Why should <code>type</code> be a string? Why should my action types be constants?",id:"why-should-type-be-a-string-why-should-my-action-types-be-constants",level:3},{value:"Further information",id:"further-information",level:4},{value:"Is there always a one-to-one mapping between reducers and actions?",id:"is-there-always-a-one-to-one-mapping-between-reducers-and-actions",level:3},{value:"Further information",id:"further-information-1",level:4},{value:"How can I represent \u201cside effects\u201d such as AJAX calls? Why do we need things like \u201caction creators\u201d, \u201cthunks\u201d, and \u201cmiddleware\u201d to do async behavior?",id:"how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior",level:3},{value:"Further information",id:"further-information-2",level:4},{value:"What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?",id:"what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else",level:3},{value:"Should I dispatch multiple actions in a row from one action creator?",id:"should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator",level:3},{value:"Further information",id:"further-information-3",level:4}],h={toc:d},p="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(p,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-faq-actions"},"Redux FAQ: Actions"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#redux-faq-actions"},"Redux FAQ: Actions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#actions"},"Actions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants"},"Why should ",(0,o.kt)("inlineCode",{parentName:"a"},"type")," be a string, or at least serializable? Why should my action types be constants?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#is-there-always-a-one-to-one-mapping-between-reducers-and-actions"},"Is there always a one-to-one mapping between reducers and actions?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior"},"How can I represent \u201cside effects\u201d such as AJAX calls? Why do we need things like \u201caction creators\u201d, \u201cthunks\u201d, and \u201cmiddleware\u201d to do async behavior?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-2"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else"},"What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator"},"Should I dispatch multiple actions in a row from one action creator?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-3"},"Further information"))))))))),(0,o.kt)("h2",{id:"actions"},"Actions"),(0,o.kt)("h3",{id:"why-should-type-be-a-string-why-should-my-action-types-be-constants"},"Why should ",(0,o.kt)("inlineCode",{parentName:"h3"},"type")," be a string? Why should my action types be constants?"),(0,o.kt)("p",null,"As with state, serializable actions enable several of Redux's defining features, such as time travel debugging, and recording and replaying actions. Using something like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Symbol")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," value or using ",(0,o.kt)("inlineCode",{parentName:"p"},"instanceof")," checks for actions themselves would break that. Strings are serializable and easily self-descriptive, and so are a better choice. Note that it ",(0,o.kt)("em",{parentName:"p"},"is")," okay to use Symbols, Promises, or other non-serializable values in an action if the action is intended for use by middleware. Actions only need to be serializable by the time they actually reach the store and are passed to the reducers."),(0,o.kt)("p",null,"We can't reliably enforce serializable actions for performance reasons, so Redux only checks that every action is a plain object, and that the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is a string. The rest is up to you, but you might find that keeping everything serializable helps debug and reproduce issues."),(0,o.kt)("p",null,"Encapsulating and centralizing commonly used pieces of code is a key concept in programming. While it is certainly possible to manually create action objects everywhere, and write each ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," value by hand, defining reusable constants makes maintaining code easier. If you put constants in a separate file, you can ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-import"},"check your ",(0,o.kt)("inlineCode",{parentName:"a"},"import")," statements against typos")," so you can't accidentally use the wrong string."),(0,o.kt)("h4",{id:"further-information"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/usage/reducing-boilerplate#actions"},"Using Redux: Reducing Boilerplate"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussion")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/384"},"#384: Recommend that Action constants be named in the past tense")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/628"},"#628: Solution for simple action creation with less boilerplate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1024"},"#1024: Proposal: Declarative reducers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1167"},"#1167: Reducer without switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/34759047/62937"},"Stack Overflow: Why do you need 'Actions' as data in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/q/34965856/62937"},"Stack Overflow: What is the point of the constants in Redux?"))),(0,o.kt)("h3",{id:"is-there-always-a-one-to-one-mapping-between-reducers-and-actions"},"Is there always a one-to-one mapping between reducers and actions?"),(0,o.kt)("p",null,"No. We suggest you write independent small reducer functions that are each responsible for updates to a specific slice of state. We call this pattern \u201creducer composition\u201d. A given action could be handled by all, some, or none of them. This keeps components decoupled from the actual data changes, as one action may affect different parts of the state tree, and there is no need for the component to be aware of this. Some users do choose to bind them more tightly together, such as the \u201cducks\u201d file structure, but there is definitely no one-to-one mapping by default, and you should break out of such a paradigm any time you feel you want to handle an action in many reducers."),(0,o.kt)("h4",{id:"further-information-1"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-3-state-actions-reducers"},"Fundamentals: State, Actions, Reducers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/usage/structuring-reducers/structuring-reducers"},"Using Redux: Structuring Reducers"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/682923564006248448"},"Twitter: most common Redux misconception")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1167"},"#1167: Reducer without switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxible/reduxible/issues/8"},"Reduxible #8: Reducers and action creators aren't a one-to-one mapping")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35493352/can-i-dispatch-multiple-actions-without-redux-thunk-middleware/35642783"},"Stack Overflow: Can I dispatch multiple actions without Redux Thunk middleware?"))),(0,o.kt)("h3",{id:"how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior"},"How can I represent \u201cside effects\u201d such as AJAX calls? Why do we need things like \u201caction creators\u201d, \u201cthunks\u201d, and \u201cmiddleware\u201d to do async behavior?"),(0,o.kt)("p",null,"This is a long and complex topic, with a wide variety of opinions on how code should be organized and what approaches should be used."),(0,o.kt)("p",null,"Any meaningful web app needs to execute complex logic, usually including asynchronous work such as making AJAX requests. That code is no longer purely a function of its inputs, and the interactions with the outside world are known as ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29"},"\u201cside effects\u201d")),(0,o.kt)("p",null,"Redux is inspired by functional programming, and out of the box, has no place for side effects to be executed. In particular, reducer functions ",(0,o.kt)("em",{parentName:"p"},"must")," always be pure functions of ",(0,o.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),". However, Redux's middleware makes it possible to intercept dispatched actions and add additional complex behavior around them, including side effects."),(0,o.kt)("p",null,"In general, Redux suggests that code with side effects should be part of the action creation process. While that logic ",(0,o.kt)("em",{parentName:"p"},"can")," be performed inside of a UI component, it generally makes sense to extract that logic into a reusable function so that the same logic can be called from multiple places\u2014in other words, an action creator function."),(0,o.kt)("p",null,"The simplest and most common way to do this is to add the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},"Redux Thunk")," middleware that lets you write action creators with more complex and asynchronous logic. Another widely-used method is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yelouafi/redux-saga"},"Redux Saga")," which lets you write more synchronous-looking code using generators, and can act like \u201cbackground threads\u201d or \u201cdaemons\u201d in a Redux app. Yet another approach is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/raisemarketplace/redux-loop"},"Redux Loop"),", which inverts the process by allowing your reducers to declare side effects in response to state changes and have them executed separately. Beyond that, there are ",(0,o.kt)("em",{parentName:"p"},"many")," other community-developed libraries and ideas, each with their own take on how side effects should be managed."),(0,o.kt)("h4",{id:"further-information-2"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-6-async-logic"},"Redux Fundamentals: Async Logic and Data Flow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-4-store#middleware"},"Redux Fundamentals: Store - Middleware"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@fward/redux-side-effects-and-you-66f2e0842fc3"},"Redux Side-Effects and You")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://blog.hivejs.org/building-the-ui-2/"},"Pure functionality and side effects in Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/"},"From Flux to Redux: Async Actions the easy way")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md"},'React/Redux Links: "Redux Side Effects" category')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/markerikson/ea4d0a6ce56ee479fe8b356e099f857e"},"Gist: Redux-Thunk examples"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/291"},"#291: Trying to put API calls in the right place")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/455"},"#455: Modeling side effects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/533"},"#533: Simpler introduction to async action creators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/pull/569"},"#569: Proposal: API for explicit side effects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/1139"},"#1139: An alternative side effect model based on generators and sagas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux"},"Stack Overflow: Why do we need middleware for async flow in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559"},"Stack Overflow: How to dispatch a Redux action with a timeout?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32982237/where-should-i-put-synchronous-side-effects-linked-to-actions-in-redux/33036344"},"Stack Overflow: Where should I put synchronous side effects linked to actions in redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32925837/how-to-handle-complex-side-effects-in-redux/33036594"},"Stack Overflow: How to handle complex side-effects in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33011729/how-to-unit-test-async-redux-actions-to-mock-ajax-response/33053465"},"Stack Overflow: How to unit test async Redux actions to mock ajax response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35262692/how-to-fire-ajax-calls-in-response-to-the-state-changes-with-redux/35675447"},"Stack Overflow: How to fire AJAX calls in response to the state changes with Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/469iyc/help_performing_async_api_calls_with_reduxpromise/"},"Reddit: Help performing Async API calls with Redux-Promise Middleware.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/689639582120415232"},"Twitter: possible comparison between sagas, loops, and other approaches"))),(0,o.kt)("h3",{id:"what-async-middleware-should-i-use-how-do-you-decide-between-thunks-sagas-observables-or-something-else"},"What async middleware should I use? How do you decide between thunks, sagas, observables, or something else?"),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/side-effects.md"},"many async/side effect middlewares available"),", but the most commonly used ones are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},(0,o.kt)("inlineCode",{parentName:"a"},"redux-thunk")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redux-saga/redux-saga"},(0,o.kt)("inlineCode",{parentName:"a"},"redux-saga")),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redux-observable/redux-observable"},(0,o.kt)("inlineCode",{parentName:"a"},"redux-observable")),". These are different tools, with different strengths, weaknesses, and use cases."),(0,o.kt)("p",null,"As a general rule of thumb:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thunks are best for complex synchronous logic (especially code that needs access to the entire Redux store state), and simple async logic (like basic AJAX calls). With the use of ",(0,o.kt)("inlineCode",{parentName:"li"},"async/await"),", it can be reasonable to use thunks for some more complex promise-based logic as well."),(0,o.kt)("li",{parentName:"ul"},'Sagas are best for complex async logic and decoupled "background thread"-type behavior, especially if you need to listen to dispatched actions (which is something that can\'t be done with thunks). They require familiarity with generator functions and ',(0,o.kt)("inlineCode",{parentName:"li"},"redux-saga"),'\'s "effects" operators.'),(0,o.kt)("li",{parentName:"ul"},"Observables solve the same problems as sagas, but rely on RxJS to implement async behavior. They require familiarity with the RxJS API.")),(0,o.kt)("p",null,"We recommend that most Redux users should start with thunks, and then add an additional side effect library like sagas or observables later if their app really requires handling for more complex async logic."),(0,o.kt)("p",null,"Since sagas and observables have the same use case, an application would normally use one or the other, but not both. However, note that ",(0,o.kt)("strong",{parentName:"p"},"it's absolutely fine to use both thunks and either sagas or observables together"),", because they solve different problems."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/"},"Decembersoft: What is the right way to do asynchronous operations in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@shoshanarosenfield/redux-thunk-vs-redux-saga-93fe82878b2d"},"Redux-Thunk vs Redux-Saga: an overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/s/H1xLHUQ8e#side-by-side-comparison"},"Redux-Saga V.S. Redux-Observable"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/8vglo0/react_developer_map_by_adamgolab/e1nr597/"},"Reddit: discussion of using thunks and sagas together, and pros and cons of sagas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es2017-asy"},"Stack Overflow: Pros/cons of using redux-saga with ES2015 generators vs redux-thunk with ES2017 async/await")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/40021344/why-use-redux-observable-over-redux-saga/40027778#40027778"},"Stack Overflow: Why use Redux-Observable over Redux-Saga?"))),(0,o.kt)("h3",{id:"should-i-dispatch-multiple-actions-in-a-row-from-one-action-creator"},"Should I dispatch multiple actions in a row from one action creator?"),(0,o.kt)("p",null,"There's no specific rule for how you should structure your actions. Using an async middleware like Redux Thunk certainly enables scenarios such as dispatching multiple distinct but related actions in a row, dispatching actions to represent progression of an AJAX request, dispatching actions conditionally based on state, or even dispatching an action and checking the updated state immediately afterwards."),(0,o.kt)("p",null,"In general, ask if these actions are related but independent, or should actually be represented as one action. Do what makes sense for your own situation but try to balance the readability of reducers with readability of the action log. For example, an action that includes the whole new state tree would make your reducer a one-liner, but the downside is now you have no history of ",(0,o.kt)("em",{parentName:"p"},"why")," the changes are happening, so debugging gets really difficult. On the other hand, if you emit actions in a loop to keep them granular, it's a sign that you might want to introduce a new action type that is handled in a different way."),(0,o.kt)("p",null,"Try to avoid dispatching several times synchronously in a row in the places where you're concerned about performance. There are a number of addons and approaches that can batch up dispatches as well."),(0,o.kt)("h4",{id:"further-information-3"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/faq/performance#performance-update-events"},"FAQ: Performance - Reducing Update Events"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/#multiple-dispatching"},"Idiomatic Redux: Thoughts on Thunks, Sagas, Abstraction, and Reusability"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/597"},"#597: Valid to dispatch multiple actions from an event handler?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reactjs/redux/issues/959"},"#959: Multiple actions one dispatch?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33637740/should-i-use-one-or-several-action-types-to-represent-this-async-action/33816695"},"Stack Overflow: Should I use one or several action types to represent this async action?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35406707/do-events-and-actions-have-a-11-relationship-in-redux/35410524"},"Stack Overflow: Do events and actions have a 1:1 relationship in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33220776/should-actions-like-showing-hiding-loading-screens-be-handled-by-reducers-to-rel/33226443#33226443"},"Stack Overflow: Should actions be handled by reducers to related actions or generated by action creators themselves?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/800310164792414208"},'Twitter: "Good thread on the problems with Redux Thunk..."'))))}m.isMDXComponent=!0}}]);