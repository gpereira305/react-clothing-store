import styled from "styled-components";



export const StoreNavCartWrapperStyled = styled.div`
    position: absolute;
    width: 300px;
    background-color: var(--black-color);
    color: var(--white-color);
    right: -12px;
    top: 30px;
    padding: 20px 20px 0;
    display: none;

    &:hover {
        display: block;
    }
`;

export const StoreNavCartItemsStyled = styled.div`
    max-height: 18vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--black-color);
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--gray-color);
        border-radius: 20px;
        height: 20px;
    }
`;
 
export const StoreNavCartItemsDetailStyled = styled.div` 
    display:flex ;
    position: relative;
    margin-bottom: 15px;
   
     a {
        display: flex;
        flex: 2;
        color: var(--gray-color);
        font-size: 0.875rem;

        img {
           width: 60px;
        } 

        > div {
            display: flex;
            flex-direction: column;
            margin-left: 15px;

            > span {
                font-size: 0.6rem;
                margin-left: 0 !important;
            }
            
        }  
     }  
`;

export const StoreNavCartRemoveItemStyled = styled.span`
    color: var(--red-color) !important;
    font-size: 1.15rem;
    right: 10px;
    margin-left: 0!important;
    margin-right: 10px;
`;

export const StoreNavCartActionsStyled = styled.div``;

export const StoreNavCartActionsInfoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px 0;

    > h3 {
        font-weight: 300;
        color: var(--gray-color);
    }

    > span {
        font-weight: 600;
    }
`; 

export const StoreNavCartActionsBtnsStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StoreNavCartActionsBtnsBtnStyled = styled.button`  
    padding: 10px;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer; 
    border: 1px solid ${(props) => props.primary ? "var(--dark-color2)" : "var(--body-color)"};
    background: ${(props) => props.primary ? "var(--black-color)" : "var(--body-color)"};
    margin-bottom: 15px;
    transition: var(--transition);

    &:hover { 
        border: 1px solid ${(props) => props.primary ? "var(--body-color)" : "var(--salmon-color)"};
        background: ${(props) => props.primary ? "var(--black-color)" : "var(--salmon-color)"};
    }

    a {
        color: ${(props) =>
        props.primary ? "var(--dark-color2)" : "var(--black-color)"};
        transition: var(--transition);
        
        &:hover {
            color: var(--body-color);
        }
    }
`;

export const StoreNavCartEmptyStyled = styled.div`
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
