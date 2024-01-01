import React from "react";
import about from '../images/about.png';
import Common from "./Common";

const About=()=>{
    return(
        <>
        <Common name="Welcome to About Page" 
        imgsrc={about}
         visit="/contact" 
         btname="Contact Now"
         />
        </>
    )
}
export default About;