import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (id, amount) => {
    const cartItem = { id, amount };
    setCartContent((prevItem) => [...prevItem, cartItem]);
    console.log(cartContent);
  };
  // const addAmount = (item) => {};
  // const restAmount = (item) => {};
  return (
    <CartContext.Provider value={[cartContent, setCartContent, addToCart]}>
      {children}
    </CartContext.Provider>
  );
};
