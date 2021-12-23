import React, {useState} from "react";
import Navbar2 from "./Navbar2"
import Footer from "./Footer"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import blogimg from "../assets/img/blogimg.jpg";
import divider from "../assets/img/divider.png";

function Blogs(){
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                        <div className="col-8">
                            <h4 className="our-blogs-heading pb-3">Our Blogs</h4>
                            <div className="row">
                                <div className="col-12 mt-1">
                                
                                <Accordion className="accordion-background" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-1">
                               
                                <Accordion className="accordion-background" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    >
                                    <h6 className="accordion-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                                    </AccordionSummary>
                                    <AccordionDetails className="text-center">
                                    <img src={blogimg} className="accordion-img" alt="" />     
                                    <p className="accordion-content">
                                        Donec felis neque, sagittis id quam id, ultricies egestas ex. Aliquam ac eros in sapien ornare congue vitae non purus. Maecenas tortor tortor, blandit ut vehicula non, efficitur sed arcu. Nulla quis nibh dictum metus posuere rutrum. Aenean non orci tortor. Suspendisse pharetra ipsum massa, ut vulputate erat dictum ut. Donec mollis id dui a molestie. Phasellus pharetra nulla non nulla varius, eu efficitur tellus pellentesque. Cras eu mi sit amet tellus auctor dictum. Integer pretium convallis porta. Pellentesque sapien elit, condimentum eget lectus at, pretium ullamcorper magna. Phasellus porttitor convallis gravida. Donec arcu elit, consequat sit amet neque non, suscipit posuere ex. Nam tempor sapien vel mauris sollicitudin ultrices.
                                    </p>
                                    <p className="accordion-author">Author</p>
                                    <p className="accordion-designation">Designation</p>
                                    <p className="accordion-date">Published On : 2021-03-11</p>
                                    </AccordionDetails>
                                </Accordion>
                                </div>
                                <div className="col-12 mt-3">
                                <div className="row justify-content-center mt-3 mb-2">
                                    <div className="col-4">
                                        <center>
                                        <button className="button">
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
                        <div className="col-4">
                            <h4 className="atw-heading pb-1">Around the web</h4>
                            <div className="row px-2">
                                <div className="col-12 atw-cards mt-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <h6 className="atw-title">Lorem ipsum dolor sit amet</h6>
                                            <p className="atw-summary">Summary for blog goes here. Summary for blog.</p>
                                            <p className="atw-site">Medium <br /><span className="atw-date">2021-11-03 | 8 mins</span></p>
                                        </div>
                                        <div className="col-4">
                                            <img className="atw-img" src={blogimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 atw-cards mt-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <h6 className="atw-title">Lorem ipsum dolor sit amet</h6>
                                            <p className="atw-summary">Summary for blog goes here. Summary for blog.</p>
                                            <p className="atw-site">Medium <br /><span className="atw-date">2021-11-03 | 8 mins</span></p>
                                        </div>
                                        <div className="col-4">
                                            <img className="atw-img" src={blogimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 atw-cards mt-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <h6 className="atw-title">Lorem ipsum dolor sit amet</h6>
                                            <p className="atw-summary">Summary for blog goes here. Summary for blog.</p>
                                            <p className="atw-site">Medium <br /><span className="atw-date">2021-11-03 | 8 mins</span></p>
                                        </div>
                                        <div className="col-4">
                                            <img className="atw-img" src={blogimg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-2">
                                <div className="row justify-content-center mt-3 mb-2">
                                    <div className="col-6">
                                        <center>
                                        <button className="button">
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