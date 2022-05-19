import React from "react";
import styled from "styled-components";
import { instaposts } from "../data";

// STYLING
const StoreFooterStyled = styled.footer`
  background-color: var(--dark-color);
  position: relative;

  > .diviser {
    position: absolute;
    height: 1px;
    left: 0;
    right: 0;
    width: 80%;
    margin: auto;
    background-color: var(--gray-color);
  }
`;

const StoreFooterWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 10%;

  @media (max-width: 824px) {
    flex-direction: column;
  }
`;

const StoreFooterFormWrapperStyled = styled.div`
  width: 50%;

  @media (max-width: 824px) {
    width: 100%;
  }

  > h4 {
    font-size: 0.65rem;
    text-transform: uppercase;
    color: var(--body-color);
    font-weight: 400;
    margin: 30px 0 5px;
  }

  > h3 {
    font-weight: 300;
    margin-bottom: 30px;
    color: var(--gray-color);
    display: flex;

    @media (max-width: 424px) {
      font-size: 1.5rem;
    }

    > span {
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      margin-left: 5px;
    }
  }
`;

const StoreFooterFormStyled = styled.form`
  display: flex;
  max-width: 400px;

  > input {
    outline: none;
    border: none;
    padding: 8px;
    background-color: #303030;
    width: 100%;
    font-size: 0.8rem;

    &::placeholder {
      font-style: italic;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    text-transform: uppercase;
    padding: 9.5px;
    background-color: #303030;
    color: var(--gray-color);
    font-size: 0.65rem;
    min-width: 125px;
    cursor: pointer;
    transition: var(--transition);

    > span {
      font-size: 1rem;
    }

    &:hover {
      color: var(--white-color);
    }
  }
`;

const StoreFooterSocialLinksStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 230px;

  > a {
    font-size: 1.1rem;
    color: var(--gray-color);
    border: 2px solid var(--gray-color);
    width: 35px;
    height: 35px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);

    &:hover {
      color: var(--body-color);
      border: 2px solid var(--body-color);
    }
  }
`;

const StoreFooterInstaStyled = styled.div`
  @media (max-width: 820px) {
    margin-top: 30px;
  }

  > h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--body-color);
    font-weight: 400;
    margin-bottom: 15px;
  }
`;

const StoreFooterInstaImgGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 315px;

  @media (max-width: 824px) {
    max-width: initial;
  }
`;

const StoreFooterImageStyled = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    i {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  i {
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    height: 100%;
    font-size: 1.5rem;
    color: var(--body-color);
    opacity: 0;
    transition: var(--transition);
  }

  &::after {
    content: "";
    position: absolute;
    background-color: rgb(0 0 0 / 65%);
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
  }
`;

const StoreFooterCopyStyled = styled.div`
  text-align: center;
  padding: 10px 0;

  > small {
    font-size: 0.7rem;
    color: var(--gray-color);
  }
`;

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
            <input type="email" required placeholder="Digite seu email..." />
            <button type="submit">
              Inscrever-se
              <span className="material-icons">arrow_forward</span>
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
                <i className={social.name} title={social.title}></i>
              </a>
            ))}
          </StoreFooterSocialLinksStyled>
        </StoreFooterFormWrapperStyled>

        <StoreFooterInstaStyled>
          <h4>Siga no instagram:</h4>
          <StoreFooterInstaImgGridStyled>
            {instaposts.map((insta) => (
              <StoreFooterImageStyled key={insta.id}>
                <img src={insta.img} alt="Post Instagram" />
                <i className="fa-brands fa-instagram" title="Instagram"></i>
              </StoreFooterImageStyled>
            ))}
          </StoreFooterInstaImgGridStyled>
        </StoreFooterInstaStyled>
      </StoreFooterWrapperStyled>

      <span className="diviser"></span>

      <StoreFooterCopyStyled>
        <small>&copy; {todayDate} Venezza Store | All rights reserved</small>
      </StoreFooterCopyStyled>
    </StoreFooterStyled>
  );
};

export default StoreFooter;
