import { createContext, type ReactNode } from "react";

import { type Auth, useProvideAuth } from "./use-provide-auth";

export const AuthContext = createContext<Auth | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const value = useProvideAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
