"use client"

import { Volume2, VolumeOff } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react'

export default function IntroVideo() {
    const [isMuted, setIsMuted] = useState(true); 
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    return (
        <section className="relative h-[85vh] w-full">
            <video
                ref={videoRef}
                className="h-full w-full object-cover relative z-20"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="auto"
            >
                <source src="/videos/intro.mp4" type="video/mp4" />
            </video>

            <div
                className="absolute right-5 bottom-5 z-50 bg-white/30 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setIsMuted(!isMuted);
                    }
                }}
            >
                {isMuted ? (
                    <VolumeOff className="text-white h-6 w-6" />
                ) : (
                    <Volume2 className="text-white h-6 w-6" />
                )}
            </div>
        </section>
    )
}
