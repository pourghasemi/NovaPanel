import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPackage, FiUsers } from 'react-icons/fi';

import PanelLayout from '@/components/layouts/PanelLayout';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchUsers } from '@/store/slices/usersSlice';
import { fetchProducts } from '@/store/slices/productsSlice';

import {
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
} from './DashboardPage.styles';

const DashboardPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { users, loading: usersLoading, error: usersError } = useAppSelector(
    (state) => state.users,
  );
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <PanelLayout
      title={t('dashboard.title')}
      description={t('dashboard.welcome')}
    >
      <StatsGrid>
        <StatCard to="/users">
          <StatIcon>
            <FiUsers />
          </StatIcon>
          <StatValue>
            {usersLoading ? '—' : usersError ? t(usersError) : users.length}
          </StatValue>
          <StatLabel>{t('dashboard.stats.users')}</StatLabel>
        </StatCard>

        <StatCard to="/products">
          <StatIcon>
            <FiPackage />
          </StatIcon>
          <StatValue>
            {productsLoading
              ? '—'
              : productsError
                ? t(productsError)
                : products.length}
          </StatValue>
          <StatLabel>{t('dashboard.stats.products')}</StatLabel>
        </StatCard>
      </StatsGrid>
    </PanelLayout>
  );
};

export default DashboardPage;
