import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body =()=>{
    //now using live api and use effect
let [Restaurant,setRestaurant] = useState([]);

useEffect(()=>{
    fetchData();
},[])

//making use effect function 
const fetchData = async() => {
    
    const data = await fetch(
       resList
    );

    const json = await data.json();
    console.log(json);
    setRestaurant(json.resList);
}

    return(
        <div className="body">
            <button onClick={ ()=>{
                const filterList=restaurant.filter((res) => res.data.avgRating>4);
                setRestaurant(filterList)
                console.log(filterList)
         
    }}>Top rating restaurants</button>

    <button onClick={ ()=>{

        const time = restaurant.filter((tim)=>tim.data.deliveryTime<30)
        setRestaurant(time)
        console.log(time)
    }}>less time delivery restaurant</button>

            <div className="res-container">

{/* // * looping through the <RestaurentCard /> components Using Array.map() method */}


{/*RESLIST KI JO 15 VALUE H WO RESTAURANT M CHALI GYI    ======  FIR HUMNE USE REASTAURANT CARD M JO PROPS I.E (RESDATA ) K EQUAL KR DUYA  */}
                {Restaurant.map((restaurant) => (
                    <RestaurantCard  key = {restaurant.data.id} resData= {restaurant} />
                ))};

            </div>
        </div>
    );

};

export default Body;