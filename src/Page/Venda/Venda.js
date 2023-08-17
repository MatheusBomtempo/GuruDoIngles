import React, { useState, useRef, useEffect } from 'react';
import './Venda.css';
import cel1 from '../../imgs/cel1.png';
import cadernos from '../../imgs/cadernos2.png';
import rec32 from '../../imgs/Rectangle 32.png';
import rec33 from '../../imgs/Rectangle 33.png';
import rec34 from '../../imgs/Rectangle 34.png';
import rec35 from '../../imgs/Rectangle 35.png';
import rec36 from '../../imgs/Rectangle 36.png';
import gramatica from '../../imgs/02.png';
import leitura from '../../imgs/03.png';
import UseOf from '../../imgs/05.png';
import SpeakHome from '../../imgs/04.png';
import EasyWrite from '../../imgs/06.png';
import clarissa1 from '../../imgs/clarissa1.png';
import clarissa2 from '../../imgs/clarissa2.png';
import tablet1 from '../../imgs/tablet1.png';
import tablet2 from '../../imgs/tablet2.png';
import roberta from '../../imgs/roberta2.jpeg';
import tablet3 from '../../imgs/tablet3.png';
import tablet4 from '../../imgs/tablet4.png';
import tablet5 from '../../imgs/tablet5.png';
import ipx1 from '../../imgs/ipX2.png';
import sala from '../../imgs/sala.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faGift,
  faHandPointer,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import foguete from '../../imgs/rocket.png';
import Navbar1 from '../../componentes/Navbar/Navbar1';
import Depoimentos2 from '../../componentes/Depoimentos2/Depoimentos2';
import Prices from '../../componentes/Prices/Prices';
import FAQComponent from '../../componentes/Faq/FAQComponent';
import Player1 from '../../componentes/Player1/Player1';
import play1 from '../../imgs/Cut3.webm';
import play2 from '../../imgs/Cut3.mp4';
import play3 from '../../imgs/Ta2.mp4';
import play4 from '../../imgs/Ta4.mp4';
import play5 from '../../imgs/Ta5.mp4';
import poster1 from '../../imgs/suporteThumb.jpg';
import poster2 from '../../imgs/UofEThumb.jpg';
import poster3 from '../../imgs/speakingThumb.jpg';
import poster4 from '../../imgs/writingThumb.jpg';

const Venda = () => {
  const videoSrc = '../../imgs/Cut3.webm';
  const videoSrc2 = '../../imgs/Cut3.mp4';

  const [playing, setPlaying] = useState(false);
  const [pauseButtonVisible, setPauseButtonVisible] = useState(false); // New state
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  useEffect(() => {
    if (playing) {
      setPauseButtonVisible(true);
      clearTimeout(controlsTimeout.current);
      controlsTimeout.current = setTimeout(() => {
        setPauseButtonVisible(false);
      }, 1000); // Hide pause button after 1 second
    }
  }, [playing]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleMouseMove = () => {
    if (playing) {
      setPauseButtonVisible(true);
      clearTimeout(controlsTimeout.current);
      controlsTimeout.current = setTimeout(() => {
        setPauseButtonVisible(false);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar1 />
      <body className="corpo">
        <div className="v">
          <section className="bg-az borda">
            <div className="support">
              <div className="esq">
                <h1>
                  Suporte <span className="vermei">Individual</span> para
                  dúvidas
                </h1>
                <p>
                  Durante sua rotina de estudos você poderá enviar suas dúvidas
                  para o guru diretamente em seu número pessoal no WhatsApp. ele
                  tentará, primeiramente, te explicar por texto e/ou por áudio
                  sua dúvida. caso não seja sanada, você receberá uma explicação
                  em vídeo personalizada e direcionada exatamente com a
                  explicação que você precisa. e se, mesmo assim, você não
                  entender aquele conteúdo, o guru vai marcar um horário para
                  entrar ao vivo pelo zoom e te explicar em particular o que
                  precisa ser explicado.
                </p>
              </div>

              <div className="vid" onMouseMove={handleMouseMove}>
                <video ref={videoRef} poster={poster1} onClick={togglePlay}>
                  <source src={play2} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                {playing && pauseButtonVisible && (
                  <div className="play-pause-button" onClick={togglePlay}>
                    \
                  </div>
                )}
                {!playing && (
                  <div className="play-pause-button" onClick={togglePlay}></div>
                )}
              </div>
            </div>
          </section>

          <div className="acompanha">
            <h1>ACOMPANHAMENTO PEDAGÓGICO</h1>
            <div className="acompanhaInner">
              <div className="esq">
                <h2>
                  Você <span>NÃO ESTÁ SOZINHO(A)</span> nessa!
                </h2>
                <p>
                  O Cronograma Do Guru Abrange Todas as Competências Da
                  Certificação Semana a Semana Para Você{' '}
                  <span className="vermei">
                    NÃO TER QUE SE PREOCUPAR EM ORGANIZAR SEUS ESTUDOS.
                  </span>
                </p>
              </div>
              <div className="dir">
                <img src={cadernos}></img>
              </div>
            </div>
          </div>

          <div className="plataform">
            <h1
              style={{ color: '#ffff', textAlign: 'center', padding: '3rem 0' }}
            >
              PLATAFORMA DE IMERSÃO
            </h1>

            <div className="boxx">
              <h4>
                A plataforma conta com <span className="marelo">5 cursos</span>{' '}
                que vão te levar <span className="vermei">10x</span> mais rápido{' '}
                <span className="vermei">até sua certificação.</span>
              </h4>
            </div>

            <div className="circles">
              <div>
                <img src={rec32}></img>
              </div>
              <div>
                <img src={rec33}></img>
              </div>
              <div>
                <img src={rec34}></img>
              </div>
              <div>
                <img src={rec35}></img>
              </div>
              <div>
                <img src={rec36}></img>
              </div>
            </div>

            <div className="mt-20 fogPai">
              <div className="fogFilho">
                {' '}
                <img src={foguete}></img>{' '}
              </div>
              <hr id="line" className="bg-yellow-200"></hr>
            </div>
          </div>

          <div className="cursos2">
            <div className="boxCursos ">
              <div className="curEsq">
                <h1 className="vermei mb-4">Gramática</h1>
                <p className="zul ">
                  No curso de gramática você irá aprender todo o conteúdo
                  necessário para aplicação nas competências de use of english,
                  writing e speaking. Em todas as aulas de gramática você terá
                  acesso ao pdf usado pelo guru para a explicação, lista de
                  exercícios para você fixar a matéria e, por último, uma lista
                  com a aplicação daquele tópico diretamente na sua prova. são
                  exercícios da parte 4 de use of english.
                </p>
              </div>

              <div className="curDir">
                <img src={gramatica}></img>
              </div>
            </div>
          </div>

          <div className="cursos2">
            <div className="boxCursos1 ">
              <div className="boxbox">
                <div className="curEsq">
                  <h1 className="vermei mb-4">Leitura</h1>
                  <p className="zul ">
                    No curso de leitura o guru divide cada texto em duas aulas.
                    na primeira aula ele faz a leitura completa do texto,
                    pontuando os vocabulários mais importantes e te mostrando
                    onde e como você encontra as respostas da prova dentro dos
                    textos. já na segunda aula ele resolve os exercícios de
                    interpretação do respectivo texto te passando todos os
                    macetes que ele desenvolveu ao longo desses quase 9 anos
                    trabalhando com as provas de cambridge.
                  </p>
                </div>
                <div className="curDir">
                  <img src={leitura}></img>
                </div>
              </div>

              <div className="clarissabox">
                <div className="esqCla cl">
                  <img src={clarissa1}></img>
                </div>

                <div className="dirCla cl">
                  <img src={clarissa2}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="cursos2">
            <div className="boxCursos1 ">
              <div className="boxbox">
                <div className="curEsq">
                  <h1 className=" mb-4">
                    Use of English <span className="vermei">Descomplicado</span>
                  </h1>
                  <p className="zul ">
                    O Guru Preparou Um Caderno De Exercícios Com Mais De 1000
                    Questões No Modelo Da Prova. Essas Questões São De Use of
                    English, O Terror Da Galera. Nesse Curso Ele Resolveu Todos
                    Os Exercícios Para Que Você Possa Consultar Assim Que Acabar
                    De Fazer E Não Deixar Nenhuma Dúvida Para Depois.
                  </p>
                </div>
                <div className="curDir">
                  <img src={UseOf}></img>
                </div>
              </div>

              <div className="clarissabox">
                <div className="vidtablet1" onMouseMove={handleMouseMove}>
                  <video ref={videoRef} poster={poster2} onClick={togglePlay}>
                    <source src={play3} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  {playing && pauseButtonVisible && (
                    <div className="play-pause-button" onClick={togglePlay}>
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-white-500 text-3xl"
                        icon={faPause}
                      />
                    </div>
                  )}
                  {!playing && (
                    <div className="play-pause-button" onClick={togglePlay}>
                      <FontAwesomeIcon
                        id="icons"
                        className="site-form-item-icon text-white-500 text-3xl"
                        icon={faPlay}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="cursos2">
            <div className="boxCursos1 ">
              <div className="boxbox">
                <div className="curEsq">
                  <h1 className="mb-4">
                    Speaking<span className="vermei"> at Home</span>
                  </h1>
                  <p className="zul ">
                    Aqui Você Vai Aprender a Falar Inglês Exatamente No Modelo
                    Da Prova. É Como Na Auto-escola, Não Basta Saber Dirigir,
                    Você Tem Que Saber Dirigir Do Jeito Que Eles Gostam Para
                    Passar. A Cada Semana Você Terá Várias Atividades Para
                    Treinar, E Nas Aulas O Guru Vai Passar Os Macetes Que
                    Levaram Alguns De Seus Alunos a Gabaritarem a Prova Oral.
                  </p>
                </div>
                <div className="curDir">
                  <img src={SpeakHome}></img>
                </div>
              </div>

              <div className="clarissabox">
                <div className="esqCla cl" onMouseMove={handleMouseMove}>
                  <video ref={videoRef}
        poster={poster3}
        onClick={togglePlay}>
                    <source src={play4} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  {playing && pauseButtonVisible && (
        <div
          className="play-pause-button"
          onClick={togglePlay}
        >
          <FontAwesomeIcon
            id="icons"
            className="site-form-item-icon text-white-500 text-3xl"
            icon={faPause}
          />
        </div>
      )}
      {!playing && (
        <div
          className="play-pause-button"
          onClick={togglePlay}
        >
          <FontAwesomeIcon
            id="icons"
            className="site-form-item-icon text-white-500 text-3xl"
            icon={faPlay}
          />
        </div>
      )}
                </div>

                <div className="dirCla cl">
                  <img src={roberta}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="cursos2">
            <div className="boxCursos1 ">
              <div className="boxbox">
                <div className="curEsq">
                  <h1 className="mb-4">
                    Easy<span className="vermei">Writing</span>
                  </h1>
                  <p className="zul">
                    Esse aqui é o curso mais chato, porém é tão importante
                    quanto todos os outros (emoji de riso). aqui o guru te
                    ensina como escrever todos os possíveis modelos da prova,
                    explicando parágrafo por parágrafo, até que você consiga
                    escrever seus textos sozinho(a). e sim, o guru também
                    corrige os textos, é só mandar lá no whatsapp para ele.
                    Aulas ao vivo a cada duas semanas para revisar, avaliar e
                    aplicar o que já foi estudado, e levar as dúvidas que
                    ficaram no meio do caminho.
                  </p>
                </div>
                <div className="curDir">
                  <img src={EasyWrite}></img>
                </div>
              </div>

              <div className="clarissabox">
                <div className="esqCla cl">
                  <video controls>
                    <source src={play5} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>

                <div className="dirCla cl">
                  <img src={tablet4}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="depo">
            <div className="tituloDepo">
              <h1 className="branco">DEPOIMENTOS</h1>
            </div>

            <Depoimentos2 backgroundColor="bluewbgg" />
          </div>

          <div className="acompanha" style={{ height: 'auto' }}>
            <div className="acompanhaInner">
              <div className="esq">
                <h1>
                  <span className="vermei">SIMULADOS</span> PERIÓDICOS
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  Você sabia que o que mais reprova a galera na certificação é a
                  dificuldade em lidar com o tempo de prova? isso mesmo. e para
                  não ter esse problema, o guru realiza simulados periódicos com
                  seus alunos para que cada um conheça seu cérebro durante a
                  prova, identificando qual a melhor ordem dos exercícios, as
                  pausas para descanso e qual o tempo necessário para resolver
                  cada exercício. e sim, isso varia de pessoa para pessoa,
                  então, você tem que conhecer o seu jeito de fazer prova.
                </p>
              </div>
              <div className="dir">
                <img src={sala}></img>
              </div>
            </div>
          </div>

          <div className="acompanha" style={{ height: 'auto' }}>
            <div className="acompanhaInner">
              <div className="esq">
                <h1>
                  <span className="vermei">FEEDBACK INDIVIDUAL</span> DE
                  RENDIMENTO
                </h1>
                <p style={{ textAlign: 'justify' }}>
                  O guru faz questão de corrigir cada simulado e enviar no
                  privado o feedback de cada aluno. você sabia que nas
                  certificações de cambridge você pode ir mal em alguma parte
                  que ainda sim você passa? isso mesmo. no feedback o guru vai
                  pontuar exatamente onde você precisa melhorar e apresentar
                  várias estratégias para isso, e detalhe, já dando a nota de
                  acordo com a certificação.
                </p>
              </div>
              <div className="dir">
                <img src={tablet5}></img>
              </div>
            </div>
          </div>

          <div className="bg-az">
            <div className="titulo2 mb-14 pt-8">
              <h1 className="branco ">
                Assine <span className="marelo">aqui!</span>
              </h1>
            </div>

            <div className="pricee mb-14">
              <Prices></Prices>
            </div>

            <div>
              <FAQComponent></FAQComponent>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Venda;
