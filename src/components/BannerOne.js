import React from "react";
import Slider from "react-slick";

const BannerOne = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div
              className='item'
              style={{ background: "url(~/assets/img/banner/1.png)" }}
            >
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-7 col-md-8'>
                    <div className='banner-inner style-white'>
                      <h1 className='b-animate-2 title'>
                        FAST CERTIFIED &amp; BEST WORLD WIDE SERVICE
                      </h1>
                      <p className='b-animate-3 content'>
                        Professionally strategize stand-alone functionalities
                        and cooperative total linkage. Objectively predominate
                        virtual quality vectors with orthogonal.
                      </p>
                      <div className='btn-wrap'>
                        <a
                          className='btn btn-base b-animate-4'
                          href='service.html'
                        >
                          {" "}
                          Explore The Services
                        </a>
                        <a
                          className='btn btn-white b-animate-4'
                          href='contact.html'
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='item'
              style={{ background: "url(assets/img/banner/2.png)" }}
            >
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-7 col-md-8'>
                    <div className='banner-inner style-white'>
                      <h1 className='b-animate-2 title'>
                        FAST CERTIFIED &amp; BEST WORLD WIDE SERVICE
                      </h1>
                      <p className='b-animate-3 content'>
                        Professionally strategize stand-alone functionalities
                        and cooperative total linkage. Objectively predominate
                        virtual quality vectors with orthogonal.
                      </p>
                      <div className='btn-wrap'>
                        <a
                          className='btn btn-base b-animate-4'
                          href='service.html'
                        >
                          {" "}
                          Explore The Services
                        </a>
                        <a
                          className='btn btn-white b-animate-4'
                          href='contact.html'
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
