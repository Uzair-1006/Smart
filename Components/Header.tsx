import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Products from "@/pages/Products";
const Header = () => {
  return (
    <nav className=" flex items-center justify-between mx-auto max-w-[1440] px-6 lg:px-200 3xl:px-0 relative z-30 py-5 ">
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
        <Link
          href="/"
          key="home"
          className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="#Products"
          key="Products"
          className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Products
        </Link>
        <Link
          href="#Prices"
          key="Prices"
          className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Prices
        </Link>
        <Link
          href="#Offers"
          key="Offers"
          className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Offers
        </Link>
        <Link
          href="/AboutUS"
          key="AboutUS"
          className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          About us
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
