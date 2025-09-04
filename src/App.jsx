import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
<<<<<<< HEAD
import AppLayout from "./components/layout/AppLayout"
import useAuth from "./hooks/useAuth"
import { jwtDecode } from "jwt-decode"

function App() {

  const { token, logout } = useAuth();
=======
import useAuth from "./hooks/useAuth"
import { jwtDecode } from "jwt-decode"
import AppLayout from "./components/layout/AppLayout"
import Trips from "./pages/Trips"
import AddTrip from "./pages/AddTrip"
import TripInfo from "./pages/TripInfo"
import EditTrip from "./pages/EditTrip"

function App() {


 const { token, logout } = useAuth();
>>>>>>> 14a2e89ade2639c36c343cf83862af3f35cedfb4

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

      <Route element={<ProtectedRoutes />}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/add" element={<AddTrip />} />
        <Route path="/trips/edit/:id" element={<EditTrip />} />
        <Route path="/trips/:id" element={<TripInfo />} />

      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
