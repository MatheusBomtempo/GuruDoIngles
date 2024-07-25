import React, { useEffect, useState } from 'react';
import './Captura.css';
import '../../animations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';
import { ClipLoader } from 'react-spinners';

import Navbar1 from '../../componentes/Navbar/Navbar1';

import inglesemmedo from '../../imgs/INGLESSEMMEDO3.png';
import sidephoto from '../../imgs/sidephoto.png';
import sidephoto2 from '../../imgs/sidephoto2.png';
import fundo2 from '../../imgs/flare1.jpg';
import souraul from '../../imgs/souraul.jpg';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const FadeInUpContainer = styled.div`
  animation: ${fadeInUp} 1s ease-in-out;
`;

const Captura = () => {
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '945030f1-4d5f-4cdd-954c-0b7d152e3770');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    setIsLoading(false);

    if (data.success) {
      let timerInterval;
      Swal.fire({
        title: 'Sucesso!',
        html: 'Será redirecionado para o grupo em alguns segundos.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector('b');
          if (timer) {
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          }
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
          window.location.href = 'https://chat.whatsapp.com/Ko3oKGFFeuTG5Fz8qijkfW';
        }
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você cometeu algum erro na submissão! Tente novamente.',
        footer: '<a href="#">Por que eu tive este problema?</a>',
      });
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar1 />

      <div className="heroo swiper pag1cap">
        <div className="hero2 mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
          <div className="lateralmente">
            <FadeInUpContainer>
              <div className="filhos fio1">
                <img src={inglesemmedo} className="inglesemmedo" alt="Inglês sem medo" />

                <h1 className="text-white md:text-3xl sm:text-base">
                  Vamos remover esse <span className="text-red-600">bloqueio</span> com o inglês
                  num ambiente acolhedor e <span className="text-yellow-400">imersivo</span>
                </h1>

                <h3 className="text-white xl:text-base md:text-sm sm:text-sm py-4">
                  Descubra como esse passo a passo vai te fazer realizar esse
                  sonho, mesmo que em algum momento você tenha acreditado que
                  não era possível.
                </h3>

                <section>
                  <form className="form" onSubmit={onSubmit}>
                    <div className="formbox1">
                      <input
                        type="text"
                        name="nome"
                        className="field"
                        placeholder="Digite seu nome"
                        required
                      />
                    </div>

                    <div className="formbox1">
                      <input
                        type="email"
                        name="email"
                        className="field"
                        placeholder="Digite seu email"
                        required
                      />
                    </div>

                    <div className="formbox1">
                      <input
                        type="number"
                        name="celular"
                        className="field"
                        placeholder="(DDD) Digite seu Whatsapp"
                        required
                      />
                    </div>

                    <button
                      className="text-white bg-green-600 rounded-2xl p-3 py-4 items-center w-full hover:scale-105 transition duration-300 ease-in-out hover:bg-blue-900"
                      type="submit"
                      style={{ backgroundColor: '#38a169', color: 'white' }}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <ClipLoader color="white" size={24} />
                      ) : (
                        <>
                          Começar agora{' '}
                          <FontAwesomeIcon
                            id="icons"
                            className="site-form-item-icon text-yellow-500 text-2xl"
                            icon={faCheck}
                          />
                        </>
                      )}
                    </button>
                  </form>
                </section>
              </div>
            </FadeInUpContainer>

            <div className="filhos side">
              <img src={sidephoto2} className="sidephoto" alt="Side photo" />
            </div>
            <img src={fundo2} className="fundo2" alt="Background" />
          </div>
        </div>
      </div>

      <section className="page2cap">
        <div className="titcap text-center">
          <h3 className="text-white text-center md:text-3xl sm:text-base">
            A projeto <span className="text-yellow-400">Inglês Sem Medo</span> é
            para você que:
          </h3>
        </div>

        <div className="quadroMot">
          <div className="motivo">
            <span>
              Por algum motivo que iremos descobrir, não se sente capaz de
              aprender inglês.
            </span>
          </div>
          <div className="motivo">
            <span>
              Já estudou inglês no passado e sente que aprendeu muito pouco.
            </span>
          </div>
          <div className="motivo">
            <span>Está começando agora e quer iniciar da maneira correta.</span>
          </div>
          <div className="motivo">
            <span>
              Consegue entender um pouco, mas não consegue se comunicar.
            </span>
          </div>
          <div className="motivo">
            <span>Quer ver filmes e séries sem legenda.</span>
          </div>
          <div className="motivo">
            <span>Quer perder o medo de falar inglês.</span>
          </div>
          <div className="motivo">
            <span>Não consegue entender o idioma.</span>
          </div>
          <div className="motivo">
            <span>
              Quer viajar e não sentir insegurança para falar com nativos.
            </span>
          </div>
          <div className="motivo">
            <span>
              Quer se destacar no mercado de trabalho e aproveitar as
              oportunidades.
            </span>
          </div>
        </div>
      </section>

      <div className="pag3cap">
        <div className="heroo swiper">
          <div className="hero2 mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
            <div className="ingles2">
              <img src={inglesemmedo} className="inglesemmedo" alt="Inglês sem medo" />
            </div>
            <div className="lateralmente">
              <div className="filhos side side2">
                <img src={souraul} className="souraul" alt="Raul" />
              </div>
              <FadeInUpContainer>
                <div className="filhos fio1">
                  <h1 className="text-white md:text-3xl sm:text-base">
                    Quem é o Raul?
                  </h1>
                  <h3 className="text-white xl:text-base md:text-xs leading-10 py-4">
                    Olá, eu sou o Raul!{' '}
                    <span className="text-yellow-400">
                      Professor de inglês há 10 anos
                    </span>
                    , comecei a dar aulas aos meus 17.{' '}
                    <span className="text-red-600">
                      Já tive minha própria escola de idiomas
                    </span>
                    , também trabalhei como tradutor e intérprete, já preparei
                    diversos alunos para provas de certificação internacional e
                    hoje em dia foco em disseminar o que eu aprendi ao longo
                    desses 10 anos de experiência. Após uma década lecionando
                    descobri os principais motivos pelos quais as pessoas criam
                    bloqueios durante a fase de aprendizagem e depois se sentem
                    incapazes de aprender inglês. O meu trabalho atualmente além
                    de ensinar, é destravar esses bloqueios nas pessoas
                    independentemente da idade e circunstância em que foram
                    criados, e mostrar que é possível aprender inglês de maneira
                    leve em poucos meses, e sem gastar rios de dinheiros com
                    cursos particulares.
                  </h3>
                </div>
              </FadeInUpContainer>
              <img src={fundo2} className="fundo2" alt="Background" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Captura;
