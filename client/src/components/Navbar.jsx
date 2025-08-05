import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-8 flex cursor-pointer items-center justify-between py-5 sm:mx-20 xl:mx-32">
      <img
        className="sm:44 w-32"
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
      />
      <button
        className="item-center bg-primary border-red flex cursor-pointer gap-2 rounded-full border-6 px-10 py-2.5 text-sm text-white"
        onClick={() => navigate("/admin")}
      >
        login
        <img className="w-3" src={assets.arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
