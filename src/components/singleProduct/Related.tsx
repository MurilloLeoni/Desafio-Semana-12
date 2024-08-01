import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../cards/Card";
import { fetchProducts } from "../../utils/fetchedProducts";
import { Product } from "../../types/typeProduct";
import AppContext from "../../contexts/AppContext";

const Related = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext not found");
  }

  const { selectedProduct, setSelectedProduct } = context;
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  const relatedProducts = products.filter((product) =>
    product.tags.some((tag) => selectedProduct?.tags.includes(tag))
  );

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const displayedProducts = relatedProducts.slice(0, visibleProducts);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/products/${product.slug}`);
  };

  return (
    <>
      <h1 className="text-center font-medium text-4xl mt-14">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-24 md:mt-14">
        {displayedProducts.map((product) => (
          <Card
            key={product.id}
            {...product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      {visibleProducts < relatedProducts.length && (
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
