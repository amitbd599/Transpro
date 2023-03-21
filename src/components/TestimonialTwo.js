import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialTwo = () => {
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
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* testimonial area start */}
      <div
        className='testimonial-area pd-top-115 pd-bottom-120'
        style={{ backgroundImage: "url(assets/img/testimonial/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle style-2'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT’S FEEDBACK</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img src='assets/img/testimonial/quote.png' alt='img' />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/1.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>ANJELINA MATHEUS</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img src='assets/img/testimonial/quote.png' alt='img' />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>MONISH POUL</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img src='assets/img/testimonial/quote.png' alt='img' />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/3.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>MICHEL CLACRK</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img src='assets/img/testimonial/quote.png' alt='img' />
                  </div>
                  <p>
                    “Progressively strategize intermandated manufactured
                    products after multidisci plinary sources. Conveniently
                    iterate value-added systems with.”
                  </p>
                  <div className='client-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>MONISH POUL</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialTwo;
