import React from "react";
import { useNavigate } from "react-router";

const Meal_Item = ({ data }) => {
  console.log(data);
let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not found "
        : data.map((items) => {
            return (
              <div className="card" key={items.idMeal} onClick={()=>{navigate(`/${items.idMeal}`)}}>
                <img src={items.strMealThumb}></img>
                <h3>{items.strMeal}</h3>
              </div>
            );
          })}
    </>
  );
};

export default Meal_Item;
