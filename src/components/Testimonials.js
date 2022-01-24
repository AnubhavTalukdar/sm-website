/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import telephone from "../assets/img/telephone.png"
import dialer from "../assets/img/dialer.png";
import divider from "../assets/img/divider.png";
import marginbottom from "../assets/img/marginbottom.png"
import { BASE_URL } from "../config/url";
import axios from "axios"

function Testimonials(){

    var [testimonials, setTestimonials] = useState([])

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/testimonials?populate=Image`)
        .then(response => {
            setTestimonials(response.data.data)
        })

    }, [])

    return(
        <div className="px-3">
        <h4 className="testimonials-heading">TESTIMONIALS</h4>
        <div className="testimonials row justify-content-center">
            <div className="col-lg-3 col-md-4 col-12 pt-5">
            <div className="wrapper">
                <div className="outer">
                {
                    testimonials.map((t, index) =>(
                        
                            index === 0 ?
                            <>
                            <div className="card" style={{"--delay": -1}}>
                            <div className="content">
                            <div className="img"><img src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt="team-member1" /></div>
                            <div className="details">
                                <span className="name">{t.attributes.Name}</span>
                                <p className="testimonial">{t.attributes.Testimonial}</p>
                            </div>
                            </div>
                            </div>
                            </>
                            :
                            index === 1 ?
                            <>
                            <div className="card" style={{"--delay": 0}}>
                                <div className="content">
                                <div className="img"><img src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt="team-member2" /></div>
                                <div className="details">
                                    <span className="name">{t.attributes.Name}</span>
                                    <p className="testimonial">{t.attributes.Testimonial}</p>
                                </div>
                                </div>
                            </div>
                            </>
                            : 
                            index === 2 ?
                            <div className="card" style={{"--delay": 1}}>
                                <div className="content">
                                <div className="img"><img src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt="team-member3" /></div>
                                <div className="details">
                                    <span className="name">{t.attributes.Name}</span>
                                    <p className="testimonial">{t.attributes.Testimonial}</p>
                                </div>
                                </div>
                            </div>
                            :
                            <>
                             <div className="card" style={{"--delay": 2}}>
                                <div className="content">
                                <div className="img"><img src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt="team-member4" /></div>
                                <div className="details">
                                    <span className="name">{t.attributes.Name}</span>
                                    <p className="testimonial">{t.attributes.Testimonial}</p>
                                </div>
                                </div>
                            </div>
                            </>
                    ))
                }
                </div>
            </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12 text-center mt-auto">
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
        </div>
    );
}

export default Testimonials;