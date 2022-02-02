import React, { useState } from 'react';

import PasswordButton from '../components/PasswordButton';

const initialState = { display: "" };

const NumKeyboard = ({handlePassword, handleDelete}) => {
  
  const [password,setPassword] = useState(initialState);
  const [passwordShown, setPasswordShown] = useState(false);
  const [showKeyboard, setKeyboard] = useState(false)

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleClickButton = (e) => {
    setPassword((prev) => ({
      display: prev.display.concat(e.target.getAttribute("data-value"))
    }));
  }

  const handleClickDel = () => {
    setPassword((prev) => ({
      display: prev.display.slice(0, -1)
    }));
  };

  const handleInput = () => {
  };

  function showKeyboardButton(){
    setKeyboard({ showKeyboard: true });
  }
  
  return (
    <div className='container'>
      {/* <div className='login-top' >
        <div><label className='login-pin'>Pin:</label></div>
        <input onChange={handleInput} onClick={showKeyboardButton} className='input-password' type={passwordShown ? "text" : "password"} class="input-password px-4 py-3 border border-slate-300" placeholder='Ingrese su contraseña' value={password.display} readonly="readonly" maxLength="4" minLength="0"></input>
                    
        <button className='btn-toggle-password' onClick={togglePassword}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
        </button>
      </div> */}
      <div className='container-keyboard'>
      {/* {showKeyboard &&  */}
        <div className='buttons-keyboard grid grid-cols-3 gap-4 w-48'>
          <div><PasswordButton onClick={handlePassword} label="1" value="1"/></div>
          <div><PasswordButton onClick={handlePassword} label="2" value="2"/></div>
          <div><PasswordButton onClick={handlePassword} label="3" value="3"/></div>
          <div><PasswordButton onClick={handlePassword} label="4" value="4"/></div>
          <div><PasswordButton onClick={handlePassword} label="5" value="5"/></div>
          <div><PasswordButton onClick={handlePassword} label="6" value="6"/></div>
          <div><PasswordButton onClick={handlePassword} label="7" value="7"/></div>
          <div><PasswordButton onClick={handlePassword} label="8" value="8"/></div>
          <div><PasswordButton onClick={handlePassword} label="9" value="9"/></div>
          <div></div>
          <div><PasswordButton onClick={handlePassword} label="0" value="0"/></div>
          <div className='btn-delete'>
          <button onClick={handleDelete}>
            <img src="https://www.svgrepo.com/show/345676/delete-back-2.svg" alt='del' aria-hidden="true" ></img>
            </button>
          </div>
        </div>
      {/* } */}
        </div> 
      </div>
  )
}

export default NumKeyboard