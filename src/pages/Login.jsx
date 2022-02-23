import React, { useState } from 'react';

import NumKeyboard from '../components/NumKeyboard';

const Login = () => {

  const [keyboard, setKeyboard] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [key, setKey] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [errors, setErrors] = useState({});

  const showKeyboard = () => setKeyboard(prevState => !prevState);

  const togglePassword = () => setVisibility(prevState => !prevState);

  const handlePassword = (e) => {
    setKey(key.concat(e.target.innerText));
  }

  const handleDelete = () => {
    if (key.length) {
      setKey(str => str.slice(0, -1))
    }
    return;
  }

  const validationsForm = (dniInput, passInput) => {
    const errors = {};
    let regexDni = /^[0-9]{7,10}$/;

    if (!dniInput.trim()) {
      errors.dni = "El campo 'DNI' es requerido";
    } else if (!regexDni.test(dniInput.trim())) {
      errors.dni = "El campo 'DNI' solo acepta hasta 10 digitos numericos";
    }

    if (!passInput.trim()) {
      errors.pass = "El campo 'pass' debe estar lleno";
    } else if (passInput.length < 6) {
      errors.dni = "El campo 'pass' debe contener como minimos 6 digitos";
    } else if (passInput.length > 6) {
      errors.dni = "El campo 'pass' NO debe exceder los 6 digitos";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(() => validationsForm(idNumber, key));

    if (Object.keys(errors).length === 0) {
      console.log('formulario enviado');
    } else {
      console.log('formulario NO enviado');
    }
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
          onChange={(e) => setIdNumber(e.target.value)}
          className="input-login-form"
          value={idNumber}
        />
        {errors.dni && <p className="error-login-form">{errors.dni}</p>}

        <label
          htmlFor="pass"
          className="label-login-form"
        >Password:</label>
        <div
          className="input-login-form"
        >
          <input
            id="pass"
            type={visibility ? "text" : "password"}
            placeholder="Escribe tu password"
            name="pass"
            className="input-pass"
            onClick={showKeyboard}
            value={key}
            readOnly
          />

          <button
            onClick={togglePassword}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" /></svg>
          </button>
        </div>
        {errors.pass && <p className="error-login-form">{errors.pass}</p>}

        {keyboard ? <div><NumKeyboard handlePassword={handlePassword} handleDelete={handleDelete} /></div> : null}

      </form>
      <p
        className="forget-pass"
      >¿Olvidaste tu clave?</p>
    </div>
  )
}

export default Login;