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
    errors.pin = "El campo 'PIN' no debe contener menos o más de 6 números";
  }

  return errors;
}

const Login = () => {

  const [keyboard, setKeyboard] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [key, setKey] = useState("");

  const {
    form,
    errors,
    loading,
    // response,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(initialForm, validationsForm);

  const showKeyboard = () => setKeyboard(prevState => !prevState);

  const togglePassword = () => setVisibility(prevState => !prevState);

  const handlePassword = (e) => {
    setKey(key.concat(e.target.innerText));
  }

  const handleDelete = (e) => {
    if(key.length){
      setKey(str => str.slice(0, -1))
    }
    return;
  }

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
          type={visibility ? "text" : "password"}
          placeholder="Escribe tu pin" 
          name="pin"
          onBlur={handleBlur}
          // value={form.password}
          required
          className="input-login-form"
          onClick={showKeyboard}
          onChange={handleChange}
          value={key}
          />
          <button
            onClick={togglePassword}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
          </button>
        {errors.pin && <p className="error-login-form">{errors.pin}</p>}
        
        {keyboard ? <div><NumKeyboard handlePassword={handlePassword} handleDelete={handleDelete}/></div> : null}

        {/* <input type="submit" value="ENVIAR"/> */}
      </form>
        <p
          className="forget-pass"
        >¿Olvidaste tu clave?</p>
    </div>
  )
}

export default Login;