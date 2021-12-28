/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import phoneicon from "../assets/img/phoneicon.png";
import emailicon from "../assets/img/emailicon.png";
import legalicon from "../assets/img/legalicon.png";
import logo from "../assets/img/logo.png"

function Footer() {
    return(
        <>
        <div className="box-top-border"></div>
        <div className="box2">
        
            <div className="row px-5 py-lg-5 py-md-5 py-3">
                <div className="col-lg-1 col-md-1 col-2">
                    <img src={phoneicon} alt="phone-icon" width="100%" />
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto">
                    <h6 className="footer-text">PHONE : +91 1234567890</h6>
                </div>
                <div className="col-lg-1 col-md-1 col-2">
                    <img src={emailicon} alt="phone-icon" width="100%" />
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto">
                    <h6 className="footer-text">EMAIL : contact@stockmentor.in</h6>
                </div>
                <div className="col-lg-1 col-md-1 col-2">
                    <img src={legalicon} alt="phone-icon" width="100%" />
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto">
                    <h6 className="footer-text">KEY : AX1212323AFFFFF12333333</h6>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-12 text-center">
                    <img src={logo} className="footer-logo" alt=""/>
                    <h6 className="footer-text mt-2">THE $TOCK mENTOR: MADE IN INDIA, FOR THE WORLD.<br />All Rights Reserved.</h6>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Footer;