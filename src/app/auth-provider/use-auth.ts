import { useContext } from "react";

import type { Auth } from "./use-provide-auth";
import { AuthContext } from "./AuthProvider";

export const useAuth = (): Auth | null => {
  return useContext(AuthContext);
};
