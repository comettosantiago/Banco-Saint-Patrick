import React from 'react';

import NavTransfer from '../components/NavTransfer';

const ConfirmTransfer = () => {
  return (
    <>
      <NavTransfer text='Enviar a' />
      <section className='containers'>
        <article>
          <h2>Miguel Perez Lopes</h2>
          <b>Nª 1111 - 1111 - 1111 - 1111</b>
          <p>Moneda dolares</p>
        </article>
        <hr/>
        <p>Cuenta de origen</p>
        <span>xxxx-xxxx-xxxx</span>
        <p>Monto</p>
        <span>S/ 100</span>
        <p>Monto</p>
        <span>Pagos</span>
      </section>
    </>
  )
}

export default ConfirmTransfer
