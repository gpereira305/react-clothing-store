import React from "react";
import StoreBuyingInfo from "../components/StoreBuyingInfo";
import StoreFooter from "../components/StoreFooter";
import StoreHeader from "../components/StoreHeader";
import StoreHero from "../components/StoreHero";
import StoreLowerPrices from "../components/StoreLowerPrices";
import StoreParallax from "../components/StoreParallax";
import StoreProductGrid from "../components/StoreProductGrid";
import StoreBlog from "../components/StoreBlog";

const StoreHomePage = () => {
    return (
        <>
            <StoreHeader />
            <StoreHero />
            <StoreProductGrid title="Nova Coleção" subtitle="Novidades" />
            <StoreLowerPrices />
            <StoreBlog />
            <StoreBuyingInfo />
            <StoreParallax />
            <StoreFooter />
        </>
    );
};
export default StoreHomePage;
