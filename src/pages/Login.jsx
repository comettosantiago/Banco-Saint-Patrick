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
    <div>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dni">Numero de Identidad:</label>
        <input 
          id="dni"
          type="text" 
          placeholder="Escribe tu DNI" 
          name="dni"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.dni}
          required
          />
        {errors.dni && <p>{errors.dni}</p>}

        <label htmlFor="pin">Pin:</label>
        <input 
          id="pin"
          type="password" 
          placeholder="Escribe tu pin" 
          name="pin"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
          />
        {errors.pin && <p>{errors.pin}</p>}

        {/* <input type="submit" value="ENVIAR"/> */}
      </form>
        <div><NumKeyboard /></div>
    </div>
  )
}

export default Login