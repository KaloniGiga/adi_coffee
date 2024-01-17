"use client";
import { useCallback, useEffect, useRef } from "react";
import { register } from "swiper/element";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import CoffeeCard from "./CoffeeCard";

register();
const OurCoffee = () => {
  const swiperRef = useRef<any>(null);

  const portfolioData = [
    {
      title: "Mobile App for Dollar Save Club",
      description:
        "An Android app with no-fuss shopping features and flawless navigation helps the Dollar Shave Club skyrocket sales",
      image: "/coffeeimage-bg.png",
    },
    {
      title: "Mobile App for Dollar Save Club",
      description:
        "An Android app with no-fuss shopping features and flawless navigation helps the Dollar Shave Club skyrocket sales",
      image: "/coffeeimage-bg.png",
    },
    {
      title: "Mobile App for Dollar Save Club",
      description:
        "An Android app with no-fuss shopping features and flawless navigation helps the Dollar Shave Club skyrocket sales",
      image: "/coffeeimage-bg.png",
    },
    {
      title: "Mobile App for Dollar Save Club",
      description:
        "An Android app with no-fuss shopping features and flawless navigation helps the Dollar Shave Club skyrocket sales",
      image: "/coffeeimage-bg.png",
    },
    {
      title: "Mobile App for Dollar Save Club",
      description:
        "An Android app with no-fuss shopping features and flawless navigation helps the Dollar Shave Club skyrocket sales",
      image: "/coffeeimage-bg.png",
    },
  ];

  useEffect(() => {
    const swiperContainer = swiperRef.current;

    const params = {
      modules: [Navigation, Pagination],
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 30,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1268: {
          slidesPerView: 4,
        },
      },
      injectStyles: [
        `
     `,
      ],
    };

    Object.assign(swiperContainer as any, params);
    (swiperContainer as any).initialize();
  }, []);

  return (
    <section
      id="portfolio"
      className="w-full mx-auto flex flex-col justify-center pt-4 pb-4 lg:pt-8 lg:pb-8 bg-[#ffffee] z-40 relative"
    >
      <div className="w-full h-full absolute inset-0 bg-[url('/bg-texture.png')] bg-cover bg-center"></div>
      <div className="w-[90%] flex flex-col mx-auto md:pl-[4%] z-40">
        <h1 className="mt-8 text-[26px] md:text-[30px] lg:text-[30px] font-semibold text-black text-center uppercase">
          Our Coffee
        </h1>
        {/* <div className="w-[50px] h-[4px] bg-gradient-to-r from-[#ff6300] to-[#ff9900] ml-2"></div> */}
      </div>
      <div className="w-full pt-8 pb-4 lg:pb-16 lg:px-8 relative">
        <swiper-container ref={swiperRef} init={false}>
          {portfolioData.map((item, index) => {
            return (
              <swiper-slide className="swiperSlide" key={index}>
                <CoffeeCard title={item.title} des={item.description} image={item.image} />
              </swiper-slide>
            );
          })}
        </swiper-container>
        {/* <div className="swiper-pagination"></div> */}
        <div className="w-[90%] absolute top-[40%] left-[5%] flex justify-between z-40">
          <div className="swiper-button-prev w-[40px] lg:w-[65px] h-[40px] lg:h-[65px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#f0f0f0] to-[#f0f0f0]">
            <KeyboardBackspaceIcon sx={{ color: "#000000" }} />
          </div>
          <div className="swiper-button-next w-[40px] lg:w-[65px] h-[40px] lg:h-[65px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#f0f0f0] to-[#f0f0f0]">
            <EastIcon sx={{ color: "#000000" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoffee;
