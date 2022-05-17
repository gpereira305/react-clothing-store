import React from "react";
import StoreHeader from "../components/StoreHeader";
import StoreHero from "../components/StoreHero";
import StoreProductGrid from "../components/StoreProductGrid";

const StoreHomePage = () => {
  return (
    <>
      <StoreHeader />
      <StoreHero />
      <StoreProductGrid />
    </>
  );
};

export default StoreHomePage;
