import React from "react";
import { products } from "../data";
import StoreGridItem from "./StoreGridItem";
import StoreSpinner from "./common/StoreSpinner";
import {
    StoreGridContainerStyled,
    StoreGridStyled,
    StoreGridTitleStyled,
} from "../styles/StoreLowerPricesStyled";

const StoreLowerPrices = () => {
    return (
        <StoreGridContainerStyled id="sale">
            <StoreGridTitleStyled>
                <h4>Coleção de Verão</h4>
                <h3>Produtos com desconto</h3>
            </StoreGridTitleStyled>
            {!products ? (
                <StoreSpinner />
            ) : (
                <StoreGridStyled>
                    {products
                        .filter((p) => p.price < 20)
                        .map((product) => (
                            <StoreGridItem product={product} key={product.id} />
                        ))}
                </StoreGridStyled>
            )}
        </StoreGridContainerStyled>
    );
};

export default StoreLowerPrices;
