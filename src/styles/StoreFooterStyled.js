import styled from "styled-components";

export const StoreFooterStyled = styled.footer`
    background-color: var(--dark-color);
    position: relative; 
    > .diviser {
        position: absolute;
        height: 1px;
        left: 0;
        right: 0;
        width: 80%;
        margin: auto;
        background-color: var(--gray-color);
    }
`;

export const StoreFooterWrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 10%;

    @media (max-width: 824px) {
        flex-direction: column;
    }
`;

export const StoreFooterFormWrapperStyled = styled.div`
    width: 50%;

    @media (max-width: 824px) {
        width: 100%;
    }

    > h4 {
        font-size: 0.65rem;
        text-transform: uppercase;
        color: var(--body-color);
        font-weight: 400;
        margin: 30px 0 5px;
    }

    > h3 {
        font-weight: 300;
        margin-bottom: 30px;
        color: var(--gray-color);
        display: flex;

        @media (max-width: 424px) {
            font-size: 1.5rem;
        }

        > span {
            font-size: 0.7rem;
            font-weight: 500;
            text-transform: uppercase;
            margin-left: 5px;
        }
    }
`;

export const StoreFooterFormStyled = styled.form`
    display: flex;
    max-width: 400px;

    > input {
        outline: none;
        border: none;
        padding: 8px;
        background-color: #303030;
        width: 100%;
        font-size: 0.8rem;

        &::placeholder {
            font-style: italic;
        }
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        text-transform: uppercase;
        padding: 9.5px;
        background-color: #303030;
        color: var(--gray-color);
        font-size: 0.65rem;
        min-width: 125px;
        cursor: pointer;
        transition: var(--transition);

        > span {
            font-size: 1rem;
        }

        &:hover {
            color: var(--white-color);
        }
    }
`;

export const StoreFooterSocialLinksStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 230px;

    > a {
        font-size: 1.1rem;
        color: var(--gray-color);
        border: 2px solid var(--gray-color);
        width: 35px;
        height: 35px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);

        &:hover {
            color: var(--body-color);
            border: 2px solid var(--body-color);
        }
    }
`;

export const StoreFooterInstaStyled = styled.div`
    @media (max-width: 820px) {
        margin-top: 30px;
    }

    > h4 {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--body-color);
        font-weight: 400;
        margin-bottom: 15px;
    }
`;

export const StoreFooterInstaImgGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    max-width: 315px;

    @media (max-width: 824px) {
        max-width: initial;
    }
`;

export const StoreFooterImageStyled = styled.div`
    position: relative;
    cursor: pointer;

    &:hover {
        i {
            opacity: 1;
        }

        &::after {
            opacity: 1;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    i {
        position: absolute;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        top: 0;
        height: 100%;
        font-size: 1.5rem;
        color: var(--body-color);
        opacity: 0;
        transition: var(--transition);
    }

    &::after {
        content: "";
        position: absolute;
        background-color: rgb(0 0 0 / 65%);
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
        opacity: 0;
        transition: var(--transition);
    }
`;

export const StoreFooterCopyStyled = styled.div`
    text-align: center;
    padding: 10px 0;

    > small {
        font-size: 0.7rem;
        color: var(--gray-color);
    }
`;
