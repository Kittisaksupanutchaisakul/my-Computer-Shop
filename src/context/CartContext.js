// CartContext.js
"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (product.stock > 0) {
      product.stock--; // ลดจำนวนสินค้าคงเหลือ
      setCartItems((prev) => [...prev, product]);
    } else {
      alert("สินค้าหมดแล้วจ้า!");
    }
  };
  

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
  
}

export const useCart = () => useContext(CartContext);
