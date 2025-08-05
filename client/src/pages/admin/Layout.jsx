import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

const Layout = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex h-[70px] items-center justify-between border-b border-gray-200 px-4 py-2 sm:px-12">
        <img
          src={assets.logo}
          alt=""
          className="w-32 cursor-pointer sm:w-40"
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="bg-primary cursor-pointer rounded-full px-8 py-2 text-sm text-white"
        >
          Logout
        </button>
      </div>

      <div className="flex h-[100vh-70px]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
