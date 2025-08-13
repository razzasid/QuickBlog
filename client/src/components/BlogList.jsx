import { useState } from "react";
import { motion } from "motion/react";

import { blog_data, blogCategories } from "../assets/assets";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";
const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === "") {
      return blogs;
    }
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()),
    );
  };
  return (
    <>
      <div className="relative my-10 flex justify-center gap-4 sm:gap-8">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                menu === item && "px-4 pt-0.5 text-white"
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="bg-primary absolute top-0 right-0 left-0 -z-1 h-7 rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="mx-8 mb-24 grid grid-cols-1 gap-8 sm:mx-16 sm:grid-cols-2 md:grid-cols-3 xl:mx-40 xl:grid-cols-4">
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </>
  );
};

export default BlogList;
