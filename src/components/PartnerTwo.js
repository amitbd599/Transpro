import React from "react";

const PartnerTwo = () => {
  return (
    <>
      {/*partner-area start*/}
      <div
        className='partner-area partner-area-2 pd-top-45 pd-bottom-45'
        style={{ background: "url(assets/img/partner/bg.png)" }}
      >
        <div className='container'>
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

export default PartnerTwo;
