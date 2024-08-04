import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';

const Carrossel = () => {
  return (
    <div className='border border-black'>
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        width : 1000,
        perPage: 1,
        direction: "ltr",
        rewindByDrag: true,
        pagination: true,
        start: 1,
        padding: { left: 50, right: 20, top: 10, bottom: 20 }
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Dining-home.png" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Living-home.png" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Bedroom-home.png" alt="Image 3"/>
      </SplideSlide>
    </Splide>
    </div>
  );
}

export default Carrossel