import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className="WhiteBg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto text-center">
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-black sm:text-5xl pt-10">
            ACOMPANHE
          </h2>
        </div>
        <div className="sm:mx-50 mx-40 h-full mt-20 flex justify-around items-center space-x-10 cartoes">
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <a href="https://instagram.com/gurudoingles?igshid=MzRlODBiNWFlZA==" target="_blank" rel="external">
              <FontAwesomeIcon
                id="icons"
                className="site-form-item-icon text-blue-950 pl-4 text-6xl sm:text-8xl"
                icon={faInstagram}
              />
            </a>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <a href="https://youtube.com/@gurudoingles4823" target="_blank" rel="external">
              <FontAwesomeIcon
                id="icons"
                className="site-form-item-icon text-red-700 pl-4 text-6xl sm:text-8xl"
                icon={faYoutube}
              />
            </a>
          </div>
          <div className="hover:scale-105 transition duration-300 ease-in-out">
            <a href="https://www.tiktok.com/@gurudoingles?_t=8erZz8wNeuj&_r=1" target="_blank" rel="external">
              <FontAwesomeIcon
                id="icons"
                className="site-form-item-icon text-blue-950 pl-4 text-6xl sm:text-8xl"
                icon={faTiktok}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center">
        <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-black sm:text-5xl pt-20 pb-10 ">
          NAS REDES SOCIAIS
        </h2>
      </div>
    </div>
  );
};

export default Social;
