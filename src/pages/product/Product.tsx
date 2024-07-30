import { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../contexts/AppContext";
import Main from "../../components/singleProduct/Main";
import Descriptions from "../../components/singleProduct/Descriptions";
import Related from "../../components/singleProduct/Related";
import { Product } from "../../types/typeProduct";
import { fetchProducts } from "../../utils/fetchedProducts";

const ProductPage = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext not found");
  }

  const { setSelectedProduct } = context;
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProducts = await fetchProducts();
      const product = fetchedProducts.find((item: Product) => item.slug === slug);
      if (product) {
        setSelectedProduct(product);
      }
    };
    getProduct();
  }, [setSelectedProduct, slug]);

  const { selectedProduct } = context;

  if (!selectedProduct) return <div>Product not fuond</div>;

  return (
    <div>
      <Main {...selectedProduct} />
      <Descriptions {...selectedProduct} />
      <Related />
    </div>
  );
};

export default ProductPage;
