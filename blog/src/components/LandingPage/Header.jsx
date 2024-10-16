"use client";

import { useState } from "react";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMenu4Fill,
  RiProfileLine,
} from "react-icons/ri";

import Link from "next/link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  // const router = useRouter();
  // const isActive = router.pathname === '/about';

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const activeLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[15px] leading-[20px] font-normal hover:text-[#6b4343] after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return (
    <div className="md:space-y-8 border-b-[0.3px] border-black px-2 md:px-4 lg:px-16 py-6 md:py-4 shadow-md sticky top-0 bottom-0 bg-white z-[999]">
      <div className="flex items-center justify-between py-6 md:py-2">
        <div className="hidden md:flex items-center justify-center space-x-3 text-xl">
          <IoSearchOutline />
          <RiMenu4Fill />
        </div>
        <div className="md:text-center space-y-1">
          <h1 className="text-2xl md:text-6xl font-medium">ARCHEION</h1>
          <p className="hidden md:block lg:tracking-[0.3rem]">
            MAGAZINE AND BLOG THEME
          </p>
        </div>

        <div className="flex md:hidden items-center justify-center space-x-3 text-3xl md:text-xl">
          <RiMenu4Fill />
        </div>
        <div className="hidden md:flex items-center justify-center space-x-2 text-xl">
          <RiInstagramLine />
          <RiFacebookBoxFill />
          <RiLinkedinBoxLine />
          <Link href="/login">
            <IoPersonOutline />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-3 md:space-x-8 font-normal">
        <Link href="/" onClick={scrollToTop}>
          <p className={isActive ? activeLink : normalLink}>Home</p>
        </Link>
        <Link href="/news" onClick={scrollToTop}>
          <p className={isActive ? activeLink : normalLink}>News</p>
        </Link>
        <Link href="/about" onClick={scrollToTop}>
          <p className={isActive ? activeLink : normalLink}>About Us</p>
        </Link>
        <Link href="/contact" onClick={scrollToTop}>
          <p className={isActive ? activeLink : normalLink}>Contact Us</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
