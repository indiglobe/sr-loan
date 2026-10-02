import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(unauthenticated-routes)/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(unauthenticated-routes)/login/"!</div>
}
