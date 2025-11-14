import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

function App() {
  const [username, setUsername] = useState(null);

  const handleLogin = (name) => {
    setUsername(name);
  };

  const handleLogout = () => {
    setUsername(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {!username ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <ChatPage username={username} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
