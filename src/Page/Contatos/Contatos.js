import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Navbar1 from '../../componentes/Navbar/Navbar1'

const Contatos = () => {
  return (

    <>
    <Navbar1></Navbar1>
    <div className="min-h-[91vh] flex flex-col justify-center items-around bg-teal-50">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl pt-10">
          ACOMPANHE
        </h2>
      </div>
      <div className="flex justify-around items-center mx-10 md:mx-65 mt-20">
        <div className="hover:scale-105 transition duration-300 ease-in-out">
          <a href="https://instagram.com/gurudoingles?igshid=MzRlODBiNWFlZA==" target="_blank" rel="external">
            <FontAwesomeIcon
              className="site-form-item-icon text-blue-950 text-6xl md:text-8xl "
              icon={faInstagram}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition duration-300 ease-in-out">
          <a href="https://youtube.com/@gurudoingles4823" target="_blank" rel="external">
            <FontAwesomeIcon
              className="site-form-item-icon text-red-700 text-6xl md:text-8xl"
              icon={faYoutube}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition duration-300 ease-in-out">
          <a href="https://www.tiktok.com/@gurudoingles?_t=8erZz8wNeuj&_r=1" target="_blank" rel="external">
            <FontAwesomeIcon
              className="site-form-item-icon text-blue-950 text-6xl md:text-8xl"
              icon={faTiktok}
            />
          </a>
        </div>
        <div className="hover:scale-105 transition duration-300 ease-in-out">
          <a href="https://api.whatsapp.com/send?phone=5532991201804&text=Oii%20Raul,%20tudo%20bem?%20Gostaria%20de%20agendar%20uma%20entrevista%20para%20saber%20mais%20sobre%20o%20seu%20trabalho" target="_blank" rel="external">
            <FontAwesomeIcon
              className="site-form-item-icon text-green-500 text-6xl md:text-8xl"
              icon={faWhatsapp}
            />
          </a>
        </div>
      </div>
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-5xl pt-20 pb-10">
          NAS REDES SOCIAIS
        </h2>
      </div>
    </div>

    </>
  );
};

export default Contatos;
