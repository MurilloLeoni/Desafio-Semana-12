const Qualities = () => {
  return (
    <div className='bg-#FAF3EA grid grid-cols-2 md:flex md:justify-around px-6 py-12 md:px-14 md:py-24'>
    <div className='flex items-center'>
        <img className='w-10 h-10 md:w-14 md:h-14' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-trophy.png" alt="Trophy" />
        <div className='ml-2'>
            <p className='text-#242424 font-semibold text-[20px] md:text-[25px] leading-7 md:leading-9'>High Quality</p>
            <p className='text-#9F9F9F font-medium text-sm md:text-xl'>crafted from top materials</p>
        </div>
    </div>
    <div className='flex items-center'>
        <img className='w-10 h-10 md:w-14 md:h-14' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-guarantee.png" alt="Guarantee" />
        <div className='ml-2'>
            <p className='text-#242424 font-semibold text-[20px] md:text-[25px] leading-7 md:leading-9'>Warranty Protection</p>
            <p className='text-#9F9F9F font-medium text-sm md:text-xl'>Over 2 years</p>
        </div>
    </div>
    <div className='flex items-center'>
        <img className='w-10 h-10 md:w-14 md:h-14' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-shipping.png" alt="Shipping" />
        <div className='ml-2'>
            <p className='text-#242424 font-semibold text-[20px] md:text-[25px] leading-7 md:leading-9'>Free Shipping</p>
            <p className='text-#9F9F9F font-medium text-sm md:text-xl'>Order over 150 $</p>
        </div>
    </div>
    <div className='flex items-center'>
        <img className='w-10 h-10 md:w-14 md:h-14' src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-support.png" alt="Support" />
        <div className='ml-2'>
            <p className='text-#242424 font-semibold text-[20px] md:text-[25px] leading-7 md:leading-9'>24 / 7 Support</p>
            <p className='text-#9F9F9F font-medium text-sm md:text-xl'>Dedicated support</p>
        </div>
    </div>
</div>
  )
}

export default Qualities