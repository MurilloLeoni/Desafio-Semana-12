import React from 'react'

const Browse = () => {
  return (
    <div className='font-poppins text-center mt-14 pb-6'>
    <h1 className='font-bold text-2xl md:text-[40px] leading-10 md:leading-[50px]'>
        Browse The Range
    </h1>
    <p className='font-normal text-base md:text-2xl text-#9F9F9F mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div className='flex flex-col md:flex-row gap-8 md:gap-10 justify-center font-semibold text-xl md:text-2xl mt-12 md:mt-16'>
        <div className='text-center'>
            <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="/src/assets/imgs/Dining-home.png" alt="Dining" />
            <p className='mt-4 md:mt-6'>Dining</p>
        </div>
        <div className='text-center'>
            <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="/src/assets/imgs/Living-home.png" alt="Living" />
            <p className='mt-4 md:mt-6'>Living</p>
        </div>
        <div className='text-center'>
            <img className='w-28 h-28 md:w-[380px] md:h-[480px] mx-auto' src="/src/assets/imgs/Bedroom-home.png" alt="Bedroom" />
            <p className='mt-4 md:mt-6'>Bedroom</p>
        </div>
    </div>
</div>

  )
}

export default Browse