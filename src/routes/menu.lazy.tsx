import {
  type MenuItem,
  classicPizzas,
  drinks,
  extras,
  feastPizzas,
} from "@/data/menu";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/menu")({
  component: Menu,
});

function Menu() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      <MenuSection
        title="Classic Pizzas"
        description="Original but timeless. Our classic pizzas are the perfect choice for any occasion."
        pizzas={classicPizzas}
      />
      <MenuSection
        title="Feast Pizzas"
        description="For when a regular pizza just won't cut it. Our feast pizzas are the perfect choice for any hungry stomach."
        pizzas={feastPizzas}
      />
      <MenuSection
        title="Sides"
        description="You can't have pizza without sides. Check out our selection of sides to make your meal complete."
        pizzas={extras}
      />
      <MenuSection
        title="Drinks"
        description="Quench your thirst with our selection of drinks. We have everything from soda to beer."
        pizzas={drinks}
      />
    </main>
  );
}

function MenuSection({
  title,
  description,
  pizzas,
}: {
  title: string;
  description: string;
  pizzas: MenuItem[];
}) {
  return (
    <section className="py-20">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>
        <p>{description}</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza) => (
            <MenuItem key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuItem({ pizza }: { pizza: MenuItem }) {
  return (
    <article
      key={pizza.name}
      className="flex min-h-[100px] flex-col rounded-lg border"
    >
      <img
        className="h-72 w-full rounded-t-md object-cover object-center"
        src={pizza.image}
        alt={pizza.name}
      />
      <div className="flex flex-1 flex-col justify-between gap-6 px-4 py-3">
        <div className="mt-4 flex justify-between gap-6">
          <h3 className="text-2xl font-bold">{pizza.name}</h3>
          <p className="text-xl">${pizza.price}</p>
        </div>
        <p className="text-sm">{pizza.ingredients}</p>
      </div>
    </article>
  );
}
