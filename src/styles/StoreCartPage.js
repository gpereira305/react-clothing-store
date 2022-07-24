import styled from "styled-components";



export const StoreCartContainerStyled = styled.section`
    position: relative;
    margin: 0 10%;
    min-height: 67.70vh;
`;

export const StoreCartInnerContainerStyled = styled.div` 
    padding-top: 15%;
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    gap: 40px; 

    @media(max-width: 960px) {
        flex-direction: column;
    }
`;

export const StoreCartItemsStyled = styled.ul`
    flex: 2; 
    overflow-y: auto;
    padding-right: 20px; 

   > .horizontal  { 
        width: 100%;
        height: 1px;
        background-color: rgb(165 165 165 / 25%);
        display: flex;
        margin-bottom: 15px;
   }

   &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #ddd;
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #afafaf;
        border-radius: 20px;
        height: 20px;
    } 
`;

export const StoreCartItemsTitleStyled = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const StoreCartItemsListedStyled = styled.li` 
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    transition: var(--transition);
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;

export const StoreCartItemsRemoveStyled = styled.div`
    display: flex;
    justify-content: center;
    width: 65px; 
    > span {
        cursor:pointer ;
        color: var(--red-color);
        font-size: 1.2rem;
    }
`

export const StoreCartItemsListedBodyStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    max-width: 500px;

    > img {
        width: 120px;
    }
     > span {
        font-weight: 600; 
    }
`;
 
export const StoreCartItemsEmptyCartStyled = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
`;

export const StoreCartItemsInfoStyled = styled.div`
    flex: 1; 
    display: flex;
    justify-content: center;
`;

export const StoreCartItemsInfoWrapperStyled = styled.div`
    width: 100%; 
    padding: 15px;

    > h2 {
        font-weight: 400;
        padding-bottom: 40px;
    } 
`;

export const StoreCartItemsInfoSubtotalStyled = styled.div`
 padding-bottom: 40px;
   
   p {
    font-weight: 600;
    padding-bottom: 10px; 

    span {
      font-weight: 400; 
    }
   }

   > .horizontal  { 
        width: 100%;
        height: 1px;
        background-color: rgb(165 165 165 / 25%);
        display: flex; 
   }
`;
export const StoreCartItemsInfoTotalStyled = styled.div`
    display: flex;
    flex-direction: column;  
    justify-content: flex-end;

   p {
    padding-bottom: 10px; 
    font-weight: 600;

       span {
        font-weight: 400;
       }
   }

   a {
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;  
    transition: var(--transition);  
    background-color: var(--dark-color);
    color: var(--body-color);
   }
`;
// export const StoreCartItemsInfoTototalStyled = styled.div``;