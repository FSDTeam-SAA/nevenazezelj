import Image from "next/image";
import React from "react";

export default function Watches() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Our Watches
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            ROYALTY© is a brand made for today&apos;s visionaries and leaders
            who are perfectionists and passionate. Elegant, empowering, and
            outstanding design make up a line of high-quality watches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="ROYALTY© Diamond King Collection Watch"
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Swiss Made Excellence
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Each detail is carefully designed in our German headquarters by
              our founder. Our watch making operates under the strict
              regulations of the SWISS MADE convention, manufacturing at our
              dedicated facility in Solothurn, Switzerland.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-amber-400"></div>
                <span className="text-muted-foreground">
                  Internationally patented diamond-shaped case
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-amber-400"></div>
                <span className="text-muted-foreground">
                  Dual integrated windows design
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 diamond-shape bg-amber-400"></div>
                <span className="text-muted-foreground">
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
