import React from 'react';

const Navbar = () => {
  return (
    <div className="flex h-screen">
      {/* Barra laterale */}
      <div className="w-1/6 bg-gray-500 p-6 flex flex-col">
        <img src='dash.png'className='w-12'></img>
        <a href='#' className="text-2xl text-white py-2 hover:text-blue-400 transition-colors pt-8">Menu</a>
        <a href='#' className="text-2xl text-white py-2 hover:text-blue-400 transition-colors">Home</a>
        <a href='#' className="text-2xl text-white py-2 hover:text-blue-400 transition-colors">Prodotti</a>
      </div>

      {/* Area principale */}
      <div className="w-5/6 p-6">
        <h2 className="text-lg mb-4">Main Content</h2>
        <div className="bg-gray-300 h-16 mb-4"></div>
        <div className="bg-gray-400 h-24 mb-4"></div>
        <div className="bg-gray-500 h-32 mb-4"></div>
        {/* Metti qui il contenuto principale della dashboard */}
      </div>
    </div>
  );
};

export default Navbar;