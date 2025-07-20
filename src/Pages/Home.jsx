import React from "react";
import ImageSlider from "../Component/ImageSlider";
import BranchSection from "../Component/BranchSection";
import ProductSection from "../Component/ProductSection";
import BannerSection from "../Component/BannerSection";
import FAQSection from "../Component/FAQSection";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <BranchSection />
      <ProductSection />
      <BannerSection />
      <FAQSection />
    </div>
  );
};

export default Home;
