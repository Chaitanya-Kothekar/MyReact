import { useState } from "react";
import { LOGO_URL } from "../utils/Constaints";

const Header = () =>{

   const [btnChange , setbtnChange] = useState("login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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