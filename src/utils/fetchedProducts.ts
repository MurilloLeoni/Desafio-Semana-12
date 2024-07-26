import { Product } from '../types/typeProduct';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/db/db.json');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};