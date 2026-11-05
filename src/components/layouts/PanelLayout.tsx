
import type { ReactNode } from 'react';

import Sidebar from '@/components/layouts/Sidebar';
import PanelHeader from '@/components/layouts/PanelHeader';

import {
  LayoutContainer,
  MainContent,
  PageContent,
} from './PanelLayout.styles';

interface PanelLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}
const PanelLayout = ({
  children,
  title,
  description,
}: PanelLayoutProps) => {
  return (
    <LayoutContainer>
      <Sidebar />

      <MainContent>
        <PanelHeader
          title={title}
          description={description}
        />

        <PageContent>{children}</PageContent>
      </MainContent>
    </LayoutContainer>
  );
};

export default PanelLayout;
