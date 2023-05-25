import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const offices = ['Office A', 'Office B', 'Office C'];
const designations = ['Designation 1', 'Designation 2', 'Designation 3'];
const statuses = ['Status 1', 'Status 2', 'Status 3'];

const staffEntryForm = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    office: '',
    designation: '',
    status: ''
  };

  const handleSubmit = (values) => {
    console.log(values);
    // You can perform further actions with the form values
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.phone) {
      errors.phone = 'Phone is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm}>
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="office">Office</label>
          <Field as="select" id="office" name="office">
            <option value="">Select an office</option>
            {offices.map((office) => (
              <option key={office} value={office}>
                {office}
              </option>
            ))}
          </Field>
          <ErrorMessage name="office" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="designation">Designation</label>
          <Field as="select" id="designation" name="designation">
            <option value="">Select a designation</option>
            {designations.map((designation) => (
              <option key={designation} value={designation}>
                {designation}
              </option>
            ))}
          </Field>
          <ErrorMessage name="designation" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <Field as="select" id="status" name="status">
            <option value="">Select a status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </Field>
          <ErrorMessage name="status" component="div" className="error" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default staffEntryForm;
