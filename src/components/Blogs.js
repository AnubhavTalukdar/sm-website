import React, {useState, useEffect} from "react";
import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import divider from "../assets/img/divider.png";
import { BASE_URL } from "../config/url";
import axios from "axios"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Cookies from "js-cookie"
var arraySort = require('array-sort');

function Blogs(){
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    var [blogs, setBlogs] = useState([])
    var [filteredBlogs, setFilteredBlogs] = useState([])
    const [categories, setCategories] = useState([])
    const [aroundTheWebs, setAroundTheWebs] = useState([])
    const [visible, setVisible] = useState(13)
    const [length, setLength] = useState(0)
    const [visible1, setVisible1] = useState(3)
    const [length1, setLength1] = useState(0)
    const [visible2, setVisible2] = useState(13)
    const [length2, setLength2] = useState(0)
    const [filter, setFilter] = useState("All")
    const [sort, setSort] = useState("Newest")

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/blogs?populate=Category&populate=Image`)
        .then(response => {
            var b = arraySort(response.data.data, "Date_of_Publishing").reverse()
            setBlogs(arraySort(response.data.data, "Date_of_Publishing").reverse())
            setFilteredBlogs(arraySort(response.data.data, "Date_of_Publishing").reverse())
            setLength(b.length)
            setLength2(b.length)
        })

        axios.get(`${BASE_URL}/api/around-the-webs?populate=Image`)
        .then(response => {
            setAroundTheWebs(arraySort(response.data.data, "id").reverse())
            setLength1(response.data.data.length)
        })

        axios.get(`${BASE_URL}/api/content-categories`)
        .then(response => {
            setCategories(response.data.data)
        })

        if(Cookies.get("Blog")){
            setExpanded("panel"+Cookies.get("Blog"))
            if(window.screen.width > 600){
                window.scroll(0,300)
            }
        }

    }, [])

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }

    const loadMore1 = (e) => {
        setVisible1((prevValue) => prevValue + 3)
    }

    const loadMore2 = (e) => {
        setVisible2((prevValue) => prevValue + 3)
    }

    const changeFilter = (e) => {
        var s = e.target.value
        setFilter(s)
        var b = []
        b = blogs.filter(function(blog){
            return blog.attributes.Category.data.attributes.Name === s
        })
        setFilteredBlogs(b)
        setLength2(b.length)
        
    }

    const changeSort = (e) => {
        setSort(e.target.value)
        if(e.target.value === "Oldest"){
            setBlogs(arraySort(blogs, "id"))
            setFilteredBlogs(arraySort(filteredBlogs, "id"))
        }
        else if(e.target.value === "Newest"){
            setBlogs(arraySort(blogs, "id").reverse())
            setFilteredBlogs(arraySort(filteredBlogs, "id").reverse())
        }
    }

    return(
        <>
        <Navbar2 />
        <div className="center-section py-5 container-fluid bg-newspaper" >
            <div className="box">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                    <h4 className="team-heading mt-3 mb-4">BLOGS</h4>
                    <div className="row px-4">
                        <div className="col-lg-8 col-md-12 col-12">
                            <h4 className="our-blogs-heading pb-3">Our Blogs</h4>
                            <div className="row mb-4">
                                <div className="col-lg-4 col-md-4 col-sm-none">

                                </div>
                                <div className="col-lg-4 col-md-4 col-12 mt-4">
                                    
                                        <InputLabel id="filter">Filter By Category</InputLabel>
                                        <Select
                                        labelId="filter"
                                        id="filter"
                                        fullWidth
                                        variant="standard"
                                        onChange={changeFilter}
                                        value={filter}
                                        >
                                        <MenuItem value="All">All</MenuItem>
                                        { categories.map((c) => (
                                            <MenuItem value={c.attributes.Name}>{c.attributes.Name}</MenuItem>
                                        ))}
                                        
                                        </Select>
                                    
                                </div>
                                
                                <div className="col-lg-4 col-md-4 col-12 mt-4 pl-lg-0 pl-4">
                                   
                                        <InputLabel id="sort">Sort By</InputLabel>
                                        <Select
                                        labelId="sort"
                                        id="sort"
                                        fullWidth
                                        variant="standard"
                                        value={sort}
                                        onChange={changeSort}
                                        >
                                        <MenuItem value="Newest">Newest First</MenuItem>
                                        <MenuItem value="Oldest">Oldest First</MenuItem>
                                        </Select>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <>
                                { filter === "All" ?
                                <>
                                {
                                    blogs.slice(0,visible).map((b)=>(
                                        <div className="col-12 mt-1">
                                        <Accordion className="accordion-background" expanded={expanded === 'panel'+b.id} onChange={handleChange('panel'+b.id)}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                            >
                                            <h6 className="accordion-heading" style={{color: expanded === 'panel'+b.id ? "black" : "#615646"}}>{b.attributes.Title}</h6>
                                            </AccordionSummary>
                                            <AccordionDetails className="text-center">
                                            <img src={!b.attributes.Image.data ? "" : BASE_URL + b.attributes.Image.data.attributes.url} className="accordion-img" alt="" />     
                                            <p className="accordion-content">
                                                <ReactMarkdown remarkPlugins={[gfm]}>{b.attributes.Blog_Content}</ReactMarkdown>
                                            </p>
                                            <p className="accordion-author">{b.attributes.Author}</p>
                                            <p className="accordion-designation">{b.attributes.Author_Designation}</p>
                                            <p className="accordion-date">Published On : {b.attributes.Date_of_Publishing}</p>
                                            <p className="accordion-date">Category : {b.attributes.Category.data.attributes.Name}</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        </div>
                                    ))
                                }
                                <div className="col-12 mt-3">
                                <div className="row justify-content-center mt-3 mb-2">
                                    <div className="col-lg-4 col-md-4 col-8">
                                        <center>
                                        <button className="button" onClick={loadMore} style={{display : visible >= length || length <= 13 ? "none": "block"}}>
                                            Load More
                                            <div className="button__horizontal"></div>
                                            <div className="button__vertical"></div>
                                        </button>
                                        </center>
                                    </div>
                                </div>
                                </div>
                                </>:
                                <>
                                { filteredBlogs.length === 0 ?
                                <>  
                                    <center>
                                    <p className="accordion-content">
                                        No blogs found!
                                    </p>
                                    </center>
                                </>
                                :
                                null
                                }
                                { 
                                filteredBlogs.slice(0,visible).map((b) =>(
                                    <div className="col-12 mt-1">
                                        <Accordion className="accordion-background" expanded={expanded === 'panel'+b.id} onChange={handleChange('panel'+b.id)}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel4bh-content"
                                            id="panel4bh-header"
                                            >
                                            <h6 className="accordion-heading" style={{color: expanded === 'panel'+b.id ? "black" : "#615646"}}>{b.attributes.Title}</h6>
                                            </AccordionSummary>
                                            <AccordionDetails className="text-center">
                                            <img src={!b.attributes.Image.data ? "" : BASE_URL + b.attributes.Image.data.attributes.url} className="accordion-img" alt="" />     
                                            <p className="accordion-content">
                                            <ReactMarkdown remarkPlugins={[gfm]}>{b.attributes.Blog_Content}</ReactMarkdown>
                                            </p>
                                            <p className="accordion-author">{b.attributes.Author}</p>
                                            <p className="accordion-designation">{b.attributes.Author_Designation}</p>
                                            <p className="accordion-date">Published On : {b.attributes.Date_of_Publishing}</p>
                                            <p className="accordion-date">Category : {b.attributes.Category.data.attributes.Name}</p>
                                            </AccordionDetails>
                                        </Accordion>
                                        </div> 
                                ))
                                }
                                <div className="col-12 mt-3">
                                <div className="row justify-content-center mt-3 mb-2">
                                    <div className="col-lg-4 col-md-4 col-8">
                                        <center>
                                        <button className="button" onClick={loadMore2} style={{display : visible2 >= length2 || length2 <= 13 ? "none": "block"}}>
                                            Load More
                                            <div className="button__horizontal"></div>
                                            <div className="button__vertical"></div>
                                        </button>
                                        </center>
                                    </div>
                                </div>
                                </div>
                                </>
                                }
                                
                                </>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 mt-lg-0 mt-md-0 mt-5">
                            <h4 className="atw-heading pb-1">Around the web</h4>
                            <div className="row px-2">
                                {
                                aroundTheWebs.slice(0,visible1).map((a)=>(
                                   
                                    <div className="col-12 atw-cards mt-3">
                                         <a href={a.attributes.Article_Link} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}} target="_blank" rel="noopener noreferrer" >
                                    <div className="row">
                                        <div className="col-8">
                                            <h6 className="atw-title">{a.attributes.Title}</h6>
                                            <p className="atw-summary">{a.attributes.Description}</p>
                                            <p className="atw-site">{a.attributes.WebsiteName}<br /><span className="atw-date">{a.attributes.Date} | {a.attributes.Reading_Time} mins</span></p>
                                        </div>
                                        <div className="col-4">
                                            <img className="atw-img" src={!a.attributes.Image.data ? "" : BASE_URL + a.attributes.Image.data.attributes.url} alt="" />
                                        </div>
                                    </div>
                                    </a>
                                    </div>
                                    
                                ))
                                }
                                <div className="col-12 mt-2">
                                <div className="row justify-content-center mt-3 mb-2">
                                    <div className="col-lg-6 col-md-6 col-8">
                                        <center>
                                        <button className="button" onClick={loadMore1} style={{display : visible1 >= length1 || length1 <= 3 ? "none": "block"}}>
                                            Load More
                                            <div className="button__horizontal"></div>
                                            <div className="button__vertical"></div>
                                        </button>
                                        </center>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid text-center mt-5">
                        <img src={divider} alt="divider-2" width="40%" />
                    </div>
                    <br />
                    <br />
                    </div>
                    <Footer />
                </div>
                </div> 
            </div>
        </div>
        </>
    );
}

export default Blogs;