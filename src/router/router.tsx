import { Routes, Route, Navigate } from 'react-router-dom';
import { ForgotPasswordPage } from '@modules/forgot-password/forgot-password';
import { HomePage } from '@modules/home/home';
import { SignInPage } from '@modules/sign-in/sign-in';
import { SignUpPage } from '@modules/sign-up/sign-up';
import { ErrorBoundary } from '@shared/components/error-boundary/error-boundary';
import { PlaceholderPage } from '@shared/components/placeholder-page/placeholder-page';
import { MillManagementPage } from '@modules/mill-management/mill-management';

import { ProtectedRoute } from '@core/guards/protected-route';
import { PublicRoute } from '@core/guards/public-route';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {/* Redirect root to /home */}
        <Route index element={<Navigate to="/home" replace />} />

        <Route
          path="/home"
          element={
            <ErrorBoundary moduleName="Home">
              <HomePage />
            </ErrorBoundary>
          }
        />

        <Route
          path="/mill-management"
          element={
            <ErrorBoundary moduleName="MillManagement">
              <MillManagementPage />
            </ErrorBoundary>
          }
        />

        {/* Placeholder Routes for Sidebar Items */}
        <Route
          path="/appointments"
          element={
            <ErrorBoundary moduleName="Appointments">
              <PlaceholderPage activeKey="appointment" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/patients"
          element={
            <ErrorBoundary moduleName="Patients">
              <PlaceholderPage activeKey="my-patient" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/schedule-timings"
          element={
            <ErrorBoundary moduleName="ScheduleTimings">
              <PlaceholderPage activeKey="schedule-timings" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/payments"
          element={
            <ErrorBoundary moduleName="Payments">
              <PlaceholderPage activeKey="payments" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/messages"
          element={
            <ErrorBoundary moduleName="Messages">
              <PlaceholderPage activeKey="message" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/blog"
          element={
            <ErrorBoundary moduleName="Blog">
              <PlaceholderPage activeKey="blog" />
            </ErrorBoundary>
          }
        />
        <Route
          path="/settings"
          element={
            <ErrorBoundary moduleName="Settings">
              <PlaceholderPage activeKey="settings" />
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
        <Route
          path="/sign-up"
          element={
            <ErrorBoundary moduleName="SignUp">
              <SignUpPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ErrorBoundary moduleName="ForgotPassword">
              <ForgotPasswordPage />
            </ErrorBoundary>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
