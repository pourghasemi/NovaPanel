
import { Toaster } from 'react-hot-toast';

import AppRoutes from '@/routes/AppRoutes';
import { useLanguage } from '@/providers/LanguageProvider';

const App = () => {
  const { language } = useLanguage();

  const direction = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'inherit',
            fontSize: '14px',
            direction,
          },
        }}
      />

      <AppRoutes />
    </>
  );
};

export default App;
