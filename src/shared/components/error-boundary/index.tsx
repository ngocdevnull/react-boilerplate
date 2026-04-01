import { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.type';

interface Props extends ErrorBoundaryProps, WithTranslation {}

class ErrorBoundaryBase extends Component<Props, ErrorBoundaryState> {
  state: Readonly<ErrorBoundaryState> = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error(`[${this.props.moduleName}] module crashed`, error);
  }

  render() {
    const { t, moduleName, children } = this.props;

    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-6">
          <div className="w-full max-w-md rounded-md border border-red-100 bg-red-50 p-4 text-sm text-red-700">
            <p className="font-semibold">{t('errorBoundary.title')}</p>
            <p className="mt-1">
              {t('errorBoundary.description', { moduleName })}
            </p>
          </div>
        </div>
      );
    }

    return children;
  }
}

export const ErrorBoundary = withTranslation('common')(ErrorBoundaryBase);
