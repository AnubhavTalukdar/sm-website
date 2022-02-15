/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from "react";
import divider from "../assets/img/divider.png";
import { BASE_URL } from "../config/url";
import axios from "axios";

function Teams(){

    var [team, setTeam] = useState([])
    var [length, setLength] = useState(0)

    useEffect(() => { 
        axios.get(`${BASE_URL}/api/teams?populate=Image`)
        .then(response => {
            setTeam(response.data.data)
            setLength(response.data.data.length)
        })

    }, [])

    let last = team.slice(-1)

    return(
        <div className="px-3">
        <h4 className="team-heading mb-4">TEAM</h4>
        <div className="team row pt-4">
            <div className="col-12 text-center">
                <div className="book">
                    <input type="checkbox" id="c1" />
                    <input type="checkbox" id="c2" />
                    <input type="checkbox" id="c3" />
                    <input type="checkbox" id="c4" />
                    <input type="checkbox" id="c5" />
                    <input type="checkbox" id="c6" />
                    <input type="checkbox" id="c7" />
                    <input type="checkbox" id="c8" />
                    <input type="checkbox" id="c9" />
                    <input type="checkbox" id="c10" />
                    <input type="checkbox" id="c11" />
                    <input type="checkbox" id="c12" />
                    <input type="checkbox" id="c13" />
                    <input type="checkbox" id="c14" />
                    <input type="checkbox" id="c15" />
                    <input type="checkbox" id="c16" />
                    <input type="checkbox" id="c17" />
                    <input type="checkbox" id="c18" />
                    <input type="checkbox" id="c19" />
                    <input type="checkbox" id="c20" />
                    <input type="checkbox" id="c21" />
                    <input type="checkbox" id="c22" />
                    <input type="checkbox" id="c23" />
                    <input type="checkbox" id="c24" />
                    <input type="checkbox" id="c25" />
                    <input type="checkbox" id="c26" />
                    <input type="checkbox" id="c27" />
                    <input type="checkbox" id="c28" />
                    <input type="checkbox" id="c29" />
                    <input type="checkbox" id="c30" />
                    <input type="checkbox" id="c31" />
                    <input type="checkbox" id="c32" />
                    <input type="checkbox" id="c33" />
                    <input type="checkbox" id="c34" />
                    <input type="checkbox" id="c35" />
                    <input type="checkbox" id="c36" />
                    <input type="checkbox" id="c37" />
                    <input type="checkbox" id="c38" />
                    <input type="checkbox" id="c39" />
                    <input type="checkbox" id="c40" />
                    <input type="checkbox" id="c41" />
                    <input type="checkbox" id="c42" />
                    <input type="checkbox" id="c43" />
                    <input type="checkbox" id="c44" />
                    <input type="checkbox" id="c45" />
                    <input type="checkbox" id="c46" />
                    <input type="checkbox" id="c47" />
                    <input type="checkbox" id="c48" />
                    <input type="checkbox" id="c49" />
                    <input type="checkbox" id="c50" />
                    <div id="cover"></div>
                    <div className="flip-book">
                        {
                            team.map((t,index) =>(
                                index + 1 === 1 ?
                                <>
                                <div className="flip" id={'p'+(index+1)}>
                                    <div className="back">
                                        <img className="flip-img" src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt=""/>
                                        <label className="back-btn" for={'c'+(index+1)}>Back</label>
                                    </div>
                                    <div className="front">
                                        <h2 className="flip-starting">HAVE A LOOK INTO OUR TEAM! </h2>
                                        <label className="next-btn" for={'c'+(index+1)}>Next</label>
                                    </div>
                                </div>
                                </>
                                :
                                <>
                                <div className="flip" id={'p'+(index+1)}>
                                    <div className="back">
                                        <img className="flip-img" src={!t.attributes.Image.data ? "" : BASE_URL + t.attributes.Image.data.attributes.url} alt=""/>
                                        <label className="back-btn" for={'c'+(index+1)}>Back</label>
                                    </div>
                                    <div className="front">
                                        <h2 className="flip-heading">OUR TEAM</h2>
                                        <div className="flip-border1"></div>
                                        <div className="flip-border2"></div>
                                        <h2 className="flip-name">{team[index - 1].attributes.Name}</h2>
                                        <p className="flip-para">{team[index - 1].attributes.Description}</p>
                                        <div className="flip-border3"></div>
                                        <label className="next-btn" for={'c'+(index+1)}>Next</label>
                                    </div>
                                </div>
                                
                                </>

                              
                                
                            ))
                        }
                        {
                            last.map((l)=>(
                                <div className="flip" id={'p'+(length+1)}>
                                <div className="back">
                                    <h2 className="flip-ending">THANK YOU :") </h2>
                                    <label className="back-btn" for={'c'+(length+1)} style={{color: "black"}}>Back</label>
                                </div>
                                <div className="front">
                                    <h2 className="flip-heading">OUR TEAM</h2>
                                    <div className="flip-border1"></div>
                                    <div className="flip-border2"></div>
                                    <h2 className="flip-name">{l.attributes.Name}</h2>
                                    <p className="flip-para">{l.attributes.Description}</p>
                                    <div className="flip-border3"></div>
                                    <label className="next-btn" for={'c'+(length+1)}>Next</label>
                                </div>
                            </div>
                            ))
                        }
                       
                        
                    </div>
                    {/* 
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
                                <p className="flip-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ipsum sed erat dignissim elementum quis non nisl.</p>
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
                                <p className="flip-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis ipsum sed erat dignissim elementum quis non nisl.</p>
                                <div className="flip-border3"></div>
                                <label className="next-btn" for="c3">Next</label>
                            </div>
                        </div>
                    </div>
                    */}
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