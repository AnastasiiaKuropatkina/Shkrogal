"use strict";
import css from './scss/app.scss';
import 'babel-polyfill'
import React from "react"
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Wrapper from "./js/components/Wrapper"
const __DEV__ = true;
const root = document.getElementById('root');

if (__DEV__) {
    const RedBox = require('redbox-react').default;
    try {
        render(
            <Router >
                <Route path='/' component={Wrapper} />
            </Router>,
            root
        )
    } catch (e) {
        render(<RedBox error={e} />, root)
    }
} else {
    render(
        <Router >
            <Route path='/' component={Wrapper} />
        </Router>,
        root
    )
}