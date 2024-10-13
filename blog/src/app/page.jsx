"use client";

import React from "react";

import Image from "next/image"; // Import Image for optimization

import Innovation from "@/components/LandingPage/Innovation";
import LatestBooks from "@/components/LandingPage/LatestBooks";
import Welcome from "@/components/LandingPage/Welcome";
import ShowRoom from "@/components/LandingPage/ShowRoom";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Header */}

      {/* Hero Image */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="books"
        width={2072}
        height={410}
        layout="responsive"
      />

      {/* Main Content */}
      <Innovation />
      <ShowRoom />
      <LatestBooks />
      <Welcome />
    </div>
  );
}
