import React from "react";
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
    margin-top: 2.5%;

    @media (max-width: 1220px) {
      margin-top: 4%;
    }
    @media (max-width: 990px) {
      margin-top: 5.2%;
    }
    @media (max-width: 820px) {
      margin-top: 6.1%;
    }
    @media (max-width: 670px) {
      margin-top: 8%;
    }
    @media (max-width: 520px) {
      margin-top: 12.5%;
    }

    @media (max-width: 420px) {
      margin-top: 15.5%;
    }
  }

  div {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    text-align: center;
    bottom: 30%;
    z-index: 10;

    @media (max-width: 780px) {
      display: none;
    }

    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: var(--body-color);
      margin-bottom: 25px;
    }

    a {
      padding: 5px 20px;
      text-transform: uppercase;
      color: var(--white-color);
      border: 2px solid var(--white-color);
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 500;
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

const StoreHero = () => {
  return (
    <StoreHeroStyled>
      <img src={banner} alt="Hero" />
      <div>
        <h3>Nova coleção de verão</h3>
        <a href="#collection">Coleção de verão</a>
      </div>
    </StoreHeroStyled>
  );
};

export default StoreHero;
