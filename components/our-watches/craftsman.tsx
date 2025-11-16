import React from "react";
import { Card } from "../ui/card";
import * as motion from "motion/react-client";
import Image from "next/image";

export default function Craftsman() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Craftsmanship
          </h2>
        </div>
        {/* Material Cards */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/steel.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg">Stainless Steel</h3>
            <p className="text-sm sm:text-base">Strong and durable</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/titanium.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Titanium</h3>
            <p className="text-sm sm:text-base">Lightweight and durable</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/platinum.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Platinum</h3>
            <p className="text-sm sm:text-base">Premium precious metal</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/gold.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">18k Gold</h3>
            <p className="text-sm sm:text-base">Sophistication and elegance</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/paladium.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Paladium</h3>
            <p className="text-sm sm:text-base">Premium precious metal</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/leather.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Leather</h3>
            <p className="text-sm sm:text-base">Classic and comfortable</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/rubber.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Black Rubber</h3>
            <p className="text-sm sm:text-base">Sturdy and durable</p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/sapphire.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">
              Sapphire Glass
            </h3>
            <p className="text-sm sm:text-base">
              Exceptional clarity and durability
            </p>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow p-0 gap-2 pb-4">
            <Image
              src="/images/rhodium.jpg"
              alt="stainless steel image"
              width={400}
              height={200}
              className="w-full h-32 sm:h-40 object-cover rounded-t-xl"
            />
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">
              Rhodium Plating
            </h3>
            <p className="text-sm sm:text-base">Premium precious metal</p>
          </Card>
        </motion.div>
        {/* Description Text */}
        <div className="mt-12 sm:mt-16 text-center">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-6"
          >
            Our selection of materials includes the finest materials such as
            stainless steel, titanium, platinum, paladium, 18k gold, and rhodium
            plating, leather, etc all chosen for their superior quality and
            longevity. We incorporate premium sapphire glass into every watch,
            providing exceptional clarity and durability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base lg:text-2xl leading-relaxed max-w-4xl mx-auto"
          >
            Our watch offerings features such as automatic, quartz and solar
            quartz movements, catering to diverse preferences while maintaining
            our high standards of accuracy, reliability, and craftsmanship.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
