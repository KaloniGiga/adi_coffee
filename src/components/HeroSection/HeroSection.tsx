import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeroSection = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* <Image
             src={"/coffee2.gif"}
             alt=""
             width={2000}
             height={2000}
             className="w-full h-full object-cover object-center"
            /> */}
      <video autoPlay muted loop id="myVideo">
        <source src="coffee3.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-10 left-[45%] arrow-container">
        <KeyboardArrowDownIcon className="arrow-down" sx={{ fontSize: "100px", color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default HeroSection;
