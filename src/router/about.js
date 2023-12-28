import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Heroimg2 from "../components/Heroimg2";
import Aboutcontent from "../components/AboutContent";


const About = () =>{
    return(
        <div>
            <Navbar />
            <Heroimg2 heading="ABOUT" text="Iam a friendly front-end developer" />
            <Aboutcontent />
            <Footer />
        </div>
    )
}
export default About;