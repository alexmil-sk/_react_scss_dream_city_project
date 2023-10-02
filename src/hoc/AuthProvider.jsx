import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

	const [user, setUser] = useState({email: null, pass: null});

	function signin(userMail, userPass, cb) {
		setUser({ email: userMail, pass: userPass });
		cb();
	}

	function signout(cb) {
		setUser({ email: null, pass: null });
		cb();
	}

	const value = { user, signin, signout };

	return <AuthContext.Provider value={value }>
		{children}
	</AuthContext.Provider>
}

export default AuthProvider 