import * as Yup from 'yup';
import type { TFunction } from 'i18next';

export const getProductValidationSchema = (t: TFunction) =>
  Yup.object({
    title: Yup.string()
      .trim()
      .required(t('products.validation.productNameRequired'))
      .min(3, t('products.validation.minCharacters', { count: 3 })),

    price: Yup.number()
      .typeError(t('products.validation.priceMustBeNumber'))
      .required(t('products.validation.priceRequired'))
      .positive(t('products.validation.priceMustBePositive')),

    description: Yup.string()
      .trim()
      .required(t('products.validation.descriptionRequired'))
      .min(10, t('products.validation.minCharacters', { count: 10 })),

    category: Yup.string()
      .required(t('products.validation.categoryRequired')),

    image: Yup.string()
      .trim()
      .required(t('products.validation.imageRequired'))
      .url(t('products.validation.invalidUrl')),
  });