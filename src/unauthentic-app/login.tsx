import { FormEvent } from "react";
import { login } from "context/auth-provider";
export const LoginScreen = () => {
  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    login({ username, password });
  };
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Passwrod</label>
          <input type="text" id="password" />
        </div>
        <div>
          <button type="submit">登录</button>
        </div>
      </form>
    </>
  );
};
