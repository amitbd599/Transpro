import React from "react";

const SearchPopup = () => {
  return (
    <>
      {/* search popup start*/}
      <div className='body-overlay' id='body-overlay' />
      <div className='td-search-popup' id='td-search-popup'>
        <form action='home.html' className='search-form'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search.....'
            />
          </div>
          <button type='submit' className='submit-btn'>
            <i className='fa fa-search' />
          </button>
        </form>
      </div>
      {/* search popup end*/}
    </>
  );
};

export default SearchPopup;
