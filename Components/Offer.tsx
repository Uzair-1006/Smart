import React from 'react';
import Image from 'next/image';

const Offer = () => {
  return (
    <section id='Offers' className="flex justify-center items-center h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="text-center p-8 border-4 border-white rounded-lg bg-white bg-opacity-80 shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Special Offer!</h1>
        <p className="text-xl mb-6">Buy 2 Get 1 Free on 1L Bindu Bottles</p>
        <Image src="/1ltr-bint.png" alt="1L Bindu Bottle" width={192} height={192} className="mx-auto mb-6 transform hover:scale-110 transition-transform duration-300" />
        <button className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-900 transition-colors duration-300">Shop Now</button>
      </div>
    </section>
  );
}

export default Offer;
