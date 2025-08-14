import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

function CommentTableItem({ comment, fetchComments }) {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post("/api/admin/approve-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);

        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this comment?",
    );
    if (!confirm) return;
    try {
      const { data } = await axios.post("/api/admin/delete-comment", {
        id: _id,
      });
      if (data.success) {
        toast.success(data.message);
        await fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b>:{blog.title}
        <br />
        <b className="font-medium text-gray-600">Name</b>:{comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              className="w-5 cursor-pointer transition-all hover:scale-110"
            />
          ) : (
            <p className="rounded-full border border-green-600 bg-green-100 px-3 py-1 text-xs text-green-600">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            alt=""
            className="w-5 cursor-pointer transition-all hover:scale-110"
          />
        </div>
      </td>
    </tr>
  );
}

export default CommentTableItem;
