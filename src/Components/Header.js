import { useState } from "react";
import { LOGO_URL } from "../utils/Constaints";
import { Link } from "react-router-dom";

const Header = () =>{

   const [btnChange , setbtnChange] = useState("login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                    
                    <li>
                        <button className="login-btn" onClick={()=>{
                           btnChange === "login" ? setbtnChange("logout") : setbtnChange("login");
                        }}>{btnChange}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;