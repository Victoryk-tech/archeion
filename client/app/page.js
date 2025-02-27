"use client";
import React from "react";
import Navbar from "./pages/Home/components/Navbar";
import Hero from "./pages/Home/components/Hero";
import Footer from "./pages/Home/components/Footer";
import Innovation from "./pages/Home/components/Innovation";
import Welcome from "./pages/Home/components/Welcome";
import Book from "./pages/books/page";
import Subscribers from "./pages/Home/components/Subscribers";
import MainBlog from "./pages/Home/components/MainBlog";

const page = () => {
  const homeContents1 = [
    {
      section: <Innovation />,
    },

    {
      section: <MainBlog />,
    },
    {
      section: <Welcome />,
    },

    {
      section: <Subscribers />,
    },
  ];
  return (
    <div className="">
      <Navbar />
      <Hero />
      {homeContents1.map(({ color, section }, index) => (
        <div style={{ background: color }} key={`${section}-${index}`} className="px-2 md:px-6 lg:px-16">
          <div className="max-w-[100rem] mx-auto">{section}</div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default page;
