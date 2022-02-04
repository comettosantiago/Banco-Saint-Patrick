import React from 'react';

import LogoApp from '../assets/images/logoHomebanking.png';
import Button from './Button';

const Logo = () => {
  return (
    <div className='container-main-logo'>
      <figure>
        <img className='logo' src={LogoApp} alt="logo Banco Saint Patrick" />
        <figcaption>
          <span className='text-bank'>BANCO</span>
          <span className='text-name'>SAINT PATRICK</span>
        </figcaption>
      </figure>
      <Button text='Empezar' route='login'/>
    </div>
  )
}

export default Logo;