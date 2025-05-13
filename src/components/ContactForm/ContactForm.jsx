import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const initialValues = {
  contactName: '',
  phoneNumber: '',
};

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
});

export default function ContactForm({ onClickSubmit }) {
  const contactNameId = useId();
  const phoneNumberId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onClickSubmit(values);
        actions.resetForm();
      }}
      validationSchema={ContactSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={contactNameId} className={styles.label}>
          Name
        </label>
        <Field
          type="text"
          name="contactName"
          className={styles.input}
          id={contactNameId}
        />
        <p className={styles.prompt}>Min length: 3, Max length: 50</p>
        <ErrorMessage
          className={styles.error}
          name="contactName"
          component="span"
        />
        <label htmlFor={phoneNumberId} className={styles.label}>
          Number
        </label>
        <Field
          type="tel"
          name="phoneNumber"
          className={styles.input}
          id={phoneNumberId}
        />
        <p className={styles.prompt}>XXX-XX-XX</p>
        <ErrorMessage
          className={styles.error}
          name="phoneNumber"
          component="span"
        />

        <button type="submit" className={styles.btnAdd}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
