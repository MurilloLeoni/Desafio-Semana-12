import BuyNow from '../../components/buttons/BuyNow'

const Banner = () => {
  return (
    <div className='md:relative w-screen h-full'>
    <img className='hidden md:block w-full h-full' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Banner-home.png" alt="Banner" />
    <div className='md:absolute bg-#FFF3E3 rounded-xl w-full md:w-[620px] md:top-[52%] md:left-[71.5%] md:-translate-x-1/2 md:-translate-y-1/2 text-left px-6 md:px-[40px] pt-8 md:pt-16 pb-6 md:pb-10 flex flex-col gap-4 md:gap-6'>
        <h6 className='font-semibold text-sm md:text-base tracking-[1.5px] md:tracking-[3px]'>New Arrival</h6>
        <h1 className='text-#B88E2F font-bold text-2xl md:text-[52px] md:leading-[65px]'>Discover Our <br /> New Collection</h1>
        <p className='font-medium text-base md:text-lg mb-4 md:mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <BuyNow />
    </div>
</div>



  )
}

export default Banner