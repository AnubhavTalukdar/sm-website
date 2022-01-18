/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import { BASE_URL } from "../config/url";
import axios from "axios"
import Whatsapp from "../assets/icons/Whatsapp.png";
import Facebook from "../assets/icons/Facebook.png";
import Instagram from "../assets/icons/Instagram.png"

function FloatingButton(){
    const [facebook, setFacebook] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [instagram, setInstagram] = useState("")

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/contact-details-homepages/1`)
        .then(response => {
            setWhatsapp(response.data.data.attributes.Whatsapp)
            setFacebook(response.data.data.attributes.Facebook_Page)
            setInstagram(response.data.data.attributes.Instagram_Page)
        })

    }, [])

    return(
        <>
        <div className="mainopShadow"></div>
            <div className="fab">
            <div className="mainop">
                <i id="addIcon" className="material-icons">add</i>
            </div>
            <div id="slides" className="minifab op3">
                <a href={facebook} style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Facebook} alt="" /></a>
            </div>
            <div id="sheets" className="minifab op2">
                <a href={whatsapp} style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Whatsapp} alt="" /></a>
           </div>
            <div id="docs" className="minifab op1">
                <a href={instagram} style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Instagram} alt="" /></a>
            </div>
            </div>
        </>
    );
}

export default FloatingButton;