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



userclass
// import React from "react";

// class Userclass extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count:4,
//             count2:1

//         }
//         console.log(this.props.Name + "Child constructor called")
//     };
//      componentDidMount(){
        
//         console.log(this.props.Name + "Child didmount called ")
//         //ye api call krne k liye use hota h
//      }

//     render(){
//         console.log(this.props.Name + "Chilod render called")
//         //destructuring 
//         const {Name, Location, Positions} =this.props;
//         const {count,count2} = this.state
//         return(
            
//             <div className="about">
                
//                 <h2>Count = {count}</h2>
//                 <h2>Count2 = {count2}</h2>
//                 <button onClick={()=>{
//                     this.setState({
//                         count: this.state.count +1,
//                         count2: this.state.count2 +2,
                        
//                     })
//                 }}>click</button>
//                 <h2>Name = {Name}</h2>
//                 <h3>Location = {Location}</h3>
//                 <h2>Position = {Positions}</h2>


//                 {/* <h2>Name = {this .props.Name}</h2>
//                 <h3>Location = {this.props.Location}</h3>
//                 <h2>Position = {this.props.Positions}</h2> */}
//             </div>
//         )
        
//     }


    
// }

// export default Userclass;