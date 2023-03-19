import React from "react";

const PricingOne = () => {
  return (
    <>
      {/* pricing area start */}
      <div className='pricing-area pd-top-115 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h5 className='subtitle'>PRICING PLAN</h5>
                <h2 className='title'>OUR FLEXIBLE PRICE</h2>
                <p className='content mt-2'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner'>
                <div className='header'>
                  <h4>Basic Plan</h4>
                  <div className='price'>
                    <h2 className='d-inline-block'>60</h2>
                    <sup>$</sup>
                    <span>/Per Month</span>
                  </div>
                </div>
                <div className='details'>
                  <ul className='single-list-inner'>
                    <li>
                      <i className='far fa-check-circle' />1 warehouse
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Custom business rules
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Real-time rate shopping
                    </li>
                    <li className='unavailable'>
                      <i className='far fa-check-circle' />
                      100 freight shipments
                    </li>
                    <li className='unavailable'>
                      <i className='far fa-check-circle' /> Any time 24/7 hour
                      support
                    </li>
                  </ul>
                  <a className='btn btn-base' href='#'>
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner'>
                <div className='header'>
                  <h4>Standard Plan</h4>
                  <div className='price'>
                    <h2 className='d-inline-block'>100</h2>
                    <sup>$</sup>
                    <span>/Per Month</span>
                  </div>
                </div>
                <div className='details'>
                  <ul className='single-list-inner'>
                    <li>
                      <i className='far fa-check-circle' />1 warehouse
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Custom business rules
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Real-time rate shopping
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      100 freight shipments
                    </li>
                    <li className='unavailable'>
                      <i className='far fa-check-circle' /> Any time 24/7 hour
                      support
                    </li>
                  </ul>
                  <a className='btn btn-base' href='#'>
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-pricing-inner'>
                <div className='header'>
                  <h4>Premium Plan</h4>
                  <div className='price'>
                    <h2 className='d-inline-block'>160</h2>
                    <sup>$</sup>
                    <span>/Per Month</span>
                  </div>
                </div>
                <div className='details'>
                  <ul className='single-list-inner'>
                    <li>
                      <i className='far fa-check-circle' />1 warehouse
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Custom business rules
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      Real-time rate shopping
                    </li>
                    <li>
                      <i className='far fa-check-circle' />
                      100 freight shipments
                    </li>
                    <li>
                      <i className='far fa-check-circle' /> Any time 24/7 hour
                      support
                    </li>
                  </ul>
                  <a className='btn btn-base' href='#'>
                    CHOOSE PLAN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing area end */}
    </>
  );
};

export default PricingOne;
