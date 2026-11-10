import { useField } from 'formik';

import FormError from './FormError';
import {
  FormField,
  FieldLabel,
  StyledInput,
} from './FormInput.styles';

interface FormInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  disabled = false,
}: FormInputProps) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && Boolean(meta.error);

  return (
    <FormField>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      <StyledInput
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />

      <div id={hasError ? `${name}-error` : undefined}>
        <FormError name={name} />
      </div>
    </FormField>
  );
};

export default FormInput;