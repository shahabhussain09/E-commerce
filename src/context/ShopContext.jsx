import React, { createContext, useState } from 'react';
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
  let cart = {}
  for (let index = 0; index < all_product.length+1; index++) {
   cart[index] = 0
  }
  return cart
}
const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart())
  
   const addToCard = (ItemId) =>{
        setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        console.log(cartItem)
   }

   const removeFromCard = (ItemId) =>{
    setCartItem((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
}

const getToatalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalAmount += itemInfo.new_price * cartItem[item];
    }
  }
  return totalAmount;
};

const getToatalCartItem = () => {
  let totalItem = 0;
  for (const item in cartItem) {
    if (cartItem[item] > 0) {
      totalItem+= cartItem[item]
    }
  }
  return totalItem
}


const contextValue = {getToatalCartItem ,getToatalCartAmount, all_product, cartItem, addToCard, removeFromCard };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext as shopContext, ShopContextProvider };
