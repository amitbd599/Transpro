import React from "react";

const PartnerOne = () => {
  return (
    <>
      {/*partner-area start*/}
      <div className='partner-area pd-top-90 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>HAPPY CLIENTS</h4>
                <h2 className='title'>TRUSTED BY OUR 365,000 CLIENTS</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='partner-slider owl-carousel'>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/1.png' alt='img' />
              </div>
            </div>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/2.png' alt='img' />
              </div>
            </div>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/3.png' alt='img' />
              </div>
            </div>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/4.png' alt='img' />
              </div>
            </div>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/5.png' alt='img' />
              </div>
            </div>
            <div className='item'>
              <div className='thumb'>
                <img src='assets/img/partner/6.png' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*partner-area end*/}
    </>
  );
};

export default PartnerOne;
