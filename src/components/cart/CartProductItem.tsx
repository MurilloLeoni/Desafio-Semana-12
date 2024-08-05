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
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-8">
      <img
        className="w-20 h-20 md:w-24 md:h-24 rounded"
        src={images.mainImage}
        alt="Product"
      />
      <p className="text-[#9F9F9F] w-full md:w-44 text-center md:text-left">{title}</p>
      <p className="text-[#9F9F9F] text-left md:w-32">Rp. {salePrice}</p>
      <div className="flex border border-[#9F9F9F] rounded-lg px-2 py-2 md:px-3 md:py-3 gap-3 md:gap-4">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="text-lg"
        >
          -
        </button>
        <p className="text-lg">{quantity}</p>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="text-lg"
        >
          +
        </button>
      </div>
      <p className="text-left md:w-32">Rp. {totalPrice}</p>
      <img
        onClick={handleRemoveproduct}
        className="w-6 h-6 md:w-7 md:h-7 cursor-pointer"
        src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-trash.png"
        alt="Trash"
      />
    </div>
  );
};

export default CartProductItem;
