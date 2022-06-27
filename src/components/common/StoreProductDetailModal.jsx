import React, { useContext } from "react";
import { StoreContext } from "../../storeContext";
import productImg from "../../assets/images/products/product-14-alt.jpg";
import { socials } from "../../helpers";
import {
    StoreProductButtonStyled,
    StoreProductCloseModalStyled,
    StoreProductDetailSocialStyled,
    StoreProductHorizontalLineStyled,
    StoreProductImageStyled,
    StoreProductInfoH3Styled,
    StoreProductInfoParagraphStyled,
    StoreProductInfoSpanStyled,
    StoreProductInfoStyled,
    StoreProductInnerModalStyled,
    StoreProductModalStyled,
    StoreProductOptionStyled,
    StoreProductSelectStyled,
    StoreProductSelectWrapperStyled,
} from "../../styles/StoreProductDetailModalStyled";

const StoreProductDetailModal = () => {
    const { handleToggleModal, toggleModal } = useContext(StoreContext);

    return (
        <StoreProductModalStyled open={toggleModal} className="fade-in">
            <StoreProductInnerModalStyled>
                <StoreProductCloseModalStyled
                    title="Fechar"
                    onClick={handleToggleModal}
                >
                    <span className="material-icons">close</span>
                </StoreProductCloseModalStyled>

                <StoreProductImageStyled>
                    <img src={productImg} alt="" />
                </StoreProductImageStyled>

                <StoreProductInfoStyled>
                    <StoreProductInfoH3Styled>
                        Blusa Daltex
                    </StoreProductInfoH3Styled>
                    <StoreProductInfoSpanStyled>
                        R$ 29,99
                    </StoreProductInfoSpanStyled>

                    <StoreProductHorizontalLineStyled />

                    <StoreProductInfoParagraphStyled>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cum, a aut. Quae, ipsum. Facilis necessitatibus officia
                        repudiandae, quidem facere iure magnam, saepe alias,
                        illo dolorem nobis optio eum quia sunt explicabo
                        cupiditate maiores! Architecto a blanditiis repellendus
                    </StoreProductInfoParagraphStyled>

                    <StoreProductHorizontalLineStyled />

                    <StoreProductSelectWrapperStyled>
                        <StoreProductSelectStyled name="Price" id="price">
                            <StoreProductOptionStyled>
                                Selecionar
                            </StoreProductOptionStyled>
                            <StoreProductOptionStyled value="5">
                                5
                            </StoreProductOptionStyled>
                            <StoreProductOptionStyled value="10">
                                10
                            </StoreProductOptionStyled>
                            <StoreProductOptionStyled value="20">
                                20
                            </StoreProductOptionStyled>
                        </StoreProductSelectStyled>
                        <StoreProductButtonStyled type="button">
                            Adicionar ao carrinho
                        </StoreProductButtonStyled>
                    </StoreProductSelectWrapperStyled>

                    <StoreProductHorizontalLineStyled />

                    <StoreProductDetailSocialStyled>
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
                    </StoreProductDetailSocialStyled>
                </StoreProductInfoStyled>
            </StoreProductInnerModalStyled>
        </StoreProductModalStyled>
    );
};

export default StoreProductDetailModal;
