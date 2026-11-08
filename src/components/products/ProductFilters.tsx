
import { useTranslation } from 'react-i18next';

import {
  FiltersContainer,
  SearchInput,
  CategorySelect,
} from './ProductFilters.styles';

interface ProductFiltersProps {
  search: string;
  selectedCategory: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const ProductFilters = ({
  search,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
}: ProductFiltersProps) => {
  const { t } = useTranslation();

  return (
    <FiltersContainer>
      <SearchInput
        type="search"
        placeholder={t('products.searchPlaceholder')}
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <CategorySelect
        value={selectedCategory}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="">
          {t('products.allCategories')}
        </option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </CategorySelect>
    </FiltersContainer>
  );
};

export default ProductFilters;
