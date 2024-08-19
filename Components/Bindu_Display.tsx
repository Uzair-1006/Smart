import Image from 'next/image';
import React from 'react';
import { BINDU_PRODUCTS } from '@/constants';

const BinduProducts = () => {
  const bindu200 = BINDU_PRODUCTS[0];
  const bindu600 = BINDU_PRODUCTS[2];
  const bindu2L = BINDU_PRODUCTS[4];

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Bindu Beverage Selection</h2>
          <p className="mt-4 text-lg text-gray-600">Choose your favorite Bindu drink</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bindu 200 ml */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src='/200ml-bintt.png' alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{bindu200.title}</h3>
            <p className="mt-4 text-gray-600">{bindu200.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{bindu200.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Refreshing jeera flavor</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{bindu200.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>

          {/* Bindu 600 ml */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src={bindu600.icon} alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{bindu600.title}</h3>
            <p className="mt-4 text-gray-600">{bindu600.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{bindu600.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Refreshing jeera flavor</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{bindu600.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>

          {/* Bindu 2.0L */}
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <Image src={bindu2L.icon} alt='' width={300} height={200} />
            <h3 className="text-xl font-semibold text-gray-900">{bindu2L.title}</h3>
            <p className="mt-4 text-gray-600">{bindu2L.description}</p>
            <p className="mt-4 text-2xl font-bold text-gray-900">{bindu2L.price}</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">Refreshing jeera flavor</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="ml-3 text-gray-700">{bindu2L.psRate}</span>
              </li>
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinduProducts;
