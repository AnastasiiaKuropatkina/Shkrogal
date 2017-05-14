import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return <header className="main-header box flex flex-space-between flex-items-stretch">
            <div className="logo flex">
                <a className="logo__link flex flex-justify-center flex-items-center box">
                    <Link to="/">
                        <img className="logo__image" src="src/img/logo.svg" alt="" role="presentation"/>
                    </Link>
                </a>
            </div>
            <div className="container header-nav box flex flex-space-between flex-items-stretch">
                <nav className="nav flex flex-start flex-items-end">
                    <a className="nav-item flex-items fs-14 cl-brand" >
                        <Link to="/portfolio.html">Мастерская</Link>
                    </a>
                    <a className="nav-item flex-items fs-14 cl-brand">
                        <Link to="/services.html">Услуги</Link>
                    </a>
                    <a className="nav-item flex-items fs-14 cl-brand">
                        <Link to="/blog.html">Блог</Link>
                    </a>
                    <a className="nav-item flex-items fs-14 cl-brand">
                        <Link to="/contacts.html">Контакты</Link>
                    </a>
                </nav>
            </div>
            <div className="aside-right bg-dark flex">
                <a className="flex flex flex-justify-center flex-items-center button-header fs-14 fw-300 cl-white"
                   >
                    <Link to="/portfolio.html">Проекты</Link>
                </a>
            </div>
        </header>
    }
}