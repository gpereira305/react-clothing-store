import React from "react";
import banner from "../assets/images/banner-img.jpg";
import styled from "styled-components";

const StoreHeroStyled = styled.div`
    position: relative;

    ::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        bottom: 9.5px;
        background: linear-gradient(
            90deg,
            rgba(254, 96, 55, 1) 0%,
            rgb(255 145 117 / 58%) 51%,
            rgba(254, 242, 238, 0) 100%
        );
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
        max-width: 50%;
        justify-content: center;
        align-items: center;

        @media (max-width: 680px) {
            display: none;
        }

        h1 {
            /* font-size: 2rem; */
            line-height: 1;
            font-weight: 400;
            color: var(--black-color);
            margin-bottom: 25px;

            @media (max-width: 780px) {
                font-size: 2rem;
            }
        }

        a {
            padding: 5px 20px;
            text-transform: uppercase;
            color: var(--black-color);
            border: 2px solid var(--black-color);
            cursor: pointer;
            font-size: 0.75rem;
            font-weight: 500;
            align-self: center;
            min-width: 150px;
            transition: var(--transition);

            &:hover {
                background-color: var(--black-color);
                color: var(--white-color);
            }
        }
    }
`;

const StoreHero = () => {
    return (
        <StoreHeroStyled>
            <img src={banner} alt="Hero" />
            <div>
                <h1>Nova coleção de verão</h1>
                <a href="#collection">Coleção de verão</a>
            </div>
        </StoreHeroStyled>
    );
};

export default StoreHero;
