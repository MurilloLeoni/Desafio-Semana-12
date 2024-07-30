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
    const itemTotal = (item.salePrice * item.quantity);
    return total + itemTotal;
  }, 0);

  return (
    <div className="flex py-20 px-24">
      <div>
        <div className="bg-#FFF3E3 flex gap-36 pl-40 py-4 pr-6 mb-16 font-medium">
          <p>Product</p>
          <p>Price</p>
          <p className="-ml-6">Quantity</p>
          <p className="-ml-10">Subtotal</p>
        </div>
        {cartItems.length === 0 && <p className="text-#9F9F9F font-medium text-2xl">Your cart is empty!</p>}
        {cartItems.map((cartItem) => (
          <CartProductItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <CartTotal subtotal={subtotal} />
    </div>
  );
};

export default CartProduct;
