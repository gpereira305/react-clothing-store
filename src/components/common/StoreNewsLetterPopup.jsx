import React, { useContext, useState } from "react";
import newsImg from "../../assets/images/newsletter-img.jpg";
import styled from "styled-components";
import { StoreContext } from "../../storeContext";

const StoreNewsLetterModalStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    background-color: rgb(0 0 0 / 70%);
    z-index: 100;
`;

const StoreNewsLetterInnerModalStyled = styled.div`
    width: 90%;
    max-width: 670px;
    margin: 17% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    position: relative;

    > span {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        color: var(--black-color);
    }

    @media (max-width: 990px) {
        flex-direction: column;
    }

    @media (max-width: 720px) {
        padding: 26px;
    }
`;

const StoreNewsLetterImageStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;

    > img {
        width: 100%;
        height: 100%;
        @media (max-width: 990px) {
            display: none;
        }
    }
`;

const StoreNewsLetterFormStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #e77b00;
    padding: 30px;

    @media (max-width: 990px) {
        flex: 100%;
    }
`;

const StoreNewsLetterPopup = () => {
    const { handleNewsLetterModal, newsLetter } = useContext(StoreContext);

    return (
        <StoreNewsLetterModalStyled open={newsLetter}>
            <StoreNewsLetterInnerModalStyled>
                <span
                    className="material-icons"
                    title="Fechar"
                    onClick={handleNewsLetterModal}
                >
                    close
                </span>
                <StoreNewsLetterImageStyled>
                    <img src={newsImg} alt="" />
                </StoreNewsLetterImageStyled>
                <StoreNewsLetterFormStyled></StoreNewsLetterFormStyled>
            </StoreNewsLetterInnerModalStyled>
        </StoreNewsLetterModalStyled>
    );
};

export default StoreNewsLetterPopup;
