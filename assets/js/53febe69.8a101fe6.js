"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1938],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),b=n,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?a.createElement(m,i(i({ref:t},l),{},{components:r})):a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3961:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],p={id:"using-object-spread-operator",title:"Using Object Spread Operator"},s="Using Object Spread Operator",c={unversionedId:"usage/using-object-spread-operator",id:"usage/using-object-spread-operator",title:"Using Object Spread Operator",description:"Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using Object.assign() to create copies of objects with new or updated values. For example, in the todoApp below Object.assign() is used to return a new state object with an updated visibilityFilter property:",source:"@site/../docs/usage/UsingObjectSpreadOperator.md",sourceDirName:"usage",slug:"/usage/using-object-spread-operator",permalink:"/redux/usage/using-object-spread-operator",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/UsingObjectSpreadOperator.md",tags:[],version:"current",lastUpdatedAt:1694574625,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"using-object-spread-operator",title:"Using Object Spread Operator"}},l={},u=[],d={toc:u},b="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(b,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-object-spread-operator"},"Using Object Spread Operator"),(0,o.kt)("p",null,"Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,o.kt)("inlineCode",{parentName:"a"},"Object.assign()"))," to create copies of objects with new or updated values. For example, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"todoApp")," below ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," is used to return a new ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," object with an updated ",(0,o.kt)("inlineCode",{parentName:"p"},"visibilityFilter")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return Object.assign({}, state, {\n        visibilityFilter: action.filter\n      })\n    default:\n      return state\n  }\n}\n")),(0,o.kt)("p",null,"While effective, using ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," can quickly make simple reducers difficult to read given its rather verbose syntax."),(0,o.kt)("p",null,"An alternative approach is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-object-rest-spread"},"object spread syntax")," recently added to the JavaScript specification. It lets you use the spread (",(0,o.kt)("inlineCode",{parentName:"p"},"..."),") operator to copy enumerable properties from one object to another in a more succinct way. The object spread operator is conceptually similar to the ES6 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator"},"array spread operator"),". We can simplify the ",(0,o.kt)("inlineCode",{parentName:"p"},"todoApp")," example above by using the object spread syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function todoApp(state = initialState, action) {\n  switch (action.type) {\n    case SET_VISIBILITY_FILTER:\n      return { ...state, visibilityFilter: action.filter }\n    default:\n      return state\n  }\n}\n")),(0,o.kt)("p",null,"The advantage of using the object spread syntax becomes more apparent when you're composing complex objects. Below ",(0,o.kt)("inlineCode",{parentName:"p"},"getAddedIds")," maps an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," values to an array of objects with values returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"getProduct")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getQuantity"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return getAddedIds(state.cart).map(id =>\n  Object.assign({}, getProduct(state.products, id), {\n    quantity: getQuantity(state.cart, id)\n  })\n)\n")),(0,o.kt)("p",null,"Object spread lets us simplify the above ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," call to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return getAddedIds(state.cart).map(id => ({\n  ...getProduct(state.products, id),\n  quantity: getQuantity(state.cart, id)\n}))\n")),(0,o.kt)("p",null,"While the object spread syntax is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-object-rest-spread#status-of-this-proposal"},"Stage 4")," proposal for ECMAScript and accepted for the 2018 specification release, you will still need to use a transpiler such as ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," to use it in production systems. You should use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babel/babel/tree/master/packages/babel-preset-env"},(0,o.kt)("inlineCode",{parentName:"a"},"env"))," preset, install ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread"},(0,o.kt)("inlineCode",{parentName:"a"},"@babel/plugin-proposal-object-rest-spread"))," and add it individually to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," array in your ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "presets": ["@babel/preset-env"],\n  "plugins": ["@babel/plugin-proposal-object-rest-spread"]\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"note-on-object-spread-operator"},"Note on Object Spread Operator")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Like the Array Spread Operator, the Object Spread Operator creates a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals"},"shallow clone")," of the original object. In other words, for multidimensional source objects, elements in the copied object at a depth greater than one are mere references to the source object (with the exception of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"primitives"),", which are copied). Thus, you cannot reliably use the Object Spread Operator (",(0,o.kt)("inlineCode",{parentName:"p"},"..."),") for deep cloning objects.")))}m.isMDXComponent=!0}}]);