import React, {  useEffect } from 'react';
import './Home.css';
import '../../animations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

import Navbar1 from '../../componentes/Navbar/Navbar1'
import Cursos from '../../Page/Cursos/Cursos'

import vetor1 from '../../imgs/Vector1.svg'
import vetor2 from '../../imgs/Vector2.svg'
// import Depoimentos from '../../componentes/Depoimentos/Depoimentos';
import Depoimentos2 from '../../componentes/Depoimentos2/Depoimentos2';


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



  


const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/venda');
  };


  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  
  return (
    
    <>
    <Navbar1></Navbar1>
    
      <div className='hero swiper'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
          <div className='gridd'>
            
          <FadeInUpContainer>
              <div className='filhosGrid '>
                <p className='text-yellow-400'>Mentorias Individuais</p>
                
                <h1 className='text-white '><span className='text-yellow-400'>5 anos</span> para aprender inglês? Com o <span className='text-red-600'>guru do inglês</span> isso não existe.</h1>
                
                <h3 className='text-white py-4'>O Guru desenvolveu um método próprio que te ensina a aprender inglês de uma forma <span className='text-red-600'>rápida</span> e <span className='text-red-600'>sem enrolação!</span> Bora descobrir como a galera tem ficado <span className='text-red-600'>fluente em poucos meses?</span></h3>
                
                <button className='text-white bg-red-600 rounded-2xl p-3 py-4 items-center w-full hover:scale-105 transition duration-300 ease-in-out hover:bg-blue-900' onClick={handleClick}> Saiba Mais <FontAwesomeIcon
                id="icons"
                className="site-form-item-icon text-yellow-500 text-2xl "
                icon={faCheck}
                
                /></button>
              </div>
          </FadeInUpContainer>
            
              <div className='filhosGrid'></div>
          </div>
        
          
        </div>
      </div>
      <div className=''></div>


      <Depoimentos2 backgroundColor="blueblabgg"></Depoimentos2>

      <Cursos className='backGrad'></Cursos>

      
    </>
    
  );
};

export default Home;
