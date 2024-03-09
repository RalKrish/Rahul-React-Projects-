import React, { useState } from "react";
import { Params, useParams } from "react-router";

const Recipe_Info = () => {
  const [theItem, setTheitem] = useState();
  const { MealId } = useParams();
  if (MealId != "") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setTheitem(data.meals[0]);
        console.log(data.meals[0]);
      });
  }
  return (
    <>
      {!theItem ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={theItem.strMealThumb}></img>
            <div className="inner-content">
              <h1>{theItem.strMeal}</h1>
              <h2>{theItem.strArea} Food </h2>
              <h3>Category{theItem.strCategory}</h3>
            </div>
          </div>
          <div className="recipe-details">
            <div className="ingredients">
              <h2>Ingredients</h2>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
              <h4>
                {theItem.strIngredient1}: {theItem.strMeasure1}
              </h4>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <h4>{theItem.strInstructions}</h4>
            </div>
          </div>
          <div className="video">
            <iframe src={`https://www.youtube.com/embed/${theItem.strYoutube.split('v=')[1]}`}></iframe>
          </div>
        </>
      )}
    </>
  );
};

export default Recipe_Info;
