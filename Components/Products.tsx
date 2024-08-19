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
    <section id="products" className="p-3 m-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-xl font-bold mb-4">Our Products</h1>

            {/* Product Row */}
            <div className="flex flex-wrap justify-between">
              {/* Sipon Products */}
              <div className="border-2 p-3 flex flex-col items-center mb-6 w-full md:w-[48%]">
                <h3 className="font-semibold text-lg mb-2">Sipon Products</h3>
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
                    <p>{Quotes[0].limitedSipContent}</p>
                  </div>
                </div>
                <Link
                  href='/siponproducts'
                  key='siponproducts'
                  className="mt-2 text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>

              {/* Bindu Products */}
              <div className="border-2 p-3 flex flex-col items-center mb-6 w-full md:w-[48%]">
                <h3 className="font-semibold text-lg mb-2">Bindu Products</h3>
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
                    <p>{Quotes[2].limitedBinContent}</p>
                  </div>
                </div>
                <Link
                  href='/binduproducts'
                  key='binduproducts'
                  className="mt-2 text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
