import Image from "next/image";
import { FunctionComponent, ReactElement } from "react";

interface ICoffeeCard {
  title: string;
  des: string;
}
const TestimonialCard: FunctionComponent<ICoffeeCard> = ({ title, des }): ReactElement => {
  return (
    <div className="group flex flex-col h-[50vh] lg:h-[50vh] pb-2 bg-transparent relative">
      <div className="w-full flex flex-col mt-4 px-2 py-4 text-left gap-y-4">
        <q className="text-[18px] lg:text-[18px] text-[rgba(0,0,0,0.7)] line-clamp-7 text-center">{des}</q>
        <h6 className="text-[16px] lg:text-[22px] text-[rgba(0,0,0,0.7)] text-center font-semibold">{`- ${title}`}</h6>
      </div>
    </div>
  );
};

export default TestimonialCard;
