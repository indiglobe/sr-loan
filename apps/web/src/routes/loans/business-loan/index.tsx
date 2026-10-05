import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/business-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/business-loan/"!</div>
}
