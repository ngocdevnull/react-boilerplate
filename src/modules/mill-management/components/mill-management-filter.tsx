import { useEffect, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { STATUS_FILTER_OPTIONS } from '@/shared/constants/status.constant';
import { buildFilterQuery } from '@/shared/components/management/utils/build-filter-query';
import { useDebouncedValue } from '@/shared/hooks/use-debounced-value';
import { useCountries } from '@/shared/hooks/use-locations';
import { InputField, MultiSelectField, SelectField } from '@ui';

import type { MillManagementFilterProps } from '../types/mill-management-filter.type';

export const MillManagementFilter = ({ onFilterChange }: MillManagementFilterProps) => {
  const { t } = useTranslation(['millManagement', 'common']);
  const { data: countries = [] } = useCountries();

  const countryOptions = useMemo(
    () => countries.map((c) => ({ label: c.name, value: c.name })),
    [countries],
  );

  const { control } = useForm({
    defaultValues: {
      keyword: '',
      status: '',
      countries: [],
    },
  });

  const watchedFilters = useWatch({ control });
  const debouncedFilters = useDebouncedValue(watchedFilters);

  useEffect(() => {
    onFilterChange(buildFilterQuery(debouncedFilters));
  }, [debouncedFilters, onFilterChange]);

  return (
    <form className="flex flex-wrap items-center gap-3 xl:flex-nowrap">
      <InputField
        name="keyword"
        control={control}
        className="w-full basis-full xl:min-w-[280px] xl:flex-1 xl:basis-auto"
        leftAddon={<Search className="h-4 w-4 text-black-40" />}
        placeholder={t('common:filters.search')}
      />
      <SelectField
        name="status"
        control={control}
        className="w-48 shrink-0"
        options={STATUS_FILTER_OPTIONS}
        placeholder={t('common:filters.allStatuses')}
      />
      <MultiSelectField
        name="countries"
        control={control}
        className="w-48 shrink-0"
        options={countryOptions}
        placeholder={t('millManagement:filters.selectCountry')}
      />
    </form>
  );
};
