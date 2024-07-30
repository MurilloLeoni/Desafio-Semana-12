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

    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
        clearCart,
        selectedProduct,
        setSelectedProduct
    };

    return (
        <AppContext.Provider value= {value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider