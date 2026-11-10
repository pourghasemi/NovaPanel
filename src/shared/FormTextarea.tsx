import { useField } from 'formik';

import FormError from './FormError';
import {
  FormField,
  FieldLabel,
  StyledTextarea,
} from './FormTextarea.styles';

interface FormTextareaProps {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

const FormTextarea = ({
  name,
  label,
  placeholder,
  rows = 4,
  disabled = false,
}: FormTextareaProps) => {
  const [field, meta] = useField(name);

  const hasError = meta.touched && Boolean(meta.error);

  return (
    <FormField>
      <FieldLabel htmlFor={name}>{label}</FieldLabel>

      <StyledTextarea
        {...field}
        id={name}
        rows={rows}
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

export default FormTextarea;