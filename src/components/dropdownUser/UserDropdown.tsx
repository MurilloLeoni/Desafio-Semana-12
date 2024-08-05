import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut, User } from "firebase/auth";
import { auth } from "../firebase";

interface UserDropdownProps {
  user: User | null;
  isVisible: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, isVisible }) => {
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/register");
      console.log("Logout realizado!");
      alert("Logout realizado com sucesso!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className={`z-10 absolute right-32 top-16 bg-white border rounded shadow-md ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {user ? (
        <button
          onClick={handleLogout}
          className="block px-4 py-2 text-black hover:bg-gray-200"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/register")}
          className="block px-4 py-2 text-black hover:bg-gray-200"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserDropdown;
