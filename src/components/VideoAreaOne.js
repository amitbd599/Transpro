import React from "react";

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
            <i className='fa fa-play' />
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
                    <svg
                      className='svg-inline--fa fa-phone-alt fa-w-16'
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fa'
                      data-icon='phone-alt'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      data-fa-i2svg=''
                    >
                      <path
                        fill='currentColor'
                        d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'
                      />
                    </svg>
                    {/* <i class="fa fa-phone-alt"></i> Font Awesome fontawesome.com */}
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
