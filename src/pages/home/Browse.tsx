import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className='text-center mt-14 pb-6'>
      <h1 className='font-bold text-2xl md:text-[40px] leading-10 md:leading-[50px]'>
        Browse The Range
      </h1>
      <p className='font-normal text-base md:text-2xl text-#9F9F9F mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='flex flex-col md:flex-row gap-8 md:gap-10 justify-center font-semibold text-xl md:text-2xl mt-12 md:mt-16'>
        <div className='text-center' onClick={() => handleCategoryClick('Sofás')}>
          <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Dining-home.png" alt="Sofas" />
          <p className='mt-4 md:mt-6'>Sofas</p>
        </div>
        <div className='text-center' onClick={() => handleCategoryClick('Escrivaninhas')}>
          <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Living-home.png" alt="Escrivaninhas" />
          <p className='mt-4 md:mt-6'>Escrivaninhas</p>
        </div>
        <div className='text-center' onClick={() => handleCategoryClick('Racks')}>
          <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Bedroom-home.png" alt="Racks" />
          <p className='mt-4 md:mt-6'>Racks</p>
        </div>
      </div>
    </div>
  );
};

export default Browse;
