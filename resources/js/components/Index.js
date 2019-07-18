import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
            
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
