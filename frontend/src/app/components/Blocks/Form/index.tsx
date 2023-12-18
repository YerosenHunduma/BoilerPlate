import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log('Form data', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormikControl
          control="input"
          type="email"
          label="Email"
          name="email"
          width="200px"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikContainer;
