import "./App.css";

import UnauthenticApp from "unauthentic-app";
import { useAuth } from "context/auth-context";
import UserScreen from "views/user-screen";
import { useNotification } from "components/notification";
import { Providers } from "context";
function App() {
  const { user } = useAuth();
  const notification = useNotification();
  console.log("notification", notification);

  notification({
    message: "message",
  });
  return (
    <div className="App">
      <Providers>
        {user?.username}
        {!user?.username ? <UnauthenticApp /> : <UserScreen />}
      </Providers>
    </div>
  );
}

export default App;
