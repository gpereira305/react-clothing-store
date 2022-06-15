import React from "react";
import styled from "styled-components";
import { instaposts } from "../data";
import {
    StoreFooterCopyStyled,
    StoreFooterFormStyled,
    StoreFooterFormWrapperStyled,
    StoreFooterImageStyled,
    StoreFooterInstaImgGridStyled,
    StoreFooterInstaStyled,
    StoreFooterSocialLinksStyled,
    StoreFooterStyled,
    StoreFooterWrapperStyled,
} from "../styles/StoreFooterStyled";

// pega o ano atual
const todayDate = new Date().getFullYear();

const socials = [
    {
        link: "https://www.facebook.com",
        name: "fa-brands fa-facebook-f",
        title: "Facebook",
        id: 1,
    },
    {
        link: "https://www.instagram.com",
        name: "fa-brands fa-instagram",
        title: "Instagram",
        id: 2,
    },
    {
        link: "https://www.pinterest.com",
        name: "fa-brands fa-pinterest-p",
        title: "Pinterest",
        id: 3,
    },
    {
        link: "https://www.youtube.com",
        name: "fa-brands fa-youtube",
        title: "Youtube",
        id: 4,
    },
    {
        link: "https://www.linkedin.com",
        name: "fa-brands fa-linkedin-in",
        title: "Linkedin",
        id: 5,
    },
];

const StoreFooter = () => {
    return (
        <StoreFooterStyled>
            <StoreFooterWrapperStyled>
                <StoreFooterFormWrapperStyled>
                    <h3>
                        Venezza | <span>Promoções todos os dias!</span>
                    </h3>
                    <StoreFooterFormStyled>
                        <input
                            type="email"
                            required
                            placeholder="Digite seu email..."
                        />
                        <button type="submit">
                            Inscrever-se
                            <span className="material-icons">
                                arrow_forward
                            </span>
                        </button>
                    </StoreFooterFormStyled>

                    <h4>Acomapnhe-nos em nossas redes sociais</h4>
                    <StoreFooterSocialLinksStyled>
                        {socials.map((social) => (
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={social.id}
                            >
                                <i
                                    className={social.name}
                                    title={social.title}
                                ></i>
                            </a>
                        ))}
                    </StoreFooterSocialLinksStyled>
                </StoreFooterFormWrapperStyled>

                <StoreFooterInstaStyled>
                    <h4>Siga no instagram:</h4>
                    <StoreFooterInstaImgGridStyled>
                        {instaposts.map(({ img, id }) => (
                            <StoreFooterImageStyled key={id}>
                                <img src={img} alt="Post Instagram" />
                                <i
                                    className="fa-brands fa-instagram"
                                    title="Instagram"
                                ></i>
                            </StoreFooterImageStyled>
                        ))}
                    </StoreFooterInstaImgGridStyled>
                </StoreFooterInstaStyled>
            </StoreFooterWrapperStyled>

            <span className="diviser"></span>

            <StoreFooterCopyStyled>
                <small>
                    &copy; {todayDate} Venezza Store | All rights reserved
                </small>
            </StoreFooterCopyStyled>
        </StoreFooterStyled>
    );
};

export default StoreFooter;
