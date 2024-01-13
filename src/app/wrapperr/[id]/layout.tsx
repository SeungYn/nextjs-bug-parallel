import { ReactNode } from 'react';

export function generateMetadata({
  params: { id },
}: {
  params: { id: number };
}) {
  return { title: 'test' };
}

export default function Layout({
  children,
  route1,
  params: { id },
}: {
  children: React.ReactNode;
  route1: ReactNode;
  params: { id: number };
}) {
  return (
    <div>
      {/* {children}
      {route1} */}
    </div>
  );
}
