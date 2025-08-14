import { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from "../../context/AppContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const { axios } = useAppContext();

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/api/admin/comments`);
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="min-h-[calc(100vh-70px)] flex-1 bg-blue-50/50 px-5 pt-5 sm:pt-12 sm:pl-16">
      <div className="flex max-w-3xl items-center justify-between">
        <h1>Comments</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setFilter("Approved")}
            className={`shadow-custom-sm cursor-pointer rounded-full border px-4 py-1 text-xs ${filter === "Approved" ? "text-primary" : "text-gray-700"}`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("Not Approved")}
            className={`shadow-custom-sm cursor-pointer rounded-full border px-4 py-1 text-xs ${filter === "Not Approved" ? "text-primary" : "text-gray-700"}`}
          >
            Not Approved
          </button>
        </div>
      </div>

      <div className="scrollbar-hide relative mt-4 h-4/5 max-w-3xl overflow-x-auto rounded-lg bg-white shadow">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-left text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog Title & Comment
              </th>
              <th scope="col" className="px-6 py-3 max-sm:hidden">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {comments
              .filter((comment) => {
                if (filter === "Approved") return comment.isApproved === true;
                return comment.isApproved === false;
              })
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
