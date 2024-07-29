import { useEffect, useState } from "react";
import Card from "../cards/Card";
import { fetchProducts } from "../../utils/fetchedProducts";
import { Product } from "../../types/typeProduct";

const Related = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const quantProducts = products.slice(0, visibleProducts);
  return (
    <>
      <h1 className="text-center font-medium text-4xl mt-14">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-24 md:mt-14">
        {quantProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="flex justify-center my-8">
          <button
            className="border border-#B88E2F text-#B88E2F font-semibold py-3 px-20"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default Related;
