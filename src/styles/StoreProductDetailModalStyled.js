import styled from "styled-components";

export const StoreProductModalStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 75%);
    z-index: 100;
    overflow: hidden auto;
`;

export const StoreProductInnerModalStyled = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 30px;
    padding: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white-color);
    position: relative;

    @media (max-width: 720px) {
        flex-direction: column;
        width: 90%;
    }

    @media (max-width: 520px) {
        margin-top: 35%;
    }
`;

export const StoreProductCloseModalStyled = styled.div`
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

export const StoreProductImageStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;

    > img {
        width: 330px;

        @media (max-width: 820px) {
            width: 240px;
        }

        @media (max-width: 520px) {
            width: 190px;
        }
    }
`;

export const StoreProductInfoStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 36px;

    @media (max-width: 720px) {
        padding-left: 0;
    }
`;

export const StoreProductInfoH3Styled = styled.h3`
    text-transform: uppercase;
    font-weight: 400;
`;

export const StoreProductInfoSpanStyled = styled.span`
    margin-bottom: 5%;

    @media (max-width: 720px) {
        margin-bottom: 3%;
    }
`;

export const StoreProductInfoParagraphStyled = styled.p`
    margin: 5% 0;
    font-size: 0.8rem;
    color: var(--gray-color);

    @media (max-width: 720px) {
        margin: 3% 0;
    }
`;

export const StoreProductSelectWrapperStyled = styled.div`
    display: flex;
    margin: 10% 0 5%;

    @media (max-width: 720px) {
        margin: 5% 0;
    }

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;

export const StoreProductSelectStyled = styled.select`
    padding: 11px;
    margin-right: 15px;
    border: 1.5px solid var(--gray-color2);
    outline: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.8rem;

    &:focus {
        border: 1.5px solid var(--salmon-color);
    }

    @media (max-width: 520px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

export const StoreProductOptionStyled = styled.option`
    cursor: pointer;
`;

export const StoreProductButtonStyled = styled.button`
    background-color: var(--black-color);
    border: 2px solid var(--black-color);
    color: var(--white-color);
    width: 200px;
    padding: 10px 0;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.75rem;
    transition: var(--transition);

    &:hover {
        background-color: #262626;
    }

    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const StoreProductDetailSocialStyled = styled.div`
    margin-top: 10%;
    display: flex;
    width: 150px;
    min-width: 110px;
    justify-content: space-between;
    font-size: 1.1rem;

    > a {
        color: var(--gray-color);
    }

    @media (max-width: 720px) {
        margin-top: 5%;
    }
`;
