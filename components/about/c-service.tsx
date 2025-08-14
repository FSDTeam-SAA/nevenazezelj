import React from "react";
import * as motion from "motion/react-client";

export default function CustomerService() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24 luxury-gradient text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-12">
          Our Customers
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-foreground/80">
          At ROYALTY©, our Customer Service is not another logistical process
          but a commitment. We are devoted to our customers&apos; long-lasting
          satisfaction, bringing you the finest watches that are durable and
          will last a lifetime, along with treatment akin to that of royalty.
        </p>

        {/* Highlighted Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-primary text-black p-6 sm:p-8 md:p-12 rounded-lg"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold">
            WELCOME TO THE ROYAL FAMILY ✦ SHINE BRIGHT LIKE A DIAMOND
          </p>
        </motion.div>
      </div>
    </section>
  );
}
