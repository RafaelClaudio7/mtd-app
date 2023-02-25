import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout= async () => {
    await auth.signOut();
    navigate('/')
  }

  return <div className="App">
    <Home></Home>
  </div>;
}

export default App;
