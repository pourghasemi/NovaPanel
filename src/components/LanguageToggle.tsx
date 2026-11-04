import styled from 'styled-components';
import { FiGlobe } from 'react-icons/fi';

import { useLanguage } from '@/providers/LanguageProvider';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  svg {
    font-size: 18px;
  }
`;

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleButton onClick={toggleLanguage}>
      <FiGlobe />

      <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
    </ToggleButton>
  );
};

export default LanguageToggle;