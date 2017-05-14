import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="main-wrapper__footer">
                <div className="footer flex box bg-dark">
                    <div className="container flex flex-row-2 flex box flex-start flex-items-end">
                        <div className="flex-item">
                            <nav className="nav flex flex-start flex-items-end">
                                <a className="nav-item flex-items fs-14 cl-white" href="/portfolio.html">{'Мастерская'}</a>
                                <a className="nav-item flex-items fs-14 cl-white" href="/services.html">{'Услуги'}</a>
                                <a className="nav-item flex-items fs-14 cl-white" href="/blog.html">{'Блог'}</a>
                                <a className="nav-item flex-items fs-14 cl-white" href="/contacts.html">{'Контакты'}</a>
                            </nav>
                        </div>
                        <div className="flex-item">
                            <div className="footer-block flex flex-row-2 flex box flex-start flex-items-end">
                                <div className="flex-item">
                                    <span className="cl-white">
                                        <a className="phone" rel="nofollow" href="tel:+3-044-531-3854">{'(044)531 38 54,'}</a>
                                        <a className="phone" rel="nofollow" href="tel:+3-044-501-0349">{'(044)501 03 49'}</a>
                                    </span>
                                    <br/>
                                    <span className="cl-white">
                                        <a className="mail" rel="nofollow" href="mailto:info@archmaster@gala.net">{'archmaster@gala.net'}</a>
                                    </span>
                                    <br/>
                                    <span className="cl-white">{'г. Киев, ул. Гринченко, 7'}</span>
                                </div>
                                <div className="flex-item">
                                    <span className="fs-14 cl-white">{'the 23::.'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="totop-link"></div>
            </div>
            )
        }
    }
