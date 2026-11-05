import { Toaster } from 'react-hot-toast';
import AppRoutes from '@/routes/AppRoutes';

const App = () => {
  return <>
  <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: 'inherit',
            fontSize: '14px',
            direction: 'rtl',
          },
        }}
      />
      <AppRoutes />
  </>;
};

export default App;