import * as Yup from 'yup';
import type { TFunction } from 'i18next';

export const getUserValidationSchema = (t: TFunction) =>
  Yup.object({
    firstName: Yup.string()
      .trim()
      .required(t('users.validation.firstNameRequired'))
      .min(2, t('users.validation.minCharacters', { count: 2 })),

    lastName: Yup.string()
      .trim()
      .required(t('users.validation.lastNameRequired'))
      .min(2, t('users.validation.minCharacters', { count: 2 })),

    email: Yup.string()
      .trim()
      .required(t('users.validation.emailRequired'))
      .email(t('users.validation.invalidEmail')),

    username: Yup.string()
      .trim()
      .required(t('users.validation.usernameRequired'))
      .min(3, t('users.validation.minCharacters', { count: 3 })),

    password: Yup.string()
      .required(t('users.validation.passwordRequired'))
      .min(6, t('users.validation.passwordMinLength', { count: 6 })),

    phone: Yup.string()
      .required(t('users.validation.phoneRequired'))
      .matches(
        /^[0-9+\-\s()]{8,20}$/,
        t('users.validation.invalidPhone'),
      ),
  });