
import { useTranslation } from 'react-i18next';

import {
  PaginationContainer,
  PageButton,
} from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const { t } = useTranslation();

  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <PaginationContainer>
      <PageButton
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {t('table.previous')}
      </PageButton>

      {pages.map((page) => (
        <PageButton
          key={page}
          type="button"
          $active={page === currentPage}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </PageButton>
      ))}

      <PageButton
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('table.next')}
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
