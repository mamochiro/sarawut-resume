import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Highlights } from "@/components/highlights";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Highlights />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
