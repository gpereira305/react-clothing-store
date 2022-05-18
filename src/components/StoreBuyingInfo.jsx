import React from "react";
import styled from "styled-components";

// STYLING
const StoreGuaranteeStyled = styled.section`
  background-color: var(--black-color);
  color: var(--white-color);
`;

const StoreWrapperStyled = styled.div`
  margin: 0 10% 8%;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

const StoreGuaranteeItemStyled = styled.div`
  text-align: center;

  h4 {
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  span {
    font-size: 45px;
  }
`;

const StoreBuyingInfo = () => {
  return (
    <StoreGuaranteeStyled>
      <StoreWrapperStyled>
        <StoreGuaranteeItemStyled>
          <span className="material-icons">local_shipping</span>
          <h4>Frete & retorno grátis</h4>
          <p>Frete grátis para todo o país</p>
        </StoreGuaranteeItemStyled>

        <StoreGuaranteeItemStyled>
          <span className="material-icons">monetization_on</span>
          <h4>Compra garantida</h4>
          <p>30 dias de garantia</p>
        </StoreGuaranteeItemStyled>

        <StoreGuaranteeItemStyled>
          <span className="material-icons">phone_in_talk</span>
          <h4>Suporte online</h4>
          <p>Todo o suporte disponível 24h</p>
        </StoreGuaranteeItemStyled>
      </StoreWrapperStyled>
    </StoreGuaranteeStyled>
  );
};

export default StoreBuyingInfo;
