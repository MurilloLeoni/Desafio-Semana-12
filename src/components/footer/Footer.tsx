import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (caminho: string) => {
        navigate(caminho);
    };
  return (
  <>
  <hr />
    <footer className='w-screen px-6 py-12 md:px-24'>
    <div className='md:grid gap-8 mb-12 md:grid-cols-5'>
        <div className='flex flex-col gap-6 md:col-span-2 md:gap-14'>
            <h2 className='font-bold text-xl md:text-2xl'>Funiro.</h2>
            <div className='w-full md:w-72'>
                <p className='font-normal text-sm text-[#9F9F9F] md:text-base'>
                    400 University Drive Suite 200 Coral Gables,<br />
                    FL 33134 USA
                </p>
            </div>
            <div className='flex justify-between md:w-[184px] items-center md:-ml-4'>
                <a href="https://www.facebook.com" target="_blank">
                    <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-instagram.png" alt="Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <img src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
        <div className="grid grid-cols-2">
        <div className='flex flex-col gap-6 md:col-span-1 md:-ml-24'>
            <h6 className='text-[#9F9F9F] font-medium text-base md:mb-10'>Links</h6>
            <ul className='font-medium text-base flex flex-col gap-4 md:h-[230px] md:justify-between cursor-pointer'>
                <li onClick={() => handleNavigation('/')}>Home</li>
                <li onClick={() => handleNavigation('/shop')}>Shop</li>
                <li>About</li>
                <li onClick={() => handleNavigation('/contact')}>Contact</li>
            </ul>
        </div>
        
        <div className='flex flex-col gap-6 md:col-span-1'>
            <h6 className='text-[#9F9F9F] font-medium text-base md:mb-10'>Help</h6>
            <ul className='font-medium text-base flex flex-col gap-4 md:h-[160px] md:justify-between cursor-pointer'>
                <li className="whitespace-nowrap">Payment Options</li>
                <li>Returns</li>
                <li className="whitespace-nowrap">Privacy Policies</li>
            </ul>
        </div>
        </div>
        <div className='flex flex-col pt-8 md:pt-0 gap-6 md:col-span-1 md:ml-14'>
            <h6 className='text-[#9F9F9F] font-medium text-base md:mb-[38px]'>Newsletter</h6>
            <form className='flex'>
                <input 
                    className='underline' 
                    type="text" 
                    placeholder='Enter Your Email Address' 
                />
                <button 
                    type="submit" 
                    className='ml-1 mt-[5px] font-medium text-sm underline'
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    </div>
    <div>
        <hr />
        <p className='mt-9 font-normal text-base'>
            2023 furino. All rights reserved
        </p>
    </div>
</footer>
</>
  )
}

export default Footer