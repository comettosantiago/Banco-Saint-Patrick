import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ text, route }) => {
  return (
    <div className='container-btn'>
      <Link type="button" className="btn main-btn" to={`/${route}`}>
        {text}
      </Link>
    </div>
  )
}

export default Button;
