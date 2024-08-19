import Image from 'next/image';
import React from 'react';
import { SIPON_PRODUCTS } from '@/constants';

const BeveragePricing = () => {
  const mango250 = SIPON_PRODUCTS[1];
  const mango500 = SIPON_PRODUCTS[2];
  const mango2L = SIPON_PRODUCTS[4];

  return (
    <div id='Prices' className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Sipon Beverage Selection</h2>
          <p className="mt-4 text-lg text-gray-600">Choose your favorite Mango drink</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mango 250 ml */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src={mango250.icon} alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{mango250.title}</h3>
            <p className="mt-4 text-gray-600">{mango250.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{mango250.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Made with real mangoes</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{mango250.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>
          {/* Mango 500 ml */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src={mango500.icon} alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{mango500.title}</h3>
            <p className="mt-4 text-gray-600">{mango500.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{mango500.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Made with real mangoes</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{mango500.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>
          {/* Mango 2.0L */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src={mango2L.icon} alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{mango2L.title}</h3>
            <p className="mt-4 text-gray-600">{mango2L.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{mango2L.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Made with real mangoes</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{mango2L.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeveragePricing;
