import { useState } from "react";
import { Product } from "../../types/typeProduct";

const Descriptions = ({ description }: Product) => {
  const [activeTab, setActiveTab] = useState<"short" | "long">("short");

  const handleTabClick = (tab: "short" | "long") => {
    setActiveTab(tab);
  };

  return (
    <div className="px-52">
      <div className="flex justify-center items-center gap-32 text-2xl mb-9">
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
      <div className="flex justify-center">
        <img src="/src/assets/imgs/Image-description.png" alt="Image1" />
        <img src="/src/assets/imgs/Image-description.png" alt="Image2" />
      </div>
    </div>
  );
};

export default Descriptions;
