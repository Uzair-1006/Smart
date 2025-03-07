import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-blue-50 to-cyan-100 flex items-center justify-between mx-auto max-w-[1440] px-6 lg:px-200 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image
          className="rounded-full pl-0 flex"
          src="/smart.png"
          width={100}
          height={100}
          alt="Logo"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        <Link href="/" key="home" className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          Home
        </Link>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="regular-16 text-black-50 flexCenter pb-1.5 transition-all hover:font-bold">
            Products
          </span>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
              <Link href="/bindushopping" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bindu Shopping</Link>
              <Link href="/siponproducts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sipon Products</Link>
            </div>
          )}
        </div>
        <Link href="#Prices" key="Prices" className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          Prices
        </Link>
        <Link href="#Offers" key="Offers" className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          Offers
        </Link>
        <div
          className="relative cursor-pointer mr-6"
          onMouseEnter={() => setIsAboutDropdownOpen(true)}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <span className="regular-16 text-black-50 flexCenter pb-1.5 transition-all hover:font-bold">
            About us
          </span>
          {isAboutDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
              <Link href="/Support" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Support</Link>
              <Link href="/ContactUS" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact Us</Link>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
