/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AboutUs from "./AboutUs"
import WhyUs from "./WhyUs"
import Blog from "./Blog"
import Testimonials from "./Testimonials"
import Teams from "./Teams"
import Footer from "./Footer"

function CenterSection(){
    return(
        <>
        <div className="center-section py-5 container-fluid bg-newspaper" >
            <div className="box">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                        <AboutUs />
                        <Testimonials />
                        <WhyUs />
                        <Teams />
                        <Blog />
                        <Footer />
                    </div>
                </div>
                </div> 
            </div>
        </div>
        </>
    );
}

export default CenterSection;