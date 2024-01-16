import React, { useState } from "react";
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      const userData = { username, password };
      onLogin(userData);
      setSuccessMessage("Correct");
    } else {
      setError("Incorrect, try again.");
    }
  };

  return (
    <div className="login-container">
      <label className="label" htmlFor="username">Username</label>
      <input
        className="input"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="label" htmlFor="password">Password</label>
      <input
        className="input"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <a className="forgot-password" href="/">Olvidé mi contraseña</a>
    </div>
  );
};

export default Login;
