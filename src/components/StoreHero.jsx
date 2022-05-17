import React from "react";
import banner from "../assets/images/banner-img.jpg";
import styled from "styled-components";

const StoreHeroStyled = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 98.7%;
    background-color: rgb(0 0 0 / 50%);
    z-index: 5;
    left: 0;
  }

  > img {
    width: 100%;
    margin-top: 4.5%;
  }

  div {
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    bottom: 45%;
    z-index: 10;

    button {
      padding: 10px 20px;
      text-transform: uppercase;
      border: none;
      color: var(--white-color);
      background-color: var(--black-color);
      cursor: pointer;
      font-size: 0.75rem;
    }
  }
`;

const StoreHero = () => {
  return (
    <StoreHeroStyled>
      <img src={banner} alt="Hero" />
      <div>
        <button type="button">Ir às compras</button>
      </div>
    </StoreHeroStyled>
  );
};

export default StoreHero;
