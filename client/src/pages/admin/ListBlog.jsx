import { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-[calc(100vh-70px)] flex-1 bg-blue-50/50 px-5 pt-5 sm:pt-12 sm:pl-16">
      <h1>ALl Blogs</h1>

      <div className="scrollbar-hide relative mt-4 h-4/5 max-w-4xl overflow-x-auto rounded-lg bg-white shadow">
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
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBlog;
