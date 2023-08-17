import React, { useState } from 'react';
import './FAQComponent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from "react-router-dom";
import duvidas from '../../imgs/duvidas2.png'

const FAQComponent = () => {
  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (index) => {
    if (activeBox === index) {
      setActiveBox(null);
    } else {
      setActiveBox(index);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('https://api.whatsapp.com/send?phone=5532991201804&text=Oii%20Raul,%20tudo%20bem?%20Gostaria%20de%20agendar%20uma%20entrevista%20para%20saber%20mais%20sobre%20o%20seu%20trabalho');
  };


  const faqData = [
    {
      question: 'Quanto tempo dura o curso?',
      answer:
        'O curso é programado para que o aluno esteja pronto para a prova em 30 semanas (6 meses), porém pode variar de acordo com o esforço do aluno e o tempo disponível para dedicação, podendo aumentar ou diminuir esse prazo.',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer:
        'O pagamento pode ser feito à vista ou dividido no cartão (em até 6x com acréscimo da taxa da operadora de pagamentos).',
    },
    {
      question: 'Um aluno iniciante pode fazer o curso?',
      answer:
        'O curso é voltado para alunos que já tenham um conhecimento de nível intermediário do idioma, pois não trabalhamos os conteúdos de base do idioma, focando 100% no que cai na certificação.',
    },
    {
      question: 'Como vou saber qual certificação fazer?',
      answer:
        'Durante as mentorias o Guru tem contato direto com todos os alunos, e de acordo com o rendimento nos simulados e os objetivos apresentados, o Guru orienta qual o melhor caminho seguir.',
    },
    {
      question: 'Caso eu não esteja pronto após o curso preciso comprar o curso novamente?',
      answer:
        'Para os alunos do Fast Certification que se dedicarem e cumprirem todo o cronograma do curso, porém não estejam 100% preparados para a prova, o Guru disponibilizará um mega desconto na renovação do plano seguindo um modelo de assinatura mensal por um valor especial.',
    },
  ];

  return (
    <div className="faq-container">
      <div className="titulo2">
        <h1 className="faq-title"><span className='branco'>Dúvidas</span> <span className='marelo'>frequentes</span></h1>
      </div>
      <div className="containerFaq">
        <div className="txtsEsq">
          <h1 className="sub-title">Ficou com alguma dúvida? <span className='bg-red-700 text-white p-2'>Fale Comigo!</span></h1>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`boxes ${activeBox === index ? 'active' : ''}`}
              onClick={() => toggleBox(index)}
            >
              <p className='question'>
                <FontAwesomeIcon
                    id="icons"
                    className="site-form-item-icon  text-2xl pr-2 mt-1"
                    icon={faCaretDown}
                  />{item.question}</p>
              <p className="answer mb-2">{activeBox === index && item.answer}</p>
            </div>
          ))}
          <div className="contact-button">
            <a className='w-full' href='https://api.whatsapp.com/send?phone=5532991201804&text=Oii%20Raul,%20tudo%20bem?%20Gostaria%20de%20agendar%20uma%20entrevista%20para%20saber%20mais%20sobre%20o%20seu%20trabalho' target="_blank">
              <button>
                <a className='text-2xl'>Fale Conosco <FontAwesomeIcon
                      id="icons"
                      className="site-form-item-icon  text-3xl text-green-400 pl-2 mt-1"
                      icon={faWhatsapp}
                    /></a>
              </button>
            </a>
          </div>
        </div>
        <div className="fotodir">
          <img src={duvidas} alt="duvidas?" />
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
