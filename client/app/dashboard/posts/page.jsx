"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import {  MdKeyboardArrowDown } from "react-icons/md";
import {  IoTrash } from "react-icons/io5";

import { useRouter } from "next/navigation"; // Import useRouter
import { CiEdit, CiHeart } from "react-icons/ci";

import ImageModal from "./ImageModal";
import PostCard from "./PostCard";
import Link from "next/link";

const Page = () => {
  const router = useRouter(); // Initialize router
  const [activeNav, setActiveNav] = useState("History");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    body: "",
    images: [],
  });
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([
    "History",
    "Designs",
    "Programming",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [ModalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  // handle modal for pictures

  const [imageOpen, setImageOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpenModals = (images) => {
    setSelectedImages(images);
    setImageOpen(true);
  };

  const handlecloseModals = () => {
    setImageOpen(false);
    setSelectedImages([]);
  };
  const navItems = [
    { category: "Designs", total: "1" },
    { category: "Categories", total: "3" },
  ];

  const items = [
    { label: "Newest", href: "#" },
    { label: "Oldest", href: "#" },
    { label: "Recently edited", href: "#" },
    { label: "Relevance", href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  // Fetch posts with selected category filter
  const fetchPosts = async () => {
    try {
      setLoading(true);

      const category = selectedCategory || "default"; // Replace 'default' with a valid fallback
      console.log("Fetching posts with category:", category);
      const response = await axios.get("/api/blog", {
        params: { category },
      });
      if (response.data.success) {
        setPosts(response.data.data);
      } else {
        console.log(
          "API error:",
          response.data.message || "Failed to fetch posts"
        );
        toast.error(response.data.message || "Failed to fetch posts");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      console.log("Error fetching posts:", errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setSelectedCategory("History");
  }, []);

  // Open modal for post content, edit, and delete options
  const handleModalOpen = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // Handle post delete
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/blog?id=${id}`);
      if (response.data.success) {
        toast.success("Post deleted successfully!");
        fetchPosts();
        setIsModalOpen(false);
      }
    } catch (error) {
      toast.error("Failed to delete post");
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (id) => {
    router.push(`/dashboard/posts/${id}`);
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]); // Fetch posts when the selected category changes

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const formatTime = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const seconds = Math.floor((now - postDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 30) return `${days} days ago`;

    // If it's more than a month old, show the full date
    const options = { year: "numeric", month: "long", day: "numeric" };
    return postDate.toLocaleDateString(undefined, options);
  };
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <div className="lg:mx-[5.7rem] h-full md:max-w-full max-w-md bg-white mt-8 text-gray-700">
      <Toaster />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Posts</h1>

        <div className="relative inline-block text-left">
          <Link
            href="/dashboard/createPost"
            className="bg-[#eccc5a] py-2 px-3 gap-1 rounded-md text-white hover:bg-[#f48d2d] flex items-center"
          >
            New post
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between border-b border-gray-300 mt-[5rem] pb-5 md:items-center">
        <div className="flex justify-between  items-center">
          <nav className="flex gap-x-3 md:gap-x-6 mt-5">
            {navItems.map((item) => (
              <div
                key={item.category}
                className={`relative pb-2 flex gap-2 text-sm ${
                  activeNav === item.category
                    ? "text-gray-900 font-semibold after:absolute after:left-0 after:bottom-0 after:top-[2.9rem] after:h-[2.7px] after:w-full after:bg-gray-600 after:rounded-full"
                    : "text-gray-600"
                }`}
              >
                <a href="#" onClick={() => setActiveNav(item.category)}>
                  {item.category}
                </a>
                <div
                  className={`w-5 h-5 text-[13px] font-semibold text-center rounded-full ${
                    item.category === "Drafts"
                      ? "bg-gray-300 text-gray-600"
                      : "bg-[#363737] text-white"
                  }`}
                >
                  {item.total}
                </div>
              </div>
            ))}
          </nav>
        </div>
        <div className=" flex justify-between gap-5  items-center">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="py-2 px-3 gap-1 hover:bg-[#EEEE] text-sm font-medium rounded-md flex items-center"
            >
              {capitalizeFirstLetter(selectedCategory || "Select category")}
              <MdKeyboardArrowDown color="gray" size={18} className="mt-1" />
            </button>

            {isOpen && (
              <div className="absolute right-[-4rem] mt-2 w-[15.6rem] p-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={() => {
                        setSelectedCategory(category);
                        toggleDropdown();
                      }}
                      className="flex items-center px-4 py-2 font-semibold text-[0.95rem] text-gray-800 hover:rounded-lg hover:bg-gray-100"
                    >
                      {capitalizeFirstLetter(category)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 text-lg">No posts in this category</p>
          </div>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                formatTime={formatTime}
                handleOpenModals={handleOpenModals}
                handleModalOpen={handleModalOpen}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal for Post Actions */}
      {isModalOpen && (
        <div className="mt-12 md:mt-2 fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Post Details</h2>
            <p>{selectedPost.title}</p>
            <p>{selectedPost.description}</p>
            <p>{selectedPost.body}</p>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => handleEdit(selectedPost._id)}
                className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
              >
                <CiEdit />
              </button>
              <button
                onClick={() => handleDelete(selectedPost._id)}
                className="py-2 px-4 bg-red-500 text-white rounded-md"
              >
                <IoTrash />
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-3 text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Viewing  Images */}

      <ImageModal
        images={selectedImages}
        isOpen={imageOpen}
        onClose={handlecloseModals}
      />
    </div>
  );
};

export default Page;
