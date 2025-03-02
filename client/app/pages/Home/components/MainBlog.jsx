"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import { BlogContext } from "../../../contexts/BlogContext";
import VideoEmbed from "./VideoEmbeded";
import StarLoader from "../../lib/shared/StarLoader";
import { FiArrowDownRight } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const MainBlog = () => {
  const { blogs, loading, formatTime } = useContext(BlogContext);
  const tenBlogs = blogs.slice(0, 10);

  // if (loading) {
  //   return <StarLoader />;
  // }
  return (
    <div>
      {loading ? (
        <StarLoader />
      ) : blogs.length === 0 ? ( 
        <div className="flex justify-center items-center w-full py-16">
          <p className="text-center text-gray-500 md:text-[26px]">
            No blog available.
          </p>
        </div>
      ) : (
        <main className="">
          <section>
            <h1 className="mb-[2rem] text-xl font-bold">Recent Blog Posts</h1>

            <article className="flex flex-col md:flex-row md:justify-center md:gap-3 lg:gap-8  mb-16">
              {/* First Blog */}
              <div className="w-full md:w-[50%] lg:w-[55%]">
                {tenBlogs.slice(0, 1).map((post) => (
                  <div key={post.id}>
                    {post.video ? (
                      <div className="relative w-full  h-0 pb-[50.25%]">
                        <VideoEmbed videoUrl={post.video} />
                      </div>
                    ) : (
                      <div className="w-full">
                        <Image
                          src={post.images?.[0] || "/default-image.jpg"}
                          alt={post.title}
                          width={120}
                          height={120}
                          className="w-full h-[240px] md:h-[280px] object-cover"
                        />
                      </div>
                    )}

                    <div className="w-full mt-4">
                      <p className="text-customPurple font-bold text-xs">
                        Kemele Victory • {formatTime(post.createdAt)}
                      </p>
                      <h1 className="text-lg md:text-xl font-bold py-2">
                        {post.title}
                      </h1>
                      <p className="text-customGrey text-sm md:text-base">
                        {post.description}
                      </p>

                      <div className="mt-4">
                        {post.category === "History" ? (
                          <Link
                            href={`/news/${post.id}`}
                            className="text-black font-medium flex items-center space-x-2"
                          >
                            <p> Read more </p> <FaArrowRightLong size={20} />
                          </Link>
                        ) : post.category === "Designs" ? (
                          <Link
                            href={`/news/${post.id}`}
                            className="text-black font-medium flex items-center space-x-2"
                          >
                            <p>See more</p> <FaArrowRightLong />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second and Third Blogs */}
              <div className="flex flex-col gap-6 md:w-[50%] lg:w-[40%]">
                {tenBlogs.slice(1, 3).map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col md:flex-row gap-4 w-full"
                  >
                    {post.video ? (
                      <div className="relative w-full md:w-[50%] h-0 pb-[56.25%] md:pb-[40%]">
                        <VideoEmbed videoUrl={post.video} />
                      </div>
                    ) : (
                      <div className="w-full md:w-[50%]">
                        <Image
                          src={post.images?.[0] || "/default-image.jpg"}
                          alt={post.title}
                          width={120}
                          height={140}
                          className="w-full h-[160px] object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-col md:w-[50%]">
                      <p className="text-customPurple font-bold text-xs">
                        Kemele Victory • {formatTime(post.createdAt)}
                      </p>
                      <h1 className="text-base md:text-lg font-bold py-2">
                        {post.title}
                      </h1>
                      <p className="text-customGrey text-sm">
                        {post.description}
                      </p>

                      <div className="mt-4">
                        {post.category === "History" ? (
                          <Link
                            href={`/news/${post.id}`}
                            className="text-black font-medium flex items-center space-x-2"
                          >
                            <p> Read more </p> <FaArrowRightLong size={20} />
                          </Link>
                        ) : post.category === "Designs" ? (
                          <Link
                            href={`/news/${post.id}`}
                            className="text-black font-medium flex items-center space-x-2"
                          >
                            <p>See more</p> <FaArrowRightLong />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/*  3 blog*/}
            <article className="w-full">
              {tenBlogs.slice(3, 4).map((post) => (
                <div
                  className="flex flex-col lg:flex-row justify-center gap-6  md:px-4 mt-6 md:h-[200px] lg:h-[250px]"
                  key={post.id}
                >
                  {post.video ? (
                    <div className="relative w-full h-0 pb-[56%] md:pb-[25.25%]">
                      <VideoEmbed videoUrl={post.video} />
                    </div>
                  ) : (
                    <div className="w-full">
                      <Image
                        src={
                          (post.images && post.images[0]) ||
                          "/default-image.jpg"
                        }
                        alt={post.title}
                        width={120}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="md:w-[680px] ">
                    <p className="text-customPurple font-bold text-xs">
                      Kemele Victory • {formatTime(post.createdAt)}
                    </p>
                    <h1 className="text-xl font-bold  py-[8px] ">
                      {post.title}
                    </h1>
                    <p className="text-customGrey">{post.description}</p>

                    <div className="mt-6">
                      {post.category === "History" ? (
                        <Link
                          href={`/news/${post.id}`}
                          className="text-black font-medium flex items-center space-x-2"
                        >
                          <p> Read more </p> <FaArrowRightLong size={20} />
                        </Link>
                      ) : post.category === "Designs" ? (
                        <Link
                          href={`/news/${post.id}`}
                          className="text-black font-medium flex items-center space-x-2"
                        >
                          <p>See more</p> <FaArrowRightLong />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </section>

          {/* down section  blog 5-10 */}
          <section className="md:p-0 my-[3rem] w-full md:mt-24">
            <article className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {tenBlogs.slice(5, 10).map((post) => (
                <div key={post.id}>
                  {post.video ? (
                    <div className="relative w-full h-0 pb-[53.25%] md:pb-[49.25%]">
                      <VideoEmbed videoUrl={post.video} />
                    </div>
                  ) : (
                    <div className="w-full">
                      <Image
                        src={
                          (post.images && post.images[0]) ||
                          "/default-image.jpg"
                        }
                        alt={post.title}
                        width={120}
                        height={120}
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  <div className="flex flex-col">
                    <p className="text-customPurple font-bold text-xs mt-4">
                      Kemele Victory • {formatTime(post.createdAt)}
                    </p>
                    <h1 className="text-xl font-bold py-[10px] ">
                      {post.title}
                    </h1>
                    <p className="text-customGrey">{post.description}</p>

                    <div className="mt-6">
                      {post.category === "History" ? (
                        <Link
                          href={`/news/${post.id}`}
                          className="text-black font-medium flex items-center space-x-2"
                        >
                          <p> Read more </p> <FaArrowRightLong size={20} />
                        </Link>
                      ) : post.category === "Designs" ? (
                        <Link
                          href={`/news/${post.id}`}
                          className="text-black font-medium flex items-center space-x-2"
                        >
                          <p>See more</p> <FaArrowRightLong />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </main>
      )}
    </div>
  );
};

export default MainBlog;
