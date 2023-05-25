import { createContext, useContext } from 'react';

export const AuthContext = createContext({});

AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const ctx = {};

  return <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
