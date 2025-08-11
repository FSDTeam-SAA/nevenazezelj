import AboutSection from "@/components/landing/about";
import IntroVideo from "@/components/landing/intro-video";
import Tags from "@/components/landing/tags";
import Watches from "@/components/landing/watches";

export default function Home() {
  return (
    <main>
      <IntroVideo />
      <Watches />
      <AboutSection />
      <Tags />
    </main>
  );
}
