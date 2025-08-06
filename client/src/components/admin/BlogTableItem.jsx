import { assets } from "../../assets/assets";

function BlogTableItem({ blog, fetch, index }) {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

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
        <button className="mt-1 cursor-pointer rounded border px-2 py-0.5">
          {blog.isPublished ? "unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          alt=""
          className="w-8 cursor-pointer transition-all hover:scale-110"
        />
      </td>
    </tr>
  );
}

export default BlogTableItem;
