import React from 'react';
import { Icon } from '@iconify/react';

import NavTransfer from '../components/NavTransfer';

const Transfer = () => {
  return (
    <>
      <NavTransfer/>
      {/* <FavoriteItems/> */}
      <section className='container'>
        <p>Elige a quién tranferir</p>
        <button>Tranferir a otros<Icon icon="akar-icons:circle-plus" color="#f6b54d" height="20" rotate={1} /></button>
        <div>
          <p>Favoritos</p>
          <hr/>
        </div>
      </section>
    </>
  )
}

export default Transfer
