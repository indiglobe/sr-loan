import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loans/$loanType/$bankName/apply-link/')({
  component: RouteComponent,

  
})

function RouteComponent() {
  return <div>Hello "/loans/$loanType/$bankName/apply-link/"!</div>
}
