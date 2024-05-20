"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1722],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"implementing-undo-history",title:"Implementing Undo History"},l="Implementing Undo History",d={unversionedId:"usage/implementing-undo-history",id:"usage/implementing-undo-history",title:"Implementing Undo History",description:'- Completion of the "Redux Fundamentals" tutorial',source:"@site/../docs/usage/ImplementingUndoHistory.md",sourceDirName:"usage",slug:"/usage/implementing-undo-history",permalink:"/usage/implementing-undo-history",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/ImplementingUndoHistory.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"implementing-undo-history",title:"Implementing Undo History"},sidebar:"docs",previous:{title:"Writing Custom Middleware",permalink:"/usage/writing-custom-middleware"},next:{title:"Motivation",permalink:"/understanding/thinking-in-redux/motivation"}},u={},p=[{value:"Understanding Undo History",id:"understanding-undo-history",level:2},{value:"Designing the State Shape",id:"designing-the-state-shape",level:3},{value:"Designing the Algorithm",id:"designing-the-algorithm",level:3},{value:"Handling Undo",id:"handling-undo",level:4},{value:"Handling Redo",id:"handling-redo",level:4},{value:"Handling Other Actions",id:"handling-other-actions",level:4},{value:"First Attempt: Writing a Reducer",id:"first-attempt-writing-a-reducer",level:3},{value:"Meet Reducer Enhancers",id:"meet-reducer-enhancers",level:3},{value:"Second Attempt: Writing a Reducer Enhancer",id:"second-attempt-writing-a-reducer-enhancer",level:3},{value:"Using Redux Undo",id:"using-redux-undo",level:2},{value:"Installation",id:"installation",level:3},{value:"Wrapping the Reducer",id:"wrapping-the-reducer",level:3},{value:"<code>reducers/todos.js</code>",id:"reducerstodosjs",level:4},{value:"<code>reducers/index.js</code>",id:"reducersindexjs",level:4},{value:"Updating the Selectors",id:"updating-the-selectors",level:3},{value:"<code>containers/VisibleTodoList.js</code>",id:"containersvisibletodolistjs",level:4},{value:"Adding the Buttons",id:"adding-the-buttons",level:3},{value:"<code>containers/UndoRedo.js</code>",id:"containersundoredojs",level:4},{value:"<code>containers/UndoRedo.js</code>",id:"containersundoredojs-1",level:4},{value:"<code>components/App.js</code>",id:"componentsappjs",level:4}],c={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implementing-undo-history"},"Implementing Undo History"),(0,o.kt)("admonition",{title:"Prerequisites",type:"important"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Completion of the ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-1-overview"},'"Redux Fundamentals" tutorial')),(0,o.kt)("li",{parentName:"ul"},"Understanding of ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-3-state-actions-reducers#splitting-reducers"},'"reducer composition"')))),(0,o.kt)("p",null,"Building an Undo and Redo functionality into an app has traditionally required conscious effort from the developer. It is not an easy problem with classical MVC frameworks because you need to keep track of every past state by cloning all relevant models. In addition, you need to be mindful of the undo stack because the user-initiated changes should be undoable."),(0,o.kt)("p",null,"This means that implementing Undo and Redo in an MVC application usually forces you to rewrite parts of your application to use a specific data mutation pattern like ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Command_pattern"},"Command"),"."),(0,o.kt)("p",null,"With Redux, however, implementing undo history is a breeze. There are three reasons for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There are no multiple models\u2014just a state subtree that you want to keep track of."),(0,o.kt)("li",{parentName:"ul"},"The state is already immutable, and mutations are already described as discrete actions, which is close to the undo stack mental model."),(0,o.kt)("li",{parentName:"ul"},"The reducer ",(0,o.kt)("inlineCode",{parentName:"li"},"(state, action) => state")," signature makes it natural to implement generic \u201creducer enhancers\u201d or \u201chigher order reducers\u201d. They are functions that take your reducer and enhance it with some additional functionality while preserving its signature. Undo history is exactly such a case.")),(0,o.kt)("p",null,"In the first part of this recipe, we will explain the underlying concepts that make Undo and Redo possible to implement in a generic way."),(0,o.kt)("p",null,"In the second part of this recipe, we will show how to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo"},"Redux Undo")," package that provides this functionality out of the box."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/dan_abramov/status/647038407286390784"},(0,o.kt)("img",{parentName:"a",src:"https://i.imgur.com/lvDFHkH.gif",alt:"demo of todos-with-undo"}))),(0,o.kt)("h2",{id:"understanding-undo-history"},"Understanding Undo History"),(0,o.kt)("h3",{id:"designing-the-state-shape"},"Designing the State Shape"),(0,o.kt)("p",null,"Undo history is also part of your app's state, and there is no reason why we should approach it differently. Regardless of the type of the state changing over time, when you implement Undo and Redo, you want to keep track of the ",(0,o.kt)("em",{parentName:"p"},"history")," of this state at different points in time."),(0,o.kt)("p",null,"For example, the state shape of a counter app might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: 10\n}\n")),(0,o.kt)("p",null,"If we wanted to implement Undo and Redo in such an app, we'd need to store more state so we can answer the following questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Is there anything left to undo or redo?"),(0,o.kt)("li",{parentName:"ul"},"What is the current state?"),(0,o.kt)("li",{parentName:"ul"},"What are the past (and future) states in the undo stack?")),(0,o.kt)("p",null,"It is reasonable to suggest that our state shape should change to answer these questions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\n    present: 10,\n    future: []\n  }\n}\n")),(0,o.kt)("p",null,"Now, if user presses \u201cUndo\u201d, we want it to change to move into the past:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],\n    present: 9,\n    future: [10]\n  }\n}\n")),(0,o.kt)("p",null,"And further yet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7],\n    present: 8,\n    future: [9, 10]\n  }\n}\n")),(0,o.kt)("p",null,"When the user presses \u201cRedo\u201d, we want to move one step back into the future:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8],\n    present: 9,\n    future: [10]\n  }\n}\n")),(0,o.kt)("p",null,"Finally, if the user performs an action (e.g. decrement the counter) while we're in the middle of the undo stack, we're going to discard the existing future:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],\n    present: 8,\n    future: []\n  }\n}\n")),(0,o.kt)("p",null,"The interesting part here is that it does not matter whether we want to keep an undo stack of numbers, strings, arrays, or objects. The structure will always be the same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counter: {\n    past: [0, 1, 2],\n    present: 3,\n    future: [4]\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  todos: {\n    past: [\n      [],\n      [{ text: 'Use Redux' }],\n      [{ text: 'Use Redux', complete: true }]\n    ],\n    present: [\n      { text: 'Use Redux', complete: true },\n      { text: 'Implement Undo' }\n    ],\n    future: [\n      [\n        { text: 'Use Redux', complete: true },\n        { text: 'Implement Undo', complete: true }\n      ]\n    ]\n  }\n}\n")),(0,o.kt)("p",null,"In general, it looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  past: Array<T>,\n  present: T,\n  future: Array<T>\n}\n")),(0,o.kt)("p",null,"It is also up to us whether to keep a single top-level history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  past: [\n    { counterA: 1, counterB: 1 },\n    { counterA: 1, counterB: 0 },\n    { counterA: 0, counterB: 0 }\n  ],\n  present: { counterA: 2, counterB: 1 },\n  future: []\n}\n")),(0,o.kt)("p",null,"Or many granular histories so user can undo and redo actions in them independently:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  counterA: {\n    past: [1, 0],\n    present: 2,\n    future: []\n  },\n  counterB: {\n    past: [0],\n    present: 1,\n    future: []\n  }\n}\n")),(0,o.kt)("p",null,"We will see later how the approach we take lets us choose how granular Undo and Redo need to be."),(0,o.kt)("h3",{id:"designing-the-algorithm"},"Designing the Algorithm"),(0,o.kt)("p",null,"Regardless of the specific data type, the shape of the undo history state is the same:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  past: Array<T>,\n  present: T,\n  future: Array<T>\n}\n")),(0,o.kt)("p",null,"Let's talk through the algorithm to manipulate the state shape described above. We can define two actions to operate on this state: ",(0,o.kt)("inlineCode",{parentName:"p"},"UNDO")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"REDO"),". In our reducer, we will do the following steps to handle these actions:"),(0,o.kt)("h4",{id:"handling-undo"},"Handling Undo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("em",{parentName:"li"},"last")," element from the ",(0,o.kt)("inlineCode",{parentName:"li"},"past"),"."),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," to the element we removed in the previous step."),(0,o.kt)("li",{parentName:"ul"},"Insert the old ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," state at the ",(0,o.kt)("em",{parentName:"li"},"beginning")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"future"),".")),(0,o.kt)("h4",{id:"handling-redo"},"Handling Redo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove the ",(0,o.kt)("em",{parentName:"li"},"first")," element from the ",(0,o.kt)("inlineCode",{parentName:"li"},"future"),"."),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," to the element we removed in the previous step."),(0,o.kt)("li",{parentName:"ul"},"Insert the old ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," state at the ",(0,o.kt)("em",{parentName:"li"},"end")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"past"),".")),(0,o.kt)("h4",{id:"handling-other-actions"},"Handling Other Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," at the end of the ",(0,o.kt)("inlineCode",{parentName:"li"},"past"),"."),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," to the new state after handling the action."),(0,o.kt)("li",{parentName:"ul"},"Clear the ",(0,o.kt)("inlineCode",{parentName:"li"},"future"),".")),(0,o.kt)("h3",{id:"first-attempt-writing-a-reducer"},"First Attempt: Writing a Reducer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = {\n  past: [],\n  present: null, // (?) How do we initialize the present?\n  future: []\n}\n\nfunction undoable(state = initialState, action) {\n  const { past, present, future } = state\n\n  switch (action.type) {\n    case 'UNDO':\n      const previous = past[past.length - 1]\n      const newPast = past.slice(0, past.length - 1)\n      return {\n        past: newPast,\n        present: previous,\n        future: [present, ...future]\n      }\n    case 'REDO':\n      const next = future[0]\n      const newFuture = future.slice(1)\n      return {\n        past: [...past, present],\n        present: next,\n        future: newFuture\n      }\n    default:\n      // (?) How do we handle other actions?\n      return state\n  }\n}\n")),(0,o.kt)("p",null,"This implementation isn't usable because it leaves out three important questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Where do we get the initial ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," state from? We don't seem to know it beforehand."),(0,o.kt)("li",{parentName:"ul"},"Where do we react to the external actions to save the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"past"),"?"),(0,o.kt)("li",{parentName:"ul"},"How do we actually delegate the control over the ",(0,o.kt)("inlineCode",{parentName:"li"},"present")," state to a custom reducer?")),(0,o.kt)("p",null,"It seems that reducer isn't the right abstraction, but we're very close."),(0,o.kt)("h3",{id:"meet-reducer-enhancers"},"Meet Reducer Enhancers"),(0,o.kt)("p",null,"You might be familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Higher-order_function"},"higher order functions"),". If you use React, you might be familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750"},"higher order components"),". Here is a variation on the same pattern, applied to reducers."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"reducer enhancer")," (or a ",(0,o.kt)("em",{parentName:"p"},"higher order reducer"),") is a function that takes a reducer, and returns a new reducer that is able to handle new actions, or to hold more state, delegating control to the inner reducer for the actions it doesn't understand. This isn't a new pattern\u2014technically, ",(0,o.kt)("a",{parentName:"p",href:"/api/combinereducers"},(0,o.kt)("inlineCode",{parentName:"a"},"combineReducers()"))," is also a reducer enhancer because it takes reducers and returns a new reducer."),(0,o.kt)("p",null,"A reducer enhancer that doesn't do anything looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function doNothingWith(reducer) {\n  return function (state, action) {\n    // Just call the passed reducer\n    return reducer(state, action)\n  }\n}\n")),(0,o.kt)("p",null,"A reducer enhancer that combines other reducers might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function combineReducers(reducers) {\n  return function (state = {}, action) {\n    return Object.keys(reducers).reduce((nextState, key) => {\n      // Call every reducer with the part of the state it manages\n      nextState[key] = reducers[key](state[key], action)\n      return nextState\n    }, {})\n  }\n}\n")),(0,o.kt)("h3",{id:"second-attempt-writing-a-reducer-enhancer"},"Second Attempt: Writing a Reducer Enhancer"),(0,o.kt)("p",null,"Now that we have a better understanding of reducer enhancers, we can see that this is exactly what ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," should have been:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function undoable(reducer) {\n  // Call the reducer with empty action to populate the initial state\n  const initialState = {\n    past: [],\n    present: reducer(undefined, {}),\n    future: []\n  }\n\n  // Return a reducer that handles undo and redo\n  return function (state = initialState, action) {\n    const { past, present, future } = state\n\n    switch (action.type) {\n      case 'UNDO':\n        const previous = past[past.length - 1]\n        const newPast = past.slice(0, past.length - 1)\n        return {\n          past: newPast,\n          present: previous,\n          future: [present, ...future]\n        }\n      case 'REDO':\n        const next = future[0]\n        const newFuture = future.slice(1)\n        return {\n          past: [...past, present],\n          present: next,\n          future: newFuture\n        }\n      default:\n        // Delegate handling the action to the passed reducer\n        const newPresent = reducer(present, action)\n        if (present === newPresent) {\n          return state\n        }\n        return {\n          past: [...past, present],\n          present: newPresent,\n          future: []\n        }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"We can now wrap any reducer into ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," reducer enhancer to teach it to react to ",(0,o.kt)("inlineCode",{parentName:"p"},"UNDO")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"REDO")," actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This is a reducer\nfunction todos(state = [], action) {\n  /* ... */\n}\n\n// This is also a reducer!\nconst undoableTodos = undoable(todos)\n\nimport { createStore } from 'redux'\nconst store = createStore(undoableTodos)\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Use Redux'\n})\n\nstore.dispatch({\n  type: 'ADD_TODO',\n  text: 'Implement Undo'\n})\n\nstore.dispatch({\n  type: 'UNDO'\n})\n")),(0,o.kt)("p",null,"There is an important gotcha: you need to remember to append ",(0,o.kt)("inlineCode",{parentName:"p"},".present")," to the current state when you retrieve it. You may also check ",(0,o.kt)("inlineCode",{parentName:"p"},".past.length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".future.length")," to determine whether to enable or to disable the Undo and Redo buttons, respectively."),(0,o.kt)("p",null,"You might have heard that Redux was influenced by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evancz/elm-architecture-tutorial/"},"Elm Architecture"),". It shouldn't come as a surprise that this example is very similar to ",(0,o.kt)("a",{parentName:"p",href:"https://package.elm-lang.org/packages/TheSeamau5/elm-undo-redo/2.0.0"},"elm-undo-redo package"),"."),(0,o.kt)("h2",{id:"using-redux-undo"},"Using Redux Undo"),(0,o.kt)("p",null,"This was all very informative, but can't we just drop a library and use it instead of implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," ourselves? Sure, we can! Meet ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo"},"Redux Undo"),", a library that provides simple Undo and Redo functionality for any part of your Redux tree."),(0,o.kt)("p",null,'In this part of the recipe, you will learn how to make a small "todo list" app logic undoable. You can find the full source of this recipe in the ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo"},(0,o.kt)("inlineCode",{parentName:"a"},"todos-with-undo")," example that comes with Redux"),"."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First of all, you need to run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install redux-undo\n")),(0,o.kt)("p",null,"This installs the package that provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," reducer enhancer."),(0,o.kt)("h3",{id:"wrapping-the-reducer"},"Wrapping the Reducer"),(0,o.kt)("p",null,"You will need to wrap the reducer you wish to enhance with ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," function. For example, if you exported a ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," reducer from a dedicated file, you will want to change it to export the result of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable()")," with the reducer you wrote:"),(0,o.kt)("h4",{id:"reducerstodosjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"reducers/todos.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import undoable from 'redux-undo'\n\n/* ... */\n\nconst todos = (state = [], action) => {\n  /* ... */\n}\n\nconst undoableTodos = undoable(todos)\n\nexport default undoableTodos\n")),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo#configuration"},"many other options")," to configure your undoable reducer, like setting the action type for Undo and Redo actions."),(0,o.kt)("p",null,"Note that your ",(0,o.kt)("inlineCode",{parentName:"p"},"combineReducers()")," call will stay exactly as it was, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," reducer will now refer to the reducer enhanced with Redux Undo:"),(0,o.kt)("h4",{id:"reducersindexjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"reducers/index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { combineReducers } from 'redux'\nimport todos from './todos'\nimport visibilityFilter from './visibilityFilter'\n\nconst todoApp = combineReducers({\n  todos,\n  visibilityFilter\n})\n\nexport default todoApp\n")),(0,o.kt)("p",null,"You may wrap one or more reducers in ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable")," at any level of the reducer composition hierarchy. We choose to wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," instead of the top-level combined reducer so that changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," are not reflected in the undo history."),(0,o.kt)("h3",{id:"updating-the-selectors"},"Updating the Selectors"),(0,o.kt)("p",null,"Now the ",(0,o.kt)("inlineCode",{parentName:"p"},"todos")," part of the state looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  visibilityFilter: 'SHOW_ALL',\n  todos: {\n    past: [\n      [],\n      [{ text: 'Use Redux' }],\n      [{ text: 'Use Redux', complete: true }]\n    ],\n    present: [\n      { text: 'Use Redux', complete: true },\n      { text: 'Implement Undo' }\n    ],\n    future: [\n      [\n        { text: 'Use Redux', complete: true },\n        { text: 'Implement Undo', complete: true }\n      ]\n    ]\n  }\n}\n")),(0,o.kt)("p",null,"This means you need to access your state with ",(0,o.kt)("inlineCode",{parentName:"p"},"state.todos.present")," instead of\njust ",(0,o.kt)("inlineCode",{parentName:"p"},"state.todos"),":"),(0,o.kt)("h4",{id:"containersvisibletodolistjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"containers/VisibleTodoList.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = state => {\n  return {\n    todos: getVisibleTodos(state.todos.present, state.visibilityFilter)\n  }\n}\n")),(0,o.kt)("h3",{id:"adding-the-buttons"},"Adding the Buttons"),(0,o.kt)("p",null,"Now all you need to do is add the buttons for the Undo and Redo actions."),(0,o.kt)("p",null,"First, create a new container component called ",(0,o.kt)("inlineCode",{parentName:"p"},"UndoRedo")," for these buttons. We won't bother to split the presentational part into a separate file because it is very small:"),(0,o.kt)("h4",{id:"containersundoredojs"},(0,o.kt)("inlineCode",{parentName:"h4"},"containers/UndoRedo.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\n\n/* ... */\n\nlet UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (\n  <p>\n    <button onClick={onUndo} disabled={!canUndo}>\n      Undo\n    </button>\n    <button onClick={onRedo} disabled={!canRedo}>\n      Redo\n    </button>\n  </p>\n)\n")),(0,o.kt)("p",null,"You will use ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux")," to generate a container component. To determine whether to enable Undo and Redo buttons, you can check ",(0,o.kt)("inlineCode",{parentName:"p"},"state.todos.past.length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"state.todos.future.length"),". You won't need to write action creators for performing undo and redo because Redux Undo already provides them:"),(0,o.kt)("h4",{id:"containersundoredojs-1"},(0,o.kt)("inlineCode",{parentName:"h4"},"containers/UndoRedo.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* ... */\n\nimport { ActionCreators as UndoActionCreators } from 'redux-undo'\nimport { connect } from 'react-redux'\n\n/* ... */\n\nconst mapStateToProps = state => {\n  return {\n    canUndo: state.todos.past.length > 0,\n    canRedo: state.todos.future.length > 0\n  }\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    onUndo: () => dispatch(UndoActionCreators.undo()),\n    onRedo: () => dispatch(UndoActionCreators.redo())\n  }\n}\n\nUndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)\n\nexport default UndoRedo\n")),(0,o.kt)("p",null,"Now you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"UndoRedo")," component to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," component:"),(0,o.kt)("h4",{id:"componentsappjs"},(0,o.kt)("inlineCode",{parentName:"h4"},"components/App.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport Footer from './Footer'\nimport AddTodo from '../containers/AddTodo'\nimport VisibleTodoList from '../containers/VisibleTodoList'\nimport UndoRedo from '../containers/UndoRedo'\n\nconst App = () => (\n  <div>\n    <AddTodo />\n    <VisibleTodoList />\n    <Footer />\n    <UndoRedo />\n  </div>\n)\n\nexport default App\n")),(0,o.kt)("p",null,"This is it! Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo"},"example folder")," and try it out!"))}h.isMDXComponent=!0}}]);