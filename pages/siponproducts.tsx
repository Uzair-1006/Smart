import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { Quotes } from "@/constants";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from 'next/head';

const SiponProducts = () => {
  return (
    <>
    <Head>
        <title>Smart Agencies - Sipon Info</title>
        <meta name="description" content="Get support and assistance for Smart Agencies services." />
      </Head>
    <section id="products" className="bg-gradient-to-r from-yellow-400 to-orange-500">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-xl font-bold mb-4">Sipon Products</h1>
            <div className="flex flex-wrap justify-between">
              <div className="p-6 flex flex-col items-center mb-6 w-full">
                <div className="flex">
                  <Image
                    src="/Sipon.png"
                    width={350}
                    height={350}
                    alt="Sipon Logo"
                    className="pb-2 pl-2 object-cover"
                    style={{ objectFit: "cover", maxWidth: "100%", height: "auto" }} // Prevent image distortion
                  />
                </div>

                <div className="ml-4 flex-grow text-center">
                  {Quotes[1]?.fullSipContent?.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  )) || <p>No content available.</p>}
                </div>


                <Link
                  href='/siponshopping'
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  Buy Sipon
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
};

export default SiponProducts;
