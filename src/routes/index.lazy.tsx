import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="relative">
        <img
          className="hero-section -z-10"
          src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&q=80"
          alt="Tasty pizza"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-4xl font-bold text-white md:text-6xl">
          <div className="mb-4">The best pizza.</div>
          <div className="text-yellow-500">
            Straight out of the oven, straight to you.
          </div>
          <div className="space-x-4 py-4">
            <Button size="lg" className="text-xl hover:bg-yellow-500">
              Order now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-xl hover:bg-gray-400"
            >
              Explore Menu
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
