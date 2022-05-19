import React from "react";
import styled from "styled-components";

// STYLING
const StoreParallaxStyled = styled.section`
  margin-bottom: 10%;
`;

const StoreParallaxWrapperStyled = styled.div`
  position: relative;

  div {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    text-align: center;
    bottom: 45%;
    z-index: 10;

    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: var(--body-color);
      margin-bottom: 25px;
    }

    a {
      padding: 5px 20px;
      text-transform: uppercase;
      border: none;
      color: var(--white-color);
      border: 2px solid var(--white-color);
      cursor: pointer;
      font-size: 0.75rem;
      align-self: center;
      min-width: 150px;
      transition: var(--transition);

      &:hover {
        background-color: var(--white-color);
        color: var(--black-color);
      }
    }
  }
`;

const StoreParallax = () => {
  return (
    <StoreParallaxStyled>
      <StoreParallaxWrapperStyled className="parallax">
        <div>
          <h3>Promoções todos os dias!</h3>
          <a href="#sale">Confira</a>
        </div>
      </StoreParallaxWrapperStyled>
    </StoreParallaxStyled>
  );
};

export default StoreParallax;
