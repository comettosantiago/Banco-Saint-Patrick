import React from 'react';

import NavTransfer from '../components/NavTransfer';
import Button from './../components/Button';

const TransferProcess = () => {
  return (
    <>
      <NavTransfer text='Nueva transferencia' />
      <section className='containers'>
        <form className="form-detail">
          <section className='transfer-detail'>
            <p htmlFor='destinationAccount'>Ingresa el numero de cuenta</p>
            <input id='destinationAccount' type='number' name='destinationAccount' placeholder='Número de cuenta'/>
            <p htmlFor='rootAccount'>Cuenta de origen</p>
            <select id='rootAccount' name='rootAccount'>
              <option value="none">Elige una opcion</option>
              <option value="cuenta1">cuenta1</option>
              <option value="cuenta2">cuenta2</option>
            </select>
            <p htmlFor='reason'>Motivo</p>
            <input id='reason' type='text' name='reason' placeholder='Escribe una nota' maxlength='30'/>
          </section>
          <section className='amount-detail'>
            <p htmlFor='amount'>Monto</p>
            <input value='US$1.00'/>
          </section>
        </form>

        <section className='btn-section'>
          <Button text='Continuar' route='transfer/confirm'/>
          <Button text='Cancelar' route='main' type='second-btn'/>
        </section>

      </section>
    </>
  )
}

export default TransferProcess
