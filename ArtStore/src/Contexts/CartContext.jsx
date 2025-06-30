import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (item) => {
    setCartContent((prevItem) => [...prevItem, item]);
    console.log(cartContent);
  };
  const addAmount = (item) =>{
    
  }
  const restAmount = (item) =>{
    
  }
  return (
    <CartContext.Provider value={[cartContent, setCartContent, addToCart]}>
      {children}
    </CartContext.Provider>
  );
};
