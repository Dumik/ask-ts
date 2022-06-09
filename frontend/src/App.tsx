import './App.css';
import { useAuth } from './hooks';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from 'context';

function App() {
  const { userId, login, logout, token, me } = useAuth();
  const isAuthenticated: boolean = !!token;

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuthenticated, me }}>
      <BrowserRouter>
        <Routes isAuthenticated={isAuthenticated} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
