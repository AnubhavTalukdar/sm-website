import React from "react";
import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import NF from "../assets/img/NotFound.png";
import divider from "../assets/img/divider.png";

function NotFound(){
    return(
        <>
        <Navbar2 />
        <div className="center-section py-5 container-fluid bg-newspaper" >
            <div className="box additional-bottom">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                        <div className="row">
                            <div className="col-12 text-center px-lg-0 px-md-0 px-5 py-lg-0 py-md-0 py-5">
                                <img src={NF} alt="" className="not-found" />
                            </div>
                            <div className="col-12 text-center mb-3">
                                <a href="/"><button className="back-to-home">Back To Home</button></a>
                            </div>
                        </div>
                        <div className="container-fluid text-center mt-5">
                            <img src={divider} alt="divider-2" width="40%" />
                        </div>
                        <br />
                        <br />
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