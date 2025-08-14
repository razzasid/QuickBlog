import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

function BlogTableItem({ blog, fetchBlogs, index }) {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?",
    );
    if (!confirm) return;
    try {
      const { data } = await axios.delete("/api/blog", {
        data: { id: blog._id },
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post("/api/blog/toggle-publish", {
        id: blog._id,
      });
      if (data.success) {
        toast.success(data.message);

        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{title}</td>
      <td className="px-2 py-4 max-sm:hidden">{BlogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}
        >
          {blog.isPublished ? "Published" : "unpublished"}
        </p>
      </td>
      <td className="flex gap-3 px-2 py-4 text-xs">
        <button
          onClick={togglePublish}
          className="mt-1 cursor-pointer rounded border px-2 py-0.5"
        >
          {blog.isPublished ? "unpublish" : "Publish"}
        </button>
        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt=""
          className="w-8 cursor-pointer transition-all hover:scale-110"
        />
      </td>
    </tr>
  );
}

export default BlogTableItem;
