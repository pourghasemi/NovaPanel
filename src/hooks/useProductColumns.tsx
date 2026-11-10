import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import type { Product } from '@/types/product';
import type { DataTableColumn } from '@/shared/DataTable';

const ProductImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

const ProductTitle = styled.span`
  display: block;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Rating = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const useProductColumns = (): DataTableColumn<Product>[] => {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage ?? i18n.language;
  const isPersian = locale.startsWith('fa');
  const priceFormatter = useMemo(
    () => new Intl.NumberFormat(
      locale,
      isPersian
        ? { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        : { style: 'currency', currency: 'USD' },
    ),
    [locale, isPersian],
  );

  return [
    {
      key: 'image',
      header: t('products.image'),
      render: (product) => (
        <ProductImage src={product.image} alt={product.title} />
      ),
    },
    {
      key: 'title',
      header: t('products.product'),
      render: (product) => (
        <ProductTitle title={product.title}>
          {product.title}
        </ProductTitle>
      ),
    },
    {
      key: 'category',
      header: t('products.category'),
    },
    {
      key: 'price',
      header: t('products.price'),
      render: (product) => (
        <Price>
          {priceFormatter.format(product.price)}
          {isPersian ? ' تومان' : ''}
        </Price>
      ),
    },
    {
      key: 'rating',
      header: t('products.rating'),
      render: (product) => (
        <Rating>
          {product.rating.rate} ({product.rating.count})
        </Rating>
      ),
    },
  ];
};

export default useProductColumns;