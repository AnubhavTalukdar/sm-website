import React, {useEffect, useState} from "react";
import btp from "../assets/img/backtotop.png"

function BackToTop(){
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return(
        <>
        <img className="back-to-top" src={btp} style={{display: showButton === false ? "none" : "block"}} onClick={scrollToTop} alt=""/>
        </>
    )
}

export default BackToTop;