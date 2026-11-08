
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import PanelLayout from '@/components/layouts/PanelLayout';
import DataTable from '@/share/DataTable';
import ProductForm from '@/components/products/ProductForm';
import ProductFilters from '@/components/products/ProductFilters';
import useProductColumns from '@/hooks/useProductColumns';

import {
  getProducts,
  getProductCategories,
  createProduct,
} from '@/services/productService';

import { handleApiError } from '@/services/handleApiError';

import type { CreateProductPayload } from '@/services/productService';
import type { Product } from '@/type/product';

import {
  PageContent,
  Toolbar,
  AddButton,
  Message,
} from './ProductsPage.styles';

const ProductsPage = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = useProductColumns();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError('');

        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getProductCategories(),
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        setError(handleApiError(error, t));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
    const newProduct = await createProduct(product);

    setProducts((prev) => [newProduct, ...prev]);
    setShowForm(false);
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
          <Message>{error}</Message>
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
