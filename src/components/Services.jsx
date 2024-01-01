import React from "react";
import Card from "./Card";
import Sdata from './Sdata'

const Services=()=>{
    return(
        <>
        <div className="my-5">
            <h3 className="text-center mb-4">Our Services</h3>
            <div className="container-fluid mb-5">
           <div className="row">
             <div className="col-10 mx-auto">
             <div className="row gy-4">
               {
                Sdata.map((currval,index)=>{
                    return <Card
                     imgsrc={currval.imgsrc}
                     title={currval.title}
                     key={index}
                    />
                })
               }
             </div>
             </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Services;