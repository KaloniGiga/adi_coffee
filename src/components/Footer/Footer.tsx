import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[40vh] py-12 flex flex-col bg-[#1d1d1d]">
      <div className="w-[20%] mx-auto">
        <Image
          alt=""
          src={"/expresso.avif"}
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-[80%] mx-auto flex">
        <div className="w-[30%] text-[18px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-4 text-center">
          <h3 className="text-[20px] font-semibold text-black">About us</h3>
          <h3>Beans</h3>
          <h3>Contact Us</h3>
          <h3></h3>
        </div>
        <div className="w-[30%] text-[18px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-4 text-center">
          <h3 className="text-[20px] font-semibold text-black">GET IN TOUCH</h3>
          <h3>+44(0)1884 829 400</h3>
          <h3>info@roastworks.co.uk</h3>
        </div>
        <div className="w-[30%] text-[18px] uppercase text-[rgba(0,0,0,0.7)] flex flex-col gap-y-4 text-center">
          <h3 className="text-[20px] font-semibold text-black">SUPPORT</h3>
          <h3>PRIVACY POLICY</h3>
          <h3>TERMS AND CONDITION</h3>
        </div>
      </div>

      <div className="w-full flex justify-center py-6 border-[1px] border-[rgba(0,0,0,0.1)]">
        <h3 className="text-[16px] ">@ Copyright 2024 Roastworks Coffee CO. LTD.</h3>
      </div>
    </div>
  );
};

export default Footer;
