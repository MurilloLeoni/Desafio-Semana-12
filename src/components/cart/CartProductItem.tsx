import React, { useContext } from "react";
import { CartItemType } from "../../types/typeCartProduct";
import AppContext from "../../contexts/AppContext";
import ButtonChangeQuantity from "../ButtonChangeQuantity";

const CartProductItem = ({ id, title, salePrice, images }: CartItemType) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems, setCartItems } = context;
  const item = cartItems.find((item) => item.id === id);
  const currentQuantity = item ? item.quantity : 1;
  const totalPrice = (salePrice * currentQuantity).toFixed(2);

  const handleQuantityChange = (change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const handleRemoveproduct = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="flex items-center gap-14 mt-8">
      <img
        className="w-24 h-24 rounded"
        src={images.mainImage}
        alt="ImageProduto"
      />
      <p className="text-#9F9F9F w-44 text-justify">{title}</p>
      <p className="text-#9F9F9F -ml-4 w-32">Rp. {salePrice}</p>
      <ButtonChangeQuantity
        handleQuantityChange={handleQuantityChange}
        quantity={currentQuantity}
      />
      <p className="ml-10 w-32">Rp. {totalPrice}</p>
      <img
        onClick={handleRemoveproduct}
        className="w-7 h-7 cursor-pointer"
        src="/src/assets/icons/Icon-trash.png"
        alt="Trash"
      />
    </div>
  );
};

export default CartProductItem;
