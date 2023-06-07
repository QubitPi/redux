"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2565],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5700:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},u="Redux Toolkit Quick Start",s={unversionedId:"tutorials/quick-start",id:"tutorials/quick-start",title:"Quick Start",description:"- How to set up and use Redux Toolkit with React-Redux",source:"@site/../docs/tutorials/quick-start.md",sourceDirName:"tutorials",slug:"/tutorials/quick-start",permalink:"/redux/tutorials/quick-start",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/tutorials/quick-start.md",tags:[],version:"current",lastUpdatedAt:1686123852,formattedLastUpdatedAt:"Jun 7, 2023",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},sidebar:"docs",previous:{title:"Tutorials Index",permalink:"/redux/tutorials/index"},next:{title:"TypeScript Quick Start",permalink:"/redux/tutorials/typescript-quick-start"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",level:3},{value:"Usage Summary",id:"usage-summary",level:2},{value:"Install Redux Toolkit and React-Redux",id:"install-redux-toolkit-and-react-redux",level:3},{value:"Create a Redux Store",id:"create-a-redux-store",level:3},{value:"Provide the Redux Store to React",id:"provide-the-redux-store-to-react",level:3},{value:"Create a Redux State Slice",id:"create-a-redux-state-slice",level:3},{value:"Add Slice Reducers to the Store",id:"add-slice-reducers-to-the-store",level:3},{value:"Use Redux State and Actions in React Components",id:"use-redux-state-and-actions-in-react-components",level:3},{value:"What You&#39;ve Learned",id:"what-youve-learned",level:2},{value:"Full Counter App Example",id:"full-counter-app-example",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],p={toc:d},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-toolkit-quick-start"},"Redux Toolkit Quick Start"),(0,o.kt)("admonition",{title:"What You'll Learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"How to set up and use Redux Toolkit with React-Redux"))),(0,o.kt)("admonition",{title:"Prerequisites",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Familiarity with ",(0,o.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 syntax and features")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of React terminology: ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"State"),", ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Function Components, Props"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")),(0,o.kt)("li",{parentName:"ul"},"Understanding of ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux terms and concepts")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the Redux Toolkit Quick Start tutorial! ",(0,o.kt)("strong",{parentName:"p"},"This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly"),"."),(0,o.kt)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),(0,o.kt)("p",null,"This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/index"},'see the tutorials linked in the "Tutorials Index" page'),"."),(0,o.kt)("p",null,"For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"a typical Create-React-App folder structure")," where all the application code is in a ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," folder, but the patterns can be adapted to whatever project or folder setup you're using."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"Redux+JS template for Create-React-App")," comes with this same project setup already configured."),(0,o.kt)("h2",{id:"usage-summary"},"Usage Summary"),(0,o.kt)("h3",{id:"install-redux-toolkit-and-react-redux"},"Install Redux Toolkit and React-Redux"),(0,o.kt)("p",null,"Add the Redux Toolkit and React-Redux packages to your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @reduxjs/toolkit react-redux\n")),(0,o.kt)("h3",{id:"create-a-redux-store"},"Create a Redux Store"),(0,o.kt)("p",null,"Create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app/store.js"),". Import the ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n\nexport default configureStore({\n  reducer: {}\n})\n")),(0,o.kt)("p",null,"This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing."),(0,o.kt)("h3",{id:"provide-the-redux-store-to-react"},"Provide the Redux Store to React"),(0,o.kt)("p",null,"Once the store is created, we can make it available to our React components by putting a React-Redux ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," around our application in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js"),". Import the Redux store we just created, put a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," around your ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>"),", and pass the store as a prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport './index.css'\nimport App from './App'\n// highlight-start\nimport store from './app/store'\nimport { Provider } from 'react-redux'\n// highlight-end\n\nReactDOM.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,o.kt)("h3",{id:"create-a-redux-state-slice"},"Create a Redux State Slice"),(0,o.kt)("p",null,"Add a new file named ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/counter/counterSlice.js"),". In that file, import the ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," API from Redux Toolkit."),(0,o.kt)("p",null,"Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice."),(0,o.kt)("p",null,"Redux requires that ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability"},"we write all state updates immutably, by making copies of data and updating the copies"),". However, Redux Toolkit's ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"createReducer")," APIs use ",(0,o.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," inside to allow us to ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer"},'write "mutating" update logic that becomes correct immutable updates'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="features/counter/counterSlice.js"',title:'"features/counter/counterSlice.js"'},"import { createSlice } from '@reduxjs/toolkit'\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0\n  },\n  reducers: {\n    increment: state => {\n      // Redux Toolkit allows us to write \"mutating\" logic in reducers. It\n      // doesn't actually mutate the state because it uses the Immer library,\n      // which detects changes to a \"draft state\" and produces a brand new\n      // immutable state based off those changes\n      state.value += 1\n    },\n    decrement: state => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload\n    }\n  }\n})\n\n// Action creators are generated for each case reducer function\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\nexport default counterSlice.reducer\n")),(0,o.kt)("h3",{id:"add-slice-reducers-to-the-store"},"Add Slice Reducers to the Store"),(0,o.kt)("p",null,"Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," parameter, we tell the store to use this slice reducer function to handle all updates to that state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n// highlight-next-line\nimport counterReducer from '../features/counter/counterSlice'\n\nexport default configureStore({\n  reducer: {\n    // highlight-next-line\n    counter: counterReducer\n  }\n})\n")),(0,o.kt)("h3",{id:"use-redux-state-and-actions-in-react-components"},"Use Redux State and Actions in React Components"),(0,o.kt)("p",null,"Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelector"),", and dispatch actions using ",(0,o.kt)("inlineCode",{parentName:"p"},"useDispatch"),". Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/counter/Counter.js")," file with a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Counter>")," component inside, then import that component into ",(0,o.kt)("inlineCode",{parentName:"p"},"App.js")," and render it inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="features/counter/Counter.js"',title:'"features/counter/Counter.js"'},"import React from 'react'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { decrement, increment } from './counterSlice'\nimport styles from './Counter.module.css'\n\nexport function Counter() {\n  const count = useSelector(state => state.counter.value)\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <div>\n        <button\n          aria-label=\"Increment value\"\n          onClick={() => dispatch(increment())}\n        >\n          Increment\n        </button>\n        <span>{count}</span>\n        <button\n          aria-label=\"Decrement value\"\n          onClick={() => dispatch(decrement())}\n        >\n          Decrement\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,'Now, any time you click the "Increment" and "Decrement" buttons:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding Redux action will be dispatched to the store"),(0,o.kt)("li",{parentName:"ul"},"The counter slice reducer will see the actions and update its state"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"<Counter>")," component will see the new state value from the store and re-render itself with the new data")),(0,o.kt)("h2",{id:"what-youve-learned"},"What You've Learned"),(0,o.kt)("p",null,"That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:"),(0,o.kt)("admonition",{title:"Summary",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create a Redux store with ",(0,o.kt)("inlineCode",{parentName:"strong"},"configureStore")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configureStore")," accepts a ",(0,o.kt)("inlineCode",{parentName:"li"},"reducer")," function as a named argument"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"configureStore")," automatically sets up the store with good default settings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Provide the Redux store to the React application components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Put a React-Redux ",(0,o.kt)("inlineCode",{parentName:"li"},"<Provider>")," component around your ",(0,o.kt)("inlineCode",{parentName:"li"},"<App />")),(0,o.kt)("li",{parentName:"ul"},"Pass the Redux store as ",(0,o.kt)("inlineCode",{parentName:"li"},"<Provider store={store}>")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Create a Redux "slice" reducer with ',(0,o.kt)("inlineCode",{parentName:"strong"},"createSlice")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"createSlice")," with a string name, an initial state, and named reducer functions"),(0,o.kt)("li",{parentName:"ul"},'Reducer functions may "mutate" the state using Immer'),(0,o.kt)("li",{parentName:"ul"},"Export the generated slice reducer and action creators"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use the React-Redux ",(0,o.kt)("inlineCode",{parentName:"strong"},"useSelector/useDispatch")," hooks in React components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read data from the store with the ",(0,o.kt)("inlineCode",{parentName:"li"},"useSelector")," hook"),(0,o.kt)("li",{parentName:"ul"},"Get the ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," function with the ",(0,o.kt)("inlineCode",{parentName:"li"},"useDispatch")," hook, and dispatch actions as needed"))))),(0,o.kt)("h3",{id:"full-counter-app-example"},"Full Counter App Example"),(0,o.kt)("p",null,"Here's the complete counter application as a running CodeSandbox:"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?codemirror=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1",title:"redux-essentials-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"We recommend going through ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/essentials/part-1-overview-concepts"},(0,o.kt)("strong",{parentName:"a"},'the full "Redux Essentials" tutorial')),", which covers all of the key pieces included in Redux Toolkit, what problems they solve, and how to use them to build real-world applications."),(0,o.kt)("p",null,"You may also want to read through ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/fundamentals/part-1-overview"},'the "Redux Fundamentals" tutorial'),", which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly."))}h.isMDXComponent=!0}}]);