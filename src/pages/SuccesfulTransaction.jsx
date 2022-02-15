import React from 'react';
import { Icon } from '@iconify/react';

import sucessOperation from '../assets/images/sucessOperation.png';

const SuccesfulTransaction = () => {
  return (
    <section className='containers'>
      <div>
        <img src={sucessOperation} alt='sucess logo'/>
        <h2>Miguel Perez Lopes</h2>
        <p>Recibió:</p>
        <span>S/ 100</span>
        <p>viernes 14 de enero 2021 10:39</p>
      </div>
      <div>
        <p>Destino</p>
        <b>Miguel Perez Lopes</b>
        <p>Nª 191 256254654 0 56</p>
        <p>Moneda soles</p>
        <hr/>
        <p>Origen</p>
        <b>Ahorro soles</b>
        <p>Nª 191 456465465 1213</p>
        <div>
          <div>
            <Icon icon="bx:download" color="#f6b54d" height="20" />
            <p>descargar</p>
          </div>
          <div>
            <Icon icon="bytesize:print" color="#f6b54d" height="20" />
            <p>Imprimir</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccesfulTransaction
