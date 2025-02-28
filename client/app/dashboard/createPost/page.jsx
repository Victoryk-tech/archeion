"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import ImageModal from "../posts/ImageModal";
import Link from "next/link";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    body: "",
    images: [],
    video: "",
    mediaType: "image",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    "History",
    "Designs",
    "Programming",
  ]);
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `/api/blog?category=${formData.category || ""}`
      );
      console.log(response);
      if (response.data.success) {
        setPosts(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch posts");
      console.log("Error fetching posts:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);

    const images = await Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    );

    setFormData({ ...formData, images });
  };

  const handleMediaTypeChange = (e) => {
    setFormData({
      ...formData,
      mediaType: e.target.value,
      images: [],
      video: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = { ...formData };
      if (editId) {
        // Update post
        const response = await axios.put(`/api/blog`, {
          ...formDataToSend,
          id: editId,
        });
        if (response.data.success) {
          toast.success("Post updated successfully!");
          fetchPosts();
          setEditId(null);
        }
      } else {
        // Create new post
        const response = await axios.post(`/api/blog`, formDataToSend);
        if (response.data.success) {
          toast.success("Post created successfully!");
          fetchPosts();
        }
      }
      setFormData({
        title: "",
        description: "",
        category: "",
        body: "",
        images: [],
        videoLink: "",
        mediaType: "image",
      });
    } catch (error) {
      toast.error("Failed to submit post");
      console.error("Error submitting post:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post) => {
    setEditId(post._id);
    setFormData({
      title: post.title,
      description: post.description,
      category: post.category,
      body: post.body || "",
      images: [],
      video: post.video || "",
      mediaType: "image",
    });
    toast.info("Editing post...");
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/blog?id=${id}`);
      if (response.data.success) {
        toast.success("Post deleted successfully!");
        fetchPosts();
      }
    } catch (error) {
      toast.error("Failed to delete post");
      console.log("Error deleting post:", error);
    }
  };

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setIsModalOpen(false);
  };

  // Check if the link is a YouTube video
  const isYouTubeVideo = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Extract YouTube Video ID
  const extractYouTubeID = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?\/\s]+)/
    );
    return match ? match[1] : null;
  };

  // Check if the link is a Vimeo video
  const isVimeoVideo = (url) => {
    return url.includes("vimeo.com");
  };

  // Extract Vimeo Video ID
  const extractVimeoID = (url) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  // Check if the URL is a direct MP4/WebM video file
  const isDirectVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg)$/);
  };

  return (
    <div className="p-4 md:max-w-[600px] mx-auto">
      <Toaster position="top-right" />
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">
          {editId ? "Edit Post" : "Create New Blog Post"}
        </h2>

        <div className="relative inline-block text-left">
          <Link
            href="/dashboard/posts"
            className="bg-[#eccc5a] py-2 px-3 gap-1 rounded-md text-white hover:bg-[#f48d2d] flex items-center"
          >
            New post
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border rounded p-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border rounded p-2 outline-none"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border rounded p-2 outline-none"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Media Type</label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="mediaType"
                value="image"
                checked={formData.mediaType === "image"}
                onChange={handleMediaTypeChange}
              />
              Image
            </label>
            <label>
              <input
                type="radio"
                name="mediaType"
                value="video"
                checked={formData.mediaType === "video"}
                onChange={handleMediaTypeChange}
              />{" "}
              Video/Link
            </label>
          </div>
        </div>

        {formData.mediaType !== "video" && (
          <div className="mb-4">
            <label className="block text-sm font-medium">Body</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              className="w-full border rounded p-2 outline-none"
            ></textarea>
          </div>
        )}

        {formData.mediaType === "image" ? (
          <div className="mb-4">
            <label className="block text-sm font-medium">Images</label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              className="w-full border rounded p-2 outline-none"
              multiple
              required
            />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-sm font-medium">Video/Link</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              className="w-full border rounded p-2 outline-none"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className={`outlinr-none bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center`}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : editId ? (
            "Update Post"
          ) : (
            "Create Post"
          )}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Posts by Category</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded space-y-2">
            {post.video ? (
              isYouTubeVideo(post.video) ? (
                // YouTube Embed
                <div className="relative w-full h-0 pb-[20.25%] md:pb-[20.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${extractYouTubeID(
                      post.video
                    )}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : isVimeoVideo(post.video) ? (
                // Vimeo Embed
                <div className="relative w-full h-0 pb-[56.25%] md:pb-[42.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://player.vimeo.com/video/${extractVimeoID(
                      post.video
                    )}`}
                    title="Vimeo video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : isDirectVideo(post.video) ? (
                // Direct MP4/WebM Video
                <video controls className="w-full rounded">
                  <source src={post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // Fallback for unknown video types
                <p className="text-red-500">Unsupported video format</p>
              )
            ) : (
              // Image Display
              post.images.length > 0 && (
                <Image
                  src={post.images[0]}
                  alt="image"
                  width={100}
                  height={100}
                  className="object-contain"
                  onClick={() => openModal(post.images)}
                />
              )
            )}

            <h3 className="font-bold text-sm">{post.title}</h3>
            <p className="text-[13px] font-normal">{post.description}</p>
            <p className="text-sm text-gray-600">Category: {post.category}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleEdit(post)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        images={selectedImages}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
