"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface GalleryModalProps {
  video?: string;
  photos: string[];
}

export function GalleryModal({ video, photos }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const allMedia = video ? [video, ...photos] : photos;
  const totalItems = allMedia.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const isVideo = (index: number) => {
    return video && index === 0;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="text-black cursor-pointer lg:h-10 h-6 lg:w-10 w-6 bg-white flex items-center justify-center">
          <Maximize className="lg:h-6 h-4 lg:w-6 w-4" />
        </div>
      </DialogTrigger>
      <DialogContent className="h-svh w-screen bg-[#e9e9e9] p-0 border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>View All Images of the Watch</DialogTitle>
          <DialogDescription>
            View all images of the watch here.
          </DialogDescription>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden -mt-14">
          {/* Left Nav */}
          {totalItems > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 z-40 w-8 h-8 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          {/* Media */}
          <div className="w-full h-full flex items-center justify-center bg-blend-multiply">
            {isVideo(currentIndex) ? (
              <video
                src={allMedia[currentIndex]}
                className="lg:w-[1500px] w-[900px] max-h-full object-contain bg-blend-multiply"
                autoPlay
                muted
              />
            ) : (
              <Image
                src={allMedia[currentIndex]}
                alt={`Product ${currentIndex + 1}`}
                width={1000}
                height={1000}
                className="lg:w-[1500px] w-[900px] max-h-full object-contain bg-blend-multiply"
                priority
                quality={100}
              />
            )}
          </div>

          {/* Right Nav */}
          {totalItems > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 z-40 w-8 h-8 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          {/* Dots Nav (kept your blend styles) */}
          {totalItems > 1 && (
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
              {allMedia.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-8 sm:w-12 h-1 transition-colors cursor-pointer mix-blend-multiply bg-blend-multiply ${
                    index === currentIndex ? "bg-black" : "bg-white"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
