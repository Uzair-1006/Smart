import React from "react";
import "../app/globals.css";
import { useRouter } from 'next/router';
import Link from "next/link";

const Footer = () => {
  

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg ml-4 font-bold mb-2">Our Products</h2>
            <ul className="ml-5">
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/binduproducts" className="hover:underline">Bindu Products</a>
              </li>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/siponproducts" className="hover:underline">Sipon Products</a>
              </li>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/AvailableSoon" className="hover:underline">Water Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <ul>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/AboutUS" className="hover:underline">Our Story</a>
              </li>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/JoinUS" className="hover:underline">Join Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <ul>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/ContactUS" className="hover:underline">Contact Us</a>
              </li>
              <li className="hover:transform hover:scale-110 hover:translate-x-2 transition duration-300">
                <a href="/Support" className="hover:underline">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="mb-2">
            <Link href="/" className="text-lg font-bold hover:underline">Back to Home</Link>
          </p>
          <p>© 2024 BinduProducts. All rights reserved.</p>
          <p><a href="#privacy" className="hover:underline">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
