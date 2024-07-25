import React from 'react';
import './Formulario.css';
import Navbar1 from '../../componentes/Navbar/Navbar1';
import GoogleForm from '../../componentes/GoogleForm/GoogleForm';
// import Typeform from '../../componentes/TypeForm/TypeForm';

const Formulario = () => {
  return (
    <div className='formWrapper'>
      <div className='navv'>
        <Navbar1 />
      </div>
      <div className='formCorpo'>
        {/* <Typeform /> */}
        <GoogleForm/>
      </div>
    </div>
  );
};

export default Formulario;
