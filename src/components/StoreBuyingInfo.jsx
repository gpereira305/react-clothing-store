import React from "react";
import {
    StoreGuaranteeItemStyled,
    StoreGuaranteeStyled,
    StoreWrapperStyled,
} from "../styles/StoreBuyingInfoStyled";

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
