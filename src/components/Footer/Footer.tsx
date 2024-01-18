import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full pt-6 lg:pt-8 flex flex-col bg-[#F5F4F2]">
      <div className="w-[30%] lg:w-[20%]  ml-2 lg:mx-auto bg-transparent mb-4">
        <Image
          alt=""
          src={"/expresso.avif"}
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="pl-2 lg:pl-0 w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-around bg-transparent gap-y-4 lg:gap-y-0">
        <div className="w-full lg:w-[25%] text-[14px] lg:text-[16px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-2 lg:gap-y-4">
          <h3 className="text-[14px] lg:text-[18px] font-bold text-black">About us</h3>
          <h3>Beans</h3>
          <h3>Contact Us</h3>
          <h3></h3>
        </div>
        <div className="w-full lg:w-[25%] text-[14px] lg:text-[16px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-2 lg:gap-y-4">
          <h3 className="text-[14px] lg:text-[18px] font-bold text-black">GET IN TOUCH</h3>
          <h3>+44(0)1884 829 400</h3>
          <h3>info@roastworks.co.uk</h3>
        </div>
        <div className="w-full lg:w-[25%] text-[14px] lg:text-[16px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-2 lg:gap-y-4">
          <h3 className="text-[14px] lg:text-[18px] font-bold text-black">SUPPORT</h3>
          <h3>PRIVACY POLICY</h3>
          <h3>TERMS AND CONDITION</h3>
        </div>
      </div>

      <div className="w-full flex justify-center mt-2    lg:mt-0 py-6 lg:py-6 border-[1px] border-[rgba(0,0,0,0.1)]">
        <h3 className="text-[14px] lg:text-[16px] ">@ Copyright 2024 Roastworks Coffee CO. LTD.</h3>
      </div>
    </div>
  );
};

export default Footer;
