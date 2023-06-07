"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7255],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(o),m=n,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return o?a.createElement(h,i(i({ref:t},d),{},{components:o})):a.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4302:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],l={id:"overview",title:"Redux Toolkit: Overview",description:"Redux Toolkit is the recommended way to write Redux logic",hide_title:!0},u=void 0,s={unversionedId:"redux-toolkit/overview",id:"redux-toolkit/overview",title:"Redux Toolkit: Overview",description:"Redux Toolkit is the recommended way to write Redux logic",source:"@site/../docs/redux-toolkit/overview.md",sourceDirName:"redux-toolkit",slug:"/redux-toolkit/overview",permalink:"/redux/redux-toolkit/overview",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/redux-toolkit/overview.md",tags:[],version:"current",lastUpdatedAt:1686123852,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{id:"overview",title:"Redux Toolkit: Overview",description:"Redux Toolkit is the recommended way to write Redux logic",hide_title:!0},sidebar:"docs",previous:{title:"compose",permalink:"/redux/api/compose"}},d={},c=[{value:"What is Redux Toolkit?",id:"what-is-redux-toolkit",level:2},{value:"Installation",id:"installation",level:3},{value:"Purpose",id:"purpose",level:2},{value:"Why You Should Use Redux Toolkit",id:"why-you-should-use-redux-toolkit",level:2},{value:"What&#39;s Included",id:"whats-included",level:2},{value:"Documentation",id:"documentation",level:2}],p={toc:c},m="wrapper";function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(m,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-redux-toolkit"},"What is Redux Toolkit?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"Redux Toolkit"))," is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it."),(0,r.kt)("p",null,'It includes several utility functions that simplify the most common Redux use cases, including store setup, defining reducers, immutable update logic, and even creating entire "slices" of state at once without writing any action creators or action types by hand. It also includes the most widely used Redux addons, like Redux Thunk for async logic and Reselect for writing selector functions, so that you can use them right away.'),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store setup, what your state contains, and how you want to build your reducers."),(0,r.kt)("p",null,"This is good in some cases, because it gives you flexibility, but that flexibility isn't always needed. Sometimes we just want the simplest possible way to get started, with some good default behavior out of the box. Or, maybe you're writing a larger application and finding yourself writing some similar code, and you'd like to cut down on how much of that code you have to write by hand."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redux Toolkit")," was originally created to help address three common concerns about Redux:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Configuring a Redux store is too complicated"'),(0,r.kt)("li",{parentName:"ul"},'"I have to add a lot of packages to get Redux to do anything useful"'),(0,r.kt)("li",{parentName:"ul"},'"Redux requires too much boilerplate code"')),(0,r.kt)("p",null,"We can't solve every use case, but in the spirit of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},(0,r.kt)("inlineCode",{parentName:"a"},"create-react-app"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/blog/announcement/frontend/zero-config-graphql-state-management/"},(0,r.kt)("inlineCode",{parentName:"a"},"apollo-boost")),", we can provide an official recommended set of tools that handle the most common use cases and reduce the need to make extra decisions."),(0,r.kt)("h2",{id:"why-you-should-use-redux-toolkit"},"Why You Should Use Redux Toolkit"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redux Toolkit")," makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code. Redux Toolkit is ",(0,r.kt)("strong",{parentName:"p"},"beneficial to all Redux users")," regardless of skill level or experience. It can be added at the start of a new project, or used as part of an incremental migration in an existing project."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"you are not ",(0,r.kt)("em",{parentName:"strong"},"required")," to use Redux Toolkit to use Redux"),'. There are many existing applications that use other Redux wrapper libraries, or write all Redux logic "by hand", and if you still prefer to use a different approach, go ahead!'),(0,r.kt)("p",null,"However, ",(0,r.kt)("a",{parentName:"p",href:"/redux/style-guide/#use-redux-toolkit-for-writing-redux-logic"},(0,r.kt)("strong",{parentName:"a"},"we ",(0,r.kt)("em",{parentName:"strong"},"strongly")," recommend using Redux Toolkit for all Redux apps")),"."),(0,r.kt)("p",null,"Overall, whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, ",(0,r.kt)("strong",{parentName:"p"},"using Redux Toolkit will make your code better and more maintainable"),"."),(0,r.kt)("h2",{id:"whats-included"},"What's Included"),(0,r.kt)("p",null,"Redux Toolkit includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/configureStore"},(0,r.kt)("inlineCode",{parentName:"a"},"configureStore()")),": wraps ",(0,r.kt)("inlineCode",{parentName:"li"},"createStore")," to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes ",(0,r.kt)("inlineCode",{parentName:"li"},"redux-thunk")," by default, and enables use of the Redux DevTools Extension."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createReducer"},(0,r.kt)("inlineCode",{parentName:"a"},"createReducer()")),": that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/immerjs/immer"},(0,r.kt)("inlineCode",{parentName:"a"},"immer")," library")," to let you write simpler immutable updates with normal mutative code, like ",(0,r.kt)("inlineCode",{parentName:"li"},"state.todos[3].completed = true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAction"},(0,r.kt)("inlineCode",{parentName:"a"},"createAction()")),": generates an action creator function for the given action type string. The function itself has ",(0,r.kt)("inlineCode",{parentName:"li"},"toString()")," defined, so that it can be used in place of the type constant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSlice"},(0,r.kt)("inlineCode",{parentName:"a"},"createSlice()")),": accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAsyncThunk"},(0,r.kt)("inlineCode",{parentName:"a"},"createAsyncThunk")),": accepts an action type string and a function that returns a promise, and generates a thunk that dispatches ",(0,r.kt)("inlineCode",{parentName:"li"},"pending/fulfilled/rejected")," action types based on that promise"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createEntityAdapter"},(0,r.kt)("inlineCode",{parentName:"a"},"createEntityAdapter")),": generates a set of reusable reducers and selectors to manage normalized data in the store"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSelector"},(0,r.kt)("inlineCode",{parentName:"a"},"createSelector")," utility")," from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"Reselect")," library, re-exported for ease of use.")),(0,r.kt)("p",null,"Redux Toolkit also has the ",(0,r.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/rtk-query/overview"},(0,r.kt)("strong",{parentName:"a"},"RTK Query data fetching API")),". RTK Query is a powerful data fetching and caching tool built specifically for Redux. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The complete Redux Toolkit documentation is available at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"https://redux-toolkit.js.org")),"."))}h.isMDXComponent=!0}}]);