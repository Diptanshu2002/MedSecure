import React, { useEffect } from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";

import Trending from "../components/ui/Trending-section/Trending";

import StepSection from "../components/ui/Step-section/StepSection";



const Home = () => {
  return (
    <>
      <HeroSection />
      <Trending />
      <SellerSection />
      <LiveAuction />
      <StepSection />
    </>
  );
};

export default Home;