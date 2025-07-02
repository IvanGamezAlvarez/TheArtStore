import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (id, amount) => {
    setCartContent((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          amount: updatedItems[existingItemIndex].amount + amount,
        };
        return updatedItems;
      }
      return [...prevItems, { id, amount }];
    });
  };

  const removeItem = (id) => {
    setCartContent((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  // const addAmount = (item) => {};
  // const restAmount = (item) => {};
  return (
    <CartContext.Provider
      value={[cartContent, setCartContent, addToCart, removeItem]}
    >
      {children}
    </CartContext.Provider>
  );
};
