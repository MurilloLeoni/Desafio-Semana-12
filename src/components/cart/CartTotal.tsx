import { onAuthStateChanged, User } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import AppContext from "../../contexts/AppContext";

type CartTotalProps = {
  subtotal: number;
};

const CartTotal = ({ subtotal }: CartTotalProps) => {
  const formattedSubtotal = subtotal.toFixed(2);
  const navigate = useNavigate();
  const [user, setUser] = React.useState<User | null>(null);
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }
  const { cartItems } = context;

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
    <div className="bg-#FFF3E3 px-20 pt-4 pb-20 flex flex-col gap-5 ml-20">
      <h1 className="font-semibold text-[32px] text-center mb-14">
        Card Totals
      </h1>
      <div className="flex justify-between mb-7">
        <p className="font-medium">Subtotal</p>
        <p className="text-#9F9F9F ml-">Rp. {formattedSubtotal}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium">Total</p>
        <p className="text-#B88E2F font-medium text-xl">
          Rp. {formattedSubtotal}
        </p>
      </div>
      <button
        onClick={handleCheckout}
        className="px-16 py-4 border-2 border-black rounded-2xl mt-11 text-xl text-nowrap"
      >
        Check Out
      </button>
    </div>
  );
};

export default CartTotal;
