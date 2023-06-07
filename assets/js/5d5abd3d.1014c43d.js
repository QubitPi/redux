/*! For license information please see 5d5abd3d.1014c43d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[532],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2783:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(640),s=["components"],l={id:"getting-started",title:"Getting Started with Redux",description:"Introduction > Getting Started: Resources to get started learning and using Redux"},u=void 0,d={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started with Redux",description:"Introduction > Getting Started: Resources to get started learning and using Redux",source:"@site/../docs/introduction/GettingStarted.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/redux/introduction/getting-started",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/introduction/GettingStarted.md",tags:[],version:"current",lastUpdatedAt:1686123852,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{id:"getting-started",title:"Getting Started with Redux",description:"Introduction > Getting Started: Resources to get started learning and using Redux"},sidebar:"docs",next:{title:"Installation",permalink:"/redux/introduction/installation"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Redux Toolkit",id:"redux-toolkit",level:3},{value:"Create a React Redux App",id:"create-a-react-redux-app",level:3},{value:"Redux Core",id:"redux-core",level:3},{value:"Basic Example",id:"basic-example",level:2},{value:"Redux Toolkit Example",id:"redux-toolkit-example",level:3},{value:"Learn Redux",id:"learn-redux",level:2},{value:"Redux Essentials Tutorial",id:"redux-essentials-tutorial",level:3},{value:"Redux Fundamentals Tutorial",id:"redux-fundamentals-tutorial",level:3},{value:"Learn Modern Redux Livestream",id:"learn-modern-redux-livestream",level:3},{value:"Additional Tutorials",id:"additional-tutorials",level:3},{value:"Other Resources",id:"other-resources",level:3},{value:"Help and Discussion",id:"help-and-discussion",level:2},{value:"Should You Use Redux?",id:"should-you-use-redux",level:2}],m={toc:p},h="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Redux is a predictable state container for JavaScript apps."),(0,o.kt)("p",null,"It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"live code editing combined with a time traveling debugger"),"."),(0,o.kt)("p",null,"You can use Redux together with ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React"),", or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"redux-toolkit"},"Redux Toolkit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},(0,o.kt)("strong",{parentName:"a"},"Redux Toolkit"))," is our official standard approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."),(0,o.kt)("p",null,"RTK includes utilities that help simplify many common use cases, including ",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"store setup"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createreducer"},"creating reducers and writing immutable update logic"),",\nand even ",(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createslice"},'creating entire "slices" of state at once'),"."),(0,o.kt)("p",null,"Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to\nsimplify an existing application, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org/"},"Redux Toolkit"))," can help you\nmake your Redux code better."),(0,o.kt)("p",null,"Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),(0,o.kt)("h3",{id:"create-a-react-redux-app"},"Create a React Redux App"),(0,o.kt)("p",null,"The recommended way to start new apps with React and Redux is by using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-templates"},"our official Redux+TS template for Vite"),", or by creating a new Next.js project using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vercel/next.js/tree/canary/examples/with-redux"},"Next's ",(0,o.kt)("inlineCode",{parentName:"a"},"with-redux")," template"),"."),(0,o.kt)("p",null,"Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Vite with our Redux+TS template\n# (using the `degit` tool to clone and extract the template)\nnpx degit reduxjs/redux-templates/packages/vite-template-redux my-app\n\n# Next.js using the `with-redux` template\nnpx create-next-app --example with-redux my-app\n")),(0,o.kt)("p",null,"We do not currently have official React Native templates, but recommend these templates for standard React Native and for Expo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rahsheen/react-native-template-redux-typescript"},"https://github.com/rahsheen/react-native-template-redux-typescript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/rahsheen/expo-template-redux-typescript"},"https://github.com/rahsheen/expo-template-redux-typescript"))),(0,o.kt)("h3",{id:"redux-core"},"Redux Core"),(0,o.kt)("p",null,"The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install redux\n\n# Yarn\nyarn add redux\n")),(0,o.kt)("p",null,"It is also available as a precompiled UMD package that defines a ",(0,o.kt)("inlineCode",{parentName:"p"},"window.Redux")," global variable. The UMD package can be used as a ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/redux/dist/redux.js"},(0,o.kt)("inlineCode",{parentName:"a"},"<script>")," tag")," directly."),(0,o.kt)("p",null,"For more details, see the ",(0,o.kt)("a",{parentName:"p",href:"/redux/introduction/installation"},"Installation")," page."),(0,o.kt)("h2",{id:"basic-example"},"Basic Example"),(0,o.kt)("p",null,"The whole global state of your app is stored in an object tree inside a single ",(0,o.kt)("em",{parentName:"p"},"store"),".\nThe only way to change the state tree is to create an ",(0,o.kt)("em",{parentName:"p"},"action"),", an object describing what happened, and ",(0,o.kt)("em",{parentName:"p"},"dispatch")," it to the store.\nTo specify how state gets updated in response to an action, you write pure ",(0,o.kt)("em",{parentName:"p"},"reducer")," functions that calculate a new state based on the old state and the action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux'\n\n/**\n * This is a reducer - a function that takes a current state value and an\n * action object describing \"what happened\", and returns a new state value.\n * A reducer's function signature is: (state, action) => newState\n *\n * The Redux state should contain only plain JS objects, arrays, and primitives.\n * The root state value is usually an object. It's important that you should\n * not mutate the state object, but return a new object if the state changes.\n *\n * You can use any conditional logic you want in a reducer. In this example,\n * we use a switch statement, but it's not required.\n */\nfunction counterReducer(state = { value: 0 }, action) {\n  switch (action.type) {\n    case 'counter/incremented':\n      return { value: state.value + 1 }\n    case 'counter/decremented':\n      return { value: state.value - 1 }\n    default:\n      return state\n  }\n}\n\n// Create a Redux store holding the state of your app.\n// Its API is { subscribe, dispatch, getState }.\nlet store = createStore(counterReducer)\n\n// You can use subscribe() to update the UI in response to state changes.\n// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.\n// There may be additional use cases where it's helpful to subscribe as well.\n\nstore.subscribe(() => console.log(store.getState()))\n\n// The only way to mutate the internal state is to dispatch an action.\n// The actions can be serialized, logged or stored and later replayed.\nstore.dispatch({ type: 'counter/incremented' })\n// {value: 1}\nstore.dispatch({ type: 'counter/incremented' })\n// {value: 2}\nstore.dispatch({ type: 'counter/decremented' })\n// {value: 1}\n")),(0,o.kt)("p",null,"Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called ",(0,o.kt)("em",{parentName:"p"},"actions"),". Then you write a special function called a ",(0,o.kt)("em",{parentName:"p"},"reducer")," to decide how every action transforms the entire application's state."),(0,o.kt)("p",null,"In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components."),(0,o.kt)("p",null,"This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action."),(0,o.kt)("h3",{id:"redux-toolkit-example"},"Redux Toolkit Example"),(0,o.kt)("p",null,"Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { createSlice, configureStore } from '@reduxjs/toolkit'\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0\n  },\n  reducers: {\n    incremented: state => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decremented: state => {\n      state.value -= 1\n    }\n  }\n})\n\nexport const { incremented, decremented } = counterSlice.actions\n\nconst store = configureStore({\n  reducer: counterSlice.reducer\n})\n\n// Can still subscribe to the store\nstore.subscribe(() => console.log(store.getState()))\n\n// Still pass action objects to `dispatch`, but they're created for us\nstore.dispatch(incremented())\n// {value: 1}\nstore.dispatch(incremented())\n// {value: 2}\nstore.dispatch(decremented())\n// {value: 1}\n")),(0,o.kt)("p",null,"Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow."),(0,o.kt)("h2",{id:"learn-redux"},"Learn Redux"),(0,o.kt)("p",null,"We have a variety of resources available to help you learn Redux."),(0,o.kt)("h3",{id:"redux-essentials-tutorial"},"Redux Essentials Tutorial"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/essentials/part-1-overview-concepts"},(0,o.kt)("strong",{parentName:"a"},"Redux Essentials tutorial")),' is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.'),(0,o.kt)("h3",{id:"redux-fundamentals-tutorial"},"Redux Fundamentals Tutorial"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/fundamentals/part-1-overview"},(0,o.kt)("strong",{parentName:"a"},"Redux Fundamentals tutorial")),' is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.'),(0,o.kt)("h3",{id:"learn-modern-redux-livestream"},"Learn Modern Redux Livestream"),(0,o.kt)("p",null,'Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with TypeScript, as well as the new RTK Query data fetching APIs.'),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.learnwithjason.dev/let-s-learn-modern-redux"},'the "Learn Modern Redux" show notes page')," for a transcript and links to the example app source."),(0,o.kt)(i.Z,{id:"9zySeP5vH9c",title:"Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query",mdxType:"LiteYouTubeEmbed"}),(0,o.kt)("h3",{id:"additional-tutorials"},"Additional Tutorials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/redux/introduction/examples"},"Examples page")),"."),(0,o.kt)("li",{parentName:"ul"},"Redux creator Dan Abramov's ",(0,o.kt)("strong",{parentName:"li"},"free ",(0,o.kt)("a",{parentName:"strong",href:"https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867"},'"Getting Started with Redux" video series'))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://egghead.io/courses/building-react-applications-with-idiomatic-redux"},"Building React Applications with Idiomatic Redux"))," video courses on Egghead.io"),(0,o.kt)("li",{parentName:"ul"},"Redux maintainer Mark Erikson's ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2018/03/presentation-reactathon-redux-fundamentals/"},'"Redux Fundamentals" conference talk'))," and ",(0,o.kt)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/"},(0,o.kt)("strong",{parentName:"a"},'"Redux Fundamentals" workshop slides'))),(0,o.kt)("li",{parentName:"ul"},"Dave Ceddia's post ",(0,o.kt)("a",{parentName:"li",href:"https://daveceddia.com/redux-tutorial/"},(0,o.kt)("strong",{parentName:"a"},"A Complete React Redux Tutorial for Beginners")))),(0,o.kt)("h3",{id:"other-resources"},"Other Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/redux/faq"},"Redux FAQ"))," answers many common questions about how to use Redux, and the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/redux/usage/"},'"Using Redux" docs section'))," has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate."),(0,o.kt)("li",{parentName:"ul"},"Redux maintainer Mark Erikson's ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/series/practical-redux/"},'"Practical Redux" tutorial series'))," demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.educative.io/collection/5687753853370368/5707702298738688"},"an interactive course on Educative.io")),")."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/markerikson/react-redux-links"},"React/Redux links list"))," has categorized articles on working with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-reducers-selectors.md"},"reducers and selectors"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-side-effects.md"},"managing side effects"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/redux-architecture.md"},"Redux architecture and best practices"),", and more."),(0,o.kt)("li",{parentName:"ul"},"Our community has created thousands of Redux-related libraries, addons, and tools. The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/redux/introduction/ecosystem"},'"Ecosystem" docs page'))," lists our recommendations, and there's a complete listing available in the ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/markerikson/redux-ecosystem-links"},"Redux addons catalog")),".")),(0,o.kt)("h2",{id:"help-and-discussion"},"Help and Discussion"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.gg/0ZcbPKXt5bZ6au5t"},"#redux channel"))," of the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.reactiflux.com"},"Reactiflux Discord community"))," is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!"),(0,o.kt)("p",null,"You can also ask questions on ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com"},"Stack Overflow")," using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/questions/tagged/redux"},"#redux tag")),"."),(0,o.kt)("p",null,"If you have a bug report or need to leave other feedback, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux"},"please file an issue on the Github repo")),(0,o.kt)("h2",{id:"should-you-use-redux"},"Should You Use Redux?"),(0,o.kt)("p",null,"Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. ",(0,o.kt)("strong",{parentName:"p"},"Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it"),"."),(0,o.kt)("p",null,"Here are some suggestions on when it makes sense to use Redux:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have reasonable amounts of data changing over time"),(0,o.kt)("li",{parentName:"ul"},"You need a single source of truth for your state"),(0,o.kt)("li",{parentName:"ul"},"You find that keeping all your state in a top-level component is no longer sufficient")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"For more thoughts on how Redux is meant to be used, see:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/redux/faq/general#when-should-i-use-redux"},"Redux FAQ: When should I use Redux?")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"},"The Tao of Redux, Part 1 - Implementation and Intent")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-2/"},"The Tao of Redux, Part 2 - Practice and Philosophy")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/redux/faq"},"Redux FAQ")))))))}g.isMDXComponent=!0},640:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)};function o(e){var t=n.useState(!1),a=t[0],o=t[1],i=n.useState(!1),s=i[0],l=i[1],u=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,c=e.title,p=e.poster||"hqdefault",m="&"+e.params||0,h=e.muted?"&mute=1":"",g=e.announce||"Watch",k=e.webp?"webp":"jpg",f=e.webp?"vi_webp":"vi",x=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+f+"/"+d+"/"+p+"."+k:"https://i.ytimg.com/"+f+"/"+u+"/"+p+"."+k),b=e.noCookie;b=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?b+"/embed/videoseries?autoplay=1"+h+"&list="+u+m:b+"/embed/"+u+"?autoplay=1&state=1"+h+m,v=e.activatedClass||"lyt-activated",w=e.adNetwork||!1,N=e.aspectHeight||9,R=e.aspectWidth||16,T=e.iframeClass||"",j=e.playerClass||"lty-playbtn",S=e.wrapperClass||"yt-lite",E=e.onIframeAdded||function(){},I=e.rel?"prefetch":"preload";return n.useEffect((function(){s&&E()}),[s]),n.createElement(n.Fragment,null,n.createElement("link",{rel:I,href:x,as:"image"}),n.createElement(n.Fragment,null,a&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:b}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),w&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){a||o(!0)},onClick:function(){s||l(!0)},className:S+" "+(s?v:""),"data-title":c,style:r({backgroundImage:"url("+x+")"},{"--aspect-ratio":N/R*100+"%"})},n.createElement("button",{type:"button",className:j,"aria-label":g+" "+c}),s&&n.createElement("iframe",{className:T,title:c,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}}}]);