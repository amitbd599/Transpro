import React from "react";

const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-bottom-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1'
                    src='./assets/img/about/shape.png'
                    alt='img'
                  />
                  <img
                    className='img-2'
                    src='./assets/img/about/1.png'
                    alt='img'
                  />
                  <img
                    className='img-3'
                    src='./assets/img/about/2.png'
                    alt='img'
                  />
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='img' />
                    <div className='details'>
                      <h1>22</h1>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title'>
                      WELCOME WORLD WIDE BEST TRANSPORT COMPANY
                    </h2>
                    <p className='content left-line'>
                      Competently implement efficient e-commerce without
                      cross-unit growth strategies.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img src='./assets/img/icon/check.png' alt='img' />{" "}
                            Unlimited Revisions
                          </li>
                          <li>
                            <img src='./assets/img/icon/check.png' alt='img' />
                            Best Fitness Excercise
                          </li>
                          <li>
                            <img src='./assets/img/icon/check.png' alt='img' />
                            Combine Fitness and
                          </li>
                          <li>
                            <img src='./assets/img/icon/check.png' alt='img' />
                            Best Solutions
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/3.png' alt='img' />
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <a className='btn btn-base' href='about.html'>
                        ABOUT MORE
                      </a>
                      <div className='author-wrap'>
                        <div className='thumb'>
                          <img src='./assets/img/about/4.png' alt='img' />
                        </div>
                        <div className='details'>
                          <img
                            src='./assets/img/about/signature.png'
                            alt='img'
                          />
                          <p>CEO, Of Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
