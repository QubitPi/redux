"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5052],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5778:function(e,t,a){a.d(t,{s:function(){return r}});var n=a(7294),r=function(e){var t=e.children,a=e.title,r=void 0===a?"Detailed Explanation":a;return n.createElement("details",{className:"detailed-explanation"},n.createElement("summary",null,n.createElement("h4",null,r)),t)}},1410:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(5778),s=["components"],l={id:"part-1-overview-concepts",title:"Redux Essentials, Part 1: Redux Overview and Concepts",sidebar_label:"Redux Overview and Concepts",description:"The official Essentials tutorial for Redux: learn how to use Redux, the right way"},u=void 0,d={unversionedId:"tutorials/essentials/part-1-overview-concepts",id:"tutorials/essentials/part-1-overview-concepts",title:"Redux Essentials, Part 1: Redux Overview and Concepts",description:"The official Essentials tutorial for Redux: learn how to use Redux, the right way",source:"@site/../docs/tutorials/essentials/part-1-overview-concepts.md",sourceDirName:"tutorials/essentials",slug:"/tutorials/essentials/part-1-overview-concepts",permalink:"/redux/tutorials/essentials/part-1-overview-concepts",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/tutorials/essentials/part-1-overview-concepts.md",tags:[],version:"current",lastUpdatedAt:1694574625,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"part-1-overview-concepts",title:"Redux Essentials, Part 1: Redux Overview and Concepts",sidebar_label:"Redux Overview and Concepts",description:"The official Essentials tutorial for Redux: learn how to use Redux, the right way"},sidebar:"docs",previous:{title:"TypeScript Quick Start",permalink:"/redux/tutorials/typescript-quick-start"},next:{title:"Redux Toolkit App Structure",permalink:"/redux/tutorials/essentials/part-2-app-structure"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",level:3},{value:"What is Redux?",id:"what-is-redux",level:2},{value:"Why Should I Use Redux?",id:"why-should-i-use-redux",level:3},{value:"When Should I Use Redux?",id:"when-should-i-use-redux",level:3},{value:"Redux Libraries and Tools",id:"redux-libraries-and-tools",level:3},{value:"React-Redux",id:"react-redux",level:4},{value:"Redux Toolkit",id:"redux-toolkit",level:4},{value:"Redux DevTools Extension",id:"redux-devtools-extension",level:4},{value:"Redux Terms and Concepts",id:"redux-terms-and-concepts",level:2},{value:"State Management",id:"state-management",level:3},{value:"Immutability",id:"immutability",level:3},{value:"Terminology",id:"terminology",level:3},{value:"Actions",id:"actions",level:4},{value:"Action Creators",id:"action-creators",level:4},{value:"Reducers",id:"reducers",level:4},{value:"Store",id:"store",level:4},{value:"Dispatch",id:"dispatch",level:4},{value:"Selectors",id:"selectors",level:4},{value:"Redux Application Data Flow",id:"redux-application-data-flow",level:3},{value:"What You&#39;ve Learned",id:"what-youve-learned",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],h={toc:c},m="wrapper";function k(e){var t=e.components,l=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"What You'll Learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"What Redux is and why you might want to use it"),(0,o.kt)("li",{parentName:"ul"},"Key Redux terms and concepts"),(0,o.kt)("li",{parentName:"ul"},"How data flows through a Redux app"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the Redux Essentials tutorial! ",(0,o.kt)("strong",{parentName:"p"},"This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices"),". By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here."),(0,o.kt)("p",null,"In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/essentials/part-2-app-structure"},"Part 2: Redux App Structure")," we'll examine a basic React + Redux app to see how the pieces fit together."),(0,o.kt)("p",null,"Starting in ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/essentials/part-3-data-flow"},"Part 3: Basic Redux Data Flow"),", we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux."),(0,o.kt)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),(0,o.kt)("p",null,"This page will focus on showing you ",(0,o.kt)("em",{parentName:"p"},"how")," to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly."),(0,o.kt)("p",null,"We've tried to keep these explanations beginner-friendly, but we do need to make some assumptions about what you know already:"),(0,o.kt)("admonition",{title:"Prerequisites",type:"important"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Familiarity with ",(0,o.kt)("a",{parentName:"li",href:"https://internetingishard.netlify.app/html-and-css/index.html"},"HTML & CSS"),"."),(0,o.kt)("li",{parentName:"ul"},"Familiarity with ",(0,o.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 syntax and features")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of React terminology: ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX"),", ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/learn/state-a-components-memory"},"State"),", ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/learn/your-first-component"},"Function Components"),", ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/learn/passing-props-to-a-component"},"Props"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://react.dev/reference/react"},"Hooks")),(0,o.kt)("li",{parentName:"ul"},"Knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/promise-basics"},"asynchronous JavaScript")," and ",(0,o.kt)("a",{parentName:"li",href:"https://javascript.info/fetch"},"making AJAX requests")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux"),". We'll be here when you're ready!"),(0,o.kt)("p",null,"You should make sure that you have the React and Redux DevTools extensions installed in your browser:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React DevTools Extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"},"React DevTools Extension for Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"},"React DevTools Extension for Firefox")))),(0,o.kt)("li",{parentName:"ul"},"Redux DevTools Extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"Redux DevTools Extension for Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"Redux DevTools Extension for Firefox"))))),(0,o.kt)("h2",{id:"what-is-redux"},"What is Redux?"),(0,o.kt)("p",null,'It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Redux is a pattern and library for managing and updating application state, using events called "actions".')," It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."),(0,o.kt)("h3",{id:"why-should-i-use-redux"},"Why Should I Use Redux?"),(0,o.kt)("p",null,'Redux helps you manage "global" state - state that is needed across many parts of your application.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur"),". Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected."),(0,o.kt)("h3",{id:"when-should-i-use-redux"},"When Should I Use Redux?"),(0,o.kt)("p",null,"Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity."),(0,o.kt)("p",null,"Redux is more useful when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have large amounts of application state that are needed in many places in the app"),(0,o.kt)("li",{parentName:"ul"},"The app state is updated frequently over time"),(0,o.kt)("li",{parentName:"ul"},"The logic to update that state may be complex"),(0,o.kt)("li",{parentName:"ul"},"The app has a medium or large-sized codebase, and might be worked on by many people")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.")),(0,o.kt)("admonition",{title:"Want to Know More?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://changelog.com/posts/when-and-when-not-to-reach-for-redux"},"When (and when not) to reach for Redux"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"},"The Tao of Redux, Part 1 - Implementation and Intent"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/redux/faq/general#when-should-i-use-redux"},"Redux FAQ: When should I use Redux?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"},"You Might Not Need Redux"))))),(0,o.kt)("h3",{id:"redux-libraries-and-tools"},"Redux Libraries and Tools"),(0,o.kt)("p",null,"Redux is a small standalone JS library. However, it is commonly used with several other packages:"),(0,o.kt)("h4",{id:"react-redux"},"React-Redux"),(0,o.kt)("p",null,"Redux can integrate with any UI framework, and is most frequently used with React. ",(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org/"},(0,o.kt)("strong",{parentName:"a"},"React-Redux"))," is our official package that lets your React components interact with a Redux store by reading pieces of state and dispatching actions to update the store."),(0,o.kt)("h4",{id:"redux-toolkit"},"Redux Toolkit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},(0,o.kt)("strong",{parentName:"a"},"Redux Toolkit"))," is our recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications."),(0,o.kt)("h4",{id:"redux-devtools-extension"},"Redux DevTools Extension"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools/tree/main/extension"},(0,o.kt)("strong",{parentName:"a"},"Redux DevTools Extension")),' shows a history of the changes to the state in your Redux store over time. This allows you to debug your applications effectively, including using powerful techniques like "time-travel debugging".'),(0,o.kt)("h2",{id:"redux-terms-and-concepts"},"Redux Terms and Concepts"),(0,o.kt)("p",null,"Before we dive into some actual code, let's talk about some of the terms and concepts you'll need to know to use Redux."),(0,o.kt)("h3",{id:"state-management"},"State Management"),(0,o.kt)("p",null,"Let's start by looking at a small React counter component. It tracks a number in component state, and increments the number when a button is clicked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  // State: a counter value\n  const [counter, setCounter] = useState(0)\n\n  // Action: code that causes an update to the state when something happens\n  const increment = () => {\n    setCounter(prevCounter => prevCounter + 1)\n  }\n\n  // View: the UI definition\n  return (\n    <div>\n      Value: {counter} <button onClick={increment}>Increment</button>\n    </div>\n  )\n}\n")),(0,o.kt)("p",null,"It is a self-contained app with the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"state"),", the source of truth that drives our app;"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"view"),", a declarative description of the UI based on the current state"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"actions"),", the events that occur in the app based on user input, and trigger updates in the state")),(0,o.kt)("p",null,"This is a small example of ",(0,o.kt)("strong",{parentName:"p"},'"one-way data flow"'),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"State describes the condition of the app at a specific point in time"),(0,o.kt)("li",{parentName:"ul"},"The UI is rendered based on that state"),(0,o.kt)("li",{parentName:"ul"},"When something happens (such as a user clicking a button), the state is updated based on what occurred"),(0,o.kt)("li",{parentName:"ul"},"The UI re-renders based on the new state")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"One-way data flow",src:a(2814).Z,width:"1280",height:"866"})),(0,o.kt)("p",null,"However, the simplicity can break down when we have ",(0,o.kt)("strong",{parentName:"p"},"multiple components that need to share and use the same state"),", especially if those components are located in different parts of the application. Sometimes this can be solved by ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev/learn/sharing-state-between-components"},'"lifting state up"')," to parent components, but that doesn't always help."),(0,o.kt)("p",null,'One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree. With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!'),(0,o.kt)("p",null,"By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability."),(0,o.kt)("p",null,"This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable."),(0,o.kt)("h3",{id:"immutability"},"Immutability"),(0,o.kt)("p",null,'"Mutable" means "changeable". If something is "immutable", it can never be changed.'),(0,o.kt)("p",null,"JavaScript objects and arrays are all mutable by default. If I create an object, I can change the contents of its fields. If I create an array, I can change the contents as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = { a: 1, b: 2 }\n// still the same object outside, but the contents have changed\nobj.b = 3\n\nconst arr = ['a', 'b']\n// In the same way, we can change the contents of this array\narr.push('c')\narr[1] = 'd'\n")),(0,o.kt)("p",null,"This is called ",(0,o.kt)("em",{parentName:"p"},"mutating")," the object or array. It's the same object or array reference in memory, but now the contents inside the object have changed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In order to update values immutably, your code must make ",(0,o.kt)("em",{parentName:"strong"},"copies")," of existing objects/arrays, and then modify the copies"),"."),(0,o.kt)("p",null,"We can do this by hand using JavaScript's array / object spread operators, as well as array methods that return new copies of the array instead of mutating the original array:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  a: {\n    // To safely update obj.a.c, we have to copy each piece\n    c: 3\n  },\n  b: 2\n}\n\nconst obj2 = {\n  // copy obj\n  ...obj,\n  // overwrite a\n  a: {\n    // copy obj.a\n    ...obj.a,\n    // overwrite c\n    c: 42\n  }\n}\n\nconst arr = ['a', 'b']\n// Create a new copy of arr, with \"c\" appended to the end\nconst arr2 = arr.concat('c')\n\n// or, we can make a copy of the original array:\nconst arr3 = arr.slice()\n// and mutate the copy:\narr3.push('c')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Redux expects that all state updates are done immutably"),". We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic."),(0,o.kt)("admonition",{title:"Want to Know More?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more info on how immutability works in JavaScript, see:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://daveceddia.com/javascript-references/"},"A Visual Guide to References in JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://daveceddia.com/react-redux-immutability-guide/"},"Immutability in React and Redux: The Complete Guide")))),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"There are some important Redux terms that you'll need to be familiar with before we continue:"),(0,o.kt)("h4",{id:"actions"},"Actions"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"action")," is a plain JavaScript object that has a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field. ",(0,o.kt)("strong",{parentName:"p"},"You can think of an action as an event that describes something that happened in the application"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field should be a string that gives this action a descriptive name, like ",(0,o.kt)("inlineCode",{parentName:"p"},'"todos/todoAdded"'),". We usually write that type string like ",(0,o.kt)("inlineCode",{parentName:"p"},'"domain/eventName"'),", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened."),(0,o.kt)("p",null,"An action object can have other fields with additional information about what happened. By convention, we put that information in a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"payload"),"."),(0,o.kt)("p",null,"A typical action object might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const addTodoAction = {\n  type: 'todos/todoAdded',\n  payload: 'Buy milk'\n}\n")),(0,o.kt)("h4",{id:"action-creators"},"Action Creators"),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"action creator")," is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const addTodo = text => {\n  return {\n    type: 'todos/todoAdded',\n    payload: text\n  }\n}\n")),(0,o.kt)("h4",{id:"reducers"},"Reducers"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"reducer")," is a function that receives the current ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and an ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," object, decides how to update the state if necessary, and returns the new state: ",(0,o.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),". ",(0,o.kt)("strong",{parentName:"p"},"You can think of a reducer as an event listener which handles events based on the received action (event) type.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'"Reducer" functions get their name because they\'re similar to the kind of callback function you pass to the ',(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.reduce()"))," method.")),(0,o.kt)("p",null,"Reducers must ",(0,o.kt)("em",{parentName:"p"},"always")," follow some specific rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They should only calculate the new state value based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"action")," arguments"),(0,o.kt)("li",{parentName:"ul"},"They are not allowed to modify the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),". Instead, they must make ",(0,o.kt)("em",{parentName:"li"},"immutable updates"),", by copying the existing ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and making changes to the copied values."),(0,o.kt)("li",{parentName:"ul"},'They must not do any asynchronous logic, calculate random values, or cause other "side effects"')),(0,o.kt)("p",null,"We'll talk more about the rules of reducers later, including why they're important and how to follow them correctly."),(0,o.kt)("p",null,"The logic inside reducer functions typically follows the same series of steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check to see if the reducer cares about this action",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If so, make a copy of the state, update the copy with new values, and return it"))),(0,o.kt)("li",{parentName:"ul"},"Otherwise, return the existing state unchanged")),(0,o.kt)("p",null,"Here's a small example of a reducer, showing the steps that each reducer should follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = { value: 0 }\n\nfunction counterReducer(state = initialState, action) {\n  // Check to see if the reducer cares about this action\n  if (action.type === 'counter/increment') {\n    // If so, make a copy of `state`\n    return {\n      ...state,\n      // and update the copy with the new value\n      value: state.value + 1\n    }\n  }\n  // otherwise return the existing state unchanged\n  return state\n}\n")),(0,o.kt)("p",null,"Reducers can use any kind of logic inside to decide what the new state should be: ",(0,o.kt)("inlineCode",{parentName:"p"},"if/else"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),", loops, and so on."),(0,o.kt)(i.s,{title:"Detailed Explanation: Why Are They Called 'Reducers?'",mdxType:"DetailedExplanation"},(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},(0,o.kt)("inlineCode",{parentName:"a"},"Array.reduce()")),' method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array.reduce()")," takes a callback function as an argument, which will be called one time for each item in the array. It takes two arguments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"previousResult"),", the value that your callback returned last time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentItem"),", the current item in the array")),(0,o.kt)("p",null,"The first time that the callback runs, there isn't a ",(0,o.kt)("inlineCode",{parentName:"p"},"previousResult")," available, so we need to also pass in an initial value that will be used as the first ",(0,o.kt)("inlineCode",{parentName:"p"},"previousResult"),"."),(0,o.kt)("p",null,"If we wanted to add together an array of numbers to find out what the total is, we could write a reduce callback that looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [2, 5, 8]\n\nconst addNumbers = (previousResult, currentItem) => {\n  console.log({ previousResult, currentItem })\n  return previousResult + currentItem\n}\n\nconst initialValue = 0\n\nconst total = numbers.reduce(addNumbers, initialValue)\n// {previousResult: 0, currentItem: 2}\n// {previousResult: 2, currentItem: 5}\n// {previousResult: 7, currentItem: 8}\n\nconsole.log(total)\n// 15\n")),(0,o.kt)("p",null,"Notice that this ",(0,o.kt)("inlineCode",{parentName:"p"},"addNumbers"),' "reduce callback" function doesn\'t need to keep track of anything itself. It takes the ',(0,o.kt)("inlineCode",{parentName:"p"},"previousResult")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"currentItem")," arguments, does something with them, and returns a new result value."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'A Redux reducer function is exactly the same idea as this "reduce callback" function!'),' It takes a "previous result" (the ',(0,o.kt)("inlineCode",{parentName:"p"},"state"),'), and the "current item" (the ',(0,o.kt)("inlineCode",{parentName:"p"},"action")," object), decides a new state value based on those arguments, and returns that new state."),(0,o.kt)("p",null,"If we were to create an array of Redux actions, call ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce()"),", and pass in a reducer function, we'd get a final result the same way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const actions = [\n  { type: 'counter/increment' },\n  { type: 'counter/increment' },\n  { type: 'counter/increment' }\n]\n\nconst initialState = { value: 0 }\n\nconst finalResult = actions.reduce(counterReducer, initialState)\nconsole.log(finalResult)\n// {value: 3}\n")),(0,o.kt)("p",null,"We can say that ",(0,o.kt)("strong",{parentName:"p"},"Redux reducers reduce a set of actions (over time) into a single state"),". The difference is that with ",(0,o.kt)("inlineCode",{parentName:"p"},"Array.reduce()")," it happens all at once, and with Redux, it happens over the lifetime of your running app.")),(0,o.kt)("h4",{id:"store"},"Store"),(0,o.kt)("p",null,"The current Redux application state lives in an object called the ",(0,o.kt)("strong",{parentName:"p"},"store")," ."),(0,o.kt)("p",null,"The store is created by passing in a reducer, and has a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"getState")," that returns the current state value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({ reducer: counterReducer })\n\nconsole.log(store.getState())\n// {value: 0}\n")),(0,o.kt)("h4",{id:"dispatch"},"Dispatch"),(0,o.kt)("p",null,"The Redux store has a method called ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),". ",(0,o.kt)("strong",{parentName:"p"},"The only way to update the state is to call ",(0,o.kt)("inlineCode",{parentName:"strong"},"store.dispatch()")," and pass in an action object"),". The store will run its reducer function and save the new state value inside, and we can call ",(0,o.kt)("inlineCode",{parentName:"p"},"getState()")," to retrieve the updated value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"store.dispatch({ type: 'counter/increment' })\n\nconsole.log(store.getState())\n// {value: 1}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'You can think of dispatching actions as "triggering an event"')," in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response."),(0,o.kt)("p",null,"We typically call action creators to dispatch the right action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const increment = () => {\n  return {\n    type: 'counter/increment'\n  }\n}\n\nstore.dispatch(increment())\n\nconsole.log(store.getState())\n// {value: 2}\n")),(0,o.kt)("h4",{id:"selectors"},"Selectors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Selectors")," are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const selectCounterValue = state => state.value\n\nconst currentValue = selectCounterValue(store.getState())\nconsole.log(currentValue)\n// 2\n")),(0,o.kt)("h3",{id:"redux-application-data-flow"},"Redux Application Data Flow"),(0,o.kt)("p",null,'Earlier, we talked about "one-way data flow", which describes this sequence of steps to update the app:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"State describes the condition of the app at a specific point in time"),(0,o.kt)("li",{parentName:"ul"},"The UI is rendered based on that state"),(0,o.kt)("li",{parentName:"ul"},"When something happens (such as a user clicking a button), the state is updated based on what occurred"),(0,o.kt)("li",{parentName:"ul"},"The UI re-renders based on the new state")),(0,o.kt)("p",null,"For Redux specifically, we can break these steps into more detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initial setup:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A Redux store is created using a root reducer function"),(0,o.kt)("li",{parentName:"ul"},"The store calls the root reducer once, and saves the return value as its initial ",(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},"When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed."))),(0,o.kt)("li",{parentName:"ul"},"Updates:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Something happens in the app, such as a user clicking a button"),(0,o.kt)("li",{parentName:"ul"},"The app code dispatches an action to the Redux store, like ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch({type: 'counter/increment'})")),(0,o.kt)("li",{parentName:"ul"},"The store runs the reducer function again with the previous ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and the current ",(0,o.kt)("inlineCode",{parentName:"li"},"action"),", and saves the return value as the new ",(0,o.kt)("inlineCode",{parentName:"li"},"state")),(0,o.kt)("li",{parentName:"ul"},"The store notifies all parts of the UI that are subscribed that the store has been updated"),(0,o.kt)("li",{parentName:"ul"},"Each UI component that needs data from the store checks to see if the parts of the state they need have changed."),(0,o.kt)("li",{parentName:"ul"},"Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen")))),(0,o.kt)("p",null,"Here's what that data flow looks like visually:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redux data flow diagram",src:a(7437).Z,width:"1440",height:"1080"})),(0,o.kt)("h2",{id:"what-youve-learned"},"What You've Learned"),(0,o.kt)("p",null,"Redux does have a number of new terms and concepts to remember. As a reminder, here's what we just covered:"),(0,o.kt)("admonition",{title:"Summary",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redux is a library for managing global application state"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Redux is typically used with the React-Redux library for integrating Redux and React together"),(0,o.kt)("li",{parentName:"ul"},"Redux Toolkit is the recommended way to write Redux logic"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Redux uses a "one-way data flow" app structure'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"State describes the condition of the app at a point in time, and UI renders based on that state"),(0,o.kt)("li",{parentName:"ul"},"When something happens in the app:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The UI dispatches an action"),(0,o.kt)("li",{parentName:"ul"},"The store runs the reducers, and the state is updated based on what occurred"),(0,o.kt)("li",{parentName:"ul"},"The store notifies the UI that the state has changed"))),(0,o.kt)("li",{parentName:"ul"},"The UI re-renders based on the new state"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redux uses several types of code"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Actions")," are plain objects with a ",(0,o.kt)("inlineCode",{parentName:"li"},"type"),' field, and describe "what happened" in the app'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Reducers")," are functions that calculate a new state value based on previous state + an action"),(0,o.kt)("li",{parentName:"ul"},"A Redux ",(0,o.kt)("em",{parentName:"li"},"store")," runs the root reducer whenever an action is ",(0,o.kt)("em",{parentName:"li"},"dispatched")))))),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"We've seen each of the individual pieces of a Redux app. Next, continue on to ",(0,o.kt)("a",{parentName:"p",href:"/redux/tutorials/essentials/part-2-app-structure"},"Part 2: Redux Toolkit App Structure"),", where we'll look at a full working example to see how the pieces fit together."))}k.isMDXComponent=!0},7437:function(e,t,a){t.Z=a.p+"assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"},2814:function(e,t,a){t.Z=a.p+"assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png"}}]);