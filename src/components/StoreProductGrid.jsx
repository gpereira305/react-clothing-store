import React from "react";
import { products } from "../data";
import StoreGridItem from "./StoreGridItem";
import StoreSpinner from "./StoreSpinner";
import {
    StoreGridContainerStyled,
    StoreGridStyled,
    StoreGridTitleStyled,
} from "../styles/StoreProductStyledGrid";

const StoreProductGrid = ({ title, subtitle }) => {
    return (
        <StoreGridContainerStyled id="collection">
            <StoreGridTitleStyled>
                <h4>{title}</h4>
                <h3>{subtitle}</h3>
            </StoreGridTitleStyled>
            {!products ? (
                <StoreSpinner />
            ) : (
                <StoreGridStyled>
                    {products
                        .filter((p) => p.price > 19.99)
                        .map((product) => (
                            <StoreGridItem product={product} key={product.id} />
                        ))}
                </StoreGridStyled>
            )}
        </StoreGridContainerStyled>
    );
};

export default StoreProductGrid;
