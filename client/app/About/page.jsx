"use client";
import React from "react";
import vee from "../../public/assets/vee.jpg";
import Image from "next/image";
import Footer from "../pages/Home/components/Footer";
import Navbar from "../pages/Home/components/Navbar";
import Subscribers from "../pages/Home/components/Subscribers";
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-[1100px] mx-auto px-2 py-10 md:px-4 lg:px-28">
        {/* header */}
        <div></div>
        <div className=" space-y-1">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold py-4">
            About Us
          </h1>

          <h2 className="text-lg md:text-xl tracking-wider">
            We help you explore history, programming, and design through
            well-crafted content…to inspire learning.
          </h2>

          <p className="md:tracking-wider text-[14px] md:text-[16px] leading-6 md:leading-8">
            <span className="font-semibold">ARCHEION</span> was created as a
            personal blog to document thoughts, research, and insights on these
            topics. Since then, it has become a space for sharing knowledge,
            ideas, and discoveries with readers who seek inspiration and
            information.
          </p>
          <p className="md:tracking-wider text-[14px] md:text-[16px] leading-6 md:leading-8">
            This blog is dedicated to providing well-researched articles on
            history, programming tutorials, and design insights. In addition to
            regular content, subscribers can get updates on new posts, ensuring
            they stay connected to fresh discussions. If you enjoy deep dives
            into history, coding experiences, or creative design ideas, ARCHEION
            is here to bring them to you. Each post is carefully written to
            offer value, whether it is an analysis of historical events, coding
            best practices, or discussions on design principles. While this blog
            is personal, it welcomes readers who are eager to learn, reflect,
            and engage with thought-provoking content. If you want to explore
            new perspectives without the distractions of a crowded platform,
            this is the place for you. Subscribe today to receive insightful,
            well-crafted content delivered directly to you.
          </p>
        </div>

        <div className="py-10 mt-24 shadow-md px-2">
          <h1 className="font-medium lg:text-xl">
            Please reach out  for more information.
          </h1>

          <div className="flex flex-col items-center justify-center space-y-10 pt-20">
            <div className="rounded-xl">
              <Image
                src={vee}
                alt="profile"
                width={300}
                height={250}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-4 text-center">
              <h1 className="font-medium">Kemele Victory</h1>
              <h3>Founder/Account Manager</h3>
              <p className="text-sm">kemelevictory3802@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Subscribers />
      <Footer />
    </div>
  );
};

export default About;
