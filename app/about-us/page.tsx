import CustomerService from "@/components/about/c-service";
import Craftsman from "@/components/about/craftsman";
import Founder from "@/components/about/founder";
import Hero from "@/components/about/hero";
import Identity from "@/components/about/identity";
import Mission from "@/components/about/mission";
import Watches from "@/components/about/watches";

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Identity />
      <Mission />
      <Founder />
      <Watches />
      <Craftsman />
      <CustomerService />
    </main>
  );
}
