import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner text-center">
                                    <div className="breadcrumb_iner_item">
                                        <h2>contact us</h2>
                                        <p>Home<span>//</span>contact us</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14739.627464124726!2d88.3551746!3d22.5451613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xccdadd4a5708d03a!2sWSE+Group!5e0!3m2!1sen!2sin!4v1563950583675!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                            <h3>The Legacy, 3rd Floor, 35A & 35B, 25A, Shakespeare Sarani,</h3>
                            <p>Mullick Bazar, Park Street area, Kolkata, West Bengal 700017</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                            <h3>076040 16858</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                            <h3>marketing@wseventures.com</h3>
                            <p>Send us your query anytime!</p>
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

export default Contact
