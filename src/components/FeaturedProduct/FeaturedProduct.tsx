import Image from "next/image";

const FeaturedProduct = () => {
  return (
    <div className="w-full h-[90vh] lg:h-[80vh] flex flex-col justify-center items-center">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between h-full">
        <div className="w-full lg:w-[50%] h-[50%] lg:h-full">
          <Image
            src={"/klipartz.com1.png"}
            alt=""
            width={2000}
            height={2000}
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col h-full justify-center pb-4">
          <h3 className="text-[20px] md:text-[24px] lg:text-[30px] mb-4">
            DISCOVER OUR COFFEE VARIETY FOR THE HIGHEST COFFEE PLEASURE
          </h3>
          <div className="flex flex-col gap-y-4">
            <h5 className="text-[16px] lg:text-[18px]">
              From espresso blends to filter coffees to practical pods - in the Alps Coffee gourmet range you will find
              products for every taste and every type of preparation. Discover the unique diversity.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
