"use client";
import React from "react";

const extractYouTubeID = (url) => {
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
  );
  return match ? match[1] : null;
};

const extractVimeoID = (url) => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

const isYouTubeVideo = (url) => /youtube\.com|youtu\.be/.test(url);
const isVimeoVideo = (url) => /vimeo\.com/.test(url);
const isDirectVideo = (url) => /\.(mp4|webm|ogg)$/.test(url);

const VideoEmbed = ({ videoUrl }) => {
  if (isYouTubeVideo(videoUrl)) {
    return (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${extractYouTubeID(videoUrl)}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  if (isVimeoVideo(videoUrl)) {
    return (
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://player.vimeo.com/video/${extractVimeoID(videoUrl)}`}
        title="Vimeo video player"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }

  if (isDirectVideo(videoUrl)) {
    return (
      <video controls className="w-full rounded">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <p className="text-red-500">Unsupported video format</p>;
};

export default VideoEmbed;
