/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import divider from "../assets/img/divider.png";
import upper from "../assets/img/upper.png";
import lower from "../assets/img/lower.png";
import marginbottom from "../assets/img/marginbottom.png"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { BASE_URL } from "../config/url";
import axios from "axios"

function WhyUs(){
    const [whyUs, setWhyUs] = useState("");

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/contact-details-homepages/1`)
        .then(response => {
            setWhyUs(response.data.data.attributes.Why_Us)
        })

    }, [])


    return(
        <div className="px-3">
        <div className="why-us row">
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 padding-remover">
                <div class="img-container">
                    <img className="billboard-img1" src={upper} alt="" />
                </div>
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 padding-remover">
                <div className="billboard">
                    <h6 className="why-us-heading">WHY US?</h6>
                    <p className="billboard-write-up"><ReactMarkdown remarkPlugins={[gfm]}>{whyUs}</ReactMarkdown></p>
                </div>
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 padding-remover">
                <div class="img-container">
                    <img className="billboard-img2" src={lower} alt="" />
                </div>
            </div>
            <div className="col-lg-2 col-md-0 col-sm-0 padding-remover">
            </div>
        </div>
        
        <div className="why-us row mbw">
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