import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Nav />
      <Hero />
    </main>
  );
}
