import { createContext } from "react";
import { IUser } from "../interfaces/IUser";

export interface IAuthContext {
  user: IUser | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext>(null!);

