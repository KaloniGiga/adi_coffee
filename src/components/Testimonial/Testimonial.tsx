"use client";
import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TestimonialCard from "./TestimonialCard";

register();
const Testimonial = () => {
  const swiperRef = useRef<any>(null);

  const portfolioData = [
    {
      name: "Simon App",
      description:
        "I've been getting my coffee now from Addi Coffee for over 2 years and they never fail to impress with very, quality and timely delivery. I've always received my order within a couple of days and the coffee has always been recently roasted, which is a must for me. I've been getting my coffee now from Addi Coffee for over 2 years and they never fail to impress with very, quality and timely delivery. I've always received my order within a couple of days and the coffee has always been recently roasted, which is a must for me.",
      position: "CEO, Microsoft",
    },
    {
      name: "Tim Cook",
      description:
        "I've bought Adi coffee as part of my online grocery order for some time, but decided to go direct to them to experience a wider selection of the beans they roast. I haven't been disappointed. I've been getting my coffee now from Addi Coffee for over 2 years and they never fail to impress with very, quality and timely delivery. I've always received my order within a couple of days and the coffee has always been recently roasted, which is a must for me.",
      position: "CEO, Microsoft",
    },
    {
      name: "Sunder Pichai",
      description:
        "I've bought Adi coffee as part of my online grocery order for some time, but decided to go direct to them to experience a wider selection of the beans they roast. I haven't been disappointed.",

      position: "CEO, Microsoft",
    },
    {
      name: "Satya Nadella",
      description:
        "I've bought Adi coffee as part of my online grocery order for some time, but decided to go direct to them to experience a wider selection of the beans they roast. I haven't been disappointed.",

      position: "CEO, Microsoft",
    },
    {
      name: "Mark Zuckerberg",
      description:
        "I've been getting my coffee now from Addi Coffee for over 2 years and they never fail to impress with very, quality and timely delivery. I've always received my order within a couple of days and the coffee has always been recently roasted, which is a must for me.",
      position: "CEO, Microsoft",
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
          slidesPerView: 1,
        },
        1268: {
          slidesPerView: 1,
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
      className="w-full mx-auto flex flex-col justify-center pt-4 pb-4 lg:pt-8 lg:pb-8 bg-[#F1ECE8] z-40 relative"
    >
      <div className="w-[90%] flex flex-col mx-auto md:pl-[4%]">
        <h1 className="mt-8 text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-black text-center uppercase">
          Kind Words
        </h1>
      </div>
      <div className="w-[80%] md:w-[70%] lg:w-[60%] mx-auto pt-4 pb-2 lg:pt-8 md:pb-4 lg:pb-16 lg:px-8 relative">
        <swiper-container ref={swiperRef} init={false}>
          {portfolioData.map((item, index) => {
            return (
              <swiper-slide className="swiperSlide" key={index}>
                <TestimonialCard title={item.name} des={item.description} position={item.position} />
              </swiper-slide>
            );
          })}
        </swiper-container>
        {/* <div className="swiper-pagination"></div> */}
        <div className="w-[120%] absolute top-[30%] left-[-10%] flex justify-between z-40">
          <div className="swiper-button-prev w-[30px] lg:w-[65px] h-[30px] lg:h-[65px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#0f0f0f]">
            <KeyboardArrowLeftIcon sx={{ color: "#ffffff" }} />
          </div>
          <div className="swiper-button-next w-[30px] lg:w-[65px] h-[30px] lg:h-[65px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#0f0f0f] to-[#0f0f0f]">
            <KeyboardArrowRightIcon sx={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
