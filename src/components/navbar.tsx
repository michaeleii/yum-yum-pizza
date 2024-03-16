import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <Link to="/" className="[&.active]:font-bold">
          <div className="text-3xl font-bold">🍕Yum Yum Pizza</div>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/menu" className="[&.active]:font-bold">
            Menu
          </Link>
          <Button className="text-md bg-stone-700 text-white transition-all hover:bg-stone-600">
            Order
          </Button>
        </nav>
      </div>
    </header>
  );
}
