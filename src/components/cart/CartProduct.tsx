import React from "react";

const CartProduct = () => {
  const nomeProduto = "Cama Box";
  const precoProduto = "Rp 2.000,00";
  const precoTotal = "Rp 2.000,00";
  return (
    <div className="flex mx-auto font-poppins py-20 px-28">
        <div>
        <div className="bg-#FFF3E3 flex gap-20 px-36 py-4 mb-20 font-medium">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p className="-ml-5">Subtotal</p>
        </div>
        <div className="flex items-center gap-16">
      <img
        className="w-24 h-24 rounded"
        src="/src/assets/imgs/Bedroom-home.png"
        alt="ImageProduto"
      />
      <p className="text-#9F9F9F">{nomeProduto}</p>
      <p className="text-#9F9F9F">{precoProduto}</p>
      <select className="border border-black rounded" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>{precoTotal}</p>
      <img className="w-7 h-7" src="/src/assets/icons/Icon-trash.png" alt="Trash" />
      </div>
      </div>
      <div className="bg-#FFF3E3 px-20 pt-4 pb-20 flex flex-col gap-5 ml-20">
        <h1 className="font-semibold text-[32px] text-center mb-14">Card Totals</h1>
        <div className="flex justify-between mb-7">
          <p className="font-medium">Subtotal</p>
          <p className="text-#9F9F9F ml-">{precoTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Total</p>
          <p className="text-#B88E2F font-medium text-xl">{precoTotal}</p>
        </div>
        <button className="px-16 py-4 border-2 border-black rounded-2xl mt-11 text-xl">Check Out</button>
      </div>
    </div>
  );
};

export default CartProduct;
