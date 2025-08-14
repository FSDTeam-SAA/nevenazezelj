import Craftsman from "@/components/about/craftsman";
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
      <Craftsman />

      {/* Customer Service Section */}
      
    </div>
  );
}
