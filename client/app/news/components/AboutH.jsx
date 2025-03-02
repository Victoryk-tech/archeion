import React, { useContext, useEffect, useState, useMemo } from "react";
import Subscribe from "./Subscribe";
import { BlogContext } from "../../contexts/BlogContext";
import Blog from "./Blog";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // use usePathname instead of useRouter

import { FiSearch } from "react-icons/fi";

import StarLoader from "../../pages/lib/shared/StarLoader";
import VideoEmbed from "../../pages/Home/components/VideoEmbeded";
import { FaArrowRightLong } from "react-icons/fa6";
import LikeAndComment from "./Likes";
const AboutH = () => {
  const {
    fetchBlogs,
    blog,
    likesAndComments,
    formatTime,
    error,
    loading,

    handleLike,
  } = useContext(BlogContext);
  const [activeCategory, setActiveCategory] = useState("History");
  const pathname = usePathname(); // Replaces useRouter
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["History", "Designs", "Programming"];

  useEffect(() => {
    fetchBlogs(activeCategory);
  }, [activeCategory, fetchBlogs]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return blog.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        formatTime(post.createdAt).includes(query)
    );
  }, [searchQuery, blog]);

  const activeLink =
    "text-[#000000] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[15px] leading-[20px] font-normal hover:text-[#000000] after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return (
    <div className="mt-10">
      <h1 className="text-[24px] md:text-[48px] text-center font-semibold max-w-[600px] mx-auto">
        News and insights from ARCHEION
      </h1>

      <Subscribe />

      <div className="flex items-center justify-center py-10">
        <nav className="border-b-[1px] border-[#d1d1d1] py-4">
          <ul className="flex items-center space-x-7 lg:space-x-10 text-[#d1d1d1]">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer ${
                  activeCategory === category ? activeLink : normalLink
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <main className="px-2 md:px-4 lg:px-16">
          <div className="py-1 mb-10 space-x-3 rounded-md  border-[0.7px] border-[#d1d1d1]  w-full md:w-[300px] flex items-center">
            <FiSearch size={24} />
            <input
              type="text"
              placeholder="Search by title, words, or date"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          {/* blog */}

          <div>
            {blog.length === 0 ? (
              <div className="flex justify-center items-center w-full py-16">
                <p className="text-center text-gray-500 md:text-[26px]">
                  No blog available.
                </p>
              </div>
            ) : (
              <div className="">
                <section>
                  <h1 className="mb-[2rem] text-xl font-bold">Posts</h1>

                  <article className="flex flex-col md:flex-row md:justify-center md:gap-3 lg:gap-8  mb-16">
                    {/* First Blog */}
                    <div className="w-full md:w-[50%] lg:w-[55%]">
                      {blog.slice(0, 1).map((post) => (
                        <div key={post._id}>
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

                            <div>
                              <LikeAndComment
                                likes={
                                  likesAndComments[post._id]?.likesCount || 0
                                }
                                comments={
                                  likesAndComments[post._id]?.commentsCount || 0
                                }
                                liked={
                                  likesAndComments[post._id]?.liked || false
                                }
                                toggleLike={() => handleLike(post._id)}
                              />
                            </div>

                            <div className="mt-4">
                              {post.category === "History" ? (
                                <Link
                                  href={`/news/${post.id}`}
                                  className="text-black font-medium flex items-center space-x-2"
                                >
                                  <p> Read more </p>{" "}
                                  <FaArrowRightLong size={20} />
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
                      {blog.slice(1, 3).map((post) => (
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

                            <div>
                              <LikeAndComment
                                likes={
                                  likesAndComments[post._id]?.likesCount || 0
                                }
                                comments={
                                  likesAndComments[post._id]?.commentsCount || 0
                                }
                                liked={
                                  likesAndComments[post._id]?.liked || false
                                }
                                toggleLike={() => handleLike(post._id)}
                              />
                            </div>

                            <div className="mt-4">
                              {post.category === "History" ? (
                                <Link
                                  href={`/news/${post.id}`}
                                  className="text-black font-medium flex items-center space-x-2"
                                >
                                  <p> Read more </p>{" "}
                                  <FaArrowRightLong size={20} />
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
                    {blog.slice(3, 4).map((post) => (
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

                          <div>
                            <LikeAndComment
                              likes={
                                likesAndComments[post._id]?.likesCount || 0
                              }
                              comments={
                                likesAndComments[post._id]?.commentsCount || 0
                              }
                              liked={likesAndComments[post._id]?.liked || false}
                              toggleLike={() => handleLike(post._id)}
                            />
                          </div>

                          <div className="mt-6">
                            {post.category === "History" ? (
                              <Link
                                href={`/news/${post.id}`}
                                className="text-black font-medium flex items-center space-x-2"
                              >
                                <p> Read more </p>{" "}
                                <FaArrowRightLong size={20} />
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

                {/* down section  blog from 5 */}
                <section className="md:p-0 my-[3rem] w-full md:mt-24">
                  <article className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                    {blog.slice(4).map((post) => (
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

                          <div>
                            <LikeAndComment
                              likes={
                                likesAndComments[post._id]?.likesCount || 0
                              }
                              comments={
                                likesAndComments[post._id]?.commentsCount || 0
                              }
                              liked={likesAndComments[post._id]?.liked || false}
                              toggleLike={() => handleLike(post._id)}
                            />
                          </div>

                          <div className="mt-6">
                            {post.category === "History" ? (
                              <Link
                                href={`/news/${post.id}`}
                                className="text-black font-medium flex items-center space-x-2"
                              >
                                <p> Read more </p>{" "}
                                <FaArrowRightLong size={20} />
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
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutH;
