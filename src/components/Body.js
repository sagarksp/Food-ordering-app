import RestaurantCard,{RestaurantCardPromoted} from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState,useEffect } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { BODY_URL } from "../utils/constants";
import { RestaurantCardPromoted } from "./RestaurantCard";


const Body =()=>{
    //now using live api and use effect
const [Restaurant  ,  setRestaurant] = useState([]);

const [filterres , setfilterres] = useState( []);


const Restwithlabel = RestaurantCardPromoted(RestaurantCard);
// console.log("body rendered"); body re render ho rhi h api k baad jab use state ki value change hogi tab ab harf baart

//create new use state to get searches data 

const [search ,setsearch] = useState("");

useEffect(()=>{
    fetchData(); 
    // Restaurant;
    
},[])

//making use effect function 
const fetchData = async() => {
    
    const data = await fetch(BODY_URL);

    const json = await data.json();
    console.log(json );
    setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    

};

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h2>no internet connection 🤣</h2>
        )
    }

    return filterres.length === 0 ? (
        <Shimmer />
    ) : (
        

        <div className="body ">    
            <div className="filter flex">
                <div className="m-4 p-4">
                <input type="text" className="border border-solid border-black mx-[100px] " value={search}  onChange={(e)=>{
                    setsearch(e.target.value) 
                }} 
                />
    
                <button className="search p-4 px-4 py-2 bg-green-100 rounded-lg ml-[-95px]" onClick={()=>{
                    const filterRest = Restaurant.filter((res) => 
                        
                        // res.data.name.includes(search)
                        // making lower or uppercase 
                        res.info.name.toLowerCase().includes(search.toLowerCase())
                        
                    );
                    setfilterres(filterRest)

                }}>
                    Search</button>
                    
            </div>
            <div className="m-4 p-4 flex items-center ">
            <button  
            className = " p-4 px-4 py-2 bg-green-100 rounded-lg ml-[-50px]"
             onClick={ ()=>{
                const filterList=Restaurant.filter((res) => res.info.avgRating>4);
                setfilterres(filterList)
                console.log(filterList)
                }}>Top rating restaurants
            </button>
            </div>
            
<div className="m-4 p-4 flex items-center ">
    <button className=" p-4 px-4 py-2 bg-green-100 rounded-lg  ml-[-50px]" 
    onClick={ ()=>{

        const time = Restaurant.filter((tim)=>tim.info.deliveryTime<20)
        setfilterres(time)
        console.log(time)
        }}>less time delivery restaurant
    </button>
</div>
    </div>

            <div className="res-container flex flex-wrap justify-center ">
                
                 {filterres.map((res) => (

                    <Link 
                    key = {res.info.id}
                    to={"/restaurants/" + res.info.id}>{
                        res.info.avgRating>4.2 ? <Restwithlabel resData = {res} /> : <RestaurantCard   resData= {res} />
                    }
                    </Link>
                    
                ))};

            </div>
        </div>
        
    );
    

};  


export default Body;