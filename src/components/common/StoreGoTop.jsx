import React, { useState } from "react";
import styled from "styled-components";

const StoreScrollTopStyled = styled.div`
  position: fixed;
  bottom: 13%;
  right: 5%;

  span {
    cursor: pointer;
    font-size: 1.8rem;
    color: var(--white-color);
    padding: 8px;
    background: var(--black-color);

    @media (max-width: 570px) {
      font-size: 1.4rem;
    }
  }
`;

const StoreGoTop = () => {
  const [visible, setVisible] = useState(false);

  // determina a posisão em que o scroll icon irá aparecer na página
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  //  comportamento do scroll icon setado para suave
  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <StoreScrollTopStyled>
      <span
        className="material-icons slide-in-bottom"
        onClick={scrollTopPage}
        title="Voltar ao topo da página"
        style={{ display: visible ? "inline" : "none" }}
      >
        keyboard_double_arrow_up
      </span>
    </StoreScrollTopStyled>
  );
};

export default StoreGoTop;
