import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/menu')({
  component: () => <div>Hello /menu!</div>
})