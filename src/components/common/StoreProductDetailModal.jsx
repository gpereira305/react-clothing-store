import React, { useContext, useState } from "react";
import styled from "styled-components";
import { StoreContext } from "../../storeContext";

const StoreProductModalStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    background-color: rgb(0 0 0 / 95%);
    z-index: 100;
`;

const StoreProductInnerModalStyled = styled.div`
    width: 80%;
    margin: 10% auto;
    padding: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    position: relative;

    @media (max-width: 990px) {
        flex-direction: column;
    }

    @media (max-width: 720px) {
        padding: 26px;
    }
`;

const StoreProductCloseModalStyled = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-color);
    cursor: pointer;

    > span {
        font-size: 20px;
        color: var(--white-color);
    }
`;

const StoreProductImageStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: tomato;
    > img {
    }
`;

const StoreProductInfoStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    p:nth-of-type(2) {
        margin-top: 10%;
    }
`;
const StoreProductSelectStyled = styled.div`
    margin-top: 10%;
`;

const StoreProductDetailModal = () => {
    const { handleToggleModal, toggleModal } = useContext(StoreContext);

    return (
        <StoreProductModalStyled open={toggleModal}>
            <StoreProductInnerModalStyled>
                <StoreProductCloseModalStyled title="Fechar">
                    <span
                        className="material-icons"
                        onClick={handleToggleModal}
                    >
                        close
                    </span>
                </StoreProductCloseModalStyled>

                <StoreProductImageStyled>
                    <img src="" alt="" />
                </StoreProductImageStyled>

                <StoreProductInfoStyled>
                    <h3>Name Title</h3>
                    <p>R$ 29,99</p>
                    <hr />

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum, a aut. Quae, ipsum. Facilis necessitatibus officia
                        repudiandae, quidem facere iure magnam, saepe alias,
                        illo dolorem nobis optio eum quia sunt explicabo
                        cupiditate maiores! Architecto a blanditiis repellendus
                    </p>
                    <hr />

                    <StoreProductSelectStyled>
                        <select name="Price" id="">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <button>Add to cart</button>
                    </StoreProductSelectStyled>
                    <hr />
                    <div style={{ marginTop: "10%" }}>social media</div>
                </StoreProductInfoStyled>
            </StoreProductInnerModalStyled>
        </StoreProductModalStyled>
    );
};

export default StoreProductDetailModal;
