import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="contact-info">
          <p>📞 <strong>+123-456-7890</strong></p>
          <p>✉️ <strong>hello@agendigy.com</strong></p>
          <p>🌐 <strong>www.agendigy.com</strong></p>
          <p>🏠 <strong>123 Anywhere St., Any City</strong></p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="login-logo">
            <img src="logoadendify.jpg" alt="Agendify Logo" />
            <img src="/assets/logo.png" alt="Adendify Logo" />
            <h1>Agendify</h1>
          </div>
          <h2>LOGIN TO YOUR ACCOUNT</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Username :</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="login-footer">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
