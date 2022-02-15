import React from "react";
import Navbar from "../components/Navbar.js"
import Navbar2 from "../components/Navbar2.js"
import CenterSection from "../components/CenterSection.js"
import FloatingButton from "../components/FloatingButton.js";
import BackToTop from "../components/BackToTop.js";

function Homepage(){
    return(
        <>
        {
            window.screen.width > 900 ?
            <>
            <Navbar2 />
            </>:
            <>
            <Navbar />
            </>
        }
        <CenterSection />
        <FloatingButton />
        <BackToTop />
        </>
    );
}

export default Homepage;