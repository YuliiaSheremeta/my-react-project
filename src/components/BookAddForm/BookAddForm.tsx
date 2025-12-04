import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./BookAddForm.module.css";
import { BookFormValuesType } from "../services/bookService";

type BookFormPropsType = {
  initialValues: BookFormValuesType;
  onSubmit: (values: BookFormValuesType) => void | Promise<void>;
};

export default function BookForm({
  initialValues,
  onSubmit,
}: BookFormPropsType) {
  const id = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <label htmlFor={`${id}-name`} className={css.label}>
            Name of the book
          </label>
          <Field
            id={`${id}-name`}
            type="text"
            name="name"
            className={css.input}
          />
          <label htmlFor={`${id}-category`} className={css.label}>
            Choose a category :
          </label>
          <Field
            as="select"
            id={`${id}-category`}
            name="category"
            className={css.select}
          >
            <option value="">--Choose--</option>
            <option value="hystory">Hystory</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="adventure">Adventure</option>
            <option value="biography">Biography</option>
          </Field>
        </fieldset>
        <button type="submit" className={css.button}>
          Send
        </button>
      </Form>
    </Formik>
  );
}
