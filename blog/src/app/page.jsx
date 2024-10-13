import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMenu4Fill,
} from "react-icons/ri";

import Footer from "@/components/Footer";
import Innovation from "@/components/LandingPage/Innovation";
import LatestBooks from "@/components/LandingPage/LatestBooks";
import Welcome from "@/components/LandingPage/Welcome";
import ShowRoom from "@/components/LandingPage/ShowRoom";
export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Header */}

      <div className="md:space-y-8 border-b-[0.3px] border-black   px-2 md:px-4 lg:px-16 py-6 md:py-4 shadow-md sticky top-0 bottom-0 bg-white z-[999]">
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
          </div>
        </div>

        {/* down */}
        <div className="flex items-center justify-center  space-x-3 md:space-x-8 font-normal">
          <p>Home</p>
          <p>News</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
      </div>

      {/* hERO */}

      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="books"
          className="w-full h-[300px] md:h-[410px]"
        />
      </div>

      <Innovation />
      <ShowRoom />
      <LatestBooks />
      <LatestBooks />
      <Welcome />

      {/* Footer */}

      <Footer />
    </div>
  );
}
