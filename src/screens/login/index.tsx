import { FormEvent } from "react";

export const LoginScreen = () => {
  const login = (params: { username: string; password: string }) => {
    fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response: Response) => {
      if (response.ok) {
        console.log(response);
      }
    });
  };
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
          <button type="submit">提交</button>
        </div>
      </form>
    </>
  );
};
