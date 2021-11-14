/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import topleft from "../assets/img/topleft.png";
import topright from "../assets/img/topright.png";
import bottomright from "../assets/img/bottomright.png";
import bottomleft from "../assets/img/bottomleft.png";
import divider from "../assets/img/divider.png";
import questionmark from "../assets/img/questionmark.png";
import couple from "../assets/img/couple.png"
import marginbottom from "../assets/img/marginbottom.png"

function CenterSection(){
    return(
        <>
        <div className="center-section py-5 container-fluid justify-content-center bg-newspaper">
            <div className="box">
                <div className="boxBtm">
                <div className="box1">
                    <div className="box1Btm">
                    <div className="about-us row">
                        <div className="col-2">
                            <img src={topleft} alt="topleft" width="100%" />
                        </div>
                        <div className="col-8 py-0">
                            <h4 className="about-us-heading">ABOUT US</h4>
                            <p className="about-us-paragraph1">
                            Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
                            Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
                            </p>
                        </div>
                        <div className="col-2 text-right">
                            <img src={topright} alt="topright" width="100%" />
                        </div>
                        <div className="col-2">
                            <img src={bottomleft} alt="bottomleft" width="100%" />
                        </div>
                        <div className="col-8">
                        <p className="about-us-paragraph2">
                            Lorem ipsum dolor sit amet. Et voluptatem quae qui laboriosam enim sit voluptas natus eum consequatur doloribus ab debitis repudiandae. Ea sapiente nesciunt non quia nihil eos nemo labore est galisum expedita. A galisum quia quo provident autem quo maxime animi. A galisum quia quo provident autem quo maxime animi.
                        </p>
                        </div>
                        <div className="col-2 text-right">
                            <img src={bottomright} alt="bottomright" width="100%" />
                        </div>
                    </div>
                    <div className="container-fluid text-center mt-5">
                        <img src={divider} alt="divider-1" width="40%" />
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className="why-us row">
                        <div className="col-3">
                            <img src={questionmark} alt="question-mark" width="140%" />
                        </div>
                        <div className="col-6">
                           <div className="why-us-box container-fluid">
                               <h4 className="why-us-heading">WHY US?</h4>
                               <p className="why-us-paragraph">Etiam in orci vulputate, lobortis mauris sed, condimentum ante. Phasellus sit amet nisl turpis. Nullam porta tempus nunc, ut vestibulum augue lacinia vel. Aliquam vitae leo ut elit consequat pellentesque. Aenean at risus finibus, imperdiet nulla a, scelerisque est. Vestibulum lobortis sed quam at convallis. Morbi fermentum placerat mauris id luctus.</p>
                           </div>
                           
                        </div>
                        <div className="col-3 mt-auto">
                            <img src={couple} className="couple-img" alt="couple" />
                        </div>
                    </div>
                    <div className="why-us row">
                        <div className="col-12">
                            <img src={marginbottom} alt="margin-bottom" width="100%" />
                        </div>
                    </div>
                    <div className="container-fluid text-center mt-5">
                        <img src={divider} alt="divider-1" width="40%" />
                    </div>
                </div>
                </div> 
            </div>
        </div>
        </>
    );
}

export default CenterSection;