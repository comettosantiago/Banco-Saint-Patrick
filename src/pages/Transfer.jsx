import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/Transfer.css';
import NavTransfer from '../components/NavTransfer';
import FavoriteItems from '../components/FavoriteItems';

const Transfer = () => {
  return (
    <>
      <NavTransfer />
      <section className='container'>
        <p className='title-text'>Elige a quién tranferir</p>
        <button className='choose-transfer'>Tranferir a otros<Icon icon="akar-icons:circle-plus" color="#f6b54d" height="40" width="80" rotate={1} /></button>
        <div>
          <p>Favoritos</p>
          <hr />
        </div>
        <FavoriteItems />
      </section>
    </>
  )
}

export default Transfer
