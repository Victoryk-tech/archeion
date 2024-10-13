"use client";
import React from "react";

const About = () => {
  return (
    <div className="px-2 py-10 md:px-4 lg:py-16">
      {/* header */}
      <div></div>
      <div className="lg:px-28 space-y-1">
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
    </div>
  );
};

export default About;
