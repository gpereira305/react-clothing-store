import styled from "styled-components";

export const StoreSlideWrapperStyled = styled.div`
    position: fixed;
    width: 100%;
    background-color: var(--white-color);
    z-index: 10;
    padding: 5px;
    height: 33px;
`;

export const StoreSlideTrackStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 50%;
    margin: auto;
    height: 100%;

    @media (max-width: 820px) {
        min-width: 70%;
        justify-content: space-between;
    }

    @media (max-width: 620px) {
        min-width: 90%;
    }
`;

export const StoreSlideItemStyled = styled.div`
    span {
        color: var(--black-color);
        font-weight: 600;
    }

    .social {
        display: flex;
        justify-content: space-evenly;
        min-width: 130px;

        a {
            font-size: 1rem;
            color: var(--black-color);
        }

        @media (max-width: 420px) {
            min-width: 100px;

            .fa-brands {
                font-size: 0.7rem;
            }
        }
    }
`;

export const StoreHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5%;
    background-color: var(--black-color);
    position: fixed;
    width: 100%;
    transition: var(--transition);
    z-index: 100;
    top: 34px;

    @media (max-width: 620px) {
        padding: 5px 5%;
    }
`;

export const StoreLogoStyled = styled.div`
    > a {
        font-size: 2rem;
        font-weight: 300;
        transition: var(--transition);
        color: var(--white-color);

        @media (max-width: 620px) {
            font-size: 1.2rem;
        }
    }
`;

export const StoreNavStyled = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StoreNavMenuStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    min-width: 280px;

    @media (max-width: 620px) {
        display: none;
    }

    a {
        font-size: 1rem;
        color: var(--body-color);

        @media (max-width: 620px) {
            font-size: 0.7rem;
        }
    }
`;

export const StoreNavIconsStyled = styled.ul`
    display: flex;

    li {
        display: flex;
        align-items: center;

        span {
            transition: var(--transition);
            color: var(--white-color);
            margin-left: 10px;

            @media (max-width: 620px) {
                display: none;
            }
        }
    }
`;

export const StoreMenuIconStyled = styled.div`
    display: none;

    @media (max-width: 620px) {
        display: flex;
        flex-direction: column;
        color: var(--white-color);
        cursor: pointer;
    }
`;

export const StoreMenuMobileStyled = styled.div`
    display: flex;
    position: absolute;
    right: ${(props) => (props.open ? 0 : "-55%")};
    bottom: 0;
    top: 35px;
    width: 50%;
    background-color: var(--black-color);
    height: 100vh;
    justify-content: center;
    z-index: 10;
    transition: all ease-in-out 0.3s;

    > ul {
        color: var(--white-color);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 45%;
        margin-top: 5%;
        cursor: pointer;

        > li {
            font-size: 1rem;

            > span {
                font-size: 1.7rem;
            }
        }
    }
`;

export const StoreMenuBurgerStyled = styled.span`
    display: block;
    border-radius: 50px;
    width: 22px;
    height: 2px;
    margin: 2px;
    background-color: #fff;
    transition: all 0.2s ease-in-out;

    :nth-child(2) {
        width: ${(props) => (props.open ? "40%" : "70%")};
    }
`;

export const StoreOverlayStyled = styled.span`
    position: absolute;
    background: rgb(0 0 0 / 85%);
    right: 0;
    top: 0;
    width: 100%;
    right: ${(props) => (props.open ? 0 : "-100%")};
    bottom: 0;
    height: 100vh;
    z-index: -1;
    cursor: pointer;
`;
