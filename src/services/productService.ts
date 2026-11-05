import api from '@/services/api';
import type { Product } from '@/type/product';

export type CreateProductPayload = Pick<
  Product,
  'title' | 'price' | 'description' | 'image' | 'category'
>;

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>('/products');
  return response.data;
};

export const getProductCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>('/products/categories');
  return response.data;
};

export const createProduct = async (
  product: CreateProductPayload,
): Promise<Product> => {
  const response = await api.post<Omit<Product, 'rating'>>(
    '/products',
    product,
  );

  return {
    ...response.data,
    rating: {
      rate: 0,
      count: 0,
    },
  };
};