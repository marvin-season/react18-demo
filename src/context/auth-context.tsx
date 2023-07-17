import React, { ReactNode, useEffect, useState } from "react";
import * as auth from "context/auth-provider";

export type User = {
  username: string;
  password: string;
};
export const demoUser: User = {
  username: "demo",
  password: "demo",
};

type AuthContextProps = {
  user: User | null;
  login: (form: User) => Promise<void>;
  register: (form: User) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(demoUser);
  }, []);

  const login = (user: User) => auth.login(user).then(setUser);
  const register = (user: User) => auth.register(user).then(setUser);
  const logout = () => auth.logout().then(setUser);

  return (
    <>
      <AuthContext.Provider value={{ user, login, register, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
