import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="banner-image">
                                <figure>
                                    <img src="/Images/banner-1.png" className="img-responsive"></img>
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="banner-image text-center">
                                <h2>Together <br></br><span>We Grow</span></h2>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="banner-image1">
                            <h2>About US</h2>
                            <p>Founded in 1996, wse promotes and invests into businesses that are scalable primarily in the consumption space looking at the vast Indian consumer market. Investment into talented minds is the key focus at wse, may it be our teams or like-minded Entrepreneurs who are workings on emerging business models. We have created a rich ecosystem using a robust business network powered by our constant endeavor to expand our ventures across the consumable market space.

Comprises of diversified business interests in different sectors Writing Instruments & Stationeries, Multilayer LD Lamination Polyfilm, Software Developments, Gaming & Entertainment sector.

On the Investment front, we encourage individuals who have an innovative bent of mind and stick to their core competencies. Our investment philosophy is based on a deep rooted business understanding, solution oriented approach, extensive research and a strong support system that enables people and industries to grow. We believe in growth through partnerships. We help like-minded entrepreneurs grow through our investments and knowledge based interventions. Our diversified interests in these sectors are in to Self-Drive Car Rentals, Pharma Projects, Software developments, Disposable Cutlery, and more to come.</p>
<button type="button" className="btn btn-primary custom-btn">Join Us</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default About
