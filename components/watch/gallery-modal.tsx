"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryModalProps {
  video?: string;
  photos: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  startIndex?: number; // new prop to start at clicked index
}

export function GalleryModal({
  video,
  photos,
  open,
  onOpenChange,
  startIndex = 0,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const allMedia = video ? [video, ...photos] : photos;
  const totalItems = allMedia.length;

  // reset index when opening
  useEffect(() => {
    if (open) setCurrentIndex(startIndex);
  }, [open, startIndex]);

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

  const isVideo = (index: number) => video && index === 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-svh w-screen bg-[#e9e9e9] p-0 border-none">
        <DialogHeader className="sr-only">
          <DialogTitle>View All Images of the Watch</DialogTitle>
          <DialogDescription>
            View all images of the watch here.
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden -mt-14">
          {totalItems > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 z-40 w-8 h-8 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>
          )}

          <div className="w-full h-full flex items-center justify-center">
            {isVideo(currentIndex) ? (
              <video
                src={allMedia[currentIndex]}
                className="lg:w-[1500px] w-[900px] max-h-full object-contain"
                autoPlay
                muted
              />
            ) : (
              <Image
                src={allMedia[currentIndex]}
                alt={`Product ${currentIndex + 1}`}
                width={1000}
                height={1000}
                className="lg:w-[1500px] w-[900px] max-h-full object-contain"
                priority
                quality={100}
              />
            )}
          </div>

          {totalItems > 1 && (
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 z-40 w-8 h-8 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
