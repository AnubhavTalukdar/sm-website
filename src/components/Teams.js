/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import teammember from "../assets/img/TeamMember.jpg";
import divider from "../assets/img/divider.png";

function Teams(){
    return(
        <div className="px-3">
        <h4 className="team-heading mb-4">TEAM</h4>
        <div className="team row pt-4">
            <div className="col-12 text-center">
                <div className="book">
                    <input type="checkbox" id="c1" />
                    <input type="checkbox" id="c2" />
                    <input type="checkbox" id="c3" />
                    <div id="cover"></div>
                    <div className="flip-book">
                        <div className="flip" id="p1">
                            <div className="back">
                                <img className="flip-img" src={teammember} alt=""/>
                                <label className="back-btn" for="c1">Back</label>
                            </div>
                            <div className="front">
                                <h2 className="flip-starting">HAVE A LOOK INTO OUR TEAM! </h2>
                                <label className="next-btn" for="c1">Next</label>
                            </div>
                        </div>

                        <div className="flip" id="p2">
                            <div className="back">
                                <img className="flip-img" src={teammember} alt=""/>
                                <label className="back-btn" for="c2">Back</label>
                            </div>
                            <div className="front">
                                <h2 className="flip-heading">OUR TEAM</h2>
                                <div className="flip-border1"></div>
                                <div className="flip-border2"></div>
                                <h2 className="flip-name">RODGER DAVID</h2>
                                <p className="flip-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ipsum sed erat dignissim elementum quis non nisl. Morbi dui augue, ultrices non sollicitudin id, commodo non sem.</p>
                                <div className="flip-border3"></div>
                                <label className="next-btn" for="c2">Next</label>
                            </div>
                        </div>

                        <div className="flip" id="p3">
                            <div className="back">
                                <h2 className="flip-ending">THANK YOU :") </h2>
                                <label className="back-btn" for="c3" style={{color: "black"}}>Back</label>
                            </div>
                            <div className="front">
                                <h2 className="flip-heading">OUR TEAM</h2>
                                <div className="flip-border1"></div>
                                <div className="flip-border2"></div>
                                <h2 className="flip-name">JOHN DOE</h2>
                                <p className="flip-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ipsum sed erat dignissim elementum quis non nisl. Morbi dui augue, ultrices non sollicitudin id, commodo non sem.</p>
                                <div className="flip-border3"></div>
                                <label className="next-btn" for="c3">Next</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center mt-5">
            <img src={divider} alt="divider-2" width="40%" />
        </div>
        <br/>
        <br />
        </div>
    );
}

export default Teams;