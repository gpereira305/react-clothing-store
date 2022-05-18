import React from "react";
import StoreHeader from "../components/StoreHeader";
import StoreHero from "../components/StoreHero";
import StoreLowerPrices from "../components/StoreLowerPrices";
import StoreProductGrid from "../components/StoreProductGrid";
import StoreStyleBlog from "../components/StoreStyleBlog";

const StoreHomePage = () => {
  return (
    <>
      <StoreHeader />
      <StoreHero />
      <StoreProductGrid title="Nova Coleção" subtitle="Novidades" />
      <StoreLowerPrices />
      <StoreStyleBlog />
    </>
  );
};
export default StoreHomePage;
