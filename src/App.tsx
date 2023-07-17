import React, { useContext } from "react";
import "./App.css";

import UnauthenticApp from "unauthentic-app";
import { useAuth } from "context/auth-context";
import UserScreen from "views/user-screen";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">{user ? <UnauthenticApp /> : <UserScreen />}</div>
  );
}

export default App;
