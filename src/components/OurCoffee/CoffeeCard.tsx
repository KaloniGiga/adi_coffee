import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface ICoffeeCard {
  title: string;
  des: string;
  image: string;
}
const CoffeeCard: FunctionComponent<ICoffeeCard> = ({ title, des, image }): ReactElement => {
  return (
    <div className="group flex flex-col h-[50vh] lg:h-[75vh] pb-2 bg-transparent relative">
      <div className="absolute w-full h-full top-0 left-0 group-hover:scale-[1.5] scale-0 transition-all">
        <Image
          src={"/klipartz.com.png"}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-full h-full md:h-full lg:h-full group-hover:rounded-xl overflow-hidden transition-all">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-contain object-center shadow-sm group-hover:scale-[1.1] transition-all hover:transition-all"
        />
      </div>
      {/* <div className="w-full flex flex-col mt-4 px-2 py-4 text-left">
        <h1 className="text-[18px] lg:text-[22px] font-semibold group-hover:text-[#2b2c2b]">{title}</h1>
        <h6 className="text-[14px] lg:text-[16px] text-[rgba(0,0,0,0.7)]">{des}</h6>
      </div> */}
    </div>
  );
};

export default CoffeeCard;
