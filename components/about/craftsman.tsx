import React from "react";
import { Card } from "../ui/card";

export default function Craftsman() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Craftsmanship
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Ti</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Titanium</h3>
            <p className="text-sm text-muted-foreground">
              Lightweight and durable
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Pt</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Platinum</h3>
            <p className="text-sm text-muted-foreground">
              Premium precious metal
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">18k</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">18k Gold</h3>
            <p className="text-sm text-muted-foreground">Luxury and elegance</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">💎</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Sapphire Glass</h3>
            <p className="text-sm text-muted-foreground">Exceptional clarity</p>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            Our watch offerings feature both automatic and quartz movements,
            catering to diverse preferences while maintaining our high standards
            of accuracy, reliability, and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
}
