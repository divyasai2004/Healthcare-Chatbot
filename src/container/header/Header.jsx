import React from "react";
import "./header.css";
import Plan from "../../component/plan/Plan";


const Header = () =>{
    return(
        <div className="headers">
            <h1 className="name">HealthBot</h1>
            <Plan/>
        </div>
    )
}

export default Header;