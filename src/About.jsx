import React from "react";
import web from "./images/frontenddevelopment.jpg";
import Common from "./Common";



const About = () => {
    return(
        <>
            <Common 
                name="Welcome to About page of " 
                imgsrc={web} 
                visit="/contact"
                btname="Contact Now" 
            />
        </>
    );

};

export default About;
