import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/loan-against-property/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/loan-against-property/"!</div>
}
