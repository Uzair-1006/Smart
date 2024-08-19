import React, { useState } from "react";
import { SIPON_PRODUCTS } from "@/constants";
import "../app/globals.css";
import Image from "next/image";
import Head from 'next/head';

const Sipon = () => {
  const [selectedProduct, setSelectedProduct] = useState(SIPON_PRODUCTS[0]);

  return (
    <>
    <Head>
        <title>Smart Agencies-Sipon</title>
        <meta name="description" content="Get support and assistance for Smart Agencies services." />
      </Head>
    <section className='w-full h-screen p-4 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500'>
      <div className='flex justify-between items-center h-full'>
        <div className='flex flex-col items-start'>
          <h1 className='text-2xl font-bold'>{selectedProduct.title}</h1>
          <p className='text-lg'>
            MRP Price : <del>{selectedProduct.mrp}</del> 
          </p>
          <p className='text-lg'>
            Our Price   : {selectedProduct.psRate} per piece
          </p>
          <p className='text-lg'>
            Case Price : {selectedProduct.price}
         </p>
          <h2 className='mt-3 text-xl font-bold mb-4'>Available Sizes</h2>
          <div className='grid grid-cols-2 gap-4 mb-8'>
            {SIPON_PRODUCTS.map((product, index) => (
              <button
                key={index}
                onClick={() => setSelectedProduct(product)}
                className={`px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                  selectedProduct.title === product.title
                    ? 'bg-blue-500 text-white border-2 border-blue-700'
                    : 'bg-gray-200 text-gray-700 border-2 border-gray-300'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={selectedProduct.icon} alt={selectedProduct.title} width={400} height={400} className="" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Sipon;
