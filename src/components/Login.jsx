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
            console.log("🔑 Login data:", loginData);

            // Llamada al backend
            const response = await api.post("/users/login", loginData);
            const user = response.data;

            console.log("📥 Respuesta del backend:", user);

            // Validar si el backend envió el token
            const token = user.token;  // Asegúrate que el backend devuelve 'token'

            if (token) {
                // Guardar token en localStorage
                localStorage.setItem('authToken', token);
                console.log("✅ Token guardado en localStorage:", token);
            } else {
                console.error("❌ No se recibió el token del backend.");
                setError("No se recibió el token. Intenta de nuevo.");
                return;  // Salir si no hay token
            }

            // Guardar información del usuario
            const userData = {
                username: user.name + " " + user.lastname,
                userId: user.id,
                admin: user.admin,
            };
            localStorage.setItem('userDetails', JSON.stringify(userData));
            console.log("📝 Datos del usuario guardados:", userData);

            // Notificar al componente padre que el usuario ha iniciado sesión
            onLogin(userData);

            setSuccessMessage("✅ ¡Inicio de sesión exitoso!");
            setError(null);
        } catch (err) {
            console.error("❌ Error al iniciar sesión:", err);
            setError("Correo o contraseña incorrectos.");
            setSuccessMessage(null);
        }
    };

    return (
        <div className="login-main">
            <div className="form-container">
                <h2>Iniciar Sesión</h2>
                <form className="form-login" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                    <label>
                        <input
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Correo electrónico"
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            required
                        />
                    </label>
                    <button type="submit">Entrar</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <a className="forgot-password" href="/">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="img">
                <img src="moonlanding-hotel-logo.png" alt="Logo" />
            </div>
        </div>
    );
};

export default Login;





/* import React, { useState } from "react";
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
            // La llamada al backend
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
            // Mensaje de error
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

 */