"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RecentBlogPosts, AllBlogPosts } from "@/app/api/categories";

import Pagination from "@/components/pagnation";
const MainBlog = () => {
  return (
    <div>
      <main className="px-2 md:px-4 lg:px-16">
        <section>
          <h1 className="mb-[2rem] text-xl font-bold">
            {RecentBlogPosts.category}
          </h1>
          <article className="flex flex-col lg:flex-row justify-center gap-6  px-[0px] mb-[4rem] md:mb-0 ">
            <div>
              <div>
                <Image
                  src={RecentBlogPosts.blogImg1}
                  alt="blog news"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-[172px] ">
                <p className="text-customPurple font-bold text-xs mt-4">
                  {RecentBlogPosts.date1}
                </p>
                <h1 className="text-xl font-bold py-[8px]">
                  {RecentBlogPosts.title1}
                </h1>
                <p className="text-customGrey">
                  {RecentBlogPosts.headingExcept1}
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-10 sm:gap-6  ">
              <div className="flex flex-col gap-4 md:flex-row md:w-[580px] md:h-[150px] ">
                <div className="md:w-[100%]">
                  <Image
                    src={RecentBlogPosts.blogImg2}
                    alt="blog news"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-customPurple font-bold text-xs">
                    {RecentBlogPosts.date2}
                  </p>
                  <h1 className="text-xl font-bold  py-[8px]">
                    {RecentBlogPosts.title2}
                  </h1>
                  <p className="text-customGrey">
                    {" "}
                    {RecentBlogPosts.headingExcept2}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:w-[580px] md:h-[150px]">
                <div className="md:w-[100%]">
                  <Image
                    src={RecentBlogPosts.blogImg3}
                    alt="blog news"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-customPurple font-bold text-xs ">
                    {RecentBlogPosts.date3}
                  </p>
                  <h1 className="text-xl font-semibold  py-[8px]">
                    {RecentBlogPosts.title3}
                  </h1>
                  <p className="text-customGrey">
                    {RecentBlogPosts.headingExcept3}
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col lg:flex-row justify-center gap-6  px-[0px] mt-6">
            <div>
              <Image
                src={RecentBlogPosts.blogImg4}
                alt="blog news"
                width={120}
                height={120}
                className="w-full h-full"
              />
            </div>
            <div className="md:w-[680px] ">
              <p className="text-customPurple font-bold text-xs">
                {RecentBlogPosts.date4}
              </p>
              <h1 className="text-xl font-semibold  py-[8px] ">
                {RecentBlogPosts.title3}
              </h1>
              <p className="text-customGrey">
                {" "}
                {RecentBlogPosts.headingExcept4}
              </p>
            </div>
          </article>
        </section>

        <section className="md:p-0 my-[3rem]">
          <h1 className="py-[2rem] text-xl font-bold">
            {AllBlogPosts[0].category}
          </h1>
          <article className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {AllBlogPosts.map((post) => (
              <div key={post.id}>
                <div className="w-full">
                  <Image
                    src={post.blogImg}
                    alt="blog news"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-customPurple font-bold text-xs mt-4">
                    {post.date}
                  </p>
                  <h1 className="text-xl font-bold py-[10px] ">{post.title}</h1>
                  <p className="text-customGrey">{post.headingExcept}</p>
                </div>
              </div>
            ))}
          </article>
        </section>
        <Pagination />
      </main>
    </div>
  );
};

export default MainBlog;
