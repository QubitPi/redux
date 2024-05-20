"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5143],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5373:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],l={id:"examples",title:"Examples",description:"Introduction > Examples: Redux interactive example apps"},i="Examples",d={unversionedId:"introduction/examples",id:"introduction/examples",title:"Examples",description:"Introduction > Examples: Redux interactive example apps",source:"@site/../docs/introduction/Examples.md",sourceDirName:"introduction",slug:"/introduction/examples",permalink:"/introduction/examples",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/introduction/Examples.md",tags:[],version:"current",lastUpdatedAt:1716201016,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"examples",title:"Examples",description:"Introduction > Examples: Redux interactive example apps"},sidebar:"docs",previous:{title:"Ecosystem",permalink:"/introduction/ecosystem"},next:{title:"Tutorials Index",permalink:"/tutorials/index"}},p={},u=[{value:"Counter Vanilla",id:"counter-vanilla",level:2},{value:"Counter",id:"counter",level:2},{value:"Todos",id:"todos",level:2},{value:"Todos with Undo",id:"todos-with-undo",level:2},{value:"TodoMVC",id:"todomvc",level:2},{value:"Shopping Cart",id:"shopping-cart",level:2},{value:"Tree View",id:"tree-view",level:2},{value:"Async",id:"async",level:2},{value:"Universal",id:"universal",level:2},{value:"Real World",id:"real-world",level:2},{value:"More Examples",id:"more-examples",level:2}],c={toc:u},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Redux is distributed with a few examples in its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples"},"source code"),". Most of these examples are also on ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io"},"CodeSandbox"),", an online editor that lets you play with the examples online."),(0,o.kt)("h2",{id:"counter-vanilla"},"Counter Vanilla"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla"},"Counter Vanilla")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/counter-vanilla\nopen index.html\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"It does not require a build system or a view framework and exists to show the raw Redux API used with ES5."),(0,o.kt)("h2",{id:"counter"},"Counter"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/counter"},"Counter")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/counter\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux")," bindings instead."),(0,o.kt)("p",null,"This example includes tests."),(0,o.kt)("h2",{id:"todos"},"Todos"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos"},"Todos")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/todos\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux"},"React Redux")," to generate container components from your presentational components."),(0,o.kt)("p",null,"This example includes tests."),(0,o.kt)("h2",{id:"todos-with-undo"},"Todos with Undo"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo"},"Todos with Undo")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/todos-with-undo\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todos-with-undo/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/omnidan/redux-undo"},"Redux Undo")," lets you add a Undo/Redo functionality to your app with a few lines of code."),(0,o.kt)("h2",{id:"todomvc"},"TodoMVC"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/todomvc"},"TodoMVC")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/todomvc\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/todomvc/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This is the classical ",(0,o.kt)("a",{parentName:"p",href:"http://todomvc.com/"},"TodoMVC")," example. It's here for the sake of comparison, but it covers the same points as the Todos example."),(0,o.kt)("p",null,"This example includes tests."),(0,o.kt)("h2",{id:"shopping-cart"},"Shopping Cart"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/shopping-cart"},"Shopping Cart")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/shopping-cart\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fcomb/redux-logger"},"Redux Logger")," and conditional dispatching of actions with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},"Redux Thunk")," middleware."),(0,o.kt)("h2",{id:"tree-view"},"Tree View"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/tree-view"},"Tree View")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/tree-view\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/tree-view/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render."),(0,o.kt)("p",null,"This example includes tests."),(0,o.kt)("h2",{id:"async"},"Async"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/async"},"Async")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/async\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/async/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This example includes reading from an asynchronous API, fetching data in response to user input, showing loading indicators, caching the response, and invalidating the cache. It uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},"Redux Thunk")," middleware to encapsulate asynchronous side effects."),(0,o.kt)("h2",{id:"universal"},"Universal"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/universal"},"Universal")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/universal\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"This is a basic demonstration of ",(0,o.kt)("a",{parentName:"p",href:"/usage/server-rendering"},"server rendering")," with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state."),(0,o.kt)("h2",{id:"real-world"},"Real World"),(0,o.kt)("p",null,"Run the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/tree/master/examples/real-world"},"Real World")," example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/reduxjs/redux.git\n\ncd redux/examples/real-world\nnpm install\nnpm start\n")),(0,o.kt)("p",null,"Or check out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world"},"sandbox"),":"),(0,o.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/real-world/?codemirror=1&runonclick=1",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools."),(0,o.kt)("h2",{id:"more-examples"},"More Examples"),(0,o.kt)("p",null,"You can find more examples in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/apps-and-examples.md"},"Redux Apps and Examples"),"\npage of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links"},"Redux Addons Catalog"),"."))}h.isMDXComponent=!0}}]);