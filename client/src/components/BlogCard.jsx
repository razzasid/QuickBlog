import { useNavigate } from "react-router-dom";
function BlogCard({ blog }) {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="hover:shadow-primary/25 w-full cursor-pointer overflow-hidden rounded-lg shadow duration-300 hover:scale-102"
    >
      <img src={image} alt="" className="aspect-video" />
      <span className="bg-primary/20 text-primary mt-4 ml-5 inline-block rounded-full px-3 py-1 text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
        ></p>
      </div>
    </div>
  );
}

export default BlogCard;
