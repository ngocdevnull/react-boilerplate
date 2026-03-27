import { Component } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.type';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-6">
          <div className="w-full max-w-md rounded-md border border-red-100 bg-red-50 p-4 text-sm text-red-700">
            <p className="font-semibold">Something went wrong</p>
            <p className="mt-1">
              The `{this.props.moduleName}` module failed to render. Please try refreshing this
              page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
