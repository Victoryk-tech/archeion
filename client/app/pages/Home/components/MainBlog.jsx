"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RecentBlogPosts, AllBlogPosts } from "../../lib/categories";

const MainBlog = () => {
  return (
    <div>
      <main className="px-2 md:px-4 lg:px-16">
        <section>
          <h1 className="mb-[2rem] text-xl font-bold">
            {RecentBlogPosts.category}
          </h1>
          <article className="flex flex-col lg:flex-row justify-center gap-6  px-[0px] mb-[4rem] md:mb-0 ">
            {/* first video */}
            <div>
              <div className="relative w-full h-0 pb-[46.25%] md:pb-[40.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/KnfZLes_Z5I?start=12"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full h-[172px] ">
                <p className="text-customPurple font-bold text-xs mt-4">
                  Kemele Victory • 1 Nov 2023
                </p>
                <h1 className="text-xl font-bold py-[8px]">
                  Variable Declaration
                </h1>
                <p className="text-customGrey">
                  This video teaches the standard ways of initializing variables
                  and the three keywords recognized by Javascript used to
                  declare variables.
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
            <div className="relative w-full h-0 pb-[46.25%] md:pb-[25.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KnfZLes_Z5I?start=12"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="md:w-[680px] ">
              <p className="text-customPurple font-bold text-xs">
              Kemele Victory • 19 Mar 2024
              </p>
              <h1 className="text-xl font-bold  py-[8px] ">
                Values and Variables in Javascript
              </h1>
              <p className="text-customGrey">
                values and variables are part of the fundamentals in Javascript.
                It is very necessary that we understand these little steps and
                properties and when to declare them because it will save us from
                some unnecessary stress and make our coding faster and clear.
              </p>
            </div>
          </article>
        </section>

        {/* down section */}
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
      </main>
    </div>
  );
};

export default MainBlog;
