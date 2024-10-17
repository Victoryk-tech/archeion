import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" border-black border-t-[1px] py-11">
      <div className="px-2 lg:px-36 py-12 md:py-16  flex items-start justify-between ">
        <div className="flex flex-col items-center justify-between">
          <div className="md:text-center space-y-1">
            <h1 className="md:text-2xl font-bold">ARCHEION</h1>
            <p className="lg:tracking-[0.1rem] text-[14px] md:text-sm lg:text-lg ">
              MAGAZINE AND BLOG THEME
            </p>
          </div>
          <nav className="flex items-start justify-start space-x-3 pt-36">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </nav>
        </div>
        <nav className="flex flex-col space-y-3">
          <a href="#" className=" font-bold text-lg">
            News
          </a>
          <a href="#">Sport</a>
          <a href="#">Business</a>
          <a href="#">Opinion</a>
          <a href="#">Life & style</a>
          <a href="#">Culture</a>
        </nav>
        <nav className="hidden md:flex flex-col space-y-3">
          <h2 className="font-bold text-lg">Subscribe</h2>
          <a href="#">Why subscribe?</a>
          <a href="#">Get subcription</a>
          <a href="#">Fast Delivery</a>
        </nav>

        <nav className="hidden md:flex flex-col space-y-3">
          <h2 className="font-bold text-lg">Product & services</h2>
          <p>eBooks</p>
          <p>ePaper</p>
          <p>Email Alerts and Newsletters</p>
          <p>Article Archives</p>
          <p>Execute Jobs</p>
          <p>Newspaper Archives</p>
        </nav>
        <nav className="flex flex-col space-y-3">
          <h2 className="font-bold text-lg">About Us</h2>
          <p>Advertise</p>
          <p>Contact Us</p>
          <p>Carrers</p>
          <p>Article Archives</p>
          <p>Execute Jobs</p>
          <p>Newspaper Archives</p>
        </nav>
      </div>

      <div className="py-2 text-center text-[14px] font-normal border-t-[0.8px] border-black ">
        <p className="leading-6">
          &copy; 2024 Victory Kemele. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
