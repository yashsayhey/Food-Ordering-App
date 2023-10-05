import React from "react";
import { useState, useEffect } from "react";

import Restaurant from "./Restaurant";



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.870860351931427&lng=80.90234968811274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData = await data.json();
        setListOfRestaurants(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
    };
   
    
    return (listOfRestaurants.length === 0) ? <h1>Loading</h1> : (
        <div className="body-parent-element">
            <div className="search-feature-input">
                <input
                type="text"
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}>
                </input>
                <button className="search-feature-button"
                onClick={() => {
                    const resRes = 
                    listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(resRes);
                }}>
                    Search
                </button>
            </div>
            <div className="restaurants" style={{display: "flex"}}>
            {filteredRestaurants.map((res) => (
                <Restaurant key={res.info.id} resData={res} />
            ))}
            </div>
            <div className="top-rated-button-container">
                <button className="top-rated-button"
                        onClick={() => (
                            setFilteredRestaurants(filteredRestaurants.filter(
                            (res) => (res.info.avgRating > 4.1)
                    ))
                )}>
                    See top rated restaurants
                </button>
            </div>
        </div>
    );
};

export default Body;

