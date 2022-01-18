/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from "react";
import topleft from "../assets/img/topleft.png";
import topright from "../assets/img/topright.png";
import bottomright from "../assets/img/bottomright.png";
import bottomleft from "../assets/img/bottomleft.png";
import divider from "../assets/img/divider.png";
import { BASE_URL } from "../config/url";
import axios from "axios"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


function AboutUs(){
    const [aboutUs, setAboutUs] = useState("");

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/contact-details-homepages/1`)
        .then(response => {
            setAboutUs(response.data.data.attributes.About_Us)
        })

    }, [])

    return(
        <>
        <div className="about-us row">
            <div className="col-2 padding-remover">
                <img src={topleft} alt="topleft" width="100%" />
            </div>
            <div className="col-8 py-0 padding-remover">
                <h4 className="about-us-heading">ABOUT US</h4>
                <p className="about-us-paragraph1">
                    <ReactMarkdown remarkPlugins={[gfm]}>{aboutUs.substring(0, aboutUs.indexOf("\n"))}</ReactMarkdown>
                </p>
            </div>
            <div className="col-2 text-right padding-remover">
                <img src={topright} alt="topright" width="100%" />
            </div>
            <div className="col-2 mt-auto padding-remover">
                <img src={bottomleft} alt="bottomleft" width="100%" />
            </div>
            <div className="col-8 padding-remover">
            <p className="about-us-paragraph2">
                <ReactMarkdown remarkPlugins={[gfm]}>{aboutUs.substring(aboutUs.indexOf("\n"))}</ReactMarkdown>
            </p>
            </div>
            <div className="col-2 mt-auto text-right padding-remover">
                <img src={bottomright} alt="bottomright" width="100%" />
            </div>
        </div>
        <div className="container-fluid text-center mt-5" >
            <img src={divider} alt="divider-1" width="40%" />
        </div>
        <br/>
        <br />
        </>
    )
}

export default AboutUs;