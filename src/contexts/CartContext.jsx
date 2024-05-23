import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [numberFormationCart, setNumberFormationCart] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLength = cart.length;
    setNumberFormationCart(cartLength);
  };

  useEffect(() => {
    updateCartCount();
  }, []);
    return ( 
        <CartContext.Provider value={{numberFormationCart, updateCartCount}}>
            {children}
        </CartContext.Provider>
     );
}
 



