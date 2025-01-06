import React, { useState } from "react";
import api from "../api";
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleLogin = async () => {
        try {
            const loginData = { email: username, password: password };
            console.log("Login data:", loginData); 
            // Realizamos la llamada POST al backend
            const response = await api.post("/users/login", {
                email: username,
                password: password
            });

            const user = response.data;
            const userData = {
                username: user.name + " " + user.lastname,
                userId: user.id,
                admin: user.admin,
            };

            onLogin(userData);
            setSuccessMessage("Login successful!");
            setError(null);
        } catch (err) {
            // Si hay un error
            setError("Incorrect email or password.");
            setSuccessMessage(null);
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





/* 
do not delete
import React, { useState } from "react";
import users from '../bbdd/users';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleLogin = () => {
        const user = users.find(u => u.email === username && u.password === password);

        if (user) {
            const userData = { username: user.name + ' ' + user.lastname, userId: user.id, admin: user.admin };
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
 */