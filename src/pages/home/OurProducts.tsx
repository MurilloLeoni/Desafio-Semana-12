import { useNavigate } from "react-router-dom";
import List from "../../components/listProducts/List";

const OurProducts = () => {
  const navigate = useNavigate();

  const handleLoadMore = () => {
    navigate("/shop");
  };

  return (
    <div>
      <h1 className="text-center pb-8 pt-10 font-bold text-3xl md:text-[40px] leading-[48px]">
        Our Products
      </h1>
      <List />
      <div className="flex justify-center mt-11">
        <button
          className="border border-#B88E2F text-#B88E2F font-semibold text-base py-3 px-20 mb-16"
          onClick={handleLoadMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
