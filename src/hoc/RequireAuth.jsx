import { useLocation, Navigate } from "react-router-dom";
import useAuth from "/src/hook/useAuth.js";

function RequireAuth({ children }) {
	const location = useLocation();
	const {user} = useAuth();

	if (!user.email || !user.pass) return <Navigate to="/login" state={{ from: location }} />;

	return children;
}

export default RequireAuth;