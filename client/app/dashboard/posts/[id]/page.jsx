"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";

const categories = ["History", "Designs", "Programming"]; // Define categories

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").filter(Boolean).pop();

  const [post, setPost] = useState(null);
  const [editId, seteditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    body: "",
    images: [],
    video: "",
    mediaType: "image",
  });

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/blog?id=${id}`);
          const data = await response.json();
          if (response.ok) {
            setPost(data.data);
            seteditId(data.data._id); // ✅ Fix editId issue
            setFormData({
              title: data.data.title || "",
              description: data.data.description || "",
              category: data.data.category || "",
              body: data.data.body || "",
              images: data.data.images || [],
              video: data.data.video || "",
              mediaType: data.data.mediaType || "image",
            });
          } else {
            console.log("Post not found:", data.message);
          }
        } catch (error) {
          console.error("Error fetching Post:", error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: files, // ✅ Correctly store files without setting `value`
    }));
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
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("body", formData.body);
      formDataToSend.append("mediaType", formData.mediaType);
      if (formData.mediaType === "video") {
        formDataToSend.append("video", formData.video);
      } else {
        formData.images.forEach((file) =>
          formDataToSend.append("images", file)
        );
      }

      let response;
      if (editId) {
        formDataToSend.append("id", editId);
        response = await axios.put(`/api/blog?id=${id}`, formDataToSend);
      } else {
        response = await axios.post(`/api/blog?id=${id}`, formDataToSend);
      }

      if (response.data.success) {
        toast.success(
          editId ? "Post updated successfully!" : "Post created successfully!"
        );
        router.push("/dashboard/posts"); // ✅ Navigate to posts page
      }
    } catch (error) {
      toast.error("Failed to submit post");
      console.log("Error submitting post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="w-full px-4 py-6 max-w-[600px] mx-auto">
      <Toaster />
      <div className="flex justify-between mb-7">
        <h1 className="text-3xl font-bold text-gray-700">Posts</h1>
        <Link
          href="/dashboard/posts"
          className="py-2 px-3 rounded-md hover:bg-[#ccce] bg-[#EEE]"
        >
          View site
        </Link>
      </div>
      <h1 className="text-xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full border rounded p-2 outline-none mb-4"
          required
        />
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full border rounded p-2 outline-none mb-4"
          required
        ></textarea>
        <label className="block text-sm font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full border rounded p-2 outline-none mb-4"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium">Body</label>
        <textarea
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          className="w-full border rounded p-2 outline-none mb-4"
          required
        ></textarea>
        <label className="block text-sm font-medium">Media Type</label>
        <div className="flex space-x-4 mb-4">
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
        {formData.mediaType === "image" ? (
          <div>
            <label className="block text-sm font-medium">Images</label>

            {/* Display existing images */}
            {formData.images.length > 0 && (
              <div className="flex space-x-2 mb-4">
                {formData.images.map((img, index) => (
                  <img
                    key={index}
                    src={
                      typeof img === "string" ? img : URL.createObjectURL(img)
                    }
                    alt={`Uploaded ${index}`}
                    className="h-20 w-20 object-cover rounded border"
                  />
                ))}
              </div>
            )}

            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              className="w-full border rounded p-2 outline-none mb-4"
              multiple
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium">Video/Link</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              className="w-full border rounded p-2 outline-none mb-4"
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
          ) : (
            "Update Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default Page;
