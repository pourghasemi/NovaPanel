
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

import type { CreateProductPayload } from '@/services/productService';
import { handleApiError } from '@/services/handleApiError';

import FormInput from '@/share/FormInput';
import FormSelect from '@/share/FormSelect';
import FormTextarea from '@/share/FormTextarea';

import { getProductValidationSchema } from './ProductForm.validation';
import {
  FormContainer,
  FormActions,
  SubmitButton,
  CancelButton,
} from './ProductForm.styles';

interface ProductFormProps {
  categories: string[];
  onSubmit: (product: CreateProductPayload) => Promise<void>;
  onCancel: () => void;
}

interface ProductFormValues {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const ProductForm = ({
  categories,
  onSubmit,
  onCancel,
}: ProductFormProps) => {
  const { t } = useTranslation();

  const initialValues: ProductFormValues = {
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  };

  const handleSubmit = async (values: ProductFormValues) => {
    try {
      await onSubmit({
        ...values,
        price: Number(values.price),
      });

      toast.success(t('products.createSuccess'));
    } catch (error) {
      toast.error(handleApiError(error, t));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getProductValidationSchema(t)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            <FormInput
              name="title"
              label={t('products.productName')}
              placeholder={t('products.productName')}
            />

            <FormInput
              name="price"
              label={t('products.price')}
              type="number"
              placeholder={t('products.price')}
            />

            <FormSelect
              name="category"
              label={t('products.category')}
              placeholder={t('products.selectCategory')}
              options={categories.map((category) => ({
                value: category,
                label: category,
              }))}
            />

            <FormInput
              name="image"
              label={t('products.imageUrl')}
              placeholder={t('products.imageUrl')}
            />

            <FormTextarea
              name="description"
              label={t('products.description')}
              placeholder={t('products.description')}
              rows={5}
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

export default ProductForm;
