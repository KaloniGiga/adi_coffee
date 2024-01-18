import AboutUs from "@/components/AboutUs/AboutUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import OurCoffee from "@/components/OurCoffee/OurCoffee";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurCoffee />
      <FeaturedProduct />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}
