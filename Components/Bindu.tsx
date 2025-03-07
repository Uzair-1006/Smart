import React, { useState } from "react";
import { BINDU_PRODUCTS } from "@/constants";
import "../app/globals.css";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

const Bindu = () => {
  const [selectedProduct, setSelectedProduct] = useState(BINDU_PRODUCTS[0]);

  return (
    <>
      <Head>
        <title>Smart Agencies - Bindu</title>
        <meta name="description" content="Get support and assistance for Smart Agencies services." />
      </Head>
      <section className='w-full h-screen p-4 bg-gradient-to-r from-[#7AB143] to-[#4A7A20] flex items-center justify-center'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex justify-between items-center h-full max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-2xl'
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-start space-y-4 p-6'
          >
            <h1 className='text-3xl font-bold text-gray-800'>{selectedProduct.title}</h1>
            <p className='text-lg text-gray-700'>MRP Price: <del>{selectedProduct.mrp}</del></p>
            <p className='text-lg text-gray-700'>Our Price: <span className='font-semibold'>{selectedProduct.psRate}</span> per piece</p>
            <p className='text-lg text-gray-700'>Case Price: <span className='font-semibold'>{selectedProduct.price}</span></p>
            <h2 className='mt-3 text-xl font-bold text-gray-800'>Available Sizes</h2>
            <div className='grid grid-cols-2 gap-4 mb-8'>
              {BINDU_PRODUCTS.map((product, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 border-2 ${
                    selectedProduct.title === product.title
                      ? 'bg-blue-500 text-white border-blue-700'
                      : 'bg-gray-200 text-gray-700 border-gray-300'
                  }`}
                >
                  {product.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
          <motion.div 
            key={selectedProduct.title} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center'
          >
            <Image src={selectedProduct.icon} alt={selectedProduct.title} width={400} height={400} className='rounded-lg shadow-lg' />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Bindu;