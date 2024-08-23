import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";


const Body =()=>{
    //now using live api and use effect
const [Restaurant  ,  setRestaurant] = useState([]);

const [filterres , setfilterres] = useState( []);

// console.log("body rendered"); body re render ho rhi h api k baad jab use state ki value change hogi tab ab harf baart

//create new use state to get searches data 

const [search ,setsearch] = useState("");

useEffect(()=>{
    fetchData(); 
    // Restaurant;
    
},[])

//making use effect function 
const fetchData = async() => {
    
    const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json );
    setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    

};

    return filterres.length === 0 ? (
        <Shimmer />
    ) : (
        

        <div className="body">
            


            <div className="search-box">


                <input type="text" value={search}  onChange={(e)=>{
                    setsearch(e.target.value) 
                    
                }} 
                />
    

                <button className="search" onClick={()=>{
                    const filterRest = Restaurant.filter((res) => 
                        
                        // res.data.name.includes(search)
                        // making lower or uppercase 
                        res.info.name.toLowerCase().includes(search.toLowerCase())
                        
                    );
                    setfilterres(filterRest)

                }}>
                    Search</button>
                    


            </div>
            <button onClick={ ()=>{
                const filterList=Restaurant.filter((res) => res.info.avgRating>4);
                setfilterres(filterList)
                console.log(filterList)
                }}>Top rating restaurants
            </button>



    <button onClick={ ()=>{

        const time = Restaurant.filter((tim)=>tim.info.deliveryTime<30)
        setfilterres(time);
        console.log(time)
        }}>less time delivery restaurant
    </button>

            <div className="res-container">
                
                 {filterres.map((res) => (

                    <Link 
                    key = {res.info.id}
                    to={"/restaurants/" + res.info.id}><RestaurantCard   resData= {res} /></Link>
                    
                ))};

            </div>
        </div>
        
    );
    

};  


export default Body;