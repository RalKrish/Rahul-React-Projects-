import React, { useEffect, useState } from "react";
import Meal_Item from "../2/Meal_Item";
import Recipe_Index from "../3/Recipe_Index";

const MEAL = () => {
  const[url,setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const[items,setItem] = useState();
  const[show,setShow] = useState(true);
  const[search,setSearch] = useState("")
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data);
      console.log(data.meals);
      setItem(data.meals)
      setShow(true);
    })
  },[url])

  const setIndex=(alpha)=>{

    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha} `)
  }
  const searchRecipe=(evt)=>{
  if(evt.key=="Enter"){
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  }
}

  return (
    <div>
      <div className="main">
        <div className="heading">
          <h1>Search Your Food Recipe</h1>
          <h4>
            LRahul adipisicing elit. Reprehenderit, dolor accusamus modi odio
            mollitia fugiat.
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyDown={searchRecipe}/>
        </div>
        <div className="container">

          {
            show ?  <Meal_Item data={items}/> :"Sorry"
          }
        </div>

        <div className="indexContainer">
          <Recipe_Index alphaIndex= {(alpha)=>setIndex(alpha)}/>
        </div>
      </div>
    </div>
  );
};

export default MEAL;
