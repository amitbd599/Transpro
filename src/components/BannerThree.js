import React from "react";

const BannerThree = () => {
  return (
    <div>
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
  );
};

export default BannerThree;
