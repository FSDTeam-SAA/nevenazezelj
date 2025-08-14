import React from "react";
import { Card } from "../ui/card";

export default function Identity() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Brand Identity & Values
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              ROYALTY© embodies the principles of inclusiveness and the unique
              value of each individual. The brand passionately advocates for
              recognizing the inherent worth and uniqueness of every individual,
              irrespective of their heritage, faith, cultural identity,
              educational background, sexual orientation, or skin color.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At its core, ROYALTY© celebrates the idea that every person is
              intrinsically valuable, unique, and deserving of feeling and being
              treated like royalty.
            </p>
          </div>
          <Card className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 diamond-shape bg-gradient-to-br from-yellow-400 to-yellow-600"></div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                The Lion Symbol
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
