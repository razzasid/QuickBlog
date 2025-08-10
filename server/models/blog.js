import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, requird: true },
    category: { type: String, requird: true },
    image: { type: String, requird: true },
    isPublished: { type: Boolean, requird: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("blog", blogSchema);

export default Blog;
