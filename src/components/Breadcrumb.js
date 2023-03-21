import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* breadcrumb start */}
      <div
        className='breadcrumb-area bg-overlay-2'
        style={{ backgroundImage: 'url("assets/img/banner/breadcrumb.png")' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='breadcrumb-inner'>
                <div className='section-title mb-0'>
                  <h2 className='page-title'>{title}</h2>
                  <ul className='page-list'>
                    <li>
                      <a href='home.html'>Home</a>
                    </li>{" "}
                    /<li className='ps-0'>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb end */}
    </>
  );
};

export default Breadcrumb;
