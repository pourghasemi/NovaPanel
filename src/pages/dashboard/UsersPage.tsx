
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import PanelLayout from '@/components/layouts/PanelLayout';
import DataTable from '@/share/DataTable';
import SearchInput from '@/share/SearchInput';
import UserForm from '@/components/users/UserForm';

import useUserColumns from '@/hooks/useUserColumns';

import {
  getUsers,
  createUser,
  type CreateUserPayload,
} from '@/services/userService';

import { handleApiError } from '@/services/handleApiError';

import type { User } from '@/types/user';

import {
  PageContent,
  Toolbar,
  AddButton,
  Message,
} from './UsersPage.styles';

const UsersPage = () => {
  const { t } = useTranslation();

  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = useUserColumns();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError('');

        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        setError(handleApiError(error));
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

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
    const newUser = await createUser(user);

    const completeUser: User = {
      ...newUser,
      ...user,
      id: newUser.id,
    };

    setUsers((prev) => [completeUser, ...prev]);
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
          <Message>{error}</Message>
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
