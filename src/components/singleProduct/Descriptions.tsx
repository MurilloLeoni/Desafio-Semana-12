import { useState } from "react";
import { Product } from "../../types/typeProduct";

const Descriptions = ({ description }: Product) => {
  const [activeTab, setActiveTab] = useState<"short" | "long">("short");

  const handleTabClick = (tab: "short" | "long") => {
    setActiveTab(tab);
  };

  return (
    <div className="px-4 md:px-52">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 text-xl md:text-2xl mb-9">
        <h2
          onClick={() => handleTabClick("short")}
          className={`cursor-pointer ${
            activeTab === "short" ? "text-black" : "text-#9F9F9F"
          }`}
        >
          Description
        </h2>
        <h2
          onClick={() => handleTabClick("long")}
          className={`cursor-pointer ${
            activeTab === "long" ? "text-black" : "text-#9F9F9F"
          }`}
        >
          Additional Information
        </h2>
      </div>
      <p className="text-#9F9F9F text-justify">
        {activeTab === "short" ? description.short : description.long}
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
        <img
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Image-description.png"
          alt="Image1"
          className="w-32 h-32 md:w-96 md:h-auto"
        />
        <img
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Image-description.png"
          alt="Image2"
          className="w-32 h-32 md:w-96 md:h-auto"
        />
      </div>
    </div>
  );
};

export default Descriptions;
