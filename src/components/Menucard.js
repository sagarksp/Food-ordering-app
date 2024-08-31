import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const Menucard = ()=>{
//  const [ResName, setResName] = useState(null);

//  const params = useParams();
//  console.log(params)

const {resid} = useParams();
const resinfo = useRestaurantMenu(resid);



//  useEffect(()=>{
//     fetchData();
//  },[])

//  const fetchData = async()=>{
//     const data = await fetch(MENU_URL + resid);

//     const json = await data.json();
//     console.log(json)
//     setResName(json.data);
//  }

 if (resinfo == null)
   return <Shimmer/>
//  const {name,cuisines} = ResName?.cards[2]?.card?.card?.info;

 const {name, cuisines, avgRating, costForTwoMessage, areaName, totalRatingsString} = resinfo?.cards[2]?.card?.card.info;
 const { itemCards} =resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
//  console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 
//  console.log(itemCards);

 const categories = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
   c?.card?.card?.["@info"] == 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"

 )
 console.log(categories)
 



return(

<div  className=" w-1/2 mx-auto  text-center bg-pink-500 rounded-2xl mb-10 pb-5 ">
   <div className=" bg-slate-400 items-center w-1/2 mx-auto shadow-2xl mt-10">
   <div className="mt-5" >
<h1 className="font-bold">{name}</h1>
<p>{cuisines.join(",")} - {costForTwoMessage} - {areaName}</p>
<p className="font-semibold">{avgRating}⭐</p>
<p className="font-bold">{totalRatingsString}</p>
</div>
   </div>

<h2>Menu</h2>

<ul>

  {itemCards.map((items) => (
      <li key={items.card.info.id}>
         {items.card.info.name} = {"Rs."}{items.card.info.price/100 || items.card.info.defaultprice/100}
      </li>
   ))}
   
</ul>
</div>

)}

export default Menucard;