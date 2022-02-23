import React from 'react'
import Img404 from '../assets/images/404.png';
import Button from '../components/Button';

const Error404 = () => {
  return (
    <>
      <div className="cntImgError">
        <img src={Img404} alt="" />
      </div>
      <div className="info">
        <h2>Oops!</h2>
        <p>No encontramos lo que buscabas.</p>
        <Button text={'Ir a login'} route={'login'} />
      </div>
    </>
  )
}

export default Error404;
