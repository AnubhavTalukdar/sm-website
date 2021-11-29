/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import teammember from "../assets/img/TeamMember.jpg";
import telephone from "../assets/img/telephone.png"
import dialer from "../assets/img/dialer.png";
import divider from "../assets/img/divider.png";
import marginbottom from "../assets/img/marginbottom.png"

function Testimonials(){
    return(
        <>
        <h4 className="testimonials-heading">TESTIMONIALS</h4>
        <div className="testimonials row justify-content-center">
            <div className="col-3 pt-5">
            <div className="wrapper">
                <div className="outer">
                <div className="card" style={{"--delay": -1}}>
                    <div className="content">
                    <div className="img"><img src={teammember} alt="team-member1" /></div>
                    <div className="details">
                        <span className="name">Sumit Kapoor</span>
                        <p className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus facilisis sapien."</p>
                    </div>
                    </div>
                </div>
                <div className="card" style={{"--delay": 0}}>
                    <div className="content">
                    <div className="img"><img src={teammember} alt="team-member2" /></div>
                    <div className="details">
                        <span className="name">Andrew Neil</span>
                        <p className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus facilisis sapien."</p>
                    </div>
                    </div>
                </div>
                <div className="card" style={{"--delay": 1}}>
                    <div className="content">
                    <div className="img"><img src={teammember} alt="team-member3" /></div>
                    <div className="details">
                        <span className="name">Jasmine Carter</span>
                        <p className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus facilisis sapien."</p>
                    </div>
                    </div>
                </div>
                <div className="card" style={{"--delay": 2}}>
                    <div className="content">
                    <div className="img"><img src={teammember} alt="team-member4" /></div>
                    <div className="details">
                        <span className="name">Justin Chung</span>
                        <p className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus facilisis sapien."</p>
                    </div>
                    </div>
                </div>
                <div className="card" style={{"--delay": 2}}>
                    <div className="content">
                    <div className="img"><img src={teammember} alt="team-member5" /></div>
                    <div className="details">
                        <span className="name">Adrina Calvo</span>
                        <p className="testimonial">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus facilisis sapien."</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="col-8 text-center">
                <img className="testimonials-bg" src={telephone} alt="telephone" />
                <img className="dialer rotate" src={dialer} alt="dialer" />
            </div>
        </div>
        <div className="testimonials-margin-bottom row">
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

export default Testimonials;