import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./styles.css";
import * as yup from "yup";
 
const ExemploTrybe = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
      name: ""
    },

    // /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\/).+$/

    validationSchema: yup.object({
      code: yup
      .string()
      .trim()
      .matches(/^\d+\/\d+$/, 'Deve conter números e uma barra (/) no formato 12345/67')
      .min(8, 'Deve conter 8 caracteres')
      .max(8, 'Deve conter 8 caracteres')
      .required('O código é obrigatório.'),
      name: yup
        .string()
        .trim()
        .required('O nome é obrigatório.')
    }),
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form">
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="code">Código (formato xxxxx/xx)</label>
      <input
        id="code"
        name="code"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.code}
      />
      {formik.touched.code && formik.errors.code ? (
        <div>{formik.errors.code}</div>
      ) : null}
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};
 
function App() {
  return <ExemploTrybe />;
}
 
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);