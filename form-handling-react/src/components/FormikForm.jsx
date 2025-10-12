// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Registered with Formik:", values);
        alert("Formik registration successful!");
      }}
    >
      {() => (
        <Form className="flex flex-col gap-2 p-4">
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" className="text-red-500" />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
