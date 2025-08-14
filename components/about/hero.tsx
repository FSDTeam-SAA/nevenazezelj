import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="luxury-gradient text-white py-8 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="lg:mb-8 mb-5">
          <Image
            src={"/images/logo.png"}
            alt="Royalty"
            width={1000}
            height={1000}
            className="lg:w-[400px] w-[200px] mx-auto aspect-square object-cover"
          />
        </div>
        <h1 className="lg:text-6xl text-3xl font-bold lg:mb-6 mb-3">
          ROYALTY ©
        </h1>
        <p className="lg:text-xl font-light leading-relaxed max-w-3xl mx-auto px-4 md:px-10 lg:px-0">
          More than just a brand, ROYALTY© represents a mindset founded on the
          conviction that self-belief is the key to unlocking limitless
          potential.
        </p>
      </div>
    </section>
  );
}
