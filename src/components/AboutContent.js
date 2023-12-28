import "./aboutcontent.css";
import {Link} from "react-router-dom";
import React from "react";
import react1 from "../image/react1.jpg";
import react2 from "../image/react2.webp";

const abouotcontent = () =>{
    return(
        <div className="about">
            <div className="left">
                <h1>who iam i</h1>
                <p>Iam a React developer ,I create
                    responsive secure website for my clients
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="test"></img>

                    </div>
                     <div className="img-stack bottom">
                        <img src={react2} className="img" alt="test"></img>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default abouotcontent;