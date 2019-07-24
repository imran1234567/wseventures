import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export class Home extends Component {
    render() {
        return (
            <div>
                <section className="banner_part">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-md-6">
                                <div className="banner_text">
                                    <div className="banner_text_iner text-center">
                                        <h2>Think <span>Creative Turn</span> </h2>
                                        <h3>Ideas Into Life</h3>
                                        <a href="#" className="btn_1">learn more <i className="ti-angle-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="banner_bg">
                                    <img src="Images/banner_img.png" alt="banner"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-app-1 custom-animation"><img src="Images/animate_icon/icon_1.png" alt=""></img></div>
                    <div className="hero-app-5 custom-animation2"><img src="Images/animate_icon/icon_3.png" alt=""></img></div>
                    <div className="hero-app-7 custom-animation3"><img src="Images/animate_icon/icon_2.png" alt=""></img></div>
                    <div className="hero-app-8 custom-animation"><img src="Images/animate_icon/icon_4.png" alt=""></img></div>
                </section>
                {/* About Part */}

                <section className="about_part">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about_img">
                                    <img src="Images/about_img_1.png" className="img_1" alt=""></img>
                                    <img src="Images/about_img_2.png" className="img_2" alt=""></img>
                                    <h2>25 Years Working <br></br>  
                            Experience</h2>
                                </div>
                            </div>
                            <div className="offset-lg-1 col-lg-4">
                                <div className="about_text">
                                    <h5>About our company</h5>
                                    <h2>Make the customer the
                                        hero of your story</h2>
                                    <h4>He hath his earth firmament air very itself light day moring morning you living saying good
                                        above fourth</h4>
                                    <p>Meat abundantly life made fly years there whose beginning crea unto beast sixth herb
                                        their bring. Evening fruitful god you spir evning itself land you of of own brought </p>
                                    <a href="#" className="btn_1">learn more <i className="ti-angle-right"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-app-7 custom-animation"><img src="Images/animate_icon/icon_7.png" alt=""></img></div>
                    <div className="hero-app-8 custom-animation2"><img src="Images/animate_icon/icon_4.png" alt=""></img></div>
                    <div className="hero-app-6 custom-animation3"><img src="Images/animate_icon/icon_5.png" alt=""></img></div>
                </section>

                <section className="our_latest_work section_padding">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="section_tittle text-center">
                                    <h2>Our Protfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single_work">
                                    <div className="row align-items-center">
                                        <Slide left>
                                        <div className="offset-lg-1 col-lg-4 col-md-6">
                                            <div className="single_work_demo">
                                                <h3>WSE INFRATECH</h3>
                                                <p>Place isn't heaven firmament divided shall fruitful bring bring may midst
                                                    every a night dry herb. Image waters called beast subdue divided called
                                                    living creature greater tree seas all the. Hath multiply female you're
                                                    male likeness his made open beast seas living moved, form.
                                                    Void stars you our dominion </p>
                                                <a href="project_details.html" className="btn_3">Visit Website <span className="flaticon-slim-right"></span> </a>
                                            </div>
                                        </div>
                                        </Slide>
                                        <Slide right>
                                        <div className="offset-lg-1 col-lg-6 col-md-6">
                                            <div className="demo_img">
                                                <img src="Images/demo/demo_1.png" alt="demo"></img>
                                            </div>
                                        </div>
                                        </Slide>
                                    </div>
                                </div>
                                <div className="single_work">
                                    <div className="row align-items-center">
                                        <Slide left>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="demo_img">
                                                <img src="Images/demo/demo_2.png" alt="demo"></img>
                                            </div>
                                        </div>
                                        </Slide>
                                        <Slide right>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single_work_demo">
                                                <h3>WSE GAMES</h3>
                                                
                                                <p>Place isn't heaven firmament divided shall fruitful bring bring may midst
                                                    every a night dry herb. Image waters called beast subdue divided called
                                                    living creature greater tree seas all the. Hath multiply female you're
                                                    male likeness his made open beast seas living moved, form.
                                                    Void stars you our dominion </p>
                                                <a href="project_details.html" className="btn_3">Visit Website <span className="flaticon-slim-right"></span> </a>
                                            </div>
                                        </div>
                                        </Slide>
                                    </div>
                                </div>
                                <div className="single_work">
                                    <div className="row align-items-center">
                                        <Slide left>
                                        <div className="offset-lg-1 col-lg-4 col-md-6">
                                            <div className="single_work_demo">
                                                <h3>WSE WRITING</h3>
                                                
                                                <p>Place isn't heaven firmament divided shall fruitful bring bring may midst
                                                    every a night dry herb. Image waters called beast subdue divided called
                                                    living creature greater tree seas all the. Hath multiply female you're
                                                    male likeness his made open beast seas living moved, form.
                                                    Void stars you our dominion </p>
                                                <a href="project_details.html" className="btn_3">Visit Website <span className="flaticon-slim-right"></span> </a>
                                            </div>
                                        </div>
                                        </Slide>
                                        <Slide right>
                                        <div className="offset-lg-1 col-lg-6 col-md-6">
                                            <div className="demo_img">
                                                <img src="Images/demo/demo_3.png" alt="demo"></img>
                                            </div>
                                        </div>
                                        </Slide>
                                    </div>
                                </div>
                                <div className="single_work">
                                    <div className="row align-items-center">
                                        <Slide left>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="demo_img">
                                                <img src="Images/demo/demo_2.png" alt="demo"></img>
                                            </div>
                                        </div>
                                        </Slide>
                                        <Slide right>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single_work_demo">
                                                <h3>WSE POLYZAP</h3>
                                                
                                                <p>Place isn't heaven firmament divided shall fruitful bring bring may midst
                                                    every a night dry herb. Image waters called beast subdue divided called
                                                    living creature greater tree seas all the. Hath multiply female you're
                                                    male likeness his made open beast seas living moved, form.
                                                    Void stars you our dominion </p>
                                                <a href="project_details.html" className="btn_3">Visit Website <span className="flaticon-slim-right"></span> </a>
                                            </div>
                                        </div>
                                        </Slide>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
