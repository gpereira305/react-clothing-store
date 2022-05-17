import React from "react";
import styled from "styled-components";
import { products } from "../data";

// STYLING
const StoreGridContainerStyled = styled.section`
  margin: 0 10%;
`;

const StoreGridTitleStyled = styled.div`
  text-align: center;
  margin: 5% 0;
`;

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  position: relative;
`;

const StoreGridItemStyled = styled.div`
  /* background-color: tomato; */
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    div {
      opacity: 1;

      > div {
        /* bottom: 50px; */
      }
    }
  }
`;

const StoreGridOverlayStyled = styled.div`
  transition: all ease-in 0.3s;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  /* opacity: 0; */
`;

const StoreGridIconsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  padding: 10px 0;
  width: 100%;
  z-index: 1;
  bottom: 0;
  transition: all ease-in 0.3s;

  > span {
    background: #fff;
    padding: 10px;
    border-radius: 100%;
    background-color: tomato;
  }
`;

const StoreProductGrid = () => {
  return (
    <StoreGridContainerStyled>
      <StoreGridTitleStyled>
        <h2>Novidades</h2>
      </StoreGridTitleStyled>

      <StoreGridStyled>
        {products.map((product) => (
          <>
            <StoreGridItemStyled key={product.id}>
              {product.name}
              <StoreGridOverlayStyled>
                <StoreGridIconsStyled>
                  <span class="material-icons">visibility</span>
                  <span class="material-icons">shopping_basket</span>
                </StoreGridIconsStyled>
              </StoreGridOverlayStyled>
            </StoreGridItemStyled>
          </>
        ))}
      </StoreGridStyled>
    </StoreGridContainerStyled>
  );
};

export default StoreProductGrid;
