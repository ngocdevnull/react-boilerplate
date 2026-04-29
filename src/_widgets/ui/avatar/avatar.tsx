import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '../../common/cn';

import type { AvatarProps } from './types';
import { avatarFallbackVariants, avatarImageVariants, avatarVariants } from './variant';
const getInitials = (fallback?: string): string => {
  if (!fallback) return '?';
  const parts = fallback.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
};
export const Avatar = ({
  src,
  alt,
  fallback,
  size = 'md',
  delayMs = 300,
  className,
  ...props
}: AvatarProps) => {
  return (
    <AvatarPrimitive.Root className={cn(avatarVariants({ size, className }))} {...props}>
      {src ? (
        <AvatarPrimitive.Image
          src={src}
          alt={alt ?? fallback ?? 'avatar'}
          className={cn(avatarImageVariants())}
        />
      ) : null}
      <AvatarPrimitive.Fallback delayMs={delayMs} className={cn(avatarFallbackVariants())}>
        {getInitials(fallback)}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
