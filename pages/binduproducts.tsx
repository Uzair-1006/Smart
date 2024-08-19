import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { Quotes } from "@/constants";
import Footer from "@/Components/Footer";
import Link from "next/link";
import Head from 'next/head';

const BinduProducts = () => {
  return (
    <>
    <Head>
        <title>Smart Agencies -Bindu Info</title>
        <meta name="description" content="Get support and assistance for Smart Agencies services." />
      </Head>
    <section id="products" className="bg-gradient-to-r from-green-200 to-green-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-xl font-bold mb-4">Bindu Products</h1>
          <div className="flex flex-wrap justify-between">
            <div className="p-6 flex flex-col items-center mb-6 w-full">
              <div className="flex">
                <Image
                  src="/Bindu.png"
                  width={300}
                  height={300}
                  alt="Bindu Logo"
                  className="pb-2 pl-2 object-cover"
                />
              </div>

              <div className="ml-4 flex-grow text-center">
                {Quotes[3].fullBinContent.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link href="/bindushopping" key='bindushopping'>
                <div className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Buy Bindu
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
};

export default BinduProducts;
