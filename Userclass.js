import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:4,
            count2:1

        }
        console.log(this.props.Name + "Child constructor called")
    };
     componentDidMount(){
        
        console.log(this.props.Name + "Child didmount called ")
        //ye api call krne k liye use hota h
     }

    render(){
        console.log(this.props.Name + "Chilod render called")
        //destructuring 
        const {Name, Location, Positions} =this.props;
        const {count,count2} = this.state
        return(
            
            <div className="about">
                
                <h2>Count = {count}</h2>
                <h2>Count2 = {count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count +1,
                        count2: this.state.count2 +2,
                        
                    })
                }}>click</button>
                <h2>Name = {Name}</h2>
                <h3>Location = {Location}</h3>
                <h2>Position = {Positions}</h2>


                {/* <h2>Name = {this .props.Name}</h2>
                <h3>Location = {this.props.Location}</h3>
                <h2>Position = {this.props.Positions}</h2> */}
            </div>
        )
        
    }


    
}

export default Userclass;