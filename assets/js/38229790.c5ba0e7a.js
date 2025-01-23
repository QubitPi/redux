"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9849],{4175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const a={id:"configuring-your-store",title:"Configuring Your Store",sidebar_label:"Configuring Your Store"},i="Configuring Your Store",l={unversionedId:"usage/configuring-your-store",id:"usage/configuring-your-store",title:"Configuring Your Store",description:'In the "Redux Fundamentals" tutorial, we introduced the fundamental Redux concepts by building an example Todo list app. As part of that, we talked about how to create and configure a Redux store.',source:"@site/../docs/usage/ConfiguringYourStore.md",sourceDirName:"usage",slug:"/usage/configuring-your-store",permalink:"/usage/configuring-your-store",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/ConfiguringYourStore.md",tags:[],version:"current",lastUpdatedAt:1737618502,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"configuring-your-store",title:"Configuring Your Store",sidebar_label:"Configuring Your Store"},sidebar:"docs",previous:{title:"Usage Guides Index",permalink:"/usage/"},next:{title:"Setup with Next.js",permalink:"/usage/nextjs"}},d={},s=[{value:"Creating the store",id:"creating-the-store",level:2},{value:"Extending Redux functionality",id:"extending-redux-functionality",level:2},{value:"Install <code>redux-thunk</code>",id:"install-redux-thunk",level:4},{value:"middleware/logger.js",id:"middlewareloggerjs",level:4},{value:"enhancers/monitorReducer.js",id:"enhancersmonitorreducerjs",level:4},{value:"Problems with this approach",id:"problems-with-this-approach",level:2},{value:"The solution: <code>configureStore</code>",id:"the-solution-configurestore",level:2},{value:"Integrating the devtools extension",id:"integrating-the-devtools-extension",level:2},{value:"Hot reloading",id:"hot-reloading",level:2},{value:"Simplifying Setup with Redux Toolkit",id:"simplifying-setup-with-redux-toolkit",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"configuring-your-store"},"Configuring Your Store"),(0,o.yg)("p",null,"In the ",(0,o.yg)("a",{parentName:"p",href:"/tutorials/fundamentals/part-1-overview"},'"Redux Fundamentals" tutorial'),", we introduced the fundamental Redux concepts by building an example Todo list app. As part of that, we talked about ",(0,o.yg)("a",{parentName:"p",href:"/tutorials/fundamentals/part-4-store"},"how to create and configure a Redux store"),"."),(0,o.yg)("p",null,"We will now explore how to customise the store to add extra functionality. We'll start with the source code from ",(0,o.yg)("a",{parentName:"p",href:"/tutorials/fundamentals/part-5-ui-react"},'"Redux Fundamentals" part 5: UI and React'),". You can view the source from this stage of the tutorial in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions"},"the example app repository on Github"),", or ",(0,o.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux-fundamentals-example-app/tree/checkpoint-5-uiAllActions/"},"in your browser via CodeSandbox"),"."),(0,o.yg)("h2",{id:"creating-the-store"},"Creating the store"),(0,o.yg)("p",null,"First, let's look at the original ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," file in which we created our store:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport rootReducer from './reducers'\nimport App from './components/App'\n\nconst store = createStore(rootReducer)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,o.yg)("p",null,"In this code, we pass our reducers to the Redux ",(0,o.yg)("inlineCode",{parentName:"p"},"createStore")," function, which returns a ",(0,o.yg)("inlineCode",{parentName:"p"},"store")," object. We then pass this object to the ",(0,o.yg)("inlineCode",{parentName:"p"},"react-redux")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Provider")," component, which is rendered at the top of our component tree."),(0,o.yg)("p",null,"This ensures that any time we connect to Redux in our app via ",(0,o.yg)("inlineCode",{parentName:"p"},"react-redux")," ",(0,o.yg)("inlineCode",{parentName:"p"},"connect"),", the store is available to our components."),(0,o.yg)("h2",{id:"extending-redux-functionality"},"Extending Redux functionality"),(0,o.yg)("p",null,"Most apps extend the functionality of their Redux store by adding middleware or store enhancers ",(0,o.yg)("em",{parentName:"p"},"(note: middleware is common, enhancers are less common)"),". Middleware adds extra functionality to the Redux ",(0,o.yg)("inlineCode",{parentName:"p"},"dispatch")," function; enhancers add extra functionality to the Redux store."),(0,o.yg)("p",null,"We will add two middlewares and one enhancer:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-thunk"},(0,o.yg)("inlineCode",{parentName:"a"},"redux-thunk")," middleware"),", which allows simple asynchronous use of dispatch."),(0,o.yg)("li",{parentName:"ul"},"A middleware which logs dispatched actions and the resulting new state."),(0,o.yg)("li",{parentName:"ul"},"An enhancer which logs the time taken for the reducers to process each action.")),(0,o.yg)("h4",{id:"install-redux-thunk"},"Install ",(0,o.yg)("inlineCode",{parentName:"h4"},"redux-thunk")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"npm install redux-thunk\n")),(0,o.yg)("h4",{id:"middlewareloggerjs"},"middleware/logger.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const logger = store => next => action => {\n  console.group(action.type)\n  console.info('dispatching', action)\n  let result = next(action)\n  console.log('next state', store.getState())\n  console.groupEnd()\n  return result\n}\n\nexport default logger\n")),(0,o.yg)("h4",{id:"enhancersmonitorreducerjs"},"enhancers/monitorReducer.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"const round = number => Math.round(number * 100) / 100\n\nconst monitorReducerEnhancer =\n  createStore => (reducer, initialState, enhancer) => {\n    const monitoredReducer = (state, action) => {\n      const start = performance.now()\n      const newState = reducer(state, action)\n      const end = performance.now()\n      const diff = round(end - start)\n\n      console.log('reducer process time:', diff)\n\n      return newState\n    }\n\n    return createStore(monitoredReducer, initialState, enhancer)\n  }\n\nexport default monitorReducerEnhancer\n")),(0,o.yg)("p",null,"Let's add these to our existing ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"First, we need to import ",(0,o.yg)("inlineCode",{parentName:"p"},"redux-thunk")," plus our ",(0,o.yg)("inlineCode",{parentName:"p"},"loggerMiddleware")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"monitorReducerEnhancer"),", plus two extra functions provided by Redux: ",(0,o.yg)("inlineCode",{parentName:"p"},"applyMiddleware")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"compose"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"We then use ",(0,o.yg)("inlineCode",{parentName:"p"},"applyMiddleware")," to create a store enhancer which will apply our ",(0,o.yg)("inlineCode",{parentName:"p"},"loggerMiddleware")," and the ",(0,o.yg)("inlineCode",{parentName:"p"},"thunkMiddleware")," to the store's dispatch function.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Next, we use ",(0,o.yg)("inlineCode",{parentName:"p"},"compose")," to compose our new ",(0,o.yg)("inlineCode",{parentName:"p"},"middlewareEnhancer")," and our ",(0,o.yg)("inlineCode",{parentName:"p"},"monitorReducerEnhancer")," into one function."),(0,o.yg)("p",{parentName:"li"},"This is needed because you can only pass one enhancer into ",(0,o.yg)("inlineCode",{parentName:"p"},"createStore"),". To use multiple enhancers, you must first compose them into a single larger enhancer, as shown in this example.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Finally, we pass this new ",(0,o.yg)("inlineCode",{parentName:"p"},"composedEnhancers")," function into ",(0,o.yg)("inlineCode",{parentName:"p"},"createStore")," as its third argument. ",(0,o.yg)("em",{parentName:"p"},"Note: the second argument, which we will ignore, lets you preloaded state into the store.")))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport { applyMiddleware, createStore, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from './reducers'\nimport loggerMiddleware from './middleware/logger'\nimport monitorReducerEnhancer from './enhancers/monitorReducer'\nimport App from './components/App'\n\nconst middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)\nconst composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)\n\nconst store = createStore(rootReducer, undefined, composedEnhancers)\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,o.yg)("h2",{id:"problems-with-this-approach"},"Problems with this approach"),(0,o.yg)("p",null,"While this code works, for a typical app it is not ideal."),(0,o.yg)("p",null,"Most apps use more than one middleware, and each middleware often requires some initial setup. The extra noise added to the ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," can quickly make it hard to maintain, because the logic is not cleanly organised."),(0,o.yg)("h2",{id:"the-solution-configurestore"},"The solution: ",(0,o.yg)("inlineCode",{parentName:"h2"},"configureStore")),(0,o.yg)("p",null,"The solution to this problem is to create a new ",(0,o.yg)("inlineCode",{parentName:"p"},"configureStore")," function which encapsulates our store creation logic, which can then be located in its own file to ease extensibility."),(0,o.yg)("p",null,"The end goal is for our ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," to look like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),(0,o.yg)("p",null,"All the logic related to configuring the store - including importing reducers, middleware, and enhancers - is handled in a dedicated file."),(0,o.yg)("p",null,"To achieve this, ",(0,o.yg)("inlineCode",{parentName:"p"},"configureStore")," function looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),(0,o.yg)("p",null,"This function follows the same steps outlined above, with some of the logic split out to prepare for extension, which will make it easier to add more in future:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Both ",(0,o.yg)("inlineCode",{parentName:"p"},"middlewares")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"enhancers")," are defined as arrays, separate from the functions which consume them."),(0,o.yg)("p",{parentName:"li"},"This allows us to easily add more middleware or enhancers based on different conditions."),(0,o.yg)("p",{parentName:"li"},"For example, it is common to add some middleware only when in development mode, which is easily achieved by pushing to the middlewares array inside an if statement:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV === 'development') {\n  middlewares.push(secretMiddleware)\n}\n"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A ",(0,o.yg)("inlineCode",{parentName:"p"},"preloadedState")," variable is passed through to ",(0,o.yg)("inlineCode",{parentName:"p"},"createStore")," in case we want to add this later."))),(0,o.yg)("p",null,"This also makes our ",(0,o.yg)("inlineCode",{parentName:"p"},"createStore")," function easier to reason about - each step is clearly separated, which makes it more obvious what exactly is happening."),(0,o.yg)("h2",{id:"integrating-the-devtools-extension"},"Integrating the devtools extension"),(0,o.yg)("p",null,"Another common feature which you may wish to add to your app is the ",(0,o.yg)("inlineCode",{parentName:"p"},"redux-devtools-extension")," integration."),(0,o.yg)("p",null,"The extension is a suite of tools which give you absolute control over your Redux store - it allows you to inspect and replay actions, explore your state at different times, dispatch actions directly to the store, and much more. ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools/tree/main/extension"},"Click here to read more about the available features.")),(0,o.yg)("p",null,"There are several ways to integrate the extension, but we will use the most convenient option."),(0,o.yg)("p",null,"First, we install the package via npm:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev redux-devtools-extension\n")),(0,o.yg)("p",null,"Next, we remove the ",(0,o.yg)("inlineCode",{parentName:"p"},"compose")," function which we imported from ",(0,o.yg)("inlineCode",{parentName:"p"},"redux"),", and replace it with a new ",(0,o.yg)("inlineCode",{parentName:"p"},"composeWithDevTools")," function imported from ",(0,o.yg)("inlineCode",{parentName:"p"},"redux-devtools-extension"),"."),(0,o.yg)("p",null,"The final code looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport { composeWithDevTools } from 'redux-devtools-extension'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = composeWithDevTools(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  return store\n}\n")),(0,o.yg)("p",null,"And that's it!"),(0,o.yg)("p",null,"If we now visit our app via a browser with the devtools extension installed, we can explore and debug using a powerful new tool."),(0,o.yg)("h2",{id:"hot-reloading"},"Hot reloading"),(0,o.yg)("p",null,"Another powerful tool which can make the development process a lot more intuitive is hot reloading, which means replacing pieces of code without restarting your whole app."),(0,o.yg)("p",null,"For example, consider what happens when you run your app, interact with it for a while, and then decide to make changes to one of your reducers. Normally, when you make those changes your app will restart, reverting your Redux state to its initial value."),(0,o.yg)("p",null,"With hot module reloading enabled, only the reducer you changed would be reloaded, allowing you to change your code ",(0,o.yg)("em",{parentName:"p"},"without")," resetting the state every time. This makes for a much faster development process."),(0,o.yg)("p",null,"We'll add hot reloading both to our Redux reducers and to our React components."),(0,o.yg)("p",null,"First, let's add it to our ",(0,o.yg)("inlineCode",{parentName:"p"},"configureStore")," function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { applyMiddleware, compose, createStore } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureStore(preloadedState) {\n  const middlewares = [loggerMiddleware, thunkMiddleware]\n  const middlewareEnhancer = applyMiddleware(...middlewares)\n\n  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]\n  const composedEnhancers = compose(...enhancers)\n\n  const store = createStore(rootReducer, preloadedState, composedEnhancers)\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),(0,o.yg)("p",null,"The new code is wrapped in an ",(0,o.yg)("inlineCode",{parentName:"p"},"if")," statement, so it only runs when our app is not in production mode, and only if the ",(0,o.yg)("inlineCode",{parentName:"p"},"module.hot")," feature is available."),(0,o.yg)("p",null,"Bundlers like Webpack and Parcel support a ",(0,o.yg)("inlineCode",{parentName:"p"},"module.hot.accept")," method to specify which module should be hot reloaded, and what should happen when the module changes. In this case, we're watching the ",(0,o.yg)("inlineCode",{parentName:"p"},"./reducers")," module, and passing the updated ",(0,o.yg)("inlineCode",{parentName:"p"},"rootReducer")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"store.replaceReducer")," method when it changes."),(0,o.yg)("p",null,"We'll also use the same pattern in our ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," to hot reload any changes to our React components:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\nimport App from './components/App'\nimport configureStore from './configureStore'\n\nconst store = configureStore()\n\nconst renderApp = () =>\n  render(\n    <Provider store={store}>\n      <App />\n    </Provider>,\n    document.getElementById('root')\n  )\n\nif (process.env.NODE_ENV !== 'production' && module.hot) {\n  module.hot.accept('./components/App', renderApp)\n}\n\nrenderApp()\n")),(0,o.yg)("p",null,"The only extra change here is that we have encapsulated our app's rendering into a new ",(0,o.yg)("inlineCode",{parentName:"p"},"renderApp")," function, which we now call to re-render the app."),(0,o.yg)("h2",{id:"simplifying-setup-with-redux-toolkit"},"Simplifying Setup with Redux Toolkit"),(0,o.yg)("p",null,"The Redux core library is deliberately unopinionated. It lets you decide how you want to handle everything, like store\nsetup, what your state contains, and how you want to build your reducers."),(0,o.yg)("p",null,"This is good in some cases, because it gives you flexibility, but that flexibility isn't always needed. Sometimes we\njust want the simplest possible way to get started, with some good default behavior out of the box."),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/"},"Redux Toolkit")," package is designed to help simplify several common Redux use cases, including store setup.\nLet's see how it can help improve the store setup process."),(0,o.yg)("p",null,"Redux Toolkit includes a prebuilt ",(0,o.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},(0,o.yg)("inlineCode",{parentName:"a"},"configureStore")," function")," like\nthe one shown in the earlier examples."),(0,o.yg)("p",null,"The fastest way to use is it is to just pass the root reducer function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducers'\n\nconst store = configureStore({\n  reducer: rootReducer\n})\n\nexport default store\n")),(0,o.yg)("p",null,"Note that it accepts an object with named parameters, to make it clearer what you're passing in."),(0,o.yg)("p",null,"By default, ",(0,o.yg)("inlineCode",{parentName:"p"},"configureStore")," from Redux Toolkit will:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Call ",(0,o.yg)("inlineCode",{parentName:"li"},"applyMiddleware")," with ",(0,o.yg)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/getDefaultMiddleware"},"a default list of middleware, including ",(0,o.yg)("inlineCode",{parentName:"a"},"redux-thunk")),", and some development-only middleware that catch common mistakes like mutating state"),(0,o.yg)("li",{parentName:"ul"},"Call ",(0,o.yg)("inlineCode",{parentName:"li"},"composeWithDevTools")," to set up the Redux DevTools Extension")),(0,o.yg)("p",null,"Here's what the hot reloading example might look like using Redux Toolkit:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport monitorReducersEnhancer from './enhancers/monitorReducers'\nimport loggerMiddleware from './middleware/logger'\nimport rootReducer from './reducers'\n\nexport default function configureAppStore(preloadedState) {\n  const store = configureStore({\n    reducer: rootReducer,\n    middleware: getDefaultMiddleware =>\n      getDefaultMiddleware().prepend(loggerMiddleware),\n    preloadedState,\n    enhancers: [monitorReducersEnhancer]\n  })\n\n  if (process.env.NODE_ENV !== 'production' && module.hot) {\n    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))\n  }\n\n  return store\n}\n")),(0,o.yg)("p",null,"That definitely simplifies some of the setup process."),(0,o.yg)("h2",{id:"next-steps"},"Next Steps"),(0,o.yg)("p",null,"Now that you know how to encapsulate your store configuration to make it easier to maintain, you can ",(0,o.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"look at the Redux Toolkit ",(0,o.yg)("inlineCode",{parentName:"a"},"configureStore")," API"),", or take a closer look at some of the ",(0,o.yg)("a",{parentName:"p",href:"/introduction/ecosystem#debuggers-and-viewers"},"extensions available in the Redux ecosystem"),"."))}c.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);