import React, { useContext, useEffect} from "react"; 
import { Link } from "react-router-dom";
import { StoreContext } from "../storeContext";
import { 
    StoreCartContainerStyled, 
    StoreCartInnerContainerStyled, 
    StoreCartItemsEmptyCartStyled, 
    StoreCartItemsInfoStyled, 
    StoreCartItemsInfoSubtotalStyled, 
    StoreCartItemsInfoTotalStyled, 
    StoreCartItemsInfoWrapperStyled, 
    StoreCartItemsListedBodyStyled, 
    StoreCartItemsListedStyled, 
    StoreCartItemsRemoveStyled, 
    StoreCartItemsStyled, 
    StoreCartItemsTitleStyled 
} from "../styles/StoreCartLayout";




const StoreCartLayout = () => {
    const { cartItems, handleRemoveItem, handleGoTopPage } = useContext(StoreContext);
    
    useEffect(()=> {
        handleGoTopPage()
    }, [])
   
    const itemsLength = cartItems.length > 0; 
   
    const itemsSum = () => {
        const allItems =  cartItems.map(item =>  +item.price.replace('.', ""))
        const summedItems = allItems.reduce((acc, current)=> acc+current, 0)
        return summedItems 
    } 




  return (
    <StoreCartContainerStyled> 
    <StoreCartInnerContainerStyled 
      style={{justifyContent: `${itemsLength ? 'space-between' : 'center'}`}}>
       {itemsLength ? (
       <>
       <StoreCartItemsStyled>
            <StoreCartItemsTitleStyled>
               <h1>Seu carrinho</h1>
            </StoreCartItemsTitleStyled>
           {cartItems.map(item => ( 
             <React.Fragment key={item._id}>
               <StoreCartItemsListedStyled> 
                   <StoreCartItemsRemoveStyled>
                      <span 
                         className="material-icons" 
                          title="Remover item" onClick={() => 
                               handleRemoveItem(item._id)}
                       >
                       close
                       </span>
                   </StoreCartItemsRemoveStyled>
                   <StoreCartItemsListedBodyStyled>
                       <img src={item?.img} alt={item?.name}/>
                       <p>{item?.name}</p> 
                       <span>R${item?.price}</span> 
                   </StoreCartItemsListedBodyStyled>  
               </StoreCartItemsListedStyled>  
               <span className="horizontal"></span>
             </React.Fragment>
            ))} 
      </StoreCartItemsStyled>

       <StoreCartItemsInfoStyled>
           <StoreCartItemsInfoWrapperStyled>
               <h2>Totalidade do carrinho</h2> 
                <StoreCartItemsInfoSubtotalStyled>
                   <p>Quantidade: <span>{cartItems.length}</span></p>
                   <p>Subtotal: <span>R$300,00</span></p>
                   <p>Frete: <span>Grátis</span></p>
                   <span className="horizontal"></span>
                </StoreCartItemsInfoSubtotalStyled>

                <StoreCartItemsInfoTotalStyled>
                   <p>Total: <span>R${itemsSum()}</span></p>  
                   <Link to={'/checkout'}>Ir para o Checkout</Link>
                </StoreCartItemsInfoTotalStyled>
           </StoreCartItemsInfoWrapperStyled>
       </StoreCartItemsInfoStyled>
       </>

       ) : (
           <StoreCartItemsEmptyCartStyled>
               <span className="material-icons">
               shopping_cart
               </span>
               <h1>Teu carrinho tá vazio vagabundo!</h1>
                <Link to={'/'}>voltar às compras</Link>
           </StoreCartItemsEmptyCartStyled>
       )}
    </StoreCartInnerContainerStyled>
  </StoreCartContainerStyled>
  )
}

export default StoreCartLayout