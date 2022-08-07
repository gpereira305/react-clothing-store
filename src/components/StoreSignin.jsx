import {useState} from 'react';
import {
    StoreSigninContainerStyled, 
    StoreSigninFormStyled, 
    StoreSigninInnerContainer, 
    StoreSigninInputStyled, 
    StoreSigninLabelStyled, 
    StoreSigninSubmitBtn, 
    StoreSigninSubmitStyled, 
    StoreSigninTitleStyled,
    StoreSignupInnerContainer
} from '../styles/StoreSignupStyled'


const StoreSignin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleClick = () => { 
        setIsLoggedIn(current => !current); 
    };


  return (
    <StoreSigninContainerStyled> 
            <StoreSigninInnerContainer style={{display: isLoggedIn ?  'none' : 'block'}}>
                    <StoreSigninTitleStyled>
                        <h1>Logar</h1>
                    </StoreSigninTitleStyled>

                    <StoreSigninFormStyled>
                        <StoreSigninLabelStyled htmlFor="email">Email</StoreSigninLabelStyled>
                        <StoreSigninInputStyled type="email" placeholder="John@example.com" />           
                        <StoreSigninLabelStyled htmlFor="password">Senha</StoreSigninLabelStyled>
                        <StoreSigninInputStyled type="password" placeholder="**********" />     

                        <StoreSigninSubmitBtn type='submit'>Logar-se</StoreSigninSubmitBtn>      
                    </StoreSigninFormStyled>

                    <StoreSigninSubmitStyled>
                        <p>Novo por aqui?</p>
                        <small onClick={handleClick}>Cadastre-se</small>
                    </StoreSigninSubmitStyled> 
            </StoreSigninInnerContainer>

            <StoreSignupInnerContainer style={{display: isLoggedIn ?  'block' : 'none'}}>
                <StoreSigninTitleStyled>
                    <h1>Cadastro</h1>
                </StoreSigninTitleStyled>

                <StoreSigninFormStyled>
                    <StoreSigninLabelStyled htmlFor="name">Nome</StoreSigninLabelStyled>
                    <StoreSigninInputStyled type="name" placeholder="John Doe" />           
                    <StoreSigninLabelStyled htmlFor="email">Email</StoreSigninLabelStyled>
                    <StoreSigninInputStyled type="email" placeholder="John@example.com" />           
                    <StoreSigninLabelStyled htmlFor="password">Senha</StoreSigninLabelStyled>
                    <StoreSigninInputStyled type="password" placeholder="**********" />     
                    <StoreSigninLabelStyled htmlFor="password2">Confirmar senha</StoreSigninLabelStyled>
                    <StoreSigninInputStyled type="password" placeholder="**********" />     

                    <StoreSigninSubmitBtn type='submit'>Cadastrar-se</StoreSigninSubmitBtn>      
                </StoreSigninFormStyled>

                <StoreSigninSubmitStyled>
                    <p>Já é cadastrado?</p>
                    <small onClick={handleClick}>Logar-se</small>
                </StoreSigninSubmitStyled>
            </StoreSignupInnerContainer> 
    </StoreSigninContainerStyled>
  )
}

export default StoreSignin