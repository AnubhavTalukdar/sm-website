import React from "react";
import NotFound from "../components/NotFound.js"
import FloatingButton from "../components/FloatingButton.js";
import BackToTop from "../components/BackToTop.js";

function NotFoundPage(){
    return(
        <>
        <NotFound />
        <FloatingButton />
        <BackToTop />
        </>
    );
}

export default NotFoundPage;