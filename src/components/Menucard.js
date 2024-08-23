import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

const Menucard = ()=>{
 const [ResName, setResName] = useState(null);

//  const params = useParams();
//  console.log(params)

const {resid} = useParams();



 useEffect(()=>{
    fetchData();
 },[])

 const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=435678&catalog_qa=undefined&submitAction=ENTER");

    const json = await data.json();
    console.log(json)
    setResName(json.data);
 }

 if (ResName == null)
   return <Shimmer/>
//  const {name,cuisines} = ResName?.cards[2]?.card?.card?.info;

 const {name, cuisines, avgRating, costForTwoMessage, areaName} = ResName?.cards[2]?.card?.card.info;
 const { itemCards} =ResName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
 
 console.log(itemCards);
return(

<div  className="menu">
<h1>{name}</h1>
<p>{cuisines.join(",")} - {costForTwoMessage} - {areaName}</p>
<p>{avgRating}</p>

<h2>Menu</h2>

<ul>

  {itemCards.map((items) => (
      <li key={items.card.info.id}>
         {items.card.info.name} = {"Rs."}{items.card.info.price/100}
      </li>
   ))}
   
</ul>
</div>

)}

export default Menucard;