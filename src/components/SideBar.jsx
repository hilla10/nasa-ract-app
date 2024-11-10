import React from 'react';

const SideBar = ({ handleToggleMOdal, data }) => {
  return (
    <div className='sidebar'>
      <div className='bgOverlay'></div>
      <div className='sidebarContent'>
        <h2>{data?.title}</h2>
        <div className='descriptionContainer'>
          <p className='descriptionTitle'>{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleMOdal}>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
