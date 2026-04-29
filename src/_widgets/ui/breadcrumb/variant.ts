import { cva } from 'class-variance-authority';

export const breadcrumbRootVariants = cva('flex items-center');

export const breadcrumbListVariants = cva('flex items-center gap-2 text-sm text-black-40');

export const breadcrumbItemVariants = cva('flex items-center gap-2');

export const breadcrumbLinkVariants = cva('transition-colors hover:text-primary');

export const breadcrumbCurrentVariants = cva('font-semibold text-primary');
