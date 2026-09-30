import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/agent/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/agent/dashboard/"!</div>
}
