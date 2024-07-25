import React, { useState, useEffect } from 'react';
import Card from '../../components/cards/Card';
import { Product } from '../../types/typeProduct';
import Pagination from '../Pagination';

const List = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 16;

  useEffect(() => {
    fetch('/db/db.json')
      .then(response => response.json())
      .then(data => {
        setTotalProducts(data.products.length);
        setProducts(data.products.slice(offset, offset + limit));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [offset, limit]);

  return (
    <div className="px-4 md:px-24 md:mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <Pagination
        limit={limit}
        total={totalProducts}
        offset={offset}
        setOffset={setOffset}
      />
    </div>
  );
};

export default List;
