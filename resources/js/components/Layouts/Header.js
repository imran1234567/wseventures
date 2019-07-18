import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact'; 
import Home from '../Pages/Home';

export default class Header extends Component {

    state = {
        color: 'white'
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 86) {
          this.setState({color: '#fff'})
        } else {
          this.setState({color: 'transparent'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }


    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light custom-header fixed-top" style={{background: this.state.color}}>
                    <div className="logo">
                        <Link to="/"><img src="/Images/logo.png" className="logo-img"></img></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">CONTACT US</Link>
                        </li>
                        
                    </ul>  
                    </div>
                </nav>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
            </Router>
            
        )
    }
}
