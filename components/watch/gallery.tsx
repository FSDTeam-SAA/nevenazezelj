"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ModelModal } from "./model-modal";
import { GalleryModal } from "./gallery-modal";
import { Maximize } from "lucide-react";

export default function Gallery({
  images,
  video,
}: {
  images: string[];
  video: string;
}) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleVideoClick = () => {
    // clicking the video opens the model modal
    setIsModelOpen(true);
  };

  const handleImageClick = (index: number) => {
    // clicking any image opens the gallery modal at that index
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="lg:space-y-4 space-y-2">
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="w-full cursor-pointer"
          onClick={handleVideoClick}
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Icons over video for visual cues */}
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 space-y-2 pointer-events-none">
          {/* Little 3D icon */}
          <div className="relative group text-black lg:rounded-md rounded-sm lg:h-10 h-6 lg:w-10 w-6 bg-white flex items-center justify-center">
            <Image
              src="/images/3d-modeling.gif"
              alt="View 3D"
              width={1000}
              height={1000}
              className="lg:h-10 h-4 lg:w-10 w-4"
            />
            <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-full overflow-visible w-20 text-center bg-black/70 text-white text-[14px]">
              <p>View 3D</p>
            </div>
          </div>

          <div className="text-black cursor-pointer lg:h-10 h-6 lg:w-10 w-6 bg-white flex items-center justify-center">
            <Maximize className="lg:h-6 h-4 lg:w-6 w-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className="bg-[#f6f6f6] relative cursor-pointer"
          >
            <Image
              src={image}
              alt={`Watch Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controlled modals */}
      <ModelModal open={isModelOpen} onOpenChange={setIsModelOpen} />
      <GalleryModal
        video={video}
        photos={images}
        open={isGalleryOpen}
        onOpenChange={setIsGalleryOpen}
        startIndex={galleryIndex}
      />
    </div>
  );
}
