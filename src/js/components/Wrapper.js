import React, { Component } from 'react';
import Index from './Index';
import Footer from './Footer';

export default class Wrapper extends Component {
    render() {
        return <div>
            <div className="bg-wrapper">
                <div className="container bg-line-gradient"></div>
            </div>
            <div className="main-wrapper">
                <Index/>
                <Footer/>
            </div>
        </div>
    }
}

