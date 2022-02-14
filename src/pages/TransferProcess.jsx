import React from 'react';

import NavTransfer from '../components/NavTransfer';
import Button from '../components/Button';

const TransferProcess = () => {
  return (
    <>
      <NavTransfer text='Nueva transferencia' />
      <section className='containers'>
        <form>
          <label
            htmlFor='destinationAccount'
          >Ingresa el numero de cuenta</label>
          <input
            id='destinationAccount'
            type='text'
            name='destinationAccount'
          />

          <label
            htmlFor='rootAccount'
          >Cuenta de origen</label>
          <select
            id='rootAccount'
            name='rootAccount'
          >
            <option value="none"></option>
            <option value="cuenta1">cuenta1</option>
            <option value="cuenta2">cuenta2</option>
          </select>

          <label
            htmlFor='reason'
          >Motivo</label>
          <input
            id='reason'
            type='text'
            name='reason'
          />

          <label
            htmlFor='amount'
          >Monto</label>
          <input
            value='US$1.00'
          />

          <Button text='Continuar' route='transfer/confirm'/>
          <Button text='Cancelar' route='main'/>
        </form>
      </section>
    </>
  )
}

export default TransferProcess
