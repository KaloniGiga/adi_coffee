import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full px-8 py-8 flex justify-center items-center relative bg-white">
      {/* <div className="w-[30%] ml-auto h-full absolute inset-0 bg-[url('/')] bg-contain bg-center bg-no-repeat"></div> */}
      <div className="z-10 w-[95%] lg:w-[90%] mx-auto flex flex-col-reverse justify-center lg:flex-row">
        <div className="w-full lg:w-[50%] flex justify-center  flex-col pr-4 py-8 lg:py-0">
          <h3 className="text-[26px] lg:text-[30px] text-left mb-4 uppercase">Find your perfect coffee match.</h3>
          <h3 className="text-[16px] md:text-[18px] text-left font-light text-[rgba(0,0,0,1)]">
            In 1999, we started off as the first specialty coffee shop in Nepal. Over the years, we have diversified
            from a small coffee shop to an enterprise franchising the Nepali Coffee brand, nationally and
            internationally.
          </h3>
        </div>

        <div className="w-full lg:w-[30%]">
          <Image
            src={"/aboutus2.png"}
            alt=""
            width={2000}
            height={2000}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
