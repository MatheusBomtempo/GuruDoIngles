import React from 'react';
import './Formulario.css';
import Navbar1 from '../../componentes/Navbar/Navbar1';
import Typeform from '../../componentes/TypeForm/TypeForm';

const Formulario = () => {
  return (
    <div className='formWrapper'>
      <div className='navv'>
        <Navbar1 />
      </div>
      <div className='formCorpo'>
        <Typeform />
      </div>
    </div>
  );
};

export default Formulario;
