import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { IUser } from "../interfaces/IUser";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    const data = await api.signIn(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const signOut = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
