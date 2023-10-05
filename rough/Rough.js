import React from "react";
import ReactDOM  from "react-dom/client";


/**
 * AppLayout (Home Page)
 *  -Header
 *      -Logo
 *      -User's Profile icon (login/signup)
 *      -User's Profile drop down
 *      -Search 
 *      -Location detector
 *  -Body
 *      -Restaurant Card
 *      -Filter Restaurants 
 *      -Food Card
 *      -Filter Foods
 *  -Footer
 *      -About
 *      -Contact
 *      -Social links
 */

/*
parent is not an HTML tag/element. It's a JS object which is a react element.
While it's rendering on DOM, it gets converted to HTML by engine and put on DOM using JS.
*/
// const parent = React.createElement("div", {id: "parent"}, 
// React.createElement("div", {id: "child"}, 
// React.createElement("h1", {id: "head"}, "This heading is inside nested divs")));

/*
The root of React DOM takes over a tag that we explicilty specify
for eg: if I ask React DOM root to take control of body tag, the entire page is controlled by React DOM
since entire page was controlled by body tag
In code above, I've asked RDOM root to take control of only div tag of id = "root", other than that
it has no control over other tags, they have their separate HTML DOM`
*/
const rootDom = ReactDOM.createRoot(document.getElementById("root"));
 
/*
If making nested divs is outsourced to React only, it becomes ugly
JSX comes to make our lives easy with tags
Babel (transpiler/JS compiler) converts JSX (more readable) to ES6 compatible JS languague
JSX is HTML like language but not similar
JSX -> React.createElement (JS object) -> rendered on browser as HTML element by ES6 engine
React Element
*/
//const parent2 = React.createElement("h1", {}, "JSX enters. ");
// const parent2 = (
// <h1>JSX enters. </h1>
// );

/*
React FC:
A JS function that returns a piece of JSX (React Elements as an object)
*/
const Title = () => (
    <h1 id = "title"> I'm Title FC, above Heading FC</h1>
);

//This is a special number for me
const test = 1423;
const jsxTest = (
    <h4>Testing</h4>
);

/*
This is Heading FC
It conrains Title FC inside it
This is called Component Composition
 */
const Heading = () => (
    <div id = "parent-element">
        <Title />
        <h1 className="heading"> I'm Heading FC!</h1>
        <p>
            Printing this {'->'} {test} here
            to show that JSX can include JS code as well.
        </p>
        <div>
            Prinitng this {'->'} {jsxTest} here
            to show that JSX can include another JSX as well.
        </div>
    </div>
);

rootDom.render(<Heading />);