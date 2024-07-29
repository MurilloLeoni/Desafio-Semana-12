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

    const value = {
        products,
        setProducts,
        cartItems,
        setCartItems,
    };

    return (
        <AppContext.Provider value= {value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider