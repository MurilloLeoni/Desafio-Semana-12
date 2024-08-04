import { useContext } from "react";
import { CartItemType } from "../../types/typeCartProduct";
import AppContext from "../../contexts/AppContext";

const CartProductItem = ({
  id,
  title,
  salePrice,
  images,
  quantity,
}: CartItemType) => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }
  const { cartItems, setCartItems, updateQuantity } = context;

  const totalPrice = (salePrice * quantity).toFixed(2);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
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
      <div className="flex border border-#9F9F9F rounded-lg px-3 py-4 gap-7">
        <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
      </div>
      <p className="ml-10 w-32">Rp. {totalPrice}</p>
      <img
        onClick={handleRemoveproduct}
        className="w-7 h-7 cursor-pointer"
        src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-trash.png"
        alt="Trash"
      />
    </div>
  );
};

export default CartProductItem;
