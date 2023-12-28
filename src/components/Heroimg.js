import "./Hero.css";
import React from "react";
import Introimg from "../image/intro-bg.jpg";
import {Link} from "react-router-dom";

const Heroimg = ()=>{
    return(
        <div className="hero">
            <div className="mask">
                <img src={Introimg} alt="Introimg" className="intro-img"></img>
            </div>
            <div className="content">
                <p>
                    HI I'M FREELANCER.
                </p>
                <h1>Web Developer</h1>
                <div  className="">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
            
        </div>
    )
};
export default Heroimg;