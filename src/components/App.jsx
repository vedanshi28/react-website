import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route , Routes , Navigate} from 'react-router-dom';

const App=()=>{
    return(
        <>
        <NavBar/>
        <Routes>
         <Route exact="true" path='/' element={<Home />}/>
         <Route exact="true" path='/about' element={<About />}/>
         <Route exact="true" path='/services' element={<Services />}/>
         <Route exact="true" path='/contact' element={<Contact />}/>
         <Route path="/:anything" element={<Navigate replace to='/' />} />
        </Routes>
        <Footer/>
        </>
    )
}
export default App;