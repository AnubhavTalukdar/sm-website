/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import divider from "../assets/img/divider.png";
import questionmark from "../assets/img/questionmark.png";
import couple from "../assets/img/couple.png"
import marginbottom from "../assets/img/marginbottom.png"

function WhyUs(){
    return(
        <>
        <div className="why-us row">
            <div className="col-3">
                <img src={questionmark} alt="question-mark" width="140%" />
            </div>
            <div className="col-6">
                <div className="why-us-box container-fluid">
                    <h4 className="why-us-heading">WHY US?</h4>
                    <p className="why-us-paragraph">Delilah in orci vulputate, lobortis mauris sed, condimentum ante. Phasellus sit amet nisl turpis. Nullam porta tempus nunc, ut vestibulum augue lacinia vel. Aliquam vitae leo ut elit consequat pellentesque. Aenean at risus finibus, imperdiet nulla a, scelerisque est. Vestibulum lobortis sed quam at convallis. Morbi fermentum placerat mauris id luctus.</p>
                </div>
                
            </div>
            <div className="col-3 mt-auto">
                <img src={couple} className="couple-img" alt="couple" />
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
        </>
    );
}

export default WhyUs;