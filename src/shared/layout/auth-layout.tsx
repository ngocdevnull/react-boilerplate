import { useTranslation } from 'react-i18next';
import backgroundImage from '@/assets/images/background.png';
import logoIcon from '@/assets/icons/doct.svg';
import type { AuthLayoutProps } from './auth-layout.type';
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { t } = useTranslation('common');
  return (
    <main className="flex min-h-screen">
      <div className="flex w-1/2 items-center justify-center bg-auth-bg p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <aside className="relative w-1/2">
        <img
          src={backgroundImage}
          alt={t('authLayout.backgroundAlt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 z-10">
          <img src={logoIcon} alt={t('authLayout.logoAlt')} width={103} height={44} />
        </div>
      </aside>
    </main>
  );
};
