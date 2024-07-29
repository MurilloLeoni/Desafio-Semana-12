import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { CartItemType } from "../../types/typeCartProduct";

const CartItem = ({ id, title, salePrice, images }: CartItemType) => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems, setCartItems } = context;

  const handleRemoveproduct = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="mt-11 flex flex-col gap-5">
      <div className="flex items-center py-2">
        <img
          src={images.mainImage}
          alt={title}
          className="w-12 h-12 object-cover "
        />
        <div className="flex-1 ml-4">
          <p className="text-lg">{title}</p>
          <p className="text-sm">1 x Rp. {salePrice}</p>
        </div>
        <button
          onClick={handleRemoveproduct}
          className="bg-gray-400 rounded-full w-6 h-6 text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
