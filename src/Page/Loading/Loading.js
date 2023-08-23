import React from 'react';

import Navbar1 from '../../componentes/Navbar/Navbar1'

const Loading = () => {
  return (
    <>
    <Navbar1></Navbar1>
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: '#081B4B' }}
    >
      <div >
        <h1 className="text-6xl text-red-600" style={{ color: '#EB0005' }}>Em Breve  <span className="animate-pulse ml-2">...</span></h1>
       
      </div>
    </div>
    </>
  );
};

export default Loading;