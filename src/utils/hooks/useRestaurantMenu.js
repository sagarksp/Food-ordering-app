 import { useState,useEffect } from "react";
 import { MENU_URL } from "../constants";

 const useRestaurantMenu = (resid)=>{
 
    const [resinfo , setresinfo] = useState(null)

    useEffect(()=>{
        fetchData()
    },[]);

//fetching data
const fetchData = async ()=>{
    const data = await fetch(MENU_URL+ resid);
    
    const json = await data.json();
    setresinfo(json.data);
}
  return (
    resinfo
  )

 }

 export default useRestaurantMenu;