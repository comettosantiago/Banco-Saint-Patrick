import React, { useState } from 'react';

import { useForm } from '../assets/utils/useForm';
import NumKeyboard from '../components/NumKeyboard';

const initialForm = {
  dni: '',
  pin: ''
}

const validationsForm = (form) => {
  let errors = {};
  let regexDni = /^[0-9]{1,12}$/;
  let regexPin = /^[0-9]{6}$/;

  if(!form.dni.trim()){
    errors.dni = "El campo 'DNI' es requerido";
  } else if(!regexDni.test(form.dni.trim())){
    errors.dni = "El campo 'DNI' solo acepta hasta 12 números";
  }

  if(!form.pin.trim()){
    errors.pin = "El campo 'PIN' es requerido";
  } else if(!regexPin.test(form.pin.trim())){
    errors.pin = "El campo 'PIN' no debe contener 6 números";
  }

  return errors;
}

const Login = () => {

  const {
    form,
    errors,
    loading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm);

  return (
    <div
    className="login-form"
    >
      <h2 className="login-title">Ingresa tus datos</h2>
      <form
        onSubmit={handleSubmit}
        className="container-login-form"
      >
        <label
          htmlFor="dni"
          className="label-login-form"
        >Numero de Identidad:</label>
        <input 
          id="dni"
          type="text" 
          placeholder="Escribe tu DNI" 
          name="dni"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.dni}
          required
          className="input-login-form"
          />
        {errors.dni && <p className="error-login-form">{errors.dni}</p>}

        <label
          htmlFor="pin"
          className="label-login-form"
        >Pin:</label>
        <input 
          id="pin"
          type="password" 
          placeholder="Escribe tu pin" 
          name="pin"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
          className="input-login-form"
          />
        {errors.pin && <p className="error-login-form">{errors.pin}</p>}

        {/* <input type="submit" value="ENVIAR"/> */}
      </form>
        {/* <div><NumKeyboard /></div> */}
        <p
          className="forget-pass"
        >¿Olvidaste tu clave?</p>
    </div>
  )
}

export default Login;