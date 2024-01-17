"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CloseOutlined } from "@mui/icons-material";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  const handleCloseClick = () => {
    setShowMobileNav(false);
  };

  const handleOpenClick = () => {
    setShowMobileNav(true);
  };
  return (
    <div
      className={`w-full h-[10vh] ${isScrolled ? "lg:h-[10vh]" : "lg:h-[15vh]"} flex items-center justify-between lg:justify-around fixed top-0 left-0 z-50 transition-all ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="w-[80%] mx-auto flex justify-center">
        <div className="hidden lg:flex w-[40%] items-center justify-between font-semibold ">
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="about1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About us
          </Link>
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="service1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </div>
        <div className="w-[25vw] md:w-[22vw] lg:w-[22vw] h-full flex justify-center items-center rounded-full overflow-hidden mx-8">
          <Image
            src={"/expresso.avif"}
            alt=""
            width={500}
            height={500}
            className="w-full h-full object-contain object-center bg-fixed"
          />
        </div>
        <div className={"hidden lg:flex w-[40%] items-center justify-between font-semibold openSans"}>
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Location
          </Link>
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Branch
          </Link>
          <Link
            className={`navItem ${!isScrolled ? "hover:text-[rgba(255,255,255,0.7)]" : "hover:text-[rgba(0,0,0,0.7)]"}`}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="w-[30vw] flex items-center justify-center lg:hidden z-50">
        <MenuIcon onClick={handleOpenClick} fontSize="large" color="info" />
        <div
          className={`w-screen h-screen fixed top-0 bg-black ${
            !showMobileNav ? "left-[-100%]" : "left-[0%]"
          } transition-all`}
        >
          <div className="w-full flex flex-col gap-y-8 px-4 py-4 text-white text-[30px] italic ">
            <div className="w-full px-2 py-2 flex justify-end">
              <CloseOutlined onClick={handleCloseClick} fontSize="large" />
            </div>
            <Link
              onClick={handleCloseClick}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              onClick={handleCloseClick}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About us
            </Link>
            <Link
              onClick={handleCloseClick}
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
            <Link
              onClick={handleCloseClick}
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Location
            </Link>
            <Link
              onClick={handleCloseClick}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
