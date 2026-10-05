import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/car-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/car-loan/"!</div>
}
