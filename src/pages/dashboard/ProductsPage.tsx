
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import PanelLayout from '@/components/layouts/PanelLayout';
import DataTable from '@/shared/DataTable';
import ProductForm from '@/components/products/ProductForm';
import ProductFilters from '@/components/products/ProductFilters';

import useProductColumns from '@/hooks/useProductColumns';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchProducts,
  addProduct,
} from '@/store/slices/productsSlice';

import {
  getProductCategories,
  type CreateProductPayload,
} from '@/services/productService';

import {
  PageContent,
  Toolbar,
  AddButton,
  Message,
} from './ProductsPage.styles';

const ProductsPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );

  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);

  const columns = useProductColumns();

  useEffect(() => {
    dispatch(fetchProducts());

    getProductCategories()
      .then(setCategories)
      .catch((error) => console.error(error));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  const handleAddProduct = async (product: CreateProductPayload) => {
    try {
      await dispatch(addProduct(product)).unwrap();
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PanelLayout
      title={t('products.title')}
      description={t('products.description')}
    >
      <PageContent>
        <Toolbar>
          <ProductFilters
            search={search}
            selectedCategory={selectedCategory}
            categories={categories}
            onSearchChange={setSearch}
            onCategoryChange={setSelectedCategory}
          />

          <AddButton
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
          >
            <FiPlus size={18} />
            {t('products.addProduct')}
          </AddButton>
        </Toolbar>

        {showForm && (
          <ProductForm
            categories={categories}
            onSubmit={handleAddProduct}
            onCancel={() => setShowForm(false)}
          />
        )}

        {loading ? (
          <Message>{t('common.loading')}</Message>
        ) : error ? (
          <Message>{t(error)}</Message>
        ) : (
          <DataTable
            columns={columns}
            data={filteredProducts}
            rowKey="id"
            emptyMessage={t('products.noProductsFound')}
          />
        )}
      </PageContent>
    </PanelLayout>
  );
};

export default ProductsPage;
