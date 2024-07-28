import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import CartOverlay from "../CartOverlay";
import UserDropdown from "../UserDropdown";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isCartOverlayVisible, setIsCartOverlayVisible] = useState(false);

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
          src="/src/assets/imgs/Logo-Furniro.png"
          alt="Logo"
        />
        <nav className="flex justify-center items-center md:mx-auto gap-5 md:justify-between md:w-[430px] font-poppins text-base font-medium leading-6 cursor-pointer">
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/shop")}>Shop</p>
          <p>About</p>
          <p onClick={() => navigate("/contact")}>Contact</p>
        </nav>
        <div className="relative flex gap-8 cursor-pointer">
          <img
            onClick={toggleDropdown}
            className="w-6 h-6"
            src="/src/assets/icons/Icon-user.png"
            alt="User"
          />
          <img
            onClick={toggleCartOverlay}
            className="w-6 h-6"
            src="/src/assets/icons/Icon-cart.png"
            alt="Cart"
          />
        </div>
      </header>
      <UserDropdown
        user={user}
        isVisible={isDropdownOpen}
        onClose={() => setIsDropdownOpen(false)}
      />
      <CartOverlay
        isVisible={isCartOverlayVisible}
        onClose={() => setIsCartOverlayVisible(false)}
      />
    </>
  );
};

export default Header;
