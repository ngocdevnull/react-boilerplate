import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@modules/home';
import { SignInPage } from '@modules/sign-in';
import { ErrorBoundary } from '@shared/components/error-boundary';

import { ProtectedRoute } from '@core/guards/protected-route';
import { PublicRoute } from '@core/guards/public-route';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          index
          element={
            <ErrorBoundary moduleName="Home">
              <HomePage />
            </ErrorBoundary>
          }
        />
      </Route>

      <Route element={<PublicRoute />}>
        <Route
          path="/sign-in"
          element={
            <ErrorBoundary moduleName="SignIn">
              <SignInPage />
            </ErrorBoundary>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
