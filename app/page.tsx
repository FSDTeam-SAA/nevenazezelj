import AboutSection from "@/components/landing/about";
import IntroVideo from "@/components/landing/intro-video";
import Watches from "@/components/landing/watches";

export default function Home() {
  return (
    <main>
      <IntroVideo />
      <Watches />
      <AboutSection />
      {/* <div className="h-screen"></div> */}
    </main>
  );
}
