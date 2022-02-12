import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/FavoriteItems.css';

const FavoriteItems = () => {
  return (
    <>
      <section className='favorite-items-container'>
        <p>Claudia</p>
        <Icon icon="dashicons:arrow-up-alt2" color="#706e6e" height="20" rotate={1} />
      </section>
      <hr className='favorite-divider-line' />
    </>
  )
}

export default FavoriteItems