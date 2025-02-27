import { useState, useEffect } from "react";
import { IoPencil, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import {
  RiFacebookBoxFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMenu4Fill,
  RiProfileLine,
} from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const id = pathname.startsWith("/Media/")
    ? pathname.split("/Media/")[1]
    : null;
  const [display, setDisplay] = useState(false);
  const links = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/news" },
    { label: "About Us", path: "/About" },
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/Media" ||
      (id && pathname === `/Media/${id}`) ||
      pathname === "/About" ||
      pathname === "/news"
    ) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, [pathname, id]);

  const activeLink =
    "text-[#000000] flex items-center justify-center space-x-1 font-bold text-[15px] relative after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";

  const normalLink =
    "relative flex items-center justify-center space-x-1 tracking-[1px] text-[15px] leading-[20px] font-normal hover:text-[#000000] after:content-[''] after:bg-[#000000] after:h-[3px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return display ? (
    <div className=" border-b-[0.3px] border-black px-2 md:px-4 lg:px-16 py-6 md:py-4 shadow-md sticky top-0 bottom-0 bg-white z-[999]">
      <div className="md:space-y-8 max-w-[100rem] mx-auto ">
        <div className="flex items-center justify-between py-6 md:py-2">
          <div className="hidden md:flex items-center justify-center space-x-3 text-xl">
            <RiMenu4Fill />
          </div>
          <div className="md:text-center space-y-1">
            <h1 className="text-2xl md:text-6xl font-medium">ARCHEION</h1>
            <p className="hidden md:block lg:tracking-[0.3rem]">
              MAGAZINE AND BLOG THEME
            </p>
          </div>

          <div className="flex md:hidden items-center justify-center text-lg font-medium">
            <RiMenu4Fill />
           
          </div>
          <div className="hidden md:flex items-center justify-center space-x-2 text-xl">
            <RiInstagramLine />
            <RiFacebookBoxFill />
            <RiLinkedinBoxLine />
            <Link href="/login">
              <IoPersonOutline />
            </Link>
          </div>
        </div>

        <nav className="flex items-center justify-center space-x-3 md:space-x-8 font-normal">
          {links.map(({ label, path }, index) => (
            <Link
              onClick={scrollToTop}
              key={`${label}-${index}`}
              href={path}
              className={`${pathname === path ? activeLink : normalLink}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  ) : null;
};

export default Navbar;
