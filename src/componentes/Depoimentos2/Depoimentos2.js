import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import fundo1 from '../../imgs/flare1.jpg'

import './Depoimentos2.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore,{ EffectCoverflow, Pagination, Navigation } from 'swiper';


import slide_image_1 from '../../imgs/dep1.png';
import slide_image_2 from '../../imgs/dep2.png';
import slide_image_3 from '../../imgs/dep3.png';
import slide_image_4 from '../../imgs/dep4.png';
import slide_image_5 from '../../imgs/dep51.png';


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Depoimentos2 = ({ backgroundColor }) => {

  const finalClassName = `contSize ${backgroundColor}`;

  return (

      <div className={finalClassName}
      >
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          initialSlide={2} // Start the slider at page 3 (index 2)
          slidesPerView={'5'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          
          <div className="slider-controler">
            {/* <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>


  )
}

export default Depoimentos2;