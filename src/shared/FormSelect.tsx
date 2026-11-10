import { useField } from 'formik';

import FormError from './FormError';
import {
  FormField,
  FieldLabel,
  StyledSelect,
} from './FormSelect.styles';

export interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
}

const FormSelect = ({
  name,
  label,
  options,
  placeholder,
  disabled = false,
}: FormSelectProps) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && Boolean(meta.error);

  return (
    <FormField>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      <StyledSelect
        {...field}
        id={name}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>

      <div id={hasError ? `${name}-error` : undefined}>
        <FormError name={name} />
      </div>
    </FormField>
  );
};

export default FormSelect;