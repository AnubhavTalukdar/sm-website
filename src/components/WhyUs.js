/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import divider from "../assets/img/divider.png";
import billboard from "../assets/img/billboard.png";
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
            <div className="col-12 padding-remover">
                <div class="img-container">
                    <img className="billboard-img" src={billboard} alt="" />
                    <div class="billboard-writing1">
                        <h4 className="why-us-heading">WHY US?</h4>
                    </div>
                    <div className="billboard-writing2">
                        <div className="d-flex">
                        <span className="billboard-points" style={{textAlign : "left"}}><ReactMarkdown remarkPlugins={[gfm]}>{whyUs}</ReactMarkdown></span>
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