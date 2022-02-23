import React from 'react';

import NavTransfer from '../components/NavTransfer';
import Button from './../components/Button';

const ConfirmTransfer = () => {
  return (
    <>
      <NavTransfer text='Enviar a' />
      <section className='containers'>
        <article className='card-description'>
          <h2><strong>Miguel Perez Lopes</strong></h2>
          <p>Nª 1111 - 1111 - 1111 - 1111</p>
          <p>Moneda dolares</p>
        </article>
        <hr/>
        <section className='detail-box'>
          <p>Cuenta de origen</p>
          <span>xxxx-xxxx-xxxx</span>
          <p>Monto</p>
          <span>S/ 100</span>
          <p>Monto</p>
          <span>Pagos</span>
        </section>
        <section className='btn-box'>
          <Button text='Continuar' route='transfer/confirm'/>
          <Button text='Cancelar' route='main' type='second-btn'/>
        </section>
      </section>
    </>
  )
}

export default ConfirmTransfer
