import React, { useState } from "react";
import users from '../bbdd/users'; // Suponiendo que users.js es donde tienes la base de datos de usuarios
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleLogin = () => {
        const user = users.find(u => u.email === username && u.password === password);

        if (user) {
            const userData = { username: user.nombre + ' ' + user.apellido, userId: user.id, admin: user.admin };
            onLogin(userData);  // Llama a la función onLogin pasada como prop
            setSuccessMessage("Login successful!");
            setError(null);
            console.log("Usuario válido:", user);
        } else {
            setError("Incorrect email or password.");
            setSuccessMessage(null);
            console.log("Usuario no válido");
        }
    };

    return (
        <div className="login-main">
            <div className="form-container">
                <h2>Sign In</h2>
                <form className="form-login" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <label>
                        <input
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Email"
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
