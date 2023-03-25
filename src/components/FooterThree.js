import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
  FaRegPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <>
      {/* footer area start  */}
      <footer className='footer-area'>
        {/* Widget Area Starts */}
        <div className='footer-widget-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 tab-margin-bottom-30'>
                <div className='footer-widget widget about_us_widget'>
                  <div className='footer-logo'>
                    <a href='home.html'>
                      <img
                        src='assets/version-2/img/logo-white.png'
                        alt='logo'
                      />
                    </a>
                  </div>
                  <p>
                    Affronting everything discretion men now own did. Still
                    round match we to. Frankness pronounce daughters remainder
                    extensive has but. Building mr concerns servants in he
                    outlived am breeding.
                  </p>
                </div>
              </div>
              <div className='col-lg-2 offset-lg-1 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title'>Valuable link</h5>
                  <ul>
                    <li>
                      <a href='#'>Services</a>
                    </li>
                    <li>
                      <a href='#'>Classic List</a>
                    </li>
                    <li>
                      <a href='#'>About us</a>
                    </li>
                    <li>
                      <a href='#'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 tab-margin-bottom-30'>
                <div className='footer-widget widget widget_nav_menu'>
                  <h5 className='widget-title'>Address </h5>
                  <p>813 West Livingston Drive</p>
                  <p>King Of Prussia, PA 19406</p>
                  <p>Phone: +8801-234-567-890</p>
                  <p> Email: hemal.jms@gmail.com</p>
                </div>
              </div>
              <div className='col-lg-3 offset-lg-1'>
                <div className='footer-widget widget'>
                  <h5 className='widget-title'>Latest Update</h5>
                  <p> Of friendship on inhabiting</p>
                  <p>Did friendly eat breeding</p>
                  <p>Object he barton no effect</p>
                  <p>Period so to oppose we</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Widget Area End */}
        {/* Copyright Area Starts */}
        <div className='footer-copyright-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='copyright-text'>
                  <span>
                    © 2019{" "}
                    <a href='#' className='active'>
                      Transpro
                    </a>{" "}
                    - All rights reserved.{" "}
                    <a href='#' target='_blank'>
                      wowtheme7
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='footer-social'>
                  <ul className='social-link'>
                    <li>
                      <a href='#' target='_blank' className='facebook'>
                        {" "}
                        <i className='fa fa-facebook-f' aria-hidden='true' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' className='twitter'>
                        <i className='fa fa-twitter' aria-hidden='true' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ'
                        target='_blank'
                        className='youtube'
                      >
                        <i className='fa fa-youtube-play' aria-hidden='true' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' className='instagram'>
                        <i className='fa fa-instagram' aria-hidden='true' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Area End */}
      </footer>
    </>
  );
};

export default FooterThree;