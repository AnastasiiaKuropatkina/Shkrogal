"use strict";
import css from './scss/app.scss';
import 'babel-polyfill'
import React from "react"
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Match
} from 'react-router-dom'

import Wrapper from "./js/components/Wrapper"
import Portfolio from "./js/components/Portfolio"
const __DEV__ = true;
const root = document.getElementById('root');

if (__DEV__) {
    const RedBox = require('redbox-react').default;
    try {
        render(
            <Router >
                <div>
                    <Route exact path="/" component={Wrapper}/>
                    <Route path="/portfolio.html" component={Portfolio}/>
                </div>
            </Router>,
            root
        )
    } catch (e) {
        render(<RedBox error={e} />, root)
    }
} else {
    /*render(
        <Router >
            <Route path='/' component={Wrapper} />
        </Router>,
        root
    )*/
}