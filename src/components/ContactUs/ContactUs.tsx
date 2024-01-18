import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="w-full h-[100vh] lg:h-[80vh] flex flex-col justify-center items-center">
      <div className="w-[80%] mx-auto flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[40%] flex flex-col h-full justify-center items-center">
          <div>
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] mb-4 mt-4 uppercase">Find Us In</h3>
            <div className="flex flex-col gap-y-4">
              {["Address: Ohio, 2389 Street", "Phone: +977 12345132", "Email: testuser@gmail.com"].map(
                (item, index) => (
                  <div className=" flex items-center gap-2 lg:gap-3" key={index}>
                    <div className="text-[white]">
                      {index === 0 ? (
                        <LocationOnIcon sx={{ color: "#000000" }} />
                      ) : index === 1 ? (
                        <LocalPhoneIcon sx={{ color: "#000000" }} />
                      ) : (
                        <EmailIcon sx={{ color: "#000000" }} />
                      )}
                    </div>
                    <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[20px]">{item}</p>
                  </div>
                )
              )}
            </div>
            <div className="flex gap-10 mt-8">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <Image
            src={"/coffeecup.png"}
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

export default ContactUs;
