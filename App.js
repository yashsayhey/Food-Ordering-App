import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./src/components/Header";
import Body from "./src/components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
    <div className="applayout-parent-element">
        <Body/>
    </div>  
);

root.render(<AppLayout/>);