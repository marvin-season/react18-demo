import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
import { NotificationProvider } from "components/notification";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NotificationProvider>{children}</NotificationProvider>
    </>
  );
};
