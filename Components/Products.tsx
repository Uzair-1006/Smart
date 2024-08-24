"use client";
import React, { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quotes } from "@/constants";
import Link from "next/link";

const Products = () => {
  const [showFullBinContent, setShowFullBinContent] = useState(false);
  const router = useRouter();

  const handleToggleBinContent = () => {
    setShowFullBinContent(!showFullBinContent);
  };

  const redirectToSiponProducts = () => {
    router.push("/SiponProducts"); // Use the correct case-sensitive path
  };

  return (
    <section id="products" className="p-6 bg-gray-100">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
        </div>

        {/* Product Row */}
        <div className="flex flex-wrap justify-between">
          {/* Sipon Products */}
          <div className="border p-6 flex flex-col items-center mb-6 w-full md:w-[48%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Sipon Products</h3>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/Sipon-Logo.png"
                  width={300}
                  height={300}
                  alt="Sipon Logo"
                  className="pb-2 pl-2 object-cover"
                  style={{ objectFit: "cover" }} // Prevent image distortion
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="text-gray-600">{Quotes[0].limitedSipContent}</p>
              </div>
            </div>
            <Link
              href='/siponproducts'
              key='siponproducts'
              className="mt-4 text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>

          {/* Bindu Products */}
          <div className="border p-6 flex flex-col items-center mb-6 w-full md:w-[48%] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl text-blue-600 mb-4">Bindu Products</h3>
            <div className="flex">
              <div className="flex-shrink-0">
                <Image
                  src="/Bindu-logo.png"
                  width={300}
                  height={300}
                  alt="Bindu Logo"
                  className="pb-2 pl-2 object-cover"
                  style={{ objectFit: "cover" }} // Prevent image distortion
                />
              </div>
              <div className="ml-4 flex-grow">
                <p className="text-gray-600">{Quotes[2].limitedBinContent}</p>
              </div>
            </div>
            <Link
              href='/binduproducts'
              key='binduproducts'
              className="mt-4 text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
