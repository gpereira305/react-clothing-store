import React from 'react'
import { Link } from 'react-router-dom'
import { 
    StoreNavCartActionsBtnsBtnStyled, 
    StoreNavCartActionsBtnsStyled, 
    StoreNavCartActionsInfoStyled, 
    StoreNavCartActionsStyled, 
    StoreNavCartEmptyStyled, 
    StoreNavCartItemsDetailStyled, 
    StoreNavCartItemsStyled, 
    StoreNavCartRemoveItemStyled, 
    StoreNavCartWrapperStyled 
} from '../styles/StoreHoverShoppingCartStyled'

const StoreHoverShoppingCart = ({cartItem, handleRemoveItem}) => {
  return (
            <StoreNavCartWrapperStyled className="fade-in">
            {cartItem.length > 0 ? (
                <>
                    <StoreNavCartItemsStyled>
                        {cartItem.map((item) => (
                            <StoreNavCartItemsDetailStyled key={item._id}>
                                <Link to={`/product/${item._id}`}>
                                    <img src={item.img} alt={item.name}/> 
                                    <div>
                                        <p>{item.name}</p> 
                                        <span>R${item.price}</span> 
                                    </div>
                                </Link> 
                                <StoreNavCartRemoveItemStyled 
                                className="material-icons" onClick={() => 
                                    handleRemoveItem(item._id)} title="Remover item">
                                    close
                                </StoreNavCartRemoveItemStyled>
                        </StoreNavCartItemsDetailStyled>
                        ))}
                    </StoreNavCartItemsStyled>

                    <StoreNavCartActionsStyled>
                        <StoreNavCartActionsInfoStyled>
                            <h3>Subtotal</h3>
                            <span>R$100,00</span>
                        </StoreNavCartActionsInfoStyled>
                        <StoreNavCartActionsBtnsStyled>
                            <StoreNavCartActionsBtnsBtnStyled primary>
                               <Link to={'/cart'}>Ver Carrinho</Link>
                            </StoreNavCartActionsBtnsBtnStyled>
                            <StoreNavCartActionsBtnsBtnStyled>
                            <Link to={'/checkout'}>Checkout</Link> 
                            </StoreNavCartActionsBtnsBtnStyled>
                        </StoreNavCartActionsBtnsStyled>
                    </StoreNavCartActionsStyled>
                </>
            ) : (
                <StoreNavCartEmptyStyled>
                    <h3>Carrinho vazio</h3>
                </StoreNavCartEmptyStyled>
            )}
        </StoreNavCartWrapperStyled>
  )
}

export default StoreHoverShoppingCart