import { useState } from "react";
import { LoginScreen } from "./login";
import { RegistryScreen } from "./registry";

export default function UnauthenticApp() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <>
      {isLoginPage ? <LoginScreen /> : <RegistryScreen />}
      <button
        onClick={() => {
          setIsLoginPage(!isLoginPage);
        }}
      >
        {isLoginPage ? "去注册" : "去登录"}
      </button>
    </>
  );
}
