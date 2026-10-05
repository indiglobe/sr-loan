import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/kyc-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/loans/kyc-loan/"!</div>
}
