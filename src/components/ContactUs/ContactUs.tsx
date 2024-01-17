import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center items-center">
      <div className="w-[80%] mx-auto flex">
        <div className="w-[40%] flex flex-col h-full justify-center mb-16">
          <h3 className="text-[40px] font-bold">Find Us In</h3>
          <div>
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
                    <p className="text-[#000000] text-[20px]">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex gap-10 mt-8">
            <InstagramIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
          </div>
        </div>
        <div className="w-[60%]">
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
