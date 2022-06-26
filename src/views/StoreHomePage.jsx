import React, { useState } from "react";
import StoreBuyingInfo from "../components/StoreBuyingInfo";
import StoreFooter from "../components/StoreFooter";
import StoreHeader from "../components/StoreHeader";
import StoreHero from "../components/StoreHero";
import StoreLowerPrices from "../components/StoreLowerPrices";
import StoreParallax from "../components/StoreParallax";
import StoreProductGrid from "../components/StoreProductGrid";
import StoreBlog from "../components/StoreBlog";
import StoreProductDetailModal from "../components/common/StoreProductDetailModal";
import StoreNewsLetterPopup from "../components/common/StoreNewsLetterPopup";

const StoreHomePage = () => {
    return (
        <>
            <StoreHeader />
            <StoreHero />
            <StoreProductGrid title="Nova Coleção" subtitle="Novidades" />
            <StoreProductDetailModal />
            <StoreLowerPrices />
            <StoreBlog />
            <StoreBuyingInfo />
            <StoreParallax />
            <StoreNewsLetterPopup />
            <StoreFooter />
        </>
    );
};
export default StoreHomePage;
