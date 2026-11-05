import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import type { User } from '@/type/user';
import type { DataTableColumn } from '@/components/share/DataTable';

const UserName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const UserEmail = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const useUserColumns = (): DataTableColumn<User>[] => {
  const { t } = useTranslation();

  return [
    {
      key: 'id',
      header: 'ID',
    },
    {
      key: 'name',
      header: t('users.user'),
      render: (user) => (
        <UserName>
          {user.name.firstname} {user.name.lastname}
        </UserName>
      ),
    },
    {
      key: 'username',
      header: t('users.username'),
    },
    {
      key: 'email',
      header: t('users.email'),
      render: (user) => <UserEmail>{user.email}</UserEmail>,
    },
    {
      key: 'phone',
      header: t('users.phone'),
    },
  ];
};

export default useUserColumns;