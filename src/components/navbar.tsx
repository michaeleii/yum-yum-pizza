import { Link } from "@tanstack/react-router";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="bg-primary shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
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
          <Drawer>
            <DrawerTrigger>Cart</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="flex items-baseline gap-2">
                  <span className="text-4xl">
                    Cart <span className="font-medium">(2)</span>
                  </span>
                </DrawerTitle>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Order Now</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </header>
  );
}
