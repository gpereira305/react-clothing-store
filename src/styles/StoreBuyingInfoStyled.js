import styled from "styled-components";

export const StoreGuaranteeStyled = styled.section`
    background-color: var(--black-color);
    color: var(--white-color);
`;

export const StoreWrapperStyled = styled.div`
    margin: 0 10% 8%;
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: repeat(1, 100%);
    }
`;

export const StoreGuaranteeItemStyled = styled.div`
    text-align: center;

    h4 {
        font-size: 1rem;
        font-weight: normal;
        text-transform: uppercase;
    }

    span {
        font-size: 45px;
    }
`;
