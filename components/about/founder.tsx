import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function Founder() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -200 }} // start from left
            whileInView={{ opacity: 1, x: 0 }} // animate to normal position
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="order-2 md:order-1"
          >
            <Image
              src="/images/nevena.jpg"
              alt="Nevena Žeželj, Founder of ROYALTY&copy;"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl object-cover"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 200 }} // start from left
            whileInView={{ opacity: 1, x: 0 }} // animate to normal position
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-foreground">
              Our Founder
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 gold-gradient">
              Nevena Žeželj
            </h3>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              ROYALTY&copy; is founded by Nevena Žeželj, a former pilot, an
              anti-financial crime expert, and a philanthropist. ROYALTY was
              born out of her vision, and she is the creative force behind the
              brand.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              To Ms. Žeželj, as a former pilot, her watch was more than an
              instrument and jewellery. Up in the sky, where every second is
              precious, the watch was a lifeline and navigation tool.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              Nevena is inspired by people and their stories. She has a passion
              for creating beautiful, personal pieces that are both timeless and
              elegant. Her main inspiration is how others feel when wearing her
              creations, and this is her way of ensuring that every detail is
              precisely curated.
            </p>

            {/* Quote / Blockquote */}
            <blockquote className="border-l-4 border-[#C0A875] pl-4 sm:pl-6 italic text-base sm:text-lg text-muted-foreground">
              &quot;Helping others feel beautiful for who they are makes me
              truly happy. I love seeing people feel empowered.&quot;
              <cite className="block mt-2 font-semibold text-foreground">
                - Nevena, CEO & Founder
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
