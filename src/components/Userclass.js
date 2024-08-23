import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props)

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

    this.setState({
        userInfo:json
    })

}

render(){

    const {name,location,avatar_url} = this.state.userInfo

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