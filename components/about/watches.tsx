import Image from "next/image";
import React from "react";

export default function Watches() {
  return (
    <section className="lg:py-24 py-10">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our Watches
          </h2>
          <p className="lg:text-xl text-base text-justify lg:text-center leading-relaxed text-foreground/80">
            ROYALTY&copy; is a brand made for today&apos;s visionaries and leaders
            who are perfectionists and passionate. Elegant, empowering, and
            outstanding design make up a line of high-quality watches. Each
            detail is carefully designed in our German headquarters by our
            founder. Our watch making operates under the strict regulations of
            the SWISS MADE convention, which accurately complies with the
            official regulations set by the Swiss Federal Council. Manufacturing
            is carried out at our dedicated facility located in Solothurn,
            Switzerland. The company&apos;s mission is to develop and produce
            high-quality, innovative elegant watches that establish a new
            standard in the industry.
          </p>
        </div>

        {/* Grid with Image and Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <Image
              src="/images/watch.jpg"
              alt="ROYALTY&copy; Diamond King Collection Watch"
              width={1000}
              height={1000}
              className="w-full aspect-[5/4] object-contain rounded-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Swiss Made Excellence
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              The core design of ROYALTY&copy; watches is built around an
              internationally patented, diamond-shaped case. This proprietary
              design guarantees that each watch bears a unique aesthetic
              signature, protected under international patent laws, ensuring
              that the case shape remains exclusive to ROYALTY&copy;.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Our signature design features two integrated windows:
            </p>

            <ul className="list-disc list-inside text-lg text-foreground space-y-2">
              <li>
                <strong>Upper window:</strong> Symmetrical in form, displays the
                time with high clarity and precision.
              </li>
              <li>
                <strong>Lower window:</strong> Dedicated space initially showing
                the watch model&apos;s name (standard feature across DIAMOND
                KING collection).
              </li>
              <li>
                <strong>Personalization:</strong> The lower window may contain
                engraving or personalization with a name or special message,
                making each piece uniquely tailored.
              </li>
            </ul>

            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-[#C0A875]"></div>
                <span className="text-foreground">
                  Internationally patented diamond-shaped case
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-[#C0A875]"></div>
                <span className="text-foreground">
                  Dual integrated windows design
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-[#C0A875]"></div>
                <span className="text-foreground">
                  Personalization and engraving options
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
