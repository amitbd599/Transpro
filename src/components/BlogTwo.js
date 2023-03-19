import React from "react";

const BlogTwo = () => {
  return (
    <>
      {/*blog-area start*/}
      <div className='blog-area pd-top-115 pd-bottom-90'>
        <div className='container p-sm-0'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>LATEST BLOG</h4>
                <h2 className='title'>LATEST NEWS &amp; ARTICLES</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/1.png' alt='img' />
                </div>
                <div className='details'>
                  <h4>
                    <a href='blog-details.html'>
                      Express delivery is going to slow down in 2022
                    </a>
                  </h4>
                  <ul className='blog-meta'>
                    <li>
                      <i className='fa fa-user' /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <i className='fas fa-calendar-alt' /> 01 July, 2022
                    </li>
                  </ul>
                  <a className='read-more-text' href='blog-details.html'>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/2.png' alt='img' />
                </div>
                <div className='details'>
                  <h4>
                    <a href='blog-details.html'>
                      USA exhibition support for teneso NewYork.
                    </a>
                  </h4>
                  <ul className='blog-meta'>
                    <li>
                      <i className='fa fa-user' /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <i className='fas fa-calendar-alt' /> 01 July, 2022
                    </li>
                  </ul>
                  <a className='read-more-text' href='blog-details.html'>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-inner'>
                <div className='thumb'>
                  <img src='assets/img/blog/3.png' alt='img' />
                </div>
                <div className='details'>
                  <h4>
                    <a href='blog-details.html'>
                      New Additions to our great Metro trucks.
                    </a>
                  </h4>
                  <ul className='blog-meta'>
                    <li>
                      <i className='fa fa-user' /> By{" "}
                      <a className='ms-1' href='#'>
                        {" "}
                        Admin
                      </a>
                    </li>
                    <li>
                      <i className='fas fa-calendar-alt' /> 01 July, 2022
                    </li>
                  </ul>
                  <a className='read-more-text' href='blog-details.html'>
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*blog-area end*/}
    </>
  );
};

export default BlogTwo;
