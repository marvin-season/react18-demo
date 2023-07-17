import "./App.css";

import UnauthenticApp from "unauthentic-app";
import { useAuth } from "context/auth-context";
import UserScreen from "views/user-screen";
function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="App">
      {user?.username}
      {!user?.username ? <UnauthenticApp /> : <UserScreen />}
    </div>
  );
}

export default App;
