/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Whatsapp from "../assets/icons/Whatsapp.png";
import Facebook from "../assets/icons/Facebook.png";
import Instagram from "../assets/icons/Instagram.png"

function FloatingButton(){
    return(
        <>
        <div className="mainopShadow"></div>
            <div className="fab">
            <div className="mainop">
                <i id="addIcon" className="material-icons">add</i>
            </div>
            <div id="slides" className="minifab op3">
                <a href="https://www.facebook.com/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Facebook} alt="" /></a>
            </div>
            <div id="sheets" className="minifab op2">
                <a href="https://web.whatsapp.com/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Whatsapp} alt="" /></a>
           </div>
            <div id="docs" className="minifab op1">
                <a href="https://www.instagram.com/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><img className="minifabIcon" src={Instagram} alt="" /></a>
            </div>
            </div>
        </>
    );
}

export default FloatingButton;