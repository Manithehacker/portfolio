import "./footer.css";
import {FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

import React from "react";


const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:'#fff',marginRight:"2rem"}} />
                    
                        <div className="">
                        <p>123 Housing Society</p>
                        <p>India</p>
                        </div>
                    </div>    
                    <div className="phone">
                     <h4><FaPhone size={20} style={{color:'#fff',marginRight:"2rem"}} />1-2323-34-6787</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:"2rem"}} /> info@gmail.com</h4>
                    </div>

                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>
                        This is me  Manikandan.
                        I am a FREELANCER
                    </p>
                    <div className="social">
                    <FaFacebook size={20} style={{color:'#fff',marginRight:"2rem"}} />
                    <FaTwitter size={20} style={{color:'#fff',marginRight:"2rem"}} />
                    <FaLinkedin size={20} style={{color:'#fff',marginRight:"2rem"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;