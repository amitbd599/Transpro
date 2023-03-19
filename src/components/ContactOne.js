import React from "react";

const ContactOne = () => {
  return (
    <>
      {/*contact-area start*/}
      <div
        className='call-to-contact-area pd-top-240'
        style={{ background: "#F9F9F9" }}
      >
        <img src='assets/img/contact/1.png' alt='img' />
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>LET’S TALK</h4>
                  <h2 className='title'>
                    YOU NEED ANY HELP? GET FREE CONSULTATION
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <i className='fa fa-phone-alt' />
                  </div>
                  <div className='details'>
                    <h6>Have Any Question</h6>
                    <h3>+19524357106</h3>
                  </div>
                </div>
                <a className='btn btn-base' href='contact.html'>
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*contact-area end*/}
    </>
  );
};

export default ContactOne;
