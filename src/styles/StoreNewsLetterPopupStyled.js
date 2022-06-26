import styled from "styled-components";

export const StoreNewsLetterModalStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${(props) => (props.open ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 70%);
    z-index: 100;
`;

export const StoreNewsLetterInnerModalStyled = styled.div`
    width: 100%;
    max-width: 750px;
    height: 45%;
    margin: 15px;
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
`;

export const StoreNewsLetterImageStyled = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;

    > img {
        width: 100%;
        height: 100%;

        @media (max-width: 590px) {
            display: none;
        }
    }
`;

export const StoreNewsLetterFormWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 30px;

    @media (max-width: 590px) {
        flex: 100%;
    }

    > h2 {
        text-transform: uppercase;
        font-size: 1.2rem;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 25px;
        font-weight: 400;
    }

    > p {
        text-align: center;
        font-size: 0.8rem;
        margin-bottom: 30px;
    }
`;

export const StoreNewsLetterFormStyled = styled.form`
    display: flex;
    flex-direction: column;
`;

export const StoreNewsLetterInputFieldStyled = styled.input`
    border: 1.5px solid var(--gray-color2);
    padding: 10px;
    outline: none;
    transition: var(--transition);

    &::placeholder {
        font-size: 0.85rem;
        letter-spacing: 1.2px;
        font-style: italic;
        color: var(--gray-color2);
    }

    &:focus {
        border: 1.5px solid var(--salmon-color);
    }
`;

export const StoreNewsLetterMessageStyled = styled.span`
    display: flex;
    align-items: center;
    color: var(--red-color);
    font-size: 0.65rem;
    height: 2.5vh;
    font-weight: 600;
`;

export const StoreNewsLetterButtonStyled = styled.button`
    background-color: var(--black-color);
    color: var(--white-color);
    padding: 12px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.75rem;
    transition: var(--transition);

    &:hover {
        background-color: #262626;
    }
`;
