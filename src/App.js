import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path="/register" element={<RegisterForm setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
