import { Box, Maximize } from "lucide-react";
import Image from "next/image";
import React from "react";

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
            <div className="absolute rounded-md cursor-pointer bottom-10 right-10 h-10 w-10 bg-white flex items-center justify-center">
              <Maximize className="h-6 w-6" />
            </div>
          )}
          {index === 0 && (
            <div className="absolute rounded-md cursor-pointer top-1/2 left-5 h-10 w-10 bg-white flex items-center justify-center">
              <Box className="h-6 w-6" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
