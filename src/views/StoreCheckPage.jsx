import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../storeContext';

const StoreCheckPage = () => {
  const { handleGoTopPage } = useContext(StoreContext); 

  useEffect(()=> {
      handleGoTopPage()
  }, [])


  return (
    <div>StoreCheckPage</div>
  )
}

export default StoreCheckPage