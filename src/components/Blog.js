/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import divider from "../assets/img/divider.png";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { BASE_URL } from "../config/url";
import axios from "axios"
import Cookies from "js-cookie"
var arraySort = require('array-sort');

function Blog(){

    var [blogs, setBlogs] = useState([])

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/blogs?populate=Category&populate=Image`)
        .then(response => {

            var b = arraySort(response.data.data, "Date_of_Publishing")
            setBlogs(b.slice(-3).reverse())
        })

    }, [])

    return(
        <div className="px-3">
        
        <h4 className="our-blog-heading mb-lg-4 mb-md-4 mb-1">BLOGS</h4>
        <div className="blog row">
            {blogs.map((b)=>(
                <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-4">
                <a href="/blogs" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                <button className="blog-card" onClick={()=>{Cookies.set("Blog", b.id, {expires : 0.000034})}}>
                    <h6 className="blog-heading">{b.attributes.Homepage_Card_Heading}</h6>
                    <h6 className="blog-date">DATE: {b.attributes.Date_of_Publishing} | {b.attributes.Reading_Time} mins read</h6>
                    <img src={!b.attributes.Image.data ? "" : BASE_URL + b.attributes.Image.data.attributes.url} className="blog-img mt-3" alt="blog-1"/>
                    <p className="blog-summary mt-3"><ReactMarkdown remarkPlugins={[gfm]}>{(b.attributes.Blog_Content).substring(0,515) + "..."}</ReactMarkdown></p>
                    <h6 className="blog-tags mt-auto">{b.attributes.Tag}</h6>
                    <div className="blog-brown1" />
                    <div className="blog-brown2" />
                </button>
                </a>
                </div>
                
            ))}
            
        </div>
        <div className="row justify-content-center mt-3 mb-2">
            <div className="col-lg-4 col-md-4 col-8">
                <center>
                <a href="/blogs" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                <button className="button">
                    Show More
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>
                </a>
                </center>
            </div>
        </div>
        <div className="container-fluid text-center mt-5">
            <img src={divider} alt="divider-2" width="40%" />
        </div>
        <br />
        <br />
        </div>
    );
}

export default Blog;