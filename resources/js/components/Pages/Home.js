import React, { Component } from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export class Home extends Component {
    render() {
        return (
            <div id="startchange">
            <div className="animation">
                <div className="container">
                    <section id="showcase">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="showcase-left">
                                        <img src="/Images/banner.png"></img>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6" style={{zIndex:1}}>
                                    <div className="showcase-right">
                                        <h1 className="head-text">Hands-free help from the Google Assistant</h1>
                                        <p>Google Home voice-activated speaker.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                                        <button type="button" className="btn btn-primary custom-btn">About Us</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
            </div>
            
                <section id="testimonial">
                    <div className="container">
                        <p><Fade bottom>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</Fade><Fade bottom>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</Fade>  <Fade bottom>veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim</Fade> <Fade bottom>ad minim veniam, quis nostrud"</Fade></p>
                        <p className="customer">- John Doe</p>
                    </div>
                </section>
                <section className="info1">
                <div className="container">
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center bg-new">
                                <h2 className="head-text">WSE PRODUCT</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <button type="button" className="btn btn-outline-primary custom-btn">Visit</button>

                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="/Images/product.png" className="new-img"></img>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="/Images/impact.png" className="new-img"></img>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center bg-new">
                                <h2 className="head-text">WSE IMPACT</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <button type="button" className="btn btn-outline-primary custom-btn">Visit</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center bg-new">
                                <h2 className="head-text">WSE POLYZAP</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <button type="button" className="btn btn-outline-primary custom-btn">Visit</button>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="/Images/polyzap.png" className="new-img"></img>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="/Images/infratech.png" className="new-img"></img>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center bg-new">
                                <h2 className="head-text">WSE INFRATECH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <button type="button" className="btn btn-outline-primary custom-btn">Visit</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="row">
                        <Slide left>
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center bg-new">
                                <h2 className="head-text">WSE GAMES</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                <button type="button" className="btn btn-outline-primary custom-btn">Visit</button>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <img src="/Images/games.png" className="new-img"></img>
                            </div>
                        </Slide>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Home
