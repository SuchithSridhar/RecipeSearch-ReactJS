import React from "react";
import "./recipe.css";

function Recipe({ title, calories, image }) {
    return (
        <div className="recipe-box col-lg-5">
            <h3>{title}</h3>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;
