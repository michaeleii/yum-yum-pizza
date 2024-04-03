import { Button } from "@/components/ui/button";
import { Link, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="pb-6">
      <HeroSection />
      <AboutSection />
      <TestominalsSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative">
      <img
        className="hero-section -z-10"
        src="/pizza-hero.jpg"
        alt="Tasty pizza"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute left-16 top-1/2 z-10 -translate-y-1/2 text-3xl font-bold sm:text-4xl md:text-6xl">
        <div className="mb-4 text-white">The best pizza.</div>
        <div className="text-yellow-400">
          Straight out of the oven, straight to you.
        </div>
        <div className="hidden space-x-4 py-4 font-semibold md:block">
          <Link to="/order">
            <Button
              size="lg"
              className="rounded-none text-xl drop-shadow-lg hover:bg-yellow-500"
            >
              Order now
            </Button>
          </Link>
          <Link to="/menu">
            <Button
              variant="outline"
              size="lg"
              className="rounded-none bg-black/20 text-xl text-white drop-shadow-lg backdrop-blur-sm"
            >
              Explore Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="space-y-4 sm:max-w-xl">
          <p className="font-semibold text-yellow-600">Simply Delicious</p>
          <h2 className="text-4xl font-bold md:text-5xl">
            Serving Pizza with Passion Since 1985
          </h2>
          <p className="font-[400]">
            Our pizza restaurant was founded in 1985 by John & Jane Doe who
            wanted to bring the authentic taste of Italy to our local community.
            Over the years, we have grown and evolved, but our commitment to
            quality and customer satisfaction remains unchanged.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Pizza"
          className="w-full max-w-xl rounded-md object-cover"
        />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-lg border bg-stone-700 px-6 py-20 text-white md:flex-row">
      <h2 className="text-4xl font-bold md:text-5xl">Ready to Order?</h2>
      <div className="flex w-full flex-col gap-6 md:w-fit md:flex-row">
        <Link to="/order">
          <Button
            size="lg"
            className="w-full rounded-none text-xl shadow-md hover:bg-yellow-500"
          >
            Order now
          </Button>
        </Link>
        <Link to="/menu">
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-none bg-transparent text-xl shadow-md"
          >
            Explore Menu
          </Button>
        </Link>
      </div>
    </section>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarHalfIcon, StarIcon } from "lucide-react";
function TestominalsSection() {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/79.jpg",
      name: "John Doe",
      comment:
        "I've been eating at Yum Yum Pizza for over 10 years and I've never been disappointed. The pizza is always fresh and tasty.",
      rating: 5,
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/27.jpg",
      name: "Jane Doe",
      comment:
        "I love the variety of pizzas available at Yum Yum Pizza. I can always find something new to try.",
      rating: 4.5,
    },
    {
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      name: "John Smith",
      comment:
        "The staff at Yum Yum Pizza are always friendly and helpful. I love the atmosphere of the restaurant.",
      rating: 5,
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-4xl font-bold md:text-5xl">
        What our customers say
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col gap-4 rounded-lg bg-gray-50 p-6">
                <div className="flex items-center gap-4">
                  {Array.from({
                    length: Math.floor(testimonial.rating) - 1,
                  }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className="h-6 w-6 fill-yellow-500 stroke-yellow-500"
                    />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarHalfIcon className="h-6 w-6 fill-yellow-500 stroke-yellow-500" />
                  )}
                </div>
                <div className="py-4 text-2xl font-semibold">
                  "{testimonial.comment}"
                </div>
                <div className="flex items-center gap-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div className="font-semibold">{testimonial.name}</div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
