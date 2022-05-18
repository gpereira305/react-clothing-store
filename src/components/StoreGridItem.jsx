import React from "react";
import styled from "styled-components";

// STYLING
const StoreGridItemStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 100%;
  }

  h4 {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    margin-top: 25px;
    transition: var(--transition);
    font-weight: normal;
  }

  &:hover {
    h4 {
      color: var(--white-color);
    }
    div {
      opacity: 1;

      > div {
        bottom: 50px;
      }
    }

    p {
      color: var(--white-color);
    }
  }

  p {
    position: absolute;
    font-weight: 500;
    font-size: 0.8rem;
    transition: var(--transition);
    bottom: 5px;
  }
`;

const StoreSaleTagStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--green-color);
  z-index: 5;

  > span {
    color: var(--white-color);
    text-transform: uppercase;
    padding: 0 10px;
    font-size: 0.55rem;
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
  opacity: 0;
`;

const StoreGridIconsStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  padding: 10px 0;
  width: 100%;
  z-index: 1;
  bottom: 0;
  transition: var(--transition);

  > span {
    background: var(--white-color);
    padding: 10px;
    border-radius: 100%;
    background-color: var(--salmon-color);
    transition: all ease 0.2s;

    &:hover {
      background-color: var(--white-color);
    }
  }
`;

const StoreGridItem = ({ product }) => {
  const { name, price, img } = product;

  console.log(price < 20);

  return (
    <StoreGridItemStyled>
      {price < 20 && (
        <StoreSaleTagStyled>
          <span>Promoção</span>
        </StoreSaleTagStyled>
      )}
      <img src={img} alt="" />
      <StoreGridOverlayStyled>
        <h4>R${price}</h4>
        <StoreGridIconsStyled>
          <span className="material-icons" title="Ver detalhes">
            visibility
          </span>
          <span className="material-icons" title="Adicionar ao carrinho">
            shopping_basket
          </span>
        </StoreGridIconsStyled>
      </StoreGridOverlayStyled>
      <p>{name}</p>
    </StoreGridItemStyled>
  );
};

export default StoreGridItem;
