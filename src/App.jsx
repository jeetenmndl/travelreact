import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import AppLayout from "./components/layout/AppLayout"
import useAuth from "./hooks/useAuth"
import { jwtDecode } from "jwt-decode"

function App() {

  const { token, logout } = useAuth();

  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;

      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        if (currentTime > decodedToken?.exp) {
          logout();
          return <Navigate to="/login" />;
        }
      }

      if (!token || !userId) {
        logout();
        return <Navigate to="/login" />;
      }

      return <AppLayout />;
    } catch (err) {
      console.error(err);
      logout();
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ProtectedRoutes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
