import type { ReactNode } from "react";

import { useLocation, Navigate } from "react-router-dom";

import { useAuth } from "./auth-provider/use-auth";

const RedirectAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.isAuthenticated || !auth?.info?.username) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RedirectAuth;
