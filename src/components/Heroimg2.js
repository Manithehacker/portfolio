import "./Heroimg2.css";

import React from "react";

const Heroimg2 =(props)=>{
    return(
        <div className="hero-img" style={{color:'#fff'}}>
            <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>    
        </div>
    )
}

export default Heroimg2;