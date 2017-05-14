import React, {Component} from 'react';
import Header from './Header';

export default class Index extends Component {
    render() {
        return <div className="main-wrapper__content">
            <Header/>
            <section className="section bg-header section-top flex">
                <div className="container flex flex-items-center flex-justify-flex-end">
                    <div className="section-top-text">
                        <h2 className="cl-brand-text fs-136 cl-white fw-900">Шкрогаль</h2>
                        <p className="cl-brand-text fs-36 fw-300 cl-white">Архитектурное бюро с историей</p>
                    </div>
                </div>
            </section>
            <section className="section-main-project box">
                <div className="content container-full">
                    <div className="flex">
                        <div className="flex-row-2 flex box flex-items-start flex-width">
                            <div className="flex-item">
                                <article className="article box"><h2 className="fs-60 fw-300">Дома на Воздвиженке</h2>
                                    <p className="fw-300">Описание проекта. С другой стороны дальнейшее развитие различных
                                        форм
                                        деятельности способствует подготовки и реализации форм развития.</p>
                                    <p className="fw-300">С другой стороны дальнейшее развитие различных форм деятельности
                                        способствует подготовки и реализации форм развития.</p>
                                    <div className="button-block"><a
                                        className="button button-more fs-16 fw-300 cl-white bg-dark"
                                        href="/test.html">Страница проекта</a></div>
                                </article>
                            </div>
                            <div className="flex-item main-bg-img main-bg-img-2"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-count box">
                <div className="content container-full">
                    <div className="flex">
                        <div className="flex-row-2 flex box flex-items-start flex-width">
                            <div className="flex-item main-bg-img main-bg-img-3"></div>
                            <div className="flex-item">
                                <div className="flex article">
                                    <div className="flex-row-2 flex box flex-items-start flex-width flex-wrap">
                                        <div className="flex-item cont-block">
                                            <p className="fs-18 fw-300">
                                                <span className="fs-60 fw-300">25.4</span>
                                                <span>&nbsp;га</span>
                                            </p>
                                            <p className="fs-18 fw-300">Общая площадь участка</p>
                                        </div>
                                        <div className="flex-item cont-block">
                                            <p className="fs-18 fw-300">
                                                <span className="fs-60 fw-300">425</span>
                                            </p>
                                            <p className="fs-18 fw-300">Количество квартир</p>
                                        </div>
                                        <div className="flex-item cont-block">
                                            <p className="fs-18 fw-300">
                                                <span className="fs-60 fw-300">1539</span>
                                                <span>&nbsp;м&sup2;</span>
                                            </p>
                                            <p className="fs-18 fw-300">Общая площадь участка</p>
                                        </div>
                                        <div className="flex-item cont-block">
                                            <p className="fs-18 fw-300"><span className="fs-60 fw-300">9153</span>
                                                <span>&nbsp;м&sup2;</span>
                                            </p>
                                            <p className="fs-18 fw-300">Общая площадь квартир</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-history box">
                <div className="history content container-full">
                    <div className="flex">
                        <div className="flex-row-2 flex box flex-items-start flex-width">
                            <div className="flex-item">
                                <article className="article box article-pad-fix">
                                    <h2 className="fs-60 fw-300">
                                    Мастерская, которая
                                    чувствуетКиев</h2>
                                    <div className="img-history"><img className="img-history__image" src="src/img/main_5.jpg" alt="" role="presentation"/></div>
                                </article>
                            </div>
                            <div className="flex-item main-bg-img main-bg-img-4">
                                <div className="history__name fw-700 flex flex-items-center"> Памятник автору произведений в
                                    Белой Цекви
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="history__block box bg-white">
                        <div className="article">
                            <p className="fw-300">| Частное предприятие «Творческая Архитектурная мастерская “В.
                            Шкрогаль”» основано в феврале 1990 года. За время работы реализовано множество интересных
                            проектов. Среди них Свято-Николаевский храм в с. Чайки, жилые дома на Жилянской, Щербакова,
                            Пожарского, административно-жилой комплекс по ул. Туманяна, жилые дома на Подоле (район
                            Воздвиженки).</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}
