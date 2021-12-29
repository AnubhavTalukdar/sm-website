import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import NF from "../assets/img/NotFound.png";

function NotFound(){
    return(
        <>
        <Navbar />
        <div className="center-section py-5 container-fluid bg-newspaper" >
            <div className="box">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                        <div className="row">
                            <div className="col-12 text-center px-lg-0 px-md-0 px-5 py-lg-0 py-md-0 py-5">
                                <img src={NF} alt="" className="not-found" />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
                </div> 
            </div>
        </div>
        
        </>
    )
}

export default NotFound;