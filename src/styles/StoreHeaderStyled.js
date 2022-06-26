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
        font-size: 0.85rem;

        @media (max-width: 720px) {
            font-size: 0.65rem;
        }
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
    top: 33px;

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
    position: relative;

    a {
        font-size: 1rem;
        color: var(--body-color);
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: var(--white-color);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    @media (max-width: 820px) {
        display: none;
    }
`;

export const StoreNavIconsStyled = styled.ul`
    display: flex;
    position: relative;

    li {
        display: flex;
        align-items: center;

        span {
            transition: var(--transition);
            color: var(--white-color);
            margin-left: 10px;
            cursor: pointer;

            @media (max-width: 820px) {
                display: none;
            }
        }
    }
`;

export const StoreNavDialogWrapperStyled = styled.div`
    display: flex;

    &:hover > div {
        display: flex;
    }
`;

export const StoreNavDialogStyled = styled.div`
    position: absolute;
    left: 9px;
    top: 70%;
    background-color: var(--black-color);
    width: 78%;
    height: 8vh;
    display: none;
    flex-direction: column;
    text-align: end;
    padding: 10px;
    justify-content: space-around;

    &:hover {
        display: flex;
    }

    p {
        color: var(--white-color);
        cursor: pointer;
    }

    > span {
        font-size: 1.2rem;
    }
`;

export const StoreMenuIconStyled = styled.div`
    display: none;

    @media (max-width: 820px) {
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
    text-align: center;
    z-index: 10;
    transition: all ease-in-out 0.3s;

    @media (max-width: 620px) {
        width: 65%;
        right: ${(props) => (props.open ? 0 : "-110%")};
    }

    @media (max-width: 520px) {
        width: 100%;
        right: ${(props) => (props.open ? 0 : "-100%")};
    }

    > ul {
        color: var(--white-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65%;
        margin-top: 5%;
        cursor: pointer;

        > li {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 1rem;

            > span {
                margin-bottom: 20px;
            }

            > div {
                display: flex;
                flex-direction: column;
            }

            > a {
                font-size: 1rem;
                color: var(--white-color);
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
