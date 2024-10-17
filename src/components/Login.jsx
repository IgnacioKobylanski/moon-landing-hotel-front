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
    <div className="login-main">
      <div className="form-container">
        <h2>Sign In</h2>
        <form className="form-login" onSubmit={(e) => {e.preventDefault(); handleLogin();}}>
          <label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <a className="forgot-password" href="/">Forgot Password?</a>
      </div>
      <div className="img">
        <img src="moonlanding-hotel-logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
