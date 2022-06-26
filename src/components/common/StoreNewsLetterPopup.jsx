import React, { useEffect, useState } from "react";
import newsImg from "../../assets/images/newsletter-img.jpg";
import {
    StoreNewsLetterButtonStyled,
    StoreNewsLetterFormStyled,
    StoreNewsLetterFormWrapperStyled,
    StoreNewsLetterImageStyled,
    StoreNewsLetterInnerModalStyled,
    StoreNewsLetterInputFieldStyled,
    StoreNewsLetterMessageStyled,
    StoreNewsLetterModalStyled,
} from "../../styles/StoreNewsLetterPopupStyled";

const StoreNewsLetterPopup = () => {
    const [newsLetter, setNewsLetter] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleNewsLetterModal = () => {
        setNewsLetter(!newsLetter);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userEmail = { email: email };
        if (!email) {
            setError(true);
            return;
        } else {
            localStorage.userEmail = JSON.stringify(userEmail);
        }
        setEmail("");
        setTimeout(() => {
            handleNewsLetterModal();
        }, 1000);
    };

    let alert = "Preencha os campos vazios !";
    setTimeout(() => {
        if (error) {
            setError(false);
        }
    }, 1500);

    useEffect(() => {
        setTimeout(() => {
            if (localStorage.userEmail) return;
            handleNewsLetterModal();
        }, 2500);
    }, []);

    return (
        <StoreNewsLetterModalStyled open={newsLetter} className="fade-in">
            <StoreNewsLetterInnerModalStyled>
                <span
                    className="material-icons"
                    title="Fechar"
                    onClick={handleNewsLetterModal}
                >
                    close
                </span>
                <StoreNewsLetterImageStyled>
                    <img src={newsImg} alt="" />
                </StoreNewsLetterImageStyled>

                <StoreNewsLetterFormWrapperStyled>
                    <h2>Inscreva-se em nossa newsletter</h2>
                    <p>Fique por dentro de nossas promoções semanais!</p>
                    <StoreNewsLetterFormStyled
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <StoreNewsLetterInputFieldStyled
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                        />
                        {error ? (
                            <StoreNewsLetterMessageStyled>
                                {alert}
                            </StoreNewsLetterMessageStyled>
                        ) : (
                            <StoreNewsLetterMessageStyled />
                        )}

                        <StoreNewsLetterButtonStyled type="submit">
                            Inscrever-se
                        </StoreNewsLetterButtonStyled>
                    </StoreNewsLetterFormStyled>
                </StoreNewsLetterFormWrapperStyled>
            </StoreNewsLetterInnerModalStyled>
        </StoreNewsLetterModalStyled>
    );
};

export default StoreNewsLetterPopup;
