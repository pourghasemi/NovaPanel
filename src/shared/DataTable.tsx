
import {
  useMemo,
  useState,
  type ReactNode,
  type ChangeEvent,
} from 'react';
import { useTranslation } from 'react-i18next';

import Pagination from '@/shared/Pagination';

import {
  TableWrapper,
  StyledTable,
  EmptyMessage,
  TableFooter,
  PageSizeContainer,
  PageSizeSelect,
} from './DataTable.styles';

export interface DataTableColumn<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: keyof T;
  pageSizeOptions?: number[];
  emptyMessage?: string;
}

const DataTable = <T,>({
  columns,
  data,
  rowKey,
  pageSizeOptions = [5, 10, 20],
  emptyMessage,
}: DataTableProps<T>) => {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0] ?? 5);

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const startIndex = (safePage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [data, safePage, pageSize]);

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  if (data.length === 0) {
    return (
      <TableWrapper>
        <EmptyMessage>
          {emptyMessage ?? t('common.table.empty')}
        </EmptyMessage>
      </TableWrapper>
    );
  }

  return (
    <div>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((row) => (
              <tr key={String(row[rowKey])}>
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {column.render
                      ? column.render(row)
                      : String(row[column.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>

      <TableFooter>
        <PageSizeContainer>
          <PageSizeSelect
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </PageSizeSelect>
        </PageSizeContainer>

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </TableFooter>
    </div>
  );
};

export default DataTable;
