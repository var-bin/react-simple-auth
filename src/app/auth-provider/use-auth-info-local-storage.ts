import useLocalStorageState from "use-local-storage-state";

interface SigninResponse {
  username: string;
  password: string;
}

export const localStorageKey = "react-simple-auth.authInfo";

export const useAuthInfoLocalStorage = () => {
  const [authInfo, setAuthInfo, { removeItem }] =
    useLocalStorageState<SigninResponse>(localStorageKey, {
      defaultValue: {
        username: "",
        password: "",
      },
    });

  return {
    authInfo,
    setAuthInfo,
    removeAuthInfo: removeItem,
  };
};
