import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  DialogFooter,
  InputField,
  SelectField,
  TimePickerField,
  TextareaField,
} from '@ui';
import { STATUS } from '@/shared/constants/status.constant';
import { useCountries } from '@/shared/hooks/use-locations';

import { millFormSchema, type MillFormValues } from '../schema/mill-form.schema';

interface MillFormProps {
  defaultValues?: Partial<MillFormValues>;
  onSubmit: (values: MillFormValues) => void;
  onCancel: () => void;
  isLoading?: boolean;
  submitLabel?: string;
  isEdit?: boolean;
}

export const MillForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  isLoading,
  submitLabel,
  isEdit,
}: MillFormProps) => {
  const { t } = useTranslation(['millManagement', 'common']);
  const { data: countries = [], isLoading: isLoadingCountries } = useCountries();

  const countryOptions = useMemo(
    () => countries.map((c) => ({ label: c.name, value: c.name })),
    [countries],
  );

  const statusOptions = [
    { value: STATUS.ACTIVE, label: t('common:statusValues.active') },
    { value: STATUS.INACTIVE, label: t('common:statusValues.inactive') },
  ];

  const form = useForm<MillFormValues>({
    resolver: zodResolver(millFormSchema),
    defaultValues: {
      name: '',
      country: '',
      address: '',
      status: STATUS.ACTIVE,
      openTime: '',
      closeTime: '',
      expectedCapacity: 0,
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset({
        ...form.getValues(),
        ...defaultValues,
      });
    }
  }, [defaultValues, form]);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4" noValidate>
      <InputField
        name="name"
        control={form.control}
        label={t('fields.name')}
        placeholder={t('fields.namePlaceholder')}
        required
        error={form.formState.errors.name?.message}
      />

      <SelectField
        name="country"
        control={form.control}
        label={t('fields.country')}
        options={countryOptions}
        placeholder={isLoadingCountries ? t('common:loading.countries') : t('fields.countryPlaceholder')}
        required
        error={form.formState.errors.country?.message}
      />

      <TextareaField
        name="address"
        control={form.control}
        label={t('fields.address')}
        placeholder={t('fields.addressPlaceholder')}
        required
        error={form.formState.errors.address?.message}
      />

      {isEdit && (
        <SelectField
          name="status"
          control={form.control}
          label={t('fields.status')}
          options={statusOptions}
          required
          error={form.formState.errors.status?.message}
        />
      )}

      <div className="grid grid-cols-2 gap-4">
        <TimePickerField
          name="openTime"
          control={form.control}
          label={t('fields.openTime')}
          required
          error={form.formState.errors.openTime?.message}
        />
        <TimePickerField
          name="closeTime"
          control={form.control}
          label={t('fields.closeTime')}
          required
          error={form.formState.errors.closeTime?.message}
        />
      </div>

      <InputField
        name="expectedCapacity"
        control={form.control}
        label={t('fields.expectedCapacity')}
        placeholder={t('fields.expectedCapacityPlaceholder')}
        type="number"
        required
        error={form.formState.errors.expectedCapacity?.message}
      />

      <DialogFooter className="pt-4 px-1">
        <Button type="button" variant="outline" onClick={onCancel} className="w-full sm:w-auto">
          {t('common:action.cancel')}
        </Button>
        <Button type="submit" isLoading={isLoading} className="w-full sm:w-auto">
          {submitLabel || t('common:action.save')}
        </Button>
      </DialogFooter>
    </form>
  );
};
