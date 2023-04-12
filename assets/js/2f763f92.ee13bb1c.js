"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1084],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,h=c["".concat(l,".").concat(p)]||c[p]||d[p]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},292:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"immutable-update-patterns",title:"Immutable Update Patterns",description:"Structuring Reducers > Immutable Update Patterns: How to correctly update state immutably, with examples of common mistakes"},l="Immutable Update Patterns",u={unversionedId:"usage/structuring-reducers/immutable-update-patterns",id:"usage/structuring-reducers/immutable-update-patterns",title:"Immutable Update Patterns",description:"Structuring Reducers > Immutable Update Patterns: How to correctly update state immutably, with examples of common mistakes",source:"@site/../docs/usage/structuring-reducers/ImmutableUpdatePatterns.md",sourceDirName:"usage/structuring-reducers",slug:"/usage/structuring-reducers/immutable-update-patterns",permalink:"/redux/usage/structuring-reducers/immutable-update-patterns",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/usage/structuring-reducers/ImmutableUpdatePatterns.md",tags:[],version:"current",lastUpdatedAt:1681260022,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"immutable-update-patterns",title:"Immutable Update Patterns",description:"Structuring Reducers > Immutable Update Patterns: How to correctly update state immutably, with examples of common mistakes"},sidebar:"docs",previous:{title:"Reusing Reducer Logic",permalink:"/redux/usage/structuring-reducers/reusing-reducer-logic"},next:{title:"Initializing State",permalink:"/redux/usage/structuring-reducers/initializing-state"}},m={},c=[{value:"Updating Nested Objects",id:"updating-nested-objects",level:2},{value:"Correct Approach: Copying All Levels of Nested Data",id:"correct-approach-copying-all-levels-of-nested-data",level:5},{value:"Common Mistake #1: New variables that point to the same objects",id:"common-mistake-1-new-variables-that-point-to-the-same-objects",level:5},{value:"Common Mistake #2: Only making a shallow copy of one level",id:"common-mistake-2-only-making-a-shallow-copy-of-one-level",level:5},{value:"Inserting and Removing Items in Arrays",id:"inserting-and-removing-items-in-arrays",level:2},{value:"Updating an Item in an Array",id:"updating-an-item-in-an-array",level:2},{value:"Immutable Update Utility Libraries",id:"immutable-update-utility-libraries",level:2},{value:"Simplifying Immutable Updates with Redux Toolkit",id:"simplifying-immutable-updates-with-redux-toolkit",level:2},{value:"Further Information",id:"further-information",level:2}],d={toc:c},p="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"immutable-update-patterns"},"Immutable Update Patterns"),(0,i.kt)("p",null,"The articles listed in ",(0,i.kt)("a",{parentName:"p",href:"/redux/usage/structuring-reducers/prerequisite-concepts#immutable-data-management"},"Prerequisite Concepts#Immutable Data Management")," give a number of good examples for how to perform basic update operations immutably, such as updating a field in an object or adding an item to the end of an array. However, reducers will often need to use those basic operations in combination to perform more complicated tasks. Here are some examples for some of the more common tasks you might have to implement."),(0,i.kt)("h2",{id:"updating-nested-objects"},"Updating Nested Objects"),(0,i.kt)("p",null,"The key to updating nested data is ",(0,i.kt)("strong",{parentName:"p"},"that ",(0,i.kt)("em",{parentName:"strong"},"every")," level of nesting must be copied and updated appropriately"),". This is often a difficult concept for those learning Redux, and there are some specific problems that frequently occur when trying to update nested objects. These lead to accidental direct mutation, and should be avoided."),(0,i.kt)("h5",{id:"correct-approach-copying-all-levels-of-nested-data"},"Correct Approach: Copying All Levels of Nested Data"),(0,i.kt)("p",null,"Unfortunately, the process of correctly applying immutable updates to deeply nested state can easily become verbose and hard to read. Here's what an example of updating ",(0,i.kt)("inlineCode",{parentName:"p"},"state.first.second[someId].fourth")," might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateVeryNestedField(state, action) {\n  return {\n    ...state,\n    first: {\n      ...state.first,\n      second: {\n        ...state.first.second,\n        [action.someId]: {\n          ...state.first.second[action.someId],\n          fourth: action.someValue\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"Obviously, each layer of nesting makes this harder to read, and gives more chances to make mistakes. This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible."),(0,i.kt)("h5",{id:"common-mistake-1-new-variables-that-point-to-the-same-objects"},"Common Mistake #1: New variables that point to the same objects"),(0,i.kt)("p",null,"Defining a new variable does ",(0,i.kt)("em",{parentName:"p"},"not")," create a new actual object - it only creates another reference to the same object. An example of this error would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateNestedState(state, action) {\n  let nestedState = state.nestedState\n  // ERROR: this directly modifies the existing object reference - don't do this!\n  nestedState.nestedField = action.data\n\n  return {\n    ...state,\n    nestedState\n  }\n}\n")),(0,i.kt)("p",null,"This function does correctly return a shallow copy of the top-level state object, but because the ",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState")," variable was still pointing at the existing object, the state was directly mutated."),(0,i.kt)("h5",{id:"common-mistake-2-only-making-a-shallow-copy-of-one-level"},"Common Mistake #2: Only making a shallow copy of one level"),(0,i.kt)("p",null,"Another common version of this error looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateNestedState(state, action) {\n  // Problem: this only does a shallow copy!\n  let newState = { ...state }\n\n  // ERROR: nestedState is still the same object!\n  newState.nestedState.nestedField = action.data\n\n  return newState\n}\n")),(0,i.kt)("p",null,"Doing a shallow copy of the top level is ",(0,i.kt)("em",{parentName:"p"},"not")," sufficient - the ",(0,i.kt)("inlineCode",{parentName:"p"},"nestedState")," object should be copied as well."),(0,i.kt)("h2",{id:"inserting-and-removing-items-in-arrays"},"Inserting and Removing Items in Arrays"),(0,i.kt)("p",null,"Normally, a Javascript array's contents are modified using mutative functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unshift"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"splice"),'. Since we don\'t want to mutate state directly in reducers, those should normally be avoided. Because of that, you might see "insert" or "remove" behavior written like this:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function insertItem(array, action) {\n  return [\n    ...array.slice(0, action.index),\n    action.item,\n    ...array.slice(action.index)\n  ]\n}\n\nfunction removeItem(array, action) {\n  return [...array.slice(0, action.index), ...array.slice(action.index + 1)]\n}\n")),(0,i.kt)("p",null,"However, remember that the key is that the ",(0,i.kt)("em",{parentName:"p"},"original in-memory reference")," is not modified. ",(0,i.kt)("strong",{parentName:"p"},"As long as we make a copy first, we can safely mutate the copy"),". Note that this is true for both arrays and objects, but nested values still must be updated using the same rules."),(0,i.kt)("p",null,"This means that we could also write the insert and remove functions like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function insertItem(array, action) {\n  let newArray = array.slice()\n  newArray.splice(action.index, 0, action.item)\n  return newArray\n}\n\nfunction removeItem(array, action) {\n  let newArray = array.slice()\n  newArray.splice(action.index, 1)\n  return newArray\n}\n")),(0,i.kt)("p",null,"The remove function could also be implemented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function removeItem(array, action) {\n  return array.filter((item, index) => index !== action.index)\n}\n")),(0,i.kt)("h2",{id:"updating-an-item-in-an-array"},"Updating an Item in an Array"),(0,i.kt)("p",null,"Updating one item in an array can be accomplished by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.map"),", returning a new value for the item we want to update, and returning the existing values for all other items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function updateObjectInArray(array, action) {\n  return array.map((item, index) => {\n    if (index !== action.index) {\n      // This isn't the item we care about - keep it as-is\n      return item\n    }\n\n    // Otherwise, this is the one we want - return an updated value\n    return {\n      ...item,\n      ...action.item\n    }\n  })\n}\n")),(0,i.kt)("h2",{id:"immutable-update-utility-libraries"},"Immutable Update Utility Libraries"),(0,i.kt)("p",null,"Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mweststrate/immer"},"Immer")," makes immutable updates a simple function and plain JavaScript objects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var usersState = [{ name: 'John Doe', address: { city: 'London' } }]\nvar newState = immer.produce(usersState, draftState => {\n  draftState[0].name = 'Jon Doe'\n  draftState[0].address.city = 'Paris'\n  //nested update similar to mutable way\n})\n")),(0,i.kt)("p",null,"Some, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/debitoor/dot-prop-immutable"},"dot-prop-immutable"),", take string paths for commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"state = dotProp.set(state, `todos.${index}.complete`, true)\n")),(0,i.kt)("p",null,"Others, like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kolodny/immutability-helper"},"immutability-helper")," (a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var collection = [1, 2, { a: [12, 17, 15] }]\nvar newCollection = update(collection, {\n  2: { a: { $splice: [[1, 1, 13, 14]] } }\n})\n")),(0,i.kt)("p",null,"They can provide a useful alternative to writing manual immutable update logic."),(0,i.kt)("p",null,"A list of many immutable update utilities can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities"},"Immutable Data#Immutable Update Utilities")," section of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/markerikson/redux-ecosystem-links"},"Redux Addons Catalog"),"."),(0,i.kt)("h2",{id:"simplifying-immutable-updates-with-redux-toolkit"},"Simplifying Immutable Updates with Redux Toolkit"),(0,i.kt)("p",null,"Our ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org/"},"Redux Toolkit"))," package includes a ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createReducer"},(0,i.kt)("inlineCode",{parentName:"a"},"createReducer")," utility"),' that uses Immer internally.\nBecause of this, you can write reducers that appear to "mutate" state, but the updates are actually applied immutably.'),(0,i.kt)("p",null,"This allows immutable update logic to be written in a much simpler way. Here's what the ",(0,i.kt)("a",{parentName:"p",href:"#correct-approach-copying-all-levels-of-nested-data"},"nested data example"),"\nmight look like using ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createReducer } from '@reduxjs/toolkit'\n\nconst initialState = {\n  first: {\n    second: {\n      id1: { fourth: 'a' },\n      id2: { fourth: 'b' }\n    }\n  }\n}\n\nconst reducer = createReducer(initialState, {\n  UPDATE_ITEM: (state, action) => {\n    state.first.second[action.someId].fourth = action.someValue\n  }\n})\n")),(0,i.kt)("p",null,"This is clearly ",(0,i.kt)("em",{parentName:"p"},"much")," shorter and easier to read. However, ",(0,i.kt)("strong",{parentName:"p"},"this ",(0,i.kt)("em",{parentName:"strong"},"only"),' works correctly if you are using the "magic"\n',(0,i.kt)("inlineCode",{parentName:"strong"},"createReducer")," function from Redux Toolkit")," that wraps this reducer in Immer's ",(0,i.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/produce"},(0,i.kt)("inlineCode",{parentName:"a"},"produce")," function"),".\n",(0,i.kt)("strong",{parentName:"p"},"If this reducer is used without Immer, it will actually mutate the state!"),". It's also not obvious just by\nlooking at the code that this function is actually safe and updates the state immutably. Please make sure you understand\nthe concepts of immutable updates fully. If you do use this, it may help to add some comments to your code that explain\nyour reducers are using Redux Toolkit and Immer."),(0,i.kt)("p",null,"In addition, Redux Toolkit's ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createSlice"},(0,i.kt)("inlineCode",{parentName:"a"},"createSlice")," utility")," will auto-generate action creators\nand action types based on the reducer functions you provide, with the same Immer-powered update capabilities inside."),(0,i.kt)("h2",{id:"further-information"},"Further Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://daveceddia.com/react-redux-immutability-guide/"},"Dave Ceddia: The Complete Guide to Immutability in React and Redux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/updating-objects-in-state"},"React docs: Updating Objects in State")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/updating-arrays-in-state"},"React docs: Updating Arrays in State"))))}h.isMDXComponent=!0}}]);