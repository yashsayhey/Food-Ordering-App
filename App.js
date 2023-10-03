import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer  from "./src/components/Footer";
import { restaurantsList } from "./rough/swiggyRestaurantAPI";


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

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    
    const [restaurants, setRestaurants] = useState(restaurantsList.restaurants);
    
    return (
    <div className="applayout-parent-element">
        <div className="restaurants" style={{display: "flex"}}>
         {restaurants.map((res) => (
            <div>
                <h3>{res.info.name}</h3>
                <h3>{res.info.avgRating}</h3>
            </div>
         ))}
        </div>
        <div className="button-container">
            <button className="filer-btn"
                    onClick={() => {
                        setRestaurants(restaurants.filter(
                        (res) => (res.info.avgRating > 4)
                ))
            }}>
                See top rated restaurants
            </button>
        </div>
    </div>
    );
};

root.render(<AppLayout/>);