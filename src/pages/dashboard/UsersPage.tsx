
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import PanelLayout from '@/components/layouts/PanelLayout';
import DataTable from '@/shared/DataTable';
import SearchInput from '@/shared/SearchInput';
import UserForm from '@/components/users/UserForm';

import useUserColumns from '@/hooks/useUserColumns';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  fetchUsers,
  addUser,
} from '@/store/slices/usersSlice';

import type { CreateUserPayload } from '@/services/userService';

import {
  PageContent,
  Toolbar,
  AddButton,
  Message,
} from './UsersPage.styles';

const UsersPage = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const { users, loading, error } = useAppSelector(
    (state) => state.users
  );

  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const columns = useUserColumns();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return users.filter((user) => {
      const firstName = user.name?.firstname ?? '';
      const lastName = user.name?.lastname ?? '';

      const fullName = `${firstName} ${lastName}`.toLowerCase();

      return (
        fullName.includes(searchValue) ||
        (user.username ?? '').toLowerCase().includes(searchValue) ||
        (user.email ?? '').toLowerCase().includes(searchValue)
      );
    });
  }, [users, search]);

  const handleAddUser = async (user: CreateUserPayload) => {
    await dispatch(addUser(user)).unwrap();
    setShowForm(false);
  };

  return (
    <PanelLayout
      title={t('users.title')}
      description={t('users.description')}
    >
      <PageContent>
        <Toolbar>
          <SearchInput
            placeholder={t('users.searchPlaceholder')}
            value={search}
            onChange={setSearch}
          />

          <AddButton
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
          >
            <FiPlus size={18} />
            {t('users.addUser')}
          </AddButton>
        </Toolbar>

        {showForm && (
          <UserForm
            onSubmit={handleAddUser}
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
            data={filteredUsers}
            rowKey="id"
            emptyMessage={t('users.noUsersFound')}
          />
        )}
      </PageContent>
    </PanelLayout>
  );
};

export default UsersPage;
