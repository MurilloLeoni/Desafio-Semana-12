import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/cards/Card";
import Pagination from "../Pagination";
import Filter from "../filter/Filter";
import { fetchProducts } from "../../utils/fetchedProducts";
import AppContext from "../../contexts/AppContext";

const List = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { products, setProducts } = context;
  const [offset, setOffset] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState(16);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("");
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [filterPrice, setFilterPrice] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, [setProducts]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setFilterCategory(category);
    }
  }, [location.search]);

  const start = offset + 1;
  const end = Math.min(offset + currentDisplay, products.length);

  const filterAndSortProducts = () => {
    let filtered = [...products];
    if (filterCategory) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }
    if (filterRating !== null) {
      filtered = filtered.filter((product) => product.rating >= filterRating);
    }
    if (filterPrice !== null) {
      filtered = filtered.filter((product) => product.salePrice <= filterPrice);
    }

    if (sortOrder === "alfabetico_asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "alfabetico_desc") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "rating_asc") {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (sortOrder === "rating_desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === "preco_asc") {
      filtered.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortOrder === "preco_desc") {
      filtered.sort((a, b) => b.salePrice - a.salePrice);
    }

    return filtered.slice(offset, offset + currentDisplay);
  };

  const filteredProducts = filterAndSortProducts();

  const ShowFilterAndPagination = location.pathname !== "/";

  return (
    <>
      {ShowFilterAndPagination && (
        <Filter
          totalProducts={products.length}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          start={start}
          end={end}
          setSortOrder={setSortOrder}
          setFilterCategory={setFilterCategory}
          setFilterRating={setFilterRating}
          setFilterPrice={setFilterPrice}
        />
      )}
      <div className="px-4 md:px-24 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <Card {...product} />
            </div>
          ))}
        </div>
        {ShowFilterAndPagination && (
          <Pagination
            limit={currentDisplay}
            total={products.length}
            offset={offset}
            setOffset={setOffset}
          />
        )}
      </div>
    </>
  );
};

export default List;
