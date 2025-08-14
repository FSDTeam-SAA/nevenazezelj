"use client";

import { Volume2, VolumeOff } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function IntroVideo() {
  const [isMuted, setIsMuted] = useState(false); // want unmuted by default
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play unmuted
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay with sound failed, fallback to muted
        video.muted = false;
        setIsMuted(false);
        video.play().catch(() => {});
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative h-[50vh] md:h-[85vh] w-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover relative z-20"
        autoPlay
        muted={isMuted}
        playsInline
        loop
        preload="auto"
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute right-5 bottom-5 z-50 bg-white/30 md:w-12 w-7 md:h-12 h-7 rounded-full flex items-center justify-center cursor-pointer"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleMute();
        }}
      >
        {isMuted ? (
          <VolumeOff className="text-white lg:h-6 h-4 lg:w-6 w-4" />
        ) : (
          <Volume2 className="text-white lg:h-6 h-4 lg:w-6 w-4" />
        )}
      </div>
    </section>
  );
}
