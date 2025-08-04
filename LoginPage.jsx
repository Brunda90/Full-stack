import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [internName, setInternName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (internName.trim()) {
      onLogin(internName);
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1920&q=80
')] bg-cover">
      <div className="bg-white bg-opacity-80 p-10 rounded-2xl shadow-2xl max-w-sm w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-orange-600">Welcome Intern</h1>
        <p className="mb-6 text-gray-700">Access your dashboard by logging in</p>
        <input
          type="text"
          placeholder="Intern Name"
          value={internName}
          onChange={(e) => setInternName(e.target.value)}
          className="mb-4 p-3 w-full border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
