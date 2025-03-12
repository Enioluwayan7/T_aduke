import React from "react";
import { Collections, HeroSection } from "../components/app";

const Homepage = () => {
  console.log("freaking show");
  return (
    <div>
      <HeroSection />
      <Collections />
    </div>
  );
};

export default Homepage;
