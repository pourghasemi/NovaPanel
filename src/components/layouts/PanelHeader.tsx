
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';

import {
  Header,
  PageTitle,
  HeaderActions,
} from './PanelHeader.styles';

interface DashboardHeaderProps {
  title: string;
  description?: string;
}

const DashboardHeader = ({
  title,
  description,
}: DashboardHeaderProps) => {
  return (
    <Header>
      <PageTitle>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </PageTitle>

      <HeaderActions>
        <LanguageToggle />
        <ThemeToggle />
      </HeaderActions>
    </Header>
  );
};

export default DashboardHeader;
