/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import divider from "../assets/img/divider.png";
import billboard from "../assets/img/billboard.png";
import marginbottom from "../assets/img/marginbottom.png"

function WhyUs(){
    return(
        <div className="px-3">
        <div className="why-us row">
            <div className="col-12 padding-remover">
                <div class="img-container">
                    <img className="billboard-img" src={billboard} alt="" />
                    <div class="billboard-writing1">
                        <h4 className="why-us-heading">WHY US?</h4>
                    </div>
                    <div className="billboard-writing2">
                        <div className="d-flex mb-lg-2 mb-md-2 mb-1">
                            <div className="arrow-right mt-auto mb-auto"></div>
                            <span className="billboard-points">Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="d-flex mb-lg-2 mb-md-2 mb-1">
                            <div className="arrow-right mt-auto mb-auto"></div>
                            <span className="billboard-points">Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="d-flex mb-lg-2 mb-md-2 mb-1">
                            <div className="arrow-right mt-auto mb-auto"></div>
                            <span className="billboard-points">Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="d-flex mb-lg-2 mb-md-2 mb-1">
                            <div className="arrow-right mt-auto mb-auto"></div>
                            <span className="billboard-points">Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="why-us row">
            <div className="col-12">
                <img src={marginbottom} alt="margin-bottom" width="100%" />
            </div>
        </div>
        <div className="container-fluid text-center mt-5">
            <img src={divider} alt="divider-2" width="40%" />
        </div>
        <br/>
        <br />
        </div>
    );
}

export default WhyUs;