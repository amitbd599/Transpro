import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const ServiceTwo = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* service area start */}
      <div
        className='service-area pd-top-115 pd-bottom-120'
        style={{ background: "#f9f9f9" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>OUR SERVICE FOR YOU</h2>
                <p>
                  Quickly optimize cooperative models for long-term high-impact
                  ROI. Drive innovative e-commerce and distributed paradigms.
                </p>
              </div>
            </div>
            <div className='col-lg-6 text-lg-end align-self-center'>
              <div className='btn-wrap mb-5 mb-lg-0'>
                <a className='btn btn-base' href='service.html'>
                  VIEW ALL SERVICES
                </a>
              </div>
            </div>
          </div>
          <div className='service-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-001.png'
                        alt='img'
                      />
                      <img
                        className='img-2'
                        src='assets/img/service/service-icon-01.png'
                        alt='img'
                      />
                    </div>
                  </div>
                  <div className='details'>
                    <h5>SEA TRANSPORTATION</h5>
                    <p>
                      Energistically reconceptualize ubiquitous solution wherea
                      market-driven expertise. Synergistical empower parallel
                      processes with highly efficient infomediaries.
                    </p>
                    <div className='btn-wrap'>
                      <a className='read-more-text' href='service-details.html'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-002.png'
                        alt='img'
                      />
                      <img
                        className='img-2'
                        src='assets/img/service/service-icon-02.png'
                        alt='img'
                      />
                    </div>
                  </div>
                  <div className='details'>
                    <h5>AIR TRANSPORTATION</h5>
                    <p>
                      Energistically reconceptualize ubiquitous solution wherea
                      market-driven expertise. Synergistical empower parallel
                      processes with highly efficient infomediaries.
                    </p>
                    <div className='btn-wrap'>
                      <a className='read-more-text' href='service-details.html'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-003.png'
                        alt='img'
                      />
                      <img
                        className='img-2'
                        src='assets/img/service/service-icon-03.png'
                        alt='img'
                      />
                    </div>
                  </div>
                  <div className='details'>
                    <h5>WAREHOUSING</h5>
                    <p>
                      Energistically reconceptualize ubiquitous solution wherea
                      market-driven expertise. Synergistical empower parallel
                      processes with highly efficient infomediaries.
                    </p>
                    <div className='btn-wrap'>
                      <a className='read-more-text' href='service-details.html'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-002.png'
                        alt='img'
                      />
                      <img
                        className='img-2'
                        src='assets/img/service/service-icon-02.png'
                        alt='img'
                      />
                    </div>
                  </div>
                  <div className='details'>
                    <h5>AIR TRANSPORTATION</h5>
                    <p>
                      Energistically reconceptualize ubiquitous solution wherea
                      market-driven expertise. Synergistical empower parallel
                      processes with highly efficient infomediaries.
                    </p>
                    <div className='btn-wrap'>
                      <a className='read-more-text' href='service-details.html'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceTwo;
