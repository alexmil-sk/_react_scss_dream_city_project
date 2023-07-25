import { useContext } from "react";
import { AuthContext } from '/src/hoc/AuthProvider.jsx';

function useAuth() {
	return useContext(AuthContext);
}

export default useAuth;