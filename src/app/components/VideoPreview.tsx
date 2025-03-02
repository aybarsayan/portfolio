"use client";
import React from 'react';

export const VideoPreview = ({ videoId }: { videoId: string }) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden bg-gray-100 cursor-pointer group"
      onClick={handleClick}
    >
      {/* YouTube thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video thumbnail"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-[#698f60]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}; 