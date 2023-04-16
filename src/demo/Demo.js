import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaCartArrowDown, FaCog } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";
import "./style.css";
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
    <section className='demo'>
      {/* Navigation */}
      <header className='navbar-area'>
        <nav
          className={
            stickyNav
              ? "navbar navbar-expand-lg navbar-default navbar-fixed-top top-nav-collapse"
              : "navbar navbar-expand-lg navbar-default navbar-fixed-top"
          }
        >
          <div className='container nav-container'>
            <div className='logo'>
              <Link className='main-logo' to='/'>
                <img src='assets/demo-img/logo-white.png' alt='img' />
              </Link>
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
                  <Link className='cart' to='#'>
                    <img src='assets/demo-img/add-to-cart.svg' alt='img' />
                  </Link>
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
        style={{ backgroundImage: 'url("assets/demo-img/01.png")' }}
      >
        <div className='sidebar-links'>
          <a
            className='btn btn-white d-flex gap-2 align-items-center'
            href='https://themeforest.net/user/wowtheme7'
          >
            <FaCartArrowDown />
            Add To Cart
          </a>
          <a
            className='btn btn-white d-flex gap-2 align-items-center'
            href='https://themeforest.net/user/wowtheme7'
          >
            <FaCog />
            Demo Link
          </a>
        </div>
        <div className='container'>
          <div className='row justify-content-center justify-content-xl-start'>
            <div className='col-lg-10 align-self-center'>
              <div className='banner-inner text-xl-start text-center'>
                <h1>
                  TransPro - Transport &amp; Logistics Service React Template
                </h1>
                <p className='me-5'>
                  TransPro is ransport &amp; Logistics Service React theme built
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
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp delay={0} start={0} end={13} />+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Pages</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp delay={0} start={0} end={5} />
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p>Total Homes</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='single-counter-inner text-center'>
                  <div className='details'>
                    <h2>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className='counter'>
                              <CountUp delay={0} start={0} end={8} />+
                            </span>
                          )
                        }
                      </TrackVisibility>
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
      <section id='demo' className='demo-section pd-top-180'>
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
                <Link to='/home'>
                  <span className='thumb'>
                    <img src='assets/demo-img/1.png' alt='img' />
                  </span>
                  Home V.1
                </Link>
                <Link className='btn btn-base' to='/home'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.3s'
              >
                <Link to='/home-2'>
                  <span className='thumb'>
                    <img src='assets/demo-img/2.png' alt='img' />
                  </span>
                  Home V.2
                </Link>
                <Link className='btn btn-base' to='/home-2'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <Link to='/home-3'>
                  <span className='thumb'>
                    <img src='assets/demo-img/3.png' alt='img' />
                  </span>
                  Home V.3
                </Link>
                <Link className='btn btn-base' to='/home-3'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <Link to='/home-4'>
                  <span className='thumb'>
                    <img src='assets/demo-img/4.png' alt='img' />
                  </span>
                  Home V.4
                </Link>
                <Link className='btn btn-base' to='/home-4'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <Link to='/home-5'>
                  <span className='thumb'>
                    <img src='assets/demo-img/5.png' alt='img' />
                  </span>
                  Home V.5
                </Link>
                <Link className='btn btn-base' to='/home-5'>
                  Live Demo
                </Link>
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
                <Link to='/about'>
                  <span className='thumb'>
                    <img src='assets/demo-img/about.png' alt='img' />
                  </span>
                  About Page
                </Link>
                <Link className='btn btn-base' to='/about'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/service'>
                  <span className='thumb'>
                    <img src='assets/demo-img/service.png' alt='img' />
                  </span>
                  Service Page
                </Link>
                <Link className='btn btn-base' to='/service'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/service-details'>
                  <span className='thumb'>
                    <img src='assets/demo-img/service-details.png' alt='img' />
                  </span>
                  Service Details Page{" "}
                </Link>
                <Link className='btn btn-base' to='/service-details'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/pricing'>
                  <span className='thumb'>
                    <img src='assets/demo-img/pricing.png' alt='img' />
                  </span>
                  Pricing Page{" "}
                </Link>
                <Link className='btn btn-base' to='/pricing'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/blog'>
                  <span className='thumb'>
                    <img src='assets/demo-img/blog.png' alt='img' />
                  </span>
                  Blog Page
                </Link>
                <Link className='btn btn-base' to='/blog'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/blog-details'>
                  <span className='thumb'>
                    <img src='assets/demo-img/blog-details.png' alt='img' />
                  </span>
                  Blog Details Page
                </Link>
                <Link className='btn btn-base' to='/blog-details'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/faq'>
                  <span className='thumb'>
                    <img src='assets/demo-img/faq.png' alt='img' />
                  </span>
                  FAQ Page{" "}
                </Link>
                <Link className='btn btn-base' to='/faq'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item inner-page-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <Link to='/contact'>
                  <span className='thumb'>
                    <img src='assets/demo-img/contact.png' alt='img' />
                  </span>
                  Contact
                </Link>
                <Link className='btn btn-base' to='/contact'>
                  Live Demo
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='inner-item style-large wow animated fadeInUp coming-soon'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <Link to='#'>
                  <span className='thumb'>
                    <img src='assets/demo-img/4.png' alt='img' />
                  </span>
                  <span className='cm-soon-title'>Comming Soon</span>
                </Link>
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
                    src='assets/demo-img/header.png'
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
                    src='assets/demo-img/header2.png'
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
                    src='assets/demo-img/footer.png'
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
                <img src='assets/demo-img/featured/3.png' alt='img' />
                Bootstrap 5+
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='assets/demo-img/featured/1.png' alt='img' />
                Sass
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='assets/demo-img/featured/4.png' alt='img' />
                React Icons
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='assets/demo-img/featured/2.png' alt='img' />
                React-slick
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='assets/demo-img/featured/react.png' alt='img' />
                React
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='assets/demo-img/featured/6.png' alt='img' />
                CSS3
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='assets/demo-img/featured/7.png' alt='img' />
                NPM
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='assets/demo-img/featured/8.png' alt='img' />
                W3C Validation
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='assets/demo-img/featured/9.png' alt='img' />
                Clean Code
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='assets/demo-img/featured/8.png' alt='img' />
                Updated Version
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='assets/demo-img/featured/12.png' alt='img' />
                100% Responsive
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='assets/demo-img/featured/11.png' alt='img' />
                Google Fonts
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.2s'
              >
                <img src='assets/demo-img/featured/14.png' alt='img' />
                Well Documented
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.4s'
              >
                <img src='assets/demo-img/featured/15.png' alt='img' />
                Counter Up
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div
                className='featured-item wow animated fadeInUp'
                data-wow-duration='1.5s'
                data-wow-delay='0.6s'
              >
                <img src='assets/demo-img/featured/13.png' alt='img' />
                React Visibility Sensor
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer area start */}
      <footer
        className='footer-area pd-top-100'
        style={{ backgroundImage: 'url("assets/demo-img/01.png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='footer-widget widget text-center pd-bottom-100'>
                <Link className='logo' to='/index'>
                  <img src='assets/demo-img/logo-white.png' alt='#' />
                </Link>
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
