import React from "react";

const Restaurant = (props) => {
    const {resData} = props;
    return(
        <div className="restaurant-parent-element">
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.avgRating}</h3>
        </div>
    );

};
export default Restaurant;