import { createContext } from 'react';

function noop() {
  return (jwtToken?: string | undefined, id?: string | undefined) => {};
}

export const AuthContext = createContext({
  token: '',
  userId: '',
  login: noop(),
  logout: noop(),
  isAuthenticated: false,
  me: null,
});
