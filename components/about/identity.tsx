import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Identity() {
  return (
    <section className="lg:py-20 py-10">
      <div className="container px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
              Brand Identity & Values
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              ROYALTY&copy; embodies the principles of inclusiveness and the unique
              value of each individual. The brand passionately advocates for
              recognizing the inherent worth and uniqueness of every individual,
              irrespective of their heritage, faith, cultural identity,
              educational background, or skin color, etc.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              At its core, ROYALTY&copy; celebrates the idea that every person is
              intrinsically valuable, unique, and deserving of feeling and being
              treated like royalty.
            </p>
          </motion.div>

          {/* Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="p-6 sm:p-8 md:p-10 bg-[#C0A875] border-none">
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Royalty"
                    width={200}
                    height={200}
                    className="w-28 sm:w-36 md:w-44 lg:w-52 aspect-square object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 sm:mb-4">
                  The Lion Symbol
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-background leading-relaxed">
                  The lion symbol stands for confidence, strength, and
                  empowerment – qualities born of self-belief and owning
                  one&apos;s life story and identity. Paired with an elegant
                  black and gold aesthetic, ROYALTY&copy; exudes sophistication,
                  elegance, and timelessness.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
