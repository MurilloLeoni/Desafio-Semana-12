import React from "react";
import { Product } from "../../types/typeProduct";

const Descriptions = ({
  description = {
    short: "",
    long: "Loren ipsum dolor sit amet consectetur adipisicing elit. Loren ipsum dolor sit amet consectetur adipisicing elit. Loren ipsum dolor sit amet consectetur adipisicing elit. Loren ipsum dolor sit amet consectetur adipisicing elit. Loren ipsum dolor sit amet consectetur adipisicing elit. Loren ipsum dolor sit amet consectetur adipisicing elit.",
  },
}: Product) => {
  return (
    <div className="px-52 font-poppins">
      <div className="flex justify-center items-center gap-32  text-2xl text-#9F9F9F mb-9 cursor-pointer">
        <h2>Description</h2>
        <h2>Additional Information</h2>
      </div>
      <p className="text-#9F9F9F text-justify ">{description.long}</p>
    </div>
  );
};

export default Descriptions;
