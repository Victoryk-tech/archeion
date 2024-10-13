"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import book from "@/components/LandingPage/data/book.js";

import AOS from "aos";
import "aos/dist/aos.css";
import { FaCircleArrowRight } from "react-icons/fa6";
const LatestBooks = () => {
  const [caseStudy, setCaseStudy] = useState("shirt");
  console.log(book);

  const activeLink =
    "text-[#6b4343] flex items-center justify-center space-x-1 font-bold text-[18px] relative after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";
  const normalLink =
    "relative flex cursor-pointer items-center justify-center space-x-1 tracking-[1px] text-[18px] leading-[20px] font-bold hover:text-[#6b4343] after:content-[''] after:bg-[#6b4343] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  //mapping category
  const tags = Array.from(new Set(book.map((tag) => tag.category)));
  const handleClick = (design) => {
    setCaseStudy(design);
  };

  //display filtered category
  const displayCategory = caseStudy
    ? book.filter((item) => item.category === caseStudy)
    : [];

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="px-2 sm:px-4 lg:px-10 py-8">
      <div className=" space-y-3">
        <h1 className="text-[22px] font-bold lg:text-[24px] lg:leading-[38.9px]">
          Latest Books
        </h1>
      </div>

      {/* head */}

      <div className="flex items-center justify-start py-4 space-x-4 w-full ">
        {tags &&
          tags.map((tag, index) => {
            return (
              <div
                data-aos="fade-right"
                key={index}
                onClick={() => handleClick(tag)}
                className={`text-nowrap ${
                  caseStudy === tag ? activeLink : normalLink
                } `}
              >
                {tag}
              </div>
            );
          })}
      </div>

      <div>
        {caseStudy && displayCategory.length ? (
          <div className=" grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center pt-10 lg:px-4 space-y-10 md:space-x-2 md:space-y-0">
            {displayCategory.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="5000"
                  data-aos-anchor-placement="top-center"
                  key={index}
                  className="w-full  sm:w-48  lg:w-72 md:h-[25rem] text-sm md:text-normal shadow-sm"
                >
                  <div className="h-48 md:h-48 lg:h-[13rem] w-full ">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <div className="h-[40%] space-y-2 pt-4 px-2 ">
                    <h3 className="text-sm  font-semibold">{data.title}</h3>
                    <h3 className=" text-[10px] font-medium leading-tight">
                      {data.date}
                    </h3>
                    <h3 className=" text-[12px] font-normal">
                      "{data.description}"
                    </h3>

                    <a
                      href={data.link}
                      className="flex items-center justify-start space-x-1 w-28 border-b-2 hover:cursor-pointer  border-black py-1 hover:text-[#8A50F0] hover:border-b-2 hover:border-[#46414f]"
                    >
                      <h2 className="font-semibold text-[12px]">Read more</h2>
                      <FaCircleArrowRight className="w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading.......</div>
        )}
      </div>
    </div>
  );
};

export default LatestBooks;
