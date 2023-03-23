import { createContext, useContext, useEffect, useState } from "react";
import { onUserStateChange } from "../apis/firebase.js";

export interface IContext {
	user: { isAdmin?: boolean; uid?: string };
	uid?: string;
}
const AuthContext = createContext<IContext | null>(null);

export function ContextShoppy({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<{ isAdmin?: boolean; uid?: string }>({});
	useEffect(() => {
		onUserStateChange(setUser);
	}, []);
	const uid = user?.uid;

	const value = { user, uid };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
