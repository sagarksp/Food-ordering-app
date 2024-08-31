import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props)
console.log("child constructor called")
        this.state = {
            userInfo:{
                name:"dummy",
                location:"dummy",
            }
        }
    }


 async componentDidMount () {
    //api call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    console.log("child did mount called")
    this.setState({
        userInfo:json
    })

}

render(){

    const {name,location,avatar_url} = this.state.userInfo
    console.log("child render called")
    return(
        <div>
         <img src={avatar_url}/>   
        <h1>{name}</h1>
        <h1>{location}</h1>
        </div>
    )
    
}

}

export default Userclass;