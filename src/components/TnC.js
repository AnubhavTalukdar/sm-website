/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import divider from "../assets/img/divider.png";
import { BASE_URL } from "../config/url";
import axios from "axios"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

function TnC(){
    const [tnc, setTnc] = useState("")

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/contact-details-homepages/1`)
        .then(response => {
            setTnc(response.data.data.attributes.Terms_And_Conditions)
        })
    }, [])

    return(
        <>
        <Navbar2 />
        <div className="center-section py-5 container-fluid bg-newspaper" >
            <div className="box additional-bottom">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                        <div className="row mt-3 mb-1">
                            <h4 className="our-blog-heading mb-2">TERMS AND CONDITIONS</h4>
                        </div>
                        <div className="row mt-2 mb-4 px-5">
                            <div className="col-12 px-lg-5 px-md-5 px-3 py-4 privacy-policy-card">
                                <p className="privacy-policy"><ReactMarkdown remarkPlugins={[gfm]}>{tnc}</ReactMarkdown></p>
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
    );
}

export default TnC;