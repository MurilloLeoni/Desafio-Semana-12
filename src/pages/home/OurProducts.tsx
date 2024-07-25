import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/cards/Card';
import { Product } from '../../types/typeProduct';

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/db/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products.slice(0, 8)))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleLoadMore = () => {
    navigate('/shop');
  };

  return (
    <div className="px-4 md:px-24 md:mt-14">
      <h1 className="flex justify-center pb-8 font-poppins font-bold text-[40px] leading-[48px]">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <div className="flex justify-center mt-11">
        <button
          className="border border-#B88E2F text-#B88E2F font-poppins font-semibold text-base py-3 px-20 mb-16"
          onClick={handleLoadMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
