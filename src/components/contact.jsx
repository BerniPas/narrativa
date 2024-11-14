import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import React, { useRef }  from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export const Contact = (props) => {
  const formRef = useRef();

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      console.log(result.text);
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      setErrors({ submit: "Error enviando el correo, por favor intente de nuevo." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Envíanos un Mail</h2>
                <p>
                  Por favor, rellene el siguiente formulario para enviarnos un correo electrónico y nos pondremos en contacto con usted lo antes posible.
                </p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors }) => (
                  <Form  ref={formRef}>
                    <div className="form-group">
                      <label htmlFor="name">Nombre</label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage name="name" component="div" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <Field type="email" name="email" className="form-control" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Mensaje</label>
                      <Field as="textarea" name="message" className="form-control"/>
                      <ErrorMessage name="message" component="div" />
                    </div>
                    {errors.submit && <div>{errors.submit}</div>}
                    <button className="btn btn-custom btn-lg" type="submit" style={{marginRight: "80px"}} disabled={isSubmitting}>
                      Enviar
                    </button>
                    <button className="btn btn-custom btn-lg" type="reset" disabled={isSubmitting}>
                      Borrar
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Info de Contacto</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/" } target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
