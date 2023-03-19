import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaCartArrowDown, FaCog } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
// import "./style.css";
const Demo = () => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 100) {
        setStickyNav(false);
      } else if (window.pageYOffset > 100) {
        setStickyNav(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <section className='root-demo'>
      {/* Navigation */}
      <header className='navbar-area'>
        <nav className='navbar navbar-expand-lg navbar-default navbar-fixed-top'>
          <div className='container nav-container'>
            <div className='logo'>
              <a className='main-logo' href='index.html'>
                <img src='demo-landing/img/logo-white.png' alt='img' />
              </a>
            </div>
            <div className='nav-right-part nav-right-part-mobile ms-auto'>
              <ul className='text-end'>
                <li>
                  <a className='page-scroll' href='#demo'>
                    Demos
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#inner'>
                    Inners
                  </a>
                </li>
                <li>
                  <a className='cart' href='log-in.html'>
                    <img src='demo-landing/img/add-to-cart.svg' alt='img' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='collapse navbar-collapse' id='al_main_menu'>
              <ul className='navbar-nav menu-open text-center m-auto'>
                <li>
                  <a className='page-scroll' href='#demo'>
                    Demos
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#inner'>
                    Inner Pages
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#header'>
                    Header
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#footer'>
                    Footer
                  </a>
                </li>
                <li>
                  <a className='page-scroll' href='#featured'>
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className='nav-right-part nav-right-part-desktop'>
              <ul>
                <li>
                  <a
                    href='https://themeforest.net/user/wowtheme7'
                    className='btn btn-white'
                  >
                    Purchase Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Banner Area Start*/}
      <section
        id='banner'
        className='banner-area'
        style={{ backgroundImage: 'url("demo-landing/img/01.png")' }}
      >
        <div className='sidebar-links'>
          <a
            className='btn btn-white'
            href='https://themeforest.net/user/wowtheme7'
          >
            <i className='fa fa-cart-arrow-down' />
            Add To Cart
          </a>
          <a
            className='btn btn-white'
            href='https://themeforest.net/user/wowtheme7'
          >
            <i className='fa fa-cog' />
            Demo Link
          </a>
        </div>
        <div className='container'>
          <div className='row justify-content-center justify-content-xl-start'>
            <div className='col-lg-10 align-self-center'>
              <div className='banner-inner text-xl-start text-center'>
                <h1>
                  TransPro - Transport &amp; Logistics Service HTML Template
                </h1>
                <p className='me-5'>
                  TransPro is ransport &amp; Logistics Service HTML theme built
                  for an array of services with a number of transport and
                  logistics institutions in mind.
                </p>
                <div className='btn-area'>
                  <a className='btn btn-border-white page-scroll' href='#demo'>
                    Try Demos
                  </a>
                  <a
                    className='btn btn-white me-0'
                    href='https://themeforest.net/user/wowtheme7'
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Area End */}
      {/* counter start */}
      <div className='counter-area pd-top-115 pd-bottom-90'>
        <div className='container'>
          <div
            className='counter-area-inner wow fadeInUp animated'
            data-wow-duration='1.5s'
            data-wow-delay='0.2s'
          >
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <span className='counter'>13</span>+
                    </h2>
                    <p>Total Pages</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <span className='counter'>05</span>
                    </h2>
                    <p>Total Homes</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <span className='counter'>08</span>+
                    </h2>
                    <p>Inner Pages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter end */}
      {/* demo Section */}
      <section id='demo' className='demo-section pd-top-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <h5 className='subtitle'>AWESOME DEMOS</h5>
                <h2 className='title'>Great Home Pages</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <a href='home.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/1.png' alt='img' />
                  </span>
                  Home V.1
                </a>
                <a className='btn btn-base' href='home.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <a href='home-2.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/2.png' alt='img' />
                  </span>
                  Home V.2
                </a>
                <a className='btn btn-base' href='home-2.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <a href='home-3.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/3.png' alt='img' />
                  </span>
                  Home V.3
                </a>
                <a className='btn btn-base' href='home-3.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <a href='home-4.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/4.png' alt='img' />
                  </span>
                  Home V.4
                </a>
                <a className='btn btn-base' href='home-4.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <a href='home-5.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/5.png' alt='img' />
                  </span>
                  Home V.5
                </a>
                <a className='btn btn-base' href='home-5.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp coming-soon'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <a href='#'>
                  <span className='thumb'>
                    <img src='demo-landing/img/4.png' alt='img' />
                  </span>
                  <span className='cm-soon-title'>Comming Soon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section id='inner' className='inner-section pd-top-130'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <h2 className='title'>Great Inner Pages</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='about.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/about.png' alt='img' />
                  </span>
                  About Page
                </a>
                <a className='btn btn-base' href='about.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='service.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/service.png' alt='img' />
                  </span>
                  Service Page
                </a>
                <a className='btn btn-base' href='service.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='service-details.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/service-details.png' alt='img' />
                  </span>
                  Service Details Page{" "}
                </a>
                <a className='btn btn-base' href='service-details.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='pricing.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/pricing.png' alt='img' />
                  </span>
                  Pricing Page{" "}
                </a>
                <a className='btn btn-base' href='pricing.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='blog.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/blog.png' alt='img' />
                  </span>
                  Blog Page
                </a>
                <a className='btn btn-base' href='blog.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='blog-details.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/blog-details.png' alt='img' />
                  </span>
                  Blog Details Page
                </a>
                <a className='btn btn-base' href='blog-details.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='faq.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/faq.png' alt='img' />
                  </span>
                  FAQ Page{" "}
                </a>
                <a className='btn btn-base' href='faq.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <a href='contact.html'>
                  <span className='thumb'>
                    <img src='demo-landing/img/contact.png' alt='img' />
                  </span>
                  Contact
                </a>
                <a className='btn btn-base' href='contact.html'>
                  Live Demo
                </a>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp coming-soon'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <a href='#'>
                  <span className='thumb'>
                    <img src='demo-landing/img/4.png' alt='img' />
                  </span>
                  <span className='cm-soon-title'>Comming Soon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id='header' className='widget-section pd-top-87'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <h2 className='title'>Header Style</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='demo-landing/img/header.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='demo-landing/img/header2.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* demo Section */}
      <section id='footer' className='widget-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center pd-top-130'>
              <div className='section-title'>
                <h2 className='title'>Footer Style</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='header-item mb-4'>
                <span className='thumb'>
                  <img
                    className='w-100'
                    src='demo-landing/img/footer.png'
                    alt='img'
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner Section */}
      <section
        id='featured'
        className='featured-section pd-top-87 pd-bottom-110'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div
                className='section-title wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <h2 className='title'>Core Features</h2>
                {/* <p>We have created a new product that will help designers, developers and com-panies create websites for their startups quickly and easily.</p> */}
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='demo-landing/img/featured/3.png' alt='img' />
                Bootstrap 5+
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='demo-landing/img/featured/1.png' alt='img' />
                Sass
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='demo-landing/img/featured/4.png' alt='img' />
                Font-Awesome
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='demo-landing/img/featured/2.png' alt='img' />
                Owl-Carousel
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='demo-landing/img/featured/5.png' alt='img' />
                HTML5
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='demo-landing/img/featured/6.png' alt='img' />
                CSS3
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='demo-landing/img/featured/7.png' alt='img' />
                Jquery Tilt
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='demo-landing/img/featured/8.png' alt='img' />
                W3C Validation
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='demo-landing/img/featured/9.png' alt='img' />
                Clean Code
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='demo-landing/img/featured/10.png' alt='img' />
                Magnific Popup
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='demo-landing/img/featured/12.png' alt='img' />
                100% Responsive
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='demo-landing/img/featured/11.png' alt='img' />
                Google Fonts
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='demo-landing/img/featured/14.png' alt='img' />
                Well Documented
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='demo-landing/img/featured/15.png' alt='img' />
                Counter Up
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='demo-landing/img/featured/13.png' alt='img' />
                Wow Js
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
      <footer
        className='footer-area pd-top-100'
        style={{ backgroundImage: 'url("demo-landing/img/01.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='footer-widget widget text-center pd-bottom-100'>
                <a className='logo' href='index.html'>
                  <img src='demo-landing/img/logo-white.png' alt='#' />
                </a>
                <h5 className='text-white mb-5 mt-5 lh-base'>
                  It is a modern &amp; beautiful Transport Template. It's
                  Specially transport &amp; logistics vehicle Site.
                </h5>
                <a
                  className='btn btn-white'
                  href='https://themeforest.net/user/wowtheme7'
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center align-self-center'>
                <p>Copy Right by wowtheme7</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </section>
  );
};

export default Demo;
