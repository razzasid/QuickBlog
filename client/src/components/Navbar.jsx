import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
      <img
        className="w-32 sm:44"
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
      />
      <button
        className="flex item-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 border-red border-6"
        onClick={() => navigate("/admin")}
      >
        login
        <img className="w-3" src={assets.arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
