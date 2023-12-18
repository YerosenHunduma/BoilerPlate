import { Field, ErrorMessage } from 'formik';

interface FormikControlProps {
  control: string;
  type: string;
  label: string;
  name: string;
  width: string;
}

function FormikControl(props: FormikControlProps) {
  const { control, type, label, name, width } = props;
  switch (control) {
    case 'input':
      return (
        <div className="form-control">
          <label htmlFor={name}>{label}</label>
          <Field id={name} name={name} />
          <ErrorMessage name={name} />
        </div>
      );
    default:
      return null;
  }
}

export default FormikControl;
