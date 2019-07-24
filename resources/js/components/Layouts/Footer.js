import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-6 col-xl-3">
                                <div className="single-footer-widget footer_1">
                                    <h5 className="new-h2">WSE VENTURES PVT LTD</h5>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xl-4">
                                <div className="single-footer-widget footer_2">
                                    <div className="social_icon">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 col-xl-3">
                                <div className="single-footer-widget footer_3">
                                    <div className="footer_img">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_part_text text-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="footer-text m-0"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}
