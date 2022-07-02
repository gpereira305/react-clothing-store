import React, { useContext } from "react";
import { StoreContext } from "../storeContext";
import {
    StoreGridIconsStyled,
    StoreGridItemStyled,
    StoreGridOverlayStyled,
    StoreSaleTagStyled,
} from "../styles/StoreGridItemStyled";
import StoreProductDetailModal from "./common/StoreProductDetailModal";

const StoreGridItem = ({ product }) => {
    const { name, price, img } = product;

    const { handleToggleModal, item } = useContext(StoreContext);

    return (
        <>
            <StoreGridItemStyled>
                {price < 20 && (
                    <StoreSaleTagStyled>
                        <span>Promoção</span>
                    </StoreSaleTagStyled>
                )}
                <img src={img} alt="" />
                <StoreGridOverlayStyled>
                    <h4>R${price}</h4>

                    <StoreGridIconsStyled>
                        <span
                            className="material-icons"
                            title="Ver detalhes"
                            onClick={() => handleToggleModal(product)}
                        >
                            visibility
                        </span>
                        <span
                            className="material-icons"
                            title="Adicionar ao carrinho"
                        >
                            shopping_basket
                        </span>
                    </StoreGridIconsStyled>
                </StoreGridOverlayStyled>
                <p>{name}</p>
            </StoreGridItemStyled>
            {/*------- MODAL -----*/}
            <StoreProductDetailModal />
        </>
    );
};

export default StoreGridItem;
