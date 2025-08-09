import { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import quill from "quill";
import Quill from "quill";
const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState("Startup");

  const generateContent = async () => {};

  const onSubmitHandler = async (e) => {
    e.prevenDefault();
  };

  useEffect(() => {
    //Initilaize Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form className="h-full flex-1 overflow-scroll bg-blue-50/50 text-gray-600">
      <div className="w-full max-w-3xl rounded bg-white p-4 shadow sm:m-10 md:p-10">
        <p>Upload Thumbnail</p>
        <label htmlFor="image" className="inline-block w-auto">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 cursor-pointer rounded"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="mt-2 w-full max-w-lg rounded border border-gray-300 p-2 outline-none"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="mt-2 w-full max-w-lg rounded border border-gray-300 p-2 outline-none"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        <p className="mt-4">Blog Description</p>
        <div className="relative h-74 max-w-lg pt-2 pb-16 sm:pb-10">
          <div ref={editorRef}></div>
          <button
            type="button"
            onClick={generateContent}
            className="absolute right-2 bottom-1 ml-2 cursor-pointer rounded bg-black/70 px-4 py-1.5 text-xs text-white hover:underline"
          >
            Generate With AI
          </button>
        </div>

        <p className="mt-4">Blog Category</p>
        <select
          name="category"
          className="mt-2 rounded border border-gray-500 px-3 py-2 text-gray-500 outline-none"
        >
          <option value="">Select Category</option>
          {blogCategories.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <div className="mt-4 flex gap-2">
          <p>Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        <button
          type="submit"
          className="bg-primary mt-8 h-10 w-40 cursor-pointer rounded text-sm text-white"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
