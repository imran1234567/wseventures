import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About, { Director } from '../Pages/Director';
import Contact from '../Pages/Contact'; 
import Home from '../Pages/Home';

export default class Header extends Component {

    render() {
        return (
            <Router>
                
                <header className="main_menu home_menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                    <Link className="navbar-brand" to="/"> <img src="Images/logo.png" alt="logo" className="logo"></img></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                        id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/director-desk">Director Desk</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/contact">Contact</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">Join Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <Route exact path='/' component={Home}/>
                <Route exact path='/director-desk' component={Director}/>
                <Route exact path='/contact' component={Contact}/>
            </Router>
            
        )
    }
}
