import React from 'react';
import {Link} from "react-router-dom";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="site-wrap" id="home-section">
                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle"></span>
                            </div>
                        </div>
                        <div className="site-mobile-menu-body"></div>
                    </div>
                    <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                        <div className="container">
                            <div className="row align-items-center position-relative">


                                <div className="site-logo">
                                    <Link to={"/"} className="text-black"><span
                                        className="text-primary">GED</span></Link>
                                </div>

                                <div className="col-12">
                                    <nav className="site-navigation text-right ml-auto " role="navigation">

                                        <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                            <li><a href="#home-section" className="nav-link">Home</a></li>
                                            <li><a href="#services-section" className="nav-link">Services</a></li>


                                            <li className="has-children">
                                                <a href="#about-section" className="nav-link">About Us</a>
                                                <ul className="dropdown arrow-top">
                                                    <li><a href="#team-section" className="nav-link">Team</a></li>
                                                    <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                                                    <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                                                    <li className="has-children">
                                                        <a href="#">More Links</a>
                                                        <ul className="dropdown">
                                                            <li><a href="#">Menu One</a></li>
                                                            <li><a href="#">Menu Two</a></li>
                                                            <li><a href="#">Menu Three</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li><a href="#why-us-section" className="nav-link">Why Us</a></li>

                                            <li><a href="#testimonials-section" className="nav-link">Testimonials</a>
                                            </li>
                                            <li><Link to="/login" className="nav-link">Login</Link></li>
                                        </ul>
                                    </nav>

                                </div>

                                <div className="toggle-button d-inline-block d-lg-none"><a href="#"
                                                                                           className="site-menu-toggle py-5 js-menu-toggle text-black"><span
                                    className="icon-menu h3"></span></a></div>

                            </div>
                        </div>

                    </header>

                    <div className="ftco-blocks-cover-1">
                        <div className="ftco-cover-1 overlay"
                             style={{backgroundImage: `url(require("images/landing_page.jpg"))`}}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h1>Choose Your Quality Delivery of Your Expedition and Dropshipping</h1>
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Est
                                            magni perferendis fugit modi similique, suscipit, deserunt a iure.</p>
                                        <form action="#">
                                            <div className="form-group d-flex">
                                                <input type="text" className="form-control"
                                                       placeholder="Enter your tracking number"/>
                                                <input type="submit" className="btn btn-primary text-white px-4"
                                                       value="Track Now"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ftco-service-image-1 pb-5">
                            <div className="container">
                                <div className="owl-carousel owl-all">
                                    <div className="service text-center">
                                        <a href="#"><img src="images/cargo_sea_small.jpg" alt="Image"
                                                         className="img-fluid"/></a>
                                        <div className="px-md-3">
                                            <h3><a href="#">Sea Freight</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and
                                                Consonantia.</p>
                                        </div>
                                    </div>
                                    <div className="service text-center">
                                        <a href="#"><img src="images/cargo_air_small.jpg" alt="Image"
                                                         className="img-fluid"/></a>
                                        <div className="px-md-3">
                                            <h3><a href="#">Air Freight</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and
                                                Consonantia.</p>
                                        </div>
                                    </div>
                                    <div className="service text-center">
                                        <a href="#"><img src="images/cargo_delivery_small.jpg" alt="Image"
                                                         className="img-fluid"/></a>
                                        <div className="px-md-3">
                                            <h3><a href="#">Package Forwarding</a></h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and
                                                Consonantia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="site-section bg-light" id="services-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1">
                                        <h2>What We Offer</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="owl-carousel owl-all">
                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-ferry"></span>
                                    </div>
                                    <h3 className="mb-3">Sea Freight</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-airplane"></span>
                                    </div>
                                    <h3 className="mb-3">Air Freight</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-box"></span>
                                    </div>
                                    <h3 className="mb-3">Package Forwarding</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-lorry"></span>
                                    </div>
                                    <h3 className="mb-3">Trucking</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-warehouse"></span>
                                    </div>
                                    <h3 className="mb-3">Warehouse</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                                <div className="block__35630">
                                    <div className="icon mb-0">
                                        <span className="flaticon-add"></span>
                                    </div>
                                    <h3 className="mb-3">Delivery</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section">

                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                        <h2>About Us</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="site-section bg-light" id="about-section">
                        <div className="container">
                            <div className="row justify-content-center mb-4 block-img-video-1-wrap">
                                <div className="col-md-12 mb-5">
                                    <figure className="block-img-video-1" data-aos="fade">
                                        <a href="https://vimeo.com/45830194" data-fancybox data-ratio="2">
                                            <span className="icon"><span className="icon-play"></span></span>
                                            <img src="images/cargo_delivery_big.jpg" alt="Image" className="img-fluid"/>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up"
                                             data-aos-delay="">
                                            <div className="block-counter-1">
                                                <span className="number"><span data-number="50">0</span>+</span>
                                                <span className="caption">Years of Experience</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up"
                                             data-aos-delay="100">
                                            <div className="block-counter-1">
                                                <span className="number"><span data-number="300">0</span>+</span>
                                                <span className="caption">Companies</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up"
                                             data-aos-delay="200">
                                            <div className="block-counter-1">
                                                <span className="number"><span data-number="108">0</span>+</span>
                                                <span className="caption">Covered Countries</span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3" data-aos="fade-up"
                                             data-aos-delay="300">
                                            <div className="block-counter-1">
                                                <span className="number"><span data-number="1500">0</span>+</span>
                                                <span className="caption">Couriers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="site-section" id="team-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-7 text-center">
                                    <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                        <h2>Our Staff</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="owl-carousel owl-all">
                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/person_1.jpg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Trisiam</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Backend Dev</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/person_2.jpg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Elda Oktaviani</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Frontend Dev</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/person_3.jpg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Putri Zebua</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Mobile Dev</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/person_2.jpg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Safira Andjani</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Frontend Dev</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                                <div className="block-team-member-1 text-center rounded h-100">
                                    <figure>
                                        <img src="images/person_1.jpg" alt="Image"
                                             className="img-fluid rounded-circle"/>
                                    </figure>
                                    <h3 className="font-size-20 text-black">Fiqri Pratama</h3>
                                    <span
                                        className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">Frontend Dev</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries
                                        Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="block-social-1">
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-facebook"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-twitter"></span></a>
                                        <a href="#"
                                           className="btn border-w-2 rounded primary-primary-outline--hover"><span
                                            className="icon-instagram"></span></a>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className="site-section bg-light" id="pricing-section">
                        <div className="container">
                            <div className="row mb-5 justify-content-center text-center">
                                <div className="col-md-7">
                                    <div className="block-heading-1" data-aos="fade-up" data-aos-delay="">
                                        <h2>Pricing</h2>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Basic</h3>
                                        <div className="price text-center mb-4 ">
                                            <span><span>$47</span> / year</span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">

                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li className="remove">Lorem ipsum dolor sit amet</li>
                                            <li className="remove">Consectetur adipisicing elit</li>
                                            <li className="remove">Dolorum esse odio quas architecto sint</li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Premium</h3>
                                        <div className="price text-center mb-4 ">
                                            <span><span>$200</span> / year</span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">

                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipisicing elit</li>
                                            <li className="remove">Dolorum esse odio quas architecto sint</li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-primary btn-md text-white">Buy Now</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="pricing">
                                        <h3 className="text-center text-black">Professional</h3>
                                        <div className="price text-center mb-4 ">
                                            <span><span>$750</span> / year</span>
                                        </div>
                                        <ul className="list-unstyled ul-check success mb-5">

                                            <li>Officia quaerat eaque neque</li>
                                            <li>Possimus aut consequuntur incidunt</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Consectetur adipisicing elit</li>
                                            <li>Dolorum esse odio quas architecto sint</li>
                                        </ul>
                                        <p className="text-center">
                                            <a href="#" className="btn btn-secondary btn-md">Buy Now</a>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="site-section" id="faq-section">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="block-heading-1 col-12 text-center">
                                    <h2>Frequently Ask Questions</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>Can I accept both
                                            Paypal and Stripe?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>What available is
                                            refund period?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>Can I accept both
                                            Paypal and Stripe?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>What available is
                                            refund period?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>Where are you
                                            from?
                                        </h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>What is your
                                            opening
                                            time?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>Can I accept both
                                            Paypal and Stripe?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>

                                    <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <h3 className="text-black h4 mb-4"><span
                                            className="icon-question_answer text-primary mr-2"></span>What available is
                                            refund period?</h3>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                            Consonantia, there live the blind texts. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block__73694 site-section border-top" id="why-us-section">
                        <div className="container">
                            <div className="row d-flex no-gutters align-items-stretch">

                                <div className="col-12 col-lg-6 block__73422 order-lg-2" data-aos="fade-left"
                                     style={{backgroundImage: `url(require("images/cargo_sea_small.jpg"))`}}
                                     data-aos-delay="">
                                </div>


                                <div className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1" data-aos="fade-right"
                                     data-aos-delay="">
                                    <h2 className="mb-4 text-black">Why Us</h2>
                                    <h4 className="text-primary">We work quickly and efficiently!</h4>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences
                                        fly
                                        into your mouth.</p>

                                    <ul className="ul-check primary list-unstyled mt-5">
                                        <li>Cargo express</li>
                                        <li>Secure Services</li>
                                        <li>Secure Warehouseing</li>
                                        <li>Cost savings</li>
                                        <li>Proven by great companies</li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="site-section bg-light block-13" id="testimonials-section" data-aos="fade">
                        <div className="container">

                            <div className="text-center mb-5">
                                <div className="block-heading-1">
                                    <h2>Happy Clients</h2>
                                </div>
                            </div>

                            <div className="owl-carousel nonloop-block-13">
                                <div>
                                    <div className="block-testimony-1 text-center">

                                        <blockquote className="mb-4">
                                            <p>&ldquo;The Big Oxmox advised her not to do so, because there were
                                                thousands
                                                of bad Commas, wild Question Marks and devious Semikoli, but the Little
                                                Blind Text didn’t listen. She packed her seven versalia, put her initial
                                                into the belt
                                                and made herself on the way.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_4.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>&ldquo;Even the all-powerful Pointing has no control about the blind
                                                texts it
                                                is an almost unorthographic life One day however a small line of blind
                                                text
                                                by the name of Lorem Ipsum decided to leave for the far World of
                                                Grammar.&rdquo;</p>
                                        </blockquote>
                                        <figure>
                                            <img src="images/person_2.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>

                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">


                                        <blockquote className="mb-4">
                                            <p>&ldquo;A small river named Duden flows by their place and supplies it
                                                with
                                                the necessary regelialia. It is a paradisematic country, in which
                                                roasted
                                                parts of sentences fly into your mouth.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_1.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 text-black">Mellisa Griffin</h3>


                                    </div>
                                </div>

                                <div>
                                    <div className="block-testimony-1 text-center">
                                        <blockquote className="mb-4">
                                            <p>&ldquo;Far far away, behind the word mountains, far from the countries
                                                Vokalia and Consonantia, there live the blind texts. Separated they live
                                                in
                                                Bookmarksgrove right at the coast of the Semantics, a large language
                                                ocean.&rdquo;</p>
                                        </blockquote>

                                        <figure>
                                            <img src="images/person_3.jpg" alt="Image"
                                                 className="img-fluid rounded-circle mx-auto"/>
                                        </figure>
                                        <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>

                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                    <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <h2 className="footer-heading mb-4">About Us</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia
                                                and
                                                Consonantia, there live the blind texts. </p>
                                        </div>
                                        <div className="col-md-4 ml-auto">
                                            <h2 className="footer-heading mb-4">Features</h2>
                                            <ul className="list-unstyled">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Testimonials</a></li>
                                                <li><a href="#">Terms of Service</a></li>
                                                <li><a href="#">Privacy</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 ml-auto">

                                    <div className="mb-5">
                                        <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                                        <form action="#" method="post" className="footer-suscribe-form">
                                            <div className="input-group mb-3">
                                                <input type="text"
                                                       className="form-control border-secondary text-white bg-transparent"
                                                       placeholder="Enter Email" aria-label="Enter Email"
                                                       aria-describedby="button-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary text-white" type="button"
                                                            id="button-addon2">Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>


                                    <h2 className="footer-heading mb-4">Follow Us</h2>
                                    <a href="#about-section" className="smoothscroll pl-0 pr-3"><span
                                        className="icon-facebook"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                    <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                                </div>
                            </div>
                            <div className="row pt-5 mt-5 text-center">
                                <div className="col-md-12">
                                    <div className="border-top pt-5">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default LandingPage;
