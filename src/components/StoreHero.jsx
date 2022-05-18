import React, { useState } from "react";
import banner from "../assets/images/banner-img.jpg";
import styled from "styled-components";

const StoreHeroStyled = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    bottom: 9.5px;
    background-color: rgb(0 0 0 / 50%);
    z-index: 5;
    left: 0;
  }

  > img {
    width: 100%;
    margin-top: 3.5%;

    @media (max-width: 980px) {
      margin-top: 7%;
    }
    @media (max-width: 720px) {
      margin-top: 10%;
    }
    @media (max-width: 570px) {
      margin-top: 13%;
    }
    @media (max-width: 470px) {
      margin-top: 16%;
    }
    @media (max-width: 380px) {
      margin-top: 20%;
    }
  }

  div {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    text-align: center;
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
      align-self: center;
    }
  }
`;

const StoreHero = () => {
  return (
    <StoreHeroStyled>
      <img src={banner} alt="Hero" />
      <div>
        <h3>Promoções todos os dias!</h3>
        <button type="button">
          <a href="#collection">Coleção</a>
        </button>
      </div>
    </StoreHeroStyled>
  );
};

export default StoreHero;
