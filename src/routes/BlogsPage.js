import React from "react";
import Blogs from "../components/Blogs"
import FloatingButton from "../components/FloatingButton";
import BackToTop from "../components/BackToTop.js";

function BlogsPage(){
    return(
        <>
        <Blogs />
        <FloatingButton />
        <BackToTop />
        </>
    )
}

export default BlogsPage;