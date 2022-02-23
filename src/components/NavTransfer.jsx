import React from 'react';
import { Icon } from '@iconify/react';

import '../styles/NavTransfer.css'

function NavTransfer({text}) {
  return (
    <>
      <section className='nav-transfer-container'>
        <Icon icon="akar-icons:arrow-left" color="#5dbba2" height="20" rotate={2} hFlip={true} />
        <h2 className='transfer-title-text'>{text}</h2>
        <Icon icon="carbon:close" color="#5dbba2" height="20" rotate={1} />
      </section>
      <hr className='divider-line'/>
    </>
  )
}

export default NavTransfer;