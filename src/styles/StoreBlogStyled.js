import styled from "styled-components";

export const StoreGridContainerStyled = styled.section`
    margin: 0 10% 8%;
`;

export const StoreGridTitleStyled = styled.div`
    text-align: center;
    margin: 15% 0 5%;

    h4 {
        text-transform: uppercase;
        color: var(--salmon-color);
        font-size: 0.7rem;
    }

    h3 {
        font-weight: 300;
    }
`;

export const StoreGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    position: relative;

    @media (max-width: 1220px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 970px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const StorePostStyled = styled.div`
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        transform: translateY(-5px);
    }

    > div {
        img {
            width: 100%;
        }
    }

    > h4 {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.3;
        margin-top: 15px;
    }

    > p {
        line-height: 1.3;
        font-size: 0.75rem;
        color: var(--gray-color);
        font-weight: 500;
        font-family: "Open Sans", sans-serif;
        margin: 20px 0;
    }

    small {
        font-size: 0.55rem;
        font-style: italic;
    }
`;
