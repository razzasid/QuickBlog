import { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get(`/api/admin/dashboard`);
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 bg-blue-50/50 p-4 md:p-10">
      <div className="flex flex-wrap gap-4">
        <div className="flex min-w-58 cursor-pointer items-center gap-4 rounded bg-white p-4 shadow transition-all hover:scale-105">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="font-light text-gray-400">Blogs</p>
          </div>
        </div>

        <div className="flex min-w-58 cursor-pointer items-center gap-4 rounded bg-white p-4 shadow transition-all hover:scale-105">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="font-light text-gray-400">comments</p>
          </div>
        </div>
        <div className="flex min-w-58 cursor-pointer items-center gap-4 rounded bg-white p-4 shadow transition-all hover:scale-105">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.drafts}
            </p>
            <p className="font-light text-gray-400">Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className="m-4 mt-6 flex items-center gap-3 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blogs</p>
        </div>

        <div className="scollbar-hide relative max-w-4xl overflow-x-auto rounded-lg bg-white shadow">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-left text-xs text-gray-600 uppercase">
              <tr>
                <th scope="col" className="px-2 py-4">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blog Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
