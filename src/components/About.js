import { useEffect } from "react";
import Userclass from "./Userclass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent constructor called")
    };
    


 componentDidMount(){
    console.log("Parent did mount call");
}

render(){
    console.log("parent render called")
    return(
        <div>
    <h2>About us page</h2>
    <h1>WHAT WE ARE 😎</h1>
    <Userclass Name = {"Sagar Kashyap"} Location={"Dehradun, Meerut,"} Positions = {"React Developer"}/>
    {/* <Userclass Name = {"second"} Location={"Dehradun, Meerut,"} Positions = {"React Developer"}/> */}
</div>
    )
}
}

export default About;