import React from "react";

const FeatureOne = () => {
  return (
    <>
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>FEATURES</h4>
                <h2 className='title'>WHAT WE OFFER</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                  Collaboratively customize front-end materials with
                  standardized infomediaries. Holisticly engineer performance
                  based value. Assertively benchmark turnkey web-readiness
                  rather than long.
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <div className='item'>
              <div className='feature-wrap bg-pink'>
                <div className='icon'>
                  <img src='assets/img/icon/feature-1.png' alt='img' />
                </div>
                <h5>TRANSPARENT PRICING</h5>
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
            <div className='item'>
              <div className='feature-wrap bg-ash'>
                <div className='icon'>
                  <img src='assets/img/icon/feature-2.png' alt='img' />
                </div>
                <h5>ONLINE TRACKING</h5>
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
            <div className='item'>
              <div className='feature-wrap bg-sky'>
                <div className='icon'>
                  <img src='assets/img/icon/feature-3.png' alt='img' />
                </div>
                <h5>WAREHOUSE STORAGE</h5>
                <p>
                  Globally initiate resource maximizing total linkage via
                  enabled process improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
