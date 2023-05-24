import Features from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

const index = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default index;
