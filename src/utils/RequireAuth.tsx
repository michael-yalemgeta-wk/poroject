import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './auth';

type Props = { children: ReactNode };

export default function RequireAuth({ children }: Props) {
  const location = useLocation();
  if (isAuthenticated()) return <>{children}</>;
  return <Navigate to="/admin/login" replace state={{ from: location }} />;
}
