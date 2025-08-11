"use client";

import { aboutData } from "@/lib/constant";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MessageCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const secRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detect screen size only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 1024);
      const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (!isLargeScreen || !secRef.current || !imageRef.current) return;

    const context = gsap.context(() => {
      const testimonialsElements =
        secRef.current!.querySelectorAll<HTMLElement>(".fade_comment");

      // Pin the image container
      ScrollTrigger.create({
        trigger: secRef.current,
        start: "top top",
        end: "bottom center",
        pin: imageRef.current,
        pinSpacing: false,
        scrub: 1,
      });

      testimonialsElements.forEach((element, i) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentIndex(i),
          onEnterBack: () => setCurrentIndex(i),
          onLeave: () => {
            if (currentIndex === i) setCurrentIndex(-1);
          },
          onLeaveBack: () => {
            if (currentIndex === i) setCurrentIndex(-1);
          },
        });

        gsap.to(element, {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, secRef);

    return () => context.revert();
  }, [isLargeScreen]);

  return (
    <section
      className="relative w-full h-[1400px] py-8 lg:py-20 text-white"
      ref={secRef}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mobile header */}
          <div className="lg:hidden mb-8 mx-auto">
            <p className="text-2xl leading-snug flex flex-wrap gap-3 text-center">
              <span>Kind words</span>
              <span className="inline-flex justify-center items-center w-8 h-8 border-2 border-[#1b1b1b] rounded-full">
                <MessageCircle className="w-3 h-3 animate-bounce" />
              </span>
              <span>from peers, partners and clients</span>
            </p>
          </div>

          {/* Abount data */}
          <div className="space-y-12 lg:space-y-20">
            {aboutData.map((item) => (
              <div key={item.id} className="">
                <div className="fade_comment max-w-xl mx-auto lg:opacity-20 space-y-7 text-center">
                  <h2 className="text-lg lg:text-2xl uppercase tracking-widest font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-lg">{item.description}</p>
                  <Link href={item.btnLink}>
                    <Button className="h-12 w-28 rounded-sm cursor-pointer">
                      <span>{item.btnText}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Left sticky image for large screens */}
          <div
            ref={imageRef}
            className="hidden lg:block lg:sticky lg:top-24 place-items-end"
          >
            <Image
              src={aboutData[currentIndex]?.imageUrl || "/images/rolex1.jpg"}
              alt={aboutData[currentIndex]?.title || "Sticky Image"}
              width={1000}
              height={1000}
              className="w-4/5 aspect-[5/4] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
