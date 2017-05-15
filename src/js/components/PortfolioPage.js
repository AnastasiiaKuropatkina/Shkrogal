import React, { Component } from 'react';

export default class PortfolioPage extends Component {
    render() {
        return <div>
            <aside className="aside-left bg-white">
                <div className="aside-left__inner">
                    <div className="logo flex">
                        <a className="logo__link flex flex-justify-center flex-items-center box" href="/">
                            <img className="logo__image" src="src/img/logo.svg" alt="" role="presentation"/>
                        </a>
                    </div>
                    <div className="aside-left__title fs-48 fw-300">Мастерская</div>
                    <div className="logo logo_bottom flex">
                        <a className="logo__link flex flex-justify-center flex-items-center" href="/">
                            <img className="logo__image" src="src/img/logo.svg" alt="logo" title=""/>
                        </a>
                    </div>
                </div>
            </aside>
            <div className="content container"></div>
        </div>
    }
}