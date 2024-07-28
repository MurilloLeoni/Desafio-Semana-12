import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartOverlay: React.FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose,
}) => {
  const navigate = useNavigate();

  const cartProducts = [
    {
      id: "1",
      name: "Produto 1",
      quantity: 2,
      price: 10,
      image: "/src/assets/imgs/produto1.jpg",
    },
    {
      id: "2",
      name: "Produto 2",
      quantity: 1,
      price: 20,
      image: "/src/assets/imgs/produto2.jpg",
    },
    {
      id: "3",
      name: "Produto 3",
      quantity: 1,
      price: 20,
      image: "/src/assets/imgs/produto2.jpg",
    },
  ];

  const handleRemoveproduct = (productId: string) => {
    console.log(`product removido: ${productId}`);
  };

  const calculateSubtotal = () => {
    return cartProducts
      .reduce((sum, product) => sum + product.price * product.quantity, 0)
      .toFixed(2);
  };

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

  return (
    <div
      className={`font-poppins fixed inset-0 bg-black bg-opacity-50 z-50 ${
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
            onClick={onClose}
            className="-mt-4 cursor-pointer"
            src="/src/assets/icons/Icon-closeCart.png"
            alt=""
          />
        </div>
        <hr />
        <div className="mt-11 flex flex-col gap-5">
          {cartProducts.map((product) => (
            <div key={product.id} className="flex py-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="text-lg">{product.name}</p>
                <p className="text-sm">
                  {product.quantity} x Rp. {product.price}
                </p>
              </div>
              <button
                onClick={() => handleRemoveproduct(product.id)}
                className="bg-gray-400 rounded-full w-6 h-6 text-white"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className="mb-6 mt-10">
          <h3 className="text-xl font-semibold flex justify-between">
            Subtotal:{" "}
            <span className="font-semibold text-#B88E2F">
              Rp. {calculateSubtotal()}
            </span>
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
            onClick={() => navigate("/checkout")}
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
