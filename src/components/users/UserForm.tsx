
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import type { CreateUserPayload } from '@/services/userService';
import { handleApiError } from '@/services/handleApiError';

import FormInput from '@/share/FormInput';

import { getUserValidationSchema } from './UserForm.validation';
import {
  FormContainer,
  FormActions,
  SubmitButton,
  CancelButton,
} from './UserForm.styles';

interface UserFormProps {
  onSubmit: (user: CreateUserPayload) => Promise<void>;
  onCancel: () => void;
}

interface UserFormValues {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  phone: string;
}

const UserForm = ({ onSubmit, onCancel }: UserFormProps) => {
  const { t } = useTranslation();

  const initialValues: UserFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    phone: '',
  };

  const handleSubmit = async (values: UserFormValues) => {
    try {
      const user: CreateUserPayload = {
        email: values.email.trim(),
        username: values.username.trim(),
        password: values.password,
        phone: values.phone.trim(),
        name: {
          firstname: values.firstName.trim(),
          lastname: values.lastName.trim(),
        },
      };

      await onSubmit(user);

      toast.success(t('users.createSuccess'));
    } catch (error) {
      toast.error(handleApiError(error, t));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getUserValidationSchema(t)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <FormInput
              name="firstName"
              label={t('users.firstName')}
              placeholder={t('users.firstName')}
            />

            <FormInput
              name="lastName"
              label={t('users.lastName')}
              placeholder={t('users.lastName')}
            />

            <FormInput
              name="email"
              label={t('users.email')}
              type="email"
              placeholder={t('users.email')}
            />

            <FormInput
              name="username"
              label={t('users.username')}
              placeholder={t('users.username')}
            />

            <FormInput
              name="password"
              label={t('users.password')}
              type="password"
              placeholder={t('users.password')}
            />

            <FormInput
              name="phone"
              label={t('users.phone')}
              placeholder={t('users.phone')}
            />

            <FormActions>
              <CancelButton
                type="button"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                {t('common.cancel')}
              </CancelButton>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? t('common.saving')
                  : t('common.save')}
              </SubmitButton>
            </FormActions>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
