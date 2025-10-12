import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Data Submitted:", values);
    alert("Formik form submitted successfully!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Username:</label><br />
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Email:</label><br />
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Password:</label><br />
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
