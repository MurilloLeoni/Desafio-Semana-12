import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import AppContext from "../../contexts/AppContext";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

const CartOverlay: React.FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems, clearCart } = context;

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.salePrice * item.quantity, 0)
    .toFixed(2);

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  const handleCheckout = () => {
    if (user && cartItems.length > 0) {
      navigate("/checkout");
    } else if (user && cartItems.length === 0) {
      alert("Your cart is empty");
    } else {
      alert("Please login first");
      navigate("/login");
    }
  };

  return (
    <div
      className={` fixed inset-0 bg-black bg-opacity-50 z-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <div
        className="absolute top-0 right-0 bg-white py-7 pr-10 pl-7 shadow-md w-[420px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
          <img
            onClick={clearCart}
            className="-mt-4 cursor-pointer"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-closeCart.png"
            alt="CloseCart"
          />
        </div>
        <hr />
        <div className="flex flex-col flex-grow overflow-auto h-[400px]">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
        </div>
        <div className="mb-6 mt-10">
          <h3 className="text-xl font-semibold flex justify-between">
            Subtotal
            <span className="font-semibold text-#B88E2F">Rp. {totalPrice}</span>
          </h3>
        </div>
        <hr />
        <div className="flex justify-between mt-6 gap-3 text-xs">
          <button
            onClick={() => navigate("/cart")}
            className="px-7 py-2 rounded-[50px] border border-black"
          >
            Cart
          </button>
          <button
            onClick={handleCheckout}
            className="px-7 py-2 rounded-[50px] border border-black"
          >
            Checkout
          </button>
          <button className="px-7 py-2 rounded-[50px] border border-black">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
