import Main from '@/components/main/main';
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/our-product/$productType')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Main className="2xs:px-5 mx-auto w-full max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
      <Outlet />
    </Main>
  );
}
