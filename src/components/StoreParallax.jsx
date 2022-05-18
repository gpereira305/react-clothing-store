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

    h4 {
      font-size: 2rem;
    }

    button {
      padding: 10px 20px;
      text-transform: uppercase;
      border: none;
      color: var(--white-color);
      background-color: var(--black-color);
      cursor: pointer;
      font-size: 0.75rem;
      align-self: center;
    }
  }
`;

const StoreParallax = () => {
  return (
    <StoreParallaxStyled>
      <StoreParallaxWrapperStyled className="parallax">
        <div>
          <h4>Toda a coleção de verão</h4>
          <button type="button">
            <a href="#collection">Coleção</a>
          </button>
        </div>
      </StoreParallaxWrapperStyled>
    </StoreParallaxStyled>
  );
};

export default StoreParallax;
