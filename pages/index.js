import Features from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Layout/Navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
};

export default index;
