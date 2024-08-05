import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { CartItemType } from "../../types/typeCartProduct";

const CartItem = ({ id, title, salePrice, images, quantity }: CartItemType) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems, setCartItems } = context;

  const handleRemoveproduct = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const totalPrice = (salePrice * quantity).toFixed(2);

  return (
    <div className="mt-6 md:mt-11 flex flex-col gap-4 md:gap-5">
      <div className="flex items-center py-2 md:py-3">
        <img
          src={images.mainImage}
          alt={title}
          className="w-10 h-10 md:w-12 md:h-12 object-cover"
        />
        <div className="flex-1 ml-3 md:ml-4">
          <p className="text-base md:text-lg">{title}</p>
          <p className="text-xs md:text-sm">
            {quantity} x Rp. {totalPrice}
          </p>
        </div>
        <button
          onClick={handleRemoveproduct}
          className="bg-gray-400 rounded-full w-5 h-5 md:w-6 md:h-6 text-white flex items-center justify-center"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
