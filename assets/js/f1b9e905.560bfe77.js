"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4724],{4617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(8168),n=(a(6540),a(5680));const i={id:"why-rtk-is-redux-today",title:"Why Redux Toolkit is How To Use Redux Today",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core"},r=void 0,s={unversionedId:"introduction/why-rtk-is-redux-today",id:"introduction/why-rtk-is-redux-today",title:"Why Redux Toolkit is How To Use Redux Today",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core",source:"@site/../docs/introduction/why-rtk-is-redux-today.md",sourceDirName:"introduction",slug:"/introduction/why-rtk-is-redux-today",permalink:"/introduction/why-rtk-is-redux-today",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/introduction/why-rtk-is-redux-today.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"why-rtk-is-redux-today",title:"Why Redux Toolkit is How To Use Redux Today",description:"Introduction > Why RTK is Redux Today: details on how RTK replaces the Redux core"},sidebar:"docs",previous:{title:"Installation",permalink:"/introduction/installation"},next:{title:"Core Concepts",permalink:"/introduction/core-concepts"}},l={},d=[{value:"What is Redux Toolkit?",id:"what-is-redux-toolkit",level:2},{value:"How Redux Toolkit Is Different Than the Redux Core",id:"how-redux-toolkit-is-different-than-the-redux-core",level:2},{value:"What Is &quot;Redux&quot;?",id:"what-is-redux",level:3},{value:"What Does the Redux Core Do?",id:"what-does-the-redux-core-do",level:3},{value:"What Does Redux Toolkit Do?",id:"what-does-redux-toolkit-do",level:3},{value:"Why We Want You To Use Redux Toolkit",id:"why-we-want-you-to-use-redux-toolkit",level:2},{value:"Further Information",id:"further-information",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,o.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"what-is-redux-toolkit"},"What is Redux Toolkit?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},(0,n.yg)("strong",{parentName:"a"},"Redux Toolkit"))," (also known as ",(0,n.yg)("strong",{parentName:"p"},'"RTK"')," for short) is our official recommended approach for writing Redux logic. The ",(0,n.yg)("inlineCode",{parentName:"p"},"@reduxjs/toolkit")," package wraps around the core ",(0,n.yg)("inlineCode",{parentName:"p"},"redux")," package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"If you are writing ",(0,n.yg)("em",{parentName:"strong"},"any")," Redux logic today, you ",(0,n.yg)("em",{parentName:"strong"},"should")," be using Redux Toolkit to write that code!")),(0,n.yg)("p",null,"RTK includes utilities that help simplify many common use cases, including ",(0,n.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"store setup"),",\n",(0,n.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createreducer"},"creating reducers and writing immutable update logic"),",\nand even ",(0,n.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createslice"},'creating entire "slices" of state at once'),"."),(0,n.yg)("p",null,"Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to\nsimplify an existing application, ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://redux-toolkit.js.org/"},"Redux Toolkit"))," can help you\nmake your Redux code better."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Overall, both Redux and Redux Toolkit are popular libraries for managing state in JavaScript applications. While Redux\nhas a large and active community and support for middleware, it can be difficult to learn and requires a lot of\nboilerplate code."),(0,n.yg)("p",{parentName:"admonition"},"Redux Toolkit, on the other hand, provides a simplified, opinionated approach to using Redux, which can make it easier\nfor developers to get started with the library. However, it is a relatively new library and may not have the same level\nof community support and resources as Redux."),(0,n.yg)("p",{parentName:"admonition"},"While Redux Toolkit simplifies the Redux development process, there are still cases where using plain Redux might be\npreferable:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"Advanced Use Cases: If we have complex state management needs, such as middleware, custom enhancers, or manual control\nover store creation, plain Redux gives us more flexibility."),(0,n.yg)("li",{parentName:"ul"},"Existing Redux Codebase: If we're already using Redux in our project and have an established codebase, migrating to\nRedux Toolkit might require more effort and may not be necessary unless we encounter specific pain points.")),(0,n.yg)("p",{parentName:"admonition"},"Ultimately, the decision to use Redux or Redux Toolkit will depend on the specific needs of the application and the\npreferences of the development team. Both libraries have their own strengths and weaknesses, and developers should weigh\nthese carefully when deciding which library to use.")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},'See these pages to learn how to use "modern Redux" with Redux Toolkit:'),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/tutorials/essentials/part-1-overview-concepts"},(0,n.yg)("strong",{parentName:"a"},'The "Redux Essentials" tutorial')),', which teaches "how to use Redux, the right way" with Redux Toolkit for real-world apps,'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/tutorials/fundamentals/part-8-modern-redux"},(0,n.yg)("strong",{parentName:"a"},"Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit")),", which shows how to convert the low-level examples from earlier sections of the tutorial into modern Redux Toolkit equivalents"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/usage/migrating-to-modern-redux"},(0,n.yg)("strong",{parentName:"a"},"Using Redux: Migrating to Modern Redux")),", which covers how to migrate different kinds of legacy Redux logic into modern Redux equivalents"))),(0,n.yg)("h2",{id:"how-redux-toolkit-is-different-than-the-redux-core"},"How Redux Toolkit Is Different Than the Redux Core"),(0,n.yg)("h3",{id:"what-is-redux"},'What Is "Redux"?'),(0,n.yg)("p",null,'The first thing to ask is, "what is Redux?"'),(0,n.yg)("p",null,"Redux is really:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'A single store containing "global" state'),(0,n.yg)("li",{parentName:"ul"},"Dispatching plain object actions to the store when something happens in the app"),(0,n.yg)("li",{parentName:"ul"},"Pure reducer functions looking at those actions and returning immutably updated state")),(0,n.yg)("p",null,"While it's not required, ",(0,n.yg)("a",{parentName:"p",href:"/tutorials/fundamentals/part-7-standard-patterns"},"your Redux code also normally includes"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Action creators that generate those action objects"),(0,n.yg)("li",{parentName:"ul"},"Middleware to enable side effects"),(0,n.yg)("li",{parentName:"ul"},"Thunk functions that contain sync or async logic with side effects"),(0,n.yg)("li",{parentName:"ul"},"Normalized state to enable looking up items by ID"),(0,n.yg)("li",{parentName:"ul"},"Memoized selector functions with the Reselect library for optimizing derived data"),(0,n.yg)("li",{parentName:"ul"},"The Redux DevTools Extension to view your action history and state changes"),(0,n.yg)("li",{parentName:"ul"},"TypeScript types for actions, state, and other functions")),(0,n.yg)("p",null,"Additionally, Redux is normally used with the React-Redux library to let your React components talk to a Redux store."),(0,n.yg)("h3",{id:"what-does-the-redux-core-do"},"What Does the Redux Core Do?"),(0,n.yg)("p",null,"The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createStore")," to actually create a Redux store"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"combineReducers")," to combine multiple slice reducers into a single larger reducer"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"applyMiddleware")," to combine multiple middleware into a store enhancer"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"compose")," to combine multiple store enhancers into a single store enhancer")),(0,n.yg)("p",null,"Other than that, all the other Redux-related logic in your app has to be written entirely by you."),(0,n.yg)("p",null,"The good news is that this means Redux ",(0,n.yg)("em",{parentName:"p"},"can")," be used in many different ways. The bad news is that there are no helpers to make any of your code easier to write."),(0,n.yg)("p",null,"For example, a reducer function is ",(0,n.yg)("em",{parentName:"p"},"just")," a function. Prior to Redux Toolkit, you'd typically write that reducer with a ",(0,n.yg)("inlineCode",{parentName:"p"},"switch")," statement and manual updates. You'd also probably have hand-written action creators and action type constants along with it:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="Legacy hand-written Redux usage"',title:'"Legacy',"hand-written":!0,Redux:!0,'usage"':!0},"const ADD_TODO = 'ADD_TODO'\nconst TODO_TOGGLED = 'TODO_TOGGLED'\n\nexport const addTodo = text => ({\n  type: ADD_TODO,\n  payload: { text, id: nanoid() }\n})\n\nexport const todoToggled = id => ({\n  type: TODO_TOGGLED,\n  payload: id\n})\n\nexport const todosReducer = (state = [], action) => {\n  switch (action.type) {\n    case ADD_TODO:\n      return state.concat({\n        id: action.payload.id,\n        text: action.payload.text,\n        completed: false\n      })\n    case TODO_TOGGLED:\n      return state.map(todo => {\n        if (todo.id !== action.payload) return todo\n\n        return {\n          ...todo,\n          completed: !todo.completed\n        }\n      })\n    default:\n      return state\n  }\n}\n")),(0,n.yg)("p",null,"None of this code specifically depends on any API from the ",(0,n.yg)("inlineCode",{parentName:"p"},"redux")," core library. But, this is a lot of code to write. Immutable updates required a lot of hand-written object spreads and array operations, and it was very easy to make mistakes and accidentally mutate state in the process (always the #1 cause of Redux bugs!). It was also common, though not strictly required, to spread the code for one feature across multiple files like ",(0,n.yg)("inlineCode",{parentName:"p"},"actions/todos.js"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"constants/todos.js"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"reducers/todos.js"),"."),(0,n.yg)("p",null,"Additionally, store setup usually required a series of steps to add commonly used middleware like thunks and enable Redux DevTools Extension support, even though these are standard tools used in almost every Redux app."),(0,n.yg)("h3",{id:"what-does-redux-toolkit-do"},"What Does Redux Toolkit Do?"),(0,n.yg)("p",null,"While these ",(0,n.yg)("em",{parentName:"p"},"were")," the patterns originally shown in the Redux docs, they unfortunately require a lot of very verbose and repetitive code. Most of this boilerplate isn't ",(0,n.yg)("em",{parentName:"p"},"necessary")," to use Redux. On top of that, the boilerplate-y code lead to more opportunities to make mistakes."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},'We specifically created Redux Toolkit to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks'),"."),(0,n.yg)("p",null,"Redux Toolkit starts with two key APIs that simplify the most common things you do in every Redux app:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"configureStore")," sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than ",(0,n.yg)("inlineCode",{parentName:"li"},"createStore"),", because it takes named options parameters."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createSlice")," lets you write reducers that use ",(0,n.yg)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"the Immer library"),' to enable writing immutable updates using "mutating" JS syntax like ',(0,n.yg)("inlineCode",{parentName:"li"},"state.value = 123"),", with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.")),(0,n.yg)("p",null,"That means that the code ",(0,n.yg)("em",{parentName:"p"},"you")," write can be drastically simpler. For example, that same todos reducer could just be:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="features/todos/todosSlice.js"',title:'"features/todos/todosSlice.js"'},"import { createSlice } from '@reduxjs/toolkit'\n\nconst todosSlice = createSlice({\n  name: 'todos',\n  initialState: [],\n  reducers: {\n    todoAdded(state, action) {\n      state.push({\n        id: action.payload.id,\n        text: action.payload.text,\n        completed: false\n      })\n    },\n    todoToggled(state, action) {\n      const todo = state.find(todo => todo.id === action.payload)\n      todo.completed = !todo.completed\n    }\n  }\n})\n\nexport const { todoAdded, todoToggled } = todosSlice.actions\nexport default todosSlice.reducer\n")),(0,n.yg)("p",null,"All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case."),(0,n.yg)("p",null,"With ",(0,n.yg)("inlineCode",{parentName:"p"},"configureStore"),", the store setup can be simplified down to:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\nimport todosReducer from '../features/todos/todosSlice'\nimport filtersReducer from '../features/filters/filtersSlice'\n\nexport const store = configureStore({\n  reducer: {\n    todos: todosReducer,\n    filters: filtersReducer\n  }\n})\n")),(0,n.yg)("p",null,"Note that ",(0,n.yg)("strong",{parentName:"p"},"this one ",(0,n.yg)("inlineCode",{parentName:"strong"},"configureStore")," call automatically does all the usual setup work you'd have done manually"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The slice reducers were automatically passed to ",(0,n.yg)("inlineCode",{parentName:"li"},"combineReducers()")),(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("inlineCode",{parentName:"li"},"redux-thunk")," middleware was automatically added"),(0,n.yg)("li",{parentName:"ul"},"Dev-mode middleware was added to catch accidental mutations"),(0,n.yg)("li",{parentName:"ul"},"The Redux DevTools Extension was automatically set up"),(0,n.yg)("li",{parentName:"ul"},"The middleware and DevTools enhancers were composed together and added to the store")),(0,n.yg)("p",null,"At the same time, ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"configureStore")," provides the options to let users modify any of those default behaviors")," (like turning off thunks and adding sagas, or disabling the DevTools in production),"),(0,n.yg)("p",null,"From there, Redux Toolkit includes other APIs for common Redux tasks:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createAsyncThunk"),': abstracts the standard "dispatch actions before/after an async request" pattern'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createEntityAdapter"),": prebuilt reducers and selectors for CRUD operations on normalized state"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createSelector"),": a re-export of the standard Reselect API for memoized selectors"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"createListenerMiddleware"),": a side effects middleware for running logic in response to dispatched actions")),(0,n.yg)("p",null,'Finally, the RTK package also includes "RTK Query", a full data fetching and caching solution for Redux apps, as a separate optional ',(0,n.yg)("inlineCode",{parentName:"p"},"@reduxjs/toolkit/query")," entry point. It lets you define endpoints (REST, GraphQL, or any async function), and generates a reducer and middleware that fully manage fetching data, updating loading state, and caching results. It also automatically generates React hooks that can be used in components to fetch data, like ",(0,n.yg)("inlineCode",{parentName:"p"},"const { data, isFetching } = useGetPokemonQuery('pikachu')")),(0,n.yg)("p",null,"Each of these APIs is completely optional and designed for specific use cases, and ",(0,n.yg)("strong",{parentName:"p"},"you can pick and choose which APIs you actually use in your app"),". But, all of them are highly recommended to help with those tasks."),(0,n.yg)("p",null,"Note that ",(0,n.yg)("strong",{parentName:"p"},'Redux Toolkit is still "Redux"!')," There's still a single store, with dispatched action objects for updates, and reducers that immutably update state, plus the ability to write thunks for async logic, manage normalized state, type your code with TypeScript, and use the DevTools. ",(0,n.yg)("strong",{parentName:"p"},"There's just way less code ",(0,n.yg)("em",{parentName:"strong"},"you")," have to write for the same results!")),(0,n.yg)("h2",{id:"why-we-want-you-to-use-redux-toolkit"},"Why We Want You To Use Redux Toolkit"),(0,n.yg)("p",null,"As Redux maintainers, our opinion is:"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"We want ",(0,n.yg)("em",{parentName:"strong"},"all")," Redux users to write their Redux code with Redux Toolkit, because it simplifies your code ",(0,n.yg)("em",{parentName:"strong"},"and")," eliminates many common Redux mistakes and bugs!"))),(0,n.yg)("p",null,'The "boilerplate" and complexity of the early Redux patterns was never a ',(0,n.yg)("em",{parentName:"p"},"necessary")," part of Redux. Those patterns only existed because:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'The original "Flux Architecture" used some of those same approaches'),(0,n.yg)("li",{parentName:"ul"},"The early Redux docs showed things like action type constants to enable separating code into different files by type"),(0,n.yg)("li",{parentName:"ul"},"JavaScript is a mutable language by default, and writing immutable updates required manual object spreads and array updates"),(0,n.yg)("li",{parentName:"ul"},"Redux was originally built in just a few weeks and intentionally designed to be just a few API primitives")),(0,n.yg)("p",null,"Additionally, the Redux community has adopted some specific approaches that add additional boilerplate:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Emphasizing use of the ",(0,n.yg)("inlineCode",{parentName:"li"},"redux-saga")," middleware as a common approach for writing side effects"),(0,n.yg)("li",{parentName:"ul"},"Insisting on hand-writing TS types for Redux action objects and creating union types to limit what actions can be dispatched at the type level")),(0,n.yg)("p",null,"Over the years, we've seen how people actually used Redux in practice. We've seen how the community wrote hundreds of add-on libraries for tasks like generating action types and creators, async logic and side effects, and data fetching. We've also seen the problems that have consistently caused pain for our users, like accidentally mutating state, writing dozens of lines of code just to make one simple state update, and having trouble tracing how a codebase fits together. We've helped thousands of users who were trying to learn and use Redux and struggling to understand how all the pieces fit together, and were confused by the number of concepts and amount of extra code they had to write. We ",(0,n.yg)("em",{parentName:"p"},"know")," what problems our users are facing."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"We specifically designed Redux Toolkit to solve those problems!")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to"),(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs"),(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit eliminates the need to write any action creators or action types by hand"),(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit eliminates the need to write manual and error-prone immutable update logic"),(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files"),(0,n.yg)("li",{parentName:"ul"},"Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code"),(0,n.yg)("li",{parentName:"ul"},"RTK Query can eliminate the need to write ",(0,n.yg)("em",{parentName:"li"},"any")," thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state")),(0,n.yg)("p",null,"Because of this:"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"We specifically recommend that our users ",(0,n.yg)("em",{parentName:"strong"},"should")," use Redux Toolkit (the ",(0,n.yg)("inlineCode",{parentName:"strong"},"@reduxjs/toolkit")," package), and should ",(0,n.yg)("em",{parentName:"strong"},"not")," use the legacy ",(0,n.yg)("inlineCode",{parentName:"strong"},"redux")," core package for any new Redux code today!"))),(0,n.yg)("p",null,"Even for existing applications, we recommend at least switching out ",(0,n.yg)("inlineCode",{parentName:"p"},"createStore")," for ",(0,n.yg)("inlineCode",{parentName:"p"},"configureStore")," as the dev-mode middleware will also help you catch accidental mutation and serializability errors in existing code bases. We also want to encourage you to switch the reducers you are using most (and any ones you write in the future) over to ",(0,n.yg)("inlineCode",{parentName:"p"},"createSlice")," - the code will be shorter and easier to understand, and the safety improvements will save you time and effort going forward."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"The ",(0,n.yg)("inlineCode",{parentName:"strong"},"redux")," core package still works, but today we consider it to be obsolete"),". All of its APIs are also re-exported from ",(0,n.yg)("inlineCode",{parentName:"p"},"@reduxjs/toolkit"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"configureStore")," does everything ",(0,n.yg)("inlineCode",{parentName:"p"},"createStore")," does but with better default behavior and configurability."),(0,n.yg)("p",null,"It ",(0,n.yg)("em",{parentName:"p"},"is")," useful to understand the lower-level concepts, so that you have a better understanding of what Redux Toolkit is doing for you. That's why ",(0,n.yg)("a",{parentName:"p",href:"/tutorials/fundamentals/part-1-overview"},'the "Redux Fundamentals" tutorial shows how Redux works, with no abstractions'),". ",(0,n.yg)("em",{parentName:"p"},"But"),", it shows those examples solely as a learning tool, and finishes by showing you how Redux Toolkit simplifies the older hand-written Redux code."),(0,n.yg)("p",null,"If you are using the ",(0,n.yg)("inlineCode",{parentName:"p"},"redux")," core package by itself, your code will continue to work. ",(0,n.yg)("strong",{parentName:"p"},"But, we strongly encourage you to switch over to ",(0,n.yg)("inlineCode",{parentName:"strong"},"@reduxjs/toolkit"),", and update your code to use the Redux Toolkit APIs instead!")),(0,n.yg)("h2",{id:"further-information"},"Further Information"),(0,n.yg)("p",null,"See these docs pages and blog posts for more details"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/tutorials/essentials/part-2-app-structure"},"Redux Essentials: Redux Toolkit App Structure")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/tutorials/fundamentals/part-8-modern-redux"},"Redux Fundamentals: Modern Redux with Redux Toolkit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/style-guide/"},"Redux Style Guide: Best Practices and Recommendations")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2022/06/presentations-modern-redux-rtk/"},"Presentation: Modern Redux with Redux Toolkit")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://blog.isquaredsoftware.com/2019/10/redux-toolkit-1.0/"},"Mark Erikson: Redux Toolkit 1.0 Announcement and development history"))))}c.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var o=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),y=n,m=p["".concat(l,".").concat(y)]||p[y]||c[y]||i;return a?o.createElement(m,r(r({ref:t},u),{},{components:a})):o.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"}}]);