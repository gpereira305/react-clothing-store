import React from "react";
import styled from "styled-components";
import { products } from "../data";
import StoreGridItem from "./StoreGridItem";
import StoreSpinner from "./StoreSpinner";

// STYLING
const StoreGridContainerStyled = styled.section`
  margin: 0 10%;
`;

const StoreGridTitleStyled = styled.div`
  text-align: center;
  margin: 15% 0 5%;

  h4 {
    text-transform: uppercase;
    color: var(--salmon-color);
    font-size: 0.7rem;
  }

  h3 {
    font-weight: 300;
  }
`;

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  position: relative;

  @media (max-width: 1220px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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
