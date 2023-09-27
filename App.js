const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {id: "head"}, "This heading is inside nested divs")));
const rootDom = ReactDOM.createRoot(document.getElementById("root"));



//parent is not an HTML tag/element. It's a JS object which is a react element.
//While it's rendering on DOM, it gets converted to HTML by engine and put on DOM using JS.


rootDom.render(parent);

//If making nested divs is outsourced to React only, it becomes ugly
//JSX comes to make our lives easy with tags

//The root of React DOM takes over a tag that we explicilty specify
//for eg: if I ask React DOM root to take control of body tag, the entire page is controlled by React DOM
//since entire page was controlled by body tag
//In code above, I've asked RDOM root to take control of only div tag of id = "root", other than that
//it has no control over other tags, they have their separate HTML DOM`