import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
const NavbarThree = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);
  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* header area start */}
      <div className='home-area home-v1'>
        {/* navbar area start  */}
        <nav className='navbar navbar-area navbar-expand-lg style-01 nav-absolute'>
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <div className='logo-wrapper'>
                <a href='home.html' className='logo'>
                  <img
                    src='assets/version-2/img/logo-white.png'
                    className='img-fluid'
                    alt='logo'
                  />
                </a>
              </div>
              <button
                className='navbar-toggler collapsed navbar-toggler-right'
                type='button'
                data-toggle='collapse'
                data-target='#transport_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='cross-menu'>
                  <span className='bar1' />
                  <span className='bar2' />
                  <span className='bar3' />
                </span>
              </button>
            </div>
            <div
              className='collapse navbar-collapse right-nav'
              id='transport_main_menu'
            >
              <ul className='navbar-nav'>
                <li className='menu-item-has-children current-menu-item'>
                  <a href='home.html'>Home</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='home.html'>Home 01</a>
                    </li>
                    <li>
                      <a href='home-2.html'>Home 02</a>
                    </li>
                    <li>
                      <a href='home-3.html'>Home 03</a>
                    </li>
                    <li>
                      <a href='home-4.html'>Home 04</a>
                    </li>
                    <li>
                      <a href='home-5.html'>Home 05</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Pages</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='about.html'>About</a>
                    </li>
                    <li>
                      <a href='blog.html'>Blog</a>
                    </li>
                    <li>
                      <a href='blog-details.html'>Blog Details</a>
                    </li>
                    <li>
                      <a href='service.html'>Service</a>
                    </li>
                    <li>
                      <a href='service-details.html'>Service Details</a>
                    </li>
                    <li>
                      <a href='pricing.html'>Pricing</a>
                    </li>
                    <li>
                      <a href='faq.html'>FAQ</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Services</a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='service.html'>Services</a>
                    </li>
                    <li>
                      <a href='service-details.html'>Services Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='about.html'>About us</a>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* navbar area end */}
        {/* header slider area start */}
        <div className='transport-slider-area-wrapper'>
          <div className='transport-slider'>
            <div
              className='transport-slider-item'
              style={{
                backgroundImage: "url(assets/version-2/img/slide-v1/bg-01.png)",
              }}
            >
              <div className='container'>
                <div className='row header-height1 justify-content-end'>
                  <div className='col-lg-5'>
                    <div className='header-inner-wrap'>
                      <div className='header-inner'>
                        {/* header inner */}
                        <span className='sub-title  wow fadeInDown'>
                          Real Solutions, Real Fast!
                        </span>
                        <h1 className='title animated slideInRight'>
                          We Will Transfer Anything in any Where
                        </h1>
                        <div className='btn-wrapper aanimated fadeInUpBig'>
                          <a href='#' className='transport-btn'>
                            <span>Contact for transport </span>
                          </a>
                        </div>
                      </div>
                      {/* //.header inner */}
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='header-image'>
                      <div className='header-slide-image image1'>
                        <img
                          src='assets/version-2/img/slide-v1/slide-01.png'
                          className='img-fluid'
                          alt='slide image'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='transport-slider-item'
              style={{
                backgroundImage: "url(assets/version-2/img/slide-v1/bg-02.png)",
              }}
            >
              <div className='container'>
                <div className='row justify-content-end'>
                  <div className='col-lg-5'>
                    <div className='header-inner-wrap'>
                      <div className='header-inner'>
                        {/* header inner */}
                        <span className='sub-title'>
                          Real Solutions, Real Fast!
                        </span>
                        <h1 className='title'>
                          We Will Transfer Anything in any Where{" "}
                        </h1>
                        <div className='btn-wrapper animated fadeInUpBig'>
                          <a href='#' className='transport-btn'>
                            <span>Contact for transport </span>
                          </a>
                        </div>
                      </div>
                      {/* //.header inner */}
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='header-image'>
                      <div className='header-slide-image image2'>
                        <img
                          src='assets/version-2/img/slide-v1/slide-02.png'
                          className='img-fluid'
                          alt='slide image'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='transport-slider-item'
              style={{
                backgroundImage: "url(assets/version-2/img/slide-v1/bg-03.png)",
              }}
            >
              <div className='container'>
                <div className='row justify-content-end'>
                  <div className='col-lg-5'>
                    <div className='header-inner-wrap'>
                      <div className='header-inner'>
                        {/* header inner */}
                        <span className='sub-title'>
                          Real Solutions, Real Fast!
                        </span>
                        <h1 className='title'>
                          We Will Transfer Anything in any Where{" "}
                        </h1>
                        <div className='btn-wrapper animated fadeInUpBig'>
                          <a href='#' className='transport-btn'>
                            <span>Contact for transport </span>
                          </a>
                        </div>
                      </div>
                      {/* //.header inner */}
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='header-image'>
                      <div className='header-slide-image image3'>
                        <img
                          src='assets/version-2/img/slide-v1/slide-03.png'
                          className='img-fluid'
                          alt='slide image'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='transport-slider-progress'>
          <span className='transport-slider-progress-bg' />
          <span className='transport-slider-progress-is' />
        </div>
        <div className='slider-bottom-transport-wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-9'>
                {/* header slider area end */}
                <div className='transport-slider-indicator'>
                  <div className='transport-slider-nav'>
                    <div className='transport-slider-nav-active'>
                      <div className='transport-slider-nav-item'>
                        <a href='#'>
                          {" "}
                          <i className='flaticon-delivery-truck-with-packages-behind' />
                          Road Transport{" "}
                        </a>
                      </div>
                    </div>
                    <div className='transport-slider-nav-active'>
                      <div className='transport-slider-nav-item'>
                        <a href='#'>
                          <i className='flaticon-ship' />
                          Ocean Transport{" "}
                        </a>
                      </div>
                    </div>
                    <div className='transport-slider-nav-active'>
                      <div className='transport-slider-nav-item'>
                        <a href='#'>
                          {" "}
                          <i className='flaticon-plane' />
                          Air Transport
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* slider bottom transport wrapper  start */}
              </div>
              <div className='col-lg-3'>
                <div className='transport-slider-controls'>
                  <div className='transport-slider-nav' />
                </div>
              </div>
            </div>
          </div>
          {/* slider bottom transport wrapper end */}
        </div>
      </div>
      {/* header area end */}
    </>
  );
};

export default NavbarThree;
