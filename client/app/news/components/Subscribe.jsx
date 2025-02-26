import React, { useState } from "react";

import { Input, Spin } from "antd";

import toast, { Toaster } from "react-hot-toast";
import MessageModal from "../../pages/Home/components/MessageModal";

const Subscribe = ({ register }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required.");
      return;
    }

    setLoading(true);
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        // setMessage("Successfully subscribed!");
        setMessage("Successfully subscribed!");
        setEmail(""); // Clear input
      } else {
        // setMessage(data.error || "Subscription failed.");
        setMessage(data.error || "Subscription failed.");
      }
    } catch (error) {
      // setMessage("An error occurred. Please try again.");
      console.log("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    
      <div className="font-Geist max-w-[350px] mx-auto relative mt-6">
        <form
          onSubmit={handleSubscribe}
          className="rounded-lg border-[#d1d1d1] border-[0.8px] flex items-center justify-between gap-x-4 "
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="outline-none placeholder:text-[#727272] border-none"
          />
          <button
            className="relative  text-white w-full py-2 rounded-xl md:w-[50%] md:py-2 text-[16px] border-[1.3px] border-[#000000] bg-[#000000] cursor-pointer hover:bg-white hover:text-[#fff] transition-all ease-in-out duration-700   font-medium group overflow-hidden"
            disabled={loading}
          >
            {/* Default Text */}
            <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
              {loading ? <Spin size="small" /> : "Subscribe"}
            </span>

            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center text-[#000000]  font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              Go!
            </span>
          </button>
          <Toaster />
        </form>

        {isModalOpen && (
          <MessageModal
            message={message}
            isSuccess={isSuccess}
            onClose={closeModal}
          />
        )}
      </div>
   
  );
};

export default Subscribe;
