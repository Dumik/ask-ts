import './App.css';
import { useAuth } from './hooks';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  const { userId, login, logout, token } = useAuth();
  const isAuthenticated = !!token;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes isAuthenticated={isAuthenticated} />
      </BrowserRouter>
    </div>
  );
}

export default App;
