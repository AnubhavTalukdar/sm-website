/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import left from "../assets/img/left.png"
import right from "../assets/img/right.png"
import bar from "../assets/img/bar.png"
import title from "../assets/img/title.png"
import leftarrow from "../assets/img/leftarrow.png"
import rightarrow from "../assets/img/rightarrow.png"

function Navbar(){
    return(
        <>
        <div className="black-bar container-fluid px-0 text-center">
        </div>
        <div className="header container-fluid pt-1 px-0 text-center">
            <div className="logo-row row container-fluid px-0 py-0">
                <div className="col-1 pt-2">
                    <img className="left" src={left} alt="left"/>
                </div>
                <div className="col-10">
                    <img className="bar" src={bar} alt="bar"/>
                    <img className="pt-4 logo" src={title} alt="title"/>
                </div>
                <div className="col-1 pt-2">
                    <img className="right" src={right} alt="right"/>
                </div>
            </div>
            
        </div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-light border-dark" style={{backgroundColor : "#F4EAD9"}}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto pr-3">
              <li className="nav-left">
                <img classname="mt-3" src={leftarrow} alt="leftarrow" width="80%" />
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link-1" href="/">Home &middot;</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link-2" href="/about">About &middot;</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link-3" href="/testimonials">Te$timonial$ &middot;</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="link-4" href="/whyus">Why U$ &middot;</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" id="link-6" href="/team">Team &middot;</a>
              </li>
              <li className="nav-item pr-2">
                <a className="nav-link" id="link-7" href="/blog">Blog &middot;</a>
              </li>
              <li className="nav-item pr-2">
                <a className="nav-link" id="link-8" href="/contactus">Contact U$ </a>
              </li>
              <li className="nav-right">
                <img src={rightarrow} alt="leftarrow" width="80%" />
              </li>
            </ul>
          </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar;