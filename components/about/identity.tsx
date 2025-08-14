import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

export default function Identity() {
  return (
    <section className="lg:py-20 py-10">
      <div className="container lg:px-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-foreground">
              Brand Identity & Values
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 sm:mb-6">
              ROYALTY© embodies the principles of inclusiveness and the unique
              value of each individual. The brand passionately advocates for
              recognizing the inherent worth and uniqueness of every individual,
              irrespective of their heritage, faith, cultural identity,
              educational background, sexual orientation, or skin color.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              At its core, ROYALTY© celebrates the idea that every person is
              intrinsically valuable, unique, and deserving of feeling and being
              treated like royalty.
            </p>
          </div>

          {/* Card Column */}
          <Card className="p-6 sm:p-8 bg-primary">
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Royalty"
                  width={200}
                  height={200}
                  className="w-32 sm:w-40 lg:w-52 max-w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                The Lion Symbol
              </h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                The lion symbol stands for confidence, strength, and empowerment
                – qualities born of self-belief and owning one&apos;s life story
                and identity. Paired with an elegant black and gold aesthetic,
                ROYALTY© exudes sophistication, luxury, and timelessness.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
