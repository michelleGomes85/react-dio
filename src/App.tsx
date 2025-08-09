import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login";
import Feed from "./pages/feed";
import { AuthContextProvider } from "./context/auth";
import Register from "./pages/register";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
