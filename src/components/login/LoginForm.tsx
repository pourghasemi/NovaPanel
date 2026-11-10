
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loginUser } from '@/store/slices/authSlice';

import {
  FormContainer,
  Logo,
  Title,
  Subtitle,
  FormGroup,
  StyledField,
  PasswordWrapper,
  PasswordToggle,
  ErrorText,
  ApiError,
  SubmitButton,
} from './LoginForm.styles';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginFormValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('login.usernameRequired'),
    password: Yup.string().required('login.passwordRequired'),
  });

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      navigate('/dashboard');
    } catch {
      // Error is stored in Redux
    }
  };

  return (
    <FormContainer>
      <Logo>NOVA</Logo>

      <Title>{t('login.title')}</Title>
      <Subtitle>{t('login.subtitle')}</Subtitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <label htmlFor="username">
              {t('login.username')}
            </label>

            <StyledField
              id="username"
              name="username"
              type="text"
              placeholder={t('login.username')}
              autoComplete="username"
            />

            <ErrorMessage name="username">
              {(message) => <ErrorText>{t(message)}</ErrorText>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup>
            <label htmlFor="password">
              {t('login.password')}
            </label>

            <PasswordWrapper>
              <StyledField
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={t('login.password')}
                autoComplete="current-password"
              />

              <PasswordToggle
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </PasswordToggle>
            </PasswordWrapper>

            <ErrorMessage name="password">
              {(message) => <ErrorText>{t(message)}</ErrorText>}
            </ErrorMessage>
          </FormGroup>

          {error && <ApiError>{t(error)}</ApiError>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? t('common.loading') : t('login.submit')}
          </SubmitButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
