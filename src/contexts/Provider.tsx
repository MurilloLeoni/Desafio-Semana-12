import React, { useState } from "react";
import AppContext from "./AppContext";
import { Product } from "../types/typeProduct";
import { CartItemType } from "../types/typeCartProduct";

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const clearCart = () => setCartItems([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const value = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    clearCart,
    selectedProduct,
    setSelectedProduct,
    updateQuantity,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
