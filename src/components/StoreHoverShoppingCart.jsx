import React from 'react'
import { Link } from 'react-router-dom'
import {  
    StoreNavCartActionsBtnsStyled, 
    StoreNavCartActionsInfoStyled, 
    StoreNavCartActionsStyled, 
    StoreNavCartEmptyStyled, 
    StoreNavCartItemsDetailStyled, 
    StoreNavCartItemsStyled, 
    StoreNavCartRemoveItemStyled, 
    StoreNavCartWrapperStyled 
} from '../styles/StoreHoverShoppingCartStyled'

const StoreHoverShoppingCart = ({cartItems, handleRemoveItem}) => {
  return (
            <StoreNavCartWrapperStyled className="fade-in">
            {cartItems.length > 0 ? (
                <>
                    <StoreNavCartItemsStyled>
                        {cartItems.map((item) => (
                            <StoreNavCartItemsDetailStyled key={item._id}> 
                                <div>
                                    <img src={item.img} alt={item.name}/> 
                                    <div>
                                        <p>{item.name}</p> 
                                        <span>R${item.price}</span> 
                                    </div> 
                                </div>
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
                            <Link to={'/cart'} className='cart'>Ver Carrinho</Link>
                            <Link to={'/checkout'} className='checkout'>Checkout</Link>  
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