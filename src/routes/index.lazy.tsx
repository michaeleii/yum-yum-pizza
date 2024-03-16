import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative">
      <img
        className="hero-section -z-10"
        src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&q=80"
        alt="Tasty pizza"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute left-16 top-1/2 z-10 -translate-y-1/2 text-4xl font-bold md:text-6xl">
        <div className="mb-4 text-white">The best pizza.</div>
        <div className="text-yellow-400">
          Straight out of the oven, straight to you.
        </div>
        <div className="space-x-4 py-4 font-semibold">
          <Button
            size="lg"
            className="rounded-none text-xl drop-shadow-lg hover:bg-yellow-500"
          >
            Order now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-none bg-black/20 text-xl text-white drop-shadow-lg backdrop-blur-sm"
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
