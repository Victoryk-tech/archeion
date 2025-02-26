"use client";
import React from "react";
import Book from "../pages/books/page";
import Footer from "../pages/Home/components/Footer";
import Navbar from "../pages/Home/components/Navbar";
import AboutH from "./components/AboutH";
import Blog from "./components/Blog";

const page = () => {
  const newsContents1 = [
    {
      section: <AboutH />,
    },
    {
      section: <Blog />,
    },
  ];
  return (
    <div className="">
      <Navbar />
      <div className="">
        {newsContents1.map(({ color, section }, index) => (
          <div style={{ background: color }} key={`${section}-${index}`}>
            <div className="max-w-[100rem] mx-auto ">{section}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
