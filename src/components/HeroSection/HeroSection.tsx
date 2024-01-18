"use client";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const heroData = ["coffee1.mp4", "coffee3.mp4", "coffee4.mp4"];
  const [selectedValue, setSelectedValue] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setSelectedValue((selectedValue + 1) % 3);
  //   }, 5000)

  //   return () => clearInterval(id);
  // }, [])

  const handleClick = () => {
    window.scrollTo({ top: 500, left: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <video className="hidden lg:block" autoPlay muted loop id="myVideo">
        <source src={heroData[2]} type="video/mp4" />
        <source src={heroData[1]} type="video/mp4" />
        <source src={heroData[0]} type="video/mp4" />
      </video>
      <Image
        src={"/coffee2.gif"}
        width={2000}
        height={2000}
        alt=""
        className="lg:hidden w-full h-full object-cover object-center"
      />
      <div className="absolute bottom-10 left-[45%] arrow-container" onClick={handleClick}>
        <KeyboardArrowDownIcon className="arrow-down" sx={{ fontSize: "70px", color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default HeroSection;
