import React from "react";
import { FaPhoneAlt, FaPlay } from "react-icons/fa";

const VideoAreaOne = () => {
  return (
    <>
      {/*video-area start*/}
      <div
        className='video-area pd-top-120 pd-bottom-120'
        style={{ background: "#080C24" }}
      >
        <div className='video-thumb-wrap'>
          <img src='assets/img/video/1.png' alt='img' />
          <a
            className='video-play-btn'
            href='https://www.youtube.com/embed/Wimkqo8gDZ0'
            data-effect='mfp-zoom-in'
          >
            <FaPlay />
          </a>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7'>
              <div
                className='cta-inner-wrap'
                style={{ background: "url(assets/img/video/bg.png)" }}
              >
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>LET’S TALK</h4>
                  <h2 className='title'>
                    YOU NEED ANY HELP? GET FREE CONSULTATION
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>Have Any Question</h6>
                    <h3>+19524357106</h3>
                  </div>
                </div>
                <a className='btn btn-white' href='contact.html'>
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*video-area end*/}
    </>
  );
};

export default VideoAreaOne;
