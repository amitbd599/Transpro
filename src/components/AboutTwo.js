import React from "react";
import { FaPlay } from "react-icons/fa";

const AboutTwo = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area-2 pd-top-120 pd-bottom-240'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-5 order-lg-2'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-1'
                    src='assets/img/about/shape.png'
                    alt='img'
                  />
                  <img
                    className='img-2'
                    src='assets/img/about/7.png'
                    alt='img'
                  />
                  <img
                    className='img-3'
                    src='assets/img/about/8.png'
                    alt='img'
                  />
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='img' />
                    <div className='details'>
                      <h1>22</h1>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 align-self-center order-lg-1'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title mb-2'>
                      BEST WORLD’S LEADING LOGISTIC &amp; TRANSPORT COMPANY
                    </h2>
                    <p>
                      Objectively transition 24/365 e-tailers before cross
                      functional collaboration and idea-sharing. Competently
                      iterate plug-and-play deliverables vis-a-vis parallel
                      relationships.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img src='assets/img/about/icon-1.png' alt='img' />
                          </div>
                          <div className='details'>
                            <h6>Unlimited Revisions &amp; Best Solutions</h6>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img src='assets/img/about/icon-2.png' alt='img' />
                          </div>
                          <div className='details'>
                            <h6>24/7 Support For Any Clients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <a className='btn btn-base' href='about.html'>
                        DISCOVER MORE
                      </a>
                      <div className='video-wrap d-flex align-items-center gap-2'>
                        <a
                          className='video-play-btn'
                          href='https://www.youtube.com/embed/Wimkqo8gDZ0'
                          data-effect='mfp-zoom-in'
                        >
                          <FaPlay />
                        </a>
                        <span>Watch The Video</span>
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

export default AboutTwo;
