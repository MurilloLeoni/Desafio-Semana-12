interface ButtonChangeQuantityProps {
    quantity: number;
    handleQuantityChange: (change: number) => void;
  }

const ButtonChangeQuantity = ({ handleQuantityChange, quantity }:ButtonChangeQuantityProps) => {
  return (
    <div className="flex border border-#9F9F9F rounded-lg px-3 py-4 gap-7">
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => handleQuantityChange(+1)}>+</button>
    </div>
  );
};

export default ButtonChangeQuantity;
