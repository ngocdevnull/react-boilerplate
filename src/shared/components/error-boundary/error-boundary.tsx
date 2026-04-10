import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import type { ErrorBoundaryFallbackProps, ErrorBoundaryProps } from './error-boundary.type';

const ErrorBoundaryFallback = ({ moduleName }: ErrorBoundaryFallbackProps) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md rounded-md border border-red-100 bg-red-50 p-4 text-sm text-red-700">
        <p className="font-semibold">{t('errorBoundary.title')}</p>
        <p className="mt-1">{t('errorBoundary.description', { moduleName })}</p>
      </div>
    </div>
  );
};

export const ErrorBoundary = ({ children, moduleName }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      fallbackRender={(props) => <ErrorBoundaryFallback moduleName={moduleName} {...props} />}
      onError={(error) => {
        console.error(`[${moduleName}] module crashed`, error);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
