"use client";

import Image from "next/image";
import React from "react";
import { ModelModal } from "./model-modal";
import { GalleryModal } from "./gallery-modal";

export default function Gallery({
  images,
  video,
}: {
  images: string[];
  video: string;
}) {
  return (
    <div className="lg:space-y-4 space-y-2">
      <div className="relative">
        <video autoPlay loop muted className="w-full">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2 space-y-2">
          <ModelModal />
          <GalleryModal video={video} photos={images} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`bg-[#f6f6f6] relative`}>
            <Image
              src={image}
              alt="Watch Image"
              width={1000}
              height={1000}
              className="w-full aspect-[5/4] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
