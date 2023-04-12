"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1506],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6526:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={id:"performance",title:"Performance",sidebar_label:"Performance"},l="Redux FAQ: Performance",c={unversionedId:"faq/performance",id:"faq/performance",title:"Performance",description:"Table of Contents",source:"@site/../docs/faq/Performance.md",sourceDirName:"faq",slug:"/faq/performance",permalink:"/redux/faq/performance",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/faq/Performance.md",tags:[],version:"current",lastUpdatedAt:1681260022,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"performance",title:"Performance",sidebar_label:"Performance"},sidebar:"docs",previous:{title:"Code Structure",permalink:"/redux/faq/code-structure"},next:{title:"Design Decisions",permalink:"/redux/faq/design-decisions"}},u={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Performance",id:"performance",level:2},{value:"How well does Redux \u201cscale\u201d in terms of performance and architecture?",id:"how-well-does-redux-scale-in-terms-of-performance-and-architecture",level:3},{value:"Further information",id:"further-information",level:4},{value:"Won&#39;t calling \u201call my reducers\u201d for each action be slow?",id:"wont-calling-all-my-reducers-for-each-action-be-slow",level:3},{value:"Further information",id:"further-information-1",level:4},{value:"Do I have to deep-clone my state in a reducer? Isn&#39;t copying my state going to be slow?",id:"do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow",level:3},{value:"Further information",id:"further-information-2",level:4},{value:"How can I reduce the number of store update events?",id:"how-can-i-reduce-the-number-of-store-update-events",level:3},{value:"Further information",id:"further-information-3",level:4},{value:"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?",id:"will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory",level:3},{value:"Further information",id:"further-information-4",level:4},{value:"Will caching remote data cause memory problems?",id:"will-caching-remote-data-cause-memory-problems",level:3},{value:"Further information",id:"further-information-5",level:4}],d={toc:p},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-faq-performance"},"Redux FAQ: Performance"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#redux-faq-performance"},"Redux FAQ: Performance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#performance"},"Performance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-well-does-redux-scale-in-terms-of-performance-and-architecture"},"How well does Redux \u201cscale\u201d in terms of performance and architecture?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#wont-calling-all-my-reducers-for-each-action-be-slow"},"Won't calling \u201call my reducers\u201d for each action be slow?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"},"Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-2"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-can-i-reduce-the-number-of-store-update-events"},"How can I reduce the number of store update events?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-3"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"},"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-4"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#will-caching-remote-data-cause-memory-problems"},"Will caching remote data cause memory problems?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-5"},"Further information"))))))))),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("h3",{id:"how-well-does-redux-scale-in-terms-of-performance-and-architecture"},"How well does Redux \u201cscale\u201d in terms of performance and architecture?"),(0,o.kt)("p",null,"While there's no single definitive answer to this, most of the time this should not be a concern in either case."),(0,o.kt)("p",null,"The work done by Redux generally falls into a few areas: processing actions in middleware and reducers (including object duplication for immutable updates), notifying subscribers after actions are dispatched, and updating UI components based on the state changes. While it's certainly ",(0,o.kt)("em",{parentName:"p"},"possible")," for each of these to become a performance concern in sufficiently complex situations, there's nothing inherently slow or inefficient about how Redux is implemented. In fact, React Redux in particular is heavily optimized to cut down on unnecessary re-renders, and React-Redux v5 shows noticeable improvements over earlier versions."),(0,o.kt)("p",null,"Redux may not be as efficient out of the box when compared to other libraries. For maximum rendering performance in a React application, state should be stored in a normalized shape, many individual components should be connected to the store instead of just a few, and connected list components should pass item IDs to their connected child list items (allowing the list items to look up their own data by ID). This minimizes the overall amount of rendering to be done. Use of memoized selector functions is also an important performance consideration."),(0,o.kt)("p",null,"As for architecture, anecdotal evidence is that Redux works well for varying project and team sizes. Redux is currently used by hundreds of companies and thousands of developers, with several hundred thousand monthly installations from NPM. One developer reported:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"for scale, we have ~500 action types, ~400 reducer cases, ~150 components, 5 middlewares, ~200 actions, ~2300 tests")),(0,o.kt)("h4",{id:"further-information"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/structuring-reducers/normalizing-state-shape"},"Using Redux: Structuring Reducers - Normalizing State Shape"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/"},"How to Scale React Applications")," (accompanying talk: ",(0,o.kt)("a",{parentName:"li",href:"https://vimeo.com/168648012"},"Scaling React Applications"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://somebody32.github.io/high-performance-redux/"},"High-Performance Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.rangle.io/react-and-redux-performance-with-reselect/"},"Improving React and Redux Perf with Reselect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/"},"Encapsulating the Redux State Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance"},"React/Redux Links: Performance - Redux"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/310"},"#310: Who uses Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1751"},"#1751: Performance issues with large collections")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/269"},"React Redux #269: Connect could be used with a custom subscribe method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/407"},"React Redux #407: Rewrite connect to offer an advanced API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/pull/416"},"React Redux #416: Rewrite connect for better performance and extensibility")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mweststrate/redux-todomvc/pull/1"},"Redux vs MobX TodoMVC Benchmark: #1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/"},"Reddit: What's the best place to keep the initial state?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/48k852/help_designing_redux_state_for_a_single_page/"},"Reddit: Help designing Redux state for a single page app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/41wdqn/redux_performance_issues_with_a_large_state_object/"},"Reddit: Redux performance issues with a large state object?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/javascript/comments/49box8/reactredux_for_ultra_large_scale_apps/"},"Reddit: React/Redux for Ultra Large Scale apps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/NickPresta/status/684058236828266496"},"Twitter: Redux scaling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/720219615041859584"},"Twitter: Redux vs MobX benchmark graph - Redux state shape matters")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/37264415/how-to-optimize-small-updates-to-props-of-nested-component-in-react-redux"},"Stack Overflow: How to optimize small updates to props of nested components?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/markerikson/53735e4eb151bc228d6685eab00f5f85"},"Chat log: React/Redux perf - updating a 10K-item Todo list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/markerikson/6056565dd65d1232784bf42b65f8b2ad"},"Chat log: React/Redux perf - single connection vs many connections"))),(0,o.kt)("h3",{id:"wont-calling-all-my-reducers-for-each-action-be-slow"},"Won't calling \u201call my reducers\u201d for each action be slow?"),(0,o.kt)("p",null,"It's important to note that a Redux store really only has a single reducer function. The store passes the current state and dispatched action to that one reducer function, and lets the reducer handle things appropriately."),(0,o.kt)("p",null,"Obviously, trying to handle every possible action in a single function does not scale well, simply in terms of function size and readability, so it makes sense to split the actual work into separate functions that can be called by the top-level reducer. In particular, the common suggested pattern is to have a separate sub-reducer function that is responsible for managing updates to a particular slice of state at a specific key. The ",(0,o.kt)("inlineCode",{parentName:"p"},"combineReducers()")," that comes with Redux is one of the many possible ways to achieve this. It's also highly suggested to keep your store state as flat and as normalized as possible. Ultimately, though, you are in charge of organizing your reducer logic any way you want."),(0,o.kt)("p",null,"However, even if you happen to have many different reducer functions composed together, and even with deeply nested state, reducer speed is unlikely to be a problem. JavaScript engines are capable of running a very large number of function calls per second, and most of your reducers are probably just using a ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement and returning the existing state by default in response to most actions."),(0,o.kt)("p",null,"If you actually are concerned about reducer performance, you can use a utility such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omnidan/redux-ignore"},"redux-ignore")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/chrisdavies/reduxr-scoped-reducer"},"reduxr-scoped-reducer")," to ensure that only certain reducers listen to specific actions. You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/michaelcontento/redux-log-slow-reducers"},"redux-log-slow-reducers")," to do some performance benchmarking."),(0,o.kt)("h4",{id:"further-information-1"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/912"},"#912: Proposal: action filter utility")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1303"},"#1303: Redux Performance with Large Store and frequent updates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer/35674297"},"Stack Overflow: State in Redux app has the name of the reducer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34494866/how-does-redux-deals-with-deeply-nested-models/34495397"},"Stack Overflow: How does Redux deal with deeply nested models?"))),(0,o.kt)("h3",{id:"do-i-have-to-deep-clone-my-state-in-a-reducer-isnt-copying-my-state-going-to-be-slow"},"Do I have to deep-clone my state in a reducer? Isn't copying my state going to be slow?"),(0,o.kt)("p",null,"Immutably updating state generally means making shallow copies, not deep copies. Shallow copies are much faster than deep copies, because fewer objects and fields have to be copied, and it effectively comes down to moving some pointers around."),(0,o.kt)("p",null,"In addition, deep cloning state creates new references for every field. Since the React-Redux ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," function relies on reference comparisons to determine if data has changed, this means that UI components will be forced to re-render unnecessarily even though the other data hasn't meaningfully changed."),(0,o.kt)("p",null,"However, you ",(0,o.kt)("em",{parentName:"p"},"do")," need to create a copied and updated object for each level of nesting that is affected. Although that shouldn't be particularly expensive, it's another good reason why you should keep your state normalized and shallow if possible."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common Redux misconception: you need to deeply clone the state. Reality: if something inside doesn't change, keep its reference the same!")),(0,o.kt)("h4",{id:"further-information-2"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/structuring-reducers/prerequisite-concepts"},"Using Redux: Structuring Reducers - Prerequisite Concepts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/structuring-reducers/immutable-update-patterns"},"Using Redux: Structuring Reducers - Immutable Update Patterns"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/454"},"#454: Handling big states in reducer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/758"},"#758: Why can't state be mutated?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/994"},"#994: How to cut the boilerplate when updating nested entities?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/688087202312491008"},"Twitter: common misconception - deep cloning"))),(0,o.kt)("h3",{id:"how-can-i-reduce-the-number-of-store-update-events"},"How can I reduce the number of store update events?"),(0,o.kt)("p",null,"Redux notifies subscribers after each successfully dispatched action (i.e. an action reached the store and was handled by reducers). In some cases, it may be useful to cut down on the number of times subscribers are called, particularly if an action creator dispatches multiple distinct actions in a row."),(0,o.kt)("p",null,"There are several addons that add batching capabilities in various ways, like: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tshelburne/redux-batched-actions"},"redux-batched-actions")," (a higher-order reducer that lets you dispatch several actions as if it was one and \u201cunpack\u201d them in the reducer), ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tappleby/redux-batched-subscribe"},"redux-batched-subscribe")," (a store enhancer that lets you debounce subscriber calls for multiple dispatches), or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/manaflair/redux-batch"},"redux-batch")," (a store enhancer that handles dispatching an array of actions with a single subscriber notification)."),(0,o.kt)("p",null,"For React-Redux specifically, starting in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/releases/tag/v7.0.1"},"React-Redux v7")," a new ",(0,o.kt)("inlineCode",{parentName:"p"},"batch")," public API is available to help minimize the number of React re-renders when dispatching actions outside of React event handlers. It wraps React's ",(0,o.kt)("inlineCode",{parentName:"p"},"unstable_batchedUpdate()")," API, allows any React updates in an event loop tick to be batched together into a single render pass. React already uses this internally for its own event handler callbacks. This API is actually part of the renderer packages like ReactDOM and React Native, not the React core itself."),(0,o.kt)("p",null,"Since React-Redux needs to work in both ReactDOM and React Native environments, we've taken care of importing this API from the correct renderer at build time for our own use. We also now re-export this function publicly ourselves, renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"batch()"),". You can use it to ensure that multiple actions dispatched outside of React only result in a single render update, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { batch } from 'react-redux'\n\nfunction myThunk() {\n  return (dispatch, getState) => {\n    // should only result in one combined re-render, not two\n    batch(() => {\n      dispatch(increment())\n      dispatch(increment())\n    })\n  }\n}\n")),(0,o.kt)("h4",{id:"further-information-3"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/125"},"#125: Strategy for avoiding cascading renders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/542"},"#542: Idea: batching actions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/911"},"#911: Batching actions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/pull/1813"},"#1813: Use a loop to support dispatching arrays")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/263"},"React Redux #263: Huge performance issue when dispatching hundreds of actions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/1177"},"React-Redux #1177: Roadmap: v6, Context, Subscriptions, and Hooks"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Libraries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/store.md#store-change-subscriptions"},"Redux Addons Catalog: Store - Change Subscriptions"))),(0,o.kt)("h3",{id:"will-having-one-state-tree-cause-memory-problems-will-dispatching-many-actions-take-up-memory"},"Will having \u201cone state tree\u201d cause memory problems? Will dispatching many actions take up memory?"),(0,o.kt)("p",null,"First, in terms of raw memory usage, Redux is no different than any other JavaScript library. The only difference is that all the various object references are nested together into one tree, instead of maybe saved in various independent model instances such as in Backbone. Second, a typical Redux app would probably have somewhat ",(0,o.kt)("em",{parentName:"p"},"less")," memory usage than an equivalent Backbone app because Redux encourages use of plain JavaScript objects and arrays rather than creating instances of Models and Collections. Finally, Redux only holds onto a single state tree reference at a time. Objects that are no longer referenced in that tree will be garbage collected, as usual."),(0,o.kt)("p",null,"Redux does not store a history of actions itself. However, the Redux DevTools do store actions so they can be replayed, but those are generally only enabled during development, and not used in production."),(0,o.kt)("h4",{id:"further-information-4"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/tutorials/fundamentals/part-6-async-logic"},"Redux Fundamentals: Async Logic and Data Flow"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35627553/is-there-any-way-to-commit-the-state-in-redux-to-free-memory/35634004"},'Stack Overflow: Is there any way to "commit" the state in Redux to free memory?')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/39943762/can-a-redux-store-lead-to-a-memory-leak/40549594#40549594"},"Stack Overflow: Can a Redux store lead to a memory leak?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/42489557/redux-and-all-the-application-state/42491766#42491766"},"Stack Overflow: Redux and ALL the application state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/44956071/memory-usage-concern-with-controlled-components?noredirect=1&lq=1"},"Stack Overflow: Memory Usage Concern with Controlled Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/reactjs/comments/47m9h5/whats_the_best_place_to_keep_the_initial_state/"},"Reddit: What's the best place to keep initial state?"))),(0,o.kt)("h3",{id:"will-caching-remote-data-cause-memory-problems"},"Will caching remote data cause memory problems?"),(0,o.kt)("p",null,"The amount of memory available to JavaScript applications running in a browser is finite. Caching data will cause performance problems when the size of the cache approaches the amount of available memory. This tends to be a problem when the cached data is exceptionally large or the session is exceptionally long-running. And while it is good to be aware of the potential for these problems, this awareness should not discourage you from efficiently caching reasonable amounts of data."),(0,o.kt)("p",null,"Here are a few approaches to caching remote data efficiently:"),(0,o.kt)("p",null,"First, only cache as much data as the user needs. If your application displays a paginated list of records, you don't necessarily need to cache the entire collection. Instead, cache what is visible to the user and add to that cache when the user has (or will soon have) an immediate need for more data."),(0,o.kt)("p",null,"Second, cache an abbreviated form of a record when possible. Sometimes a record includes data that is not relevant to the user. If the application does not depend on this data, it can be omitted from the cache."),(0,o.kt)("p",null,"Third, only cache a single copy of a record. This is especially important when records contain copies of other records. Cache a unique copy for each record and replace each nested copy with a reference. This is called normalization. Normalization is the preferred approach to storing relational data for ",(0,o.kt)("a",{parentName:"p",href:"/redux/usage/structuring-reducers/normalizing-state-shape#designing-a-normalized-state"},"several reasons"),", including efficient memory consumption."),(0,o.kt)("h4",{id:"further-information-5"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/33940015/how-to-choose-the-redux-state-shape-for-an-app-with-list-detail-views-and-pagina"},"Stack Overflow: How to choose the Redux state shape for an app with list/detail views and pagination?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/acemarke/status/804071531844423683"},'Twitter: ...concerns over having "too much data in the state tree"...')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@dcousineau/advanced-redux-entity-normalization-f5f1fe2aefc5"},"Advanced Redux entity normalization"))))}h.isMDXComponent=!0}}]);