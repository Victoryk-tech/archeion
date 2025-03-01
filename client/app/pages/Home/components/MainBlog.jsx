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

  if (loading) {
    return <StarLoader />;
  }
  return (
    <div>
      <main className="">
        <section>
          <h1 className="mb-[2rem] text-xl font-bold">Recent Blog Posts</h1>
          <article className="flex flex-col lg:flex-row justify-center gap-6  px-[0px] mb-[4rem] md:mb-0 ">
            {/*  first blog*/}
            <div className="w-full">
              {tenBlogs.slice(0, 1).map((post) => (
                <div key={post.id}>
                  {post.video ? (
                    <div className="relative w-full h-0 pb-[56.25%] md:pb-[53.25%]">
                      <VideoEmbed videoUrl={post.video} />
                    </div>
                  ) : (
                    <div className="">
                      <Image
                        src={
                          (post.images && post.images[0]) ||
                          "/default-image.jpg"
                        }
                        alt={post.title}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="w-full h-[172px] ">
                    <p className="text-customPurple font-bold text-xs mt-4">
                      Kemele Victory • {formatTime(post.createdAt)}
                    </p>
                    <h1 className="text-xl font-bold py-[8px]">{post.title}</h1>
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
            </div>

            <div className="flex flex-col gap-10 sm:gap-8  ">
              {/* second blog*/}
              {tenBlogs.slice(1, 3).map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-4 md:flex-row md:w-[580px] md:h-[150px] "
                >
                  {post.video ? (
                    <div className="relative w-full md:w-[54%]  h-0 pb-[56.25%] md:pb-[32%]">
                      <VideoEmbed videoUrl={post.video} />
                    </div>
                  ) : (
                    <div className="w-full md:w-[54%]">
                      <Image
                        src={
                          (post.images && post.images[0]) ||
                          "/default-image.jpg"
                        }
                        alt={post.title}
                        width={120}
                        height={140}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex flex-col w-[220px]">
                    <p className="text-customPurple font-bold text-xs">
                      Kemele Victory • {formatTime(post.createdAt)}
                    </p>
                    <h1 className="text-xl font-bold py-[8px]">{post.title}</h1>
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
            </div>
          </article>

          {/*  3 blog*/}
          <article className="w-full">
            {tenBlogs.slice(3, 4).map((post) => (
              <div
                className="flex flex-col lg:flex-row justify-center gap-6  px-[0px] mt-6  md:h-[300px]"
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
                        (post.images && post.images[0]) || "/default-image.jpg"
                      }
                      alt={post.title}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="md:w-[680px] ">
                  <p className="text-customPurple font-bold text-xs">
                    Kemele Victory • {formatTime(post.createdAt)}
                  </p>
                  <h1 className="text-xl font-bold  py-[8px] ">{post.title}</h1>
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
                  <div className="relative w-full h-0 pb-[56.25%] md:pb-[54.25%]">
                    <VideoEmbed videoUrl={post.video} />
                  </div>
                ) : (
                  <div className="w-full">
                    <Image
                      src={
                        (post.images && post.images[0]) || "/default-image.jpg"
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
                  <h1 className="text-xl font-bold py-[10px] ">{post.title}</h1>
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
    </div>
  );
};

export default MainBlog;
