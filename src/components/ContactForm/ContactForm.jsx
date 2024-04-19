import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'







const ContactForm = ({ initialValues, onAddContact, validationSchema }) => {

     const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    const nextContact = {
      ...values,
      id: nanoid(),
    }
    onAddContact(nextContact);
    actions.resetForm();
  }
  

    return (
            <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      onSubmit={handleSubmit}
       
    >
      <Form>
        <div className={css.formItem}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field className={css.formField} type="text" name="name" id={nameFieldId} placeholder='name' />
          <ErrorMessage name='name' component='p' className={css.errorMessage} />
          </div>

        <div className={css.formItem}>
          <label htmlFor={telFieldId}>Number</label>
            <Field className={css.formField} type="tel" name="number" id={telFieldId} placeholder='number' />
          <ErrorMessage name='number' component='p' className={css.errorMessage} />
            
        </div>
        <button className={css.addButton} type="submit">Add contact</button>
      </Form>
    </Formik>
    )
}
export default ContactForm;