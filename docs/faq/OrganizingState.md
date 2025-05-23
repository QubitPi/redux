---
id: organizing-state
title: Organizing State
sidebar_label: Organizing State
---

## Redux FAQ: Organizing State

### Do I have to put all my state into Redux? Should I ever use React's `useState` or `useReducer`?

There is no “right” answer for this. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.

**_Using local component state is fine_**. As a developer, it is _your_ job to determine what kinds of state make up your application, and where each piece of state should live. Find a balance that works for you, and go with it.

Some common rules of thumb for determining what kind of data should be put into Redux:

- Do other parts of the application care about this data?
- Do you need to be able to create further derived data based on this original data?
- Is the same data being used to drive multiple components?
- Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
- Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
- Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

#### Further information

**Articles**

- [When (and when not) to reach for Redux](https://changelog.com/posts/when-and-when-not-to-reach-for-redux)

**Discussions**

- [Reddit: "When should I put something into my Redux store?"](https://www.reddit.com/r/reactjs/comments/4w04to/when_using_redux_should_all_asynchronous_actions/d63u4o8)
- [Stack Overflow: Should all component state be kept in Redux store?](https://stackoverflow.com/questions/35328056/react-redux-should-all-component-states-be-kept-in-redux-store)

### Can I put functions, promises, or other non-serializable items in my store state?

It is highly recommended that you only put plain serializable objects, arrays, and primitives into your store. It's _technically_ possible to insert non-serializable items into the store, but doing so can break the ability to persist and rehydrate the contents of a store, as well as interfere with time-travel debugging.

If you are okay with things like persistence and time-travel debugging potentially not working as intended, then you are totally welcome to put non-serializable items into your Redux store. Ultimately, it's _your_ application, and how you implement it is up to you. As with many other things about Redux, just be sure you understand what tradeoffs are involved.

#### Further information

**Discussions**

- [#1248: Is it ok and possible to store a react component in a reducer?](https://github.com/reduxjs/redux/issues/1248)
- [#1279: Have any suggestions for where to put a Map Component in Flux?](https://github.com/reduxjs/redux/issues/1279)
- [#1390: Component Loading](https://github.com/reduxjs/redux/issues/1390)
- [#1407: Just sharing a great base class](https://github.com/reduxjs/redux/issues/1407)
- [#1793: React Elements in Redux State](https://github.com/reduxjs/redux/issues/1793)

### How do I organize nested or duplicate data in my state?

Data with IDs, nesting, or relationships should generally be stored in a “normalized” fashion: each object should be stored once, keyed by ID, and other objects that reference it should only store the ID rather than a copy of the entire object. It may help to think of parts of your store as a database, with individual “tables” per item type. Libraries such as [redux-orm](https://github.com/tommikaikkonen/redux-orm) can provide help and abstractions in managing normalized data.

#### Further information

**Documentation**

- [Redux Essentials: Normalizing Data](../tutorials/essentials/part-6-performance-normalization#normalizing-data)
- [Redux Fundamentals: Async Logic and Data Flow](../tutorials/fundamentals/part-6-async-logic.md)
- [Redux Fundamentals: Standard Redux Patterns](../tutorials/fundamentals/part-7-standard-patterns.md)
- [Examples: Real World example](../introduction/Examples.md#real-world)
- [Using Redux: Structuring Reducers - Prerequisite Concepts](../usage/structuring-reducers/PrerequisiteConcepts.md#normalizing-data)
- [Using Redux: Structuring Reducers - Normalizing State Shape](../usage/structuring-reducers/NormalizingStateShape.md)

**Articles**

- [Querying a Redux Store](https://medium.com/@adamrackis/querying-a-redux-store-37db8c7f3b0f)

**Discussions**

- [#316: How to create nested reducers?](https://github.com/reduxjs/redux/issues/316)
- [#815: Working with Data Structures](https://github.com/reduxjs/redux/issues/815)
- [#946: Best way to update related state fields with split reducers?](https://github.com/reduxjs/redux/issues/946)
- [#994: How to cut the boilerplate when updating nested entities?](https://github.com/reduxjs/redux/issues/994)
- [#1255: Normalizr usage with nested objects in React/Redux](https://github.com/reduxjs/redux/issues/1255)
- [#1824: Normalising state and garbage collection](https://github.com/reduxjs/redux/issues/1824#issuecomment-228585904)
- [Twitter: state shape should be normalized](https://twitter.com/dan_abramov/status/715507260244496384)
- [Stack Overflow: How to handle tree-shaped entities in Redux reducers?](https://stackoverflow.com/questions/32798193/how-to-handle-tree-shaped-entities-in-redux-reducers)

### Should I put form state or other UI state in my store?

The [same rules of thumb for deciding what should go in the Redux store](#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-usestate-or-usereducer) apply for this question as well.

**Based on those rules of thumb, most form state doesn't need to go into Redux**, as it's probably not being shared between components. However, that decision is always going to be specific to you and your application. You might choose to keep some form state in Redux because you are editing data that came from the store originally, or because you do need to see the work-in-progress values reflected in other components elsewhere in the application. On the other hand, it may be a lot simpler to keep the form state local to the component, and only dispatch an action to put the data in the store once the user is done with the form.

Based on this, in most cases you probably don't need a Redux-based form management library either. We suggest trying these approaches, in this order:

- Even if the data is coming from the Redux store, start by writing your form logic by hand. It's likely this is all you'll need. (See [**Gosha Arinich's posts on working with forms in React**](https://goshakkk.name/on-forms-react/) for some excellent guidance on this.)
- If you decide that writing forms "manually" is too difficult, try a React-based form library like [Formik](https://github.com/jaredpalmer/formik) or [React-Final-Form](https://github.com/final-form/react-final-form).
- If you are absolutely sure you _must_ use a Redux-based form library because the other approaches aren't sufficient, then you may finally want to look at [Redux-Form](https://github.com/erikras/redux-form) and [React-Redux-Form](https://github.com/davidkpiano/react-redux-form).

If you are keeping form state in Redux, you should take some time to consider performance characteristics. Dispatching an action on every keystroke of a text input probably isn't worthwhile, and you may want to look into [ways to buffer keystrokes to keep changes local before dispatching](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/). As always, take some time to analyze the overall performance needs of your own application.

Other kinds of UI state follow these rules of thumb as well. The classic example is tracking an `isDropdownOpen` flag. In most situations, the rest of the app doesn't care about this, so in most cases it should stay in component state. However, depending on your application, it may make sense to use Redux to [manage dialogs and other popups](https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/), tabs, expanding panels, and so on.

#### Further Information

**Articles**

- [Gosha Arinich: Writings on Forms in React](https://goshakkk.name/on-forms-react/)
- [Practical Redux, Part 6: Connected Lists and Forms](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/)
- [Practical Redux, Part 7: Form Change Handling](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-7-forms-editing-reducers/)
- [Practical Redux, Part 10: Managing Modals and Context Menus](https://blog.isquaredsoftware.com/2017/07/practical-redux-part-10-managing-modals/)
- [React/Redux Links: Redux UI Management](https://github.com/markerikson/react-redux-links/blob/master/redux-ui-management.md)
