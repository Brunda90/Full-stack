import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  const [internName, setInternName] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage onLogin={setInternName} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard internName={internName} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
