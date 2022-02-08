import React from 'react';

const InformativeScreens = ({info}) => {
  return (
    <section className='container-info'>
      <div className='container-top'>
        <img src={info.img} alt={info.title} />
      </div>
      <div className='container-bottom'>
        <h2 className='slide-title'>{info.title}</h2>
        <p className='slide-content'>{info.content}</p>
      </div>
    </section>
  )
}

export default InformativeScreens;