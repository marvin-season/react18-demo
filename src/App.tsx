import "./App.css";

import UnauthenticApp from "unauthentic-app";
import { useAuth } from "context/auth-context";
import UserScreen from "views/user-screen";
import { useRequest } from "utils/http";
function App() {
  const { user } = useAuth();
  const request = useRequest();
  return (
    <div className="App">
      {user?.username}
      {!user?.username ? <UnauthenticApp /> : <UserScreen />}
    </div>
  );
}

export default App;
