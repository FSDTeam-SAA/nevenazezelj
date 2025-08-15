"use client";

import Image from "next/image";
import React from "react";
import { ModelModal } from "./model-modal";
import { GalleryModal } from "./gallery-modal";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`bg-[#f6f6f6] ${index === 0 ? "col-span-2" : ""} relative`}
        >
          <Image
            src={image}
            alt="Watch Image"
            width={1000}
            height={1000}
            className="w-full aspect-[5/4] object-cover"
          />
          {index === 0 && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 space-y-2">
              <ModelModal />
              <GalleryModal />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
