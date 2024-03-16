import { Button } from "@/components/ui/button";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="pb-6">
      <HeroSection />
      <AboutSection />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold md:text-5xl">
          What Our Customers Say
        </h2>
      </section>
      <CTASection />
    </main>
  );
}

function CTASection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-lg border bg-stone-700 px-6 py-20 text-white md:flex-row">
      <h2 className="text-4xl font-bold md:text-5xl">Ready to Order?</h2>
      <div className="space-x-6">
        <Button
          size="lg"
          className="rounded-none text-xl shadow-md hover:bg-yellow-500"
        >
          Order now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-none bg-transparent text-xl shadow-md"
        >
          Explore Menu
        </Button>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="space-y-4 sm:max-w-xl">
          <p className="font-semibold">Simply Delicious</p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Serving Pizza with Passion Since 1985
          </h2>
          <p>
            Our pizza restaurant was founded in 1985 by John & Jane Doe who
            wanted to bring the authentic taste of Italy to our local community.
            Over the years, we have grown and evolved, but our commitment to
            quality and customer satisfaction remains unchanged.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pizza"
          className="max-w-xl rounded-md object-cover"
        />
      </div>
    </section>
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
