import { Link } from "@tanstack/react-router";

import { Button } from "./ui/button";
import { type CartItem, useCartStore } from "@/store/cart-store";
import { useMediaQuery } from "usehooks-ts";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <header className="w-full bg-primary shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 p-5 md:flex-row">
        <Link to="/" className="[&.active]:font-bold">
          <div className="flex items-baseline gap-2 text-2xl font-bold">
            <span>🍕</span>
            <span>Yum Yum Pizza</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 font-medium">
          <Link
            to="/"
            className="h-10 rounded-lg px-4 py-2 transition-all hover:bg-stone-700  hover:text-white [&.active]:bg-stone-700 [&.active]:text-white"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="h-10 rounded-lg px-4 py-2 transition-all hover:bg-stone-700  hover:text-white [&.active]:bg-stone-700 [&.active]:text-white"
          >
            Menu
          </Link>
          <Link
            to="/order"
            className="h-10 rounded-lg px-4 py-2 transition-all hover:bg-stone-700  hover:text-white [&.active]:bg-stone-700 [&.active]:text-white"
          >
            Order
          </Link>
          {isDesktop ? (
            <CartSheet
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          ) : (
            <CartDrawer
              items={items}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          )}
        </nav>
      </div>
    </header>
  );
}

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CartSheet({
  items,
  totalItems,
  totalPrice,
}: {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}) {
  return (
    <Sheet>
      {items.length > 0 && <SheetTrigger>Cart ({totalItems})</SheetTrigger>}
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle className="flex items-baseline gap-2">
            <span className="text-xl">
              Cart {items.length > 0 && <span>({totalItems})</span>}
            </span>
          </SheetTitle>
        </SheetHeader>
        <div>
          {items.map((pizza) => (
            <CartItem key={pizza.name} pizza={pizza} />
          ))}
        </div>
        <SheetFooter>
          <div className="w-full">
            <hr className="my-4" />
            <div className="mb-4 flex w-full justify-between text-xl">
              <span>Total: </span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>

            <div>
              <Button className="w-full">Order Now</Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function CartDrawer({
  items,
  totalItems,
  totalPrice,
}: {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}) {
  return (
    <Drawer>
      {items.length > 0 && <DrawerTrigger>Cart ({totalItems})</DrawerTrigger>}
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex items-baseline gap-2">
            <span className="text-xl">
              Cart {items.length > 0 && <span>({totalItems})</span>}
            </span>
          </DrawerTitle>
        </DrawerHeader>
        <div className="max-h-96 overflow-y-auto">
          {items.map((pizza) => (
            <CartItem key={pizza.name} pizza={pizza} />
          ))}
        </div>
        <DrawerFooter>
          <hr className="my-4" />
          <div className="flex justify-between">
            <div className="mb-4 flex w-full justify-between text-xl">
              <span>Total: </span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button>Order Now</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function CartItem({ pizza }: { pizza: CartItem }) {
  const removeFromCart = useCartStore((s) => s.remove);

  const handleRemoveFromCart = (pizza: CartItem) => {
    removeFromCart(pizza);
  };
  return (
    <article key={pizza.name} className="flex">
      <div className="flex flex-1 flex-col justify-between gap-6 px-4 py-3">
        <div className="mt-4 flex items-baseline justify-between gap-6">
          <h3 className="text-2xl font-bold">{pizza.name}</h3>
          <p className="text-xl">${pizza.price * pizza.quantity}</p>
        </div>
        <p className="text-xl">Quantity: {pizza.quantity}</p>
        <Button
          variant="destructive"
          onClick={() => handleRemoveFromCart(pizza)}
        >
          Remove from Cart
        </Button>
      </div>
    </article>
  );
}
