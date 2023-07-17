import { User, demoUser } from "./auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(
    localStorageKey,
    `${JSON.stringify(user)}token==`,
  );
  return user;
};

export const login = async (data: User) => {
  return handleUserResponse({ user: demoUser });
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    return Promise.reject(data);
  }
};

export const register = async (data: User) => {
  return handleUserResponse({ user: demoUser });
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    return Promise.reject(await response.json());
  }
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
  return null;
};
