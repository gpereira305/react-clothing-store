import styled from "styled-components";


export const StoreSigninContainerStyled = styled.section`
    min-height: 67.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10%;  
`;

export const StoreSigninTitleStyled = styled.div`
   margin-bottom:20px ;
   text-align: center;

   h1 {
    font-weight: 500;
    text-transform:uppercase ;
   }
`;

export const StoreSigninFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 550px;
    margin: auto;
`;

export const StoreSigninLabelStyled = styled.label``;

export const StoreSigninInputStyled = styled.input`
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

export const StoreSigninSubmitBtn = styled.button`  
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

export const StoreSigninSubmitStyled = styled.div`
  margin: 20px 0 50px;
  text-align: center;

  p {}

  small {
    text-decoration: underline;
    transition: var(--transition); 
    cursor: pointer;

    &:hover {
        color: var(--salmon-color);
    }
  }
`;

export const StoreSignupInnerContainer = styled.div`
  width: 100%;
  margin-top: 10%;
`;

export const StoreSigninInnerContainer = styled.div`
   width: 100%;
   margin-top: 4%;
`;