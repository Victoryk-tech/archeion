"use client";

import React from "react";

const Welcome = () => {
  return (
    <div className="w-full px-2 md:px-14 lg:px-16 py-8">
      <div className=" flex flex-col md:flex-row items-center justify-between">
        <div className="w-full lg:w-[600px] h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1676452443154-419e7de186f7?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-6  pb-9 md:pb-0 ">
          <h1 className="text-[32px] font-poppin font-medium">WELCOME</h1>
          <p className="text-sm leading-[20.7px]">
            "Vivamus id interdum diam. Aliquam condimentum nulla vitae quam
            pharetra,
            <br /> vel mollis enim pretium. Donec tristique varius nulla non
            elementum Vivamus id interdum diam. <br /> Aliquam condimentum nulla
            vitae quam pharetra,
            <br /> vel mollis enim pretium. Donec tristique varius nulla non
            elementum."
          </p>
          <button
            to="login"
            className=" text-center w-[40%] lg:w-[20%] rounded hover:bg-[#6b4343] p-2 hover:shadow-md text-[13px] text-[#6b4343] font-normal border-[#6b4343] border-[1px] hover:text-white transition-all ease-out"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className=" flex flex-col pt-9 md:pt-0 md:flex-row items-center justify-between lg:pl-32 ">
        <div className="space-y-6 ">
          <h1 className="text-[32px] font-poppin font-medium">WELCOME</h1>
          <p className="text-sm leading-[20.7px]">
            "Vivamus id interdum diam. Aliquam condimentum nulla vitae quam
            pharetra,
            <br /> vel mollis enim pretium. Donec tristique varius nulla non
            elementum Vivamus id interdum diam. <br /> Aliquam condimentum nulla
            vitae quam pharetra,
            <br /> vel mollis enim pretium. Donec tristique varius nulla non
            elementum."
          </p>
          <button
            to="login"
            className=" text-center w-[40%] lg:w-[20%] rounded hover:bg-[#6b4343] p-2 hover:shadow-md text-[13px] text-[#6b4343] font-normal border-[#6b4343] border-[1px] hover:text-white transition-all ease-out"
          >
            Learn More
          </button>
        </div>

        <div className="w-full lg:w-[500px] h-[400px] lg:pr-10 rounded-3xl ">
          <img
            src="https://images.unsplash.com/photo-1676033923657-89b92b8d64d0?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-contain rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
