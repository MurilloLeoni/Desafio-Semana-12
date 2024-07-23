import {  useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

  return (
    <header className='flex flex-col gap-2 items-center md:flex-row  md:py-7 md:pr-28 md:pl-12 cursor-pointer'> 
        <img
        onClick={() => handleNavigation('/')}
            className='w-44 h-10'
            src="/src/assets/imgs/Logo-Furniro.png"
            alt="Logo"
        />
    <nav className='flex justify-center items-center md:mx-auto gap-5 md:justify-between md:w-[430px] font-poppins text-base font-medium leading-6 cursor-pointer'>
        <p onClick={() => handleNavigation('/')}>Home</p>
        <p onClick={() => handleNavigation('/shop')}>Shop</p>
        <p>About</p>
        <p onClick={() => handleNavigation('/contact')}>Contact</p>
    </nav>
    <div className='flex gap-4 cursor-pointer'>
        <img 
            className='w-6 h-6' 
            src="/src/assets/icons/Icon-user.png" 
            alt="User" 
        />
        <img 
            className='w-6 h-6' 
            src="/src/assets/icons/Icon-cart.png" 
            alt="Cart" 
        />
    </div>
</header>

  )
}

export default Header