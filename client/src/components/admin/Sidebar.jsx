import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="flex min-h-full flex-col border-r border-gray-200 pt-6">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-3 px-3 py-3.5 md:min-w-64 md:px-9 ${
            isActive && "bg-primary/10 border-primary border-r-4"
          } `
        }
      >
        <img src={assets.home_icon} alt="" className="w-5 min-w-4" />
        <p className="hidden md:inline-block">Dashboard</p>
      </NavLink>

      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-3 px-3 py-3.5 md:min-w-64 md:px-9 ${
            isActive && "bg-primary/10 border-primary border-r-4"
          } `
        }
      >
        <img src={assets.add_icon} alt="" className="w-5 min-w-4" />
        <p className="hidden md:inline-block">Add Blog</p>
      </NavLink>

      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-3 px-3 py-3.5 md:min-w-64 md:px-9 ${
            isActive && "bg-primary/10 border-primary border-r-4"
          } `
        }
      >
        <img src={assets.list_icon} alt="" className="w-5 min-w-4" />
        <p className="hidden md:inline-block">Blog Lists</p>
      </NavLink>

      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex cursor-pointer items-center gap-3 px-3 py-3.5 md:min-w-64 md:px-9 ${
            isActive && "bg-primary/10 border-primary border-r-4"
          } `
        }
      >
        <img src={assets.comment_icon} alt="" className="w-5 min-w-4" />
        <p className="hidden md:inline-block">Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
