import React from "react";

const FooterTwo = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area style-2'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 align-self-center'>
                <div className='footer-top-subscribe'>
                  <div className='thumb'>
                    <img src='assets/img/logo-white.png' alt='img' />
                  </div>
                  <div className='media-left'>
                    <h3>SUBSCRIBE OUR LATEST NEWS &amp; ARTICLES.</h3>
                  </div>
                  <div className='media-body widget widget_subscribe mb-0'>
                    <div className='single-subscribe-inner'>
                      <input type='text' placeholder='Email Address' />
                      <a className='btn btn-base' href='#'>
                        <i className='fa fa-paper-plane' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>ABOUT COMPANY</h4>
                <div className='details'>
                  <p>
                    Quickly supply alternative strategic theme areas vis-a-vis
                    B2C mindshare. Objectively repurpose stand-alone synergy via
                    user-centric architectures.
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='#'>
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-whatsapp' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fab fa-linkedin-in' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <a href='about.html'>
                      <i className='fa fa-arrow-right' /> About Us
                    </a>
                  </li>
                  <li>
                    <a href='service.html'>
                      <i className='fa fa-arrow-right' /> Services
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Portfolio
                    </a>
                  </li>
                  <li>
                    <a href='blog.html'>
                      <i className='fa fa-arrow-right' />
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href='contact.html'>
                      <i className='fa fa-arrow-right' /> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Air Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Ocean Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Railway Freight
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Warehousing
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-arrow-right' /> Distribution
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_contact'>
                <h4 className='widget-title'>CONTACT NOW</h4>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <i className='fa fa-map-marker-alt' />
                  </div>
                  <div className='details'>
                    <p>2245 Gilbert Ave, Cincinnati, OH</p>
                    <p>45206, United States</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <i className='fas fa-mobile-alt' />
                  </div>
                  <div className='details'>
                    <p>+1 800-226-4054</p>
                    <p>+1 800-654-7896</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <i className='far fa-envelope' />
                  </div>
                  <div className='details'>
                    <p>info.logic@transpro.com</p>
                    <p>info@transpro.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterTwo;
