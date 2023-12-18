import { Field, ErrorMessage } from 'formik';

interface InputProps {
  type: string;
  label: string; // Add the 'label' prop here
  name: string;
  width: string;
}

function Input(props: InputProps) {
  const { label, name, width, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
