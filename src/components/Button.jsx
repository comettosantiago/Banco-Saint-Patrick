import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ text, route, type='main-btn' }) => {
  return (
    <div className='container-btn'>
      <Link type="button" className={`btn ${type}`} to={`/${route}`}>
        {text}
      </Link>
    </div>
  )
}

export default Button;
