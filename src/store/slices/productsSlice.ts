
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  getProducts,
  createProduct,
  type CreateProductPayload,
} from '@/services/productService';

import type { Product } from '@/types/product';
import type { RootState } from '@/store';

interface ProductsState {
  products: Product[];
  loaded: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loaded: false,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>(
  'products/fetchProducts',
  () => getProducts(),
  {
    condition: (_, { getState }) => {
      const { products } = getState();
      return !products.loaded && !products.loading;
    },
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  (product: CreateProductPayload) => createProduct(product),
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'errors.fetchProductsFailed';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.unshift(action.payload);
      })
      .addCase(addProduct.rejected, (state) => {
        state.error = 'errors.createProductFailed';
      });
  },
});

export default productsSlice.reducer;
