"use client";
import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="px-2 py-10 md:px-4 lg:px-28">
      {/* header */}
      <div></div>
      <div className=" space-y-1">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          About Us
        </h1>

        <h2 className="text-lg md:text-xl tracking-wider">
          We help you preserve history with our archival enclosures...to benefit
          the future.
        </h2>

        <p className="md:tracking-wider text-[14px] md:text-[16px] leading-6 md:leading-8">
          Archival Products was born in the 1980s out of a collaboration between
          our company and the nation's leading experts in library preservation
          and conservation. Since then, the most prestigious academic libraries,
          museums, and archives have trusted our products to protect their most
          valuable collections.
        </p>
        <p className="md:tracking-wider text-[14px] md:text-[16px] leading-6 md:leading-8">
          Our team is dedicated to developing solutions for the protection of
          books, pamphlets, music scores, manuscripts, photographs, textiles,
          imaging plates, and countless other items. In addition to many
          standard sizes, we can create custom sizes available for many of our
          enclosures to properly fit odd or over-sized items. If you have a
          special project, Archival Products is your partner to find (or create)
          just the right product to suit your needs. In fact, many of our
          products were originally developed in collaboration with our
          customers. Whether you have expert conservators you want to free up
          for working on high-level projects, or your organization simply needs
          ready-to-use enclosures, you can trust you're getting unrivaled
          quality with our time-saving products.
        </p>
      </div>

      <div className="py-10 mt-24 shadow-md px-2">
        <h1 className="font-medium lg:text-xl">
          Please reach out to our team for your custom preservation projects or
          for more information.
        </h1>

        <div className="flex flex-col items-center justify-center space-y-10 pt-20">
          <div className="rounded-xl">
            <Image
              src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="books"
              width={102}
              height={100}
            />
          </div>

          <div className="space-y-4 text-center">
            <h1 className="font-medium">Kemele Victory</h1>
            <h3>Account Manager</h3>
            <p className="text-sm">kemelevictory3802@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
