import React from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialFour = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
      {/* Start Testimonial area  */}
      <div className='testimonial-area style-02'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title  text-center'>
                <span className='subtitle'>Experience</span>
                <h2 className='title'>Our Clint Review</h2>
                <p>
                  Full age sex set feel her told. Tastes giving in passed direct
                  me valley as supply. End great stood boy noisy often way taken
                  short. Rent the size our more door. Years no place abode in no
                  child my. Man pianoforte too solicitude friendship devonshire
                  ten ask.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='review-area'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='testimonial-slider-two'>
                      <div className='single-review-item'>
                        <div className='review-head'>
                          <div className='thumb'>
                            <img
                              src='assets/version-2/img/reviewer/01.png'
                              alt='reviewer images'
                            />
                          </div>
                          <div className='author-details'>
                            <h5 className='author'>Michel Robertson</h5>
                            <span className='post'>Irene Burns</span>
                            <ul className='rating'>
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                            </ul>
                          </div>
                        </div>
                        <div className='desciption'>
                          <p>
                            In to am attended desirous raptures declared
                            diverted confined at. Collected instantly remaining
                            up certainly to necessary as. Over walk dull into
                            son boy door went new. At or happiness commanded
                            daughters as. Is handsome an declared at received in
                            extended vicinity subjects.
                          </p>
                        </div>
                      </div>
                      <div className='single-review-item'>
                        <div className='review-head'>
                          <div className='thumb'>
                            <img
                              src='assets/version-2/img/reviewer/02.png'
                              alt='reviewer images'
                            />
                          </div>
                          <div className='author-details'>
                            <h5 className='author'>Michel Robertson</h5>
                            <span className='post'>Irene Burns</span>
                            <ul className='rating'>
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                            </ul>
                          </div>
                        </div>
                        <div className='desciption'>
                          <p>
                            In to am attended desirous raptures declared
                            diverted confined at. Collected instantly remaining
                            up certainly to necessary as. Over walk dull into
                            son boy door went new. At or happiness commanded
                            daughters as. Is handsome an declared at received in
                            extended vicinity subjects.
                          </p>
                        </div>
                      </div>
                      <div className='single-review-item'>
                        <div className='review-head'>
                          <div className='thumb'>
                            <img
                              src='assets/version-2/img/reviewer/01.png'
                              alt='reviewer images'
                            />
                          </div>
                          <div className='author-details'>
                            <h5 className='author'>Michel Robertson</h5>
                            <span className='post'>Irene Burns</span>
                            <ul className='rating'>
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                            </ul>
                          </div>
                        </div>
                        <div className='desciption'>
                          <p>
                            In to am attended desirous raptures declared
                            diverted confined at. Collected instantly remaining
                            up certainly to necessary as. Over walk dull into
                            son boy door went new. At or happiness commanded
                            daughters as. Is handsome an declared at received in
                            extended vicinity subjects.
                          </p>
                        </div>
                      </div>
                      <div className='single-review-item'>
                        <div className='review-head'>
                          <div className='thumb'>
                            <img
                              src='assets/version-2/img/reviewer/02.png'
                              alt='reviewer images'
                            />
                          </div>
                          <div className='author-details'>
                            <h5 className='author'>Michel Robertson</h5>
                            <span className='post'>Irene Burns</span>
                            <ul className='rating'>
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                            </ul>
                          </div>
                        </div>
                        <div className='desciption'>
                          <p>
                            In to am attended desirous raptures declared
                            diverted confined at. Collected instantly remaining
                            up certainly to necessary as. Over walk dull into
                            son boy door went new. At or happiness commanded
                            daughters as. Is handsome an declared at received in
                            extended vicinity subjects.
                          </p>
                        </div>
                      </div>
                      <div className='single-review-item'>
                        <div className='review-head'>
                          <div className='thumb'>
                            <img
                              src='assets/version-2/img/reviewer/01.png'
                              alt='reviewer images'
                            />
                          </div>
                          <div className='author-details'>
                            <h5 className='author'>Michel Robertson</h5>
                            <span className='post'>Irene Burns</span>
                            <ul className='rating'>
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                              <li className='fa fa-star' />
                            </ul>
                          </div>
                        </div>
                        <div className='desciption'>
                          <p>
                            In to am attended desirous raptures declared
                            diverted confined at. Collected instantly remaining
                            up certainly to necessary as. Over walk dull into
                            son boy door went new. At or happiness commanded
                            daughters as. Is handsome an declared at received in
                            extended vicinity subjects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Testimonial area  */}
    </>
  );
};

export default TestimonialFour;
