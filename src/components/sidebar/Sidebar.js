import React from 'react';

const Sidebar = ({ setInputCity }) => {
  return (
    <div className='container-fluid'>
      <div className='row vh-100'>
        <input type="text" placeholder='Ciudad' onChange={(e) => setInputCity(e.target.value) }/>
      </div>
    </div>
  );
};

export default Sidebar;
