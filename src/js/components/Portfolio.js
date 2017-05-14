import React, { Component } from 'react';
import PortfolioPage from './PortfolioPage';
import Footer from './Footer';

export default class Portfolio extends Component {
    render() {
        return <div>
            <div className="bg-wrapper">
                <div className="container bg-line-gradient"></div>
            </div>
            <div className="main-wrapper">
                <PortfolioPage/>
                <Footer/>
            </div>
        </div>
    }
}