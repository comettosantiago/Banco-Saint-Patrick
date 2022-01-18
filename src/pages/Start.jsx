import React from 'react';

import logo1 from '../assets/images/cardStart.png';
import logo2 from '../assets/images/transac.png';
import InformativeScreens from '../components/InformativeScreens';

const initialState = [
  {
    id: 1,
    title: 'Accede fácil',
    content: 'Ingresa en cuestión de segundos a nuestra plataforma online y descubre todos los beneficios',
    img: logo1
  },
  {
    id: 2,
    title: 'Transfiere',
    content: 'Realiza operaciones en cuestión de minutos desde la comodidad de donde estes y con total seguridad',
    img: logo2
  }
];

const Start = () => {
  return (
    <>
      {
        initialState.map(elem=><InformativeScreens key={elem.id} info={elem}/>)
      }
    </>
  )
}

export default Start
