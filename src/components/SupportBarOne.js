import React from "react";
import { FaGlobe } from "react-icons/fa";

const SupportBarOne = () => {
  return (
    <>
      {/* support bar area start */}
      <div className='support-bar'>
        <div className='container'>
          <div className='row reorder-xs clearfix'>
            <div className='col-lg-6 align-self-center'>
              <div className='support-left'>
                {/* support left start */}
                <ul>
                  <li>
                    <FaGlobe />
                    <select className='country'>
                      <option value='english selected'>English</option>
                      <option value='Arabic'>Arabic</option>
                      <option value='spanish'>Spanish</option>
                      <option value='bangla'>Bangla</option>
                    </select>
                  </li>
                  <li>
                    <a href='mailTo:example@example.com'>
                      <i className='flaticon-at' />
                      example@example.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href='tel:+8801-728-123-456'>
                      {" "}
                      <i className='flaticon-call-answer' />
                      +8801-728-123-456
                    </a>
                  </li>
                </ul>
              </div>
              {/* support left end */}
            </div>
            <div className='col-lg-6'>
              <div className='support-right'>
                {" "}
                {/* support right start */}
                <ul>
                  <li className='fare-rate-responsive'>
                    <a href=''>
                      <i className='flaticon-calculator' />
                      Get a Fare Rate
                    </a>
                  </li>
                  <li>
                    <ul className='social-link'>
                      <li>
                        <a href='#' target='_blank' className='facebook'>
                          {" "}
                          <i className='fa fa-facebook-f' aria-hidden='true' />
                        </a>
                      </li>
                      <li>
                        <a href='#' target='_blank' className='twitter'>
                          <i className='fa fa-twitter' aria-hidden='true' />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.youtube.com/channel/UCz1tS-oRzKeElBOd6pIjgLQ'
                          target='_blank'
                          className='youtube'
                        >
                          <i
                            className='fa fa-youtube-play'
                            aria-hidden='true'
                          />
                        </a>
                      </li>
                      <li>
                        <a href='#' target='_blank' className='instagram'>
                          <i className='fa fa-instagram' aria-hidden='true' />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='sign-nav'>
                    <a className='sen-signin' href='#0'>
                      <i className='flaticon-man-user' />
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
              {/* support right end */}
            </div>
          </div>
        </div>
      </div>
      {/* support bar area end */}
    </>
  );
};

export default SupportBarOne;
