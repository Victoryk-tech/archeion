import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { IoEllipsisHorizontal } from "react-icons/io5";

const isYouTubeVideo = (url) =>
  url.includes("youtube.com") || url.includes("youtu.be");
const extractYouTubeID = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?\/\s]+)/
  );
  return match ? match[1] : null;
};
const isVimeoVideo = (url) => url.includes("vimeo.com");
const extractVimeoID = (url) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};
const isDirectVideo = (url) => url.match(/\.(mp4|webm|ogg)$/);
const isEmbeddedIframe = (html) => html.includes("<iframe");

const PostCard = ({
  post,
  formatTime,
  handleOpenModals,
  handleModalOpen,
  ondelete,
}) => {
  return (
    <div className="p-7 border-b border-gray-300 mb-[5rem] hover:bg-[#f8f8f8ee]">
      <div className="flex sm:flex-row flex-col sm:justify-between gap-10">
        <div className="flex gap-4 items-center w-full sm:w-[50%]">
          <div className="p-1 bg-[#EEEE] rounded-md">
            {post.video ? (
              isYouTubeVideo(post.video) ? (
                <div className="relative w-full h-0 pb-[70.25%] md:pb-[70.25%]">
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
                <video controls className="w-full rounded">
                  <source src={post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : isEmbeddedIframe(post.video) ? (
                <div dangerouslySetInnerHTML={{ __html: post.video }} />
              ) : (
                <p className="text-red-500">Unsupported video format</p>
              )
            ) : (
              <Image
                src={post.images[0] || ""}
                alt={post.title}
                width={70}
                height={70}
                className="object-cover rounded-md"
                onClick={() => handleOpenModals(post.images)}
              />
            )}
          </div>
          <div className="text-xs flex flex-col gap-2">
            <h3 className="font-bold text-sm">{post.title}</h3>
            <p>{post.author}</p>
            <div className="flex items-center gap-3">
              <p className="uppercase font-semibold">{post.category}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full sm:w-[50%] uppercase text-xs">
          <div className="flex flex-col gap-2">
            <p className="font-bold">{formatTime(post.createdAt)}</p>
            <p>posted</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">
              {Array.isArray(post.likes) ? post.likes.length : 0}
            </p>
            <p>likes</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">
              {Array.isArray(post.comments) ? post.comments.length : 0}
            </p>
            <p>comments</p>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-[#dc7d7dee]">
            <MdArrowOutward />
          </div>
          <div
            className="p-3 hover:bg-[#EEEE] hover:rounded-md"
            onClick={() => handleModalOpen(post)}
          >
            <IoEllipsisHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
