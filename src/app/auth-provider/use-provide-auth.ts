import { useAuthInfoLocalStorage } from "./use-auth-info-local-storage";

interface Signin {
  username: string;
  password: string;
}

export interface Auth {
  isAuthenticated: boolean;
  info?: Signin;
  signin: (args: Signin, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

export const useProvideAuth = (): Auth => {
  const { authInfo, setAuthInfo, removeAuthInfo } = useAuthInfoLocalStorage();

  const signin = (newUserData: Signin, cb: () => void): void => {
    setAuthInfo(newUserData);
    cb();
  };

  const signout = (cb: () => void): void => {
    removeAuthInfo();
    cb();
  };

  return {
    isAuthenticated: !!authInfo?.username && !!authInfo?.password,
    info: authInfo,
    signin,
    signout,
  };
};
