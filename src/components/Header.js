import { URL_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";



const Header = () =>{
        const[btnNameReact , setBtnNameReact] = useState("Login")


    const onlineStatus = useOnlineStatus()
    return(
        
        <div className="flex justify-between bg-pink-200 shadow-xl mx-2 my-2 sticky top-0 z-10">
            

        <div className="logo-container">
            <img 
            className="w-32"
            src={URL_LOGO} alt="123" />
        </div>
    
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    OnlineStatus:{onlineStatus ? "🟢" :"🔴"}
                </li >
                <li className="px-4">
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="px-4">
                    <Link to={"/about"}>About us</Link>
                </li>
                <li className="px-4">
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li className="px-4">
                    <Link to={"/grocery"}>Grocery</Link>
                </li>
                <li className="px-4">
                    Cart
                </li>
                
                <button className="login" onClick={()=>{
                    btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    
                }} >
                    {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
    );
};
export default Header;