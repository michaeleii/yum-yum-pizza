import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/order")({
  component: () => <div>Hello /order!</div>,
});
