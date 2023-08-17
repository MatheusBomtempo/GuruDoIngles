import React from 'react';
// import './Prices.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faGift,
  faKey,
  faBook,
  faUserPen,
  faHandPointer
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Prices = () => {
  
  return (
    <div className="cardOut ">
      <h1 className="titulo3 mb-4 mt-4">
        ACESSO POR <span>6 MESES</span>
      </h1>

      <div className="cardCont pb-6">
        <div className="card2">
          <h1 className="pt-2">BÔNUS</h1>

          <h3 className="pb-2">
            <FontAwesomeIcon
              id="icons"
              className="site-form-item-icon text-yellow-500 text-2xl pl-2 bonusIco"
              icon={faKey}
            />
            1 mês extra de acesso
          </h3>

          <h3 className="pb-2">
            <FontAwesomeIcon
              id="icons"
              className="site-form-item-icon text-yellow-500 text-2xl pl-2 bonusIco"
              icon={faBook}
            />
            1 Caderno de exercícios
          </h3>

          <h3>
            <FontAwesomeIcon
              id="icons"
              className="site-form-item-icon text-yellow-500 text-2xl pl-2 bonusIco"
              icon={faUserPen}
            />
            3 Aulas particulares
          </h3>

          <h3>
            <FontAwesomeIcon
              id="icons"
              className="site-form-item-icon text-yellow-500 text-2xl pl-2 bonusIco"
              icon={faGift}
            />
            1 Curso extra
          </h3>
        </div>
        <div className="card1">
          <h1 className="preco">R$ 2497</h1>
          <h4>A vista</h4>
          <h4>Valor Único</h4>
          <h2>Ou</h2>
          <h1 className="preco pt-2">
            <span className="vermei  text-3xl font1">6x</span> 460,79
          </h1>
        </div>
      </div>

      <div>
        
      </div>
      
          <a href="https://pay.kiwify.com.br/pyOx7eu" className='w-full'>
            <button className=" botFilho">
              <a href="https://pay.kiwify.com.br/pyOx7eu" className="btnn">
                QUERO PARTICIPAR
                <FontAwesomeIcon
                  id="icons"
                  className="site-form-item-icon text-red-700 text-3xl pl-4"
                  icon={faHandPointer}
                />
              </a>
            </button>
          </a>
        
    </div>
  );
};

export default Prices;
