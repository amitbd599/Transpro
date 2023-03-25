import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureTwo = () => {
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
    initialSlide: 0,
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
      {/* Start Our Features area  */}
      <div className='features-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='features-item'>
                <div className='single-features-item'>
                  <div className='icon'>
                    <i className='flaticon-money-bag' />
                  </div>
                  <h4>Transparent Pricing</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <i className='flaticon-box' />
                  </div>
                  <h4>Warehouse Storage</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <i className='flaticon-delivery-truck' />
                  </div>
                  <h4>Real-Time Tracking</h4>
                </div>
                <div className='single-features-item'>
                  <div className='icon'>
                    <i className='flaticon-shield' />
                  </div>
                  <h4>Security For Cargo</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='section-title white  text-left m-auto'>
                <span className='subtitle'>Our Features</span>
                <h2 className='title active'>Why Choose Us!</h2>
                <p>
                  Affronting everything discretion men now own did. Still round
                  match we to. Frankness pronounce daughters remainder extensive
                  has but. Happiness cordially one determine concluded fat.
                  Plenty season beyond by hardly giving of. Consulted or
                  acuteness dejection an smallness if. Outward general passage
                  another as it. Affronting everything discretion men now own
                  did. Still round match we to. Frankness pronounce daughters
                  remainder extensive has but. Building mr concerns servants in
                  he outlived am breeding.He so lain good miss when sell some at
                  if.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='btn-bounce'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Features area  */}
    </>
  );
};

export default FeatureTwo;
