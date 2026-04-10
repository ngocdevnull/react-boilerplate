import { TooltipProvider } from '@radix-ui/react-tooltip';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@core/libs/query';
import { useLoadingStore } from '@core/store/loading.store';
import { LoadingOverlay, ToastProvider, Toaster } from '@ui';
import { AppRouter } from './router/router';
const App = () => {
  const isLoading = useLoadingStore((state) => state.isLoading);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <LoadingOverlay loading={isLoading} />
        <TooltipProvider>
          <Router>
            <AppRouter />
          </Router>
        </TooltipProvider>
        <Toaster />
      </ToastProvider>

      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
export default App;
