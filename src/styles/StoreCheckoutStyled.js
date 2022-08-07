import styled from "styled-components";


export const StoreCheckoutContainerStyled = styled.section`
    min-height: 67.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10%;  
    padding-top: 5%;
`;

export const StoreCheckoutTitleStyled = styled.div`
   margin-bottom:20px ;
   text-align: center;

   h1 {
    font-weight: 500;
    text-transform:uppercase ;
   }
`;


export const StoreCheckoutFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    margin: 0 auto; 
`;

export const StoreCheckoutLabelStyled = styled.label``;

export const StoreCheckoutInputStyled = styled.input`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  outline: none;
  border: 1px solid  #ddd; 
  margin-bottom: 20px;
  font-size: 1rem;

  &::placeholder {
      color: #ccc;
  }
`;

export const StoreCheckoutSubmitBtn = styled.button`  
    text-transform: uppercase;
    color: var(--white-color);
    border: none; 
    font-size: 0.75rem;
    font-weight: 500;    
    transition: var(--transition); 
    margin: auto;
    min-width: 150px;
    width: 100%;
    max-width: 200px;
    padding: 15px 10px; 
    background-color: var(--black-color);
    cursor: pointer;
    margin-top: 40px;

    &:hover {
       background-color: var(--dark-color2);
    }

     @media(max-width: 520px){
         max-width: none; 
     }
`;