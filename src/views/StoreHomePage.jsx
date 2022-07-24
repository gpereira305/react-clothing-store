import React, { useContext,useEffect } from "react";
import StoreBuyingInfo from "../components/StoreBuyingInfo"; 
import StoreHero from "../components/StoreHero";
import StoreLowerPrices from "../components/StoreLowerPrices";
import StoreParallax from "../components/StoreParallax";
import StoreProductGrid from "../components/StoreProductGrid";
import StoreBlog from "../components/StoreBlog";
import StoreNewsLetterPopup from "../components/common/StoreNewsLetterPopup"; 
import { StoreContext } from "../storeContext";

const StoreHomePage = () => {
    const { handleGoTopPage } = useContext(StoreContext); 

    useEffect(()=> {
        handleGoTopPage()
    }, [])



    return (
        <> 
            <StoreHero />  
            <main>
                <StoreProductGrid title="Nova Coleção" subtitle="Novidades" />
                <StoreLowerPrices />
                <StoreBlog />
                <StoreBuyingInfo />
                <StoreParallax />
                <StoreNewsLetterPopup />
            </main> 
        </>
    );
};
export default StoreHomePage;
