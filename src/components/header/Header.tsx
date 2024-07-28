import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, User } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("Loggout realizado!");
      alert("Loggout realizado com sucesso!");
    } catch (error) {
      alert(error);
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
          className="w-6 h-6"
          src="/src/assets/icons/Icon-cart.png"
          alt="Cart"
        />
        {isDropdownOpen && (
          <div className="z-10 absolute right-6 mt-8 bg-white border rounded shadow-md">
            {user ? (
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
