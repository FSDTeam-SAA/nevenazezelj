import Image from "next/image";
import React from "react";

export default function Founder() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Nevena Žeželj, Founder of ROYALTY©"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Our Founder
            </h2>
            <h3 className="text-2xl font-semibold mb-6 gold-gradient">
              Nevena Žeželj
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              ROYALTY© is founded by Nevena Žeželj, a former pilot, an
              anti-financial crime expert, and a philanthropist. ROYALTY was
              born out of her vision, and she is the creative force behind the
              brand.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              To Ms. Žeželj, as a former pilot, her watch was more than an
              instrument and jewellery. Up in the sky, where every second is
              precious, the watch was a lifeline and navigation tool.
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-6 italic text-lg text-muted-foreground">
              &quot;Helping others feel beautiful for who they are makes me
              truly happy. I love seeing people feel empowered.&quot;
              <cite className="block mt-2 font-semibold text-foreground">
                - Nevena, CEO & Founder
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
