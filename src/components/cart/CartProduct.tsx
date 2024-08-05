import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import CartProductItem from "./CartProductItem";
import CartTotal from "./CartTotal";

const CartProduct = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems } = context;

  const subtotal = cartItems.reduce((total, item) => {
    const itemTotal = item.salePrice * item.quantity;
    return total + itemTotal;
  }, 0);

  return (
    <div className="flex flex-col md:flex-row py-10 px-4 md:px-24">
      <div className="flex-1">
        <div className="bg-[#FFF3E3] flex gap-6 md:gap-20 pl-2 md:pl-24 py-4 pr-4 md:pr-8 mb-8 font-medium text-xs md:text-base">
          <p className="mx-auto md:ml-9 text-center">Product</p>
          <p className="hidden md:flex md:mr-12">Price</p>
          <div className="hidden md:flex md:mr-28">
            <p className="hidden md:flex md:mr-14">Quantity</p>
            <p className="hidden md:flex">Subtotal</p>
          </div>
        </div>
        {cartItems.length === 0 && (
          <p className="text-[#9F9F9F] font-medium text-lg md:text-2xl text-center">
            Your cart is empty!
          </p>
        )}
        {cartItems.map((cartItem) => (
          <CartProductItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <div className="mt-8 md:mt-0 md:ml-8">
        <CartTotal subtotal={subtotal} />
      </div>
    </div>
  );
};

export default CartProduct;
