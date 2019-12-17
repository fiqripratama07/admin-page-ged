import * as React from "react";

class Header extends React.Component{
    render() {
        return(
            <body>
            <div className="preloader">
                <div className="loader">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header-area">
                <div className="navbar-area headroom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="assets/images/logo.png" alt="Logo"/>
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav m-auto">
                                            <li className="nav-item active">
                                                <a href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#about">About </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#services">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#portfolio">Portfolio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#blog">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="navbar-btn d-none d-sm-inline-block">
                                        <a className="main-btn" data-scroll-nav="0" href="#pricing">Download</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" className="header-hero bg_cover d-lg-flex align-items-center"
                     style="background-image: url(assets/images/header-hero.jpg)">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="header-hero-content">
                                    <h1 className="hero-title wow fadeInUp" data-wow-duration="1s"
                                        data-wow-delay="0.2s"><b>Your</b> <span>Consultancy</span> Partner
                                        for <b>Growth.</b></h1>
                                    <p className="text wow fadeInUp" data-wow-duration="1s"
                                       data-wow-delay="0.5s">Phasellus vel elit efficitur, gravida libero sit amet,
                                        scelerisque tortor arcu, commodo sit amet nulla sed.</p>
                                    <div className="header-singup wow fadeInUp" data-wow-duration="1s"
                                         data-wow-delay="0.8s">
                                        <input type="text" placeholder="username@yourdomain.com"/>
                                            <button className="main-btn">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-hero-image d-flex align-items-center wow fadeInRightBig"
                         data-wow-duration="1s" data-wow-delay="1.1s">
                        <div className="image">
                            <img src="assets/images/hero-image.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </header>

            </body>

        )
    }

}
export default Header;
