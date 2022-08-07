import React from 'react'
import { 
    StoreCheckoutContainerStyled, 
    StoreCheckoutFormStyled, 
    StoreCheckoutInputStyled, 
    StoreCheckoutLabelStyled, 
    StoreCheckoutSubmitBtn, 
    StoreCheckoutTitleStyled 
} from '../styles/StoreCheckoutStyled'

const StoreCheckoutForm = () => {
  return (
    <StoreCheckoutContainerStyled>
        <StoreCheckoutTitleStyled>
            <h1>Endereço</h1>
        </StoreCheckoutTitleStyled>

        <StoreCheckoutFormStyled>
            <StoreCheckoutLabelStyled htmlFor="">Endereço</StoreCheckoutLabelStyled>
            <StoreCheckoutInputStyled type="text" placeholder="Ave.  Principal Victor Souza"/>
            <StoreCheckoutLabelStyled htmlFor="">Cidade</StoreCheckoutLabelStyled>
            <StoreCheckoutInputStyled type="text" placeholder="Rio de Janeiro"/>
            <StoreCheckoutLabelStyled htmlFor="">CEP</StoreCheckoutLabelStyled>
            <StoreCheckoutInputStyled type="text" placeholder="(99)9999999"/>
            <StoreCheckoutLabelStyled htmlFor="">Estado</StoreCheckoutLabelStyled>
            <StoreCheckoutInputStyled type="text" placeholder="Rio de Janeiro"/>

            <StoreCheckoutSubmitBtn type='submit'>Continuar</StoreCheckoutSubmitBtn>  
        </StoreCheckoutFormStyled>
    </StoreCheckoutContainerStyled>
  )
}

export default StoreCheckoutForm