
import { ErrorMessage } from 'formik';

import { ErrorText } from './FormError.styles';

interface FormErrorProps {
  name: string;
}

const FormError = ({ name }: FormErrorProps) => {
  return (
    <ErrorMessage name={name}>
      {(message) => <ErrorText>{message}</ErrorText>}
    </ErrorMessage>
  );
};

export default FormError;
