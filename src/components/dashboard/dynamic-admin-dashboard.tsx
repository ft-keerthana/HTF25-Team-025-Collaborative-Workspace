'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const AdminDashboard = dynamic(() => import('./admin-dashboard'), {
  ssr: false,
  loading: () => (
    <div className="grid gap-6 md:grid-cols-2">
      <Skeleton className="h-[400px] w-full" />
      <Skeleton className="h-[400px] w-full" />
    </div>
  ),
});

export function DynamicAdminDashboard() {
  return <AdminDashboard />;
}
