import { createGlobalStyle } from 'styled-components';

import VazirmatnRegular from '@/assets/fonts/Vazirmatn/static/Vazirmatn-Regular.ttf';
import VazirmatnMedium from '@/assets/fonts/Vazirmatn/static/Vazirmatn-Medium.ttf';
import VazirmatnBold from '@/assets/fonts/Vazirmatn/static/Vazirmatn-Bold.ttf';

import InterRegular from '@/assets/fonts/Inter/static/Inter_18pt-Regular.ttf';
import InterMedium from '@/assets/fonts/Inter/static/Inter_18pt-Medium.ttf';
import InterBold from '@/assets/fonts/Inter/static/Inter_18pt-Bold.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Vazirmatn';
    src: url(${VazirmatnRegular}) format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url(${VazirmatnMedium}) format('truetype');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Vazirmatn';
    src: url(${VazirmatnBold}) format('truetype');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
`;

export default GlobalStyles;
