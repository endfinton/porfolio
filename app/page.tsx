import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Nav />
      <Hero />
      <Projects />
    </main>
  );
}
