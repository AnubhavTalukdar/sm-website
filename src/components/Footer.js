/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import phoneicon from "../assets/img/phoneicon.png";
import emailicon from "../assets/img/emailicon.png";
import legalicon from "../assets/img/legalicon.png";
import logo from "../assets/img/logo.png"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { BASE_URL } from "../config/url";
import axios from "axios"

function Footer() {
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [key, setKey] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/contact-details-homepages/1`)
        .then(response => {
            setMail(response.data.data.attributes.Email)
            setPhone(response.data.data.attributes.Phone_Number)
            setKey(response.data.data.attributes.Key)
            setMessage(response.data.data.attributes.Footer_Company_Message)
        })

    }, [])

    return(
        <>
        <div className="box-top-border"></div>
        <div className="box2">
        
            <div className="row px-lg-5 px-md-2 px-5 py-lg-5 py-md-5 py-3 justify-content-center">
                <div className="col-lg-1 col-md-1 col-2 pb-1 padding-l-remover">
                    <a className="footer-text" href="/privacypolicy" style={{textDecoration: "none"}}><img src={legalicon} alt="phone-icon" width="100%" /></a>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto t-padding-remover">
                    <a className="footer-text" style={{textDecoration: "none"}}>LEGAL : {key}</a>
                </div>
                <div className="col-lg-1 col-md-1 col-2 pb-1 padding-l-remover">
                    <a className="footer-text" href={"tel:"+phone} style={{textDecoration: "none"}}><img src={phoneicon} alt="phone-icon" width="100%" /></a>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto t-padding-remover">
                    <a className="footer-text" href={"tel:"+phone} style={{textDecoration: "none"}}>PHONE : +91 {phone}</a>
                </div>
                <div className="col-lg-1 col-md-1 col-2 pb-1 padding-l-remover">
                    <a className="footer-text" href={"mailto:"+mail} style={{textDecoration: "none"}}><img src={emailicon} alt="phone-icon" width="100%" /></a>
                </div>
                <div className="col-lg-3 col-md-3 col-10 mt-auto mb-auto t-padding-remover">
                    <a className="footer-text" href={"mailto:"+mail} style={{textDecoration: "none"}}>EMAIL : {mail}</a>
                </div>
            </div>
            <div className="row pb-4">
                <div className="col-12 text-center">
                    <img src={logo} className="footer-logo" alt=""/>
                    <h6 className="footer-text mt-3"><ReactMarkdown remarkPlugins={[gfm]}>{message}</ReactMarkdown></h6>
                </div>
                <div className="col-12 mt-3 text-center">
                    <div className="footer-anchors"><a href="/privacypolicy" target="_blank" rel="noopener noreferrer" className="footer-anchor">PRIVACY POLICY</a> &middot; <a href="/tnc" target="_blank" rel="noopener noreferrer" className="footer-anchor">TERMS AND CONDITIONS</a></div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Footer;