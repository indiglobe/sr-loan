import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/home-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/home-loan/"!</div>
}
