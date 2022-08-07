import React, { useContext, useEffect } from 'react'
import StoreCheckoutForm from '../components/StoreCheckoutForm';
import { StoreContext } from '../storeContext';

const StoreCheckoutPage = () => {
  const { handleGoTopPage } = useContext(StoreContext); 

  useEffect(()=> {
      handleGoTopPage()
  }, [])


  return ( 
        <StoreCheckoutForm/> 
  )
}

export default StoreCheckoutPage