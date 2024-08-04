import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import CartOverlay from "../cart/CartOverlay";
import UserDropdown from "../UserDropdown";
import AppContext from "../../contexts/AppContext";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems } = context;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleCartOverlay = () => {
    setIsCartOverlayVisible(!isCartOverlayVisible);
  };

  return (
    <>
      <header className="flex flex-col gap-2 items-center md:flex-row md:py-7 md:pr-28 md:pl-12">
        <img
          onClick={() => navigate("/")}
          className="w-44 h-10 cursor-pointer"
          src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/imgs/Logo-Furniro.png"
          alt="Logo"
        />
        <nav className="flex justify-center items-center md:mx-auto gap-5 md:justify-between md:w-[430px] text-base font-medium leading-6 cursor-pointer">
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/shop")}>Shop</p>
          <p>About</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
        </nav>
        <div className="relative flex gap-8 cursor-pointer">
          <img
            onClick={toggleDropdown}
            className="w-6 h-6"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-user.png"
            alt="User"
          />
          <div className="relative">
          <img
            onClick={toggleCartOverlay}
            className="w-6 h-6"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-cart.png"
            alt="Cart"
          />
          {cartItems.length > 0 && (<span className="absolute text-white bg-red-600 w-5 h-5 bottom-4 right-4 rounded-full flex items-center justify-center ">
            {cartItems.length}
          </span>
          )}
          </div>
        </div>
      </header>
      <UserDropdown
        user={user}
        isVisible={isDropdownOpen}
      />
      <CartOverlay
        isVisible={isCartOverlayVisible}
        onClose={() => setIsCartOverlayVisible(false)}
      />
    </>
  );
};

export default Header;
