import React from "react";
import Navbar from "../components/Navbar.js"
import CenterSection from "../components/CenterSection.js"
import FloatingButton from "../components/FloatingButton.js";
import BackToTop from "../components/BackToTop.js";

function Homepage(){
    return(
        <>
        <Navbar />
        <CenterSection />
        <FloatingButton />
        <BackToTop />
        </>
    );
}

export default Homepage;