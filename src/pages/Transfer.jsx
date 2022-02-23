import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

import '../styles/Transfer.css';
import NavTransfer from '../components/NavTransfer';
import FavoriteItems from '../components/FavoriteItems';

const Transfer = () => {
  return (
    <>
      <NavTransfer text='Tranferir'/>
      <section className='containers'>
        <p className='title-text'>Elige a quién tranferir</p>
        <Link to="/transfer/process" className='choose-transfer'>Tranferir a otros<Icon icon="akar-icons:circle-plus" color="#f6b54d" height="20" width="20" rotate={1} /></Link>
        <div className='favorites-group'>
          <p className='favorites-title'>Favoritos</p>
        </div>
        <FavoriteItems />
      </section>
    </>
  )
}

export default Transfer
