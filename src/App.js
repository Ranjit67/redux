import { useSelector } from "react-redux";
import Counter from "./components/Counter";

import Headers from "./components/Header";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
function App() {
  const authState = useSelector((state) => state.auth);
  return (
    <>
      <Headers />
      {authState.auth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
