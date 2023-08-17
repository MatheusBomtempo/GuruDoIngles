import React from 'react';
import { useState } from 'react';
import '../Cursos/Cursos.css';
// import Carousel1 from '../../componentes/Depoimentos/Depoimentos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import fundo from '../../imgs/flare1.jpg';

const Cursos = () => {


  return (
    <div className="backGrad">
      <img src={fundo}></img>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        
        <div className="mx-auto md:text-center">
          
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-white sm:text-6xl pt-16">
            Cursos
          </h1>
        </div>
        <ul
          role="list"
          className="mx-auto h-full mt-20 grid max-w-2xl grid-cols-1 gap-4 sm:gap-10 lg:mt-16 lg:max-w-none lg:grid-cols-2 items-center cartoes"
        >
          <li key=" ">
            <ul
              role="list"
              className="flex flex-col gap-y-6 sm:gap-y-8 max-w-xl items-center m-auto"
            >
              
              <li
                key=""
                className="hover:scale-105 transition duration-300 ease-in-out "
              >
                
                <a href="" target="_blank" rel="noreferrer">
                  <figure className="relative rounded-3xl bg-gray-600/50 p-6 shadow-xl shadow-slate-900/10 ">
                    <figcaption className="relative  flex items-center justify-between">
                      <div>
                       
                        <div className="font-bold text-4xl text-white py-3">
                          Fast Certification
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="mb-2">
                      <p className="text-lg tracking-tight text-white">
                        O{' '}
                        <span className="text-red-500 font-bold ">
                          Fast Certification
                        </span>{' '}
                        é um método que o Guru desenvolveu para os alunos que se
                        preparam para as provas de{' '}
                        <span className="text-red-500 font-bold">
                          Cambridge
                        </span>{' '}
                        conseguirem um excelente rendimento nos exames em poucos
                        meses de preparação.
                      </p>
                    </blockquote>

                    <a
                      className="flex text-center justify-center items-center	 bg-red-600 rounded-xl text-white font-bold text-2xl px-4 py-3 mt-8 hover:bg-blue-500 transition"
                      href="/dream"
                    >
                      Saiba Mais{' '}
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-yellow-200 pl-4 text-xl"
                        icon={faCheck}
                      />
                    </a>
                  </figure>
                </a>
              </li>
            </ul>
          </li>

          <li key="">
            <ul
              role="list"
              className="flex flex-col gap-y-6 sm:gap-y-8 max-w-xl items-center m-auto "
            >
              <li
                key=""
                className="hover:scale-105 transition duration-300 ease-in-out  "
              >
                <a href="" target="_blank" rel="noreferrer">
                  <figure className="relative rounded-3xl bg-gray-600/50 p-6 shadow-xl shadow-slate-900/10 opacity-75">
                    <figcaption className="relative  flex items-center justify-between">
                      <div>
                        
                        <div className="font-bold text-4xl text-white py-3">
                          Fast Speaking
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="mb-2">
                      <p className="text-lg tracking-tight text-white">
                        O Fast Speaking é para você que sempre sonhou em falar
                        inglês mas também não acha justo ficar 5 anos em um
                        curso convencional para sair com a seguinte percepção:{' '}
                        <span className="text-red-500 font-bold">
                          “Consigo ler, escrever e até ouvir e compreender em
                          inglês, mas quando vou falar simples mente não sai”.
                        </span>
                      </p>
                    </blockquote>

                    <a
                      className="flex text-center justify-center items-center	 bg-red-600 rounded-xl text-white font-bold text-2xl px-4 py-3 mt-8 hover:bg-blue-500 transition"
                      href="/dream"
                    >
                      Em Breve{' '}
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-yellow-200 pl-4 text-xl"
                        icon={faCheck}
                      />
                    </a>
                  </figure>
                </a>
              </li>
            </ul>
          </li>

          <li key="">
            <ul
              role="list"
              className="flex flex-col gap-y-6 sm:gap-y-8 max-w-xl items-center m-auto"
            >
              <li
                key=""
                className="hover:scale-105 transition duration-300 ease-in-out "
              >
                <a href="" target="_blank" rel="noreferrer">
                  <figure className="relative rounded-3xl bg-gray-600/50 p-6 shadow-xl shadow-slate-900/10 opacity-75">
                    <figcaption className="relative  flex items-center justify-between">
                      <div>
                        
                        <div className="font-bold text-4xl text-white py-3">
                          Inglês Médico{' '}
                          <span className="text-red-500">Online</span>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="mb-2">
                      <p className="text-lg tracking-tight text-white">
                        Inglês Médico é um curso desenvolvido para{' '}
                        <span className="text-red-500 font-bold">
                          médicos e estudantes de medicina
                        </span>{' '}
                        onde, por meio de aulas teóricas e atividades práticas,
                        ele conseguirá realizar atendimentos clínicos e de
                        urgência e emergência em inglês.
                      </p>
                    </blockquote>

                    <a
                      className="flex text-center justify-center items-center	 bg-red-600 rounded-xl text-white font-bold text-2xl px-4 py-3 mt-8 hover:bg-blue-500 transition"
                      href="/dream"
                    >
                      Em Breve{' '}
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-yellow-200 pl-4 text-xl"
                        icon={faCheck}
                      />
                    </a>
                  </figure>
                </a>
              </li>
            </ul>
          </li>

          <li key="">
            <ul
              role="list"
              className="flex flex-col gap-y-6 sm:gap-y-8 max-w-xl items-center m-auto"
            >
              <li
                key=""
                className="hover:scale-105 transition duration-300 ease-in-out "
              >
                <a href="" target="_blank" rel="internal">
                  <figure className="relative rounded-3xl bg-gray-600/50 p-6 shadow-xl shadow-slate-900/10 opacity-75">
                    <figcaption className="relative  flex items-center justify-between">
                      <div>
                        <div className="font-bold text-4xl text-white py-3">
                        Preparatório {' '}
                          <span className="text-red-500">ICAO</span>
                        </div>
                      </div>
                    </figcaption>
                    <blockquote className="mb-2">
                      <p className="text-lg tracking-tight text-white">
                      Com os conhecimentos de aviação que aprendeu enquanto esteve na FAB, o Guru também preparou um curso para você que precisa do ICAO na sua carreira de piloto. Com materiais teóricos, práticos, e MUITOS simulados, você consegue sua aprovação de forma rápida e prática. Bora voar pelo mundo todo?
                      </p>
                    </blockquote>

                    <a
                      className="flex text-center justify-center items-center	 bg-red-600 rounded-xl text-white font-bold text-2xl px-4 py-3 mt-8 hover:bg-blue-500 transition"
                      href="/dream"
                    >
                      Em Breve{' '}
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-yellow-200 pl-4 text-xl"
                        icon={faCheck}
                      />
                    </a>
                  </figure>
                </a>
              </li>
            </ul>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default Cursos;
