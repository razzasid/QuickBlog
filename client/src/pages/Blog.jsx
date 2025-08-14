import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Moment from "moment";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Blog = () => {
  const { id } = useParams();

  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
    // const data = blog_data.find((item) => item._id === id);
    // setData(data)
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post(`/api/blog/comments`, { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/blog/add-comment`, {
        blog: id,
        name,
        content,
      });

      if (data.success) {
        toast.success(data.message);
        setName("");
        setContent("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="bg"
        className="absolute -top-50 -z-1 opacity-50"
      />

      <Navbar />

      <div className="mt-20 text-center text-gray-600">
        <p className="text-primary py-4 font-medium">
          Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>
        <h1 className="mx-auto max-w-2xl text-2xl font-semibold text-gray-800 sm:text-5xl">
          {data.title}
        </h1>
        <h2 className="mx-auto my-5 max-w-lg truncate">{data.subTitle}</h2>
        <p className="border-primary/35 bg-primary/5 text-primary mb-6 inline-block rounded-full border px-4 py-1 text-sm font-medium">
          Michael Brown
        </p>
      </div>

      <div className="mx-5 my-10 mt-6 max-w-5xl md:mx-auto">
        <img src={data.image} alt="" className="mx-auto rounded-3xl mb-10" />

        <div
          className="rich-text mx-auto max-w-3xl"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* comments Section */}
        <div className="mx-auto mt-14 mb-10 max-w-3xl">
          <p className="mb-4 font-semibold">Comments ({comments.length})</p>
          <div className="flex flex-col gap-4">
            {comments.map((item, index) => (
              <div className="bg-primary/2 border-primary/5 relative max-w-xl rounded border p-4 text-gray-600">
                <div className="mb-2 flex items-center gap-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="ml-8 max-w-md text-sm">{item.content}</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-semibold">Add your comment</p>
          <form
            onSubmit={addComment}
            className="flex max-w-lg flex-col items-start gap-4"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="name"
              className="w-full rounded border border-gray-300 p-2 outline-none"
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Comment"
              className="h-48 w-full rounded border border-gray-300 p-2 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary cursor-pointer rounded p-2 px-8 text-white transition-all hover:scale-102"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Share buttons */}
        <div className="mx-auto my-24 max-w-3xl">
          <p className="my-4 font-semibold">
            Share this article on social media
          </p>
          <div className="flex">
            <img src={assets.facebook_icon} width={50} alt="" />
            <img src={assets.twitter_icon} width={50} alt="" />
            <img src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <Loader />
  );
};

export default Blog;
