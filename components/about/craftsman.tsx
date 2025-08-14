import React from "react";
import { Card } from "../ui/card";
import { Diamond } from "lucide-react";
import * as motion from "motion/react-client";

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Ti</span>
            </div>
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Titanium</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Lightweight and durable
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Pt</span>
            </div>
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">Platinum</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Premium precious metal
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">18k</span>
            </div>
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">18k Gold</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Luxury and elegance
            </p>
          </Card>

          <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                <Diamond />
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-1 sm:mb-2">
              Sapphire Glass
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Exceptional clarity and durability
            </p>
          </Card>
        </motion.div>

        {/* Description Text */}
        <div className="mt-12 sm:mt-16 text-center">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto mb-6"
          >
            Our selection of materials includes the finest materials such as
            titanium, platinum, 18k gold, and rhodium plating, all chosen for
            their superior quality and longevity. We incorporate premium
            sapphire glass into every watch, providing exceptional clarity and
            durability.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto"
          >
            Our watch offerings feature both automatic and quartz movements,
            catering to diverse preferences while maintaining our high standards
            of accuracy, reliability, and craftsmanship.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
