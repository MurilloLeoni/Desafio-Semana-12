import { useState, useEffect } from 'react';
import Card from '../../components/cards/Card';
import { Product } from '../../types/typeProduct';
import Pagination from '../Pagination';
import Filter from '../filter/Filter';
import { useLocation } from 'react-router-dom';

const List = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState(16);

  const location = useLocation();

  useEffect(() => {
    fetch('/db/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const start = offset + 1;
  const end = Math.min(offset + currentDisplay, products.length);

  const filteredProducts = products.slice(offset, offset + currentDisplay);

  const ShowFilterAndPagination = location.pathname !== '/' && location.pathname !== '/nome-do-produto';

  return (
    <>
      {ShowFilterAndPagination && (
        <Filter
          totalProducts={products.length}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          start={start}
          end={end}
        />
      )}
      <div className="px-4 md:px-24 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <Card key={product.id} {...product} />
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
