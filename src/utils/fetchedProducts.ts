import { Product } from '../types/typeProduct';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};