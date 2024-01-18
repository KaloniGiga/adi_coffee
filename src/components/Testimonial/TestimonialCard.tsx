import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface ICoffeeCard {
  title: string;
  position: string;
  des: string;
}
const TestimonialCard: FunctionComponent<ICoffeeCard> = ({ title, des, position }): ReactElement => {
  return (
    <div className="group flex flex-col h-[50vh] lg:h-[60vh] pb-2 bg-transparent relative rounded-lg">
      <div className="w-full flex flex-col mt-4 px-4 py-4 text-left">
        <div className="w-full flex gap-x-4">
          <div className="w-[80px] h-[80px] overflow-hidden rounded-full my-4">
            <Image
              src={"/profileImage.jpg"}
              alt=""
              width={2000}
              height={2000}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <h6 className="text-[16px] lg:text-[20px] text-[rgba(0,0,0,1)] font-semibold mt-4">{`${title}`}</h6>
            <h6 className="text-[16px] lg:text-[18px] text-[rgba(0,0,0,0.7)]">{position}</h6>
          </div>
        </div>
        <q className="text-[14px] md:text-[18px] lg:text-[18px] font-light italic text-[rgba(0,0,0,1)] line-clamp-5 lg:line-clamp-5">
          {des}
        </q>
      </div>
    </div>
  );
};

export default TestimonialCard;
