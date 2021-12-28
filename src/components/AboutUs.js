/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import topleft from "../assets/img/topleft.png";
import topright from "../assets/img/topright.png";
import bottomright from "../assets/img/bottomright.png";
import bottomleft from "../assets/img/bottomleft.png";
import divider from "../assets/img/divider.png";


function AboutUs(){
    return(
        <>
        <div className="about-us row">
            <div className="col-2 padding-remover">
                <img src={topleft} alt="topleft" width="100%" />
            </div>
            <div className="col-8 py-0 padding-remover">
                <h4 className="about-us-heading">ABOUT US</h4>
                <p className="about-us-paragraph1">
                Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
                Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
                </p>
            </div>
            <div className="col-2 text-right padding-remover">
                <img src={topright} alt="topright" width="100%" />
            </div>
            <div className="col-2 mt-auto padding-remover">
                <img src={bottomleft} alt="bottomleft" width="100%" />
            </div>
            <div className="col-8 padding-remover">
            <p className="about-us-paragraph2">
                Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
            </p>
            </div>
            <div className="col-2 mt-auto text-right padding-remover">
                <img src={bottomright} alt="bottomright" width="100%" />
            </div>
        </div>
        <div className="container-fluid text-center mt-5" >
            <img src={divider} alt="divider-1" width="40%" />
        </div>
        <br/>
        <br />
        </>
    )
}

export default AboutUs;