import { createContext } from "react";
import { Product } from "../types/typeProduct";
import { CartItemType } from "../types/typeCartProduct";

interface AppContextProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cartItems: CartItemType[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  }

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;