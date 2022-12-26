import { Navigate, Outlet } from "react-router-dom";
import SignIn from "./auth/SignIn";
import Home from "./pages/Home";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};

export default ProtectedRoutes;