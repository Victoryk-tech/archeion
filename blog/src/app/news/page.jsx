"use client";
import Advert from "@/components/new/Advert";
import React from "react";

const News = () => {
  return (
    <div>
      <div class=" mb-8">
        <div class="grid gap-2 bg-white text-gray-700 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2">
          <div class="bg-gray-800 text-white rounded-md p-5 text-lg col-span-1 md:col-span-2 lg:col-span-2 row-span-1">
            A
          </div>
          <div class="bg-gray-800 text-white rounded-md p-5 text-lg col-span-1 md:col-start-2 md:col-span-2 lg:col-start-3 lg:col-span-2 row-span-1">
            B
          </div>
          <div class="bg-gray-800 text-white rounded-md p-5 text-lg col-span-1 md:col-span-2 lg:col-span-2 row-start-2">
            C
          </div>
          <div class="bg-gray-800 text-white rounded-md p-5 text-lg col-span-1 md:col-start-2 md:col-span-2 lg:col-start-3 lg:col-span-2 row-start-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="bg-gray-300 text-gray-700 rounded-md p-5">E</div>
            <div class="bg-gray-300 text-gray-700 rounded-md p-5">F</div>
            <div class="bg-gray-300 text-gray-700 rounded-md p-5">G</div>
          </div>
        </div>
      </div>

      <Advert />
      <Advert />
      <Advert />
      <Advert />
    </div>
  );
};

export default News;
