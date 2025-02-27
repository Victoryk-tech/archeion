import React from "react";
import Subscribe from "./Subscribe";

const AboutH = () => {
  const activeLink =
    "text-[#000000] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[15px] leading-[20px] font-normal hover:text-[#000000] after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return (
    <div className="mt-10 ">
      <h1 className="text-[24px] md:text-[48px] text-center font-semibold max-w-[600px] mx-auto">
        News and insights from ARCHEION
      </h1>

      <Subscribe />

      <div className="flex items-center justify-center py-10">
        <nav className="flex items-center justify-between space-x-7 lg:space-x-10 text-[#d1d1d1] border-b-[1px] border-[#d1d1d1] py-4">
          <ul>All Articles</ul>
          <ul>History</ul>
          <ul>Designs</ul>
          <ul>Programming</ul>
        </nav>
      </div>
    </div>
  );
};

export default AboutH;
