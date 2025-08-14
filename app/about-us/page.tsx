import Founder from "@/components/about/founder";
import Hero from "@/components/about/hero";
import Identity from "@/components/about/identity";
import Mission from "@/components/about/mission";
import Watches from "@/components/about/watches";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Identity />

      {/* Mission Section */}
      <Mission />

      {/* Founder Section */}
      <Founder />

      {/* Watches Section */}
      <Watches />

      {/* Craftsmanship Section */}
     

      {/* Customer Service Section */}
      <section className="py-24 px-6 luxury-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
            Our Customers
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            At ROYALTY©, our Customer Service is not another logistical process
            but a commitment. We are devoted to our customers&apos; long-lasting
            satisfaction, bringing you the finest watches that are durable and
            will last a lifetime, along with treatment akin to that of royalty.
          </p>
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black p-8 rounded-lg">
            <p className="font-serif text-2xl md:text-3xl font-bold">
              WELCOME TO THE ROYAL FAMILY ✦ SHINE BRIGHT LIKE A DIAMOND
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
