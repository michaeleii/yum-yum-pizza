import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@/components/tanstack-router-devtools";
import { Suspense } from "react";
import Navbar from "@/components/navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <Footer />
    </>
  ),
});

function Footer() {
  return (
    <footer>
      <div className="mt-20 bg-primary py-10 text-center text-xl">
        &copy; {new Date().getFullYear()} Yum Yum Pizza
      </div>
    </footer>
  );
}
