import React from "react";
import styled from "styled-components";

// STYLING
const SpinnerStyled = styled.div`
  border: 5px solid var(--white-color);
  border-top: 5px solid var(--salmon-color);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 0.6s linear infinite;
  margin: 2% auto;

  @media (max-width: 620px) {
    width: 80px;
    height: 80px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StoreSpinner = () => {
  return <SpinnerStyled />;
};

export default StoreSpinner;
