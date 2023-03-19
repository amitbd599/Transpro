import React from "react";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: "url(assets/img/footer/bg.png)" }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p>2245 Gilbert Ave, Cincinnati,</p>
                    <p>OH 45206, United States</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <p>info.logic@transpro.com</p>
                    <p>+1 800-226-4054</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Fri: 8am-21pm</p>
                    <p>Weekend - Sta &amp; Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo-white.png' alt='img' />
                </div>
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
            <div className='col-xl-2 col-md-6'>
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
            <div className='col-xl-2 col-md-6'>
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
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_subscribe'>
                <h4 className='widget-title'>SUBSCRIBE NOW</h4>
                <p>
                  Continually evolve worldwide vortals rather than process
                  centric human capital. Subscribe for our latest news &amp;
                  articles. and send message.
                </p>
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
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
