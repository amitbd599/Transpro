import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";
const NavbarFour = () => {
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
      {/* navbar area start  */}
      <nav className='navbar navbar-area-1  navbar-area-4 navbar-area navbar-expand-lg'>
        <div className='container nav-container'>
          <div className='responsive-mobile-menu'>
            <div className='logo-wrapper'>
              <a href='home.html' className='logo'>
                <img src='assets/img/logo-2.png' alt='img' />
              </a>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={
                open
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none "
              }
              data-target='#transpro_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div
            className={
              open
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
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
    </>
  );
};

export default NavbarFour;
