import BrandSection from "../components/sections/BrandSection";
import FeatureStrip from "../components/sections/FeatureStrip";
import HeroSection from "../components/sections/HeroSection";
import SlideshowSection from "../components/sections/SlideshowSection";
import StorySection from "../components/sections/StorySection";
import { getBrands } from "../services/productService";

export default function HomePage() {
  const brands = getBrands();

  return (
    <div className="space-y-10 pb-8 md:space-y-14">
      <SlideshowSection />
      <HeroSection />
      <FeatureStrip />
      <BrandSection brands={brands} />
      <StorySection />
    </div>
  );
}
