"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5014],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6081:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"react-redux",title:"React Redux",sidebar_label:"React Redux"},s="Redux FAQ: React Redux",p={unversionedId:"faq/react-redux",id:"faq/react-redux",title:"React Redux",description:"Table of Contents",source:"@site/../docs/faq/ReactRedux.md",sourceDirName:"faq",slug:"/faq/react-redux",permalink:"/redux/faq/react-redux",draft:!1,editUrl:"https://github.com/reduxjs/redux/edit/master/website/../docs/faq/ReactRedux.md",tags:[],version:"current",lastUpdatedAt:1694574625,formattedLastUpdatedAt:"Sep 13, 2023",frontMatter:{id:"react-redux",title:"React Redux",sidebar_label:"React Redux"},sidebar:"docs",previous:{title:"Design Decisions",permalink:"/redux/faq/design-decisions"},next:{title:"Miscellaneous",permalink:"/redux/faq/miscellaneous"}},u={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"React Redux",id:"react-redux",level:2},{value:"Why should I use React-Redux?",id:"why-should-i-use-react-redux",level:3},{value:"Further Information",id:"further-information",level:4},{value:"Why isn&#39;t my component re-rendering, or my mapStateToProps running?",id:"why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running",level:3},{value:"Further information",id:"further-information-1",level:4},{value:"Why is my component re-rendering too often?",id:"why-is-my-component-re-rendering-too-often",level:3},{value:"Further information",id:"further-information-2",level:4},{value:"How can I speed up my <code>mapStateToProps</code>?",id:"how-can-i-speed-up-my-mapstatetoprops",level:3},{value:"Further information",id:"further-information-3",level:4},{value:"Why don&#39;t I have <code>this.props.dispatch</code> available in my connected component?",id:"why-dont-i-have-thispropsdispatch-available-in-my-connected-component",level:3},{value:"Further information",id:"further-information-4",level:4},{value:"Should I only connect my top component, or can I connect multiple components in my tree?",id:"should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree",level:3},{value:"Further information",id:"further-information-5",level:4},{value:"How does Redux compare to the React Context API?",id:"how-does-redux-compare-to-the-react-context-api",level:3},{value:"Further information",id:"further-information-6",level:4}],m={toc:c},d="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redux-faq-react-redux"},"Redux FAQ: React Redux"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#redux-faq-react-redux"},"Redux FAQ: React Redux"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#react-redux"},"React Redux"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-should-i-use-react-redux"},"Why should I use React-Redux?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information"},"Further Information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"},"Why isn't my component re-rendering, or my mapStateToProps running?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-1"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-is-my-component-re-rendering-too-often"},"Why is my component re-rendering too often?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-2"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-can-i-speed-up-my-mapstatetoprops"},"How can I speed up my ",(0,o.kt)("inlineCode",{parentName:"a"},"mapStateToProps"),"?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-3"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why-dont-i-have-thispropsdispatch-available-in-my-connected-component"},"Why don't I have ",(0,o.kt)("inlineCode",{parentName:"a"},"this.props.dispatch")," available in my connected component?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-4"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"},"Should I only connect my top component, or can I connect multiple components in my tree?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-5"},"Further information")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-does-redux-compare-to-the-react-context-api"},"How does Redux compare to the React Context API?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#further-information-6"},"Further information"))))))))),(0,o.kt)("h2",{id:"react-redux"},"React Redux"),(0,o.kt)("h3",{id:"why-should-i-use-react-redux"},"Why should I use React-Redux?"),(0,o.kt)("p",null,"Redux itself is a standalone library that can be used with any UI layer or framework, including React, Angular, Vue, Ember, and vanilla JS. Although Redux and React are commonly used together, they are independent of each other."),(0,o.kt)("p",null,'If you are using Redux with any kind of UI framework, you will normally use a "UI binding" library to tie Redux together with your UI framework, rather than directly interacting with the store from your UI code.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React-Redux is the official Redux UI binding library for React"),". If you are using Redux and React together, you should also use React-Redux to bind these two libraries."),(0,o.kt)("p",null,"While it is possible to write Redux store subscription logic by hand, doing so would become very repetitive. In addition, optimizing UI performance would require complicated logic."),(0,o.kt)("p",null,"The process of subscribing to the store, checking for updated data, and triggering a re-render can be made more generic and reusable. ",(0,o.kt)("strong",{parentName:"p"},"A UI binding library like React-Redux handles the store interaction logic, so you don't have to write that code yourself.")),(0,o.kt)("p",null,"Overall, React-Redux encourages good React architecture, and implements complex performance optimizations for you. It is also kept up-to-date with the latest API changes from Redux and React."),(0,o.kt)("h4",{id:"further-information"},"Further Information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://react-redux.js.org/introduction/why-use-react-redux"},"React-Redux docs: Why Use React-Redux?")))),(0,o.kt)("h3",{id:"why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running"},"Why isn't my component re-rendering, or my mapStateToProps running?"),(0,o.kt)("p",null,"Accidentally mutating or modifying your state directly is by far the most common reason why components do not re-render after an action has been dispatched. Redux expects that your reducers will update their state \u201cimmutably\u201d, which effectively means always making copies of your data, and applying your changes to the copies. If you return the same object from a reducer, Redux assumes that nothing has been changed, even if you made changes to its contents. Similarly, React Redux tries to improve performance by doing shallow equality reference checks on incoming props in ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),", and if all references are the same, ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to skip actually updating your original component."),(0,o.kt)("p",null,"It's important to remember that whenever you update a nested value, you must also return new copies of anything above it in your state tree. If you have ",(0,o.kt)("inlineCode",{parentName:"p"},"state.a.b.c.d"),", and you want to make an update to ",(0,o.kt)("inlineCode",{parentName:"p"},"d"),", you would also need to return new copies of ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),". This ",(0,o.kt)("a",{parentName:"p",href:"http://arqex.com/wp-content/uploads/2015/02/trees.png"},"state tree mutation diagram")," demonstrates how a change deep in a tree requires changes all the way up."),(0,o.kt)("p",null,"Note that \u201cupdating data immutably\u201d does ",(0,o.kt)("em",{parentName:"p"},"not")," mean that you must use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"Immer"),", although that is certainly an option. You can do immutable updates to plain JS objects and arrays using several different approaches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copying objects using functions like ",(0,o.kt)("inlineCode",{parentName:"li"},"Object.assign()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"_.extend()"),", and array functions such as ",(0,o.kt)("inlineCode",{parentName:"li"},"slice()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"concat()")),(0,o.kt)("li",{parentName:"ul"},"The array spread operator in ES6, and the similar object spread operator that is proposed for a future version of JavaScript"),(0,o.kt)("li",{parentName:"ul"},"Utility libraries that wrap immutable update logic into simpler functions")),(0,o.kt)("h4",{id:"further-information-1"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/troubleshooting"},"Troubleshooting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-redux.js.org/troubleshooting"},"React Redux: Troubleshooting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/structuring-reducers/prerequisite-concepts"},"Using Redux: Structuring Reducers - Prerequisite Concepts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/structuring-reducers/immutable-update-patterns"},"Using Redux: Structuring Reducers - Immutable Update Patterns"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/"},"Pros and Cons of Using Immutability with React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/immutable-data.md"},"React/Redux Links: Immutable Data"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1262"},"#1262: Immutable data + bad performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/235"},"React Redux #235: Predicate function for updating component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/291"},"React Redux #291: Should mapStateToProps be called every time an action is dispatched?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35592078/cleaner-shorter-way-to-update-nested-state-in-redux"},"Stack Overflow: Cleaner/shorter way to update nested state in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gist.github.com/amcdnl/7d93c0c67a9a44fe5761#gistcomment-1706579"},"Gist: state mutations"))),(0,o.kt)("h3",{id:"why-is-my-component-re-rendering-too-often"},"Why is my component re-rendering too often?"),(0,o.kt)("p",null,"React Redux implements several optimizations to ensure your actual component only re-renders when actually necessary. One of those is a shallow equality check on the combined props object generated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," arguments passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"connect"),". Unfortunately, shallow equality does not help in cases where new array or object instances are created each time ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," is called. A typical example might be mapping over an array of IDs and returning the matching object references, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapStateToProps = state => {\n  return {\n    objects: state.objectIds.map(id => state.objects[id])\n  }\n}\n")),(0,o.kt)("p",null,"Even though the array might contain the exact same object references each time, the array itself is a different reference, so the shallow equality check fails and React Redux would re-render the wrapped component."),(0,o.kt)("p",null,"The extra re-renders could be resolved by saving the array of objects into the state using a reducer, caching the mapped array using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"Reselect"),", or implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate")," in the component by hand and doing a more in-depth props comparison using a function such as ",(0,o.kt)("inlineCode",{parentName:"p"},"_.isEqual"),". Be careful to not make your custom ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate()")," more expensive than the rendering itself! Always use a profiler to check your assumptions about performance."),(0,o.kt)("p",null,"For non-connected components, you may want to check what props are being passed in. A common issue is having a parent component re-bind a callback inside its render function, like ",(0,o.kt)("inlineCode",{parentName:"p"},"<Child onClick={this.handleClick.bind(this)} />"),". That creates a new function reference every time the parent re-renders. It's generally good practice to only bind callbacks once in the parent component's constructor."),(0,o.kt)("h4",{id:"further-information-2"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/faq/performance#performance-scaling"},"FAQ: Performance - Scaling"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://benchling.engineering/a-deep-dive-into-react-perf-debugging-fd2063f5a667"},"A Deep Dive into React Perf Debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f"},"React.js pure render performance anti-pattern")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rangle.io/blog/react-and-redux-performance-with-reselect/"},"Improving React and Redux Performance with Reselect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://randycoulman.com/blog/2016/09/13/encapsulating-the-redux-state-tree/"},"Encapsulating the Redux State Tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md"},"React/Redux Links: React/Redux Performance"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34782249/can-a-react-redux-app-really-scale-as-well-as-say-backbone-even-with-reselect"},"Stack Overflow: Can a React Redux app scale as well as Backbone?"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Libraries")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/redux-ecosystem-links/blob/master/devtools.md#component-update-monitoring"},"Redux Addons Catalog: DevTools - Component Update Monitoring"))),(0,o.kt)("h3",{id:"how-can-i-speed-up-my-mapstatetoprops"},"How can I speed up my ",(0,o.kt)("inlineCode",{parentName:"h3"},"mapStateToProps"),"?"),(0,o.kt)("p",null,"While React Redux does work to minimize the number of times that your ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," function is called, it's still a good idea to ensure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," runs quickly and also minimizes the amount of work it does. The common recommended approach is to create memoized \u201cselector\u201d functions using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"Reselect"),". These selectors can be combined and composed together, and selectors later in a pipeline will only run if their inputs have changed. This means you can create selectors that do things like filtering or sorting, and ensure that the real work only happens if needed."),(0,o.kt)("h4",{id:"further-information-3"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/usage/deriving-data-selectors"},"Using Redux: Deriving Data with Selectors"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rangle.io/blog/react-and-redux-performance-with-reselect/"},"Improving React and Redux Performance with Reselect"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/815"},"#815: Working with Data Structures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect/issues/47"},"Reselect #47: Memoizing Hierarchical Selectors"))),(0,o.kt)("h3",{id:"why-dont-i-have-thispropsdispatch-available-in-my-connected-component"},"Why don't I have ",(0,o.kt)("inlineCode",{parentName:"h3"},"this.props.dispatch")," available in my connected component?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," function takes two primary arguments, both optional. The first, ",(0,o.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),", is a function you provide to pull data from the store when it changes, and pass those values as props to your component. The second, ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", is a function you provide to make use of the store's ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," function, usually by creating pre-bound versions of action creators that will automatically dispatch their actions as soon as they are called."),(0,o.kt)("p",null,"If you do not provide your own ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," function when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()"),", React Redux will provide a default version, which simply returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," function as a prop. That means that if you ",(0,o.kt)("em",{parentName:"p"},"do")," provide your own function, ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," is ",(0,o.kt)("em",{parentName:"p"},"not")," automatically provided. If you still want it available as a prop, you need to explicitly return it yourself in your ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," implementation."),(0,o.kt)("h4",{id:"further-information-4"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://react-redux.js.org/api/connect"},"React Redux API: connect()"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/89"},"React Redux #89: can i wrap multi actionCreators into one props with name?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/145"},"React Redux #145: consider always passing down dispatch regardless of what mapDispatchToProps does")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/255"},"React Redux #255: this.props.dispatch is undefined if using mapDispatchToProps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux/34458710%5D"},"Stack Overflow: How to get simple dispatch from this.props using connect w/ Redux?"))),(0,o.kt)("h3",{id:"should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree"},"Should I only connect my top component, or can I connect multiple components in my tree?"),(0,o.kt)("p",null,"Early Redux documentation advised that you should only have a few connected components near the top of your component tree. However, time and experience has shown that such a component architecture generally requires a few components to know too much about the data requirements of all their descendants, and forces them to pass down a confusing number of props."),(0,o.kt)("p",null,"The current suggested best practice is to categorize your components as \u201cpresentational\u201d or \u201ccontainer\u201d components, and extract a connected container component wherever it makes sense:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Emphasizing \u201cone container component at the top\u201d in Redux examples was a mistake. Don't take this as a maxim. Try to keep your presentation components separate. Create container components by connecting them when it's convenient. Whenever you feel like you're duplicating code in parent components to provide data for same kinds of children, time to extract a container. Generally as soon as you feel a parent knows too much about \u201cpersonal\u201d data or actions of its children, time to extract a container.")),(0,o.kt)("p",null,"In fact, benchmarks have shown that more connected components generally leads to better performance than fewer connected components."),(0,o.kt)("p",null,"In general, try to find a balance between understandable data flow and areas of responsibility with your components."),(0,o.kt)("h4",{id:"further-information-5"},"Further information"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/tutorials/fundamentals/part-5-ui-react"},"Fundamentals: UI and React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/redux/faq/performance#performance-scaling"},"FAQ: Performance - Scaling"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Articles")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"},"Presentational and Container Components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://somebody32.github.io/high-performance-redux/"},"High-Performance Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-redux-architecture.md#redux-architecture"},"React/Redux Links: Architecture - Redux Architecture")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance"},"React/Redux Links: Performance - Redux Performance"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Discussions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/dan_abramov/status/668585589609005056"},"Twitter: emphasizing \u201cone container\u201d was a mistake")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/419"},"#419: Recommended usage of connect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/756"},"#756: container vs component?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/1176"},"#1176: Redux+React with only stateless components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34992247/can-a-dumb-component-use-render-redux-container-component"},"Stack Overflow: can a dumb component use a Redux container?"))),(0,o.kt)("h3",{id:"how-does-redux-compare-to-the-react-context-api"},"How does Redux compare to the React Context API?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Similarities")),(0,o.kt)("p",null,'Both Redux and React\'s Context API deal with "prop drilling". That said, they both allow you to pass data without having to pass the props through multiple layers of components. Internally, Redux ',(0,o.kt)("em",{parentName:"p"},"uses")," the React context API that allows it to pass the store along your component tree."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Differences")),(0,o.kt)("p",null,"With Redux, you get the power of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools/tree/main/extension"},"Redux Dev Tools Extension"),". It automatically logs every action your app performs, and it allows time traveling \u2013 you can click on any past action and jump to that point in time. Redux also supports the concept of middleware, where you may bind customized function calls on every action dispatch. Such examples include an automatic event logger, interception of certain actions, etc."),(0,o.kt)("p",null,"With React's Context API, you deal with a pair of components speaking only to each other. This gives you nice isolation between irrelevant data. You also have the flexibility of how you may use the data with your components, i.e., you can provide the state of a parent component, and you may pass context data as props to wrapped components."),(0,o.kt)("p",null,"There is a key difference in how Redux and React's Context treat data. Redux maintains the data of your whole app in a giant, stateful object. It deduces the changes of your data by running the reducer function you provide, and returns the next state that corresponds to every action dispatched. React Redux then optimizes component rendering and makes sure that each component re-renders only when the data it needs change. Context, on the other hand, does not hold any state. It is only a conduit for the data. To express changes in data you need to rely on the state of a parent component."),(0,o.kt)("h4",{id:"further-information-6"},"Further information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://changelog.com/posts/when-and-when-not-to-reach-for-redux"},"When (and when not) to reach for Redux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://daveceddia.com/context-api-vs-redux/"},"Redux vs. The React Context API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.simplethread.com/cant-replace-redux-with-hooks/"},"You Might Not Need Redux (But You Can\u2019t Replace It With Hooks)"))))}h.isMDXComponent=!0}}]);