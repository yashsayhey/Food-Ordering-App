Episode: 1 (Pulling react and react-dom)
Inject React and React DOM using CDN links
(another way is via npm as the same code is hosted on npm as well)

parent is not an HTML tag/element. It's a JS object which is a react element.
While it's rendering on DOM, it gets converted to HTML by engine and put on DOM using JS.

If making nested divs is outsourced to React only, it becomes ugly
JSX comes to make our lives easy with tags

**The root of React DOM takes over a tag that we explicilty specify**
**for eg: if I ask React DOM root to take control of body tag, the entire page is controlled by React DOM**
**since entire page was controlled by body tag**
**In code above, I've asked RDOM root to take control of only div tag of id = "root", other than that**
**it has no control over other tags, they have their separate HTML DOM`**

Episode: 2 (Pulling Parcel, the builder tool package (like WebPack)) 
(Iginite the App, build from scratch using npm and parcel) -> Dev related

1. npm to register our own package (npm init) hence package.json
   Need Parcel to build our react app, so added as a dev dependency. 
2. Pulled Parcel (npm install -D parcel), hence package-lock.json and node_modules got created
   npx parcel index.html to execute the parcel package
   parcel builds the app and runs it on local host on port 1234

parcel is doing a lot of stuffs
1. Dev building (enrty point for us, brings a hell lot of other dependencies)
2. Hosting our app on local server
3. HMR = Hot Module Replacement (refershing the local server as soon as the code is saved, i.e Hot Reloading)
4. File watching algorithm - written in C++
5. Caching (.parcel-cache file) - faster builds (built in 70ms, then 40 ms, then 10ms)
   Parcel builds your code in parallel using worker threads, utilizing all of the cores on your machine. Everything is cached, so you never build the same code twice. It's like using watch mode, but even when you restart Parcel!

6. Image optimisation
7. Minification
8. Bundle and compress our file for easier shipping to production
9. Consitent hashing
10. Code splitting
11. Differential bundling - to support older versions of browsers
12. HTTPS config
13. Tree shaking algo - remove unused code for us
14. Beautiful diagnostics 



Pulling React and React DOM from a CDN server is costly because of network call to that server
Preferred way is still to install it using npm and this way it will reside in node_modules
remove CDN links now

now, import React and ReactDOM from node_modules and alter the script tag with type = "module"

npx parcel index.html -> generates dev build and put it in dist folder at local host 1234 -> he who access the local host 1234 can see the rendered page of that build
npx parcel build index.html -> generates prod build files (bundle, compress, minify, cache, tree shake and it's ready) and put it in dist folder at the remote server -> he who access the server can have a great UX. 

browsersList to be followed up.

Episode: 3 (Babel, JSX)
Making command scipt changes in package.json

Babel (transpiler/JS compiler) converts JSX (more readable) to ES6 compatible JS languague
JSX is HTML like language but not similar

JSX -> React.createElement (JS object) -> rendered on browser as HTML element by ES6 engine

React FC:
A JS function that returns a piece of JSX (React Elements as an object)
This FC is rendered.

important - JSX expressions must have one parent element.

So all in all, at the EOD, it's all JSX. Nest as many JSX inside JSX as you wish, just make sure that there's only one parent element in JSX and things are properly initialised first.

Episode: 4 (first time swiggy api as mock and rendering the mock data)
Props passed to a component is same as arguments passed to a function (since FC is a JS function)
Config driven UI
Resuable Components
Optional Chaining (?.)

**Why key (unique id) is required in map? (NO to index as key)**
**No keys <<<<< Index as key <<<< uuid as key**

We saw how to get the data from Swiggy live restaurant API and render it on our web page.

Episode: 5(**useState**, onClick changing state, React Fiber, Virtual DOM, destructuring)

**useState is a utility function given to us by react library**
**It keeps UI Layer and Data Layer in sync (first Data Layer changes then UI Layer changes)** 
**It creates two things: one state variable and one function to update that state variable.**
**Tt takes the initial/default value of that state variable as argumemt**

mostly, when onClick event happens: it calls a call back function, which calls set function of useState and that changes the 
state variable, now state variable gets changed, react calls FC, returns JSX and re-renders the JSX to which that state variable belongs to.
onClick = {() => {
   setStateVariable("do the necessary"); 
}}
setInterval(() =. {

},2000);
**Wheneever a state variable updates, React will re-render my component.**
**React doing DOM manipulation like crazy.**

1. Reconciliation Algorithm (React Fiber) in react 16: 
   **Efficient DOM manipulation**: Finiding diff (between old Virtual DOM and new Virtual DOM after an event takes place) and update the Actual DOM which then updates the UI. 
   Change in **Virtual DOM** means change in **Object representation of the component that is made up of those DOM elements.**

   We make a change in state variable (let's say a list that is fetched from DB), it changes the component object (V DOM), diff finds it out, updates A DOM and UI layer becomes in sync with Data layer.

What we did:
   Get the restaurant array with name and rating, click the button and get > 4 rated ones.
Key learnings:
   1. About key (as key as in key:value of object) passed to child components
   2. When function(FC) has more lines other than the return, use curly braces after arrow for eg: () => {....... return()}
   3. When returning a piece of JSX, only one parent element div/other tag has to be returned, do rest of the business inside that div
   4. map, filter and reduce
   5. named and default imports and exports
   6. object destructuring especially in props (let props = {key: id, resData: []}) and array destructuring in useState()

Episode: 6(**useEffect**, live swiggy API, renders cycle and orchestration, CORS policy, Shimmer UI, Search functionality, onChange)
useEffect

If dependency array is empty, useEffect is called only once (after the first render) no matter how many re-renders happen later.
by render I mean render of that component in which it is called.
If there's no dependency array, it will be called after every render of that component (and when does the component render, when FC is called, when is it called, when state variable changes, when does it change, when onClick, onChange like event happens, who does this event, USER!!!!)
If you provide something as a dependency in dependency array, useEffect will be called everytime the dependency changes.

**(FC CALLED(page loads), RETURN AND RENDER!!!!)**
FC called (page loads) -> list is empty -> when list empty, return LOADER (**Shimmer UI**) -> First render -> useEffect called -> call back calls the API -> list popoulated -> **state variable changed -> FC called -> list not empty -> return JSX code -> Second render with populated data** -> Button clicked for top rating -> state variable again changed (onClick call back) -> FC called -> list not empty -> returns JSX code with upadted list -> Third render


when state variable changes and FC is called again, it starts with a new value for a new state variable, since SV is a const it cannot change the value of old SV directly.
TO DO: Code a search feature

Episode: 7(Routing, react-router, dynamic routing)
rafce




