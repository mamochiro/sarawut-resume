import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MotionSection } from "@/components/motion-section";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <MotionSection>
        <Hero />
      </MotionSection>

      <MotionSection>
        <About />
      </MotionSection>

      <MotionSection>
        <MotionSection>
          <Stack />
        </MotionSection>
      </MotionSection>

      <MotionSection>
        <Projects />
      </MotionSection>

      <MotionSection>
        <Contact />
      </MotionSection>

      <Footer />
    </div>
  );
}
