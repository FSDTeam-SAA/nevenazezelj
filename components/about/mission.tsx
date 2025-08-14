import React from "react";
import * as motion from "motion/react-client";

export default function Mission() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-12 text-foreground">
          Our Mission
        </h2>

        {/* Intro paragraph */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/80 mb-6 sm:mb-8">
          When you wear our watches, we want you to feel empowered, confident,
          and embraced by unlimited potential that you have!
        </p>

        {/* Highlighted block */}
        <motion.div
          initial={{ opacity: 0, y: 200 }} // start from left
          whileInView={{ opacity: 1, y: 0 }} // animate to normal position
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-primary p-4 sm:p-6 md:p-8 rounded-lg text-left sm:text-center"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-primary-foreground text-justify lg:text-center">
            More than just a brand, ROYALTY© represents a mindset: it is founded
            on the conviction that self-belief is the key to unlocking limitless
            potential. The founder, Ms. Nevena Žeželj, represents this
            philosophy through her journey in life. Overcoming numerous
            hardships and challenges over the years, she went on to achieve
            extraordinary milestones across various aspects of life. She aims to
            empower others by demonstrating that through resilience,
            perseverance, and unwavering faith in oneself, anyone can become
            capable of achieving extraordinary things by overcoming doubt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
