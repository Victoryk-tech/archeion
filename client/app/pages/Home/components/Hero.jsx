"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import BlogBanner1 from "../../../../public/assets/blog-banner.jpg";
import BlogBanner2 from "../../../../public/assets/ICT3.jpg";
import BlogBanner3 from "../../../../public/assets/recentBlog1.svg";

import Image from "next/image"; // Import Image for optimization


export default function Home() {
  const banners = [BlogBanner1, BlogBanner2, BlogBanner3];
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Function to handle manual banner selection
  const selectBanner = (index) => {
    setCurrentBannerIndex(index);
  };
  return (
    <div className="w-full scroll-smooth">
      {/* Hero Image */}
      <section className="relative h-[93vh]">
        {/* Banner Image Slider */}
        <div className="absolute inset-0">
          <Image
            src={banners[currentBannerIndex]}
            alt="blog banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/*================== Overlay content ====================*/}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl mb-4 ">
            The home for great
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl mb-4  ">
            writers and readers
          </h1>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex sm:flex-row flex-col mt-4">
            <Link href="/news">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-12 py-3 rounded-md">
                Start Reading
              </button>
            </Link>
            <Link href="/About">
              <button className="border border-white text-white text-lg px-3 py-3 rounded-md hover:border-gray-400">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        {/*============= Banner Indicators =============*/}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentBannerIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => selectBanner(index)}
            ></button>
          ))}
        </div>
      </section>

    </div>
  );
}
