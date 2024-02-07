import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Authoring from './Pages/Authoring';
import Tools from './Pages/Tools';
import Login from './Pages/Login';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'yourUsername' && password === 'yourPassword') {
      setAuthenticated(true);
    }
  };

  // Redirect to home if already authenticated
  if (authenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {!authenticated && (
        <section>
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </section>
      )}

      {authenticated && (
        <>
          <section>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/authoring" element={<Authoring />} />
              <Route path="/tools" element={<Tools />} />
            </Routes>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
