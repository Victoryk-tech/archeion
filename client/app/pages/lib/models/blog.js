import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  comment: { type: String, required: true },
  image: { type: String, required: false }, // Add image field
  replies: [
    {
      email: { type: String, required: true },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      image: { type: String, required: false }, // Add image field
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, default: "" },
  category: {
    type: String,
    enum: ["History", "Designs", "Programming"],
    required: true,
  },
  images: [String],
  video: { type: String, default: "" },
  mediaType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },

  likes: { type: [String], default: [] },
  comments: [CommentSchema], // Nested comments
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
